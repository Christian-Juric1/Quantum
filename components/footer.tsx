"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // }

  return (
    <footer className="relative bg-neutral-200 dark:bg-black border-t border-neutral-100 dark:border-neutral-800">
      <div className="container mx-auto py-10 flex flex-col items-center justify-center gap-6">
        <div className="">
          <p className=""></p>
          <p className=""></p>
          <p className=""></p>
        </div>

        <div className="">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>

        <div className="flex items-center justify-between">
          <div className=""></div>

          <div className=""></div>
        </div>
      </div>
    </footer>
  );
}
