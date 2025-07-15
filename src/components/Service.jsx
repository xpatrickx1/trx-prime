import { Card, CardContent } from "./ui/card";
import P2P from "../assets/images/P2P.svg";

export const Service = () => {
  return (
    <Card className="w-full bg-[#0000004c] rounded-xl backdrop-blur-[42px] backdrop-brightness-[100%] border-none mb-[12px]">
      <CardContent className="p-6 space-y-4">
        <h2 className=" font-bold text-2xl text-center mb-4">
          <span className="text-white uppercase">Take </span>
          <span className="text-theme-primary uppercase">full advantage</span>
          <span className="text-white uppercase"> of the service</span>
        </h2>

        <p className="opacity-60  font-normal text-white text-sm text-center leading-5 max-w-[270px]">
          Make working with the TRON network as efficient as possible!
        </p>

        <div className="flex justify-center">
          <div className="w-[246px] h-[274px] opacity-30">
            <img
              className="w-[246px] h-[216px] mt-[30px]"
              alt="P2P"
              src={P2P}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}