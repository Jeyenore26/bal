import { Card } from "@/components/ui/card";
import React from "react";
import { HandCoins, Handshake, TrendingDown } from "lucide-react";
import { FaHandHoldingMedical } from "react-icons/fa";

export default function Whyus() {
  const cards = [
    {
      title: "Lower Fees",
      description: "We offer lower fees than traditional recruitment agencies.",
      icon: <HandCoins className="h-6 w-6" />,
    },
    {
      title: "Local Partnership",
      description: "Local partnership with the best companies in your region.",
      icon: <Handshake className="h-6 w-6" />,
    },
    {
      title: "Fewer Competitors",
      description: "Competitors are not as many as in other regions.",
      icon: <TrendingDown className="h-6 w-6" />,
    },
    {
      title: "Easy To Use",
      description: "User-friendly platform for job seekers and employers.",
      icon: <FaHandHoldingMedical className="h-6 w-6" />,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#f0f9f8] to-[#e0f3f0] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#2d5b53] md:text-4xl lg:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Discover the benefits that set us apart from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="group h-full overflow-hidden rounded-lg border border-[#2d5b53]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-[#2d5b53]/20"
            >
              <div className="flex h-full flex-col items-center p-8 text-center">
                <div className="mb-6 rounded-full bg-[#2d5b53] p-4 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3a7a6f]">
                  <div className="flex h-12 w-12 items-center justify-center">
                    {React.cloneElement(card.icon, {
                      className: "h-6 w-6 text-white",
                    })}
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#2d5b53]">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
