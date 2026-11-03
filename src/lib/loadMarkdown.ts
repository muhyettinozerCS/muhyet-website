import { slugify } from "../utils/slugify";

export async function loadArticle(title: string): Promise<string> {
    const filename = slugify(title) + ".md";
    const path = `/articles/${filename}`;

    try {
        const res = await fetch(path);
        if (!res.ok) throw new Error(`❌ Dosya bulunamadı: ${path}`);
        return await res.text();
    } catch (err) {
        console.error(err);
        return "Yazı yüklenemedi.";
    }
}
