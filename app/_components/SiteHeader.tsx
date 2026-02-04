"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import { site } from "@/app/_content/site";
import { Container } from "@/app/_components/Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/partners", label: "Partners" },
  { href: "/solutions", label: "Solutions" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

function isActivePath(currentPath: string, href: string) {
  const normalizedHref = normalizePath(href);
  if (normalizedHref === "/") return currentPath === "/";
  return currentPath === normalizedHref || currentPath.startsWith(`${normalizedHref}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath = useMemo(() => normalizePath(pathname), [pathname]);
  const mobileMenuRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
  }, [currentPath]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex items-center gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Llama Collective logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-cover ring-1 ring-border"
            priority
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-foreground">
              {site.name}
            </div>
            <div className="text-xs text-muted-foreground">
              Minecraft Archive Infrastructure
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:ml-auto md:flex">
          {navItems.map((item) => {
            const active = isActivePath(currentPath, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "py-2 font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-[10px]"
                    : "py-2 text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-4">
          {site.discordInviteUrl ? (
            <a
              href={site.discordInviteUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
            >
              Join Discord
            </a>
          ) : null}

          <details ref={mobileMenuRef} className="relative md:hidden">
            <summary className="list-none rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-border bg-background p-2 shadow-lg">
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const active = isActivePath(currentPath, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "rounded-xl bg-muted px-3 py-2 text-sm font-semibold text-foreground"
                          : "rounded-xl px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {site.discordInviteUrl ? (
                  <a
                    href={site.discordInviteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Join Discord
                  </a>
                ) : null}
              </div>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
