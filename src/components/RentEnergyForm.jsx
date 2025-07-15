import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import energyIcon from "../assets/images/energy.svg"

export const RentEnergyForm = () => {
  const [selected, setSelected] = useState("1x");

  const energyMap = {
    "1x": 100,
    "2x": 200,
    "5x": 500,
    "10x": 1000,
  };

  const energy = energyMap[selected] ?? 0;

  return (
    <Card className="w-full bg-[#0000004c] rounded-xl backdrop-blur-[42px] border-none mb-8">
      <CardContent className="p-6">
      <QuantitySelector selected={selected} setSelected={setSelected} />
      <EnergyObtained energy={energy} />
        <Button className="w-full h-[60px] rounded-xl bg-white hover:bg-white/90 font-bold text-black text-[20.4px] tracking-[1.02px] mt-[41px] mb-[42px]">
          BUY ENERGY
        </Button>
        <AmountToPay />
        <ExchangeRateInfo />
      </CardContent>
    </Card>
  );
};



const QuantitySelector = ({ selected, setSelected }) => {
  const values = ["1x", "2x", "5x", "10x"];

  return (
    <div className="space-y-2">
      <div className="font-medium text-white text-sm leading-[20px]">
        Quantity of USDT transactions
      </div>
      <div className="opacity-60 text-white text-sm mb-1">
        Select 2× if the recipient has no USDT.
      </div>
      <div className="grid grid-cols-4 gap-2">
        {values.map((label) => (
          <button
            key={label}
            onClick={() => setSelected(label)}
            className={`h-[60px] border rounded-xl text-lg font-medium transition-colors
              ${
                selected === label
                  ? "border-[#ef0027] bg-[#000000] text-white"
                  : "border-[#ffffff33] bg-[#191919] opacity-50 text-white"
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuantitySelector;


const EnergyObtained = ({ energy }) => {
  return (
    <div>
      <div className="text-white text-sm opacity-60 font-normal mt-[21px] ml-[10px]">
        ENERGY OBTAINED
      </div>
      <div className="flex justify-between items-center bg-black h-[60px] rounded-xl px-4 mt-1">
        <div className="text-[28px] text-white font-medium tracking-wider ">
          {energy}
        </div>
        <img
          className="w-6 h-6"
          alt="icon"
          src={energyIcon}
        />
      </div>
      <div className="text-white font-normal text-center text-xs mt-[10px]">
        Energy is valid for 24 hours.
      </div>
    </div>
  );
};

const AmountToPay = () => {
  return (
    <div className="text-center space-y-1">
      <div className="text-[17.4px]">
        <span className="text-[#ababab] text-white mr-1">Amount to Pay</span>
        <span className="text-[#ababab] line-through font-bold text-[#474747] mr-1">26.50</span>
        <span className="font-bold text-white">6.25 TRX</span>
      </div>
      <div className="text-theme-primary font-bold text-[17.4px]">
      <span className="text-[#ababab] text-white font-normal mr-1">You will save</span> 20.75 TRX
      </div>
    </div>
  );
};

const ExchangeRateInfo = () => {
  return (
    <div className="flex items-center justify-between mt-[106px]">
      <div className="flex items-center gap-2">
        <Badge className="w-2.5 h-2.5 p-0 bg-[#74eb69] rounded-[5px]" />
        <div className="font-normal text-[#ababab] text-[17.4px]">
          Last purchase:
        </div>
      </div>
      <div className="font-bold text-[#ababab] text-[17.4px]">2 min ago</div>
    </div>
  );
};
