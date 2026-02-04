export const site = {
  name: "Llama Collective",
  description:
    "Software infrastructure for Minecraft archival communities: submission workflows, mirrors, and browsing tools.",
  discordInviteUrl: "",
} as const;

export type LogoMark =
  | { kind: "image"; src: string; alt: string }
  | { kind: "text"; text: string; ariaLabel: string };

export type LinkCard = {
  name: string;
  summary: string;
  websiteUrl?: string;
  logo: LogoMark;
};

export type SolutionCard = LinkCard & {
  slug: string;
  cardImage: {
    src: string;
    alt: string;
  };
};

export const partners: LinkCard[] = [
  {
    name: "Storage Tech 2",
    summary: "Storage system designs and references.",
    logo: { kind: "text", text: "ST2", ariaLabel: "Storage Tech 2" },
  },
  {
    name: "Soontech",
    summary: "Encoded tech designs and references.",
    logo: { kind: "text", text: "ST", ariaLabel: "Soontech" },
  },
  {
    name: "Wither Archive",
    summary: "Wither tech designs and references.",
    logo: { kind: "text", text: "WA", ariaLabel: "Wither Archive" },
  },
  {
    name: "Autocraft",
    summary: "Autocrafting tech designs and references.",
    logo: { kind: "text", text: "AC", ariaLabel: "Autocraft" },
  },
];

export const solutions: SolutionCard[] = [
  {
    slug: "llamabot",
    name: "Llamabot",
    summary:
      "Discord bot that automates submissions, curation workflows, and publishing for archives.",
    logo: { kind: "text", text: "LB", ariaLabel: "Llamabot" },
    cardImage: { src: "/solutions/llamabot.svg", alt: "Llamabot illustration" },
  },
  {
    slug: "archive-site-template",
    name: "Archive Site Template",
    summary: "Static website template for browsing an archive.",
    logo: { kind: "text", text: "WEB", ariaLabel: "Archive Site Template" },
    cardImage: {
      src: "/solutions/archive-site-template.svg",
      alt: "Archive Site Template illustration",
    },
  },
  {
    slug: "archive-downloader-mod",
    name: "Archive Downloader Mod",
    summary: "Minecraft mod for browsing and downloading archive content in game.",
    logo: { kind: "text", text: "MOD", ariaLabel: "Archive Downloader Mod" },
    cardImage: {
      src: "/solutions/archive-downloader-mod.svg",
      alt: "Archive Downloader Mod illustration",
    },
  },
];
