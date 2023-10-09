import Link from "next/link";

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
  ];

  return (
    <nav className="w-full flex flex-row justify-start gap-x-9 pl-9 py-3 border-b border-foreground/20">
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
