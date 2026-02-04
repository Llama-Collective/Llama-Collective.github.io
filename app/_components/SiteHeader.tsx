"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import { site, solutions } from "@/app/_content/site";
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

function isCurrentPage(currentPath: string, href: string) {
  return normalizePath(currentPath) === normalizePath(href);
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
            const current = isCurrentPage(currentPath, item.href);

            if (item.href === "/solutions") {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-haspopup="menu"
                    aria-current={current ? "page" : undefined}
                    className={
                      active
                        ? "py-2 font-medium text-foreground underline decoration-accent decoration-2 underline-offset-[10px]"
                        : "py-2 font-medium text-muted-foreground transition-colors hover:text-foreground"
                    }
                  >
                    {item.label}
                  </Link>

                  <div className="pointer-events-none absolute left-1/2 top-full w-[22rem] -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div
                      role="menu"
                      aria-label="Solutions"
                      className="rounded-2xl border border-border bg-background p-2 shadow-lg"
                    >
                      <Link
                        href="/solutions"
                        aria-current={
                          isCurrentPage(currentPath, "/solutions") ? "page" : undefined
                        }
                        className={
                          isCurrentPage(currentPath, "/solutions")
                            ? "block rounded-xl bg-muted px-3 py-2 text-sm font-semibold text-foreground"
                            : "block rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                        }
                      >
                        Overview
                      </Link>

                      <div className="my-2 h-px bg-border" />

                      {solutions.map((solution) => {
                        const href = `/solutions/${solution.slug}`;
                        const isCurrent = isCurrentPage(currentPath, href);
                        return (
                          <Link
                            key={href}
                            href={href}
                            aria-current={isCurrent ? "page" : undefined}
                            className={
                              isCurrent
                                ? "block rounded-xl bg-muted px-3 py-2"
                                : "block rounded-xl px-3 py-2 transition-colors hover:bg-muted"
                            }
                          >
                            <div className="text-sm font-semibold text-foreground">
                              {solution.name}
                            </div>
                            <div className="mt-0.5 text-xs leading-5 text-muted-foreground">
                              {solution.summary}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={
                  active
                    ? "py-2 font-medium text-foreground underline decoration-accent decoration-2 underline-offset-[10px]"
                    : "py-2 font-medium text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {site.discordInviteUrl ? (
          <a
            href={site.discordInviteUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-4 hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
          >
            Join Discord
          </a>
        ) : null}

        <details ref={mobileMenuRef} className="relative ml-auto md:hidden">
          <summary className="list-none rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-border bg-background p-2 shadow-lg">
            <div className="flex flex-col">
              {navItems.map((item) => {
                const active = isActivePath(currentPath, item.href);
                const current = isCurrentPage(currentPath, item.href);

                if (item.href === "/solutions") {
                  return (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={current ? "page" : undefined}
                        className={
                          active
                            ? "rounded-xl bg-muted px-3 py-2 text-sm font-medium text-foreground"
                            : "rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                        }
                      >
                        {item.label}
                      </Link>
                      <div className="ml-3 mt-1 border-l border-border pl-2">
                        {solutions.map((solution) => {
                          const href = `/solutions/${solution.slug}`;
                          const isCurrent = isCurrentPage(currentPath, href);
                          return (
                            <Link
                              key={href}
                              href={href}
                              aria-current={isCurrent ? "page" : undefined}
                              className={
                                isCurrent
                                  ? "block rounded-lg bg-muted px-3 py-2 text-sm font-medium text-foreground"
                                  : "block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                              }
                            >
                              {solution.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={
                      active
                        ? "rounded-xl bg-muted px-3 py-2 text-sm font-medium text-foreground"
                        : "rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
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
      </Container>
    </header>
  );
}
