"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Gitlab,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Calendar,
  FileText,
  Globe,
  Smartphone,
  PenTool,
  MessageSquare,
  Palette,
  BarChart,
  Cpu,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import SocialIcon from "@/components/social-icon";
import { Button } from "@/components/ui/button";
import AboutMe from "@/components/about-me";
import Loading from "@/components/loading";
import InteractiveShapes from "@/components/InteractiveShapes";
import AnimatedBoxes from "@/components/AnimatedBoxes";

// Typewriter component for the animated text
const TypewriterText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(text.substring(0, index + 1));
        setIndex((prev) => prev + 1);

        // If we've typed the full text
        if (index === text.length) {
          // Pause at the end before deleting
          setTypingSpeed(900);
          setIsDeleting(true);
        } else {
          // Normal typing speed with slight randomness
          setTypingSpeed(25 + Math.random() * 50);
        }
      } else {
        // Deleting
        setDisplayText(text.substring(0, index - 1));
        setIndex((prev) => prev - 1);

        // If we've deleted everything
        if (index === 0) {
          setIsDeleting(false);
          // Pause before typing again
          setTypingSpeed(250);
        } else {
          // Faster deletion speed
          setTypingSpeed(25 + Math.random() * 30);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, typingSpeed]);

  return (
    <h1 className={className}>
      {displayText}
      <span className="inline-block w-1.5 h-12 md:h-14 lg:h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-blink ml-1"></span>
    </h1>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Add the blinking cursor animation
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      .animate-blink {
        animation: blink 0.8s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!mounted) return null;
  if (loading) return <Loading />;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented");
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen bg-background text-foreground overflow-hidden`}
    >
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <TypewriterText
              text="Hey! It's Akbar Maulana"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            />
            <h2
              className={`text-xl md:text-2xl mb-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              🚀 Junior Web Developer | Software Engineer | Tech Explorer
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className={`bg-transparent border-2 border-purple-500 ${
                    isDark ? "text-white" : "text-purple-700"
                  } hover:bg-purple-500 hover:text-white transition-all duration-300`}
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${
          isDark
            ? "bg-gradient-to-b from-black to-gray-900"
            : "bg-gradient-to-b from-gray-100 to-white"
        }`}
      >
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Services
              </span>
              <span
                className={`ml-2 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                🛠️
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Globe className="w-10 h-10 text-purple-500" />}
                title="Web Development"
                description="Creating responsive, modern websites and web applications using the latest technologies and frameworks."
                isDark={isDark}
              />
              <ServiceCard
                icon={<Palette className="w-10 h-10 text-pink-500" />}
                title="UI/UX Design"
                description="Designing intuitive user interfaces and experiences that are both visually appealing and functional."
                isDark={isDark}
              />
              <ServiceCard
                icon={<BarChart className="w-10 h-10 text-purple-500" />}
                title="Digital Marketing"
                description="Implementing effective digital marketing strategies to increase online visibility and drive traffic."
                isDark={isDark}
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-pink-500" />}
                title="IoT Solutions"
                description="Developing Internet of Things solutions that connect devices and systems for smart automation."
                isDark={isDark}
              />
              <ServiceCard
                icon={<Smartphone className="w-10 h-10 text-purple-500" />}
                title="Mobile App Development"
                description="Building native and cross-platform mobile applications for iOS and Android devices."
                isDark={isDark}
              />
              <ServiceCard
                icon={<PenTool className="w-10 h-10 text-pink-500" />}
                title="Content Creation"
                description="Creating engaging and informative content for websites, blogs, and social media platforms."
                isDark={isDark}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className={`py-20 ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-black"
            : "bg-gradient-to-b from-white to-gray-100"
        }`}
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Projects
              </span>
              <span
                className={`ml-2 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                🏗️
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Personal Portfolio"
                description="My personal portfolio website built with Next.js and Tailwind CSS, featuring dark/light mode and responsive design."
                tags={["Next.js", "Tailwind CSS", "React", "Framer Motion"]}
                image="/placeholder.svg?height=200&width=400"
                deployLink="https://akbarm04.vercel.app"
                githubLink="https://github.com/akbarm04/portfolio"
                isDark={isDark}
              />
              <ProjectCard
                title="Kansha (TalentClass Project)"
                description="A simple restaurant menu app built using React (Vite), Tailwind CSS, and Express.js. Displays dynamic menu fetched from PostgreSQL backend."
                tags={["Node.js", "React", "Express", "Javascript", "Tailwind"]}
                image="/project/project4.png"
                deployLink="https://final-project-tc-17-client.vercel.app/"
                githubLink="https://github.com/akbarm04/Final-Project-TC17-client-"
                isDark={isDark}
              />
              <ProjectCard
                title="Learning Course (Dicoding Project)"
                description="A simple and responsive landing page showcasing a web development course & learning resources. Built with clean HTML, CSS, and a touch of JavaScript."
                tags={["HTML", "Javascript", "CSS"]}
                image="/project/project2.png"
                deployLink="https://akbarm04.github.io/Final-Project-Dicoding-Pemrograman_Web_Dasar"
                githubLink="https://github.com/akbarm04/Final-Project-Dicoding-Pemrograman_Web_Dasar"
                isDark={isDark}
              />
              <ProjectCard
                title="Travelzy (dibimbing.id Project)"
                description="A modern travel website for exploring tour packages and destinations across Indonesia, with responsive layout, smooth navigation, and destination highlights."
                tags={["HTML", "Javascript", "CSS"]}
                image="/project/project3.png"
                deployLink="https://akbarm04.github.io/DSF-30-FrontEnd/"
                githubLink="https://github.com/akbarm04/DSF-30-FrontEnd"
                isDark={isDark}
              />
              <ProjectCard
                title="Mini E-Commerce (School Project)"
                description="A simple web-based e-commerce interface built as a school project. It focuses on frontend functionality using HTML, CSS, and JavaScript."
                tags={["HTML", "Javascript", "CSS", "SweetAlert"]}
                image="/project/project1.png"
                deployLink="https://akbarm04.github.io/Tugas-Bootstrap/"
                githubLink="https://github.com/akbarm04/Tugas-Bootstrap/"
                isDark={isDark}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Ping Me
              </span>
              <span
                className={`ml-2 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                🚀
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div
                className={`p-6 rounded-lg border ${
                  isDark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-gray-100 border-gray-200"
                }`}
              >
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`mt-1 block w-full rounded-md px-4 py-3 ${
                        isDark
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`mt-1 block w-full rounded-md px-4 py-3 ${
                        isDark
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`mt-1 block w-full rounded-md px-4 py-3 ${
                        isDark
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p
                    className={`mb-2 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Prefer to schedule a meeting?
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1OK6Q7BEy8GxvrPXSQr4u1XY4g21Y_dKf/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer
        className={`py-12 ${
          isDark
            ? "bg-gradient-to-t from-gray-900 to-black"
            : "bg-gradient-to-t from-gray-100 to-white"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon
              icon={<Github />}
              href="https://github.com/akbarm04"
              label="GitHub"
            />
            <SocialIcon
              icon={<Gitlab />}
              href="https://gitlab.com/akbarm04"
              label="GitLab"
            />
            <SocialIcon
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/akbar-maulana1411"
              label="LinkedIn"
            />
            <SocialIcon
              icon={<Twitter />}
              href="https://x.com/YtProgrammer"
              label="Twitter"
            />
            <SocialIcon
              icon={<Instagram />}
              href="https://instagram.com/akbrmlnaa04"
              label="Instagram"
            />
            <SocialIcon
              icon={<MessageSquare />}
              href="https://discord.com/users/akbrmlnaa04"
              label="Discord"
            />
            <SocialIcon
              icon={<PenTool />}
              href="https://medium.com/"
              label="Medium"
            />
          </div>
          <div
            className={`text-center ${
              isDark ? "text-gray-500" : "text-gray-600"
            } text-sm`}
          >
            <p>
              © {new Date().getFullYear()} Akbar Maulana. All rights reserved.
            </p>
            <ContactEmail isDark={isDark} />
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, isDark }) {
  return (
    <div
      className={`p-6 rounded-lg border transition-all duration-300 text-center md:text-left ${
        isDark
          ? "bg-gray-900 border-gray-800 hover:border-purple-500"
          : "bg-white border-gray-200 hover:border-purple-500 shadow-sm"
      }`}
    >
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3
        className={`text-xl font-bold mb-3 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p className={isDark ? "text-gray-400" : "text-gray-600"}>
        {description}
      </p>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  deployLink,
  githubLink,
  isDark,
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border transition-all duration-300 ${
        isDark
          ? "bg-gray-900 border-gray-800 hover:border-purple-500"
          : "bg-white border-gray-200 hover:border-purple-500 shadow-sm"
      }`}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <h3
          className={`text-xl font-bold mb-3 ${
            isDark ? "text-white" : "text-gray-900"
          } text-center md:text-left`}
        >
          {title}
        </h3>
        <p
          className={`${
            isDark ? "text-gray-400" : "text-gray-600"
          } mb-4 text-center md:text-left`}
        >
          {description}
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-full ${
                isDark
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
                  : "bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          {deployLink && (
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md ${
                isDark
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              }`}
            >
              <span className="mr-2">🚀</span> Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md ${
                isDark
                  ? "border border-gray-700 hover:bg-gray-800 text-gray-300"
                  : "border border-gray-300 hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Github className="mr-2 h-4 w-4" /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ContactEmail({ isDark }) {
  return (
    <div className="mt-2">
      <a
        href="mailto:aakash4dev.me@gmail.com"
        className={`${
          isDark
            ? "text-purple-400 hover:text-purple-300"
            : "text-purple-600 hover:text-purple-700"
        }`}
      >
        akbarmlnaa04@gmail.com
      </a>
    </div>
  );
}
