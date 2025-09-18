import Experience from "@/components/WorkExperienceItem";
import data from "@/lib/education.json";

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  description?: string;
  highlights?: string[];
  logo?: string;
};

const education = data as EducationItem[];

export default function Education() {
  return (
    <div className="max-w-screen-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="relative">
        <div className="absolute left-0 inset-y-0 border-l-1" />
        {education.map(
          ({ school, degree, period, description, highlights }, index) => (
            <Experience
              key={index}
              header={school}
              title={degree}
              period={period}
              description={description}
              chips={highlights}
              imageSrc={
                typeof (education[index] as EducationItem).logo === "string" &&
                (education[index] as EducationItem).logo
                  ? ((education[index] as EducationItem).logo as string)
                  : `/images/${school.toLowerCase().replace(/ /g, "-")}.jpg`
              }
              imageAlt={school}
            />
          )
        )}
      </div>
    </div>
  );
}
