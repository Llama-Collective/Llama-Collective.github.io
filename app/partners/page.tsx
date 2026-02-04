import { ActionLink } from "@/app/_components/ActionLink";
import { Card } from "@/app/_components/Card";
import { Container } from "@/app/_components/Container";
import { LogoMark } from "@/app/_components/LogoMark";
import { partners, site } from "@/app/_content/site";

export default function PartnersPage() {
  return (
    <div>
      <Container className="py-12 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Partners
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Partner communities use Llama Collective tooling to run and publish
          technical Minecraft archives. Each community defines its own
          requirements and process.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partners.map((partner) => (
            <Card key={partner.name} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <LogoMark logo={partner.logo} />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {partner.name}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {partner.summary}
                  </p>
                </div>
              </div>

              {partner.websiteUrl ? (
                <div className="mt-auto">
                  <ActionLink
                    href={partner.websiteUrl}
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

        <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6">
          <div className="text-sm font-semibold text-foreground">
            Want to join as a partner?
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            Join the Discord to discuss requirements, rollout, and how you want
            your archive to work.
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

