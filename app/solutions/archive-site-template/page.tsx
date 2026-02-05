import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/app/_components/ActionLink";
import { Container } from "@/app/_components/Container";
import { getDisplayHost } from "@/app/_components/url";
import { site, solutions } from "@/app/_content/site";

const solution = solutions.find((s) => s.slug === "archive-site-template");

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
    label: "Virtualized archive browsing",
  },
  {
    value: "Searchable",
    label: "Tag filters plus semantic search",
  },
  {
    value: "Shareable",
    label: "Clean URLs for every post",
  },
] as const;

const flow = [
  {
    title: "Load index",
    detail: "Read `persistent.idx` and metadata files.",
  },
  {
    title: "Hydrate views",
    detail: "Build cards, tags, and post details.",
  },
  {
    title: "Filter fast",
    detail: "Apply channel/tag/author filters quickly.",
  },
  {
    title: "Open and share",
    detail: "Direct links make posts easy to reference.",
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

const requiredFiles = ["persistent.idx", "config.json", "dictionary/config.json", "{channel}/{entry}/data.json"] as const;

export default function ArchiveSiteTemplatePage() {
  if (!solution) throw new Error('Missing solution: "archive-site-template"');
  const host = solution.websiteUrl ? getDisplayHost(solution.websiteUrl) : null;

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
                    {host ? `Go to ${host}` : "Repository"}
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
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How it works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {flow.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-background/90 p-4 shadow-sm"
              >
                <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-500 to-sky-500/30" />
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Step {index + 1}
                </div>
                <h3 className="mt-1 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Visual blocks</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-border bg-background/90 p-4 shadow-sm lg:col-span-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/80">
                <Image
                  src={solution.cardImage.src}
                  alt={solution.cardImage.alt}
                  fill
                  sizes="(min-width: 1024px) 680px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Hero screenshot area for your real archive homepage.
              </p>
            </article>

            <article className="solution-graphic-grid rounded-2xl border border-border bg-background/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Required files
              </p>
              <div className="mt-3 space-y-2">
                {requiredFiles.map((file) => (
                  <div
                    key={file}
                    className="flex items-center gap-2 rounded-md border border-border/70 bg-background/80 px-2 py-1.5 text-xs text-muted-foreground"
                  >
                    <Image src="/file.svg" alt="File" width={14} height={14} />
                    <span>{file}</span>
                  </div>
                ))}
              </div>
            </article>
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
                {host ? `View ${host}` : "View repository"}
              </ActionLink>
            ) : null}
          </div>
        </section>
      </Container>
    </div>
  );
}
