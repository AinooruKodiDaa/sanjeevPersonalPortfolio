/**Global Styles*/
import "../styles/globals.css";
/* Types */
import type { NextPage } from "next";
import type { AppProps } from "next/app";

/**Font*/
import { Montserrat, Lato, Abel } from "next/font/google";

/* React Query */
import { queryClient } from "@src/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { darkTheme, lightTheme } from "../stitches.config";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

//font lato custom
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  // variable: "--globalFont",
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  /* Get available layouts */
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      {" "}
      <QueryClientProvider client={queryClient}>
        <meta name="viewport" content="initial-scale=0.5, width=device-width" />
        <main className={montserrat.className}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
