"use client";
import Image from "next/image";
import CommonMainForm from "./commonForm";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { renderSvg } from "../config/svgs";
import LanguageSelect from "./LanguageSelect";
import Header from "./header";
import Meta from "./components/Meta";

export default function GTCRegisterWithDesign() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const t = useTranslations("home.banner");
  return (
    <>
    
     </>
  );
}
