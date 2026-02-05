import type { Metadata } from "next";
import Link from "next/link";
import { ActionLink } from "@/app/_components/ActionLink";
import { Card } from "@/app/_components/Card";
import { Container } from "@/app/_components/Container";
import { getDisplayHost } from "@/app/_components/url";
import { site, solutions } from "@/app/_content/site";

const solution = solutions.find((s) => s.slug === "archive-site-template");

export const metadata: Metadata = {
  title: solution?.name ?? "Archive Site Template",
};

export default function ArchiveSiteTemplatePage() {
  if (!solution) throw new Error('Missing solution: "archive-site-template"');
  const host = solution.websiteUrl ? getDisplayHost(solution.websiteUrl) : null;

  return (
    <div>
      <Container className="py-12 sm:py-16">
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
            This is the public-facing archive site: a static front end that
            presents mirrored content with the metadata your community
            requires.
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
            <h2 className="text-base font-semibold text-foreground">Inputs</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li>A mirrored archive repository (often on GitHub)</li>
              <li>Metadata and structure defined by the community</li>
              <li>Optional automation that keeps the mirror up to date</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-base font-semibold text-foreground">Output</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li>A static website suitable for GitHub Pages or similar hosts</li>
              <li>Stable URLs for sharing and referencing archived items</li>
              <li>Download links and metadata display based on your rules</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-base font-semibold text-foreground">
              Customization
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Communities can adjust navigation, categories, and presentation to
              match how their archive is organized. The goal is a site that’s
              easy to browse and easy to keep current.
            </p>
          </Card>

          <Card>
            <h2 className="text-base font-semibold text-foreground">
              Works with Llamabot
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Many communities use Llamabot to keep the mirror updated and to
              publish the site automatically when new items are approved.
            </p>
          </Card>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6">
          <div className="text-sm font-semibold text-foreground">
            Want an archive site for your community?
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            Join the Discord and share what you want to publish and how you want
            it organized. We’ll outline a setup that fits.
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
