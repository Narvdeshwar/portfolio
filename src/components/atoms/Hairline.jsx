export default function Hairline({ className = "", light = false }) {
  return (
    <div
      className={`w-full h-px ${
        light ? "bg-[#C9C9C9]/20" : "bg-[#262626]"
      } ${className}`}
      role="separator"
    />
  );
}
