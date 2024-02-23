"use client";

import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

const ThemeProviders = ({ children }: ProvidersProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeProviders;
