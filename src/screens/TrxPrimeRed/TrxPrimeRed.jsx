import React from "react";

import { ExchangeSection } from "../../components/ExchangeSection";
import { Hero } from "../../components/Hero";
import { Steps } from "../../components/Steps";
import { Faq } from "../../components/Faq";
import { Service } from "../../components/Service";
import { Feature } from "../../components/Feature";
import { Referral } from "../../components/Referral";
import { Backgrounds } from "../../components/Backgrounds";

export const TrxPrimeRed = ({ theme }) => {
  return (
    <div className="bg-[#252525] flex flex-row justify-center w-full overflow-hidden">
      <div className="bg-[#252525] relative size-full">
        <Backgrounds theme={theme} />

        <main className="relative z-10 pt-[92px] px-5 max-w-[700px] mx-auto">
          <Hero />
          <ExchangeSection theme={theme} />
          <Steps />
          <Faq />
          <Service />
          <Feature />
          <Referral />
        </main>
      </div>
    </div>
  );
};
