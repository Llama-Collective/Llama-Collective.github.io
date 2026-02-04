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
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Each solution has its own page with scope, integration notes, and
          links.
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
              <div className="mt-auto flex flex-col gap-2">
                <ActionLink
                  href={`/solutions/${solution.slug}`}
                  className="w-full"
                >
                  Details
                </ActionLink>
                {solution.websiteUrl ? (
                  <ActionLink
                    href={solution.websiteUrl}
                    external
                    className="w-full"
                  >
                    Website
                  </ActionLink>
                ) : null}
              </div>
            </Card>
          ))}
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
