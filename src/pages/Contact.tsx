import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Mail } from "lucide-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvargoj"); // Your Formspree form ID

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden"
    >
      {/* Parallax Glow Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-40 top-10 left-10 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-pink-100 rounded-full blur-2xl opacity-30 bottom-20 right-20 animate-ping" />
        <div className="absolute w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-20 top-40 -right-48 animate-bounce-slow" />
        <div className="absolute w-[300px] h-[300px] bg-blue-50 rounded-full blur-2xl opacity-25 bottom-10 left-10 animate-bounce-slow-reverse" />
      </div>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-900 py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-700">📬 İletişim</h2>
        {state.succeeded ? (
          <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center">
            <p className="text-2xl font-semibold text-green-600">Mesajınız iletildi! En kısa sürede sizler dönüş sağlanacaktır. Teşekkürler 🙏</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="👤 Adınız"
              className="w-full border p-3 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="📧 E-posta"
              className="w-full border p-3 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea
              id="message"
              name="message"
              placeholder="💬 Mesajınız"
              rows={5}
              className="w-full border p-3 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              disabled={state.submitting}
            >
              {state.submitting ? "Gönderiliyor..." : "✉️ Gönder"}
            </button>
          </form>
        )}

        {/* Social Links */}
        <div className="flex justify-center items-center mt-10 space-x-6 text-blue-700">
          <a
            href="https://instagram.com/muhyettinozer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com/muhyettinozer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
          <a
            href="mailto:muhyettinozer@gmail.com"
            className="hover:text-red-500 transition"
            aria-label="E-posta"
          >
            <Mail />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
