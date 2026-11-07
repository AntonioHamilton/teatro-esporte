import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  url: string;
  locale?: string;
  type?: string;
  siteName?: string;
  twitterCard?: string;
  robots?: string;
  keywords?: string;
};

const setMetaByName = (name: string, content: string) => {
  let element = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setMetaByProperty = (property: string, content: string) => {
  let element = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const Seo = ({
  title,
  description,
  url,
  locale = "pt_BR",
  type = "website",
  siteName = "Teatro Esporte",
  twitterCard = "summary_large_image",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  keywords,
}: SeoProps) => {
  useEffect(() => {
    document.title = title;
    setCanonical(url);
    setMetaByName("description", description);
    setMetaByName("robots", robots);
    setMetaByName("twitter:card", twitterCard);
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:url", url);
    if (keywords) {
      setMetaByName("keywords", keywords);
    }
    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:locale", locale);
    setMetaByProperty("og:type", type);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:site_name", siteName);
  }, [description, keywords, locale, robots, siteName, title, twitterCard, type, url]);

  return null;
};

export default Seo;
