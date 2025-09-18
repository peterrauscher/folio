import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Tooltip from "@/components/ui/tooltip";

export const IntroHero = () => (
  <div className="max-w-screen-md mx-auto">
    <div className="flex justify-between gap-2 md:gap-4">
      <div className="flex flex-col flex-1 space-y-2">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold">
          <span className="whitespace-nowrap">Hey, I&apos;m</span>
          <wbr />
          <span> Peter 👋</span>
        </h1>
        <p className="md:text-xl text-lg max-w-[600px]">
          Software engineer working at the intersection of e-commerce and
          finance. Learning, building, and progressing daily.
        </p>
      </div>

      <Avatar className="w-32 h-32 border-2">
        <AvatarImage
          src="/images/headshot.jpg"
          className="object-cover object-center"
        />
      </Avatar>
    </div>
    <div className="flex flex-col gap-2 pt-8">
      <h2 className="text-2xl font-bold">About</h2>
      <p>
        I currently work at{" "}
        <Tooltip content="Open perpay.com" className="align-middle">
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
          </Link>
        </Tooltip>{" "}
        desiging, building, and scaling the backend systems powering our
        marketplace. In my free time I write about software, AI, personal
        health, and self-improvement.
      </p>
    </div>
  </div>
);

export default IntroHero;
