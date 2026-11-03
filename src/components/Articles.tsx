import React, { useEffect, useMemo, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import ArticleCard from "../components/ArticleCard";
import { loadArticle } from "../lib/loadMarkdown";
import { slugify } from "../utils/slugify";
import Seo from "./Seo";

type Article = {
  title: string;
  image: string;
  thumb: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
  color: string;
  category: string;
};

const articleImage = (
  base: string,
  width: number,
  height: number,
  thumbWidth: number,
  thumbHeight: number
) => ({
  image: `/images/articles/${base}.webp`,
  thumb: `/images/articles/thumbs/${base}.webp`,
  width,
  height,
  thumbWidth,
  thumbHeight,
});

const articles: Article[] = [
  { title: "Anlamak", ...articleImage("anlamak", 1024, 1024, 200, 200), color: "bg-yellow-50", category: "Kişisel Gelişim" },
  { title: "Bataklık", ...articleImage("bataklik", 800, 1200, 133, 200), color: "bg-green-50", category: "Kişisel Gelişim" },
  { title: "Budak", ...articleImage("budak", 1024, 1024, 200, 200), color: "bg-blue-50", category: "Estetik" },
  { title: "Duygu Karmaşası", ...articleImage("duygukar", 1024, 1024, 200, 200), color: "bg-red-50", category: "Duygular" },
  { title: "Eşsiz Ahenk", ...articleImage("essizahenk", 1200, 800, 200, 133), color: "bg-purple-50", category: "Estetik" },
  { title: "İki Düşünce", ...articleImage("ikidusunce", 1024, 1024, 200, 200), color: "bg-pink-50", category: "Varoluş" },
  { title: "Gidenin de Kalanın da Gönlü Hoş", ...articleImage("gidenkalangonul", 1024, 1024, 200, 200), color: "bg-orange-50", category: "İlişkiler" },
  { title: "Güzel Son", ...articleImage("guzelson", 800, 1200, 133, 200), color: "bg-teal-50", category: "Hayat" },
  { title: "Hayattaki Küçük Adımlar", ...articleImage("kucukadimlar", 1024, 1024, 200, 200), color: "bg-indigo-50", category: "Hayat" },
  { title: "Küçük Etki", ...articleImage("kucuketki", 1024, 1024, 200, 200), color: "bg-amber-50", category: "Kişisel Gelişim" },
  { title: "Nuh'un Gemisi", ...articleImage("nuhungemisi", 1024, 1024, 200, 200), color: "bg-lime-50", category: "Hayat" },
  { title: "Önceliklerimiz Olmalı", ...articleImage("oncelik", 1024, 1024, 200, 200), color: "bg-rose-50", category: "Kişisel Gelişim" },
  { title: "Sıkılmaktan Kurtul", ...articleImage("sikilmak", 1200, 800, 200, 133), color: "bg-cyan-50", category: "Kişisel Gelişim" },
  { title: "Son Dönemeç", ...articleImage("sondonemec", 1024, 1024, 200, 200), color: "bg-fuchsia-50", category: "Hayat" },
  { title: "Süt Tadında", ...articleImage("suttadinda", 1024, 1024, 200, 200), color: "bg-stone-50", category: "Varoluş" },
  { title: "Şifa Zıtlıktadır", ...articleImage("sifa", 1024, 1024, 200, 200), color: "bg-emerald-50", category: "Varoluş" },
  { title: "Unutmuşum", ...articleImage("unutmusum", 1024, 1024, 200, 200), color: "bg-slate-50", category: "Duygular" },
  { title: "Ün", ...articleImage("un", 1024, 1024, 200, 200), color: "bg-neutral-50", category: "İlişkiler" },
  { title: "Yanlış", ...articleImage("yanlis", 1024, 1024, 200, 200), color: "bg-violet-50", category: "Duygular" },
  { title: "Yara İzi", ...articleImage("yaraizi", 1024, 1024, 200, 200), color: "bg-gray-70", category: "Duygular" },
  { title: "Yargılamak", ...articleImage("yargilamak", 1024, 1024, 200, 200), color: "bg-zinc-50", category: "Varoluş" },
  { title: "Zaman", ...articleImage("zaman", 1024, 1024, 200, 200), color: "bg-sky-50", category: "Duygular" }
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
        <Seo
            title="Denemelerim | Muhyettin Özer"
            description="Kişisel gelişim, hayat, duygular ve varoluş üzerine denemeler."
            path="/articles"
        />
        <img
            src="/backgrounds/od.webp"
            alt="background"
            width={1036}
            height={1516}
            decoding="async"
            fetchPriority="high"
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
                          src={article.thumb}
                          alt={article.title}
                          width={article.thumbWidth}
                          height={article.thumbHeight}
                          decoding="async"
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
                    width={article.width}
                    height={article.height}
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
