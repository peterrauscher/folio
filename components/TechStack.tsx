"use client";

import { Badge } from "@/components/ui/badge";
import skillsData from "@/data/skills.json";

type Skill = {
  name: string;
};

const DEFAULT_SKILLS: Skill[] = skillsData as Skill[];

export default function TechStack({
  skills = DEFAULT_SKILLS,
}: {
  skills?: Skill[];
}) {
  return (
    <div className="max-w-screen-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant="secondary"
            className="rounded-full select-none cursor-default transition-colors hover:bg-secondary/80 dark:hover:bg-secondary/70"
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
