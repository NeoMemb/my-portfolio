import { links } from '../../src/data/portfolio';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6"
import { type IconType } from 'react-icons/lib';
const iconMap: Record<string, IconType> = { 
  GitHub: FiGithub,
  LinkedIn:  FiLinkedin, 
  X_Twitter: FaXTwitter,
  Instagram: FaInstagram
};

export const socialLinks: {
  icon: IconType;
  url: string;
  label: string;
}[] = links.social.map( (item) => ({
  icon: iconMap[item.platform],
  url: item.url,
  label: item.platform
}))
