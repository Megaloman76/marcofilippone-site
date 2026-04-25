export default function Button({ children, variant = "primary" }: any) {
  return (
    <button
      className={
        variant === "primary"
          ? "bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition shadow-lg"
          : "border border-white/30 px-6 py-3 rounded-xl text-white hover:border-white transition"
      }
    >
      {children}
    </button>
  );
}