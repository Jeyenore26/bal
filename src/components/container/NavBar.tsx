"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { CircleUserRound } from "lucide-react";
import LanguageOption from "./LanguageOption";
import { cn } from "@/lib/utils"; // Make sure you have cn utility set up

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 h-[120px] w-full transition-all duration-300",
        isScrolled ? "h-[80px] bg-white shadow-md" : "bg-[#ECE5DF]",
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <Image
          src="/Logo.png"
          width={1000}
          height={1000}
          alt="B.A.L"
          className={cn(
            "object-contain transition-all duration-300",
            isScrolled ? "h-[60px] w-[60px]" : "h-[120px] w-[120px]",
          )}
        />
        <NavLinks />
        <div className="flex w-[120px] items-center justify-center gap-5">
          <CircleUserRound className="hover:cursor-pointer" />
          <LanguageOption />
        </div>
      </div>
    </nav>
  );
}
