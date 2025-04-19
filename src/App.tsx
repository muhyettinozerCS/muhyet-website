import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import EssayDetail from "./components/EssayDetail"; // ✅ en üste alındı
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Essays from "./pages/Essays";
import Articles from "./components/Articles";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import AutoScrollToTop from "./components/AutoScrollToTop";

// 👇 Ana içerik için ayrı bir bileşen oluşturuyoruz
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/essays" element={<Essays />} />
                <Route path="/essay/:slug" element={<EssayDetail />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <Navbar />
            <AutoScrollToTop />
            <AnimatedRoutes />
        </Router>
    );
}

export default App;
