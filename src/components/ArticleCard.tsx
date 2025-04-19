import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { slugify } from "../utils/slugify";


type ArticleCardProps = {
    title: string;
    image: string;
    content: string;
    color?: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, image, content, color = "bg-white" }) => {
    return (
        <motion.section

            id={`article-${slugify(title)}`}
            className={`scroll-mt-[180px] overflow-hidden rounded-2xl shadow-xl ${color}`}

                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.3}}
                transition={{duration: 0.6, ease: "easeOut"}}
            >
                <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8">
                    {/* Görsel */}
                    <div className="relative overflow-hidden rounded-xl group">
                        <img
                            src={image}
                            alt={title}
                            className="w-full max-h-[450px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                        />
                    </div>


                    {/* Başlık + Yazı Kutusu */}
                    <div>
                        <h3 className="text-4xl font-bold text-gray-800 border-b pb-0.5 m-1">{title}</h3>
                        <motion.div
                            initial={{opacity: 0, x: 40}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true, amount: 0.3}}
                            transition={{duration: 0.3, ease: "easeOut"}}
                            className="bg-white/65 backdrop-blur-md p-3 rounded-xl shadow-inner prose max-w-none prose-lg prose-slate"
                        >
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </motion.div>
                    </div>
                </div>
        </motion.section>
    );
};

export default ArticleCard;
