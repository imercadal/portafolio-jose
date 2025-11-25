import { Project } from '../director/project-data';

interface FilmProjectProps {
    project: Project;
};

export default function ProjectDetails({ project }: FilmProjectProps){
    return(
        <div className='p-10'>
            <h1>{project.title}</h1>
        </div>
    )
}

/*
'use client'
import { useState, useCallback, useEffect } from 'react';
import Image from "next/image";
import { Project } from "@/app/cinematography/project-data";
import Modal from './ui/Modal';

interface FilmProjectProps {
  project: Project;
}

export default function FilmProject({ project }: FilmProjectProps) {
  const [selectedStill, setSelectedStill] = useState<string | null>(null);

  const nextImage = useCallback(() => {
    if (!selectedStill || !project.stills || project.stills.length === 0) return;
    const currentIndex = project.stills.indexOf(selectedStill);
    const nextIndex = (currentIndex + 1) % project.stills.length;
    setSelectedStill(project.stills[nextIndex]);
  }, [selectedStill, project.stills]);

  const prevImage = useCallback(() => {
    if (!selectedStill || !project.stills || project.stills.length === 0) return;
    const currentIndex = project.stills.indexOf(selectedStill);
    const prevIndex =
      (currentIndex - 1 + project.stills.length) % project.stills.length;
    setSelectedStill(project.stills[prevIndex]);
  }, [selectedStill, project.stills]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedStill(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextImage, prevImage]);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header Section with Poster and Info *
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Poster *
          <div className="relative aspect-[8/12] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-lg 2shadow-xl">
            <Image
              src={project.poster || "/placeholder.svg"}
              alt={`${project.title} poster`}
              fill
              className="object-cover rounded-lg shadow-xl transition-transform hover:scale-105"
              priority
            />
          </div>

          {/* Film Info *
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{project.title}</h1>
              <p className="text-sm text-muted-foreground">{project.year}  ᐧ  {project.country}  ᐧ  {project.duration} min</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground leading-relaxed">{project.logline}</p>
            </div>
              {project.festivals && project.festivals.length > 0 && (
                <div className="mt-2 flex">
                  <p className="inline text-xs pr-6">Official Selections & Awards </p>
                  <div>
                    {project.festivals.map((festival, index) => (
                      <p key={index} className="text-xs pr-2 pb-1">
                        {festival}
                      </p>
                    ))}
                  </div>
              </div>
              )}

            <div>
              <h2 className="text-base font-semibold text-foreground mb-4">Credits</h2>
              <div className="space-y-3">
                {project.credits.map(
                  (credit: Project["credits"][number], index: number) => (
                  <div key={index} className="text-xs flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="font-medium text-foreground min-w-0 sm:min-w-[120px]">{credit.role}:</span>
                    <span className="text-muted-foreground">{credit.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stills Section *
        {project.stills && project.stills.length > 0 &&(
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Stills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.stills.map((still, index) => (
              <div 
              key={index} 
              onClick={() => setSelectedStill(still)}
              className="overflow-hidden group cursor-pointer bg-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={still || "/placeholder.svg"}
                      alt={`${project.title} still ${index + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
              </div>
            ))}
          </div>
        </div>
        )}

      </div>
      <Modal isOpen={!!selectedStill} onClose={() => setSelectedStill(null)}>
        {selectedStill && (
          <Image 
            src={selectedStill}
            alt={`${project.title} full still`}
            width={1920}
            height={1080}
            className='mx-auto rounded-lg'
          />
        )}
        <div className='absolute inset-y-0 left-6 z-50 flex items-center'>
          <button onClick={prevImage} className='text-white text-xl'>‹</button>
        </div>
        <div className='absolute inset-y-0 right-6 flex items-center'>
          <button onClick={nextImage} className='text-white text-xl'>›</button>
        </div>
      </Modal>
    </>
  )
}

/*

  const nextImage = useCallback(() => {
    if (!selectedPhoto) return
    const currentIndex = project.stills.indexOf(selectedPhoto)
    const nextIndex = (currentIndex + 1) % project.stills.length
    setSelectedPhoto(project.stills[nextIndex])
  }, [selectedPhoto, project.stills])

  */