import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/app/_components/ActionLink";
import { Container } from "@/app/_components/Container";
import { getDisplayHost } from "@/app/_components/url";
import { site, solutions } from "@/app/_content/site";
import { SubmissionJourney } from "./SubmissionJourney";
import { Card } from "@/app/_components/Card";

const solution = solutions.find((s) => s.slug === "llamabot");

export const metadata: Metadata = {
  title: solution?.name ?? "Llamabot",
};

const quickFacts = [
  {
    value: "Discord-based",
    label: "Submit and review within the space your community uses",
  },
  {
    value: "Automation",
    label: "Uses LLMs to reduce manual formatting work",
  },
  {
    value: "GitHub sync",
    label: "Publishes machine-readable files for websites and mods",
  },
  {
    value: "Built-in anti-spam",
    label: "Say goodbye to scam bots"
  },
] as const;

const submissionJourney = [
  {
    title: "Initial submission",
    detail:
      "A user creates a forum post in a submissions channel. They can use whatever format they like.",
    src: "/bot_submissions_screenshots/initial_submission.png",
  },
  {
    title: "Submission checklist",
    detail:
      "The bot runs a checklist and asks for tags, authors, and other metadata using interactable menus and modals.",
    src: "/bot_submissions_screenshots/submission_checklist.png",
  },
  {
    title: "Autoformatted draft",
    detail:
      "An LLM reformats content into your post template. The submitter can edit it manually for corrections.",
    src: "/bot_submissions_screenshots/autoformatted_draft.png",
  },
  {
    title: "Endorsement and publishing",
    detail:
      "Endorsers review the post before publish. Required endorsement count is configurable for peer review.",
    src: "/bot_submissions_screenshots/endorsement_and_publish.png",
  },
  {
    title: "Published in archive",
    detail:
      "The bot creates a thread in your archive. It automatically handles image sizing/padding so Discord previews are not clipped.",
    src: "/bot_submissions_screenshots/published_post_card.png",
  },
  {
    title: "Discord-accessible post",
    detail: "Users can read the full post content directly in Discord.",
    src: "/bot_submissions_screenshots/published_post.png",
  },
  {
    title: "Publish to GitHub",
    detail:
      "The bot commits the post to your GitHub repository in a machine-readable format, keeping track of full version history.",
    src: "/bot_submissions_screenshots/git_commit.png",
  },
  {
    title: "Website integration",
    detail:
      "The website pulls the latest GitHub data and shows the new post automatically.",
    src: "/bot_submissions_screenshots/website.png",
  },
  {
    title: "Mod integration",
    detail:
      "The in-game mod pulls the same GitHub data so the new post appears there too.",
    src: "/bot_submissions_screenshots/mod.png",
  },
  {
    title: "Public announcement",
    detail: "A public announcement is posted automatically when a new archive post is published.",
    src: "/bot_submissions_screenshots/public_announcement.png",
  },
] as const;

const roles = [
  {
    title: "Moderators",
    points: [
      "Keep queue quality high",
      "Apply clear review rules",
      "Publish with one flow",
    ],
  },
  {
    title: "Contributors",
    points: [
      "Clear submission format",
      "Faster feedback cycles",
      "Less manual back-and-forth",
    ],
  },
  {
    title: "Developers",
    points: [
      "Predictable output files",
      "Simple integration points",
      "Machine-readable archive data",
    ],
  },
] as const;

const outputs = ["persistent.idx", "embeddings.json", "hnsw.idx", "dictionary/config.json"] as const;

export default function LlamabotPage() {
  if (!solution) throw new Error('Missing solution: "llamabot"');
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

        <section className="relative mt-4 overflow-hidden rounded-[2rem] border border-border/80 bg-gradient-to-br from-background via-muted/30 to-background p-6 sm:p-10">
          <div className="solution-float absolute -left-16 -top-16 h-44 w-44 rounded-full bg-accent/15 blur-2xl" />
          <div className="solution-float-delayed absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-accent/12 blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                For Archive Teams
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {solution.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Run submissions, review, and publishing from Discord.
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                One workflow for moderators, reviewers, and contributors.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold">
                  TypeScript
                </span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold">
                  Discord.js
                </span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold">
                  GitHub publish
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-black/0" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white">
                  Discord → Review → GitHub
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

        <SubmissionJourney items={submissionJourney} />

        <section className="mt-14">
           <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-base font-semibold text-foreground">
              What it automates
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li>Discord forums/threads for submissions, review, and curation</li>
              <li>Mirroring approved content to a GitHub repository</li>
              <li>Publishing an archive website from the mirrored content</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-base font-semibold text-foreground">
              Optimization and analysis
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li>Automatic image optimization</li>
              <li>World download file size reduction</li>
              <li>Attachment analysis (for example, schematics) for metadata</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-base font-semibold text-foreground">
              Curator helpers
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li>Built-in LLM assistant for formatting</li>
              <li>Auto-linked dictionary for community terminology</li>
              <li>Chatbot for common questions</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-base font-semibold text-foreground">
              Antispam and moderation
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li>Powerful spam detection and filtering</li>
              <li>Rate limiting and anti-nuke protections</li>
              <li>Automated role assignment for rewarding contributors and helpers</li>
            </ul>
          </Card>

          <Card className="lg:col-span-2">
            <h2 className="text-base font-semibold text-foreground">So much more</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A lot of work has gone into making Llamabot practically useful. Different subsystems integrate smoothly to provide a cohesive experience for curators, contributors, helpers, and users alike. Using it, you&apos;ll find your archive community running more smoothly than ever.
            </p>
          </Card>
        </div>
        </section>

        <section className="mt-14 rounded-3xl border border-border bg-gradient-to-r from-muted/40 to-background p-6">
          <div className="text-base font-semibold text-foreground">Want this running in your server?</div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Share your current submission setup and we can map a clean rollout plan.
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
