"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialLinks } from "../links";

export function Navbar() {
  const links = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "blog",
      href: "/blog",
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "about",
      href: "/about",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex w-full flex-row justify-between border-b border-foreground/20 px-48 py-3">
      <div className="flex flex-row gap-x-9">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className={pathname === link.href ? "text-primary-1" : "text-foreground"}>
            {link.name}
          </Link>
        ))}
      </div>
      <SocialLinks />
    </nav>
  );
}
