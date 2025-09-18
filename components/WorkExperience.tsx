import Experience from "@/components/WorkExperienceItem";
import experiencesData from "@/data/experience.json";

type ExperienceItem = {
  title: string;
  company: string;
  url?: string;
  period: string;
  description?: string | string[];
};

const experiences = experiencesData as ExperienceItem[];

export default function WorkExperience() {
  return (
    <div className="max-w-screen-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="relative">
        <div className="absolute left-0 inset-y-0 border-l-1" />
        {experiences.map(
          ({ company, description, period, title, url }, index) => (
            <Experience
              key={index}
              header={company}
              title={title}
              period={period}
              description={description}
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
