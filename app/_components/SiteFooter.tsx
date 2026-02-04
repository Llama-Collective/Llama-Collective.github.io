import Link from "next/link";
import { site } from "@/app/_content/site";
import { Container } from "@/app/_components/Container";

const navItems = [
  { href: "/partners", label: "Partners" },
  { href: "/solutions", label: "Solutions" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="text-sm font-semibold text-foreground">{site.name}</div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {site.description}
          </p>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            No funding is accepted.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Pages
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Contact
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                {site.discordInviteUrl ? (
                  <a
                    href={site.discordInviteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Discord
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Discord
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

