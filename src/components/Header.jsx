export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 min-h-13 border-b border-[#d1d1d1] bg-[#f4f5f6]">
      <nav className="mx-auto flex w-full max-w-[70rem] items-center px-5 py-4 font-mono text-base">
        <a className="no-underline" href="/">
          dev@felix-gehring.de
        </a>
      </nav>
    </header>
  );
}
