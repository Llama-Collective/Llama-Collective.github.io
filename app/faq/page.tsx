import { Container } from "@/app/_components/Container";
import { ActionLink } from "@/app/_components/ActionLink";
import { site } from "@/app/_content/site";

const faqs = [
  {
    q: "Who is this for?",
    a: "Community leaders and maintainers who want a consistent way to accept submissions, curate content, and publish an archive.",
  },
  {
    q: "Do we need to adopt everything?",
    a: "No. Communities can adopt individual tools or run it end-to-end. The goal is to reduce routine work without forcing a single process on everyone.",
  },
  {
    q: "What does Llamabot automate?",
    a: "It manages Discord forums/threads, mirrors approved content to a GitHub repository, and publishes an archive site. It also supports attachment analysis (like schematics), image optimization, and optional curator assistance for formatting and consistency.",
  },
  {
    q: "Can we customize our archival requirements?",
    a: "Yes. Communities define what they accept, what metadata they require, and how review works. The tooling enforces and automates around those rules.",
  },
  {
    q: "Do you accept funding?",
    a: "No. Llama Collective does not accept funding.",
  },
  {
    q: "How do we start?",
    a: "Join the Discord and tell us what kind of archive you run (or want to run). We’ll walk through requirements, rollout, and what you’d like automated.",
  },
] as const;

export default function FaqPage() {
  return (
    <div>
      <Container className="py-12 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          FAQ
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Straight answers about what the Llama Collective tools do and how
          communities use them.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border border-border bg-background p-5 shadow-sm"
            >
              <summary className="cursor-pointer text-sm font-semibold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6">
          <div className="text-sm font-semibold text-foreground">
            Still have questions?
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            If you’re evaluating a migration or planning a new archive, Discord
            is the best place to start.
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
