export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-semibold">Marco Filippone</div>

        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="#">About</a>
          <a href="#">Servizi</a>
          <a href="#">Contatti</a>
        </nav>
      </div>
    </header>
  );
}