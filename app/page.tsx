import Intro from "@/components/Intro";
import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-4">
      <section id="introduction">
        <Intro />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </main>
  );
}
