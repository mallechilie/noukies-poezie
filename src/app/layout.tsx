import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Box from "@mui/material/Box";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";

export const metadata: Metadata = {
  title: "Nouks poëzie",
  description: "By Michiel Doorn"
};

function Components({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "1440px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Footer sx={{ flexShrink: 0 }} />
    </Box>
  );
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <link rel="icon" type="image/jpg" href="./favicon.ico" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Components>{children}</Components>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
