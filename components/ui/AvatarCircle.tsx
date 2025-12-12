type Props = {
  name: string;
  size?: "sm" | "md";
  colorClass?: string;
};

export default function AvatarCircle({
  name,
  size = "md",
  colorClass = "bg-[#8b5cf6]",
}: Props) {
  const letter = name?.charAt(0)?.toUpperCase() ?? "?";
  const dimension = size === "sm" ? "h-8 w-8 text-xs" : "h-9 w-9 text-sm";

  return (
    <div
      className={`flex ${dimension} items-center justify-center rounded-full font-semibold text-white ${colorClass}`}
    >
      {letter}
    </div>
  );
}
