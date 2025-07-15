import { Card, CardContent } from "./ui/card";

export const Referral = () => {
  return (
    <Card className="w-full bg-[#0000004c] rounded-xl backdrop-blur-[42px] backdrop-brightness-[100%] border-none mt-[12px] mb-[100px] overflow-hidden">
      <CardContent className="p-0 pt-6 space-y-4">
        <div className="relative">
          <h2 className=" font-bold text-2xl text-center mb-4 uppercase">
            <span className="text-theme-primary">Referral</span>
            <span className="text-white"> Program</span>
          </h2>
          <p className=" font-light text-white text-[19px] text-center max-w-[80%] mx-8">
            Join our referral program and get up to 8% of their purchases!
          </p>
        </div>
        <div className="text-theme-primary text-[185px] leading-[135px]  bottom-0 right-0 font-bold w-fit ml-auto -mr-[26px]">8%</div>
      </CardContent>
    </Card>
  )
}