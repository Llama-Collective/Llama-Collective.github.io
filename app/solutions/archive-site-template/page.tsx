import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/app/_components/ActionLink";
import { Container } from "@/app/_components/Container";
import { getDisplayHost } from "@/app/_components/url";
import { site, solutions } from "@/app/_content/site";

const solution = solutions.find((s) => s.slug === "archive-site-template");
const liveDemoUrl = "https://llamamc.org/website-template/archives";

export const metadata: Metadata = {
  title: solution?.name ?? "Archive Site Template",
};

const quickFacts = [
  {
    value: "Static",
    label: "Simple deploy to GitHub Pages or CDN",
  },
  {
    value: "Fast",
    label: "High performance, with and without JavaScript",
  },
  {
    value: "Searchable",
    label: "Tag filters plus semantic search",
  },
  {
    value: "Shareable",
    label: "Clean URLs for every post. SEO optimized.",
  },
] as const;

const groups = [
  {
    title: "Visitors",
    points: ["Find builds quickly", "Open clean post pages", "Download from stable links"],
  },
  {
    title: "Maintainers",
    points: ["Use one predictable data contract", "Deploy as static files", "Keep updates simple"],
  },
  {
    title: "Community leads",
    points: ["Keep branding consistent", "Document archive categories", "Share links across platforms"],
  },
] as const;

export default function ArchiveSiteTemplatePage() {
  if (!solution) throw new Error('Missing solution: "archive-site-template"');
  const liveDemoHost = getDisplayHost(liveDemoUrl);

  return (
    <div>
      <Container className="py-8 sm:py-12">
        <Link
          href="/solutions"
          className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Solutions
        </Link>

        <section className="relative mt-4 overflow-hidden rounded-[2rem] border border-border/80 bg-gradient-to-br from-background via-sky-50/40 to-background p-6 sm:p-10 dark:via-sky-950/10">
          <div className="solution-float absolute -left-12 -top-16 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl" />
          <div className="solution-float-delayed absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-accent/12 blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Public Archive Website
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {solution.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Turn archive data into a clean public site.
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Built for normal users first: easy browse, easy search, easy sharing.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold">
                  Next.js
                </span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold">
                  Static export
                </span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold">
                  Worker search
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                {site.discordInviteUrl ? (
                  <ActionLink href={site.discordInviteUrl} external variant="primary">
                    Join Discord
                  </ActionLink>
                ) : (
                  <ActionLink href="/contact" variant="primary">
                    Contact
                  </ActionLink>
                )}
                {solution.websiteUrl ? (
                  <ActionLink href={solution.websiteUrl} external>
                    Go to the GitHub repository
                  </ActionLink>
                ) : null}
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/80">
                <Image
                  src={solution.cardImage.src}
                  alt={solution.cardImage.alt}
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white">
                  Search • Filter • Open
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-background/90 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Site map snapshot
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-border/70 bg-muted/30 p-3">
                    <Image src="/window.svg" alt="Window" width={18} height={18} />
                    <div className="mt-2 text-xs text-muted-foreground">Archive list</div>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-muted/30 p-3">
                    <Image src="/file.svg" alt="File" width={18} height={18} />
                    <div className="mt-2 text-xs text-muted-foreground">Post page</div>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-muted/30 p-3">
                    <Image src="/globe.svg" alt="Globe" width={18} height={18} />
                    <div className="mt-2 text-xs text-muted-foreground">Dictionary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">At a glance</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((item) => (
              <article
                key={item.value}
                className="rounded-2xl border border-border bg-background/90 p-5 shadow-sm"
              >
                <div className="text-lg font-semibold text-foreground">{item.value}</div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
              </article>
            ))}
          </div>
        </section>


        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Who it helps</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {groups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-border bg-background/90 p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Live demo</h2>
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500"
            >
              {liveDemoHost ? `Open ${liveDemoHost}` : "Open live demo"}
            </a>
          </div>
          <div className="relative left-1/2 mt-6 w-[calc(100dvw-4rem)] -translate-x-1/2 overflow-hidden rounded-3xl border border-border/80 bg-background shadow-sm sm:w-[calc(100dvw-10rem)]">
            <div className="h-[68vh] min-h-[600px] max-h-[860px] w-full bg-muted/20">
              <iframe
                src={liveDemoUrl}
                title="Archive Site Template live demo"
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-border bg-gradient-to-r from-muted/40 to-background p-6">
          <div className="text-base font-semibold text-foreground">Need a public archive site?</div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Share your current archive format and we can map the cleanest setup path.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            {site.discordInviteUrl ? (
              <ActionLink href={site.discordInviteUrl} external variant="primary">
                Join Discord
              </ActionLink>
            ) : (
              <ActionLink href="/contact" variant="primary">
                Contact
              </ActionLink>
            )}
            {solution.websiteUrl ? (
              <ActionLink href={solution.websiteUrl} external>
                Go to the GitHub repository
              </ActionLink>
            ) : null}
          </div>
        </section>
      </Container>
    </div>
  );
}
