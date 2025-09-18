"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import projectsData from "@/data/projects.json";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url?: string;
};

const PROJECTS: Project[] = projectsData as Project[];

export default function Projects({
  projects = PROJECTS,
}: {
  projects?: Project[];
}) {
  return (
    <div className="max-w-screen-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map(({ title, description, technologies, image, url }) => {
          const card = (
            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={image}
                  alt={`${title} preview`}
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex h-full flex-col gap-3 p-5">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
                {technologies?.length ? (
                  <div className="mt-auto flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          );

          if (url) {
            return (
              <Link
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                {card}
              </Link>
            );
          }

          return (
            <div key={title} className="h-full">
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}
