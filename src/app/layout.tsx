import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import AnimatedGradient from "@/components/animate-gradient";
import GlassNavigation from "@/components/glass-nav";
import NavItemProvider from "@/context/nav-item-provider";
import { ThemeProvider } from "@/context/theme-provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of a Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavItemProvider>
            <AnimatedGradient />
            <GlassNavigation />
            {children}
            <Analytics />
          </NavItemProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
