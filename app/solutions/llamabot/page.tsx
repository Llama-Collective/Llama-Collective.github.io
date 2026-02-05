import type { Metadata } from "next";
import Link from "next/link";
import { ActionLink } from "@/app/_components/ActionLink";
import { Card } from "@/app/_components/Card";
import { Container } from "@/app/_components/Container";
import { getDisplayHost } from "@/app/_components/url";
import { site, solutions } from "@/app/_content/site";

const solution = solutions.find((s) => s.slug === "llamabot");

export const metadata: Metadata = {
  title: solution?.name ?? "Llamabot",
};

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

        <div className="mt-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {solution.name}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            {solution.summary}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Communities define their own archival requirements and process.
            Llamabot runs the workflow in Discord and handles mirroring and
            publishing around those rules.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
              {host ? `Go to ${host}` : "Website"}
            </ActionLink>
          ) : null}
        </div>

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
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6">
          <div className="text-sm font-semibold text-foreground">
            Want to adopt Llamabot?
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            Join the Discord and describe your current process: what you accept,
            what metadata you require, and how review works.
          </p>
          <div className="mt-4">
            {site.discordInviteUrl ? (
              <ActionLink href={site.discordInviteUrl} external variant="primary">
                Join Discord
              </ActionLink>
            ) : (
              <ActionLink href="/contact" variant="primary">
                Contact
              </ActionLink>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
