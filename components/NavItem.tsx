import Link from "next/link";
const NavItem = ({ text, href, active }: any) => {
  return (
    <Link href={href} className={`nav__link text-white font-black uppercase ${active ? "active" : ""}`}>{text}</Link>
  );
};

export default NavItem;