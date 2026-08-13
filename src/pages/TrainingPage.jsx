import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import PersonalFitnessWidget from "../components/PersonalFitnessWidget";
import useFavicon from "../hooks/useFavicon";

const profileUrl =
  "https://www.personalfitness.de/suche/trainer/12032/felix-gehring-steinfurt.html";
const contactUrl =
  "mailto:fit@felix-gehring.de?subject=Anfrage%20Personal%20Training";
const barbellTrainingUrl =
  "https://www.trainerakademie-koeln.de/ausbildungen/langhanteltrainerinnenausbildung";

export default function TrainingPage() {
  useFavicon("/favicons/fit.svg");

  return (
    <div className="min-h-screen bg-[#f6f8f2] text-[#13251f]">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-[76rem] items-center justify-between px-5 py-5 text-sm font-bold sm:px-8">
          <Link className="text-[#153b32] no-underline" to="/personal-training">
            Felix Gehring · Personal Training
          </Link>
          <Link
            className="inline-flex items-center gap-2 text-[#153b32] no-underline"
            to="/"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            Auswahl
          </Link>
        </nav>
      </header>

      <main>
        <section className="bg-[#dce9dc]">
          <div className="mx-auto grid min-h-[72svh] w-full max-w-[76rem] items-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-[minmax(0,1fr)_18rem] md:py-28 lg:gap-24">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                Personal Training · Ochtrup & Steinfurt
              </p>
              <h1 className="text-4xl font-bold leading-tight text-[#153b32] sm:text-5xl">
                Dein Ziel gibt die Richtung vor.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#36564d] sm:text-xl">
                Individuelles Schwimmtraining trifft auf gezieltes Kraft- und
                Athletiktraining. Vom Einstieg bis zum Leistungssport beginnen
                wir genau dort, wo du heute stehst.
              </p>
              <a
                className="mt-8 inline-flex items-center gap-3 border border-[#153b32] bg-[#153b32] px-5 py-3 font-bold text-white no-underline transition hover:bg-transparent hover:text-[#153b32]"
                href={contactUrl}
              >
                Training anfragen
                <ArrowUpRight aria-hidden="true" size={19} />
              </a>
            </div>
            <img
              className="mx-auto aspect-square w-48 rounded-full object-cover object-[center_22%] sm:w-56 md:w-full"
              src="/imgs/felix-gehring-personal-trainer.jpg"
              alt="Felix Gehring, Personal Trainer in Ochtrup und Steinfurt"
              width="700"
              height="932"
            />
          </div>
        </section>

        <section className="mx-auto max-w-[76rem] px-5 py-16 sm:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                Mein Ansatz
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#13251f] sm:text-4xl">
                Persönlich geplant. Klar erklärt. Nachhaltig aufgebaut.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[#344b43]">
              <p>
                Du möchtest schwimmen lernen, dich im Wasser sicherer fühlen
                oder deine Technik und Leistung gezielt verbessern? Dein
                Training richtet sich nach deinen Voraussetzungen und deinem
                Ziel.
              </p>
              <p>
                Im Wasser arbeiten wir an Sicherheit, Wassergefühl und einer
                effizienten Technik. Funktionelles Krafttraining, Langhantel und
                Kettlebell kommen dort hinzu, wo sie dich belastbarer machen und
                deine Leistung sinnvoll ergänzen.
              </p>
              <p>
                Daraus entsteht eine Trainingsplanung, die zu deinem Alltag und
                deinem aktuellen Leistungsstand passt. Kein Programm von der
                Stange, sondern ein nachvollziehbarer Weg, den wir gemeinsam
                weiterentwickeln.
              </p>
              <p className="border-l-2 border-[#397967] pl-5 font-bold text-[#13251f]">
                Meine Erfahrung reicht vom Einstieg ins Schwimmen bis zum
                Leistungssport. 2025 begleitete ich als Trainer eine Mannschaft
                der Altersklasse 13/14 auf dem Weg zum deutschen Meistertitel im
                Mehrkampf.
              </p>
            </div>
          </div>
        </section>

        <section
          id="qualifikation"
          className="border-t border-[#d9e0dc] bg-white text-[#13251f]"
        >
          <div className="mx-auto max-w-[76rem] px-5 py-16 sm:px-8 md:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
              Qualifikationen
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
              Fundiert trainieren.
            </h2>

            <div className="mt-10 grid border-t border-[#b9c8c0] md:grid-cols-2">
              <article className="border-b border-[#b9c8c0] py-10 md:border-b-0 md:border-r md:pr-12">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                  Schwimm- & Rettungssport
                </p>
                <h3 className="mt-3 text-2xl font-bold md:min-h-[4rem]">
                  DOSB-Trainer C Leistungssport im Rettungssport
                </h3>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-[#344b43] md:min-h-[7rem]">
                  Fundierte Technikvermittlung und leistungsorientierte Trainingsplanung
                  im Schwimm- und Rettungssport, vom sicheren Einstieg bis zur gezielten
                  Wettkampfvorbereitung.
                </p>
                <img
                  className="mt-8 h-auto w-[16.25rem] max-w-full"
                  src="/imgs/DLRG-T-C-0392097-signet.jpg"
                  alt="DOSB-Trainer C Leistungssport Rettungssport, Lizenz von Felix Gehring, gültig bis 31. Dezember 2028"
                  width="1417"
                  height="1045"
                  loading="lazy"
                />
              </article>
              <article className="py-10 md:pl-12">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                  Kraft & Athletik
                </p>
                <h3 className="mt-3 text-2xl font-bold md:min-h-[4rem]">
                  Langhanteltrainer der Trainerakademie Köln des DOSB
                </h3>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-[#344b43] md:min-h-[7rem]">
                  Fundierte Technikvermittlung und zielgerichtete Trainingsplanung mit der
                  Langhantel, als Grundlage für Kraft, Belastbarkeit und sportliche
                  Leistung.
                </p>
                <a
                  className="mt-8 inline-flex items-center gap-2 font-bold text-[#153b32]"
                  href={barbellTrainingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ausbildungsbeschreibung
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </article>
            </div>

            <div className="flex flex-col gap-6 border-t border-[#b9c8c0] pt-8 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex items-center gap-3 text-[#397967]">
                  <MapPin aria-hidden="true" size={22} />
                  <p className="text-sm font-bold uppercase tracking-[0.12em]">
                    Trainingsorte
                  </p>
                </div>
                <p className="mt-3 text-[#52665f]">
                  Outdoor, online, bei dir zu Hause oder im Fitnessstudio ·
                  Deutsch & Englisch
                </p>
              </div>
              <div className="md:text-right">
                <a className="block font-bold text-[#153b32]" href={contactUrl}>
                  fit@felix-gehring.de
                </a>
                <a
                  className="mt-3 inline-flex items-center gap-2 font-bold text-[#153b32]"
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Profil auf PersonalFitness.de
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <PersonalFitnessWidget />
      </main>
    </div>
  );
}
