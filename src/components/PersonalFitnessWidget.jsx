import { useEffect } from "react";

const profileUrl =
  "https://www.personalfitness.de/suche/trainer/12032/felix-gehring-steinfurt.html";

export default function PersonalFitnessWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.personalfitness.de/widget.js";
    script.async = true;
    script.dataset.personalFitnessWidgetScript = "true";
    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <section className="bg-white" aria-labelledby="personalfitness-reviews">
      <div className="mx-auto grid max-w-[76rem] gap-10 px-5 py-16 sm:px-8 md:grid-cols-[14rem_minmax(0,1fr)] md:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
            Geprüftes Profil
          </p>
          <h2
            id="personalfitness-reviews"
            className="mt-3 text-3xl font-bold leading-tight text-[#13251f]"
          >
            Bewertungen & Erfahrungen
          </h2>
          <a
            className="mt-7 inline-block"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.personalfitness.de/embleme/12032.png"
              alt="Bewertungen zu Felix Gehring"
              width="120"
              height="137"
              loading="lazy"
            />
          </a>
        </div>
        <div data-pf-widget="12032" />
      </div>
    </section>
  );
}
