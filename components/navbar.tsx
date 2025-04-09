"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-black/80 backdrop-blur-md py-3"
            : "bg-white/80 backdrop-blur-md py-3 border-b border-gray-200"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link
          href="#home"
          className={`text-2xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          onClick={(e) => scrollToSection(e, "#home")}
        >
          Baxzzdev<span className="text-red-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              } transition-colors duration-300 relative group`}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition-colors duration-300`}
            aria-label="Toggle theme"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            {mounted && theme === "dark" ? (
              <Sun size={24} />
            ) : (
              <Moon size={24} />
            )}
          </motion.button>
          <motion.a
            href="https://github.com/akbarm04"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition-colors duration-300`}
            aria-label="GitHub"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/akbar-maulana1411"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition-colors duration-300`}
            aria-label="LinkedIn"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Linkedin size={24} />
          </motion.a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition-colors duration-300`}
            aria-label="Toggle theme"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            {mounted && theme === "dark" ? (
              <Sun size={24} />
            ) : (
              <Moon size={24} />
            )}
          </motion.button>
          <motion.a
            href="https://github.com/aakash4dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition-colors duration-300`}
            aria-label="GitHub"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aakash4dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition-colors duration-300`}
            aria-label="LinkedIn"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Linkedin size={24} />
          </motion.a>
          <button
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              theme === "dark" ? "bg-black/95" : "bg-white/95"
            } backdrop-blur-md`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="container mx-auto px-4 py-4"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center mb-4"
                >
                  <button
                    className={`${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-black"
                    } py-2 transition-colors duration-300 text-lg block w-full`}
                    onClick={() => {
                      const targetId = link.href.replace("#", "");
                      const elem = document.getElementById(targetId);
                      if (elem) {
                        setIsOpen(false); // Close menu first
                        setTimeout(() => {
                          elem.scrollIntoView({ behavior: "smooth" });
                        }, 10); // Small delay to ensure menu closes first
                      }
                    }}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
