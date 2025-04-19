import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const EssayDetail = () => {
    const { slug } = useParams();
    const [content, setContent] = useState<string>("");
    const [meta, setMeta] = useState<{ title: string; date: string } | null>(null);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const loadEssay = async () => {
            try {
                const res = await fetch(`/essays/${slug}.md`);

                if (!res.ok) {
                    throw new Error("Dosya bulunamadı");
                }

                const text = await res.text();
                const { content, data } = matter(text);

                setContent(content);
                setMeta({ title: data.title, date: data.date });
                setError(false);
            } catch (error) {
                console.error("Makale yüklenemedi:", error);
                setError(true);
            }
        };

        loadEssay();
    }, [slug]);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6">
            <div className="max-w-3xl mx-auto">
                {error ? (
                    <div className="text-red-600 text-center mb-6">
                        Yazı bulunamadı veya yüklenirken bir sorun oluştu.
                    </div>
                ) : meta ? (
                    <>
                        <h2 className="text-4xl font-bold mb-2">{meta.title}</h2>
                        <p className="text-gray-500 text-sm mb-6">{meta.date}</p>
                    </>
                ) : (
                    <p className="text-center text-gray-500 mb-6">Yükleniyor...</p>
                )}

                {content && (
                    <article className="prose prose-lg max-w-none">
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
                            {content}
                        </ReactMarkdown>
                    </article>
                )}

                <div className="mt-8">
                    <Link
                        to="/essays"
                        className="inline-block px-4 py-2 mt-4 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
                    >
                        ← Tüm yazılara geri dön
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EssayDetail;
