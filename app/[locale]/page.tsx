import { projects } from './director/project-data';
import Link from 'next/link';
import { PageBackground } from "../types/PageBackground";
import Page from '../components/Page';
import { getDictionary } from "@/lib/getDictionary";

export const background: PageBackground = {
  type: "image",
  src: "/Fondo_WAQB.jpg",
};


export default function Home({ params }) {
  const dict = getDictionary(params.locale);

  return (
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
            <ul className="w-1/7">
            {projects.map((project) => (
              <li key={project.id}>
                <Link href={`/director/${project.slug}`}>{project.title}</Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </Page>
    <div className='flex justify-center px-10'>
      <h1> EL RESTO DE AQUI PA ABAJO</h1>  
      <section>
        <h1 className="text-3xl font-bold">{dict.home.title}</h1>
        <p className="mt-4 text-lg">{dict.home.description}</p>
      </section>      
    </div>
    </>
  );
};