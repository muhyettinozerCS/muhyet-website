// src/utils/slugify.ts
export function slugify(str: string): string {
    return str
        .toLowerCase()
        .replace(/ç/g, "c")
        .replace(/ğ/g, "g")
        .replace(/ı/g, "i")
        .replace(/i̇/g, "i")
        .replace(/ö/g, "o")
        .replace(/ş/g, "s")
        .replace(/ü/g, "u")
        .replace(/'/g, "")
        .replace(/[^a-z0-9]/g, "");
}
