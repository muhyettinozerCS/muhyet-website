import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const toggleVisible = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-green-400 text-white text-xl transition-opacity duration-300 ${
                visible ? "opacity-70" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Sayfanın en üstüne dön"
        >
            ↑
        </button>
    );
};

export default ScrollToTop;
