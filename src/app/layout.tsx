import type { Metadata } from "next";

import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Box from "@mui/material/Box";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Noukies poëzie",
  description: "By Michiel Doorn",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Box maxWidth={"1440px"} margin={"auto"} minHeight={"100vh"}>
            <Navbar/>
            {children}
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
