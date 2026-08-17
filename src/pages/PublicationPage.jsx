import { ArrowLeft, ArrowUpRight, Download, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function PublicationPage({ publication, relatedPublication }) {
  return (
    <div className="min-h-screen bg-[#f3f5ef] text-[#13251f]">
      <header className="border-b border-[#d9dfd8]">
        <nav className="mx-auto flex h-16 max-w-[72rem] items-center justify-between px-5 sm:px-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-[#153b32] no-underline transition-colors hover:text-[#397967]"
            to="/personal-training"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            Personal Training
          </Link>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#60736c]">
            Publikation
          </span>
        </nav>
      </header>

      <main className="mx-auto max-w-[72rem] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <section className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:gap-20">
          <article className="publication-enter lg:sticky lg:top-16 lg:pt-5">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#397967]">
              {publication.category}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] text-[#153b32] sm:text-5xl">
              {publication.title}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#445c54]">
              {publication.subtitle}
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-[#cbd6cf] py-5 text-sm">
              <div>
                <dt className="sr-only">Autorinnen und Autoren</dt>
                <dd className="font-bold text-[#153b32]">{publication.authors}</dd>
              </div>
              <div>
                <dt className="sr-only">Datum</dt>
                <dd className="text-[#60736c]">{publication.date}</dd>
              </div>
              <div>
                <dt className="sr-only">Umfang</dt>
                <dd className="text-[#60736c]">{publication.pages}</dd>
              </div>
            </dl>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#445c54]">
              {publication.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-3 bg-[#153b32] px-5 py-3 font-bold text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-[#245344]"
                href={publication.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText aria-hidden="true" size={19} />
                PDF öffnen
              </a>
              <a
                className="inline-flex items-center gap-3 border border-[#aebdb5] px-5 py-3 font-bold text-[#153b32] no-underline transition duration-200 hover:border-[#153b32] hover:bg-white"
                href={publication.pdfUrl}
                download
              >
                <Download aria-hidden="true" size={19} />
                Herunterladen
              </a>
            </div>
          </article>

          <a
            className="publication-enter publication-enter-delay group block overflow-hidden bg-white p-3 shadow-[0_1.5rem_4rem_rgba(21,59,50,0.10)] no-underline transition duration-300 hover:-translate-y-1 hover:shadow-[0_2rem_5rem_rgba(21,59,50,0.15)] sm:p-4"
            href={publication.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${publication.title} als PDF öffnen`}
          >
            <div className="overflow-hidden border border-[#e2e6e1] bg-white">
              <img
                className="h-auto w-full transition duration-500 group-hover:scale-[1.01]"
                src={publication.coverUrl}
                alt={publication.coverAlt}
                width="900"
                height="1272"
              />
            </div>
            <span className="flex items-center justify-between px-1 pb-1 pt-4 text-sm font-bold text-[#153b32]">
              Dokument ansehen
              <ArrowUpRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={18}
              />
            </span>
          </a>
        </section>

        <aside className="mt-16 border-t border-[#cbd6cf] pt-8 lg:mt-20">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#60736c]">
            Weitere Publikation
          </p>
          <Link
            className="group mt-3 inline-flex max-w-2xl items-center gap-3 text-xl font-bold text-[#153b32] no-underline"
            to={relatedPublication.path}
          >
            {relatedPublication.title}
            <ArrowUpRight
              aria-hidden="true"
              className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              size={20}
            />
          </Link>
        </aside>
      </main>
    </div>
  );
}
