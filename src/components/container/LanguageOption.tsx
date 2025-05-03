"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";

export default function LanguageOption() {
  const t = useTranslations("LanguageOption");
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:cursor-pointer">
        <Languages />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <Link href={pathname} locale="ar">
          <DropdownMenuItem className="hover:cursor-pointer">
            {t("ar")}
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link href={pathname} locale="en">
          <DropdownMenuItem className="hover:cursor-pointer">
            {t("en")}
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
