"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    src: "/pro3.png",
    title: "Starbucksreserve",
    description: "NextJS, GSAP, ThreeJS, Tailwind",
    ae: "https://www.starbucksreserve.com/",
  },
  {
    src: "/pro1.png",
    title: "Frog",
    description: "React, Graphql, LS, Tailwind",
    ae: "https://www.frog.co/",
  },
  {
    src: "/pro2.png",
    title: "Artsmia",
    description: "React.js, Next.js, Tailwind ",
    ae: "https://new.artsmia.org/",
  },
  {
    src: "/rame.png",
    title: "askona",
    description: "React.js, Mern ",
    ae: "https://www.askona.ru/",
  },
  {
    src: "/sigmaa.png",
    title: "sigmapool",
    description: "React.js,MERN ",
    ae: "https://sigmapool.com/",
  },
  {
    src: "/alep.png",
    title: "alephzero",
    description: "React.js, Next.js Threejs ",
    ae: "https://alephzero.org/",
  },
];

const ProjectCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "prev" | "next") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "next" ? 300 : -300;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div
        ref={carouselRef}
        className="flex py-[-40px] space-x-4 overflow-x-auto  no-scrollbar"
      >
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-80">
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
              ae={project.ae}
              className="h-full"
            />
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => handleScroll("prev")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
      >
       PR3V
      </button>
      <button
        onClick={() => handleScroll("next")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
      >
      N3XT
      </button>
    </div>
  );
};

export default ProjectCarousel;
