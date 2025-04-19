import { Head } from "next/document";
import Link from "next/link";
import React from "react";

interface HeaderLinkProps {
  linkUrl: string;
  linkText: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ linkUrl, linkText }) => {
  return (
    <Link
      href={linkUrl}
      className="font-semibold hover:text-[#61398F] hover:scale-110 hover:font-semibold transition-all ease-in-out"
    >
      {linkText}
    </Link>
  );
};

export default HeaderLink;
