import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { muiTheme } from "@/lib/mui-theme";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PHUOCONG Estate - Bất Động Sản Cao Cấp Việt Nam",
  description:
    "Khám phá những bất động sản đẳng cấp nhất. Trải nghiệm cuộc sống mà bạn hằng mơ ước với đội ngũ chuyên gia giàu kinh nghiệm.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logoWhite.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logoWhite.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logoWhite.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logoWhite.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
