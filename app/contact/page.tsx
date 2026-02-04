import { ActionLink } from "@/app/_components/ActionLink";
import { Card } from "@/app/_components/Card";
import { Container } from "@/app/_components/Container";
import { site } from "@/app/_content/site";

export default function ContactPage() {
  return (
    <div>
      <Container className="py-12 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Discord is the primary contact channel for Llama Collective.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-foreground">Discord</div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              If you’re a community leader looking to migrate or start an
              archive, join and tell us what you’re building.
            </p>
            <div className="mt-4">
              {site.discordInviteUrl ? (
                <ActionLink
                  href={site.discordInviteUrl}
                  external
                  variant="primary"
                >
                  Join Discord
                </ActionLink>
              ) : (
                <p className="text-sm leading-6 text-muted-foreground">
                  Discord invite link coming soon.
                </p>
              )}
            </div>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-foreground">Funding</div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Llama Collective does not accept funding.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
