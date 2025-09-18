import Intro from "@/components/Intro";
import Education from "@/components/Education";
// import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import TechStack from "@/components/TechStack";

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
      <section id="tech-stack">
        <TechStack />
      </section>
      {/* <section id="projects">
        <Projects />
      </section> */}
    </main>
  );
}
