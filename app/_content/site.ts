export const site = {
  name: "Llama Collective",
  description:
    "Software infrastructure for Minecraft archival communities: submission workflows, mirrors, and browsing tools.",
  discordInviteUrl: "https://discord.gg/J2M6fHYQnY",
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
    summary: "The latest Minecraft storage technologies. Resources, community spaces, and tools to help you learn and develop storage technologies in Minecraft.",
    websiteUrl: "https://storagetech2.org",
    logo: { kind: "image", src: "/partners/st2.png", alt: "Storage Tech 2 logo" },
  },
  {
    name: "Soontech",
    summary: "Encoded storage tech for everyone. A friendly community focused on making encoded storage technologies accessible to all Minecraft players.",
    websiteUrl: "https://soontech.org",
    logo: { kind: "image", src: "/partners/soontech.png", alt: "Soontech logo" },
  },
  {
    name: "Wither Archive",
    summary: "Break blocks better. Wither technology enthusiasts sharing the latest in wither-based automation.",
    websiteUrl: "https://duskscorpio.github.io/wither/",
    logo: { kind: "image", src: "/partners/wither.png", alt: "Wither Archive logo" },
  },
  {
    name: "Autocrafting Archive",
    summary: "Autocrafting made easy. A community dedicated to building and sharing autocrafting technologies in Minecraft.",
    logo: { kind: "image", src: "/partners/autocraft.png", alt: "Autocraft logo" },
  },
];

export const solutions: SolutionCard[] = [
  {
    slug: "llamabot",
    name: "Llamabot",
    summary:
      "Discord bot that automates submissions, formatting, and publishing for archives.",
    logo: { kind: "text", text: "LB", ariaLabel: "Llamabot" },
    cardImage: { src: "/solutions/llamabot.svg", alt: "Llamabot illustration" },
    websiteUrl: "https://github.com/Llama-Collective/LlamaBot",
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
    websiteUrl: "https://github.com/Storage-Tech-2/Storage-Tech-2.github.io",
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
    websiteUrl: "https://github.com/Storage-Tech-2/ST2-Downloader",
  },
];
