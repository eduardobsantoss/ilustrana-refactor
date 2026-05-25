import { Instagram } from "lucide-react";
import { BehanceIcon, TikTokIcon } from "@/components/site/SocialIcons";
import type { ComponentType, SVGProps } from "react";

export type Social = {
    href: string;
    label: string;
    Icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;
};

export const socials: Social[] = [
    {
        href: "https://www.instagram.com/ilustranastudio/",
        label: "Instagram",
        Icon: Instagram,
    },
    {
        href: "https://www.tiktok.com/@ilustranastudio",
        label: "TikTok",
        Icon: TikTokIcon,
    },
    {
        href: "https://www.behance.net/ilustranastudio",
        label: "Behance",
        Icon: BehanceIcon,
    },
];
