import { Badge } from "@/components/ui/badge";
import { CreditCard, Truck, Container, Calendar } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Software Engineer",
    company: "Perpay",
    period: "April 2024 - Present",
    description:
      "Built the backend systems powering our marketplace storefront.",
    technologies: [
      "Python",
      "Django",
      "React",
      "AWS",
      "Kubernetes",
      "PostgreSQL",
    ],
    icon: CreditCard,
  },
  {
    title: "Software Engineer",
    company: "Almo Corporation",
    period: "July 2023 - April 2024",
    description:
      "Accelerated integration development by creating a reusable EDI X12 library for C#. Onboarded 20+ e-commerce clients with custom .NET integrations, unlocking millions in revenue.",
    technologies: ["C#", ".NET", "React"],
    icon: Container,
  },
  {
    title: "Software Engineer Intern",
    company: "Almo Corporation",
    period: "June 2019 - August 2019",
    description:
      "Developed a real-time inventory and pricing API, which significantly reduced out-of-stock order cancellations. Built internal tooling and dashboards to automate business processes and replace spreadsheets.",
    technologies: ["C#", ".NET Framework", "Microsoft SQL Server"],
    icon: Truck,
  },
];

export default function WorkExperience() {
  return (
    <div className="max-w-screen-md mx-auto py-6 md:py-8 px-2 md:px-4">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="relative ml-2">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-1" />

        {experiences.map(
          (
            { company, description, period, technologies, title, icon: Icon },
            index
          ) => (
            <div key={index} className="relative pl-10 pb-8 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-background">
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                    <Image
                      src={`/images/${company
                        .toLowerCase()
                        .replace(" ", "-")}.jpg`}
                      alt={company}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-semibold">
                    {company}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                  <div className="flex items-center gap-2 mt-0.5 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {description}
                </p>
                <div className="flex flex-wrap gap-1">
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
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
