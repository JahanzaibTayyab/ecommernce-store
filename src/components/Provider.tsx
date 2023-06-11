"use client";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { store } from "@/store";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <NextNProgress height={7} />
          {children}
        </ThemeProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </Provider>
    </SessionProvider>
  );
}

export default Providers;
