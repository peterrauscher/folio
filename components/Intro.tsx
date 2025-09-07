import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const IntroHero = () => (
  <div className="max-w-screen-md mx-auto px-3 md:px-6">
    <div className="flex justify-between gap-2">
      {/* Name and intro */}
      <div className="flex flex-col flex-1 space-y-1.5">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold">
          Hey, I&apos;m Peter 👋
        </h1>
        <p className="md:text-xl text-lg max-w-[600px]">
          Software engineer working at the intersection of e-commerce and
          finance. Learning, building, and progressing daily.
        </p>
      </div>

      {/* Headshot */}
      <Avatar className="w-32 h-32">
        <AvatarImage src="/images/headshot.jpg" />
        <AvatarFallback>PR</AvatarFallback>
      </Avatar>
    </div>
    <div className="flex flex-col gap-2 pt-8">
      <h2 className="text-2xl font-bold">About</h2>
      <p>
        I work as a software engineer{" "}
        <Link
          href="https://perpay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white font-bold dark:bg-blue-600 rounded-full"
          >
            @ Perpay
          </Badge>
        </Link>{" "}
        desiging, building, and scaling the backend systems powering our
        marketplace. In my free time, I work on projects like SoleSearch,
        GhostPost, and Churnable. I like to write about software, fitness,
        urbanism, and personal growth.
      </p>
    </div>
  </div>
);

export default IntroHero;
