export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  if (variant === "secondary") {
    return (
      <button className="border border-gray-700 px-6 py-3 rounded-xl hover:border-gray-500 transition">
        {children}
      </button>
    );
  }

  return (
    <button className="bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-500 transition">
      {children}
    </button>
  );
}