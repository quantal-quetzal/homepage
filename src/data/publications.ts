export interface Publication {
  path: `/publikationen/${string}`;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  authors: string;
  date: string;
  pages: string;
  pdfUrl: `/resources/${string}.pdf`;
  coverUrl: `/imgs/${string}.webp`;
  coverAlt: string;
}

export const publications = {
  dropout: {
    path: "/publikationen/drop-out-nachwuchsleistungssport",
    title: "Drop-out im Nachwuchsleistungssport",
    subtitle:
      "Einflussfaktoren, Entwicklungsumfeld und Handlungsmöglichkeiten für die Trainerpraxis im Rettungssport der DLRG",
    description:
      "Die Arbeit untersucht Einflussfaktoren auf Drop-out im Nachwuchsleistungs- und Schwimmsport und leitet konkrete Handlungsfelder für die Trainerpraxis im Rettungssport ab.",
    category: "DOSB-Trainer-B · Leistungssport",
    authors: "Felix Gehring",
    date: "17. August 2026",
    pages: "30 Seiten",
    pdfUrl:
      "/resources/Gehring_Felix_Dropout_Nachwuchsleistungssport.pdf",
    coverUrl: "/imgs/publikation-drop-out.webp",
    coverAlt: "Titelseite der Hausarbeit Drop-out im Nachwuchsleistungssport",
  },
  performance: {
    path: "/publikationen/leistungskontrolle-im-rettungssport",
    title: "Leistungskontrolle im Rettungssport",
    subtitle:
      "Anpassung der Critical Swim Speed zur Trainingssteuerung im Rettungsschwimmen",
    description:
      "Die Arbeit überträgt die Critical Swim Speed auf den Rettungssport und zeigt, wie standardisierte Leistungstests die langfristige Trainingssteuerung unterstützen können.",
    category: "Trainer-C · Rettungssport",
    authors: "Sabrina Ternes & Felix Gehring",
    date: "14. November 2017",
    pages: "15 Seiten",
    pdfUrl: "/resources/Hausarbeit_Trainer_C_Ternes_Gehring.pdf",
    coverUrl: "/imgs/publikation-critical-swim-speed.webp",
    coverAlt: "Titelseite der Hausarbeit Leistungskontrolle im Rettungssport",
  },
} as const satisfies Record<string, Publication>;

export type PublicationEntry =
  (typeof publications)[keyof typeof publications];

export const publicationList: Publication[] = Object.values(publications);
