import React from "react";
import { motion } from "framer-motion";

const projects = [

  {
    title: "Beymen Web Automation",
    description: "Beymen sitesi üzerinde otomasyon testleri.",
    link1: "https://github.com/muhyettinozerCS/ApiAutomation/tree/main/BeymenWebAutomation",
  },
  {
    title: "Trello API Automation",
    description: "Trello API için otomasyon test projesi.",
    link1: "https://github.com/muhyettinozerCS/ApiAutomation/tree/main/TrelloApiAutomation",
  },
  {
    title: "Prepp Data Automation",
    description: "Prepp platformu veri test otomasyonu.",
    link1: "https://github.com/muhyettinozerCS/Prepp",
  },
  {
    title: "Emergency Recovery Mode",
    description: "Asansörler için acil durum kurtarma sistemi.",
    link1: "https://github.com/muhyettinozer/-Emergency-Recovery-Mode",
  },
  {
    title: "Smart Lift",
    description: "Akıllı asansör sistemi projesi.",
    link1: "https://github.com/muhyettinozer/Smart-Lift",
  },
];

const inProgressProjects = [
  {
    title: "TestMind",
    description: "Temel Kullanıcı Akışları (Core User Flows), Kritik Fonksiyon Testler (Critical Functionality Tests) projeye uygun test çıkarma",
    link1: "#",
  },
  {
    title: "AI ile Ajanda",
    description: "İş planı takibi ve plan verim artırma uygulaması",
    link1: "#",
  },
  {
    title: "Karima",
    description: "Farklı dillerdeki atasözleri ve deyimlerin anlamlarını keşfedebileceğiniz zengin bir sözlük.",
    link1: "#",
  },
  {
    title: "Quality Assurance",
    description: "QA alanında eğitim, topluluk, e-ticaret ve Türkçe içeriklere özel sayfalar sunan kapsamlı bir platform.",
    link: "https://www.qualityassurance.academy/"
  }
];

const Projects = () => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
      >
        {/* 🔮 Glow arka plan efektleri */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 top-20 left-20 animate-pulse" />
          <div className="absolute w-80 h-80 bg-cyan-100 rounded-full blur-2xl opacity-30 bottom-10 right-10 animate-ping" />
        </div>

        {/* 📦 İçerik */}
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 text-gray-900 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-2 text-sky-600 drop-shadow-sm">
              🚀 Projelerim
            </h2>
            <p className="text-center text-gray-600 mb-12 text-md max-w-2xl mx-auto">
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                  <a
                      key={index}
                      href={project.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-white border rounded-xl shadow hover:shadow-xl transition duration-300 hover:border-sky-400 hover:scale-[1.02]"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-sky-700">💡 {project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </a>
              ))}
            </div>

            <section className="mt-20">
              <h2 className="text-3xl font-bold text-center text-sky-500 mb-8">🚧 Geliştirmekte Olduklarım</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {inProgressProjects.map((project, index) => (
                    <div
                        key={index}
                        className="relative block p-6 bg-gradient-to-tr from-blue-50 via-cyan-50 to-indigo-50 border border-blue-100 rounded-xl shadow-lg hover:shadow-xl transition hover:border-cyan-200"
                    >
                      <div className="absolute top-2 right-2 bg-blue-400 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                        Yakında
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h3>
                      <p className="text-gray-700">{project.description}</p>
                      {project.link1 !== "#" && (
                          <a
                              href={project.link}
                              className="inline-block mt-3 text-sm text-sky-600 font-medium hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            Link
                          </a>
                      )}
                    </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </motion.div>
  );
};

export default Projects;
