import React from "react";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TrxPrimeRed } from "./screens/TrxPrimeRed/TrxPrimeRed";

export const App = () => {
  const theme = "red"; // or "green"

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "green") {
      root.classList.add("theme-green");
    } else {
      root.classList.remove("theme-green");
    }
  }, [theme]);
  
  return (
    <>
      <Header />
      <main>
        <TrxPrimeRed theme={theme} />
      </main>
      <Footer />
    </>
  );
};
