import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import matter from "gray-matter";

interface EssayMeta {
    slug: string;
    title: string;
    date: string;
    summary: string;
}

const Essays = () => {
    const [essays, setEssays] = useState<EssayMeta[]>([]);

    useEffect(() => {
        const fetchEssays = async () => {
            try {
                const res = await fetch("/essays/index.json");
                const files: string[] = await res.json();

                const loadedEssays = await Promise.all(
                    files.map(async (filename) => {
                        const slug = filename.replace(".md", "");
                        const file = await fetch(`/essays/${filename}`);
                        const raw = await file.text();
                        const { data } = matter(raw);

                        return {
                            slug,
                            title: data.title || slug,
                            date: data.date || "",
                            summary: data.summary || "",
                        };
                    })
                );

                setEssays(loadedEssays);
            } catch (error) {
                console.error("Yazılar yüklenemedi:", error);
            }
        };

        fetchEssays();
    }, []);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.4}}
        >

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-50 top-20 left-20 animate-pulse"/>
                <div
                    className="absolute w-80 h-80 bg-blue-200 rounded-full blur-2xl opacity-50 bottom-10 right-10 animate-ping"/>
            </div>
            <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6">
                <div className="max-w-3xl mx-auto space-y-6">
                    {essays.map((essay) => (
                        <Link
                            key={essay.slug}
                            to={`/essay/${essay.slug}`}
                            className="block p-6 bg-white border rounded-xl shadow hover:shadow-md transition"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{essay.title}</h3>
                            <p className="text-gray-500 text-sm mb-2">{essay.date}</p>
                            <p className="text-gray-700">{essay.summary}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div
                className="absolute top-0 left-0 w-full h-full animate-gradient bg-gradient-to-r from-blue-300 via-pink-200 to-purple-300 bg-[length:400%_400%] -z-10"
            />
        </motion.div>
    );
};

export default Essays;
