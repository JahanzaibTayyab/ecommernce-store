"use client";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { store } from "@/store";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <NextNProgress height={6} />
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default Providers;
