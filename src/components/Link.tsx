import { type AnchorLink } from "../types/portfolio";

const Link = ({ value, hrefs, className }: AnchorLink) => (
  <a href={hrefs} className={className}>{value}</a>
)

export { Link }