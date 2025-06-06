"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconMenu, IconSearch, IconUser, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { headerLinks } from "@/constants/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-neutral-300/50 dark:border-neutral-800/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between md:justify-center gap-6">
        {/* Home Link */}
        <Link
          key="Home"
          href="/"
          aria-label="Home"
          className="flex items-center font-bold text-xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Quantum
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {/* Navbar Links */}

          {/* Navbar Buttons */}
        </nav>

        {/* Mobile Menu Button Section */}
        <div className="flex items-center md:hidden gap-2">
          <Button
            key="Search"
            variant="ghost"
            size="icon"
            onClick={() => {}}
            aria-label="Search"
          >
            <IconSearch className="h-5 w-5" />
          </Button>

          <Button
            key="User"
            variant="ghost"
            size="icon"
            onClick={() => {}}
            aria-label="User Profile"
          >
            <IconUser className="h-5 w-5" />
          </Button>

          <Button
            key="Menu"
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <IconX className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden py-4 px-4 bg-white/70 dark:bg-black/70 border-t border-neutral-300/50 dark:border-neutral-800/50"
        >
          <nav className="flex flex-col gap-4">
            {headerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={toggleMenu}
                aria-label={link.title}
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100 transition"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
