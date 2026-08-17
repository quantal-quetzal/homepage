import { ArrowRight, Code2, Dumbbell, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ProfileChoice {
  to: "/software" | "/personal-training";
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  side: "software" | "training";
}

const choices = [
  {
    to: "/software",
    eyebrow: "IT-Beratung & Entwicklung",
    title: "Softwareentwickler",
    description: "TypeScript, React, Java, AWS und AI-Integration.",
    action: "Zum Entwicklerprofil",
    image: "/imgs/felix-gehring-software.webp",
    imageAlt: "Felix Gehring als Softwareentwickler",
    icon: Code2,
    side: "software",
  },
  {
    to: "/personal-training",
    eyebrow: "Personal Training",
    title: "Trainer",
    description: "Schwimmen, Kraft, Athletik und individuelle Trainingsplanung.",
    action: "Zum Trainerprofil",
    image: "/imgs/felix-gehring-personal-trainer.webp",
    imageAlt: "Felix Gehring als Personal Trainer",
    icon: Dumbbell,
    side: "training",
  },
] satisfies ProfileChoice[];

function Choice({ choice }: { choice: ProfileChoice }) {
  const Icon = choice.icon;
  const isSoftware = choice.side === "software";

  return (
    <Link
      className={`group relative isolate flex min-h-[50svh] overflow-hidden no-underline md:min-h-screen ${
        isSoftware ? "bg-[#17191d] text-white" : "bg-[#dce9dc] text-[#153b32]"
      }`}
      to={choice.to}
    >
      <div className="absolute right-7 top-7 -z-10 h-36 w-28 overflow-hidden rounded-sm transition duration-500 ease-out group-hover:translate-y-[-0.25rem] sm:right-10 sm:top-10 md:h-[clamp(12rem,24vh,18rem)] md:w-[clamp(9rem,18vw,14rem)] lg:right-14 lg:top-14 xl:right-20 xl:top-20">
        <img
          className={`h-full w-full object-cover ${
            isSoftware
              ? "object-top opacity-75"
              : "origin-top translate-y-5 scale-[1.15] object-[center_22%] opacity-90"
          }`}
          src={choice.image}
          alt={choice.imageAlt}
        />
      </div>
      <span
        className={`absolute left-7 top-7 text-xs font-bold tabular-nums sm:left-10 sm:top-10 lg:left-14 lg:top-14 xl:left-20 xl:top-20 ${
          isSoftware ? "text-white/60" : "text-[#2b6655]"
        }`}
        aria-hidden="true"
      >
        {isSoftware ? "01" : "02"}
      </span>
      <div className="flex w-full flex-col justify-end p-7 sm:p-10 lg:p-14 xl:p-20">
        <div className="max-w-xl">
          <div
            className={`mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] ${
              isSoftware ? "text-white/70" : "text-[#2b6655]"
            }`}
          >
            <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
            <span>{choice.eyebrow}</span>
          </div>
          <h1
            className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
              isSoftware ? "text-white" : "text-[#153b32]"
            }`}
          >
            {choice.title}
          </h1>
          <p
            className={`mt-4 max-w-md text-lg leading-relaxed md:min-h-[3.5rem] ${
              isSoftware ? "text-white/80" : "text-[#36564d]"
            }`}
          >
            {choice.description}
          </p>
          <span
            className={`mt-7 inline-flex items-center gap-3 border-b pb-1 font-bold ${
              isSoftware ? "border-white/60" : "border-[#397967]"
            }`}
          >
            {choice.action}
            <ArrowRight
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
              size={19}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function WelcomePage() {
  return (
    <main className="grid min-h-screen md:grid-cols-2" aria-label="Profil auswählen">
      {choices.map((choice) => (
        <Choice key={choice.to} choice={choice} />
      ))}
    </main>
  );
}
