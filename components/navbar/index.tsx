"use client";

import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Book } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { SLinkedin } from "../icons/linkedin";

type DockItem = {
  key: string;
  render: () => JSX.Element;
  ariaLabel?: string;
};

const Navbar = () => {
  // Track mouse X for dock-like magnification
  const [mouseX, setMouseX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items: DockItem[] = useMemo(
    () => [
      {
        key: "home",
        ariaLabel: "Home",
        render: () => (
          <Button
            asChild
            variant="ghost"
            size="sm"
            aria-label="Home"
            className="hover:bg-transparent hover:text-inherit"
          >
            <Link href="/">
              <Home className="size-5" />
            </Link>
          </Button>
        ),
      },
      {
        key: "blog",
        ariaLabel: "Blog",
        render: () => (
          <Button
            asChild
            variant="ghost"
            size="sm"
            aria-label="Blog"
            className="hover:bg-transparent hover:text-inherit"
          >
            <Link href="/blog">
              <Book className="size-5" />
            </Link>
          </Button>
        ),
      },
      {
        key: "divider",
        render: () => <span className="mx-1 h-5 w-px bg-border" />,
      },
      {
        key: "github",
        ariaLabel: "GitHub",
        render: () => (
          <Link
            href="https://github.com/peterrauscher"
            target="_blank"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-transparent"
          >
            <SiGithub className="size-5" />
          </Link>
        ),
      },
      {
        key: "linkedin",
        ariaLabel: "LinkedIn",
        render: () => (
          <Link
            href="https://www.linkedin.com/in/peter-rauscher/"
            target="_blank"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-transparent"
          >
            <SLinkedin className="size-5" />
          </Link>
        ),
      },
      {
        key: "x",
        ariaLabel: "X (Twitter)",
        render: () => (
          <Link
            href="https://www.x.com/peterauscher"
            target="_blank"
            aria-label="X (Twitter)"
            className="p-2 rounded-md hover:bg-transparent"
          >
            <SiX className="size-5" />
          </Link>
        ),
      },
      // {
      //   key: "divider",
      //   render: () => <span className="mx-1 h-5 w-px bg-border" />,
      // },
      // {
      //   key: "toggle",
      //   ariaLabel: "Toggle Theme",
      //   render: () => (
      //     <Button
      //       variant="ghost"
      //       size="sm"
      //       aria-label="Toggle Theme"
      //       className="hover:bg-transparent hover:text-inherit"
      //     >
      //       <Sun className="size-5" />
      //     </Button>
      //   ),
      // },
    ],
    []
  );

  const setRefAt = useCallback((el: HTMLDivElement | null, idx: number) => {
    itemRefs.current[idx] = el;
  }, []);

  const getScaleForIndex = useCallback(
    (idx: number) => {
      // Do not magnify the divider
      if (items[idx]?.key === "divider") return 1;

      if (mouseX == null) return 1;
      const el = itemRefs.current[idx];
      if (!el) return 1;
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(mouseX - center);
      // Tunables for the Dock-like effect
      const maxScale = 1.4; // peak scale at cursor
      const sigma = 20; // spread of the influence in px
      const influence = Math.exp(-(distance * distance) / (2 * sigma * sigma));
      return 1 + (maxScale - 1) * influence;
    },
    [mouseX, items]
  );

  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-slate-700/70"
      aria-label="Primary navigation"
    >
      <div
        ref={containerRef}
        className="flex items-center justify-center gap-2 px-3 py-1"
        onMouseMove={(e) => setMouseX(e.clientX)}
        onMouseLeave={() => setMouseX(null)}
      >
        {items.map((item, idx) => {
          const scale = getScaleForIndex(idx);
          return (
            <div
              key={item.key}
              ref={(el) => setRefAt(el, idx)}
              style={{
                transform: `translateZ(0) scale(${scale})`,
                transformOrigin: "bottom center",
                transition: "transform 120ms ease-out",
                willChange: "transform",
              }}
              className={
                item.key === "divider"
                  ? "mx-1 h-5 w-px bg-border"
                  : "inline-flex items-center justify-center"
              }
              aria-label={item.ariaLabel}
            >
              {item.render()}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
