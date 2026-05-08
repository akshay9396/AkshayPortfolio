import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { resume } from "@/data/resume";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${resume.name} - ${resume.experience[0]?.role ?? 'AI / ML Engineer'}`,
  description: `Portfolio of ${resume.name} – M.Eng. graduate, AI/ML Engineer with 6+ years building production computer vision pipelines, LLM systems, and edge AI deployments.`,
  icons: {
    icon: "/avatar.png?v=20260502",
    shortcut: "/avatar.png?v=20260502",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* FOWT prevention: apply stored theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: 'var(--font-display), Sora, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
