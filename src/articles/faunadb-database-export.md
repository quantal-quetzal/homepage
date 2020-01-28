---
layout: article.liquid
title: Using FaunaDB with an Identity Provider with OpenID Connect
date: "2020-01-27"
permalink: "/articles/{{ date | date: '%Y/%m/%d' }}/{{title | slug}}/"
tags: ["FaunaDB", "OIDC"]
introduction: FaunaDB offers built-in user authentication, session and password management. While this is well-documented and easy to use, working with an external authentication and identity service is tricky. In this article I will show you my solution.
---

### Built-in user management
FaunaDB's regular authentication mechanism works as expected: you enter a username along with a secret password and receive an access token in return.
This is explained in the [official documentation](https://docs.fauna.com/fauna/current/tutorials/authentication/user.html). While it may seem intimidating at first, there are actually these two commands that you want to know (assuming you already know the basics of Fauna and FQL)

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

```fql
Login(
  Match(Index("users_by_email"), "alice@site.example"),
  { password: "secret password" },
)
```
