export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="font-semibold tracking-tight">
          Marco Filippone
        </div>

        <nav className="flex gap-8 text-sm text-gray-300">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Servizi</a>
          <a href="/contact">Contatti</a>
        </nav>

      </div>
    </header>
  );
}