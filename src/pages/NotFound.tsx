import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden"
    >
      <Seo
        title="Sayfa bulunamadı | Muhyettin Özer"
        description="Aradığınız sayfa mevcut değil."
        noindex
      />
      <div className="absolute top-0 left-0 w-full h-full animate-gradient bg-gradient-to-r from-blue-300 via-pink-200 to-purple-300 bg-[length:400%_400%] -z-10" />
      <div className="min-h-screen text-gray-900 flex flex-col items-center justify-center p-6 text-center">
        <p className="text-sm font-semibold tracking-wide text-blue-700 mb-3">404</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Sayfa bulunamadı</h1>
        <p className="text-gray-700 mb-8 max-w-md">
          Aradığınız sayfa mevcut değil ya da taşınmış olabilir.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition"
        >
          Anasayfaya dön
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
