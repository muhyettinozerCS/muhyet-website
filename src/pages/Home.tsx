import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden"
      >
        {/* Arka Plan */}
        <div className="absolute top-0 left-0 w-full h-full animate-gradient bg-gradient-to-r from-blue-300 via-pink-200 to-purple-300 bg-[length:400%_400%] -z-10" />

        {/* İçerik */}
        <div className="min-h-screen text-gray-900 flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-500 drop-shadow-md">
            <TypeAnimation
                sequence={[
                  "Merhaba",
                  1000,
                  "Ben Muhyettin Özer",
                  2500,
                  "Yazılım kalite süreçlerini yönetiyorum.",
                  2500,
                  "İlgi alanlarım ",
                  1500,
                  "Bilim-Kültür-Sanat-Edebiyat",
                  1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
          </h1>


          {/* Butonlar */}
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link
                to="/about"
                className="bg-yellow-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-yellow-700 transition"
            >
              Hakkımda
            </Link>
            <Link
                to="/projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition"
            >
              Projelerim
            </Link>
            <Link
                to="/essays"
                className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-700 transition"
            >
              Yazılarım
            </Link>
            <Link
                to="/articles"
                className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-purple-700 transition"
            >
              Denemelerim
            </Link>
            <Link
                to="/contact"
                className="bg-gray-800 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-900 transition"
            >
              İletişim
            </Link>
          </div>
        </div>
      </motion.div>
  );
};

export default Home;
