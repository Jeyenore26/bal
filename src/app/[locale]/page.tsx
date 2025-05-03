import { useTranslations } from "next-intl";
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

export default function HomePage() {
  const t = useTranslations("HomePage");
  const timelineItems = [
    {
      title: "Freelancer Profile Submission",
      description: [
        "The freelancer provides their GitHub username and type down their best project.",
        "They have the option to add their score from trusted, industryrecognized rating platforms (e.g., Frontend Mentor, Kaggle, Topcoder, etc.).",
      ],
      icon: <GrUserWorker className="text-[#497e74]" />,
    },
    {
      title: "AI-Powered Nexus Score Calculation",
      description: [
        "Our AI evaluates the freelancer’s technical skills, project quality, and platform ratings to generate a Nexus Score.",
        "This score is dynamically adjusted based on: ",
        "▪ Performance metrics from linked platforms.",
        " ▪ Client ratings from past projects.",
      ],
      icon: <LuBrainCog className="text-[#497e74]" />,
    },
    {
      title: "Getting the Recommended Companies",
      description: [
        "It suggests companies that align with your expertise and career goals.",
        "Provides recommended wage ranges based on industry standards and your qualifications.",
      ],
      icon: <FaDoorOpen className="text-[#497e74]" />,
    },
    {
      title: "Select Your Preferred Company",
      description: [
        "The system automatically drafts a customized proposal for your chosen company, saving you time while ensuring professionalism. You can review and edit it before sending.",
        "Once finalized, you can easily reach out and submit your application directly through the platform.",
        "The AI may also recommend the best way to approach the company (e.g., email, platform message, or portfolio link) to increase your chances of success.",
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
