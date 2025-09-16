import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, FileText } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 inset-x-4 h-12 bg-background border dark:border-slate-700/70 max-w-screen-sm mx-auto rounded-full">
      <div className="h-full w-full flex items-center justify-center gap-3 px-3">
        {/* Primary links */}
        <Button asChild variant="ghost" size="sm" aria-label="Home">
          <Link href="/">
            <Home />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" size="sm" aria-label="Blog">
          <Link href="/blog">
            <FileText />
            <span className="hidden sm:inline">Blog</span>
          </Link>
        </Button>

        {/* Divider */}
        <span className="mx-1 h-5 w-px bg-border" />

        {/* Social icons */}
        <Link
          href="https://github.com/peterrauscher"
          target="_blank"
          aria-label="GitHub"
          className="p-2 rounded-md hover:bg-accent"
        >
          <SiGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/peter-rauscher/"
          target="_blank"
          aria-label="LinkedIn"
          className="p-2 rounded-md hover:bg-accent"
        >
          <Linkedin className="size-4" />
        </Link>
        <Link
          href="https://www.x.com/peterauscher"
          target="_blank"
          aria-label="X (Twitter)"
          className="p-2 rounded-md hover:bg-accent"
        >
          <SiX />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
