export default function Header() {
  return (
    <header className="border-b border-gray-800 backdrop-blur sticky top-0 z-50 bg-[#0B0B0C]/70">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO placeholder */}
        <div className="font-semibold tracking-tight">
          Marco Filippone
        </div>

        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Servizi</a>
          <a href="/contact">Contatti</a>
        </nav>

      </div>
    </header>
  );
}