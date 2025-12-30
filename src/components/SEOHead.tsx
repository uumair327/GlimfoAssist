/**
 * @file SEOHead.tsx
 * @description Dynamic SEO meta tag management
 * 
 * WHY: Proper SEO meta tags are essential for search engine visibility
 *      and social media sharing. This component dynamically updates
 *      meta tags based on the current page/content, improving SEO
 *      and social sharing appearance.
 * 
 * WHAT: Headless component that updates document meta tags.
 * WHERE: Can be used in any page component to set page-specific SEO.
 * WHEN: Updates on mount and when props change.
 * HOW: Uses useEffect to manipulate document.head meta tags.
 */

import { useEffect } from "react";
import { SEO_CONFIG } from "@/constants";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEOHead = ({
  title = SEO_CONFIG.title,
  description = SEO_CONFIG.description,
  keywords = SEO_CONFIG.keywords,
  ogImage = SEO_CONFIG.ogImage,
  canonical = `${SEO_CONFIG.url}/`,
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
  }, [title, description, keywords, ogImage, canonical]);

  return null;
};

export default SEOHead;
