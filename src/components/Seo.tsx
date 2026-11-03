import React from "react";

const SITE_ORIGIN = "https://www.muhyettinozer.com";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
};

export default function Seo({ title, description, path, noindex = false }: SeoProps) {
  const canonical = path ? `${SITE_ORIGIN}${path}` : undefined;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : null}
    </>
  );
}
