import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
        ae="https://www.starbucksreserve.com/"
          src="/pro3.png"
          title="Starbucksreserve.com"
          description="NextJS, GSAP, ThreeJS, Tailwind"
        />
      
        <ProjectCard
        ae="https://www.frog.co/"
          src="/pro1.png"
          title="Frog.co"
          description="React, Gsap, LS, Tailwind "
        />
        <ProjectCard
        ae="https://new.artsmia.org/"
          src="/pro2.png"
          title="Artsmia.org"
          description="React.js (as their main JavaScript framework)
Next.js (for server-side rendering and routing) "
          
        />
      </div>
    </div>
  );
};

export default Projects;
