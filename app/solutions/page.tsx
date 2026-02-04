import { ActionLink } from "@/app/_components/ActionLink";
import { Card } from "@/app/_components/Card";
import { Container } from "@/app/_components/Container";
import { LogoMark } from "@/app/_components/LogoMark";
import { site, solutions } from "@/app/_content/site";

export default function SolutionsPage() {
  return (
    <div>
      <Container className="py-12 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Solutions
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Llama Collective provides a small set of tools for running an archive:
          submission intake, curation, mirroring, and publishing. You can adopt
          individual tools or run it end-to-end.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.name} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <LogoMark logo={solution.logo} />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {solution.name}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {solution.summary}
                  </p>
                </div>
              </div>
              {solution.websiteUrl ? (
                <div className="mt-auto">
                  <ActionLink
                    href={solution.websiteUrl}
                    external
                    className="w-full"
                  >
                    Website
                  </ActionLink>
                </div>
              ) : null}
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-base font-semibold text-foreground">Llamabot</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Llamabot is the automation layer. Communities configure their own
              archival requirements and process; the bot manages Discord and
              publishing around those rules.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li>Manages Discord forums/threads for submissions and review</li>
              <li>Maintains a GitHub repository mirror for the archive</li>
              <li>Publishes a website from the mirrored content</li>
              <li>Automatically optimizes images</li>
              <li>Can optimize world downloads</li>
              <li>
                Analyzes attachments (for example, schematics) for metadata
              </li>
              <li>Built-in assistant for curator formatting and consistency</li>
              <li>Dictionary feature and chatbot for common questions</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-base font-semibold text-foreground">
              Web + in-game access
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Archives are easiest to use when they’re available in more than
              one place.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Archive Site Template
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  A static site template for browsing and searching an archive,
                  backed by mirrored content.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  In‑Game Archive Mod
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  A Minecraft mod that can browse and download archive content
                  without leaving the game.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6">
          <div className="text-sm font-semibold text-foreground">
            Getting started
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            The fastest way to evaluate fit is a short conversation about how
            your archive works and what you want automated.
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
