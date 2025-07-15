import { Card, CardContent } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqItems = [
  {
    question: "How safe is it to connect a wallet to the site?",
    answer:
      "Connecting a wallet only shows your address to the site but does not give permission to spend funds. This is standard practice for dApps.",
    isOpen: true,
  },
  {
    question: "Why should I trust the site?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What wallets are supported?",
    answer: "",
    isOpen: false,
  },
  {
    question: "Why should I trust the site?",
    answer: "",
    isOpen: false,
  },
  {
    question: "Is there KYC?",
    answer: "",
    isOpen: false,
  },
];

export const Faq = () => {
  return (
    <Card className="w-full bg-[#0000004c] rounded-xl backdrop-blur-[42px] backdrop-brightness-[100%] border-none mb-[12px]">
      <CardContent className="p-6 space-y-4">
        <h2 className=" font-bold text-2xl mb-4">
          <span className="text-white uppercase">Instructions and </span>
          <span className="text-theme-primary">FAQ</span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0"
            >
              <AccordionTrigger className="py-2 hover:no-underline">
                <div className="flex justify-between w-full items-center">
                  <div className=" font-medium text-white text-base text-left">
                    {item.question}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="opacity-60  font-normal text-white text-sm leading-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}