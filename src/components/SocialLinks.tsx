import type { ReactNode } from "react";
import { socials, type SocialKey } from "@/data/content";
import {
  CodePenIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons";

const iconMap: Record<
  SocialKey,
  (props: { size?: number; className?: string }) => ReactNode
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  codepen: CodePenIcon,
  instagram: InstagramIcon,
};

export default function SocialLinks({
  size = 20,
  className = "",
  itemClassName = "",
}: {
  size?: number;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={`flex gap-5 ${className}`}>
      {socials.map((s) => {
        const Icon = iconMap[s.key];
        return (
          <li key={s.key}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className={`text-slate hover:text-green focus-visible:text-green transition-colors ${itemClassName}`}
            >
              <Icon size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
