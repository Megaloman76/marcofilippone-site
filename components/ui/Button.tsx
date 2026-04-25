export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500 transition">
      {children}
    </button>
  );
}