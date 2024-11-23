import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  ae: string;
  className?: string;
}

const ProjectCard: React.FC<Props> = ({ src, title, description, ae }) => {
  return (
    <a
      href={ae}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative overflow-hidden rounded-lg shadow-lg border border-purple-800 transition-transform hover:scale-105"
    >
      <div>
        <Image
          src={src}
          alt={title}
          width={1200}
          height={1200}
          className="w-full object-contain"
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
