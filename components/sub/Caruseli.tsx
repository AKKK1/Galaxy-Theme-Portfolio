import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { projects } from '@/constants'
import ProjectCard from './ProjectCard'
const Caruseli = () => {
  return (
    <Carousel
   
     className="w-3/4 md:w-3/4 ">
    <CarouselContent className="-ml-1 ">
      {projects.map((proj, index) => (
        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
      
         <ProjectCard title={proj.title} description={proj.description} src={proj.src} ae={proj.ae} className='' />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}

export default Caruseli