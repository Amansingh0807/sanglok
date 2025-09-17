import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { LoadingProvider } from "@/contexts/LoadingContext";
import RouteLoaderWrapper from "@/components/ui/route-loader-wrapper";
import RouterLoadingHandler from "@/components/ui/router-loading-handler";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SangLok",
  description: "A Project Management Tool for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <LoadingProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <RouterLoadingHandler />
            <RouteLoaderWrapper />
            {children}
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
