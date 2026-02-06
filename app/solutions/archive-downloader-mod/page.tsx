import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/app/_components/ActionLink";
import { Container } from "@/app/_components/Container";
import { getDisplayHost } from "@/app/_components/url";
import { site, solutions } from "@/app/_content/site";

const solution = solutions.find((s) => s.slug === "archive-downloader-mod");

export const metadata: Metadata = {
  title: solution?.name ?? "Archive Downloader Mod",
};

const quickFacts = [
  {
    value: "In-game browsing",
    label: "Browse archive posts without leaving Minecraft",
  },
  {
    value: "Shared format",
    label: "Uses the same archive data as the website",
  },
  {
    value: "Litematica integration",
    label: "Automatically loads schematics into Litematica",
  },
  {
    value: "Safe downloads",
    label: "Guards around ZIP extraction and file paths",
  },
] as const;

const flow = [
  {
    title: "Open",
    detail: "Open the archive browser from the client.",
  },
  {
    title: "Find",
    detail: "Search by name, tags, channel, or author.",
  },
  {
    title: "Inspect",
    detail: "See post details, images, and attachments.",
  },
  {
    title: "Download",
    detail: "Save files to your world/server folders.",
  },
] as const;

const groups = [
  {
    title: "Players",
    points: ["Quickly find what you need", "Open details before downloading", "Use content directly in game"],
  },
  {
    title: "Server owners",
    points: ["Use one shared archive format", "Keep content discoverable", "Point everyone to the same source"],
  },
  {
    title: "Pack maintainers",
    points: ["Predictable data contract", "Simple update checks", "Optional Litematica integration"],
  },
] as const;


export default function ArchiveDownloaderModPage() {
  if (!solution) throw new Error('Missing solution: "archive-downloader-mod"');
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

        <section className="relative mt-4 overflow-hidden rounded-[2rem] border border-border/80 bg-gradient-to-br from-background via-emerald-50/30 to-background p-6 sm:p-10 dark:via-emerald-950/10">
          <div className="solution-float absolute -left-14 -top-14 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />
          <div className="solution-float-delayed absolute -bottom-14 -right-12 h-48 w-48 rounded-full bg-accent/14 blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                In-Game Archive Browser
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {solution.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Browse and download archive content inside Minecraft.
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Built for players who want fast access without opening a website.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold">
                  Fabric
                </span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold">
                  Java 21
                </span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold">
                  Optional Litematica
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
                  src="/solutions/mod_ui.png"
                  alt="Archive Downloader Mod in-game UI preview"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-black/0" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white">
                  Open • Search • Download
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
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How players use it</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {flow.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-background/90 p-4 shadow-sm"
              >
                <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-500/30" />
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
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-border bg-gradient-to-r from-muted/40 to-background p-6">
          <div className="text-base font-semibold text-foreground">Need this in your modpack workflow?</div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Share target versions and archive setup, and we can map a clean integration plan.
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
