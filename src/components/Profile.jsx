export default function Profile() {
  return (
    <section className="flex flex-col items-start gap-8 md:flex-row" aria-labelledby="profile-title">
      <img
        className="h-[9.375rem] w-[9.375rem] shrink-0 rounded-full object-cover"
        src="/imgs/felix_gehring_1_small.jpg"
        alt="Portrait of Felix Gehring"
      />
      <div>
        <h1 id="profile-title" className="mb-4 text-[1.75rem] font-light text-[#563590]">
          Hi, I'm Felix
        </h1>
        <p>
          I am a software developer from Ochtrup, Germany. If you would like to get in
          touch with me, please contact me at{" "}
          <a className="whitespace-nowrap" href="mailto:dev@felix-gehring.de">
            dev@felix-gehring.de
          </a>
          . Check out what I've done so far:
        </p>
      </div>
    </section>
  );
}
