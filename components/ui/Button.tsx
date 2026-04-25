export default function Button({ children, variant = "primary" }: any) {
  return (
    <button
      className={
        variant === "primary"
          ? "bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          : "border border-gray-700 px-6 py-3 rounded-xl text-white hover:border-white transition"
      }
    >
      {children}
    </button>
  );
}