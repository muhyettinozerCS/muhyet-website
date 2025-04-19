import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.4}}
      >

        {/* 🔮 Arka plan animasyonları */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-50 top-20 left-20 animate-pulse" />
          <div className="absolute w-80 h-80 bg-blue-200 rounded-full blur-2xl opacity-50 bottom-10 right-10 animate-ping" />
        </div>

        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800 py-16 px-6">
          <div className="max-w-4xl mx-auto shadow-xl bg-white rounded-2xl p-10">

            <p className="mb-6 text-lg leading-relaxed">
              <span className="font-semibold text-blue-600">Merhaba, ben Muhyettin Özer.</span> 5 yılı aşkın süredir
              çeşitli teknoloji firmalarında yazılım test ve kalite süreçlerinde aktif olarak görev alıyorum.
              Çalışmalarım; test planlaması, senaryo geliştirme, manuel ve otomasyon test, hata yönetimi ve süreç
              dökümantasyonu gibi alanları kapsamaktadır.
              Teknik bilgimi yazılım geliştirme süreçleriyle bütünleştirerek, ürünlerin yüksek kaliteyle son kullanıcıya
              ulaşmasını sağlamayı amaçlıyorum.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              Eğitim geçmişim; Ankara Üniversitesi Bilgisayar Mühendisliği lisans, Atatürk Üniversitesi Bilgisayar
              Mühendisliği yüksek lisans ve yine Atatürk Üniversitesi Yazılım Mühendisliği yüksek lisans programlarını
              kapsamaktadır.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              Prepp, Funly Education, Readki, Solvoyo ve Innova gibi şirketlerde test liderliği ve analistliği
              pozisyonlarında görev aldım. Yazılım test süreçlerinde Java, Selenium, SQL, Postman, Git, Jira, PL/SQL
              gibi araçları yoğun olarak kullandım.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              İlgi alanlarım arasında okçuluk, doğa yürüyüşleri, kampçılık, satranç, roman okumak ve podcast dinlemek
              yer alıyor. Aynı zamanda yazdığım teknik yazıları ve denemeleri paylaşmayı seviyorum.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              Projelerim arasında <span className="font-medium">Smart Lift</span>, <span className="font-medium">Emergency Recovery Mode</span>, <span
                className="font-medium">Beymen Web Automation</span>, <span className="font-medium">Trello API Automation</span> ve <span
                className="font-medium">Prepp Data Automation</span> gibi işler bulunuyor. GitHub üzerinden bu projelere
              ulaşabilirsiniz.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Daha fazlası için benimle iletişime geçebilir veya LinkedIn profilime göz atabilirsiniz. ✉️ <a
                href="mailto:muhyettinozer@gmail.com" className="text-blue-600 underline">muhyettinozer@gmail.com</a>
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <a
                  href="https://github.com/muhyettinozerCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition"
              >
                <span className="text-xl">🔗</span> GitHub
              </a>
              <a
                  href="https://linkedin.com/in/muhyettinozer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded hover:bg-blue-200 transition"
              >
                <span className="text-xl">🔗</span> LinkedIn
              </a>
              <a
                  href="/MuhyettinOzer.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded hover:bg-green-200 transition"
              >
                <span className="text-xl">📄</span> CV’yi İndir
              </a>
            </div>
          </div>
        </div>
      </motion.div>
  );
};

export default About;
