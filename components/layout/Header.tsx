export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">

        <div className="font-semibold">Marco Filippone</div>

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