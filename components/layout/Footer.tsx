export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Marco Filippone — CyberSecurity Strategy
      </div>
    </footer>
  );
}

