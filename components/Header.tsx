"use client";

import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function Header() {
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    const path = pathname.split("/").filter(Boolean)[0] || "dashboard";
    return capitalize(path);
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm py-2 pr-4 pl-2 md:p-4 flex justify-between items-center">
      <MobileMenu />
      <h1 className="text-xl font-semibold mr-auto md:mr-0">{pageTitle}</h1>
    </header>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
