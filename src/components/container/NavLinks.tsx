"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const t = useTranslations("NavLinks");

  // Make sure these IDs exactly match your section IDs
  const links = [
    { label: "Home", scrollto: "home" },
    { label: "How It Work", scrollto: "how-it-works" }, // Note the hyphen
    { label: "Get Started", scrollto: "get-started" },
    { label: "Why Us", scrollto: "why" },
    { label: "Contact Us", scrollto: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Add offset if you have a fixed header (adjust 100px as needed)
      const offset = 100;
      const position =
        element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden h-full w-full max-w-[900px] items-center justify-center lg:flex">
      <div className="container mx-auto flex items-center justify-center gap-10">
        {links.map((link) => (
          <Button
            variant={"link"}
            key={link.scrollto}
            onClick={() => scrollToSection(link.scrollto)}
            className="group relative border-0 text-[20px] font-bold text-[#000000] outline-0 transition-all duration-300 hover:cursor-pointer"
          >
            <span
              className={cn(
                "border-b-0 opacity-80 outline-0 duration-300 group-hover:-translate-y-1 group-hover:opacity-100",
                isScrolled
                  ? "text-[18px] text-[#497e74] group-hover:text-[#000]"
                  : "text-[20px] text-[#000000] group-hover:text-[#497e74]",
              )}
            >
              {t(link.label)}
            </span>
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full",
                isScrolled ? "bg-[#000]" : "bg-[#497e74]",
              )}
            ></span>
          </Button>
        ))}
      </div>
    </div>
  );
}
