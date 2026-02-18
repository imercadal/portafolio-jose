"use client";

import BackgroundWrapper from "./BackgroundWrapper";
import { PageBackground } from "../lib/types/PageBackground";

export default function Page({
  background,
  children,
}: {
  background: PageBackground;
  children: React.ReactNode;
}) {
  return (
    <BackgroundWrapper background={background}>
      {children}
    </BackgroundWrapper>
  );
}