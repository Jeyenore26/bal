import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function StartNow() {
  const t = useTranslations("StartNow");
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#f0f9f8] to-[#e0f3f0] py-8 md:flex-row md:py-16">
      <div className="flex flex-col items-start justify-center gap-6 md:gap-8 md:ps-12">
        <h1 className="text-5xl leading-tight font-bold text-[#2d5b53] drop-shadow-md md:text-6xl lg:text-7xl">
          {t("title")}
        </h1>
        <p className="max-w-[600px] text-lg text-[#3a7268] md:text-xl lg:text-2xl">
          {t("description")}
        </p>
        <Link href={"/start"} className="w-full">
          <Button
            className="h-14 w-full transform rounded-xl bg-[#3a7268] text-lg font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-[#2d5b53] hover:shadow-lg md:w-64"
            size="lg"
          >
            {t("button")}
          </Button>
        </Link>
      </div>
      <div className="relative aspect-square w-full overflow-hidden rounded-s-xl shadow-2xl md:w-[45%]">
        <Image
          src="/MainImage2.png"
          alt="People collaborating"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#e0f3f080] md:bg-gradient-to-l" />
      </div>
    </div>
  );
}
