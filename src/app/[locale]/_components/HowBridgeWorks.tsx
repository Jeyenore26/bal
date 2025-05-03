/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type JSX, type ReactNode } from "react";

interface TimelineItem {
  title: string;
  description: string[];
  icon: ReactNode;
}

interface HowBridgeWorksProps {
  items: TimelineItem[];
}

const HowBridgeWorks = ({ items }: HowBridgeWorksProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: containerRef,
      offset: ["start center", "end center"],
    });

  return (
    <div className="relative bg-white py-16" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="absolute top-0 left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform bg-gray-300 md:block" />
        <div className="absolute top-0 left-6 h-full w-0.5 bg-gray-300 md:hidden" />

        <motion.div
          className="absolute top-0 left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform bg-[#497e74] md:block"
          style={{
            scaleY: scrollYProgress,
            originY: 0,
          }}
        />
        <motion.div
          className="absolute top-0 left-6 h-full w-0.5 bg-[#497e74] md:hidden"
          style={{
            scaleY: scrollYProgress,
            originY: 0,
          }}
        />

        <motion.div
          className="absolute top-0 left-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#497e74] shadow-lg md:block"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          }}
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-[#497e74]/80 opacity-70" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-6 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#497e74] shadow-lg md:hidden"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          }}
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-[#497e74]/80 opacity-70" />
        </motion.div>

        <div className="relative z-10 space-y-24">
          {items.map((item, index) => (
            <TimelineItem
              key={`timeline-item-${index}`} // Ensure unique key
              item={item}
              index={index}
              scrollProgress={scrollYProgress}
              totalItems={items.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  scrollProgress: MotionValue<number>; // Explicitly type scrollProgress
  totalItems: number;
}

const TimelineItem = ({
  item,
  index,
  scrollProgress,
  totalItems,
}: TimelineItemProps): JSX.Element => {
  const itemStart = index / totalItems;
  const itemEnd = (index + 1) / totalItems;

  const y = useTransform(
    scrollProgress,
    [itemStart - 0.2, itemStart, itemEnd],
    [30, 0, -30],
  );

  const scale = useTransform(
    scrollProgress,
    [itemStart - 0.2, itemStart, itemEnd],
    [0.9, 1, 0.9],
  );

  const dotColor = useTransform(
    scrollProgress,
    [itemStart - 0.2, itemStart, itemEnd - 0.1, itemEnd],
    ["#ECE5DF", "#497e74", "#497e74", "#ECE5DF"],
  );

  return (
    <motion.div
      className={`flex w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
      style={{ y, scale }}
    >
      <div className="w-full px-4 md:w-5/12">
        <motion.div
          className="relative rounded-xl bg-white p-6 shadow-md"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="absolute top-6 -left-10 h-4 w-4 rounded-full bg-blue-500 md:hidden" />

          <div className="flex items-start">
            <div className="mr-4 rounded-full bg-blue-100 p-2">{item.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              {item.description.map((desc, descIndex) => (
                <p key={`desc-${descIndex}`} className="mt-2 text-gray-600">
                  {desc}
                </p>
              ))}
              <div className="absolute -bottom-4 left-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#497e74] shadow-lg md:block">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#497e74]/80 opacity-70" />
              </div>

              <div className="absolute -bottom-4 left-6 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#497e74] shadow-lg md:hidden">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#497e74]/80 opacity-70" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden w-2/12 justify-center md:flex">
        <motion.div
          className="relative flex h-6 w-6 items-center justify-center rounded-full shadow-md"
          style={{ backgroundColor: dotColor }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0 0 rgba(239, 68, 68, 0.4)",
              "0 0 0 6px rgba(239, 68, 68, 0)",
              "0 0 0 0 rgba(239, 68, 68, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: index * 0.3,
          }}
        >
          <div className="h-2 w-2 rounded-full bg-white" />
        </motion.div>
      </div>

      <div className="hidden w-5/12 px-4 md:block"></div>
    </motion.div>
  );
};

export default HowBridgeWorks;
