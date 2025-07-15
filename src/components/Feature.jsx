import { Card, CardContent } from "./ui/card";

import Statistics from "../assets/images/Statistics.svg";
import Cryptodron from "../assets/images/Cryptodron.svg";
import TeamManagement from "../assets/images/TeamManagement.svg";
import Meeting from "../assets/images/Meeting.svg";

const features = [
  {
    icon: Statistics,
    title: "Low fees",
    description: "We offer competitive market conditions",
  },
  {
    icon: Cryptodron,
    iconRotate: true,
    title: "GREAT Speed",
    description: "Energy is delivered\nwithout delays",
  },
  {
    icon: TeamManagement,
    title: "Flexibility",
    description: "We offer rates for any transaction volume",
  },
  {
    icon: Meeting,
    title: "24/7 Support",
    description: "Our team is always ready \nto help",
  },
];


export const Feature = () => {
  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="w-full bg-[#0000004c] rounded-xl backdrop-blur-[42px] backdrop-brightness-[100%] border-none mb-4"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <div className="relative w-[90px] h-[100px] min-w-[90px]">
                <img
                  className={`w-[90px] h-[90px] ${feature.iconRotate ? "rotate-180" : ""}`}
                  alt={feature.title}
                  src={feature.icon}
                />
              </div>
              <div className="space-y-2">
              <h3 className="font-bold text-2xl uppercase">
                {feature.title === "Flexibility" ? (
                  <>
                    <span className="text-theme-primary">Flex</span>
                    <span className="text-white">ibility</span>
                  </>
                ) : feature.title.includes(" ") ? (
                  <>
                    <span className="text-theme-primary">{feature.title.split(" ")[0]}</span>{" "}
                    <span className="text-white">
                      {feature.title.split(" ").slice(1).join(" ")}
                    </span>
                  </>
                ) : (
                  <span className="text-white">{feature.title}</span>
                )}
              </h3>
                <p className="opacity-60  font-normal text-white text-sm leading-5 whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}