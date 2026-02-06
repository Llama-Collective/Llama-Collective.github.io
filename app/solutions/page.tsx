import { ActionLink } from "@/app/_components/ActionLink";
import { Card } from "@/app/_components/Card";
import { Container } from "@/app/_components/Container";
import { getDisplayHost } from "@/app/_components/url";
import { site, solutions } from "@/app/_content/site";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <div>
      <Container className="py-8 sm:py-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Solutions
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Llama Collective provides a set of tools for running an archive. You can adopt
          individual tools or run it end-to-end for full automation.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Click on a tool to learn more about its features.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {solutions.map((solution) => {
            const host = solution.websiteUrl
              ? getDisplayHost(solution.websiteUrl)
              : null;
            const isGithubRepo = host === "github.com";

            return (
              <Card key={solution.name} className="flex !p-0 flex-col overflow-hidden">
                <div className="relative aspect-[16/9] w-full bg-muted/60">
                  <Image
                    src={solution.cardImage.src}
                    alt={solution.cardImage.alt}
                    fill
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
                        {isGithubRepo ? "Go to repository" : host ? `Go to ${host}` : "Website"}
                      </ActionLink>
                    ) : null}
                  </div>
                </div>
              </Card>
            );
          })}
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
