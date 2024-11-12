import {
  BookOpenText,
  Handshake,
  Library,
  Notebook,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderLeftContent = {
  links: [
    {
      title: "Library",
      href: "/library",
      icons: <Library size={16} />,
    },
    {
      title: "Journal",
      href: "/journal",
      icons: <Notebook size={16} />,
    },
    {
      title: "Magazine",
      href: "/magazine",
      icons: <BookOpenText size={16} />,
    },
  ],
};

const HeaderRightContent = {
  links: [
    {
      title: "Alumni",
      href: "/alumni",
      icons: <Users size={16} />,
    },
    {
      title: "Teams",
      href: "/teams",
      icons: <Handshake size={16} />,
    },
  ],
};

const HeaderNav = () => {
  return (
    <div className='flex justify-between bg-[#f1f1f1] h-[48px] items-center px-4 text-black '>
      {/* left-content  */}
      <div className='flex gap-4'>
        {HeaderLeftContent.links.map((link) => {
          return (
            <ul key={link.title}>
              <Link href={link.href} className='flex items-center gap-1'>
                {" "}
                <span className='hidden lg:flex'>{link.icons}</span>
                {""}
                {link.title}
              </Link>
            </ul>
          );
        })}
      </div>
      {/* right-content  */}
      <div className='flex gap-4'>
        {HeaderRightContent.links.map((link) => {
          return (
            <ul key={link.title}>
              <Link href={link.href} className='flex items-center gap-1'>
                {" "}
                <span className='hidden lg:flex'>{link.icons}</span>
                {""}
                {link.title}
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderNav;
