import AmbientBackground from "@/components/AmbientBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Hackathons from "@/components/Hackathons";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Research />
      <Hackathons />
      <Certifications />
      <Blogs />
    </>
  );
}
