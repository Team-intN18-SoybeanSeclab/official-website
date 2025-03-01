"use client";

import DesktopLayout from "@/components/layout/DesktopLayout";
import MainLayout from "@/components/layout/MainLayout";
import MobileLayout from "@/components/layout/MobileLayout";
import { useScreenSize } from "@/context/ScreenSizeContext";

export default function Home() {
  const { isMobile } = useScreenSize();

  return (
    <MainLayout>{isMobile ? <MobileLayout /> : <DesktopLayout />}</MainLayout>
  );
}
