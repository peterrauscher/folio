import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";
import Image from "next/image";
import data from "@/lib/education.json";

type EducationItem = {
  school: string;
  degree: string;
  period: string; // e.g., "2018 – 2022"
  description?: string;
  highlights?: string[];
  logo?: string; // optional custom logo path under /public/images
};

const education = data as EducationItem[];

export default function Education() {
  return (
    <div className="max-w-screen-md mx-auto px-3 md:px-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {education.map(
          ({ school, degree, period, description, highlights }, index) => (
            <div key={index} className="relative pl-10 pb-8 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-background">
                <GraduationCap className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src={
                        typeof (education[index] as EducationItem).logo ===
                          "string" && (education[index] as EducationItem).logo
                          ? ((education[index] as EducationItem).logo as string)
                          : `/images/${school
                              .toLowerCase()
                              .replace(/ /g, "-")}.jpg`
                      }
                      alt={school}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-semibold">
                    {school}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{degree}</h3>
                  <div className="flex items-center gap-2 mt-0.5 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                {description && (
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {description}
                  </p>
                )}
                {highlights && highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {highlights.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
