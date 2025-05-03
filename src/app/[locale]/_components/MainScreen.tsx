"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MainScreen() {
  const t = useTranslations("MainScreen");
  return (
    <div className="flex h-full min-h-[85vh] items-center justify-center bg-[#ECE5DF]">
      <div className="container flex h-full w-full flex-col items-center justify-between md:flex-row">
        <motion.div
          className="flex h-full max-w-[500px] flex-col items-center justify-start gap-4 md:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl leading-[150%] font-bold tracking-widest text-[#497e74] md:text-8xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("BAL")}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
          }}
          transition={{
            duration: 0.8,
            hover: { duration: 0.3 },
          }}
          className="relative mt-8 rounded-2xl shadow-lg md:mt-0"
        >
          <Image
            src={"/MainImage2.png"}
            width={1500}
            height={1500}
            alt="Main Image"
            priority
            className="mb-[-14rem] aspect-[1/1] w-full rounded-2xl object-cover shadow-lg transition-all duration-300 hover:object-cover md:w-[750px]"
          />

          {/* Subtle gradient overlay */}
          <motion.div
            className="absolute inset-0 h-fit bg-gradient-to-t from-black/10 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
