import React, { useEffect, useMemo, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import ArticleCard from "../components/ArticleCard";
import { loadArticle } from "../lib/loadMarkdown";
import { slugify } from "../utils/slugify";

const articles = [
  { title: "Anlamak", image: "/images/articles/anlamak.png", color: "bg-yellow-50", category: "Kişisel Gelişim" },
  { title: "Bataklık", image: "/images/articles/bataklik.png", color: "bg-green-50", category: "Kişisel Gelişim" },
  { title: "Budak", image: "/images/articles/budak.png", color: "bg-blue-50", category: "Estetik" },
  { title: "Duygu Karmaşası", image: "/images/articles/duygukar.png", color: "bg-red-50", category: "Duygular" },
  { title: "Eşsiz Ahenk", image: "/images/articles/essizahenk.png", color: "bg-purple-50", category: "Estetik" },
  { title: "İki Düşünce", image: "/images/articles/ikidusunce.png", color: "bg-pink-50", category: "Varoluş" },
  { title: "Gidenin de Kalanın da Gönlü Hoş", image: "/images/articles/gidenkalangonul.png", color: "bg-orange-50", category: "İlişkiler" },
  { title: "Güzel Son", image: "/images/articles/guzelson.png", color: "bg-teal-50", category: "Hayat" },
  { title: "Hayattaki Küçük Adımlar", image: "/images/articles/kucukadimlar.png", color: "bg-indigo-50", category: "Hayat" },
  { title: "Küçük Etki", image: "/images/articles/kucuketki.png", color: "bg-amber-50", category: "Kişisel Gelişim" },
  { title: "Nuh'un Gemisi", image: "/images/articles/nuhungemisi.png", color: "bg-lime-50", category: "Hayat" },
  { title: "Önceliklerimiz Olmalı", image: "/images/articles/oncelik.png", color: "bg-rose-50", category: "Kişisel Gelişim" },
  { title: "Sıkılmaktan Kurtul", image: "/images/articles/sikilmak.png", color: "bg-cyan-50", category: "Kişisel Gelişim" },
  { title: "Son Dönemeç", image: "/images/articles/sondonemec.png", color: "bg-fuchsia-50", category: "Hayat" },
  { title: "Süt Tadında", image: "/images/articles/suttadinda.png", color: "bg-stone-50", category: "Varoluş" },
  { title: "Şifa Zıtlıktadır", image: "/images/articles/sifa.png", color: "bg-emerald-50", category: "Varoluş" },
  { title: "Unutmuşum", image: "/images/articles/unutmusum.png", color: "bg-slate-50", category: "Duygular" },
  { title: "Ün", image: "/images/articles/un.png", color: "bg-neutral-50", category: "İlişkiler" },
  { title: "Yanlış", image: "/images/articles/yanlis.png", color: "bg-violet-50", category: "Duygular" },
  { title: "Yara İzi", image: "/images/articles/yaraizi.png", color: "bg-gray-70", category: "Duygular" },
  { title: "Yargılamak", image: "/images/articles/yargilamak.png", color: "bg-zinc-50", category: "Varoluş" },
  { title: "Zaman", image: "/images/articles/zaman.png", color: "bg-sky-50", category: "Duygular" }
];

const Articles = () => {
  const [articleContents, setArticleContents] = useState<{ [title: string]: string }>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadContents = async () => {
      const loaded: { [title: string]: string } = {};
      for (const article of articles) {
        try {
          const content = await loadArticle(article.title);
          loaded[article.title] = content;
        } catch (error) {
          console.error(`"${article.title}" yüklenemedi.`, error);
          loaded[article.title] = "Yazı bulunamadı.";
        }
      }
      setArticleContents(loaded);
    };
    loadContents();
  }, []);

  const categories = Array.from(new Set(articles.map(a => a.category)));

  const randomizedCards = useMemo(() => {
    const heights = ["h-[180px]"];
    const widths = ["w-[150px]"];
    const marginTops = ["mt-0", "mt-2", "mt-4", "mt-6", "mt-8"];
    const bgColors = [
      "bg-red-100", "bg-orange-100", "bg-amber-100", "bg-yellow-100",
      "bg-lime-100", "bg-green-100", "bg-emerald-100", "bg-teal-100",
      "bg-cyan-100", "bg-sky-100", "bg-blue-100", "bg-indigo-100",
      "bg-violet-100", "bg-purple-100", "bg-pink-100", "bg-rose-100"
    ];

    const shuffled = [...articles.slice(0, 22)];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.map((article, i) => ({
      ...article,
      bg: bgColors[i % bgColors.length],
      height: heights[i % heights.length],
      mt: marginTops[i % marginTops.length],
      width: widths[i % widths.length]
    }));
  }, []);

  const filteredCards = useMemo(() => {
    return selectedCategory
        ? randomizedCards.filter(card => card.category === selectedCategory)
        : randomizedCards;
  }, [selectedCategory, randomizedCards]);

  return (
      <div className="relative">
        <img
            src="/backgrounds/od.jpeg"
            alt="background"
            className="fixed top-0 left-0 w-full h-full object-cover -z-20 opacity-60"
        />
        <div className="fixed top-0 left-0 w-full h-full bg-green-1/2 backdrop-blur-md -z-10" />

        <div className="min-h-screen text-gray-700 py-6 px-4 sm:px-6 lg:px-8">


          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-1 rounded-full border ${
                    selectedCategory === null ? "bg-blue-600 text-white" : "bg-white"
                }`}
            >
              Tümü
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1 rounded-full border ${
                        selectedCategory === category ? "bg-blue-200 text-white" : "bg-white"
                    }`}
                >
                  {category}
                </button>
            ))}
          </div>

          <div className="max-w-screen-xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(143px,1fr))] gap-4 px-2 justify-items-center mb-20">
            {filteredCards.map((article) => {
              const preview = (articleContents[article.title] || "").slice(0, 40) + "...";

              return (
                  <a
                      key={article.title}
                      href={`#article-${slugify(article.title)}`}
                      className={`group rounded-xl shadow-md hover:shadow-xl transition-transform duration-250 hover:-translate-y-1 hover:scale-[1.02]
${article.bg} ${article.height} ${article.mt} ${article.width}
flex flex-col justify-between backdrop-blur-md`}
                  >
                    <div className="flex justify-center items-start h-1/2 pt-4 px-0.5 overflow-hidden">
                      <img
                          src={article.image}
                          alt={article.title}
                          className="h-24 w-24 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-3 pb-2 text-center">
                      <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-transform duration-300">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-3">{preview}</p>
                    </div>
                  </a>
              );
            })}
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {articles.map((article, index) => (
                <ArticleCard
                    key={index}
                    title={article.title}
                    image={article.image}
                    color={article.color}
                    content={articleContents[article.title] || "Yükleniyor..."}
                />
            ))}
          </div>

          <ScrollToTop />
        </div>
      </div>
  );
};

export default Articles;
