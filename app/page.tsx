import Link from "next/link";
import { Container } from "@/app/_components/Container";
import { Card } from "@/app/_components/Card";
import { LogoMark } from "@/app/_components/LogoMark";
import { ActionLink } from "@/app/_components/ActionLink";
import { partners, site, solutions } from "@/app/_content/site";

export default function Home() {
  return (
    <div>
      <section className="border-b border-border">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold text-muted-foreground">
            For Minecraft archival communities
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Practical tooling for submissions, curation, and publishing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {site.name} builds and maintains software that helps communities run
            technical archives: Discord workflows, GitHub mirrors, and
            browseable archives on the web and in game.
          </p>

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
            <ActionLink href="/solutions">View solutions</ActionLink>
            <ActionLink href="/partners">See partners</ActionLink>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold">Automation first</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Communities define their own rules. The tooling handles the
                routine work.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Own your archive</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Mirrors live in community-run repos and sites, with a workflow
                you can audit.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Web + in-game</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Publish an archive website and optionally support browsing and
                downloads in Minecraft.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Solutions
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                A small set of tools you can adopt incrementally.
              </p>
            </div>
            <Link
              href="/solutions"
              className="hidden text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground sm:inline"
            >
              All solutions
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
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
                <div className="mt-auto">
                  <ActionLink href="/solutions" className="w-full">
                    Learn more
                  </ActionLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/30">
        <Container className="py-14 sm:py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Partners</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Communities using these tools (or parts of them) to run archives.
              </p>
            </div>
            <Link
              href="/partners"
              className="hidden text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground sm:inline"
            >
              All partners
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {partners.map((partner) => (
              <Card key={partner.name} className="flex items-start gap-4">
                <LogoMark logo={partner.logo} />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {partner.name}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {partner.summary}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            How it typically works
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
              <div className="text-sm font-semibold text-foreground">
                1) Define your archival process
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Decide what you accept, what metadata you require, and how you
                review submissions.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-foreground">
                2) Llamabot runs the workflow
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                It manages Discord forums/threads and keeps the process
                consistent without extra moderator overhead.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-foreground">
                3) Mirror and publish
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Approved content is mirrored to a GitHub repository and
                published to a browseable archive site.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-foreground">
                4) Improve access
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Optionally offer in-game browsing and downloads with a Minecraft
                mod.
              </p>
            </Card>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Want to adopt the tools?
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Join the Discord and we’ll talk through requirements and a
                  migration plan.
                </p>
              </div>
              {site.discordInviteUrl ? (
                <ActionLink
                  href={site.discordInviteUrl}
                  external
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Join Discord
                </ActionLink>
              ) : (
                <ActionLink
                  href="/contact"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Contact
                </ActionLink>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
