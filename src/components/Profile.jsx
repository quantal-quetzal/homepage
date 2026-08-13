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
          I am a full-stack developer from Ochtrup, Germany, specializing in TypeScript,
          React, Java, AWS, and AI integration. I enjoy combining modern technologies with
          a pragmatic approach to legacy systems and communicating across technical and
          non-technical teams. You can reach me at{" "}
          <a className="whitespace-nowrap" href="mailto:dev@felix-gehring.de">
            dev@felix-gehring.de
          </a>
          .
        </p>
      </div>
    </section>
  );
}
