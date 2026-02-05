import Link from "next/link";
import Image from "next/image";
import { Container } from "@/app/_components/Container";
import { Card } from "@/app/_components/Card";
import { LogoMark } from "@/app/_components/LogoMark";
import { ActionLink } from "@/app/_components/ActionLink";
import { partners, site, solutions } from "@/app/_content/site";

export default function Home() {
  return (
    <div>
      <section className="border-b border-border">
        <Container className="py-8 sm:py-12">
          <p className="text-sm font-semibold text-muted-foreground">
            For Minecraft archival communities
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Practical tooling for archive curation and publishing
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            The {site.name} builds software that helps technical Minecraft communities maintain their archives: automated submission workflows, website integration, and in-game browsing tools.
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
            <Card className="border-accent/40!">
              <div className="text-sm font-semibold">Automation first</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Don&apos;t exhaust your volunteers. Let our tools handle the
                repetitive work.
              </p>
            </Card>
            <Card className="border-accent/40!">
              <div className="text-sm font-semibold">Be independent</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Keep your data in open formats on platforms you control. Everything is open source. No vendor
                lock-in.
              </p>
            </Card>
            <Card className="border-accent/40!">
              <div className="text-sm font-semibold">User friendly</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Make it easy for contributors to submit content and for users to
                browse your archive with a website and in-game mod.
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
                Our solutions
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                These tools can be used together or independently to help you run a Minecraft
                archive.
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
              <Card
                key={solution.name}
                className="flex !p-0 flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/9] w-full bg-muted/60">
                  <Image
                    src={solution.cardImage.src}
                    alt={solution.cardImage.alt}
                    fill
                    priority={solution.slug === "llamabot"}
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {solution.name}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {solution.summary}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <ActionLink
                      href={`/solutions/${solution.slug}`}
                      className="w-full"
                    >
                      Learn more
                    </ActionLink>
                  </div>
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
                Communities in the Llama Collective with archives managed using our
                tools.
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
                <LogoMark logo={partner.logo} size={56} />
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
                1. Get Llamabot set up
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Connect Llamabot to your Discord server and configure the submission workflow to match your community&apos;s needs. We offer customization and support to help you get started.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-foreground">
                2. Migrate existing content
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Import existing archive content into the new submission system for easier management going forward. An automated parser tool can help with this process.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-foreground">
                3. Make a website
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use the Archive Site Template to create a static website for
                browsing your archive. Free on GitHub Pages, or host it
                wherever you like.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-foreground">
                4. Register for mod integration
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Get your archive listed in the Archive Downloader Mod so users
                can browse and download content in-game.
              </p>
            </Card>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Want to join the collective?
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Join the Discord and we’ll talk through a
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
