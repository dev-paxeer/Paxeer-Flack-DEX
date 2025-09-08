import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("Ecosystem"),
    items: [
      {
        label: t("Trade"),
        href: "/swap",
      },
      {
        label: t("Earn"),
        href: "/farms",
      },
      {
        label: t("Game"),
        href: "/prediction",
      },
      {
        label: t("NFT"),
        href: "/nfts",
      },
      {
        label: t("Tokenomics"),
        href: "https://docs.yantra.exchange/governance-and-tokenomics/cake-tokenomics",
      },
      {
        label: t("Litepaper"),
        href: "https://yantra-assets.netlify.app/litepaper/v2litepaper.pdf",
      },
      {
        label: t("CAKE Emission Projection"),
        href: "https://analytics.yantra.exchange/",
      },
      {
        label: t("Merchandise"),
        href: "https://merch.yantra.exchange/",
      },
    ],
  },
  {
    label: "Business",
    items: [
      {
        label: t("Farms and Syrup Pools"),
        href: "https://docs.yantra.exchange/ecosystem-and-partnerships/business-partnerships/syrup-pools-and-farms",
      },
      {
        label: t("IFO"),
        href: "https://docs.yantra.exchange/ecosystem-and-partnerships/business-partnerships/initial-farm-offerings-ifos",
      },
      {
        label: t("NFT Marketplace"),
        href: "https://docs.yantra.exchange/ecosystem-and-partnerships/business-partnerships/nft-market-applications",
      },
    ],
  },
  {
    label: t("Developers"),
    items: [
      {
        label: t("Contributing"),
        href: "https://docs.yantra.exchange/developers/contributing",
      },
      {
        label: t("Github"),
        href: "https://github.com/pancakeswap",
      },
      {
        label: t("Bug Bounty"),
        href: "https://docs.yantra.exchange/developers/bug-bounty",
      },
    ],
  },
  {
    label: t("Support"),
    items: [
      {
        label: t("Contact"),
        href: "https://docs.yantra.exchange/contact-us/customer-support",
      },
      {
        label: t("Troubleshooting"),
        href: "https://docs.yantra.exchange/readme/help/troubleshooting",
      },
      {
        label: t("Documentation"),
        href: "https://docs.yantra.exchange/",
      },
    ],
  },
  {
    label: t("About"),
    items: [
      {
        label: t("Terms Of Service"),
        href: "https://yantra.exchange/terms-of-service",
      },
      {
        label: t("Blog"),
        href: "https://blog.yantra.exchange/",
      },
      {
        label: t("Brand Assets"),
        href: "https://docs.yantra.exchange/ecosystem-and-partnerships/brand",
      },
      {
        label: t("Careers"),
        href: "https://docs.yantra.exchange/team/become-a-chef",
      },
    ],
  },
];
