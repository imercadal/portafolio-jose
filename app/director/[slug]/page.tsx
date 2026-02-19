import { projects, Project  } from '../project-data';
import NotFoundPage from '@/app/not-found';
import ProjectDetails from '../../components/project-details';
import { PageBackground } from "../../lib/types/PageBackground";
import Page from '../../components/Page';

type Params = { slug: string };

export const background: PageBackground = {
  type: "image",
  src: "/Fondo_WAQB.jpg",
};

export default async function FilmDetailPage({ params }:{ params: Promise<Params>}){
  const { slug } = await params;

  const project: Project | undefined = projects.find(
        (p) => p.slug === slug
    )

    if (!project){
        return <NotFoundPage />
    }

    return(
      <>
        <Page background={background}>
          <div className="relative min-h-screen">
            <div className="flex min-h-dvh items-end justify-start">
              <div className="px-10 pb-10 min-w-full">
                <div className="sm:w-1/2 md:w-2/7">
                  <h1>{project.title}</h1>
                  <p className='body-text'>{project.year}, {project.country} &mdash; {project.language} &mdash; {project.duration} min. </p>
                  <p className='body-text italic pt-4'>{project.logline}</p>
                </div>
              </div>
            </div>
          </div>
        </Page>
        <div>
          <div className='pb-7'>
            {project.crew.map((role) => (
              <div key={role.role} className="px-10">
                <h6 className="font-bold inline">{role.role} </h6>
                <p className='body-text inline'>{role.name}</p>
              </div>
            ))}
          </div>
          <div className='pb-20'>
            {project.cast.map((role) => (
              <div key={role.role} className="px-10">
                <p className='body-text font-bold inline'>{role.name}</p>
                <h6 className="inline">{role.role} </h6>
              </div>
            ))}
          </div>
        </div>
        <ProjectDetails project={ project }/>
      </>
    )
} 

/*
import FilmProject from "@/components/film-project";
import NotFoundPage from "@/app/not-found";
import { movies, Movie } from '@/app/directing/movie-data';
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

type Params = { slug: string };

export default async function MovieDetailPage({ params } : { params: Promise<Params>}){
    const { slug } = await params;

    const movie: Movie | undefined = movies.find(
        (m) => m.slug === slug
    )

    if (!movie){
        return <NotFoundPage />
    }

    return(
        <main className="min-h-screen bg-background py-8 pt-20">
            <FilmProject project={movie} />
            <div className="flex justify-end pt-8 font-bold max-w-6xl mx-auto p-6">
              <Link href="/directing" className="flex items-center hover:text-yellow-500 transition-colors">
                <ArrowLongRightIcon className="inline h-6 w-6 pr-1"/>
                Back to projects
              </Link>
            </div>
        </main>
    )

};

export async function generateStaticParams(){
  return movies.map((m) => ({ slug: m.slug }));
};
*/