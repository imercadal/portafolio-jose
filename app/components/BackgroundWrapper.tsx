"use client";

import { PageBackground } from '../lib/types/PageBackground';

export default function BackgroundWrapper({ 
    background, children 
}: {
    background: PageBackground;
    children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh">
      {background?.type === "image" && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background.src})` }}
        />
      )}

      {background?.type === "video" && (
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={background.src} type="video/mp4" />
        </video>
      )}
      {children}
    </div>
  );
}
