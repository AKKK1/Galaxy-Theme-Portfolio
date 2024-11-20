import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  ae: string;
}

const ProjectCard = ({ src, title, description, ae }: Props) => {
  return (
    <>
    <a 
      href={ae}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform hover:scale-105"
    >
      <div>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white md:text-1xl">
            {title}
          </h1>
          
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
    </>
  );
};

export default ProjectCard;