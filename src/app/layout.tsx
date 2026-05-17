import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskBoard MVP Screens",
  description: "TaskBoard MVP screen previews split across App Router pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="noise min-h-full overflow-x-hidden text-slate-100 selection:bg-cyan-400/20 selection:text-cyan-100">
        {children}
      </body>
    </html>
  );
}
