import { projects } from './director/project-data';
import Link from 'next/link';
import { PageBackground } from "./lib/types/PageBackground";
import Page from './components/Page';

export const background: PageBackground = {
  type: "image",
  src: "/Fondo_WAQB.jpg",
};

export default function Home() {
  return (
    <Page background={background}>
      <div className="flex min-h-dvh items-end justify-start">
        <nav aria-label="Projects" className="px-10 pb-10 min-w-full">
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/director/${project.slug}`}
                  className="block text-[15px] font-medium leading-[30px] lowercase text-white/50 hover:text-white transition-colors"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Page>
  );
};