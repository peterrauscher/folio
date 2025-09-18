"use client";

import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
};

const DEFAULT_SKILLS: Skill[] = [
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Django" },
  { name: "PostgreSQL" },
  { name: "Redis" },
  { name: "GraphQL" },
  { name: "AWS" },
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "Terraform" },
  { name: "Tailwind CSS" },
  { name: "Prisma" },
  { name: "tRPC" },
  { name: "Vite" },
  { name: "Vitest" },
  { name: "Playwright" },
  { name: "Git" },
  { name: "CI/CD" },
];

export default function Skills({
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
