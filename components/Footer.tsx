"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";

const LINKS = [
  {
    href: "https://open.spotify.com/user/peterrauscher17",
    label: "Spotify",
    icon: Icons.spotify,
  },
  {
    href: "https://trakt.tv/users/peterrauscher",
    label: "Trakt",
    icon: Icons.trakt,
  },
  {
    href: "https://www.goodreads.com/peterrauscher",
    label: "Goodreads",
    icon: Icons.goodreads,
  },
];

export default function Footer() {
  return (
    <footer className="my-10 px-4">
      <div className="mx-auto max-w-screen-md space-y-6">
        <hr className="border-border" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">Consume what I consume.</p>
          <div className="flex items-center gap-4">
            {LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
