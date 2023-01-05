import Link from "next/link";
const NavItem = ({ text, href, active }: any) => {
  return (
    <Link href={href} className={`nav__link text-slate-800 md:text-white`}>{text}</Link>
  );
};

export default NavItem;