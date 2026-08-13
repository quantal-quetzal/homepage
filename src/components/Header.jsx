import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 min-h-13 border-b border-[#d1d1d1] bg-[#f4f5f6]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-[70rem] items-center justify-between px-5 py-4 font-mono text-base">
        <Link className="no-underline" to="/software">
          dev@felix-gehring.de
        </Link>
        <Link
          className="inline-flex items-center gap-2 text-sm no-underline hover:underline"
          to="/"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          Auswahl
        </Link>
      </nav>
    </header>
  );
}
