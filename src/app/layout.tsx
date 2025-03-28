import type { Metadata } from "next";
import "./globals.css";
import BackgroundPattern from "@/components/background/BackgroundPattern";
import MainContainer from "@/components/containers/MainContainer";
import '@fontsource-variable/inclusive-sans';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MainContainer>
        <BackgroundPattern color="text-slate-900" />
        {children}
      </MainContainer>
    </html>
  );
}
