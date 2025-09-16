import Experience from "@/components/Experience";

const experiences = [
  {
    title: "Software Engineer",
    company: "Perpay",
    url: "https://www.perpay.com",
    period: "April 2024 - Present",
    description:
      "Building the backend systems powering our marketplace storefront.",
    technologies: [
      "Python",
      "Django",
      "React",
      "AWS",
      "Kubernetes",
      "PostgreSQL",
    ],
  },
  {
    title: "Software Engineer",
    company: "Almo Corporation",
    url: "https://www.almo.com",
    period: "July 2023 - April 2024",
    description:
      "Accelerated integration development by creating a reusable EDI X12 library for C#. Onboarded 20+ e-commerce clients with custom .NET integrations, unlocking millions in revenue.",
    technologies: ["C#", ".NET", "React"],
  },
  {
    title: "Software Engineer Intern",
    company: "Almo Corporation",
    url: "https://www.almo.com",
    period: "June 2019 - August 2019",
    description:
      "Developed a real-time inventory and pricing API, which significantly reduced out-of-stock order cancellations. Built internal tooling and dashboards to automate business processes and replace spreadsheets.",
    technologies: ["C#", ".NET Framework", "Microsoft SQL Server"],
  },
];

export default function WorkExperience() {
  return (
    <div className="max-w-screen-md mx-auto py-6 md:py-8 px-2 md:px-4">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-1" />
        {experiences.map(
          ({ company, description, period, title, technologies, url }, index) => (
            <Experience
              key={index}
              header={company}
              title={title}
              period={period}
              description={description}
              chips={technologies}
              imageSrc={`/images/${company
                .toLowerCase()
                .replace(/ /g, "-")}.jpg`}
              imageAlt={company}
              href={url}
            />
          )
        )}
      </div>
    </div>
  );
}
