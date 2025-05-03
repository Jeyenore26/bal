import MainScreen from "./_components/MainScreen";
import NavBar from "@/components/container/NavBar";
import HowBrdigeWorks from "./_components/HowBridgeWorks";
import { FaDoorOpen } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { GrUserWorker } from "react-icons/gr";
import { LuBrainCog } from "react-icons/lu";
import StartNow from "./_components/StartNow";
import Whyus from "./_components/Whyus";
import ContactUs from "./_components/Contactus";
import Footer from "./_components/Footer";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Bridge");

  const timelineItems = [
    {
      title: t("cards.card1.title"),
      description: [
        t("cards.card1.description1"),
        t("cards.card1.description2"),
      ],
      icon: <GrUserWorker className="text-[#497e74]" />,
    },
    {
      title: t("cards.cards2.title"),
      description: [
        t("cards.card2.description1"),
        t("cards.card2.description2"),
        t("cards.card2.description3"),
        t("cards.card2.description4"),
      ],
      icon: <LuBrainCog className="text-[#497e74]" />,
    },
    {
      title: t("cards.card3.title"),
      description: [
        t("cards.card3.description1"),
        t("cards.card3.description2"),
      ],
      icon: <FaDoorOpen className="text-[#497e74]" />,
    },
    {
      title: t("cards.card4.title"),
      description: [
        t("cards.card4.description1"),
        t("cards.card4.description2"),
        t("cards.card4.description3"),
      ],
      icon: <FiCheckCircle className="text-[#497e74]" />,
    },
  ];
  return (
    <main>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-[20rem]">
        <section id="home" className="w-full">
          <MainScreen />
        </section>
        <section id="how-it-works">
          <div className="container mx-auto">
            <h2 className="mb-16 text-center text-5xl font-bold text-gray-800">
              How Our Bridge Works
            </h2>
          </div>
          <HowBrdigeWorks items={timelineItems} />
        </section>
        <section id="get-started" className="w-full">
          <StartNow />
        </section>
        <section className="w-full" id="why">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-full w-full flex-col items-center justify-center gap-12 bg-white">
              <Whyus />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full">
          <ContactUs />
        </section>
      </div>
      <Footer />
    </main>
  );
}
