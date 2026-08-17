import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import PersonalFitnessWidget from "../components/PersonalFitnessWidget";
import { publications } from "../data/publications";
import useFavicon from "../hooks/useFavicon";

const profileUrl =
  "https://www.personalfitness.de/suche/trainer/12032/felix-gehring-steinfurt.html";
const contactUrl =
  "mailto:fit@felix-gehring.de?subject=Anfrage%20Personal%20Training";
const examContactUrl =
  "mailto:fit@felix-gehring.de?subject=Vorbereitung%20auf%20Pr%C3%BCfung%20oder%20Rettungsnachweis";
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
          <div className="mx-auto grid min-h-[68svh] w-full max-w-[76rem] items-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-[minmax(0,1fr)_18rem] md:py-28 lg:gap-24">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#2b6655]">
                Personal Training · Ochtrup & Umgebung
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
              src="/imgs/felix-gehring-personal-trainer.webp"
              alt="Felix Gehring, Personal Trainer in Ochtrup und Umgebung"
              width="700"
              height="932"
            />
          </div>
        </section>

        <section className="bg-[#153b32] text-white">
          <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <div className="lg:sticky lg:top-8 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#9bc7b5]">
                Gezielte Vorbereitung
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                Wenn es darauf ankommt, trainieren wir konkret.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-[#d0ddd7]">
                Du bringst die Anforderungen mit. Ich übersetze sie in einen
                realistischen Trainingsplan und bereite dich gezielt auf den
                entscheidenden Termin vor.
              </p>
              <a
                className="mt-8 inline-flex items-center gap-3 border border-[#9bc7b5] px-5 py-3 font-bold text-white no-underline transition hover:bg-white hover:text-[#153b32]"
                href={examContactUrl}
              >
                Prüfung besprechen
                <ArrowUpRight aria-hidden="true" size={19} />
              </a>
            </div>

            <div className="border-t border-[#53746a]">
              <article className="grid gap-2 border-b border-[#53746a] py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <h3 className="text-lg font-bold text-white">
                  Polizei & Hochschule
                </h3>
                <p className="text-lg leading-relaxed text-[#d0ddd7]">
                  Vorbereitung auf sportliche Aufnahmeprüfungen, abgestimmt auf
                  die geforderten Disziplinen und dein aktuelles
                  Leistungsniveau.
                </p>
              </article>
              <article className="grid gap-2 border-b border-[#53746a] py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <h3 className="text-lg font-bold text-white">
                  Berufsausbildung
                </h3>
                <p className="text-lg leading-relaxed text-[#d0ddd7]">
                  Gezieltes Training für anstehende Zwischen- oder
                  Abschlussprüfungen, damit Technik und Ausdauer auch unter
                  Prüfungsdruck sitzen.
                </p>
              </article>
              <article className="grid gap-2 border-b border-[#53746a] py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <h3 className="text-lg font-bold text-white">
                  Rettungsfähigkeit
                </h3>
                <p className="text-lg leading-relaxed text-[#d0ddd7]">
                  Praxisnahe Vorbereitung auf den Nachweis, den dein Arbeitgeber
                  oder deine Schulleitung von dir verlangt.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f8f2] text-[#13251f]">
          <div className="mx-auto max-w-[76rem] px-5 py-16 sm:px-8 md:py-24">
            <div className="grid gap-8 border-b border-[#cbd6cf] pb-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:pb-16">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                  So arbeiten wir
                </p>
                <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                  Vom konkreten Ziel zu einem Plan, der in deinen Alltag passt.
                </h2>
              </div>
              <div className="self-end">
                <p className="max-w-2xl text-xl font-bold leading-relaxed text-[#153b32] sm:text-2xl">
                  Gutes Training beginnt mit einer ehrlichen Bestandsaufnahme.
                </p>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#445c54]">
                  Wir klären, was du erreichen musst, wo du heute stehst und wie
                  viel Zeit dir zur Verfügung steht. Daraus entsteht ein
                  nachvollziehbarer Plan mit realistischen Etappen und einem
                  klaren Zweck für jede Einheit.
                </p>
              </div>
            </div>

            <div className="grid gap-8 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:py-16">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                Im Training
              </p>
              <div className="grid gap-10 sm:grid-cols-2 sm:gap-0">
                <article className="sm:pr-10">
                  <h3 className="text-2xl font-bold">Im Wasser</h3>
                  <p className="mt-4 text-lg leading-relaxed text-[#445c54]">
                    Wir arbeiten präzise an Technik, Wassergefühl und
                    Sicherheit. Du verstehst nicht nur, was du verändern sollst,
                    sondern auch warum.
                  </p>
                </article>
                <article className="border-t border-[#cbd6cf] pt-10 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
                  <h3 className="text-2xl font-bold">An Land</h3>
                  <p className="mt-4 text-lg leading-relaxed text-[#445c54]">
                    Krafttraining, Langhantel und Kettlebell ergänzen das
                    Training dort, wo sie dich belastbarer machen und dein
                    sportliches Ziel unterstützen.
                  </p>
                </article>
              </div>
            </div>

            <div className="grid gap-3 border-y border-[#cbd6cf] py-7 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                Erfahrung
              </p>
              <p className="max-w-3xl text-lg font-bold leading-relaxed">
                Mein Blick reicht vom sicheren Einstieg absoluter
                Schwimmanfänger bis zum Leistungssport. 2025 begleitete ich als
                Trainer eine Mannschaft der Altersklasse 13/14 auf dem Weg zum
                deutschen Meistertitel.
              </p>
            </div>
          </div>
        </section>

        <section
          id="qualifikation"
          className="bg-white text-[#13251f]"
        >
          <div className="mx-auto max-w-[76rem] px-5 py-16 sm:px-8 md:py-24">
            <div className="grid gap-8 border-b border-[#cbd6cf] pb-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:pb-16">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                  Qualifikationen
                </p>
                <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                  Fachlich fundiert. Praktisch vermittelt.
                </h2>
              </div>
              <p className="max-w-2xl self-end text-lg leading-relaxed text-[#445c54]">
                Meine Ausbildungen decken beide Seiten des Trainings ab: präzise
                Technikarbeit im Wasser und methodisch sauberes Krafttraining an Land.
                Dieses Wissen fließt direkt in deine Planung und jede gemeinsame Einheit.
              </p>
            </div>

            <div>
              <article className="grid gap-8 border-b border-[#cbd6cf] py-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:py-14">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                    Im Wasser
                  </p>
                  <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
                    DOSB-Trainer C Leistungssport
                  </h3>
                  <p className="mt-3 text-[#60736c]">
                    DLRG · Rettungssport
                  </p>
                </div>
                <div className="grid items-start gap-8 sm:grid-cols-[1fr_16.25rem] sm:gap-10">
                  <p className="text-lg leading-relaxed text-[#445c54]">
                    Die DOSB-Lizenz steht für fundierte Technikvermittlung und
                    leistungsorientierte Trainingsplanung im Schwimm- und Rettungssport,
                    vom sicheren Einstieg bis zur gezielten Wettkampfvorbereitung.
                  </p>
                  <img
                    className="h-auto w-[16.25rem] max-w-full"
                    src="/imgs/DLRG-T-C-0392097-signet.jpg"
                    alt="DOSB-Trainer C Leistungssport Rettungssport der DLRG, Lizenz von Felix Gehring"
                    width="1417"
                    height="1045"
                    loading="lazy"
                  />
                </div>
              </article>

              <article className="grid gap-8 border-b border-[#cbd6cf] py-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:py-14">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                    An Land
                  </p>
                  <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
                    Langhanteltrainer
                  </h3>
                  <p className="mt-3 text-[#60736c]">
                    Trainerakademie Köln des DOSB
                  </p>
                </div>
                <div>
                  <p className="max-w-2xl text-lg leading-relaxed text-[#445c54]">
                    Die Ausbildung verbindet den technisch korrekten Einsatz der
                    Langhantel mit Didaktik und Trainingsmethodik. So kann ich
                    Langhanteltraining passend zur jeweiligen Sportart planen, vermitteln
                    und sicher in den Trainingsalltag integrieren.
                  </p>
                  <a
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[#153b32]"
                    href={barbellTrainingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ausbildung bei der Trainerakademie
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </div>
              </article>
            </div>

            <div className="grid gap-8 border-b border-[#cbd6cf] py-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
                  Vertiefende Einblicke
                </p>
                <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight">
                  Hausarbeiten aus der Trainerausbildung
                </h3>
              </div>
              <div>
                <p className="max-w-2xl text-lg leading-relaxed text-[#445c54]">
                  Für alle, die sich näher für Trainingssteuerung und die Arbeit mit
                  Nachwuchsathletinnen und -athleten interessieren.
                </p>
                <div className="mt-7 border-t border-[#cbd6cf]">
                  <Link
                    className="group flex items-start justify-between gap-6 border-b border-[#cbd6cf] py-5 text-[#153b32] no-underline"
                    to={publications.dropout.path}
                  >
                    <span>
                      <span className="block font-bold group-hover:underline">
                        Drop-out im Nachwuchsleistungssport
                      </span>
                      <span className="mt-1 block text-sm text-[#60736c]">
                        Trainer-B-Hausarbeit · 17. August 2026 · PDF
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                      size={18}
                    />
                  </Link>
                  <Link
                    className="group flex items-start justify-between gap-6 border-b border-[#cbd6cf] py-5 text-[#153b32] no-underline"
                    to={publications.performance.path}
                  >
                    <span>
                      <span className="block font-bold group-hover:underline">
                        Leistungskontrolle im Rettungssport
                      </span>
                      <span className="mt-1 block text-sm text-[#60736c]">
                        Trainer-C-Hausarbeit · mit Sabrina Ternes · 14. November 2017 · PDF
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                      size={18}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-8 pt-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
              <div className="flex items-center gap-3 text-[#397967]">
                <MapPin aria-hidden="true" size={22} />
                <p className="text-sm font-bold uppercase tracking-[0.12em]">
                  Training & Kontakt
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
                <p className="max-w-xl text-lg leading-relaxed text-[#445c54]">
                  In Ochtrup und Umgebung: outdoor, bei dir zu Hause oder im
                  Fitnessstudio. Online-Training nach Absprache, auf Deutsch oder Englisch.
                </p>
                <div className="sm:text-right">
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
          </div>
        </section>

        <PersonalFitnessWidget />
      </main>
    </div>
  );
}
