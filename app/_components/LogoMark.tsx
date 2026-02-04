import Image from "next/image";
import type { LogoMark as LogoMarkType } from "@/app/_content/site";

export function LogoMark({ logo, size = 44 }: { logo: LogoMarkType; size?: number }) {
  if (logo.kind === "image") {
    return (
      <Image
        src={logo.src}
        alt={logo.alt}
        width={size}
        height={size}
        className="h-11 w-11 rounded-xl object-cover ring-1 ring-border"
      />
    );
  }

  return (
    <div
      aria-label={logo.ariaLabel}
      role="img"
      className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-xs font-semibold text-foreground ring-1 ring-border"
    >
      {logo.text}
    </div>
  );
}

