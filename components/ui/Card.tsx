export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#121316] border border-gray-800 rounded-2xl p-6 shadow-xl shadow-black/20 hover:scale-[1.01] transition">
      {children}
    </div>
  );
}