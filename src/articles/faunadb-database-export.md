---
layout: article.liquid
title: Using FaunaDB with an Identity Provider
date: "2020-01-28"
changefreq: "monthly"
permalink: "/articles/{{ date | date: '%Y/%m/%d' }}/{{title | slug}}/"
tags: ["FaunaDB", "Identity"]
introduction: FaunaDB offers built-in user authentication, session and password management. While this is well-documented and relatively easy to use, working with an external authentication and identity service is tricky. In this article I will show you how to store users and log them in without ever touching anything like a secret password.
---

### Built-in user management

FaunaDB's regular authentication mechanism works as expected: you enter a username along with a secret password and receive an access token in return.
This is explained in the [official documentation](https://docs.fauna.com/fauna/current/tutorials/authentication/user.html). While it may seem intimidating at first, there are actually these two commands that you will want to know (assuming you already know the basics of Fauna and FQL)

Use this FQL query to create a new user in the collection where you want to store your user documents. It doesn't have to be called "users".

```fql
Create(
  Collection("users"),
  {
    credentials: { password: "secret password" },
    data: {
      email: "alice@site.example",
    },
  }
)
```

After the user has been created, the following function returns a session token that can be passed in the HTTP header for every following request. This listing assumes that an index "users_by_email" has been created on collection "users" and term "email".

```fql
Login(
  Match(Index("users_by_email"), "alice@site.example"),
  { password: "secret password" },
)
```

### Register and log in a user without a password

Using an identity providing service frees the user from yet another password, and the app developer from having a login screen and keeping the password save. Instead all you usually get is a JWT token with some information about the user, like his or her email address. Thus, when the user tries to log in for the first time, you create the user document with all the relevant data from the identity provider, but, this time without the `credentials` part.

> **Please not that with this technique, EVERYBODY with an account at that identity provider, can register in your application. You might want to add an extra flag, like `authorized` to every user, which you can later check before creating a token for that user, in case you want to control who can actually log into your app.**

```fql
Create(
  Collection("users"),
  {
    data: {
      email: "alice@site.example",
      authorized: false
    },
  }
)
```

With a server key you can create a token for the user, now. As written before, you might want to check and control whether this is actually a user that you want to be able to log into your app, e.g. by checking and possibly changing the `authorized` flag. This command actually creates a document in the special `Tokens`-collection. (`IsCollection(Tokens())` returns "true")

```
Create(
  Tokens(), {
    instance: Select("ref", Get(Match(Index('users_by_email'), "alice@site.example")))
  }
)
```

The response should look like this one, below.

```
{
  "ref": Ref(Ref("tokens"), "255813306151862784"),
  "ts": 1580221429880000,
  "instance": Ref(Collection("User"), "255810946021196290"),
  "secret": "fnEDjNTYugACAANnbgEt0AICwdiuwWvpOlQ-FbmmdR4RmSemjXA"
}
```

### Allow users to logout

This is where it becomes really obvious that either the documentation is missing something major, or FaunaDB was not designed for this use case. The passwordless login process might seem a bit odd, but the logout process is absolutely counter-intuitive and confusing.

The main problem is that the `Logout`-function ([as described in the documentation, here](https://docs.fauna.com/fauna/current/api/fql/functions/logout)), does not offer the possibility to call this function on another user. Instead, it always logs out the user that calls the function.

That leaves you with three options:

1. Let the client call the function him- or herself. This might be what the API designers intended and may work out well if the front-end/client uses the native FaunaDB library to interact with the database directly. If, however, the client-database interaction works through serverless functions (e.g. Netlify Functions) or the client uses the modern GraphQL interface, this approach simply does not work.
2. The server impersonates the user and uses his or her access token to log him or her out of the system. I haven't actually tried this approach but it feels very wrong. The access token would have to be passed around more than necessary and the API was certainly not meant to be used this way.
3. The token references (not the secrets) are stored in an extra collection, such that they can be referred to and explicitely deleted from the database later. This approach is also used in the GitHub Gist that is linked to in the next section. While this is certainly the most flexible solution, it requires a considerable amount of extra code and a utility collection in the database itself. This is what I consider a smell.

As you can see, I have not found a satisfactory solution for logging out users, yet. If you know of a solution that I may have missed, please leave a comment.

### Invalidate expired tokens

FaunaDB tokens don't have a specified time to live (TTL). Thus, tokens never expire, and once a user has received a token he or she may access the database forever. That also holds true for attackers who got their hands on a valid token. That is why automatically invalidating a token after a reasonable time, and thus forcing the user to either refresh the token or log in again, makes sense.

While this is a complex topic which I won't cover here, I have found [this GitHub Gist](https://gist.github.com/colllin/fd7a40bb4f0f16603e68db0e6621369f) that shows some code on how a basic implementation could look like. However, if I understand it correctly, it lacks the possibility to refresh an expired session and it depends on an external system that runs the token deletion on a regular basis. At this time, the latter is not possible for instance with Netlify functions.

That's all! I wish someone told me the things I noted down here, when I first started using FaunaDB in productive environments. Maybe this article saves somebody else some trouble now. ![terminator](/imgs/terminator.png)
