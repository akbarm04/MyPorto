"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { useTheme } from "next-themes";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiPhp,
  SiC,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";

const timelineData = [
  {
    id: 1,
    company: "Student",
    role: "Software Engineer",
    period: "2022 - 2025",
    location: "SMKN 1 Karawang",
    type: "Full-time",
    logo: "/company-a-logo.png",
    skills: ["Laravel", "JavaScript", "Node.js"],
  },
  {
    id: 2,
    company: "Internship",
    role: "Informatics Application",
    period: "1 Jul 2024 - 1 Oct 2024",
    location: "DISKOMINFO KARAWANG",
    type: "Full-time",
    logo: "/company-b-logo.png",
    skills: ["Figma", "Ms.Word", "Vs Code"],
  },
];

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
    { name: "Python", icon: <SiPython className="w-6 h-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
    { name: "PHP", icon: <SiPhp className="w-6 h-6" /> },
    { name: "C", icon: <SiC className="w-6 h-6" /> },
  ],
  "Frameworks / Libraries": [
    { name: "Laravel", icon: <SiLaravel className="w-6 h-6" /> },
    { name: "React", icon: <SiReact className="w-6 h-6" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6" /> },
    { name: "Express.js", icon: <SiExpress className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
  ],
  "Tools & Technologies": [
    { name: "Git", icon: <SiGit className="w-6 h-6" /> },
    { name: "Postman", icon: <SiPostman className="w-6 h-6" /> },
    { name: "Figma", icon: <SiFigma className="w-6 h-6" /> },
    {
      name: "Visual Studio Code",
      icon: <BiLogoVisualStudio className="w-6 h-6" />,
    },
    { name: "MySQL", icon: <SiMysql className="w-6 h-6" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" /> },
  ],
};

export default function AboutMe() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`py-12 ${
        isDark
          ? "bg-gradient-to-b from-black to-gray-900"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              About Me
            </span>
            <span className="ml-2">💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/aboutmb.jpg/"
                  alt="Akbar Image"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div
                className={`prose max-w-none text-center md:text-left ${
                  isDark ? "prose-invert" : "prose-gray"
                }`}
              >
                {/* Mobile description */}
                <p
                  className={`text-lg leading-relaxed md:hidden ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  🚀 <strong>Hey, I'm Akbar Maulana!</strong> A{" "}
                  <strong>12th grade Software Engineering student</strong> at
                  SMKN 1 Karawang. Passionate about coding with{" "}
                  <strong>Laravel, React, JavaScript, and PHP</strong>. Always
                  learning and building cool projects! 💻✨
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p
                    className={`text-xl mb-4 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    🚀 <strong>Hey, I'm Akbar Maulana!</strong>
                  </p>
                  <p
                    className={`mb-4 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    I'm a <strong>12th grade student</strong> majoring in{" "}
                    <strong>Software Engineering</strong> at{" "}
                    <strong>SMKN 1 Karawang</strong>. My journey in tech is
                    driven by a <strong>deep passion for programming</strong>{" "}
                    and solving real-world problems through code.
                  </p>
                  <p
                    className={`mb-4 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Currently, I'm building projects with{" "}
                    <strong>
                      Laravel, Node.js, React, Express, JavaScript, and PHP
                    </strong>
                    , while styling them with <strong>Tailwind CSS</strong>. I'm
                    also comfortable working with <strong>SQL databases</strong>{" "}
                    like <strong>MySQL</strong> and <strong>PostgreSQL</strong>{" "}
                    to create robust backend solutions.
                  </p>
                  <p
                    className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
                  >
                    I believe in <strong>continuous learning</strong> and am
                    constantly expanding my skills to become a versatile
                    developer. My goal is to{" "}
                    <strong>master multiple programming languages</strong> and
                    create innovative applications that make a difference! 💻✨
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Experience
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 relative`}
                  >
                    {/* Content */}
                    <div
                      className={`p-6 ${
                        isDark
                          ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                          : "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/public/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3
                            className={`text-xl font-bold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.role}
                          </h3>
                          <h4 className="text-lg text-purple-400">
                            {item.company}
                          </h4>
                          <div
                            className={`flex items-center justify-center md:justify-start gap-2 ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            } mt-1`}
                          >
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div
                            className={`flex items-center justify-center md:justify-start gap-2 ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div
                            className={`flex items-center justify-center md:justify-start gap-2 ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Skills
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div
                  key={category}
                  className={`p-6 ${
                    isDark
                      ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                      : "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm"
                  }`}
                >
                  <h4 className="text-xl font-bold mb-6 text-purple-400 text-center">
                    {category}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className={`flex flex-col items-center p-3 rounded-lg ${
                          isDark
                            ? "bg-gray-800/50 hover:bg-gray-800"
                            : "bg-gray-100/80 hover:bg-gray-200"
                        } transition-colors duration-300`}
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                            isDark
                              ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                              : "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                          }`}
                        >
                          <span
                            className={`${
                              isDark ? "text-purple-300" : "text-purple-600"
                            }`}
                          >
                            {skill.icon}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Certifications Section */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Licenses & Certifications
              </span>
              <span className="ml-2 text-white">🏆</span>
            </h3>

            {/* Paginated Certification Grid */}
            <CertificationsGrid isDark={isDark} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ name, proficiency, isDark }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className={isDark ? "text-gray-300" : "text-gray-700"}>
          {name}
        </span>
        <span className={isDark ? "text-gray-400" : "text-gray-500"}>
          {proficiency}%
        </span>
      </div>
      <div
        className={`h-2 ${
          isDark ? "bg-gray-700" : "bg-gray-200"
        } rounded-full overflow-hidden`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  );
}

function CertificationsGrid({ isDark }) {
  const [currentPage, setCurrentPage] = useState(1);
  const certificatesPerPage = 8; // Increased from 6 to 8 to show 2 rows of 4

  // Sample certificates data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: "Junior Web Developer",
      organization: "Digital Talent Scholarship",
      date: "Aug 2024",
      image:
        "/Sertifikat/Sertifikat_AKBAR MAULANA_Junior Web Developer_page-0001.jpg",
      url: "/certificate/Sertifikat_AKBAR MAULANA_Junior Web Developer.pdf",
    },
    {
      id: 2,
      title: "Junior Web Developer",
      organization: "Badan Nasional Sertifikasi Profesi",
      date: "Oct 2024 - Oct 2027",
      image: "/Sertifikat/Sertifikat_Kompetensi_JWD_Akbar(BNSP)_page-0001.jpg",
      url: "/certificate/Sertifikat_Kompetensi_JWD_Akbar(BNSP).pdf",
    },
    {
      id: 3,
      title: "Fullstack Web Development - Talent Class Batch 17",
      organization: "Talenthub",
      date: "Dec 2024",
      image:
        "/Sertifikat/Sertifikat_Talenthub_FullstackWebDevelopment_page-0001.jpg",
      url: "/certificate/Sertifikat_Talenthub_FullstackWebDevelopment.pdf",
    },
    {
      id: 4,
      title: "Frontend Developer (Digital Skill Fair 30.0)",
      organization: "dibimbing.id",
      date: "Aug 2024",
      image: "/Sertifikat/SERTIFIKAT_DSF30_FRONTEND_AKBARMAULANA_page-0001.jpg",
      url: "/certificate/SERTIFIKAT_DSF30_FRONTEND_AKBARMAULANA.pdf",
    },
    {
      id: 5,
      title: "Belajar Dasar Pemrograman JavaScript",
      organization: "Dicoding Indonesia",
      date: "Jan 2025 - Jan 2028",
      image:
        "/Sertifikat/Sertifikat_Belajar_Dasar_Pemrograman_Javascript_page-0001.jpg",
      url: "/certificate/Sertifikat_Belajar_Dasar_Pemrograman_Javascript.pdf",
    },
    {
      id: 6,
      title: "Belajar Fundamental Front-End Web Development",
      organization: "Dicoding Indonesia",
      date: "Mar 2025 - Mar 2028",
      image:
        "/Sertifikat/Sertifikat_Belajar_Fundamental_Frontend_Web_Development_page-0001.jpg",
      url: "/certificate/Sertifikat_Belajar_Fundamental_Frontend_Web_Development.pdf",
    },
    {
      id: 7,
      title: "Belajar Back-End Pemula dengan JavaScript",
      organization: "Dicoding Indonesia",
      date: "Mar 2025 - Mar 2028",
      image:
        "/Sertifikat/Sertifikat_Belajar_Backend_Pemula_dengan_Javascript_page-0001.jpg",
      url: "/certificate/Sertifikat_Belajar_Backend_Pemula_dengan_Javascript.pdf",
    },
    {
      id: 8,
      title: "Belajar Membuat Aplikasi Web dengan React",
      organization: "Dicoding Indonesia",
      date: "Jan 2025 - Jan 2028",
      image:
        "/Sertifikat/Sertifikat_Belajar_Membuat_Aplikasi_Web_dengan_React_page-0001.jpg",
      url: "/certificate/Sertifikat_Belajar_Membuat_Aplikasi_Web_dengan_React.pdf",
    },
    {
      id: 9,
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      organization: "Dicoding Indonesia",
      date: "Jan 2025 - Jan 2028",
      image:
        "/Sertifikat/Sertifikat_Memulai_Dasar_Pemrograman_untuk_menjadi_pengembang_software_page-0001.jpg",
      url: "/certificate/Sertifikat_Memulai_Dasar_Pemrograman_untuk_menjadi_pengembang_software.pdf",
    },
    {
      id: 10,
      title: "AWS Knowledge: Cloud Essentials",
      organization: "Amazon Web Services",
      date: "Oct 2024",
      image: "/placeholder.svg?height=128&width=256",
      url: "https://www.datacamp.com/certificate/example",
    },
    {
      id: 11,
      title:
        "UI/UX Design - Computer and IT Event Universitas Pertamina (CITE UP)",
      organization: "Universitas Pertamina",
      date: "Aug 2024",
      image: "/Sertifikat/Sertifikat_UI_UX_Universitas_Pertamina_page-0001.jpg",
      url: "/certificate/Sertifikat_UI_UX_Universitas_Pertamina.pdf",
    },
    {
      id: 12,
      title: "Belajar Dasar Pemrograman Web",
      organization: "Dicoding Indonesia",
      date: "Dec 2024 - Dec 2027",
      image:
        "/Sertifikat/Sertifikat_Belajar_Dasar_Pemrograman_Web_page-0001.jpg",
      url: "/certificate/Sertifikat_Belajar_Dasar_Pemrograman_Web.pdf",
    },
    {
      id: 13,
      title: "Belajar Dasar Structured Query Language (SQL)",
      organization: "Dicoding Indonesia",
      date: "Sep 2024 - Sep 2027",
      image: "/Sertifikat/Sertifikat_Belajar_Dasar_SQL_page-0001.jpg",
      url: "/certificate/Sertifikat_Belajar_Dasar_SQL.pdf",
    },
    {
      id: 14,
      title: "Memulai Pemrograman dengan Python",
      organization: "Dicoding Indonesia",
      date: "Sep 2024 - Sep 2027",
      image:
        "/Sertifikat/Sertifikat_Memulai_Pemrograman_dengan_Python_page-0001.jpg",
      url: "/certificate/Sertifikat_Memulai_Pemrograman_dengan_Python.pdf",
    },
    {
      id: 15,
      title: "Belajar Dasar AI",
      organization: "Dicoding Indonesia",
      date: "Sep 2024 - Sep 2027",
      image: "/Sertifikat/Sertifikat_Belajar_Dasar_AI_page-0001.jpg",
      url: "/certificate/Sertifikat_Belajar_Dasar_AI.pdf",
    },
    {
      id: 16,
      title: "Belajar Dasar Visualisasi Data",
      organization: "Dicoding Indonesia",
      date: "Sep 2024 - Sep 2027",
      image:
        "/Sertifikat/Sertifikat_Belajar_Dasar_VisualisasiData_page-0001.jpg",
      url: "/certificate/Sertifikat_Belajar_Dasar_VisualisasiData.pdf",
    },
    {
      id: 17,
      title: "Belajar Dasar Git dengan GitHub",
      organization: "Dicoding Indonesia",
      date: "Jan 2025 - Jan 2028",
      image:
        "/Sertifikat/Sertifikat_Belajar_Dasar_Git_dengan_Github_pages-to-jpg-0001.jpg",
      url: "/certificate/Sertifikat_Belajar_Dasar_Git_dengan_Github.pdf",
    },
    {
      id: 18,
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      organization: "Dicoding Indonesia",
      date: "Jan 2025 - Jan 2028",
      image:
        "/Sertifikat/Sertifikat_Pengenalan_ke_Logika_Pemrogramaan_page-0001.jpg",
      url: "/certificate/Sertifikat_Pengenalan_ke_Logika_Pemrogramaan.pdf",
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);

  // Get current certificates
  const indexOfLastCertificate = currentPage * certificatesPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
  const currentCertificates = certificates.slice(
    indexOfFirstCertificate,
    indexOfLastCertificate
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <>
      {/* Certificates Grid - Updated to show 4 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {currentCertificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`rounded-lg overflow-hidden ${
              isDark
                ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                : "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm"
            }`}
          >
            <div className="relative h-28 w-full overflow-hidden">
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2">
              <h4
                className={`text-xs font-bold truncate ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {cert.title}
              </h4>
              <p className="text-xs text-purple-400">{cert.organization}</p>
              <p
                className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {cert.date}
              </p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center text-xs font-medium text-purple-400 hover:text-purple-300"
              >
                View <ExternalLink className="ml-1 w-2.5 h-2.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center items-center gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-md ${
            isDark
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
          } transition-colors`}
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                currentPage === i + 1
                  ? isDark
                    ? "bg-purple-600 text-white"
                    : "bg-purple-500 text-white"
                  : isDark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label={`Page ${i + 1}`}
              aria-current={currentPage === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md ${
            isDark
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
          } transition-colors`}
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </>
  );
}
