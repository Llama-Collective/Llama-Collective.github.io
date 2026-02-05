import type { Metadata } from "next";
import Link from "next/link";
import { ActionLink } from "@/app/_components/ActionLink";
import { Card } from "@/app/_components/Card";
import { Container } from "@/app/_components/Container";
import { getDisplayHost } from "@/app/_components/url";
import { site, solutions } from "@/app/_content/site";

const solution = solutions.find((s) => s.slug === "archive-downloader-mod");

export const metadata: Metadata = {
  title: solution?.name ?? "Archive Downloader Mod",
};

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

        <div className="mt-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {solution.name}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            {solution.summary}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            The goal is simple: make archive content usable without leaving
            Minecraft.
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
              What it does
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li>Browse archive items in game</li>
              <li>Download content without switching to a browser</li>
              <li>Use the archive in survival worlds, testing, or creative</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-base font-semibold text-foreground">
              Integration
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              The mod consumes data published by an archive. The exact setup
              depends on how your community hosts and structures its mirror and
              website.
            </p>
          </Card>

          <Card className="lg:col-span-2">
            <h2 className="text-base font-semibold text-foreground">
              Where it fits
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Communities often pair the mod with a mirrored repository and an
              archive site, so content is available on the web and directly in
              Minecraft.
            </p>
          </Card>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6">
          <div className="text-sm font-semibold text-foreground">
            Want in-game access for your archive?
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            Join the Discord and tell us what Minecraft versions you target and
            what types of content you archive.
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
