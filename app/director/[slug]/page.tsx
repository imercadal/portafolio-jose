import { projects, Project  } from '../project-data';
import NotFoundPage from '@/app/not-found';
import ProjectDetails from '../../components/project-details';
import { PageBackground } from "../../types/PageBackground";
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
            <div
              className="
                absolute inset-0 
                -z-10
                bg-cover bg-center bg-no-repeat
              "
              style={{
                backgroundImage: "url('/Fondo_WAQB.jpg')",
              }}
            />
                    <div 
          className="flex min-h-dvh items-end justify-start"
        >
          <div className="px-10 pb-10 min-w-full"
          >
            <div className="w-2/7">
              <h1>{project.title}</h1>
              <p>{project.year}, {project.country} &mdash; {project.language} &mdash; {project.duration} min. </p>
              <p>{project.logline}</p>
            </div>
          </div>
        </div>
          </div>
        </Page>
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