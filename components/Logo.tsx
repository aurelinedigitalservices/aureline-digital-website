// Aureline mark: three overlapping circles in the brand's sage, powder blue and peach.
export function LogoMark({ size = 36 }: { size?: number }) {
  const blend = { mixBlendMode: "multiply" } as const;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <circle cx="15" cy="15" r="11" fill="#b7cdb5" />
      <circle cx="25" cy="15" r="11" fill="#bcd6e8" style={blend} />
      <circle cx="20" cy="25" r="11" fill="#f5cfb8" style={blend} />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark />
      <span className="font-display text-[1.65rem] font-normal leading-none tracking-tight text-ink">
        Aureline<span className="ml-1.5 font-light text-stone">Digital</span>
      </span>
    </span>
  );
}
