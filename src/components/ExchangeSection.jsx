import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { ExchangeForm } from "./ExchangeForm";
import { RentEnergyForm } from "./RentEnergyForm";

export const ExchangeSection = ({theme}) => {
  return (
    <section className="mb-[12px]">
      <Tabs defaultValue="exchange" className="w-full">
        <TabsList className="mb-[12px] w-full" >
          <TabsTrigger 
            value="exchange" 
            active 
            className="max-w-40 flex-1 rounded-[112px] bg-[#191919] data-[state=inactive]:bg-[#191919] data-[state=active]:bg-transparent text-white border border-solid border-transparent data-[state=active]:border-white px-6 py-2.5 font-medium opacity-50 bg-[#191919] data-[state=active]:text-white text-[20.4px] tracking-[1.02px] leading-[26px] data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:opacity-100">
            EXCHANGE
          </TabsTrigger>
          <TabsTrigger 
            value="rent-energy" 
            className="max-w-60 flex-1 rounded-[122px] data-[state=inactive]:bg-[#191919] px-6 py-2.5 font-medium text-white text-[20.4px] tracking-[1.02px] leading-[26px] opacity-50 bg-[#191919] data-[state=active]:text-white data-[state=active]:opacity-100 data-[state=active]:bg-transparent border border-transparent border-solid data-[state=active]:border-white">
            RENT ENERGY
          </TabsTrigger>
        </TabsList>
        <TabsContent value="exchange">
          <ExchangeForm exchangeRate={5.55} theme={theme}/>
        </TabsContent>
        <TabsContent value="rent-energy">
          <RentEnergyForm />
        </TabsContent>
      </Tabs>
    </section>
  );
};