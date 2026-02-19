import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Fixed background — sm+ only */}
      <div className="hidden sm:block fixed inset-0 -z-10">
        <Image src="/About_photo.webp" alt="" fill className="object-cover" />
      </div>

      {/* Mobile hero — below sm only */}
      <div className="relative h-[360px] sm:hidden">
        <Image src="/About_photo.webp" alt="José Manuel Vélez" fill className="object-cover" />
      </div>

      {/* Bio + footer: fills remaining height on sm+, stacks below hero on mobile */}
      <div className="sm:min-h-dvh sm:flex sm:flex-col sm:justify-end">

        {/* Bio container */}
        <div className="
          bg-black px-6 py-8
          sm:bg-white sm:px-10 sm:pt-10 sm:pb-[90px]
          xl:bg-transparent
        ">
          {/* Content area: right-aligned only on xl */}
          <div className="xl:flex xl:justify-end">
            <div className="xl:w-[571px]">

              <p className="text-[15px] font-light leading-[23px] text-white sm:text-black xl:text-white mb-[23px]">
                José Manuel is a filmmaker and designer from Chile, with more than 15 years of
                experience. In that time, he has gone from designing title sequences, to writing
                and directing award winning films. He worked in Chile for 10 years before moving
                to New York City, where he worked in various independent film projects and later
                obtained his MFA in film at NYU. Now, back in Chile, he works as a writer,
                producer and director.
              </p>

              <p className="text-[15px] font-light leading-[23px] text-white sm:text-black xl:text-white mb-[23px]">
                His upbringing in a conservative and religious post-dictatorship country permeated
                the stories he tells: stories about queerness, shame, and the search for
                connection, framed with elements of magical realism. His debut short film, Fervor,
                received the Grand Jury Prize at NewFest and screened in festivals around the
                world, from Australia to India, Europe and the US.
              </p>

              <p className="text-[15px] font-light leading-[23px] text-white sm:text-black xl:text-white mb-[23px]">
                His next project, Travis, was supported with a mentorship with the Independent
                Spirit Award nominee filmmaker Isabel Sandoval. His latest short, Within a Quiet
                Body, recently premiered at NewFest. He is currently developing 2 feature films:
                About Lucas and Mountain Fever.
              </p>

              <p className="text-[15px] font-light leading-[23px] text-white sm:text-black xl:text-white mt-[23px]">
                <a href="mailto:jmvelezc@gmail.com"><p className="font-bold inline">Email </p>&nbsp;jmvelezc@gmail.com</a><br />
                <a href="https://vimeo.com/jmvelez" target="_blank" rel="noopener noreferrer"><p className="font-bold inline">Vimeo </p>&nbsp;jmvelez</a><br />
                <a href="https://instagram.com/eljosevelez" target="_blank" rel="noopener noreferrer"><p className="font-bold inline">Instagram </p>&nbsp;@eljosevelez</a><br />
                <a href="https://linkedin.com/in/jose-manuel-velez" target="_blank" rel="noopener noreferrer"><p className="font-bold inline">Linkedin </p>&nbsp;jose-manuel-velez</a>
              </p>

              <p className="text-[15px] font-bold leading-[23px] text-white sm:text-black xl:text-white mt-[23px]">
                Download resume
              </p>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/*

import { PageBackground } from "../lib/types/PageBackground";
import Page from '../components/Page';

export const background: PageBackground = {
  type: "image",
  src: "/About_photo.webp",
};

export default function AboutPage(){
    return(
        <Page background={background}>
            <div className="flex min-h-dvh items-end justify-start">
                <p>
                    José Manuel is a filmmaker and designer from Chile, with more than 15
                    years of experience. In that time, he has gone from designing title
                    sequences, to writing and directing award winning films. He worked in
                    Chile for 10 years before moving to New York City, where he worked in
                    various independent film projects and later obtained his MFA in film
                    at NYU. Now, back in Chile, he works as a writer, producer and director.
                </p>
                <p>Email  jmvelezc@gmail.com  —  Vimeo  jmvelez
                Instagram  @eljosevelez  —  Linkedin  jose-manuel-velez</p>
                <p>Download resume</p>
                  </div>
        </Page>
    )
}
*/
