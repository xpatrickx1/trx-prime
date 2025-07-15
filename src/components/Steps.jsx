import { Card, CardContent } from "./ui/card";

import wallets from "../assets/images/wallets.svg";

export const Steps = () => {
  return (
    <Card className="w-full bg-[#0000004c] rounded-xl backdrop-blur-[42px] backdrop-brightness-[100%] border-none mb-[12px]">
      <CardContent className="p-6 space-y-6">
        <h2 className=" font-bold text-2xl text-center">
          <span className="text-white">JUST </span>
          <span className="text-theme-primary">2</span>
          <span className="text-white"> SIMPLE STEPS</span>
        </h2>

        <div className="space-y-6">
          <div className="flex items-center gap-[11px]">
            <div className="flex items-center justify-center w-[45px] h-[45px] bg-black rounded-[112px]">
              <div className=" font-normal text-white text-2xl text-center tracking-[1.20px] leading-6">
                1
              </div>
            </div>
            <div>
              <div className=" font-bold text-[#919191] text-sm leading-[25px]">
                Step 1
              </div>
              <div className=" font-bold text-white text-[17.4px] leading-[25px]">
                Connect your wallet
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[11px]">
            <div className="flex items-center justify-center w-[45px] h-[45px] bg-black rounded-[112px]">
              <div className=" font-normal min-w-[45px] text-white text-2xl text-center tracking-[1.20px] leading-6">
                2
              </div>
            </div>
            <div>
              <div className=" font-bold text-[#919191] text-sm leading-[25px]">
                Step 2
              </div>
              <div className=" font-bold max-w-[220px] text-white text-[17.4px] leading-[25px]">
                Confirm the transaction in your wallet
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-black rounded-xl h-[60px] px-4">
          <div className="opacity-70  font-normal text-white text-sm">
            Available for any wallet
          </div>
          <img
            className="w-[100px] h-[34px]"
            alt="Supported wallets"
            src={wallets}
          />
        </div>
      </CardContent>
    </Card>
  )
}