import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { l as lookup, r as resolveSrc, i as isRemoteImage, a as isESMImportedImage, b as isLocalService, D as DEFAULT_HASH_PROPS } from './astro/assets-service_wt7wRGu0.mjs';
import { c as createAstro, b as createComponent, r as renderTemplate, d as addAttribute, e as renderComponent, u as unescapeHTML, F as Fragment, f as defineScriptVars, A as AstroError, g as ExpectedImageOptions, E as ExpectedImage, h as FailedToFetchRemoteImageDimensions, i as InvalidImageService, j as ImageMissingAlt, m as maybeRenderHead, s as spreadAttributes, k as renderSlot, l as renderHead, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                          */
import slugify from 'limax';
import merge from 'lodash.merge';
import { escape } from 'html-escaper';
import { getIconData, iconToSVG } from '@iconify/utils';
import { twMerge } from 'tailwind-merge';
/* empty css                          */
import { parseUrl, transformUrl } from 'unpic';

const SITE = {"name":"Robert Ferguson","site":"https://rewferguson.com","base":"/","trailingSlash":false,"googleSiteVerificationId":""};
                    const I18N = {"language":"en","textDirection":"ltr"};
                    const METADATA = {"title":{"default":"Robert Ferguson","template":"%s"},"description":"A personal site for Robert Ferguson, a software engineer and creative maker.","robots":{"index":true,"follow":true},"openGraph":{"type":"website","site_name":"Robert Ferguson","images":[{"url":"~/assets/images/default.png","width":1200,"height":628}]}};
                    const APP_BLOG = {"isEnabled":true,"postsPerPage":6,"isRelatedPostsEnabled":true,"relatedPostsCount":4,"post":{"isEnabled":true,"permalink":"/%slug%","robots":{"index":true,"follow":true}},"list":{"isEnabled":true,"pathname":"blog","robots":{"index":true,"follow":true}},"category":{"isEnabled":true,"pathname":"category","robots":{"index":true,"follow":true}},"tag":{"isEnabled":true,"pathname":"tag","robots":{"index":false,"follow":true}}};
                    const UI = {"theme":"system","classes":{},"tokens":{"default":{"fonts":{"sans":"MontserratVariable","serif":"MontserratVariable","heading":"MontserratVariable"},"colors":{"default":"rgb(16 16 16)","heading":"rgb(0 0 0)","muted":"rgb(16 16 16 / 66%)","bgPage":"rgb(255 255 255)","primary":"rgb(30 50 90)","secondary":"rgb(88 139 202)","accent":"rgb(224 0 110)","dark":"rgb(3 6 32)"}},"dark":{"fonts":{},"colors":{"default":"rgb(229 236 246)","heading":"rgb(247, 248, 248)","muted":"rgb(229 236 246 / 66%)","bgPage":"hsl(198 74% 20% / 1)","primary":"rgb(88 187 202)","secondary":"rgb(224 0 110)","accent":"rgb(88 202 149)","dark":"hsl(198 74% 20% / 1)"}}}};

const trim = (str = "", ch) => {
  let start = 0, end = str.length || 0;
  while (start < end && str[start] === ch)
    ++start;
  while (end > start && str[end - 1] === ch)
    --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, "/"));
const createPath = (...params) => {
  const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
  return "/" + paths + ("");
};
const BASE_PATHNAME = SITE.base ;
const cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
cleanSlug(APP_BLOG?.list?.pathname);
const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
trimSlash(APP_BLOG?.post?.permalink );
const getCanonical = (path = "") => {
  const url = String(new URL(path, SITE.site));
  if (path && url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
};
const getPermalink = (slug = "", type = "page") => {
  let permalink;
  switch (type) {
    case "category":
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case "post":
      permalink = createPath(trimSlash(slug));
      break;
    case "page":
    default:
      permalink = createPath(slug);
      break;
  }
  return definitivePermalink(permalink);
};
const getHomePermalink = () => getPermalink("/");
const getAsset = (path) => "/" + [BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/");
const definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);

const $$Astro$D = createAstro("https://rewferguson.com");
const $$CommonMeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$CommonMeta;
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="sitemap"${addAttribute(getAsset("/sitemap-index.xml"), "href")}>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/common/CommonMeta.astro", void 0);

const favIcon = "/_astro/favicon.CI63N4lC.ico";

const favIconSvg = new Proxy({"src":"/_astro/favicon.BX9iqkVz.svg","width":158,"height":117,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/favicons/favicon.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/favicons/favicon.svg");
							return target[name];
						}
					});

const appleTouchIcon = new Proxy({"src":"/_astro/apple-touch-icon.4DR3Zjit.png","width":180,"height":180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/favicons/apple-touch-icon.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/favicons/apple-touch-icon.png");
							return target[name];
						}
					});

const $$Astro$C = createAstro("https://rewferguson.com");
const $$Favicons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$Favicons;
  return renderTemplate`<link rel="shortcut icon"${addAttribute(favIcon, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favIconSvg.src, "href")}><link rel="mask-icon"${addAttribute(favIconSvg.src, "href")} color="#8D46E7"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(appleTouchIcon.src, "href")}>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/Favicons.astro", void 0);

const $$Astro$B = createAstro("https://rewferguson.com");
const $$CustomStyles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$CustomStyles;
  const { tokens } = UI;
  const html = `
  <style>
    :root {
      --rf-font-sans: ${tokens.default.fonts.sans ? `'${tokens.default.fonts.sans}'` : '""'};
      --rf-font-serif: ${tokens.default.fonts.serif ? `'${tokens.default.fonts.serif}'` : "var(--rf-font-sans)"};
      --rf-font-heading: ${tokens.default.fonts.heading ? `'${tokens.default.fonts.heading}'` : "var(--rf-font-sans)"};

      --rf-color-primary: ${tokens.default.colors.primary};
      --rf-color-secondary: ${tokens.default.colors.secondary};
      --rf-color-accent: ${tokens.default.colors.accent};

      --rf-color-text-heading: ${tokens.default.colors.heading};
      --rf-color-text-default: ${tokens.default.colors.default};
      --rf-color-text-dark: ${tokens.default.colors.dark};
      --rf-color-text-muted: ${tokens.default.colors.muted};
      --rf-color-bg-page: ${tokens.default.colors.bgPage};

      --rf-color-bg-page-dark: ${tokens.dark.colors.bgPage};

      ::selection {
        background-color: lavender;
      }
    }

    .dark {
      ${tokens.dark.fonts.sans ? `--rf-font-sans: '${tokens.dark.fonts.sans}';` : ""}
      ${tokens.dark.fonts.serif ? `--rf-font-serif: '${tokens.dark.fonts.serif};'` : ""}
      ${tokens.dark.fonts.heading ? `--rf-font-heading: '${tokens.dark.fonts.heading}';` : ""}

      --rf-color-primary: ${tokens.dark.colors.primary};
      --rf-color-secondary: ${tokens.dark.colors.secondary};
      --rf-color-accent: ${tokens.dark.colors.accent};

      --rf-color-text-heading: ${tokens.dark.colors.heading};
      --rf-color-text-default: ${tokens.dark.colors.default};
      --rf-color-text-muted: ${tokens.dark.colors.muted};
      --rf-color-bg-page: ${tokens.dark.colors.bgPage};

      ::selection {
        background-color: black;
        color: snow;
      }
    }
  </style>
`;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/CustomStyles.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$A = createAstro("https://rewferguson.com");
const $$ApplyColorMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$ApplyColorMode;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<script>(function(){", '\n  function applyTheme(theme) {\n    if (theme === "dark") {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n    const matches = document.querySelectorAll("[data-aw-toggle-color-scheme] > input");\n\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.checked = theme !== "dark";\n      });\n    }\n  }\n\n  if ((defaultTheme && defaultTheme.endsWith(":only")) || (!localStorage.theme && defaultTheme !== "system")) {\n    applyTheme(defaultTheme.replace(":only", ""));\n  } else if (\n    localStorage.theme === "dark" ||\n    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)\n  ) {\n    applyTheme("dark");\n  } else {\n    applyTheme("light");\n  }\n})();<\/script>'])), defineScriptVars({ defaultTheme: UI.theme  }));
}, "/Users/robertferguson/Projects/rewferguson/src/components/common/ApplyColorMode.astro", void 0);

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs} />`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs} />`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(createOpenGraphTag(`${mediaType}:height`, medium.height.toString()));
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, noarchive, unavailableAfter, noimageindex, notranslate } = config.robotsProps;
    if (nosnippet)
      robotsContent.push("nosnippet");
    if (maxSnippet)
      robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive)
      robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex)
      robotsContent.push("noimageindex");
    if (notranslate)
      robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(createLinkTag({ rel: "alternate", media: config.mobileAlternate.media, href: config.mobileAlternate.href }));
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(createLinkTag({ rel: "alternate", hrefLang: languageAlternate.hrefLang, href: languageAlternate.href }));
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(createOpenGraphTag("profile:first_name", config.openGraph.profile.firstName));
      }
      if (config.openGraph.profile.lastName) {
        addTag(createOpenGraphTag("profile:last_name", config.openGraph.profile.lastName));
      }
      if (config.openGraph.profile.username) {
        addTag(createOpenGraphTag("profile:username", config.openGraph.profile.username));
      }
      if (config.openGraph.profile.gender) {
        addTag(createOpenGraphTag("profile:gender", config.openGraph.profile.gender));
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(createOpenGraphTag("book:release_date", config.openGraph.book.releaseDate));
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(createOpenGraphTag("article:published_time", config.openGraph.article.publishedTime));
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(createOpenGraphTag("article:modified_time", config.openGraph.article.modifiedTime));
      }
      if (config.openGraph.article.expirationTime) {
        addTag(createOpenGraphTag("article:expiration_time", config.openGraph.article.expirationTime));
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(createOpenGraphTag("article:section", config.openGraph.article.section));
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(createOpenGraphTag("video:duration", config.openGraph.video.duration.toString()));
      }
      if (config.openGraph.video.releaseDate) {
        addTag(createOpenGraphTag("video:release_date", config.openGraph.video.releaseDate));
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(createOpenGraphTag("video:series", config.openGraph.video.series));
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(createMetaTag({ property: "fb:app_id", content: config.facebook.appId }));
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(createMetaTag({ name: "twitter:card", content: config.twitter.cardType }));
    }
    if (config.twitter.site) {
      addTag(createMetaTag({ name: "twitter:site", content: config.twitter.site }));
    }
    if (config.twitter.handle) {
      addTag(createMetaTag({ name: "twitter:creator", content: config.twitter.handle }));
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$z = createAstro("https://rewferguson.com");
const $$AstroSeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "/Users/robertferguson/Projects/rewferguson/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service_wt7wRGu0.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$y = createAstro("https://rewferguson.com");
const $$Image$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Image$1;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/robertferguson/Projects/rewferguson/node_modules/astro/components/Image.astro", void 0);

const $$Astro$x = createAstro("https://rewferguson.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && originalSrc.format in specialFormatsFallback) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/robertferguson/Projects/rewferguson/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const load = async function() {
  let images = void 0;
  try {
    images = /* #__PURE__ */ Object.assign({"/src/assets/images/Rob.jpg": () => import('./Rob_490DskQp.mjs'),"/src/assets/images/arc-horizontal.svg": () => import('./arc-horizontal_CTX6l7Ek.mjs'),"/src/assets/images/arc.svg": () => import('./arc_Cu9pZimm.mjs'),"/src/assets/images/chapman.svg": () => import('./chapman_DUcnpgTV.mjs'),"/src/assets/images/icons/docker.svg": () => import('./docker_BVmNZpOM.mjs'),"/src/assets/images/icons/gatsby.svg": () => import('./gatsby_zAkRyz-6.mjs'),"/src/assets/images/icons/github copy.svg": () => import('./github copy__kUYSi1j.mjs'),"/src/assets/images/icons/github.svg": () => import('./github_BytOR_W4.mjs'),"/src/assets/images/icons/graphql.svg": () => import('./graphql_DtEQ-kU2.mjs'),"/src/assets/images/icons/javascript.svg": () => import('./javascript_CV1ZibHL.mjs'),"/src/assets/images/icons/link copy.svg": () => import('./link copy_CWZ1xyv4.mjs'),"/src/assets/images/icons/link.svg": () => import('./link_BxQRmT6D.mjs'),"/src/assets/images/icons/mongodb.svg": () => import('./mongodb_Nj3WTIR6.mjs'),"/src/assets/images/icons/mysql.svg": () => import('./mysql_CBkJi5S_.mjs'),"/src/assets/images/icons/next.svg": () => import('./next_BqZdXkaL.mjs'),"/src/assets/images/icons/node.svg": () => import('./node_xqyEnBao.mjs'),"/src/assets/images/icons/php.svg": () => import('./php_ieqmExS5.mjs'),"/src/assets/images/icons/postgres.svg": () => import('./postgres_DSqwThLW.mjs'),"/src/assets/images/icons/python.svg": () => import('./python_CE1i-BAw.mjs'),"/src/assets/images/icons/react.svg": () => import('./react_BGQaj3ML.mjs'),"/src/assets/images/icons/sass.svg": () => import('./sass_CAt5EOKf.mjs'),"/src/assets/images/icons/title.svg": () => import('./title_B_jEgLs6.mjs'),"/src/assets/images/icons/typescript.svg": () => import('./typescript_e6SXe-et.mjs'),"/src/assets/images/icons/wordpress.svg": () => import('./wordpress_DVQQ57KH.mjs'),"/src/assets/images/logo-min.svg": () => import('./logo-min_CheyIyIS.mjs'),"/src/assets/images/logo-round.svg": () => import('./logo-round_BNH7REwb.mjs'),"/src/assets/images/map-1.png": () => import('./map-1_0RXa4l9c.mjs'),"/src/assets/images/map.svg": () => import('./map_CfwfqQL7.mjs'),"/src/assets/images/meandjack.webp": () => Promise.resolve().then(() => meandjack$1),"/src/assets/images/projects/ACC-Catalog/catalog.austincc.edu.png": () => import('./catalog.austincc.edu_BTNxJuZo.mjs'),"/src/assets/images/projects/ACC-Catalog/catalog.austincc.edu2.png": () => import('./catalog.austincc.edu2_C42k53wI.mjs'),"/src/assets/images/projects/ACC-Catalog/catalog.austincc.edu_college-entry_paying-for-college_buy-textbooks-supplies_.png": () => import('./catalog.austincc.edu_college-entry_paying-for-college_buy-textbooks-supplies__CgVs0UIL.mjs'),"/src/assets/images/projects/ACC-Catalog/catalog.austincc.edu_search__q=international+students.png": () => import('./catalog.austincc.edu_search__q_international_students_CJiMITpN.mjs'),"/src/assets/images/projects/ACC-Catalog/cover.jpg": () => import('./cover_DUO72Ltr.mjs'),"/src/assets/images/projects/ACC-Online/cover.jpg": () => import('./cover_Bd3Mi7_B.mjs'),"/src/assets/images/projects/ACC-Online/online.austincc.edu.png": () => import('./online.austincc.edu_DHSJ1q68.mjs'),"/src/assets/images/projects/ACC-TLED/TLED.png": () => import('./TLED_Ci51tGT_.mjs'),"/src/assets/images/projects/Arduino-Web-Controller/svgTransform.png": () => import('./svgTransform_BTpfH7oo.mjs'),"/src/assets/images/projects/Branches/output.png": () => import('./output__o5JE1Za.mjs'),"/src/assets/images/projects/Branches/render-sm.png": () => import('./render-sm_kaEmgjdF.mjs'),"/src/assets/images/projects/Branches/render.png": () => import('./render_DA8ag9O1.mjs'),"/src/assets/images/projects/Budget-Tracker/dollarFormat.png": () => import('./dollarFormat_Dgjz06Zz.mjs'),"/src/assets/images/projects/Budget-Tracker/hslLevels.png": () => import('./hslLevels_3J5nNVS-.mjs'),"/src/assets/images/projects/Budget-Tracker/photo.png": () => import('./photo_CFLfuN2I.mjs'),"/src/assets/images/projects/Budget-Tracker/piecon.png": () => import('./piecon_BRQock2H.mjs'),"/src/assets/images/projects/Budget-Tracker/retina-canvas-error.png": () => import('./retina-canvas-error_B8qFLKaI.mjs'),"/src/assets/images/projects/Budget-Tracker/retina-canvas-fixed.png": () => import('./retina-canvas-fixed_CNR19IcP.mjs'),"/src/assets/images/projects/Budget-Tracker/sample.png": () => import('./sample_ByB6U5_B.mjs'),"/src/assets/images/projects/Drawing-Game/FaceTest.svg": () => import('./FaceTest_CjU1wNim.mjs'),"/src/assets/images/projects/Drawing-Game/twoFace.png": () => import('./twoFace_BhXZHk_h.mjs'),"/src/assets/images/projects/DynamiCat/IMG_0644.jpg": () => import('./IMG_0644_Ygw-isf6.mjs'),"/src/assets/images/projects/DynamiCat/screenshot.png": () => import('./screenshot_DRx745jS.mjs'),"/src/assets/images/projects/DynamiCat/threeCats.png": () => import('./threeCats_QUCxOfVK.mjs'),"/src/assets/images/projects/Frame-Squeezer/Coraline.jpg": () => import('./Coraline_BKE4KkB0.mjs'),"/src/assets/images/projects/Frame-Squeezer/output.png": () => import('./output__7eSHsoU.mjs'),"/src/assets/images/projects/Frame-Squeezer/spiritedAway.jpg": () => import('./spiritedAway_BoiGzrMm.mjs'),"/src/assets/images/projects/Laptop-Stand/IMG_0668.jpg": () => import('./IMG_0668_BU1FTn0S.mjs'),"/src/assets/images/projects/Laptop-Stand/IMG_1116.jpg": () => import('./IMG_1116_Cw8MPfy5.mjs'),"/src/assets/images/projects/Maze-Game/mazy.png": () => import('./mazy_BLeOFwFn.mjs'),"/src/assets/images/projects/Notecode/notecode-c3469.firebaseapp.com_.png": () => import('./notecode-c3469.firebaseapp.com__zvfBPDwq.mjs'),"/src/assets/images/projects/Notecode/notecode-c3469.firebaseapp.com_2.png": () => import('./notecode-c3469.firebaseapp.com_2_BdD0HKux.mjs'),"/src/assets/images/projects/Notecode/notecode.png": () => import('./notecode_Cc63k-Ck.mjs'),"/src/assets/images/projects/Notecode/screenshot.png": () => import('./screenshot_Bx16Ubau.mjs'),"/src/assets/images/projects/Octopus/tentacle.png": () => import('./tentacle_B5Rkpxl9.mjs'),"/src/assets/images/projects/Photo-Scramble/header.png": () => import('./header_CEqDcBPJ.mjs'),"/src/assets/images/projects/Photo-Scramble/photoScramble.png": () => import('./photoScramble_h5FO8Xj5.mjs'),"/src/assets/images/projects/Projector/20140408-154651.jpg": () => import('./20140408-154651_B5-QCRY3.mjs'),"/src/assets/images/projects/Quadcopter/header.png": () => import('./header_Bs7uxf5C.mjs'),"/src/assets/images/projects/Quadcopter/header.svg": () => import('./header_C1uQmkyu.mjs'),"/src/assets/images/projects/Quadcopter/nodeClaw-ui-01.png": () => import('./nodeClaw-ui-01_BcqxtJPW.mjs'),"/src/assets/images/projects/Quadcopter/swirl-01.svg": () => import('./swirl-01_ZPqXj-X8.mjs'),"/src/assets/images/projects/Raspberry-Pi-Bluetooth-Audio-Receiver/IMG_0683.jpg": () => import('./IMG_0683_CU_8qrX4.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/FullSizeRender-4.jpg": () => import('./FullSizeRender-4_v1lEvR3m.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/FullSizeRender-5.jpg": () => import('./FullSizeRender-5_BBsotoN8.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/FullSizeRender-7.jpg": () => import('./FullSizeRender-7_DnVWZYH9.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/FullSizeRender-8.jpg": () => import('./FullSizeRender-8_BYR-68Lb.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/IMG_0643.jpg": () => import('./IMG_0643_Be02N-MD.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/IMG_0673.jpg": () => import('./IMG_0673_DHbBVper.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/IMG_0675.jpg": () => import('./IMG_0675_ChDnILva.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/cameraFront.jpg": () => import('./cameraFront_BvCYT8_P.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/cameraSideView.jpg": () => import('./cameraSideView_22Abkl7k.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/cameraTest.jpg": () => import('./cameraTest_CSBQAFZI.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/piCamera-with-bluetooth-keyboard.jpg": () => import('./piCamera-with-bluetooth-keyboard_yFejIpHB.mjs'),"/src/assets/images/projects/Raspberry-Pi-Video-Camera/piCamera-with-ipad.jpg": () => import('./piCamera-with-ipad_CIGpVRKz.mjs'),"/src/assets/images/projects/Sail-UI/sailui-activity-widget.png": () => import('./sailui-activity-widget_DU8FFD0K.mjs'),"/src/assets/images/projects/Sail-UI/sailui-activity-widget2.png": () => import('./sailui-activity-widget2_HDGQ5EaW.mjs'),"/src/assets/images/projects/Sail-UI/sailui-chromatic.png": () => import('./sailui-chromatic_DiTb5tqr.mjs'),"/src/assets/images/projects/Sail-UI/sailui-cover.png": () => import('./sailui-cover_DGZhTor1.mjs'),"/src/assets/images/projects/Sail-UI/sailui-progress-stat.png": () => import('./sailui-progress-stat_CIgrgMi6.mjs'),"/src/assets/images/projects/Sail-UI/sailui-progress-stat2.png": () => import('./sailui-progress-stat2_CtGNQYQr.mjs'),"/src/assets/images/projects/Sail-UI/sailui-wavebar.png": () => import('./sailui-wavebar_CSvYd7s3.mjs'),"/src/assets/images/projects/Sail-UI/sailui-widget-chat.png": () => import('./sailui-widget-chat_DmsgHRQd.mjs'),"/src/assets/images/projects/Sail-UI/sailui-widget-chat2.png": () => import('./sailui-widget-chat2_aUuQk_In.mjs'),"/src/assets/images/projects/SetSail/setSail_accounts.png": () => import('./setSail_accounts_CCUYX7d8.mjs'),"/src/assets/images/projects/SetSail/setSail_chat.png": () => import('./setSail_chat_Cao1VqOT.mjs'),"/src/assets/images/projects/SetSail/setSail_chat2.png": () => import('./setSail_chat2_DlzSr9Oo.mjs'),"/src/assets/images/projects/SetSail/setSail_chat3.png": () => import('./setSail_chat3_DZmJvnKx.mjs'),"/src/assets/images/projects/SetSail/setSail_deals.png": () => import('./setSail_deals_Dx-OrxEG.mjs'),"/src/assets/images/projects/SetSail/setSail_notification.png": () => import('./setSail_notification_C2DA7URP.mjs'),"/src/assets/images/projects/SetSail/setSail_signals.png": () => import('./setSail_signals_DJ4VEAVi.mjs'),"/src/assets/images/projects/SetSail/setsail_cover.png": () => import('./setsail_cover_BXPIfsav.mjs'),"/src/assets/images/projects/SetSail/setsail_targets.png": () => import('./setsail_targets_DShp-oI5.mjs'),"/src/assets/images/projects/Timer/header.svg": () => import('./header_VvugH7ln.mjs'),"/src/assets/images/projects/Timer/ryj173yr0p.codesandbox.io_.png": () => import('./ryj173yr0p.codesandbox.io__DdpZU48G.mjs'),"/src/assets/images/projects/Timer/screenshot.png": () => import('./screenshot_CeY8Re9w.mjs'),"/src/assets/images/projects/TodoRedo/react-ui.png": () => import('./react-ui_BWtTT81N.mjs'),"/src/assets/images/projects/TodoRedo/todoredo-login.jpg": () => import('./todoredo-login_YlhGv6q6.mjs'),"/src/assets/images/projects/TodoRedo/todoredo-login.png": () => import('./todoredo-login_CTs4qfuX.mjs'),"/src/assets/images/projects/TodoRedo/todoredo-screenshot.png": () => import('./todoredo-screenshot_BfyxWNQ1.mjs'),"/src/assets/images/projects/TodoRedo/todoredo.firebaseapp.com_.png": () => import('./todoredo.firebaseapp.com__C42fX750.mjs'),"/src/assets/images/projects/TodoRedo/todoredo.firebaseapp.com_1.png": () => import('./todoredo.firebaseapp.com_1_BOeEhvQ0.mjs'),"/src/assets/images/projects/TodoRedo/todoredo.firebaseapp.com_2.png": () => import('./todoredo.firebaseapp.com_2_LbyH40fr.mjs'),"/src/assets/images/projects/TodoRedo/todoredo.png": () => import('./todoredo_C6PH9MKj.mjs'),"/src/assets/images/projects/TodoRedo/todoredo2.png": () => import('./todoredo2_CVi9_SJh.mjs'),"/src/assets/images/projects/Udacity-Arcade-Game-Project/screenshot.png": () => import('./screenshot_BsfkdWU6.mjs'),"/src/assets/images/projects/Udacity-Neighborhood-Map-Project/header.png": () => import('./header_BD0WRg19.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/dropDance.gif": () => import('./dropDance_ChBe-IBB.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/dropSketches.jpeg": () => import('./dropSketches_hUHWifm6.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/flameCharacter.gif": () => import('./flameCharacter_BUiseYft.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/flameSketches.jpeg": () => import('./flameSketches_QGWBYS1Q.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/header.gif": () => import('./header_CBQ7RU2u.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/levelOverview-1.jpeg": () => import('./levelOverview-1_CmhrE6lF.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/levelOverview-2.jpeg": () => import('./levelOverview-2_C2bqD4uk.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/levelOverview-3.jpeg": () => import('./levelOverview-3_ApKbxgfB.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/levels.jpeg": () => import('./levels_gWIT17ui.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/props-1.jpeg": () => import('./props-1_3wGaItAl.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/props-2.jpeg": () => import('./props-2_CoIMBZud.mjs'),"/src/assets/images/projects/Untitled-Water-Drop-Game/props-3.jpeg": () => import('./props-3_DeJVFuat.mjs'),"/src/assets/images/projects/Weather-Lamp/IMG_1175.jpg": () => import('./IMG_1175_CNW8A6Bm.mjs'),"/src/assets/images/projects/Weather-Lamp/KXAN02.jpg": () => import('./KXAN02_MGq2vWNQ.mjs'),"/src/assets/images/projects/Weather-Lamp/header.svg": () => import('./header_BcUfDPci.mjs'),"/src/assets/images/projects/Weather-Lamp/output.png": () => import('./output_Q8uC6pdv.mjs'),"/src/assets/images/projects/Weather-Lamp/sketch.jpg": () => import('./sketch_Cijv-E9L.mjs'),"/src/assets/images/projects/flipDraw/cover.png": () => import('./cover_B94D71fh.mjs'),"/src/assets/images/projects/flipDraw/dualScreen.png": () => import('./dualScreen_B5UxbzMu.mjs'),"/src/assets/images/projects/flipDraw/header.png": () => import('./header_BmNds2zB.mjs'),"/src/assets/images/projects/flipDraw/heron-draw.png": () => import('./heron-draw_CXSzr5sE.mjs'),"/src/assets/images/projects/flipDraw/heron-guess.png": () => import('./heron-guess_BB7mQH_H.mjs'),"/src/assets/images/projects/flipDraw/mule-draw.png": () => import('./mule-draw_Dh5iHRqu.mjs'),"/src/assets/images/projects/flipDraw/mule-guess.png": () => import('./mule-guess_D0VCEIBr.mjs'),"/src/assets/images/projects/flipDraw/stroke.gif": () => import('./stroke_st1s0JEQ.mjs'),"/src/assets/images/projects/hangman/hangman.png": () => import('./hangman_BMMw-TN0.mjs'),"/src/assets/images/projects/hangman/signature.png": () => import('./signature_C9nw_JGe.mjs'),"/src/assets/images/projects/iPad-Stand/IMG_0081.jpg": () => import('./IMG_0081_BpmPoqmS.mjs'),"/src/assets/images/projects/iPad-Stand/IMG_0082.jpg": () => import('./IMG_0082_BftIS3TT.mjs'),"/src/assets/images/projects/iw-wordpress-theme/cover.jpg": () => import('./cover_VQ7ItvXI.mjs'),"/src/assets/images/projects/iw-wordpress-theme/pss.austincc.edu_pstc.png": () => import('./pss.austincc.edu_pstc_BTcZzDiN.mjs'),"/src/assets/images/projects/photo-search/cover.png": () => import('./cover_CXGF-pd_.mjs'),"/src/assets/images/projects/photo-search/img_2173.png": () => import('./img_2173_CQVxslg-.mjs'),"/src/assets/images/projects/photo-search/img_2174.png": () => import('./img_2174_DpiOxSGl.mjs'),"/src/assets/images/projects/photo-search/img_2175.png": () => import('./img_2175_qLsxhZOb.mjs'),"/src/assets/images/projects/sounddeck/screenshot.png": () => import('./screenshot_CIX3PBcF.mjs'),"/src/assets/images/projects/sounddeck/sounddeck.herokuapp.com_.png": () => import('./sounddeck.herokuapp.com__6M6vi8uM.mjs'),"/src/assets/images/projects/sounddeck/sounddeck.herokuapp.com_2.png": () => import('./sounddeck.herokuapp.com_2_yssP0KwK.mjs'),"/src/assets/images/projects/sounddeck/sounddeck.herokuapp.com_3.png": () => import('./sounddeck.herokuapp.com_3_CyLarJpG.mjs'),"/src/assets/images/projects/sounddeck/sounddeck.herokuapp.com_4.png": () => import('./sounddeck.herokuapp.com_4_pNno1VY-.mjs'),"/src/assets/images/projects/sounddeck/sounddeck.herokuapp.com_5.png": () => import('./sounddeck.herokuapp.com_5_CfdS7Aup.mjs'),"/src/assets/images/scad.svg": () => import('./scad_Bx6agkE4.mjs'),"/src/assets/images/title.svg": () => import('./title_CvLY3uTw.mjs'),"/src/assets/images/wisconsin.svg": () => import('./wisconsin_BbdVOWTl.mjs')});
  } catch (e) {
  }
  return images;
};
let _images = void 0;
const fetchLocalImages = async () => {
  _images = _images || await load();
  return _images;
};
const findImage = async (imagePath) => {
  if (typeof imagePath !== "string") {
    return imagePath;
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }
  if (!imagePath.startsWith("~/assets/images")) {
    return imagePath;
  }
  const images = await fetchLocalImages();
  const key = imagePath.replace("~/", "/src/");
  return images && typeof images[key] === "function" ? (await images[key]())["default"] : null;
};
const adaptOpenGraphImages = async (openGraph = {}, astroSite = new URL("")) => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }
  const images = openGraph.images;
  const defaultWidth = 1200;
  const defaultHeight = 626;
  const adaptedImages = await Promise.all(
    images.map(async (image) => {
      if (image?.url) {
        const resolvedImage = await findImage(image.url);
        if (!resolvedImage) {
          return {
            url: ""
          };
        }
        const _image = await getImage({
          src: resolvedImage,
          alt: "Placeholder alt",
          width: image?.width || defaultWidth,
          height: image?.height || defaultHeight
        });
        if (typeof _image === "object") {
          return {
            url: "src" in _image && typeof _image.src === "string" ? String(new URL(_image.src, astroSite)) : "pepe",
            width: "width" in _image && typeof _image.width === "number" ? _image.width : void 0,
            height: "height" in _image && typeof _image.height === "number" ? _image.height : void 0
          };
        }
        return {
          url: ""
        };
      }
      return {
        url: ""
      };
    })
  );
  return { ...openGraph, ...adaptedImages ? { images: adaptedImages } : {} };
};

const $$Astro$w = createAstro("https://rewferguson.com");
const $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Metadata;
  const {
    title,
    ignoreTitleTemplate = false,
    canonical = String(getCanonical(String(Astro2.url.pathname))),
    robots = {},
    description,
    openGraph = {},
    twitter = {}
  } = Astro2.props;
  const seoProps = merge(
    {
      title: "",
      titleTemplate: "%s",
      canonical,
      noindex: true,
      nofollow: true,
      description: void 0,
      openGraph: {
        url: canonical,
        site_name: SITE?.name,
        images: [],
        locale: I18N?.language ,
        type: "website"
      },
      twitter: {
        cardType: openGraph?.images?.length ? "summary_large_image" : "summary"
      }
    },
    {
      title: METADATA?.title?.default,
      titleTemplate: METADATA?.title?.template,
      noindex: !METADATA.robots.index ,
      nofollow: !METADATA.robots.follow ,
      description: METADATA?.description,
      openGraph: METADATA?.openGraph,
      twitter: METADATA?.twitter
    },
    {
      title,
      titleTemplate: ignoreTitleTemplate ? "%s" : void 0,
      canonical,
      noindex: typeof robots?.index !== "undefined" ? !robots.index : void 0,
      nofollow: typeof robots?.follow !== "undefined" ? !robots.follow : void 0,
      description,
      openGraph: { url: canonical, ...openGraph },
      twitter
    }
  );
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...{ ...seoProps, openGraph: await adaptOpenGraphImages(seoProps?.openGraph, Astro2.site) } })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/common/Metadata.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$v = createAstro("https://rewferguson.com");
const $$BasicScripts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$BasicScripts;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n    let lastKnownScrollPosition = window.scrollY;\n    let ticking = true;\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('h-screen');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = `https://www.facebook.com/sharer.php?u=${url}`;\n          break;\n        case 'twitter':\n          href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;\n          break;\n        case 'linkedin':\n          href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;\n          break;\n        case 'whatsapp':\n          href = `https://wa.me/?text=${text}%20${url}`;\n          break;\n        case 'mail':\n          href = `mailto:?subject=%22${text}%22&body=${text}%20${url}`;\n          break;\n\n        default:\n          return;\n      }\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    let screenSize = window.matchMedia('(max-width: 767px)');\n    screenSize.addEventListener('change', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    function appyHeaderStylesOnScroll() {\n      const header = document.querySelector('#header[data-aw-sticky-header]');\n      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {\n        document.getElementById('header').classList.add('scroll');\n      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n        document.getElementById('header').classList.remove('scroll');\n      }\n      ticking = false;\n    }\n    appyHeaderStylesOnScroll();\n\n    attachEvent([document], 'scroll', function () {\n      lastKnownScrollPosition = window.scrollY;\n\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          appyHeaderStylesOnScroll();\n        });\n        ticking = true;\n      }\n    });\n  };\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    onLoad();\n    onPageShow();\n  });\n})();<\/script>"], ["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n    let lastKnownScrollPosition = window.scrollY;\n    let ticking = true;\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('h-screen');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = \\`https://www.facebook.com/sharer.php?u=\\${url}\\`;\n          break;\n        case 'twitter':\n          href = \\`https://twitter.com/intent/tweet?url=\\${url}&text=\\${text}\\`;\n          break;\n        case 'linkedin':\n          href = \\`https://www.linkedin.com/shareArticle?mini=true&url=\\${url}&title=\\${text}\\`;\n          break;\n        case 'whatsapp':\n          href = \\`https://wa.me/?text=\\${text}%20\\${url}\\`;\n          break;\n        case 'mail':\n          href = \\`mailto:?subject=%22\\${text}%22&body=\\${text}%20\\${url}\\`;\n          break;\n\n        default:\n          return;\n      }\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    let screenSize = window.matchMedia('(max-width: 767px)');\n    screenSize.addEventListener('change', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    function appyHeaderStylesOnScroll() {\n      const header = document.querySelector('#header[data-aw-sticky-header]');\n      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {\n        document.getElementById('header').classList.add('scroll');\n      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n        document.getElementById('header').classList.remove('scroll');\n      }\n      ticking = false;\n    }\n    appyHeaderStylesOnScroll();\n\n    attachEvent([document], 'scroll', function () {\n      lastKnownScrollPosition = window.scrollY;\n\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          appyHeaderStylesOnScroll();\n        });\n        ticking = true;\n      }\n    });\n  };\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    onLoad();\n    onPageShow();\n  });\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "/Users/robertferguson/Projects/rewferguson/src/components/common/BasicScripts.astro", void 0);

const $$Astro$u = createAstro("https://rewferguson.com");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/robertferguson/Projects/rewferguson/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$t = createAstro("https://rewferguson.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metadata = {} } = Astro2.props;
  const { language, textDirection } = I18N;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<html", "", ' class="2xl:text-[20px]"> <head>', "", "", "", "", '<script async src="https://www.googletagmanager.com/gtag/js?id=G-5BJF2PLFNV"><\/script><script src="/gAnalytics.js"><\/script>', "</head> ", ' <body class="antialiased text-default bg-page tracking-tight"> ', " ", "  </body> </html>"])), addAttribute(language, "lang"), addAttribute(textDirection, "dir"), renderComponent($$result, "CommonMeta", $$CommonMeta, {}), renderComponent($$result, "Favicons", $$Favicons, {}), renderComponent($$result, "CustomStyles", $$CustomStyles, {}), renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {}), renderComponent($$result, "Metadata", $$Metadata, { ...metadata }), renderHead(), renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "swap" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "BasicScripts", $$BasicScripts, {}));
}, "/Users/robertferguson/Projects/rewferguson/src/layouts/Layout.astro", void 0);

const $$Astro$s = createAstro("https://rewferguson.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$404;
  const title = `Error 404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-8 font-bold text-9xl"> <span class="sr-only">Error</span> <span class="text-primary">404</span> </h2> <p class="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p> <p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
But dont worry, you can find plenty of other things on our homepage.
</p> <a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Back to homepage</a> </div> </div> </section> ` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/pages/404.astro", void 0);

const $$file$3 = "/Users/robertferguson/Projects/rewferguson/src/pages/404.astro";
const $$url$3 = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$404,
                    file: $$file$3,
                    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const config = {
  // FIXME: Use this when image.width is minor than deviceSizes
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  deviceSizes: [
    640,
    // older and lower-end phones
    750,
    // iPhone 6-8
    828,
    // iPhone XR/11
    960,
    // older horizontal phones
    1080,
    // iPhone 6-8 Plus
    1280,
    // 720p
    1668,
    // Various iPads
    1920,
    // 1080p
    2048,
    // QXGA
    2560,
    // WQXGA
    3200,
    // QHD+
    3840,
    // 4K
    4480,
    // 4.5K
    5120,
    // 5K
    6016
    // 6K
  ],
  formats: ["image/webp"]
};
const computeHeight = (width, aspectRatio) => {
  return Math.floor(width / aspectRatio);
};
const parseAspectRatio = (aspectRatio) => {
  if (typeof aspectRatio === "number")
    return aspectRatio;
  if (typeof aspectRatio === "string") {
    const match = aspectRatio.match(/(\d+)\s*[/:]\s*(\d+)/);
    if (match) {
      const [, num, den] = match.map(Number);
      if (den && !isNaN(num))
        return num / den;
    } else {
      const numericValue = parseFloat(aspectRatio);
      if (!isNaN(numericValue))
        return numericValue;
    }
  }
  return void 0;
};
const getSizes = (width, layout) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    case `constrained`:
      return `(min-width: ${width}px) ${width}px, 100vw`;
    case `fixed`:
      return `${width}px`;
    case `fullWidth`:
      return `100vw`;
    default:
      return void 0;
  }
};
const pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
const getStyle = ({
  width,
  height,
  aspectRatio,
  layout,
  objectFit = "cover",
  objectPosition = "center",
  background
}) => {
  const styleEntries = [
    ["object-fit", objectFit],
    ["object-position", objectPosition]
  ];
  if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:")) {
    styleEntries.push(["background-image", `url(${background})`]);
    styleEntries.push(["background-size", "cover"]);
    styleEntries.push(["background-repeat", "no-repeat"]);
  } else {
    styleEntries.push(["background", background]);
  }
  if (layout === "fixed") {
    styleEntries.push(["width", pixelate(width)]);
    styleEntries.push(["height", pixelate(height)]);
    styleEntries.push(["object-position", "top left"]);
  }
  if (layout === "constrained") {
    styleEntries.push(["max-width", pixelate(width)]);
    styleEntries.push(["max-height", pixelate(height)]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["width", "100%"]);
  }
  if (layout === "fullWidth") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["height", pixelate(height)]);
  }
  if (layout === "responsive") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["height", "auto"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "contained") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
    styleEntries.push(["object-fit", "contain"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "cover") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
  }
  const styles = Object.fromEntries(styleEntries.filter(([, value]) => value));
  return Object.entries(styles).map(([key, value]) => `${key}: ${value};`).join(" ");
};
const getBreakpoints = ({
  width,
  breakpoints,
  layout
}) => {
  if (layout === "fullWidth" || layout === "cover" || layout === "responsive" || layout === "contained") {
    return breakpoints || config.deviceSizes;
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  if (layout === "fixed") {
    return [width, doubleWidth];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      // Filter out any resolutions that are larger than the double-res image
      ...(breakpoints || config.deviceSizes).filter((w) => w < doubleWidth)
    ];
  }
  return [];
};
const astroAsseetsOptimizer = async (image, breakpoints) => {
  if (!image || typeof image === "string") {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = (await getImage({ src: image, width: w })).src;
      return {
        src: url,
        width: w
      };
    })
  );
};
const unpicOptimizer = async (image, breakpoints, width, height) => {
  if (!image || typeof image !== "string") {
    return [];
  }
  const urlParsed = parseUrl(image);
  if (!urlParsed) {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = transformUrl({
        url: image,
        width: w,
        height: width && height ? computeHeight(w, width / height) : height,
        cdn: urlParsed.cdn
      }) || image;
      return {
        src: String(url),
        width: w
      };
    })
  );
};
async function getImagesOptimized(image, { src: _, width, height, sizes, aspectRatio, widths, layout = "constrained", style = "", ...rest }, transform = () => Promise.resolve([])) {
  if (typeof image !== "string") {
    width ||= Number(image.width) || void 0;
    height ||= typeof width === "number" ? computeHeight(width, image.width / image.height) : void 0;
  }
  width = width && Number(width) || void 0;
  height = height && Number(height) || void 0;
  widths ||= config.deviceSizes;
  sizes ||= getSizes(Number(width) || void 0, layout);
  aspectRatio = parseAspectRatio(aspectRatio);
  if (aspectRatio) {
    if (width) {
      if (height) ; else {
        height = width / aspectRatio;
      }
    } else if (height) {
      width = Number(height * aspectRatio);
    } else if (layout !== "fullWidth") {
      console.error("When aspectRatio is set, either width or height must also be set");
      console.error("Image", image);
    }
  } else if (width && height) {
    aspectRatio = width / height;
  } else if (layout !== "fullWidth") {
    console.error("Either aspectRatio or both width and height must be set");
    console.error("Image", image);
  }
  let breakpoints = getBreakpoints({ width, breakpoints: widths, layout });
  breakpoints = [...new Set(breakpoints)].sort((a, b) => a - b);
  const srcset = (await transform(image, breakpoints, Number(width) || void 0, Number(height) || void 0)).map(({ src, width: width2 }) => `${src} ${width2}w`).join(", ");
  return {
    src: typeof image === "string" ? image : image.src,
    attributes: {
      width,
      height,
      srcset: srcset || void 0,
      sizes,
      style: `${getStyle({
        width,
        height,
        aspectRatio,
        layout
      })}${style ?? ""}`,
      ...rest
    }
  };
}

const $$Astro$r = createAstro("https://rewferguson.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new Error();
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  if (!props.loading) {
    props.loading = "lazy";
  }
  if (!props.decoding) {
    props.decoding = "async";
  }
  const _image = await findImage(props.src);
  let image = void 0;
  if (_image !== null && typeof _image === "object") {
    image = await getImagesOptimized(_image, props, astroAsseetsOptimizer);
  } else if (typeof _image === "string" && (_image.startsWith("http://") || _image.startsWith("https://"))) {
    image = await getImagesOptimized(_image, props, unpicOptimizer);
  } else if (_image) {
    image = await getImagesOptimized(_image, props);
  }
  return renderTemplate`${!image ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/common/Image.astro", void 0);


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$q = createAstro("https://rewferguson.com");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/robertferguson/Projects/rewferguson/node_modules/astro-icon/components/Icon.astro", void 0);

const logoSVG = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 224.3 224.6\">\n  <path fill=\"currentcolor\"\n    d=\"M127.6,78.4c2.9,1.9,8.2-1.1,10.7-2.5,3.1-1.7,6.4-4.3,6.9-7.4.7-5.2-2.2-7.4-5.5-8.1-6.5-1.2-12.1,3.8-13.7,8.8-1,3-.7,7.7,1.6,9.2Z\" />\n  <path fill=\"currentcolor\"\n    d=\"M163.8,100.2c2.9,1.9,8.2-1.1,10.7-2.5,3.1-1.7,6.4-4.3,6.9-7.4.8-5.2-2.1-7.5-5.5-8.1-6.5-1.2-12.1,3.8-13.7,8.8-1,3-.7,7.7,1.6,9.2Z\" />\n  <path fill=\"currentcolor\" d=\"M98.2,98.9c-1.5,0-2.6,1.3-2.6,2.8s1.2,2.7,2.7,2.7,2.6-1.3,2.6-2.8-1.2-2.7-2.7-2.7Z\" />\n  <path fill=\"currentcolor\"\n    d=\"M171.4,146.6c-4.2-2.4-8.5-4.6-11.7-6.3,0,0,0-.2-.4-.2-1.7-.3-6,.6-6.8,2.9-.9,2.7,1.2,7.1,2,8.3,3.6,5.9,13.3,13.5,23.4,12.7,3.9-.3,7.5-1.9,6.5-6.7-1.1-5.5-8.7-8.3-13-10.7Z\" />\n  <path fill=\"currentcolor\" d=\"M135.2,121.2c-1.5,0-2.6,1.3-2.6,2.8s1.2,2.7,2.7,2.7,2.6-1.3,2.6-2.8-1.2-2.7-2.7-2.7Z\" />\n  <path fill=\"currentcolor\"\n    d=\"M112,0C50,0-.3,50.3-.3,112.3s50.3,112.3,112.3,112.3,112.3-50.3,112.3-112.3S174,0,112,0ZM155.3,91.6c.2-2.5,1.6-5.8,3-7.8,3.2-4.5,9.2-9,17.5-8.2,8.7.8,14.9,11.6,9.9,20.7-4,7.2-13.8,10.5-21.3,14.7-6.2,3.4-11.9,7.1-17.4,9.7-2.9-1.8-6-3.3-8.6-5.4,3-1.8,5.9-3.6,9.1-5.5,3.1-1.9,6.9-3.4,8-7,1-3.2-.5-7.5-.2-11.2ZM111.2,88c3.1-1.9,6.9-3.4,8-7,1-3.2-.5-7.5-.2-11.2.2-2.5,1.6-5.8,3-7.8,3.2-4.5,9.2-9,17.5-8.2,8.7.8,14.9,11.6,9.9,20.7-4,7.2-13.8,10.5-21.3,14.7-6.2,3.4-11.9,7.1-17.4,9.7-2.9-1.8-6-3.3-8.6-5.4,3.1-1.7,5.9-3.5,9.1-5.5ZM55.9,137.2c-5.1,2.3-19.4,1.4-23.6-.7,20.1-12.3,32.7-20.1,53-32.2,3.1,2,6.6,3.6,9.4,5.9-11.1,7.4-15.9,11.3-27.1,19.1-3.9,2.7-7.8,6.2-11.7,7.9ZM103.9,151.1c-3.9,2.7-7.8,6.2-11.7,7.9-5.1,2.3-19.4,1.4-23.6-.7,20.1-12.3,32.7-20.1,53-32.2,3.1,1.9,6.6,3.6,9.4,5.9-11.1,7.4-15.9,11.3-27.1,19.1ZM188.6,163.9c-3.4,4.7-7,7.5-15,6.9-10.5-.7-23.4-10.2-26.2-19.3-1.4-4.2.2-10.4-1.1-13.9-1.2-3.1-4.4-3.7-7.5-5.2-6.6-3.2-13.1-7.7-19.6-11.5-19.7-11.5-66.2-38.2-85.1-49.8,3.5-1.2,7.4-2.2,12.4-1.9,12.1.8,19.6,6.5,27.9,11.6,4.5,2.7,35,21,39.4,23.7,18.2,11,35.4,22.4,53.9,32.9,4.4,2.4,9.1,4.6,14,7.7h0c4,2.5,10.1,7,10.1,11.7s-1.7,5.1-3.2,7.1Z\" />\n</svg>";

const $$Astro$p = createAstro("https://rewferguson.com");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"> <span class="flex gap-2 items-center relative bottom-[1px]"> <span class="w-9 rounded-full"> <span class="w-8"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(logoSVG)}` })} </span> </span> <span class="uppercase font-light logo-name"> Robert Ferguson </span> </span> </span>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/Logo.astro", void 0);

const $$Astro$o = createAstro("https://rewferguson.com");
const $$ToggleTheme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$ToggleTheme;
  const {
    label = "Toggle between Dark and Light mode",
    class: className = "text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center",
    iconClass = "w-6 h-6",
    iconName = "tabler:sun"
  } = Astro2.props;
  return renderTemplate`${!(UI.theme.endsWith(":only")) && renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-color-scheme>${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": iconClass })}</button>`}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/common/ToggleTheme.astro", void 0);

const $$Astro$n = createAstro("https://rewferguson.com");
const $$ToggleMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$m = createAstro("https://rewferguson.com");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/ui/Button.astro", void 0);

const $$Astro$l = createAstro("https://rewferguson.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    id = "header",
    links = [],
    actions = [],
    isSticky = false,
    isDark = false,
    isFullWidth = false,
    showToggleTheme = false,
    showRssFeed = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark },
    "top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out"
  ], "class:list")}${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0"></div> <div${addAttribute([
    "relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between",
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")}> <div class="flex items-center"> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> </div> <div class="flex items-center md:hidden"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> <nav class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5" aria-label="Main navigation"> <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium"> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center"> ${text}${" "} ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" })} </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl"> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-white px-4 py-3 flex items-centers",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")}> ${text} </a>`} </li>`)} </ul> </nav> </div> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0"
  ], "class:list")}> <div class="items-center flex justify-between w-full md:w-auto"> <div class="flex"> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block" })}`} </div> ${actions?.length ? renderTemplate`<span class="ml-4 rtl:ml-0 rtl:mr-4"> ${actions.map((btnProps) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...btnProps, "class": "ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto" })}`)} </span>` : ""} </div> </div> </div> </header>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/widgets/Header.astro", void 0);

const logoSvg = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 158.2 117.2\">\n  <g style=\"fill: currentcolor;\">\n    <path\n      d=\"M104.8,61.6c2.6,2.1,5.7,3.6,8.6,5.4,5.5-2.6,11.2-6.3,17.4-9.7,7.5-4.2,17.3-7.5,21.3-14.7,5-9.1-1.2-19.9-9.9-20.7-8.3-.8-14.3,3.7-17.5,8.2-1.4,2-2.8,5.3-3,7.8-.3,3.7,1.2,8,.2,11.2-1.1,3.6-4.9,5.1-8,7-3.2,1.9-6.1,3.7-9.1,5.5ZM147.8,36.6c-.5,3.1-3.8,5.7-6.9,7.4-2.5,1.4-7.8,4.4-10.7,2.5-2.3-1.5-2.6-6.2-1.6-9.2,1.6-5,7.2-10,13.7-8.8,3.4.6,6.3,2.9,5.5,8.1Z\" />\n    <path\n      d=\"M88,72.4c-20.3,12.1-32.9,19.9-53,32.2,4.2,2.1,18.5,3,23.6.7,3.9-1.7,7.8-5.2,11.7-7.9,11.2-7.8,16-11.7,27.1-19.1-2.8-2.3-6.3-4-9.4-5.9Z\" />\n    <path\n      d=\"M68.5,39.8c2.6,2.1,5.7,3.6,8.6,5.4,5.5-2.6,11.2-6.3,17.4-9.7,7.5-4.2,17.3-7.5,21.3-14.7,5-9.1-1.2-19.9-9.9-20.7-8.3-.8-14.3,3.7-17.5,8.2-1.4,2-2.8,5.3-3,7.8-.3,3.7,1.2,8,.2,11.2-1.1,3.6-4.9,5.1-8,7-3.2,2-6,3.8-9.1,5.5ZM111.6,14.8c-.5,3.1-3.8,5.7-6.9,7.4-2.5,1.4-7.8,4.4-10.7,2.5-2.3-1.5-2.6-6.2-1.6-9.2,1.6-5,7.2-10,13.7-8.8,3.3.7,6.2,2.9,5.5,8.1Z\" />\n    <path\n      d=\"M51.7,50.6C31.4,62.7,18.8,70.5-1.3,82.8c4.2,2.1,18.5,3,23.6.7,3.9-1.7,7.8-5.2,11.7-7.9,11.2-7.8,16-11.7,27.1-19.1-2.8-2.3-6.3-3.9-9.4-5.9Z\" />\n    <path\n      d=\"M148.1,91.4c-4.9-3.1-9.6-5.3-14-7.7-18.5-10.5-35.7-21.9-53.9-32.9-4.4-2.7-34.9-21-39.4-23.7-8.3-5.1-15.8-10.8-27.9-11.6-5-.3-8.9.7-12.4,1.9,18.9,11.6,65.4,38.3,85.1,49.8,6.5,3.8,13,8.3,19.6,11.5,3.1,1.5,6.3,2.1,7.5,5.2,1.3,3.5-.3,9.7,1.1,13.9,2.8,9.1,15.7,18.6,26.2,19.3,8,.6,11.6-2.2,15-6.9,1.5-2,3.2-4.4,3.2-7.1,0-4.7-6.1-9.2-10.1-11.7ZM64.7,50.7c-1.5,0-2.7-1.2-2.7-2.7s1.1-2.8,2.6-2.8,2.7,1.2,2.7,2.7-1.1,2.8-2.6,2.8ZM101.7,73c-1.5,0-2.7-1.2-2.7-2.7s1.1-2.8,2.6-2.8,2.7,1.2,2.7,2.7-1.2,2.8-2.6,2.8ZM144.3,110.3c-10.1.8-19.8-6.8-23.4-12.7-.8-1.2-2.9-5.6-2-8.3.8-2.3,5.1-3.2,6.8-2.9.3,0,.3.1.4.2,3.2,1.7,7.5,3.9,11.7,6.3,4.3,2.4,11.9,5.2,13,10.7,1,4.8-2.6,6.4-6.5,6.7Z\" />\n  </g>\n</svg>";

const $$Astro$k = createAstro("https://rewferguson.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Footer;
  const { theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([
    { dark: theme === "dark" },
    "relative border-t border-gray-200 dark:border-slate-800 dark:bg-[#01253f] not-prose"
  ], "class:list")}> <div class="dark:bg-dark bg-[#58bbca] absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300"> <div class="w-12 mx-auto py-8 opacity-50 text-black"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(logoSvg)}` })} </div> </div> </footer>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/widgets/Footer.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://rewferguson.com", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/words/arcade-game.md": () => import('./arcade-game_DdmGHkVF.mjs'),"/src/content/words/arduino-web-controller.md": () => import('./arduino-web-controller_BaYVSyuN.mjs'),"/src/content/words/branches.md": () => import('./branches_DWtv7uPc.mjs'),"/src/content/words/drawing-game.md": () => import('./drawing-game_DPQSib5E.mjs'),"/src/content/words/dynamicat.md": () => import('./dynamicat_BFf-xy7x.mjs'),"/src/content/words/framesqueezer.md": () => import('./framesqueezer_BhcNAXzj.mjs'),"/src/content/words/frank-tank.md": () => import('./frank-tank_cIhaq06-.mjs'),"/src/content/words/hangman.md": () => import('./hangman_C2ZK9pot.mjs'),"/src/content/words/its-alive/index.mdx": () => import('./index_MdVCEXq6.mjs'),"/src/content/words/neighborhood-map.md": () => import('./neighborhood-map_CU4BW0o3.mjs'),"/src/content/words/obsidian.md": () => import('./obsidian_C_mglA00.mjs'),"/src/content/words/photo-scrampble.md": () => import('./photo-scrampble_BAfHvzds.mjs'),"/src/content/words/quadcopter.md": () => import('./quadcopter_DG_RQpLx.mjs'),"/src/content/words/timer.md": () => import('./timer_BeacRad3.mjs'),"/src/content/words/untitled-water-drop-game.md": () => import('./untitled-water-drop-game_BqYhlrKq.mjs'),"/src/content/words/weather-lamp.md": () => import('./weather-lamp_Dj5WbleL.mjs'),"/src/content/work/acc-catalog.mdx": () => import('./acc-catalog_C0AAtjVN.mjs'),"/src/content/work/acc-online.mdx": () => import('./acc-online_DexJvglX.mjs'),"/src/content/work/budget-tracker.mdx": () => import('./budget-tracker_BJVDICzy.mjs'),"/src/content/work/flip-draw.mdx": () => import('./flip-draw_DeZjNa7N.mjs'),"/src/content/work/iw-wordpress-theme.mdx": () => import('./iw-wordpress-theme_CGGFEIbV.mjs'),"/src/content/work/notecode.mdx": () => import('./notecode_CIGrsRkx.mjs'),"/src/content/work/photo-search.mdx": () => import('./photo-search_BLRHrzWi.mjs'),"/src/content/work/sail-ui.mdx": () => import('./sail-ui_g_qU2C-6.mjs'),"/src/content/work/setsail.mdx": () => import('./setsail_DL1MAWZj.mjs'),"/src/content/work/sounddeck.mdx": () => import('./sounddeck_BUfojjkl.mjs'),"/src/content/work/todoredo.mdx": () => import('./todoredo_8z4i_SD7.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"acc-catalog":"/src/content/work/acc-catalog.mdx","budget-tracker":"/src/content/work/budget-tracker.mdx","acc-online":"/src/content/work/acc-online.mdx","flip-draw":"/src/content/work/flip-draw.mdx","notecode":"/src/content/work/notecode.mdx","photo-search":"/src/content/work/photo-search.mdx","iw-wordpress-theme":"/src/content/work/iw-wordpress-theme.mdx","sail-ui":"/src/content/work/sail-ui.mdx","setsail":"/src/content/work/setsail.mdx","sounddeck":"/src/content/work/sounddeck.mdx","todoredo":"/src/content/work/todoredo.mdx"}},"words":{"type":"content","entries":{"arcade-game":"/src/content/words/arcade-game.md","arduino-web-controller":"/src/content/words/arduino-web-controller.md","drawing-game":"/src/content/words/drawing-game.md","dynamicat":"/src/content/words/dynamicat.md","framesqueezer":"/src/content/words/framesqueezer.md","branches":"/src/content/words/branches.md","frank-tank":"/src/content/words/frank-tank.md","hangman":"/src/content/words/hangman.md","neighborhood-map":"/src/content/words/neighborhood-map.md","obsidian":"/src/content/words/obsidian.md","photo-scramble":"/src/content/words/photo-scrampble.md","quadcopter":"/src/content/words/quadcopter.md","untitled-water-drop-game":"/src/content/words/untitled-water-drop-game.md","weather-lamp":"/src/content/words/weather-lamp.md","timer":"/src/content/words/timer.md","its-alive":"/src/content/words/its-alive/index.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/words/arcade-game.md": () => import('./arcade-game_D7P7WeCO.mjs'),"/src/content/words/arduino-web-controller.md": () => import('./arduino-web-controller_jI59f2f7.mjs'),"/src/content/words/branches.md": () => import('./branches_BNzQsyCq.mjs'),"/src/content/words/drawing-game.md": () => import('./drawing-game_CcHzGxsP.mjs'),"/src/content/words/dynamicat.md": () => import('./dynamicat_XqglGerB.mjs'),"/src/content/words/framesqueezer.md": () => import('./framesqueezer_C1SrOC8Q.mjs'),"/src/content/words/frank-tank.md": () => import('./frank-tank_BA2ujt8E.mjs'),"/src/content/words/hangman.md": () => import('./hangman_DPDB4ZDF.mjs'),"/src/content/words/its-alive/index.mdx": () => import('./index_QICzrNTT.mjs'),"/src/content/words/neighborhood-map.md": () => import('./neighborhood-map_sU0rcJXY.mjs'),"/src/content/words/obsidian.md": () => import('./obsidian_wZRHSQje.mjs'),"/src/content/words/photo-scrampble.md": () => import('./photo-scrampble_CLUJtaMB.mjs'),"/src/content/words/quadcopter.md": () => import('./quadcopter_D0ahpz_O.mjs'),"/src/content/words/timer.md": () => import('./timer_BwbD8tVW.mjs'),"/src/content/words/untitled-water-drop-game.md": () => import('./untitled-water-drop-game_yu1j8sF0.mjs'),"/src/content/words/weather-lamp.md": () => import('./weather-lamp_CTn9o5ZB.mjs'),"/src/content/work/acc-catalog.mdx": () => import('./acc-catalog_BdQh6O94.mjs'),"/src/content/work/acc-online.mdx": () => import('./acc-online_CYAZU0sH.mjs'),"/src/content/work/budget-tracker.mdx": () => import('./budget-tracker_BJ41IsNI.mjs'),"/src/content/work/flip-draw.mdx": () => import('./flip-draw_BSTZeybY.mjs'),"/src/content/work/iw-wordpress-theme.mdx": () => import('./iw-wordpress-theme_CHrhAnAR.mjs'),"/src/content/work/notecode.mdx": () => import('./notecode_B3O0qJ8S.mjs'),"/src/content/work/photo-search.mdx": () => import('./photo-search_BcrAi0XW.mjs'),"/src/content/work/sail-ui.mdx": () => import('./sail-ui_oWw2XQ0s.mjs'),"/src/content/work/setsail.mdx": () => import('./setsail_D-hhxhYV.mjs'),"/src/content/work/sounddeck.mdx": () => import('./sounddeck_Cn8XRJHq.mjs'),"/src/content/work/todoredo.mdx": () => import('./todoredo_DhSOIKq8.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const headerData = {
  links: [
    { text: 'Github', href: 'https://github.com/rewfergu' },
    { text: 'LinkedIn', href: 'http://www.linkedin.com/in/rewferguson' },
  ],
  actions: [],
};

async function getHeaderData() {
  const workCollection = await getCollection('work');
  const workPages = workCollection
    .filter((page) => page.data.featured)
    .sort(({ data: { priority: priorityA = 999 } }, { data: { priority: priorityB = 999 } }) => priorityA - priorityB)
    .map((page) => ({
      text: page.data.name,
      href: `/work/${page.slug}`,
    }));

  const wordsCollection = await getCollection('words');
  const wordsPages = wordsCollection
    .filter((page) => !!page.data.date)
    .sort(
      ({ data: { date: dateA } }, { data: { date: dateB } }) => new Date(dateB).getTime() - new Date(dateA).getTime()
    )
    .map((page) => ({
      text: page.data.name,
      href: `/blog/${page.slug}`,
    }));

  return {
    links: [
      {
        text: 'Work',
        links: workPages,
      },
      {
        text: 'Blog',
        links: wordsPages,
      },
      ...headerData.links,
    ],
    actions: headerData.actions,
  };
}

const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: ``,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$j = createAstro("https://rewferguson.com");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const headerData = await getHeaderData();
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", "<main> ", " </main> ", ' <div class="absolute inset-0 dark:mix-blend-color-burn bg-[linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgb(30 50 90) 100%)]" id="p5Canvas"></div> <script async src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js"><\/script> <script async src="/p5-sketch.js"><\/script> '])), renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showToggleTheme": true })} `), maybeRenderHead(), renderSlot($$result2, $$slots["default"]), renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)) })} `;
}, "/Users/robertferguson/Projects/rewferguson/src/layouts/PageLayout.astro", void 0);

const $$Astro$i = createAstro("https://rewferguson.com");
const $$ProjectTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ProjectTags;
  const { tags } = Astro2.props;
  const h = 188;
  const s = "52%";
  const l = "57%";
  const tagList = tags.map((tag, index) => ({
    name: tag,
    color: `hsl(${h - 4 * index}, ${s}, ${l})`
  }));
  return renderTemplate`${maybeRenderHead()}<ul class="not-prose p-0 my-8"> ${tagList.map((tag) => renderTemplate`<li class="inline-block py-2 px-4 p-2 text-sm rounded mb-1 mr-1 text-dark"${addAttribute(`background-color: ${tag.color};`, "style")}> ${tag.name} </li>`)} </ul>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/widgets/ProjectTags.astro", void 0);

const $$Astro$h = createAstro("https://rewferguson.com");
const $$ProjectImages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ProjectImages;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${!images && renderTemplate`<p>No images found</p>`} ${images.length > 0 && images.map((img) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img.src, "alt": img.alt })}`)} </div>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/widgets/ProjectImages.astro", void 0);

const $$Astro$g = createAstro("https://rewferguson.com");
const $$YoutubeVideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$YoutubeVideo;
  const {
    videoId,
    title = ""
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoId, "playlabel": title })}  `;
}, "/Users/robertferguson/Projects/rewferguson/src/components/common/YoutubeVideo.astro", void 0);

const arc = "<svg id=\"arcGraphic\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\">\n  <defs>\n    <style>\n      .arcStyle {\n        fill: none;\n        stroke: currentColor;\n        stroke-miterlimit: 10;\n        stroke-width: 2px;\n      }\n\n      .arcDash {\n        stroke-dasharray: 0 0 10.1 4;\n      }\n    </style>\n    <pattern id=\"arcPattern\" patternUnits=\"userSpaceOnUse\" width=\"17.25\" height=\"80.85\" viewBox=\"0 0 34.5 161.7\">\n      <g id=\"arc\">\n        <path class=\"arcStyle\" d=\"M17.3,0s.9,1.6,2.3,4.4\" />\n        <path class=\"arcStyle arcDash\" d=\"M21.2,8.1c5.9,14.1,14.5,44.4-3.9,72.7-19.5,30-9.1,61.5-3.2,74.6\" />\n        <path class=\"arcStyle\" d=\"M14.9,157.3c1.4,2.8,2.3,4.4,2.3,4.4\" />\n      </g>\n    </pattern>\n  </defs>\n  <rect width=\"35\" height=\"100%\" fill=\"url(#arcPattern)\" />\n</svg>";

const arcHorizontal = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"arcGraphic\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n  width=\"100%\" height=\"100%\">\n  <defs>\n    <style>\n      .arcStyle {\n        fill: none;\n        stroke: currentColor;\n        stroke-miterlimit: 10;\n        stroke-width: 2px;\n      }\n\n      .arcDash {\n        stroke-dasharray: 0 0 10.1 4;\n      }\n    </style>\n    <pattern id=\"arcPattern\" x=\"0\" y=\"0\" height=\"17.25\" width=\"80.85\" patternUnits=\"userSpaceOnUse\"\n      viewBox=\"0 -2 161.7 34.5\" patternTransform=\"scale(0.65)\">\n      <g x=\"0\" y=\"2\">\n        <g id=\"arc\">\n          <path class=\"arcStyle\" d=\"M0,11.1s1.6-.9,4.4-2.3\" />\n          <path class=\"arcStyle arcDash\" d=\"M8.1,7.2c14.1-5.9,44.4-14.5,72.7,3.9,30,19.5,61.5,9.1,74.6,3.2\" />\n          <path class=\"arcStyle\" d=\"M157.3,13.5c2.8-1.4,4.4-2.3,4.4-2.3\" />\n        </g>\n      </g>\n    </pattern>\n  </defs>\n  <rect class=\"cls-2\" height=\"10\" width=\"100%\" fill=\"url(#arcPattern)\" />\n</svg>";

const $$Astro$f = createAstro("https://rewferguson.com");
const $$ArcDivider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ArcDivider;
  const { orientation } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex items-start ${orientation === "horizontal" ? "h-8" : "h-full"} group-last:opacity-0 w-4 arcContainer text-black/10 dark:text-primary ${Astro2.props.class}`, "class")}> ${renderComponent($$result, "Fragment", Fragment, { "height": "100%" }, { "default": ($$result2) => renderTemplate`${unescapeHTML(orientation === "horizontal" ? arcHorizontal : arc)}` })} </div>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/ui/ArcDivider.astro", void 0);

const $$Astro$e = createAstro("https://rewferguson.com");
const prerender$1 = true;
async function getStaticPaths$1() {
  const blogEntries = await getCollection("words");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$$1;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-8 sm:py-16 lg:py-20 mx-auto"> <article> <header${addAttribute(entry.data.cover ? "" : "", "class")}> ${entry.data.cover && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": entry.data.cover.src, "class": "max-w-full lg:max-w-[900px] mx-auto mb-6 sm:rounded-md bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "sizes": "(max-width: 900px) 400px, 900px", "alt": entry.data.cover.alt || "", "width": 900, "height": 506, "loading": "eager", "decoding": "async" })}`} <h1 class="px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-semibold font-heading"> ${entry.data.name} ${renderComponent($$result2, "ArcDivider", $$ArcDivider, { "orientation": "horizontal", "class": "w-full pt-4 h-4" })} </h1> </header> <div class="mx-auto px-6 sm:px-6 max-w-3xl prose prose-md lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:font-light prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8 prose-headings:scroll-mt-[80px]"> ${renderComponent($$result2, "Content", Content, {})} ${renderComponent($$result2, "ProjectTags", $$ProjectTags, { "tags": entry.data.tags || [] })} ${entry.data.video && entry.data.video.map((vid) => renderTemplate`${renderComponent($$result2, "YoutubeVideo", $$YoutubeVideo, { "videoId": vid.split("youtu.be/")[1] })}`)} ${entry.data.images && renderTemplate`${renderComponent($$result2, "ProjectImages", $$ProjectImages, { "images": entry.data.images })}`} </div> </article> </section> ` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/pages/blog/[...slug].astro", void 0);

const $$file$2 = "/Users/robertferguson/Projects/rewferguson/src/pages/blog/[...slug].astro";
const $$url$2 = "/blog/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$$1,
                    file: $$file$2,
                    getStaticPaths: getStaticPaths$1,
                    prerender: prerender$1,
                    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://rewferguson.com");
const prerender = true;
async function getStaticPaths() {
  const blogEntries = await getCollection("work");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-8 sm:py-16 lg:py-20 mx-auto"> <article> <header${addAttribute(entry.data.cover ? "" : "", "class")}> ${entry.data.cover ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": entry.data.cover.src, "class": "max-w-full lg:max-w-[900px] mx-auto mb-12 sm:rounded-md bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "sizes": "(max-width: 900px) 400px, 900px", "alt": entry.data.cover.alt || "", "width": 900, "height": 506, "loading": "eager", "decoding": "async" })}` : renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="border-t dark:border-slate-700"></div> </div>`} <h1 class="px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-semibold font-heading uppercase"> ${entry.data.name} ${renderComponent($$result2, "ArcDivider", $$ArcDivider, { "orientation": "horizontal", "class": "w-full pt-4 h-4" })} </h1> </header> <div class="mx-auto px-6 sm:px-6 max-w-3xl prose prose-md lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:font-light prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8 prose-headings:scroll-mt-[80px]"> ${renderComponent($$result2, "Content", Content, {})} ${renderComponent($$result2, "ProjectTags", $$ProjectTags, { "tags": entry.data.tags })} ${entry.data.video && entry.data.video.map((vid) => renderTemplate`${renderComponent($$result2, "YoutubeVideo", $$YoutubeVideo, { "videoId": vid.split("youtu.be/")[1] })}`)} ${entry.data.images && renderTemplate`${renderComponent($$result2, "ProjectImages", $$ProjectImages, { "images": entry.data.images })}`} </div> </article> </section> ` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/pages/work/[...slug].astro", void 0);

const $$file$1 = "/Users/robertferguson/Projects/rewferguson/src/pages/work/[...slug].astro";
const $$url$1 = "/work/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$,
                    file: $$file$1,
                    getStaticPaths,
                    prerender,
                    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro("https://rewferguson.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    id,
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20"> <div class="text-center pb-10 md:pb-16 max-w-5xl mx-auto"> ${title && renderTemplate`<h1 class="text-5xl md:text-6xl mb-4 font-heading dark:text-gray-200 uppercase font-[100]">${unescapeHTML(title)}</h1>`} <div class="w-16 mx-auto my-4"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(logoSvg)}` })} </div> ${tagline && renderTemplate`<p class="text-secondary dark:text-primary font-[600] tracking-wide uppercase text-3xl mb-8">${unescapeHTML(tagline)}</p>`} <div class="max-w-3xl mx-auto"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div> ${image && renderTemplate`<div class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 1024, "height": 576, ...image })}`} </div>`} </div> </div> </div> </section>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/widgets/Hero.astro", void 0);

const $$Astro$b = createAstro("https://rewferguson.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl ",
    subtitle: subtitleClass = "text-xl"
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge(
    "font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl",
    titleClass
  ), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("mt-4 text-muted", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/ui/Headline.astro", void 0);

const $$Astro$a = createAstro("https://rewferguson.com");
const $$Background = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/ui/Background.astro", void 0);

const $$Astro$9 = createAstro("https://rewferguson.com");
const $$WidgetWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div${addAttribute([
    twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default", containerClass),
    { dark: isDark }
  ], "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/ui/WidgetWrapper.astro", void 0);

const $$Astro$8 = createAstro("https://rewferguson.com");
const $$ItemGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ItemGrid;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary",
    action: actionClass = ""
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid mx-auto gap-8 md:gap-y-12 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div><div${addAttribute(twMerge("flex flex-row max-w-md", panelClass, itemClasses?.panel), "class")}><div class="flex justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2", defaultIconClass, itemClasses?.icon) })}`}</div><div class="mt-0.5">${title && renderTemplate`<h3${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</h3>`}${description && renderTemplate`<p${addAttribute(twMerge(`${title ? "mt-3" : ""} text-muted`, descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute(twMerge(
    `${title || description ? "mt-3" : ""}`,
    actionClass,
    itemClasses?.actionClass
  ), "class")}>${renderComponent($$result, "Button", $$Button, { "variant": "link", ...callToAction })}</div>`}</div></div></div>`)}</div>`}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/ui/ItemGrid.astro", void 0);

const $$Astro$7 = createAstro("https://rewferguson.com");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-white dark:text-slate-400"
  } })} ${maybeRenderHead()}<div class="mx-auto max-w-7xl p-4 md:px-8"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<div class="mb-12 text-lg dark:white">${unescapeHTML(content)}</div>`} ${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary"> ${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-[#01253f] text-gray-50 p-1",
    action: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"
  } })} </div> <div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 500, "height": 500, "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "layout": "responsive", "style": "object-position: right", ...image })}`} </div>`} </div> </div> </div> ` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/widgets/Content.astro", void 0);

const $$Astro$6 = createAstro("https://rewferguson.com");
const $$Timeline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items = [], classes = {}, defaultIcon } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700"
  } = classes;
  return renderTemplate`${items && items.length && renderTemplate`${maybeRenderHead()}<div${addAttribute(containerClass, "class")}>${items.map(({ title, description, icon, classes: itemClasses = {} }, index = 0) => renderTemplate`<div${addAttribute(twMerge("flex", panelClass, itemClasses?.panel), "class")}><div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"><div><div class="flex items-center justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-10 h-10 p-2 rounded-full border-2", defaultIconClass, itemClasses?.icon) })}`}</div></div>${index !== items.length - 1 && renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>`}</div><div${addAttribute(`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`, "class")}>${title && renderTemplate`<p${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${unescapeHTML(title)}</p>`}${description && renderTemplate`<p${addAttribute(twMerge("text-muted mt-2", descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}</div></div>`)}</div>`}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/ui/Timeline.astro", void 0);

const $$Astro$5 = createAstro("https://rewferguson.com");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Steps;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    image = await Astro2.slots.render("image"),
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-8 md:gap-12", { "md:flex-row-reverse": isReversed }, { "md:flex-row": image }], "class:list")}> <div${addAttribute(["md:py-4 md:self-center", { "md:basis-1/2": image }, { "w-full": !image }], "class:list")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-left rtl:text-right",
    title: "text-3xl lg:text-4xl",
    ...classes?.headline ?? {}
  } })} ${items.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Timeline", $$Timeline, { "items": items, "classes": classes?.items })} ` })}` : renderTemplate`<div> ${renderSlot($$result2, $$slots["default"])} </div>`} </div> ${image && renderTemplate`<div class="relative md:basis-1/2"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700", "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "width": 432, "height": 768, "layout": "cover", "src": image?.src, "alt": image?.alt || "" })}`} </div>`} </div> ` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/widgets/Steps.astro", void 0);

const $$Astro$4 = createAstro("https://rewferguson.com");
const $$Step = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Step;
  const { divider = await Astro2.slots.render("divider"), title, company, dates, icon, logo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex group"> <div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"> <div> <div class="flex items-center justify-center"> ${logo ? renderTemplate`<div class="w-10 h-10"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(logo)}` })} </div>` : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-10 h-10 p-2 rounded-full border-2 border-primary" })}`} </div> </div> ${divider ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(divider)}` })}` : renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-primary group-last:opacity-0"></div>`} </div> <div> <div class="text-xl font-bold">${unescapeHTML(title)}</div> <div class="text-xl font-normal">${unescapeHTML(company)}</div> <div>${unescapeHTML(dates)}</div> <div class="mt-4 mb-12 text-md"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/ui/Step.astro", void 0);

const TSSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 213 213\"\n\tstyle=\"enable-background:new 0 0 213 213;\" xml:space=\"preserve\" fill=\"currentcolor\">\n\t<path d=\"M193,0H20C9,0,0,9,0,20v173c0,11,9,20,20,20h173c11,0,20-9,20-20V20C213,9,204,0,193,0z M121.7,115.2H94V194\n\tH72.1v-78.8H44.6V97.6h77V115.2z M192.5,180.4c-2,3.6-4.8,6.6-8.3,8.9c-3.5,2.3-7.6,3.9-12.2,4.9c-4.6,1-9.5,1.5-14.7,1.5\n\tc-5.3,0-10.3-0.4-15.1-1.3s-8.9-2.2-12.4-4v-21.5c3.9,3.3,8.1,5.7,12.7,7.4c4.6,1.6,9.2,2.5,13.8,2.5c2.7,0,5.1-0.2,7.2-0.7\n\tc2-0.5,3.7-1.2,5.1-2c1.4-0.9,2.4-1.9,3.1-3.1c0.7-1.2,1-2.5,1-3.9c0-1.9-0.5-3.6-1.6-5c-1.1-1.5-2.5-2.8-4.4-4.1\n\tc-1.9-1.3-4.1-2.5-6.6-3.6c-2.6-1.2-5.3-2.3-8.3-3.6c-7.5-3.1-13.1-7-16.8-11.5c-3.7-4.5-5.5-10-5.5-16.4c0-5,1-9.3,3-12.9\n\tc2-3.6,4.8-6.6,8.2-8.9c3.5-2.3,7.5-4,12.1-5.1c4.6-1.1,9.4-1.6,14.5-1.6c5,0,9.5,0.3,13.3,0.9c3.9,0.6,7.4,1.5,10.7,2.8v20.1\n\tc-1.6-1.1-3.4-2.1-5.3-3c-1.9-0.9-3.9-1.6-5.9-2.1c-2-0.6-4-1-6-1.2c-2-0.3-3.9-0.4-5.7-0.4c-2.5,0-4.7,0.2-6.7,0.7\n\tc-2,0.5-3.7,1.1-5.1,2c-1.4,0.9-2.5,1.9-3.2,3.1c-0.8,1.2-1.1,2.5-1.1,4c0,1.6,0.4,3.1,1.3,4.3c0.9,1.3,2.1,2.5,3.6,3.6\n\tc1.6,1.1,3.5,2.3,5.7,3.4c2.2,1.1,4.8,2.2,7.6,3.4c3.9,1.6,7.3,3.3,10.4,5.1c3.1,1.8,5.7,3.9,7.9,6.1c2.2,2.3,3.9,4.9,5,7.8\n\tc1.2,2.9,1.7,6.3,1.7,10.2C195.6,172.2,194.5,176.7,192.5,180.4z\" />\n</svg>";

const NodeSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 128 128\" fill=\"currentcolor\">\n    <path\n        d=\"M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z\" />\n</svg>";

const ReactSVG = "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentcolor\">\n    <title>React icon</title>\n    <circle cx=\"12\" cy=\"12\" r=\"2.139\" />\n    <path\n        d=\"M6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z\" />\n    <path\n        d=\"M5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545z\" />\n    <path\n        d=\"M18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501z\" />\n    <path\n        d=\"M12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z\" />\n</svg>";

const PostgresSVG = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 25.4.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\tviewBox=\"0 0 128 128\" style=\"enable-background:new 0 0 128 128;\" xml:space=\"preserve\">\n\t<g fill=\"currentcolor\">\n\t\t<path d=\"M0,0\" />\n\t\t<path class=\"st0\" d=\"M0,0\" />\n\t\t<path d=\"M75.2,121.8c-8.2,0-10.8-6.5-11.9-9.2c-1.6-3.9-1.9-19.1-1.6-31.5c0-0.9,0.8-1.6,1.6-1.6c0,0,0,0,0,0c0.9,0,1.6,0.8,1.6,1.6\n\tc0,0,0,0,0,0c-0.4,14.3,0.2,27.3,1.3,30.2c1.8,4.5,4.5,8.5,12.3,6.8c7.3-1.6,10.1-4.4,11.3-11.5c0.9-5.4,2.8-21,3-24\n\tc0.1-0.9,0.8-1.5,1.7-1.5c0,0,0,0,0,0c0.9,0.1,1.5,0.8,1.5,1.7c-0.2,3.2-2.1,18.7-3.1,24.3c-1.4,8.4-5.2,12.2-13.8,14\n\tC77.8,121.6,76.4,121.8,75.2,121.8z M30.6,89.9c-0.7,0-1.4-0.1-2.1-0.3C23.1,87.8,18,79.1,13.3,63.7C9.8,52,7.5,39.8,7.3,35.8\n\tC6.7,24,9.7,15.7,16.3,11c13-9.2,34.9-0.4,35.8-0.1c0.8,0.3,1.2,1.3,0.9,2.1c-0.3,0.8-1.3,1.2-2.1,0.9c-0.2-0.1-21.2-8.5-32.8-0.3\n\tc-5.6,4-8.2,11.4-7.7,22c0.2,3.3,2.3,15.3,5.9,27.1c4.2,13.7,9,22.4,13.1,23.8c0.6,0.2,2.6,0.9,5.4-2.5c3.3-3.9,6.7-7.8,10.2-11.5\n\tc0.6-0.6,1.6-0.6,2.3,0c0.6,0.6,0.6,1.6,0,2.2c0,0.1-4.8,5.1-10.1,11.4C34.9,89.1,32.5,89.9,30.6,89.9z M100,76.5\n\tc-0.9,0-1.6-0.7-1.6-1.6c0-0.3,0.1-0.6,0.3-0.9c14.9-22.1,20.1-48.7,15.6-54.4c-5.6-7.2-13.6-10.9-23.6-11.2\n\tc-7.4-0.2-13.3,1.7-14.3,2.1l-0.2,0.1c-1,0.3-1.7-0.2-2-0.8c-0.3-0.7-0.1-1.6,0.6-2c0,0,0.2-0.1,0.4-0.2l0,0l0,0\n\tc1.6-0.6,7.6-2.4,15.1-2.3c11.1,0.1,20.3,4.4,26.5,12.4c3,3.8,3,12.5,0,23.9c-3,11.6-8.7,24.1-15.5,34.3\n\tC101,76.3,100.5,76.5,100,76.5z M100.8,86.7c-2.5,0-4.8-0.4-6.2-1.2c-1.4-0.8-1.7-2-1.7-2.6c-0.4-6.7,3.3-7.9,5.2-8.4\n\tc-0.3-0.4-0.6-0.9-1-1.3c-1.1-1.4-2.6-3.3-3.8-6.1c-0.2-0.4-0.8-1.5-1.4-2.6c-3.6-6.4-11-19.8-6.2-26.6c2.2-3.2,6.6-4.4,13.1-3.7\n\tc-1.9-5.8-11-24-32.6-24.4c-6.5-0.1-11.8,1.9-15.8,5.9c-9,9-8.6,25.4-8.6,25.6c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6l0,0\n\tc0-0.7-0.4-17.9,9.6-27.9c4.6-4.7,10.7-7,18.1-6.9C80,6.8,88.9,13.8,94,19.7c5.5,6.4,8.2,13.4,8.4,15.8c0.2,1.7-1.1,2.1-1.3,2.1\n\tl-0.6,0c-6.4-1-10.5-0.3-12.2,2.1c-3.6,5.2,3.4,17.8,6.4,23.2c0.8,1.4,1.3,2.4,1.6,3c1,2.4,2.3,4,3.3,5.3c0.9,1.1,1.7,2.1,2,3.3\n\tc0.1,0.2,2,3,13,0.7c2.8-0.6,4.4-0.1,4.9,1.4c1,3-4.6,6.5-7.7,8C109,85.9,104.6,86.7,100.8,86.7z M96.1,82.7c0.3,0.4,2.1,1,5.7,0.8\n\tc3.2-0.1,6.6-0.8,8.7-1.8c2.6-1.2,4.4-2.6,5.3-3.5l-0.5,0.1c-7.1,1.5-12,1.3-14.8-0.6c-0.2-0.1-0.4-0.3-0.5-0.4\n\tc-0.3,0.1-0.6,0.2-0.8,0.3C97.5,78,95.9,78.5,96.1,82.7z M50.5,91.6c-1.8,0-3.6-0.2-5.5-0.7c-2-0.5-5.2-2-5.2-4.4\n\tc0.1-2.7,4-3.5,5.5-3.8c5.4-1.1,5.7-1.5,7.4-3.7c0.5-0.6,1.1-1.4,1.9-2.3c1.2-1.4,2.6-2.1,4-2.1c1,0,1.8,0.3,2.3,0.6\n\tc1.7,0.7,3.1,2.4,3.7,4.5c0.5,1.8,0.3,3.6-0.7,5C60.7,89.2,56.1,91.6,50.5,91.6z M43.3,86.7c0.5,0.4,1.4,0.9,2.5,1.1\n\tc1.6,0.4,3.2,0.6,4.7,0.6c4.5,0,8.2-1.9,10.8-5.6c0.6-0.8,0.4-1.8,0.2-2.3c-0.3-1.1-1.1-2.1-1.9-2.4c-0.4-0.2-0.8-0.3-1.1-0.3\n\tc-0.2,0-0.7,0-1.6,1c-0.6,0.7-1.2,1.4-1.8,2.2c-2.1,2.6-3,3.5-9.2,4.8C44.5,86.1,43.7,86.5,43.3,86.7z M55.6,79.3\n\tc-0.8,0-1.5-0.6-1.6-1.4c0-0.3-0.1-0.5-0.1-0.8c-4.1-0.1-8-1.8-11-4.9c-3.8-3.9-5.5-9.4-4.7-14.9c0.8-6,0.5-11.4,0.4-14.2\n\tc0-0.8-0.1-1.4-0.1-1.8c0-0.5,0-1.8,4.5-4.1c1.6-0.8,4.8-2.2,8.3-2.6c5.8-0.6,9.6,2,10.7,7.2c3.1,14.2,0.2,20.5-1.8,25.1\n\tc-0.4,0.9-0.7,1.7-1,2.4l-0.3,0.7c-1.1,2.9-2,5.5-1.7,7.4c0.1,0.9-0.5,1.7-1.3,1.8c0,0,0,0,0,0C55.8,79.3,55.6,79.3,55.6,79.3z\n\t M41.7,41.7l0.1,1.1c0.2,3,0.5,8.5-0.4,14.9c-0.6,4.6,0.8,9.1,3.8,12.3c2.4,2.5,5.6,3.9,8.9,3.9h0.1c0.4-1.6,1-3.2,1.6-5l0.3-0.7\n\tc0.3-0.9,0.7-1.7,1.1-2.6c2-4.4,4.5-9.9,1.6-23.1c-0.6-2.6-1.9-4.1-4.2-4.6C50.1,36.9,43.2,40.4,41.7,41.7z M54.2,43.9l-0.4,0\n\tc-0.9-0.1-1.8-0.7-2.4-1.5c-0.2-0.3-0.6-0.9-0.5-1.4c0.1-0.7,1-1.2,2.4-1.2c0.3,0,0.6,0,1,0.1c0.8,0.1,1.5,0.3,2,0.6\n\tc0.9,0.5,1,1.1,0.9,1.4C57,42.7,55.7,43.9,54.2,43.9z M92.7,42.5c-1.4,0-2.6-1.1-2.7-1.8c-0.1-0.8,1.3-1.5,2.7-1.7\n\tc0.3,0,0.6-0.1,0.9-0.1c1.2,0,2.1,0.4,2.1,0.9c0.1,0.4-0.2,1-0.7,1.5c-0.3,0.3-1,0.9-2,1.1L92.7,42.5z M97.6,72.3\n\tc-0.9,0-1.6-0.7-1.6-1.6c0-0.3,0.1-0.6,0.3-0.9c3.4-5.1,2.8-10.2,2.2-15.3c-0.3-2.1-0.5-4.3-0.5-6.5c0.1-2.2,0.3-4,0.6-5.7\n\tc0.3-2.1,0.6-4,0.5-6.3c0-0.9,0.6-1.6,1.5-1.7c0.9,0,1.6,0.6,1.7,1.5l0,0c0.1,2.6-0.2,4.8-0.5,7c-0.3,1.6-0.5,3.3-0.6,5.3\n\tc-0.1,1.9,0.2,3.9,0.4,6c0.6,5.3,1.4,11.4-2.7,17.4C98.6,72,98.1,72.3,97.6,72.3L97.6,72.3z\" />\n\t</g>\n</svg>";

const PythonSVG = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n    <title>Python icon</title>\n    <path fill=\"currentcolor\"\n        d=\"M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22z\" />\n    <path fill=\"currentcolor\"\n        d=\"M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z\" />\n</svg>";

const MYSQLSVG = "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <title>MySQL icon</title>\n    <path fill=\"currentcolor\"\n        d=\"M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927c-.03-1.562-.123-3.03-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01c-.103 1.323-.168 2.793-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zM22.112 18.87h-2.63v-5.53h.885v4.85h1.745zM18.792 19.005l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zM13.842 17.338c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22.188-.147.3-.354.3-.615 0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476c-.36-.152-.715-.23-1.064-.23-.283 0-.502.068-.654.206-.153.136-.248.31-.248.524 0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168z\" />\n    <path fill=\"currentcolor\"\n        d=\"M23.224 11.486c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193-.194-.26-.435-.487-.695-.675-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395-.34-.295-.717-.582-1.104-.823-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514-.192-.368-.38-.775-.547-1.163-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133-.12-.12-.255-.267-.35-.4-.28-.377-.527-.79-.747-1.218-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303-.087-.124-.18-.285-.24-.427-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46.876.556 1.596 1.345 2.085 2.286.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z\" />\n</svg>";

const MongoSVG = "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <title>MongoDB icon</title>\n    <path fill=\"currentcolor\"\n        d=\"M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z\" />\n</svg>";

const GraphQLSVG = "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <title>GraphQL icon</title>\n    <path fill=\"currentcolor\"\n        d=\"M14.051 2.751l4.935 2.85c.816-.859 2.173-.893 3.032-.077.148.14.274.301.377.477.589 1.028.232 2.339-.796 2.928-.174.1-.361.175-.558.223v5.699c1.146.273 1.854 1.423 1.58 2.569-.048.204-.127.4-.232.581-.592 1.023-1.901 1.374-2.927.782-.196-.113-.375-.259-.526-.429l-4.905 2.832c.372 1.124-.238 2.335-1.361 2.706-.217.071-.442.108-.67.108-1.181.001-2.139-.955-2.14-2.136 0-.205.029-.41.088-.609l-4.936-2.847c-.816.854-2.171.887-3.026.07-.854-.816-.886-2.171-.07-3.026.283-.297.646-.506 1.044-.603l.001-5.699c-1.15-.276-1.858-1.433-1.581-2.584.047-.198.123-.389.224-.566.592-1.024 1.902-1.374 2.927-.782.177.101.339.228.48.377l4.938-2.85C9.613 1.612 10.26.423 11.39.088 11.587.029 11.794 0 12 0c1.181-.001 2.139.954 2.14 2.134.001.209-.03.418-.089.617zm-.515.877c-.019.021-.037.039-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146c-1.145-.283-1.842-1.442-1.558-2.588.006-.024.012-.049.019-.072l-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852c.327 1.135-.327 2.318-1.461 2.645-.026.008-.051.014-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838c-.015-.047-.027-.094-.038-.142H5.542l-.021.083 4.939 2.852c.388-.404.934-.653 1.54-.653.627 0 1.19.269 1.583.698z\" />\n</svg>";

const DockerSVG = "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <title>Docker icon</title>\n    <path fill=\"currentColor\"\n        d=\"M4.82 17.275c-.684 0-1.304-.56-1.304-1.24s.56-1.243 1.305-1.243c.748 0 1.31.56 1.31 1.242s-.622 1.24-1.305 1.24zm16.012-6.763c-.135-.992-.75-1.8-1.56-2.42l-.315-.25-.254.31c-.494.56-.69 1.553-.63 2.295.06.562.24 1.12.554 1.554-.254.13-.568.25-.81.377-.57.187-1.124.25-1.68.25H.097l-.06.37c-.12 1.182.06 2.42.562 3.54l.244.435v.06c1.5 2.483 4.17 3.6 7.078 3.6 5.594 0 10.182-2.42 12.357-7.633 1.425.062 2.864-.31 3.54-1.676l.18-.31-.3-.187c-.81-.494-1.92-.56-2.85-.31l-.018.002zm-8.008-.992h-2.428v2.42h2.43V9.518l-.002.003zm0-3.043h-2.428v2.42h2.43V6.48l-.002-.003zm0-3.104h-2.428v2.42h2.43v-2.42h-.002zm2.97 6.147H13.38v2.42h2.42V9.518l-.007.003zm-8.998 0H4.383v2.42h2.422V9.518l-.01.003zm3.03 0h-2.4v2.42H9.84V9.518l-.015.003zm-6.03 0H1.4v2.42h2.428V9.518l-.03.003zm6.03-3.043h-2.4v2.42H9.84V6.48l-.015-.003zm-3.045 0H4.387v2.42H6.8V6.48l-.016-.003z\" />\n</svg>";

const NextSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 394 394\"\n\txml:space=\"preserve\" fill=\"currentcolor\">\n\t<path d=\"M262,157.3h68.5V170h-27.2v66.6h-13.6V170H262V157.3z M149,157.3V170H94v20.4h44.3V203H94v21h55v12.6H80.5v-79.3h68.7H149z\n\t M183.3,157.3h-17.8l63.8,79.4h17.9l-32-39.7l32-39.6h-17.9l-23,28.6L183.3,157.3L183.3,157.3z M201.6,214l-9-11l-27.1,33.7h17.8\n\tL201.6,214z\" />\n\t<path d=\"M81,236.6l-64-79.3H0v79.3h13.6v-62.3l50.2,62.3H81z M333.6,236.2c-1,0-1.8-0.4-2.5-1s-1.1-1.6-1.1-2.6s0.3-1.8,1-2.5\n\tc0.7-0.7,1.6-1,2.6-1s1.8,0.3,2.5,1c1.2,1.1,1.5,2.9,0.6,4.3c-0.6,1.1-1.8,1.7-3,1.8H333.6z M356.8,202.8h6V226c0,2.1-0.4,4-1.3,5.5\n\tc-0.9,1.5-2.2,2.7-3.8,3.5c-1.6,0.8-3.5,1.3-5.7,1.3c-2,0-3.7-0.4-5.3-1c-1.6-0.6-2.8-1.8-3.7-3.2c-0.9-1.3-1.4-3-1.4-5h6\n\tc0.1,0.8,0.3,1.6,0.7,2.2c0.4,0.6,1,1.2,1.6,1.5c0.7,0.4,1.5,0.5,2.4,0.5c1,0,1.8-0.2,2.4-0.6c0.7-0.4,1.3-1,1.6-1.8\n\tc0.3-0.8,0.5-1.8,0.5-3v-23.1L356.8,202.8z M387.7,211.9c-0.1-1.3-0.9-2.6-2-3.3c-1.3-0.8-2.8-1.2-4.3-1.1c-1.3,0-2.4,0.2-3.3,0.5\n\tc-0.9,0.4-1.6,1-2,1.6c-0.9,1.1-1,2.7-0.3,4c0.3,0.5,0.7,0.9,1.3,1.2l1.8,1l2,0.5l3.2,0.8c1.3,0.3,2.5,0.7,3.7,1.2\n\tc1.1,0.4,2.2,1.1,3.2,1.8c2,1.6,3.1,4,3,6.5c0,2-0.5,3.7-1.5,5.1c-1.1,1.6-2.6,2.8-4.4,3.5c-1.8,0.8-4.1,1.2-6.8,1.2\n\tc-2.6,0-4.9-0.4-6.8-1.2c-2-0.8-3.4-2-4.5-3.5c-1.1-1.7-1.7-3.6-1.7-5.6h6c0.1,2.1,1.5,4,3.5,4.6c1,0.4,2.2,0.6,3.4,0.6\n\tc1.3,0,2.5-0.2,3.5-0.6s1.8-1,2.4-1.7c0.5-0.7,0.8-1.5,0.8-2.4c0-0.9-0.2-1.6-0.7-2.2c-0.6-0.5-1.3-1-2.1-1.4l-3.2-1l-3.8-1\n\tc-2.8-0.7-5-1.7-6.6-3.2c-1.6-1.4-2.5-3.5-2.4-5.7c0-1.8,0.6-3.6,1.7-5c1.1-1.5,2.6-2.8,4.3-3.5c2-0.8,4-1.2,6.4-1.2\n\tc2.3,0,4.4,0.4,6.2,1.2c1.8,0.8,3.2,2,4.3,3.4c1,1.4,1.5,3,1.5,5L387.7,211.9L387.7,211.9z\" />\n</svg>";

const $$Astro$3 = createAstro("https://rewferguson.com");
const $$TechCards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TechCards;
  const h = 188;
  const s = "52%";
  const l = "57%";
  const icons = [
    {
      name: "TypeScript",
      svg: TSSVG
    },
    {
      name: "React",
      svg: ReactSVG
    },
    {
      name: "Node",
      svg: NodeSVG
    },
    {
      name: "Next",
      svg: NextSVG
    },
    {
      name: "Python",
      svg: PythonSVG
    },
    {
      name: "PostgreSQL",
      svg: PostgresSVG
    },
    {
      name: "MySQL",
      svg: MYSQLSVG
    },
    {
      name: "MongoDB",
      svg: MongoSVG
    },
    {
      name: "GraphQL",
      svg: GraphQLSVG
    },
    {
      name: "Docker",
      svg: DockerSVG
    }
  ];
  const techCards = icons.map((icon, index) => {
    return {
      svg: icon.svg,
      name: icon.name,
      color: `hsl(${h - 4 * index}, ${s}, ${l})`
    };
  });
  return renderTemplate`${maybeRenderHead()}<section class="max-w-3xl mx-auto my-20 px-4 py-12"> ${renderComponent($$result, "Headline", $$Headline, { "title": "Technologies", "}": true, "classes": {
    container: "text-left rtl:text-right",
    title: "text-3xl lg:text-4xl"
  } })} <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-rows-2 gap-x-6 gap-y-10"> ${techCards.map((icon) => renderTemplate`<li class="group"> <figure class="flex flex-col"> <div class="mx-auto"> <div class="aspect-square w-32 p-8 text-white rounded-md shadow-md"${addAttribute(`background-color: ${icon.color};`, "style")}> ${renderComponent($$result, "Fragment", Fragment, { "className": "svg" }, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon.svg)}` })} </div> <figcaption class="text-center">${icon.name}</figcaption> </div> </figure> </li>`)} </ul> </section>`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/widgets/TechCards.astro", void 0);

const $$Astro$2 = createAstro("https://rewferguson.com");
const $$WorkStep = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkStep;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Step", $$Step, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}  `, "divider": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "divider" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ArcDivider", $$ArcDivider, {})} ` })}` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/ui/WorkStep.astro", void 0);

const $$Astro$1 = createAstro("https://rewferguson.com");
const $$WorkHistory = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkHistory;
  return renderTemplate`${renderComponent($$result, "Steps", $$Steps, { "id": "resume", "title": "Work History", "classes": { container: "max-w-3xl" } }, { "bg": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-[hsl(188,52%,57%)] opacity-50 dark:bg-[rgb(88,202,170)] dark:bg-black dark:mix-blend-overlay"></div> ` })}`, "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WorkStep", $$WorkStep, { "title": "Staff Frontend Engineer", "company": "SetSail", "dates": "05.2022 - 03.2024", "icon": "tabler:briefcase" }, { "default": ($$result3) => renderTemplate` <ul class="text-primary"> <li> <a href="https://setsail.co" target="_blank" rel="noopener"> SetSail</a> </li> </ul> <p>
As a staff engineer I developed and supported front end features for our react application and browser extension.
      I also built and managed the new Sail UI react component library to provide an accessible and consistent user
      experience across all segments of the application.
</p> ` })} ${renderComponent($$result2, "WorkStep", $$WorkStep, { "title": "Staff Software Enginner", "company": "Realtor.com", "dates": "07.2021 - 05.2022", "icon": "tabler:briefcase" }, { "default": ($$result3) => renderTemplate` <ul class="text-primary"> <li> <a href="https://realtor.com" target="_blank" rel="noopener"> Realtor Pro Dashboard </a> </li> </ul> <p>
I designed, built and deployed React components and micro frontends for the Realtor Pro Dashboard product. I also
      developed and deployed GraphQL endpoints to interface with our shared services and assets. I also helped build and
      manage the new Harmony UI design system for the BACX teams (Broker, Agent, Concierge experiences) written in React
      and Storybook.
</p> ` })} ${renderComponent($$result2, "WorkStep", $$WorkStep, { "title": "Senior Software Engineer", "company": "Arm / Pelion", "dates": "04.2020 - 07.2021", "icon": "tabler:briefcase" }, { "default": ($$result3) => renderTemplate` <ul class="text-primary"> <li> <a href="https://pelion.com" target="_blank" rel="noopener"> Pelion IoT Platform </a> </li> </ul> <p>
I joined Arm to improve the front end code and provide consistency in UX for the Pelion suite of applications. I
      worked on the Pelion ML machine learning application (Python / React), the Pelion Space Analytics application
      (Node / React) and was the primary contributor to the Pelion Design System (TypeScript). I worked with team
      members to implement new features using the design system components and helped them improve some of the older
      features built using bootstrap and other UI libraries.
</p> <p>
After the org shift at Arm, I worked on several teams in the newly created Pelion startup, focusing on Python,
      Node, and React. I managed the developer site in Django, which published guides, code and swagger api
      documentation for developing with the Connectivity and Device Management products. I also worked on front end
      features for the IoT Device Management application in React, and prototyped apis and user interfaces for the new
      Connected Device Platform, which will be the gateway to the existing Pelion products.
</p> ` })} ${renderComponent($$result2, "WorkStep", $$WorkStep, { "title": "Full Stack Software Engineer", "company": "Instructure", "dates": "04.2019 ~ 01.2020", "icon": "tabler:briefcase" }, { "default": ($$result3) => renderTemplate` <ul class="text-primary"> <li> <a href="https://www.getbridge.com/" target="_blank" rel="noopener">
Bridge LMS and Employee Development Platform
</a> </li> <li> <a href="https://www.instructure.com/k12/products/mastery/mastery-connect" target="_blank" rel="noopener">
MasteryConnect
</a> </li> </ul> <p>
I worked on two different teams while at Instructure. On the Bridge career team I built and tested application
      features in Kotlin, Spring, Postgres and React. On the MasteryConnect team I refactored front end code for student
      facing features in React, RxJS and Ruby on Rails
</p> ` })} ${renderComponent($$result2, "WorkStep", $$WorkStep, { "title": "Instructional Web Manager", "company": "Austin Community College", "dates": "09.2017 ~ 04.2019", "icon": "tabler:briefcase" }, { "default": ($$result3) => renderTemplate` <p>
I worked at ACC for almost 10 years. I started because I wanted to teach web design, and took an additional part
      time position for the flexibility and health insurance. I found that I liked the education environment so much I
      took the first full time position available in Instructional Development as a Multimedia Developer. The position
      was mostly web development using Flash, PHP, HTML, JavaScript and CSS.
</p> <p>
A few years later I took on more responsibility as a Web Administrator and the last couple of years I was running
      my own department called Instructional Web. I helped create the Instructional Web Services department to provide
      leadership and development for online instructional content. It was a small team of four developers, two designers
      and two content strategists. I managed design and full stack development (AWS, Php, MySQL, Python, JavaScript) for
      instructional divisions.
</p> ` })}  ` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/components/widgets/WorkHistory.astro", void 0);

const meandjack = new Proxy({"src":"/_astro/meandjack.C4_d61pu.webp","width":1024,"height":769,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/meandjack.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/meandjack.webp");
							return target[name];
						}
					});

const meandjack$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: meandjack
}, Symbol.toStringTag, { value: 'Module' }));

const map = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 959 593\">\n  <defs>\n    <style>\n      .cls-1 {\n        fill: #e0006e;\n      }\n\n      .cls-1, .cls-2 {\n        stroke: #fff;\n      }\n\n      .cls-3 {\n        opacity: .5;\n      }\n\n      .cls-2 {\n        fill: #d0d0d0;\n      }\n    </style>\n  </defs>\n  <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n    <g class=\"cls-3\">\n      <path class=\"cls-2\" d=\"M643,467.4l.4-7.3-.9-1.2-1.7-.7-2.5-2.8.5-2.9,48.8-5.1-.7-2.2-1.5-1.5-.5-1.4.6-6.3-2.4-5.7.5-2.6.3-3.7,2.2-3.8-.2-1.1-1.7-1v-3.2l-1.8-1.9-2.9-6.1-12.9-45.8-45.7,4,1.3,2-1.3,67,4.4,33.2.9-.5h1.3c0,.1.6.5.6.5h.8c0-.1,2-3.9,2-3.9v-2.3l1.1-1.1,1.4.5,3.4,6.4v.9l-3.3,2.2,3.5-.4,4.9-1.6,1.1-.6h0Z\"/>\n      <path class=\"cls-2\" d=\"M139.6,387.6l3-2.2.8-2.4-1-1.6-1.8-.2-1.1-1.6,1.1-6.9,1.6-.3,2.4-3.2,1.6-7,2.4-3.6,4.8-1.7,1.3-1.3-.4-1.9-2.3-2.5-1.2-5.8-1.4-1.8-1.3-3.4.9-2.1,1.4-3,.5-2.9-.5-4.9,1-13.6,3.5-.6,3.7,1.4,1.2,2.7h2l2.4-2.9,3.4-17.5,46.2,8.2,40,6-17.4,124.1-37.3-5.4-64.2-37.5.5-2.9,2-1.8h2.2Z\"/>\n      <path class=\"cls-2\" d=\"M584.2,367l.9-2.2,1.2.5.7-1-.8-.7.3-1.5-1.1-.9.6-1v-1.5h-1.2c0-.1.8-.9.8-.9l1.3.8.3-1.4-.4-1.1v-.7l2.1.6-.4-1.5,1.6-1.3-.5-.9h-1.1c0,.1-.6-.8-.6-.8l.9-.9,1.6-.2.5-.8,1.4-.2v-.8l-1-.9v-.5h1.5l.4-.7-1.4-1v-.6l-11.3.8,2.8-5.1,1.7-1.5v-2.2l-1.6-2.5-39.8,2-39.1.7,4.1,24.4-.7,39,2.6,2.3,2.8-1.3,3.2.8.2,11.9,52.3-1.3,1.2-1.5.5-3-1.5-2.3-.5-2.2.9-.7v-.8l-1.7-1.1v-.7l1.5-.9-1.2-1.1,1.7-7.1,3.4-1.6v-.8l-1.1-1.4,2.9-5.4h1.9l1.5-1.2-.3-5.2,3.1-4.5,1.8-.6-.5-3.1,1.6-.7h0Z\"/>\n      <path class=\"cls-2\" d=\"M374.6,323.3l-16.5-1-51.7-4.8-52.6-6.5,11.5-88.3,44.9,5.7,37.5,3.4,33.1,2.4-1.4,22.1-4.8,67Z\"/>\n      <path class=\"cls-2\" d=\"M873.5,178.9l.4-1.1-3.2-12.3v-.3l-15,3.4v.7l-.9.3-.5-.7-10.5,2.4,2.8,16.3,1.8,1.5-3.5,3.4,1.7,2.2,5.4-4.5,1.7-1.3h.8l2.4-3.1h1.4c0,.1,2.9-1,2.9-1h2.1l5.3-2.7,2.8-.9,1-1,1.5.5-.4-1.8h0Z\"/>\n      <path class=\"cls-2\" d=\"M822.2,226.6l-1.6.3-1.5,1.1-1.2,2.1,7.6,27.1,10.9-2.3-2.2-7.6-1.1.5-3.3-2.6-.5-1.7-1.8-1-.2-3.7-2.1-2.2-1.1-.8-1.2-1.1-.4-3.2.3-2.1,1-2.2-1.6-.6h0Z\"/>\n      <path class=\"cls-2\" d=\"M751.7,445.1l-4-.7-1.7-.9-2.2,1.4v2.5l1.4,2.1-.5,4.3-2.1.6-1-1.1-.6-3.2-50.1,3.3-3.3-6-48.8,5.1-.5,2.9,2.5,2.8,1.7.7.9,1.2-.4,7.3-1.1.6.5.4,1-.3.7-.8,10.5-2.7,9.2-.5,8.1,1.9,8.5,5,2.4.8,2.2,2v2.7h2.3l1.9-1h2.5c0,.1,2-.7,2-.7l2.9-2,3.1-2.9,1.1-.4.6.5h1.4l.5-.8-.5-1.2-.6-.6.2-.8,2-1.1,5-.4.8,1h1c0,.1,2.3,1.1,2.3,1.1l3,1.8,1.2,1.7,1.1,1.2,2.8,1.4v2.4l2.8,1.9h1c0,.1,1.6,1.5,1.6,1.5l.7,1.6,1,.2.8,2.1.7.6,1-1.1h2.9c0,.1.5,1.5.5,1.5l1.1.9v1.3l2.9,2.2.2,9.6-1.8,5.8,1,1.2-.2,3.4-.8,1.4.7,1.2,2.3,2.3.3,1.5.8,1-.4-1.9,1.3-.6.8-3.6-3-1.2v-.6l2.7-.4.9,2.6,1.1.6v-2l1.2.3.6.8v.7l-3,4.2-.2,1.1-1.7,1.9v1.1l3.7,3.8,5.3,7.9,1.8,2.1v1.8l2.8,4.6,2.3.6.7-1.2-2.1.3-3-4.5.2-1.4,1.5-.8v-1.5l-.6-1.3.9-.9.4.9.7.5v4l-1.2-.6-.8.9,1.4,1.6,1,2.6,1.2-.6,2.3,1.2,2.1,2.2,1.6,5.1,3.1,4.8.8-1.3,2.8-.5,3.2,1.3.3,1.7,3.3,3.8v1.1l2.3,2.7-.7.5v2.7l2.7,1.4h1.5l2.7-1.8,1.5.3,1.1.4,2.3-1.7.2-.7,1.2.3,2.4-1.7,1.3-2.3-.7-3.2-.2-1.3,1.1-4,.6-.2.6,1.6.8-1.8-.8-7.2-.4-10.5-1-6.8-.7-1.7-6.6-11.1-5.2-9.1-2.2-3.3-1.3-3.6-.2-3.4.9-.3v-.9l-1.1-2.2-4-4-7.6-9.7-5.7-10.4-4.3-10.7-.6-3.7-1.2-1-.5-3.8-3.6.3h0ZM760.9,579.6h1.7l-.7-1.1-1,1.1ZM768.2,578.5v-.7l1.6-.2,3.7-3.3,1.5-.6,2.4-.9.3,1.3,1.7.8-2.6,1.2h-2.4l-3.9,2.5h-2.3ZM785.4,570.9l-3,1.4-1,1.3h1.1l2.9-2.7ZM789.2,568l-1.1.3-1.4,2,1.1-.2,1.5-1.6v-.5h0ZM797.5,552.3l-1.7,5.6-.8,1-1,2.6-1.2,1.6-.7,1.7-1.9,2.2v.9l2.7-2.8,2.4-3.5.6-2,2.1-4.9-.5-2.4h0Z\"/>\n      <path class=\"cls-2\" d=\"M165.3,183.1l-24.4-5.4,8.5-37.3,2.9-5.8.4-2.1.8-.9-.9-2-2.9-1.2.2-4.2,4-5.8,2.5-.8,1.6-2.3v-1.6c-.1,0,1.7-1.6,1.7-1.6l3.2-5.5,4.2-4.8-.5-3.2-3.5-3.1-1.6-3.6,1.1-4.3-.7-4,12.7-56.1,14.2,3-4.8,22,3.7,7.4-1.6,4.8,3.6,4.8,1.9.7,3.9,8.3v2.1l2.3,3h.9l1.4,2.1h3.2v1.6l-7.1,17-.5,4.1,1.4.5,1.6,2.6,2.8-1.4,3.6-2.4,1.9,1.9.5,2.5-.5,3.2,2.5,9.7,2.6,3.5,2.3,1.4.4,3v4.1l2.3,2.3,1.6-2.3,6.9,1.6,2.1-1.2,9,1.7,2.8-3.3,1.8-.6,1.2,1.8,1.6,4.1h.9c0,.1-8.5,54.9-8.5,54.9l-47.9-8.2-23.3-4.7h0Z\"/>\n      <path class=\"cls-2\" d=\"M629.2,214.8l-5.1,2.3-4.7-1.4,4.1,50.2-1,5.2v2l2.4,3.5v.7l-.3.9.9,1.9-.3,2.4-1.6,1.8-1.3,4.2-3.8,5.3v7h-1.1l.9,1.9,1.1.8.6-1-.7-1.7,4.6-.5.2,1.2,1.1.2.4-.9-.6-1.3.3-.8,1.3.8,1.7-.4,1.7.6,3.4,2.1,1.8-2.8,3.5-2.2,3,3.3,1.6-2.1.3-2.7,3.8-2.3.2,1.3,1.9,1.2,3-.2,1.2-.7v-3.4l2.6-3.7,4.6-4.4v-1.7l1.1-3.8,2.2,1,6.7-4.5-.4-1.7-1.5-2.1,1-1.9-6.6-57.2v-1.4l-32.5,3.4-1.7,1.6h0Z\"/>\n      <path class=\"cls-2\" d=\"M556.9,183l2.1,1.6.6,1.1-1.6,3.3v2.5l1.9,5.5,2.7,1.5,3.3.7,1.3,2.8-.5.6,2.5,1.3,1.7,1.7-.2,1.6.9,1.1h1.2l2.8,3.5v2.6l-1.2,3.2-1.1,1.3v2.4l-1.8,2.2-4.2,1.8h-2.4l-3,.8-1,4,1.1,1.6,1,.3.9,1.4v3.5l-.6.5-1.7,2.4v2.4l-1,1.2-.9.3-1.8.6-1,1.5.7.9v2.3l-.8.7-1.5-.8-1.1-1.1-.6-1.6-1.7-1.3-14.3.8-27.2,1.2h-25.9c0-.1-1.8-4.5-1.8-4.5l.7-2.2-.8-3.3.2-2.9-1.3-.7-.4-6.1-2.8-5-.2-3.7-2.2-4.3-1.3-3.7v-1.4l-.6-1.7v-2.3l-.5-.9-.7-1.7-.3-1.3-1.3-1.2,1-4.3,1.7-5.1-.7-2-1.3-.4-.4-1.6,1-.5v-1.1c.1,0-1.2-1.5-1.2-1.5v-1.6c.1,0,2.3.1,2.3.1h28.2l36.3-.9,18.6-.7.2,2.6h0Z\"/>\n      <path class=\"cls-2\" d=\"M459.1,259.5l-43.7-1.2-36-2-4.8,67,67.7,2.9h62c0,.1-.5-48-.5-48l-3.2-.7-2.6-4.7-2.5-2.5.5-2.3,2.7-2.6v-1.2c.1,0-1.4-2.1-1.4-2.1l-.9,1-2-.6-2.9-3h-32.4Z\"/>\n      <path class=\"cls-2\" d=\"M692.1,322.5l-20.5,1.4-5.2.8-17.4,1-2.6.8-22.6,2-.7-.6h-3.7l1.2,3.2-.6.9-23.3,1.5,1-2.7,1.4.9.7-.4,1.2-4.1-1-1,1-2,.2-.9-1.3-.8-.3-1.8,4-3.7,6.9,3,1.5-.3.4-2.4-1.7-1.8.4-3.3,1-.5,1.2.6.6-1.2,3.7-.6v-.9l-1.4-2.2v-1.1l2.1-2.7v-.9l1.1.8.6-1-.7-1.7,4.6-.5.2,1.2,1.1.2.4-.9-.6-1.3.3-.8,1.3.8,1.7-.4,1.7.6,3.4,2.1,1.8-2.8,3.5-2.2,3,3.3,1.6-2.1.3-2.7,3.8-2.3.2,1.3,1.9,1.2,3-.2,1.2-.7v-3.4l2.6-3.7,4.6-4.4v-1.7l1.1-3.8,2.2,1,6.7-4.5-.4-1.7-1.5-2.1,1-1.9,1.3.5h2.2c0,.1,1.9-.7,1.9-.7l2.9,1.2,2.2,3.4v1l4.1.7,2.3-.2,1.9,2.1,2.2.2v-1l1.9-.8,3,.8,1.2.8,1.3-.7h.9l.6-1.7,3.4-1.8.5.8.8,2.9,3.5,1.4,1.2,2.1v1.1l.5,1-.6,3.6,1.9,1.6.8,1.1,1,.6v.9l4.3,5.6h1.4l1.5,1.8,1.2.3h1.4c0-.1-4.9,6.5-4.9,6.5l-2.9,1-3,3-.4,2.2-2.1,1.3v1.7l-1.5,1.4-1.8.5-.5,1.9-1,.4-6.9,4.2-5.6,1.4h0ZM594.1,333.8l-.7-.7.2-1h1.1l.7.7-.3,1h-1Z\"/>\n      <path class=\"cls-2\" d=\"M602.5,472.8l-1.2-1.8.3-1.3-4.8-6.8.9-4.6,1-1.4v-1.4l-35.9,2,1.7-11.9,2.4-4.8,6-8.4-1.8-2.5h2v-3.3l-2.4-2.5.5-1.7-1.2-1-1.6-7.1.6-1.4-52.3,1.3.5,19.9.7,3.4,2.6,2.8.7,5.4,3.8,4.6.8,4.3h1v7.3l-3.4,6.4,1.3,2.3-1.3,1.5.7,3v4.3l-2.3,3.5v.8l-1.8,1.2,1,1.8,1.2,1.1,1.6-1.3,5.3-.9h6.1c0-.1,9.6,3.7,9.6,3.7l8,1,1.5-1.4,1.8-.2,4.8,2.2,1.6-.4,1.1-1.5-4.2-1.8-2.2,1-1.1-.2-1.4-2,3.3-2.2h1.6c0-.1,0,1.6,0,1.6h1.5c0-.1,3.4-.4,3.4-.4l.4,2.3,1.1.4.6,1.9,4.8,1,1.7,1.6v.7h-1.2l-1.5,1.7,1.7,1.2,5.4,1,2.7,2.8,4.4-1-3.7.2v-.6l2.7-.7.2-1.8,1.2-.3v-1.4h1.1v1.7h2.5c0,.1.8-1.8.8-1.8l.9.3.2,2.5,1.2.2-1.8,2,2.6-.9,2-1.1,2.9-3.3h-.7l-1.3,1.2h-.4c0-.1-.5-.9-.5-.9l.9-1.2v-2.3l1.1-.8.7.7,1-.8h1c0-.1.6,1.2.6,1.2l-.6,1.9h2.4l5.1,1.7.5,1.3,1.6,1.4h2.8c0,.1,1.3.8,1.3.8l1.8-1,.9-1.7v-1.7h-1.4l-1.2-1.4-1.1-1.1-3.2-.9-2.6.2-4.2-2.4v-2.3l1.3-1,2.4.6-3.1-1.6.2-.8h3.6l2.6-3.5-2.6-1.8.8-1.5-1.2-.8h-.8l-2,2.1v2.1l-.6.7h-1.1c0-.1-1.6-1.5-1.6-1.5h-1.3v-1.5l.6-.7.8.7,1.7-1.6.7-1.6.8-.3-.6-.7h0ZM592.2,470.1l1.9,1,.8,1.1h2.5c0,.1,1.5.9,1.5.9l.2,1.4-.4.6-.9-1.5-1.4,1.2-.9,1.4-2.8.8h-1.6c0,.1-3.7-.9-3.7-.9v-1.7l2.1-2,1.1-2.4h1.6ZM587.5,471.3v1.1l-1.8,2h-1.2v-2.2l1.6-1.5,1.4.6Z\"/>\n      <path class=\"cls-2\" d=\"M875,128.7l.6,4,3.2,2,.8,2.2,2.3,1.4,1.4-.3,1-3-.8-2.9,1.6-.9.5-2.8-.6-1.3,3.3-1.9-2.2-2.3.9-2.4,1.4-2.2.5,3.2,1.6-2,1.3.9,1.2-.8v-1.7l3.2-1.3.3-2.9,2.5-.2,2.7-3.7v-.7l-.9-.5v-3.3l.5-1.1.2,1.6,1-.5-.2-3.2-.9.3v1.2l-1.3-1.4.9-1.4h.6l1.1-.3.5,2.8,2-.3,2.9.7v-1l-1.1-1.2h1.3v-2.2l.6.8.3,1.9,2.1,1.5.2-1,.9-.2-.3-.8.8-.6v-1.6l-1.7-.2-2,.7,1.4-1.6.7-.8,1.3-.2.4,1.3,1.7,1.6.4-2.1,2.3-1.2-.9-1.3v-1.7l1.2.5h.7l1.7-1.4.4-2.3,2.2.3v-.7l.3-1.6.5,1.4,1.5-1,2.3-4.1v-2.2l-1.5-2-3-3.2h-1.9l-.8,2.2-2.9-3,.3-.8v-1.5l-1.6-4.5-.8-.2-.7.4h-4.8l-.3-3.6-8.1-26-7.3-3.7h-2.9l-6.7,6.5-2.7-1-1-3.9h-2.7l-6.9,19.5.7,6.2-1.7,2.4-.4,4.6,1.3,3.7.8.2v1.6l-1.6,4.5-1.5,1.4-1.3,2.2-.4,7.8-2.4-1-1.5.4,11.9,36.8h.1ZM909.6,104l-1,.8v1.3l.7-.8.9.8.4-.5,1.1.2-1-.8.4-.8-1.5-.2h0ZM907.9,106.6l-1,1.1.5.4v1h1v-1.8l-.5-.7ZM904.9,105l.9,1.3,1,.5.3-1v-1.8l-1.3-.7-.4,1.2-.5.5ZM903.9,110l-1.7-1.7,1.6-2.4.8.3.2,1.1,1,.8v1.1l-1,1-.9-.2h0Z\"/>\n      <path class=\"cls-2\" d=\"M822.9,269.3v-1.7h-.8v1.8h.8ZM834.7,265.4l1.2-2.2v-2.5l-.5-.6-.7.9-.2,2.1-.8,1.4-.3,1.1-4.6,1.6-.7.8-1.3.2-.4.9-1.3.6-.3-2.5.4-.7-.8-.5.2-1.5-1.6,1v-2l1.2-.3-1.9-.4-.7-.8.4-1.3-.8-.6-.7,1.6.5.8-.7.6-1.1.5-2-1-.2-1.2-1-1.1-1.4-1.7,1.5-.8-1-.6v-.9l.6-1,1.7-.3-1.4-.6v-.7h-1.4c0-.1-.4,1-.4,1l-.6.3v-3.4l1.1-1,.8.7v-1.6l-.9-.9-.9,1.1-1,1.4-.6-1,.2-2.4.9-1,.9.9,1.2-.7-.4-1.7-1,1-.9-2.1-.2-1.7,1.1-2.4,1.1-1.4,1.4-.2-.5-.8.5-.6-.3-.7.2-2.1-1.5.4-.8,1.1,1,1.3-2.6,3.6-.9-.4-.7.9-.6,2.2-1.8.5,1.3.6,1.3,1.3-.2.7.9,1.2-1.1,1,.5.3-.5,1.3v2.1l-.5,1.3.9,1.1.7,3.4,1.3,1.4,1.6,1.4.4,2.8,1.6,2,.4,1.4v1h-.7l-1.5-1.2-.4.2-1.2-.2-1.7-1.4-1.4-.3-1,.5-1.2-.3-.4.2-1.7-.8-1-1-1-1.3-.6-.2-.8.7-1.6,1.3-1.1-.8-.4-2.3.8-2.1-.3-.5.3-.4-.7-1h1c0-.1,1-1,1-1l.4-1.8,1.7-2.6-2.6-1.8-1,1.7-.6-.6h-1.6c0-.1-.4-.5-.4-.5v-.5l-1.6-.6-.8.3h-1.2c0-.1-.7-.8-.7-.8l-.5-.2-.2-.7.6-.8v-.9l-1.2-.2-1-.9h-.9c0,.1-1.6-.2-1.6-.2l-.9-.4.2-1.6-1-.5-.2-.7h-.7l-.8-1.2.2-1-2.6.4-2.2-1.6-1.4.3-.9,1.4h-1.3l-1.7,2.9-3.3.4-1.9-1-2.6,3.8-2.2-.3-3.1,3.9-.9,1.6-1.8,1.6-1.7-11.4,60.5-11.8,7.6,27.1,10.9-2.3v8.4l-1.1,1.8-.6.3h0ZM821.3,263.6l-1.3.9.8,1.8,1.7.8-.4-1.6-.8-1.9h0Z\"/>\n      <path class=\"cls-2\" d=\"M899.9,174.2h3.4l.9-.6v-1.3l-1.8-1.8.4,1-1.5,1.5h-2.3v.8l.9.4h0ZM890.9,176l-1.2-.6,1-.8.6-2.1,1.2-1,.8-.2.6.9,1.1.2.6-.6.5,1.9-1.3.3-2.8.7-1.1,1.3h0ZM856,152.6l18.4-3.8,1-1.5.3-1.7,1.9-.6.5-1.1,1.7-1.1,1.3.3,1.7,3.3,1,.4,1.1-1.3.8,1.3v1.1l-3,2.4.2.8-.9,1,.4.8-1.3.3.9,1.2-.8.7.6,1,.9-.2.3-.8,1.1.6h1.8l2.5,2.6.2,2.6h1.8c0,.1.8,1.2.8,1.2l.6,2,1,.7h3.8c0-.1.8-1,.8-1l1.6-1.2,1.1-.3-1.2-2.1-.3.9-1.5-3.6h-.8l-.4.9-1.2-1,1.3-1.1,1.8.4,2.3,2.1,1.3,2.7,1.2,3.3-1,2.8v-1.8l-.7-1-3.5,2.3-.9-.3-1.6,1v1.2l-2.3,1.2-2,2.1-2,1.9h-1.2l3.3-3.3.5-1.9-.5-.6-.3-1.3h-.9c0-.1,0,1.2,0,1.2l-1,1.2h-1.2l-.3,1.1.4,1.2-1.2,1.1-1.1-.2-.4,1-1.4-3-1.3-1.1-2.6-1.3-.6-2.2h-.8l-.7-2.6-6.5,2v-.3l-15,3.4v.7l-.9.3-.5-.7-10.5,2.4-.7-1,.5-15,12.4-2.7h0Z\"/>\n      <path class=\"cls-2\" d=\"M663.3,209.8v1.4l21.5-3.5.5-1.2,3.9-5.9v-4.3l.8-2.1,2.2-.8,2-7.8,1-.5,1,.6-.2.6-1.1.8.3.9.8.4,1.9-1.4.4-9.8-1.6-2.3-1.2-3.7v-2.5l-2.3-4.4v-1.8l-1.2-3.3-2.3-3-2.9-1-4.8,3-2.5,4.6-.2.9-3,3.5-1.5-.2-2.9-2.8v-3.4l1.4-1.9,2-.2,1.2-1.7.2-4,.8-.8h1.1c0-.1.9-1.8.9-1.8l-.2-9.6-.3-1.3-1.2-1.2-1.7-1v-1.8l.6-.6,1.8.8-.3-1.7-1.9-2.7-.7-1.6-1.1-1.1h-2.2l-8.1-2.9-1.4-1.7-3.1-.3-1.2.3-4.4-2.3h-1.4l.5,1h-2.7v.5l.6.6-2.5,2.1v1.8l1.6,2.3,1.5.2v.6l-1.5.5h-2.1c0-.1-2.8,2.4-2.8,2.4v2.5l.5,5.8-2.2,3.4.8-4.5-.8-.6-.9,5.3-1-2.3.5-2.3-.5-1,.6-1.3-.6-1.1,1-1v-1.2l-1.3.6-1.3,3.1-.7.7-1.3,2.4-1.7-.2v1.2h-1.7l.2,1.5.2,2-3,1.2v1.3l1.1,1.7v5.2l-1.4,4.4-1.7,2.5,1.2,1.4.8,3.5-1,2.5-.2,2.1,1.7,3.4,2.5,4.9,1.2,1.9,1.6,6.9v8.8l-1,3.9-2,3.2-.9,3.7-2,3-1.2,1,32.4-3.4h.1ZM567.5,113l3,3.8,17,3.8,1.4,1,4,.8.7.5,2.8-.2,4.9.8,1.4,1.5-1,1,.8.8,3.8.7,1.2,1.2v4.4l-1.2,2.8h2c0,.1,1-.7,1-.7l.9.8-1.1,3.1,1,1.6,1.2.3.8-1.8,2.9-4.6,1.6-6,2.3-2-.5-1.6.5-.9,1,1.6-.3,2.2,2.9-2.2.2-2.3,2.1.6.8-1.6.7.6-.7,1.5-1,.5-1,2,1.4,1.8,1.1-.5-.5-.7,1-1.5,1.9-1.7h.8l.2-2.6,2-1.8,7.9-.5,1.9-3.1,3.8-.3,3.8,1.2,4.2,2.7.7-.2-.2-3.5.7-.2,4.5,1.1,1.5-.2,2.9-.7,1.7.4h1.8v-1l-.7-.9-1.5-.2-1.1-.8.5-1.4-.8-.3h-2.6v-.9l1.1-.8.6.8.5-1.8-.7-.7.7-.2-1.4-1.3.3-1.3v-1.9h-1.2l-1.5,1h-1.9l-.5,1.9-1.9.2-.3-1.2h-2.2l-1,1.3h-.7l-.2-.9-2.6.4v-4.8l.9-2h-.7l-1.8,1h-2.2l-3.8,2.7-6.2.3-4.1.8-1.9,1.5-1.4,1.3-2.5,1.7-.3.8-.6-1.7-1.3-.6v.6l.7.7v1.3l-1.5-.6h-.6l-.3,1.2-2-1.9-1.3-.2-1.3,1.5h-3.2l-.5-1.5-2-1.9-1.3-1.6v-.7l-1.1-1.4-2.6-1.2h-3.3l-1.1-1h-1.4l-.7.4-2.2,2.2-.7,1.1-1-.7.2-1,.8-2.1,3.2-5,.8-.2,1.7-1.9.7-1.6,3-.6.8-.6v-1l-.6-.5-4.5.2-2,.5-2.6,1.2-1.2,1.2-1.7,2.2-1.8,1-3.3,3.4-.4,1.6-7.4,4.6-4,.5-1.8.4-2.3,3-1.8.7-4.4,2.3,1.9.7h-.1ZM668.2,116.8h3.8l.6-.4-.2-2-1.7-1.8h-1.9v.6l1.1.4-1.6.8-.3,1-.6-.6-.4.8,1.3,1.2h0ZM593.1,74.9l-2.3.2-2.7,1.9-7.1,5.3.8,1,1.8.3,2.8-2-1.1-.5,2.3-1.6h1l3-1.9v-.9l1.5-1.8ZM634.2,137.7v1l2.1,1.6-.2-2.4-1.9-.2h0ZM633.5,140.5h1.1v1h-1v-1h0ZM654.9,119.2v.9l.8-.2v-.5s-.8-.2-.8-.2ZM659.6,122.3v-1.1l-1.7-.2-.6-.4h-.9l-.4.3.9.4,1.1,1.1h1.6ZM641.6,123.5v1.1l-.4.7.2,2.2.4.3h.7l.5-.8v-1.6l-.2-.6v-1.1l-1.2-.2Z\"/>\n      <path class=\"cls-2\" d=\"M464.7,68.6l-1.1,2.8.8,1.4-.3,5.1-.5,1.1,2.7,9.1,1.3,2.5.7,14,1,2.7-.4,5.8,2.9,7.4.3,5.8v2.1c-.1,0-.2,2.2-.2,2.2l-.9,2-3.1,1.9-.3,1.2,1.7,2.5.4,1.8,2.6.6,1.5,1.9-.2,39.5h28.2l36.3-.9,18.6-.7-1.1-4.5-.2-3-2.2-3-2.8-.7-5.2-3.6-.6-3.3-6.3-3.1-.2-1.3h-3.3l-2.2-2.6-2-1.3.7-5.1-.9-1.6.5-5.4,1-1.8-.3-2.7-1.2-1.3-1.8-.3v-1.7l2.8-5.8,5.9-3.9-.4-13,.9.4.6-.5v-1.1l1-.6,1.4,1.2h.7l-1.2-2.3,4.3-3.1,3.1-3.7,1.6-.8,4.7-5.9,6.3-5.8,3.9-2.1,6.3-2.7,7.6-4.5-.6-.4-3.7.7h-2.8l-1-1.5-1.4-.9-9.8,1.2-1-2.8h-1.6l-1.7.7-3.7,3.1h-4.1l-2.1-1-.3-1.7-3.9-.8-.6-1.6-.7-1.3-1,.9h-2.6l-9.9-5.4h-2.9l-.8-.7-3.1,1.3-.8,1.3-3.3.8-1.3-.2v-1.7l-.7-.9h-5.9l-.4-1.4h-2.6l-1.1.4-2.4-1.7.3-1.4-.6-2.4-.7-1.1-.2-3-1-3.1-2.1-1.6h-2.9v8c.1,0-30.8-.4-30.8-.4l2.4,7.3h0Z\"/>\n      <path class=\"cls-2\" d=\"M623.8,468.6h-5c0,.1-2.4-1.4-2.4-1.4l-7.9,2.5-.9-.7-.5.2v1.6h-.7c0,.1-2.6,2.8-2.6,2.8h-.7c0-.1-.6-.8-.6-.8l-1.2-1.8.3-1.3-4.8-6.8.9-4.6,1-1.4v-1.4l-35.9,2,1.7-11.9,2.4-4.8,6-8.4-1.8-2.5h2v-3.3l-2.4-2.5.5-1.7-1.2-1-1.6-7.1.6-1.4,1.2-1.5.5-3-1.5-2.3-.5-2.2.9-.7v-.8l-1.7-1.1v-.7l1.5-.9-1.2-1.1,1.7-7.1,3.4-1.6v-.8l-1.1-1.4,2.9-5.4h1.9l1.5-1.2-.3-5.2,3.1-4.5,1.8-.6-.5-3.1,38.3-2.6,1.3,2-1.3,67,4.4,33.2-1.5,1.3h0Z\"/>\n      <path class=\"cls-2\" d=\"M555.3,248.9l-1.1-1.1-.6-1.6-1.7-1.3-14.3.8-27.2,1.2h-25.9c0-.1,1.3,1.2,1.3,1.2l-.3,1.4,2.1,3.7,3.9,6.3,2.9,3,2,.6.9-1,1.5,2.1v1.2c-.1,0-2.8,2.6-2.8,2.6l-.5,2.3,2.5,2.5,2.6,4.7,3.2.7.5,48.1.2,10.8,39.1-.7,39.8-2,1.6,2.5v2.2l-1.7,1.5-2.8,5.1,11.2-.8,1-2,1.2-.5v-.7l-1.2-1.1-.6-1,1.7.2.8-.7-1.4-1.5,1.4-.5v-1l-.5-1v-1.3l-.7-.7.2-1h1.1l.7.7-.3,1,.8.7.8-1,1-2.7,1.4.9.7-.4,1.2-4.1-1-1,1-2,.2-.9-1.3-.8h-2.8l-1.4-1.5-1.8-3.8v-1.9l.8-.6v-1.3l-1.6-1.9-.9-2.5-2.7-4.1-4.8-1.3-7.4-7.1-.4-2.4,2.8-7.6-.4-1.9,1.2-1.1v-1.3l-2.8-1.5-3-.7-3.4,1.2-1.3-2.3.6-1.9-.7-2.4-8.6-8.4-2.2-1.5-2.5-5.9-1.2-5.4,1.4-3.7-1.5-.8h0Z\"/>\n      <path class=\"cls-2\" d=\"M247,130.5l57.3,7.9,51,5.3,2-20.7,5.2-66.7-53.5-5.6-54.3-7.7-65.9-12.5-4.8,22,3.7,7.4-1.6,4.8,3.6,4.8,1.9.7,3.9,8.3v2.1l2.3,3h.9l1.4,2.1h3.2v1.6l-7.1,17-.5,4.1,1.4.5,1.6,2.6,2.8-1.4,3.6-2.4,1.9,1.9.5,2.5-.5,3.2,2.5,9.7,2.6,3.5,2.3,1.4.4,3v4.1l2.3,2.3,1.6-2.3,6.9,1.6,2.1-1.2,9,1.7,2.8-3.3,1.8-.6,1.2,1.8,1.6,4.1h.9c0,.1,2-10.6,2-10.6h0Z\"/>\n      <path class=\"cls-2\" d=\"M402.5,191.1l38,1.6,3.4,3.2,1.7.2,2.1,2h1.8c0-.1,1.8-2.1,1.8-2.1l1.5.6,1-.7.7.5.9-.4.7.4.9-.4,1,.5,1.4-.6,2,.6.6,1.1,6.1,2.2,1.2,1.3.9,2.6,1.8.7,1.5-.2.5.9v2.3l.6,1.7v1.4l1.3,3.7,2.2,4.3.2,3.7,2.8,5,.4,6.1,1.3.7-.2,2.9.8,3.3-.7,2.2,1.8,4.4,1.3,1.3-.3,1.4,2.1,3.7,3.9,6.3h-32.4l-43.7-1.2-36-2,1.4-22.1-33.1-2.4,3.7-44.2,51.1,3.5h0Z\"/>\n      <path class=\"cls-2\" d=\"M167.6,296.8l-3.4,17.5-2.4,2.9h-2l-1.2-2.7-3.7-1.4-3.5.6-1,13.6.5,4.9-.5,2.9-1.4,3-70.4-105-1.1-3.5,16.4-63.1,47,11.2,24.4,5.4,23.3,4.7-21,109h0Z\"/>\n      <path class=\"cls-2\" d=\"M862.6,93.6h-1.3l-1-1-1.9,1.4-.5,6.1,1.2,2.3-1.1,3.5,2.1,2.8-.4,1.7v1.3l-1,2.1-1.4.4-.6,1.3-2.1,1-.7,1.5,1.4,3.4-.5,2.5.5,1.5-1,1.9.4,1.9-1.3,1.9.2,2.2-.7,1.1.7,4.5.7,1.5-.5,2.6.9,1.8-.2,2.5-.5,1.3v1.4l2,2.6,18.4-3.8,1-1.5.3-1.7,1.9-.6.5-1.1,1.7-1.1,1.3.3.8-4.8-2.3-1.4-.8-2.2-3.2-2-.6-4-11.9-36.8-.5,1.7h0Z\"/>\n      <path class=\"cls-2\" d=\"M842.5,195.4l-14.6-4.9-1.8,2.5v2.2l-2.9,5.4,1.5,1.8-.7,2-1,1,.5,3.6,2.7.9,1,2.8,2.1,1.1,4.2,3.2-3.3,2.6-1.6,2.3-1.8,3-1.6.6-1.4,1.7-1,2.2-.3,2.1.8.9.4,2.3,1.2.6,2.4,1.5,1.8.8,1.6.8v1.1h.9c0,.1,1.1-1.1,1.1-1.1l.8.4,2.1.2-.2,2.9.2,2.5,1.8-.7,1.5-3.9,1.6-4.8,2.9-2.8.6-3.5-.6-1.2,1.7-2.9v-1.2l-.7-1.1,1.2-2.7-.3-3.6-.6-8.2-1.2-1.4v1.4l.5.6h-1.1l-.6-.4-1.3-.2-.9.6-1.2-1.6.7-1.7v-1l1.7-.7.8-2.1.4-5.9h0Z\"/>\n      <path class=\"cls-2\" d=\"M357.5,332.9h-.8l-7.9,99.3-31.8-2.6-34.4-3.6-.3,3,2,2.2-30.8-4.1-1.4,10.2-15.7-2.2,17.4-124.1,52.6,6.5,51.7,4.8-.6,10.6h0Z\"/>\n      <path class=\"cls-2\" d=\"M872.9,181.6h-1.3c0,.1-.5,1.1-.5,1.1l1.8-1.1ZM842.3,204.3l.7.6,1.3-.3,1.1.3.9-1.3h1.9l2.4-.9,5.1-2.1-.5-.5-1.9.8-2,.9.2-.8,2.6-1.1.8-1h1.2c0,.1,4.1-2.2,4.1-2.2v.7l-4.2,3,4.5-2.8,1.7-2.2h1.5c0-.1,4.5-3.2,4.5-3.2l3.2-3.1,3-2.3,1-1.2h-1.7c0-.1-1,1.1-1,1.1l-.2.7-.9.7-.8-1.1-1.7,1v.9l-1-.2.5-.9-1.2-.7-.6.9.9.3.2.5-.3.5-1.4,2.6h-1.9l.9-1.8.9-.6.3-1.7,1.4-1.6.9-.8,1.5-.7-1.2-.2-.7.9h-.7l-1.1.8-.2,1-2.2,2.1-.4.9-1.4.9-7.7,1.9.2.9-.9.7-2,.3-1-.6-.2,1.1-1.1-.4v1h-1.1c0-.1-1.2.4-1.2.4l-.2,1.1h-1l.2,1h-.7l.2,1-1.8.4-1.5,2.3-.2,2.1h0ZM841.5,203.9l-1.6.4v1l-.7,1.6.6.7,2.4-2.3v-.9l-.7-.5ZM831.4,108.7l-.6,1.9,1.4.9-.4,1.5.5,3.2,2.2,2.3-.4,2.2.6,2-.4,1-.3,3.8,3.1,6.7-.8,1.8.9,2.2.9-1.6,1.9,1.5,3,14.2-.5,2,1.1,1-.5,15,.7,1,2.8,16.3,1.8,1.5-3.5,3.4,1.7,2.2-1.3,3.3-1.5,1.7-1.5,2.3-.2-.7.4-5.9-14.6-4.9-1.6-1.1-1.9.3-3-2.2-3-5.8h-2l-.4-1.5-1.7-1.1-70.5,13.9-.8-6,4.3-3.9.6-1.7,3.9-2.5.6-2.4,2.3-2,.8-1.1-1.7-3.3-1.7-.5-1.8-3-.2-3.2,7.6-3.9,8.2-1.6h4.4l3.2,1.6h.9c0-.1,1.8-1.7,1.8-1.7l3.4-.7h3l2.6-1.3,2.5-2.6,2.4-3.1,1.9-.4,1.1-.5.4-3.2-1.4-2.7-1.2-.7,2-1.3v-1.8h-1.6l-2.3-1.4v-3.1l6.1-6.1.7-2.4,3.7-6.3,5.9-6.4,2.1-1.7h2.5l20.6-5.1s.8,1.7.8,1.7Z\"/>\n      <path class=\"cls-2\" d=\"M829,300.1l-29.1,6.1-39.4,7.3-29.4,3.5v5.2h-1.5c0-.1-1.4,1.1-1.4,1.1l-2.4,5.2-2.6-1.1-3.5,2.5-.7,2.1-1.5,1.2-.8-.8v-1.5l-.9-.2-4,3.3-.6,3.4-4.7,2.4-.5,1.2-3.2,2.6-3.6.5-4.6,3-.8,4.1-1.3.9h-1.5c0-.1-1.4,1.2-1.4,1.2v4.9l21.3-3,4.4-1.9h1.3c0-.1,7.3-4.4,7.3-4.4l23.2-2.2.4.5-.2,1.4.7.3,1.2-1.5,3.3,3v2.6l19.8-2.8,24.5,17.1,4-2.2,3-.7h1.7l1.1,1.1.8-2,.6-5,1.7-3.9,5.4-6.1,4.1-3.5,5.4-2.3,2.5-.4,1.3.4.7,1.1,3.3-6.6,3.3-5.3-.7-.3-4.4,6.8-.5-.8,2-2.2-.4-1.5-2-.5,1,1.3h-1.2c0,.1-1.2-1.7-1.2-1.7l-1.2,2-1.6.2,1-2.7.7-1.7-.2-2.9h-2.2c0-.1.9-1,.9-1l1.1.3h2.7c0,.1.8-.4.8-.4h2.3l2-1.9.2-3.2,1.3-1.4,1.2-.2,1.3-1-.5-3.7-2.2-3.8-2.7-.2-.9,1.6-.5-1-2.7.2-1.2.4-1.9,1.2-.3-.4h-.9l-1.8,1.2-2.6.5v-1.3l.8-1,1,.7h1l1.7-2.1,3.7-1.7,2-2.2h2.4l.8,1.3,1.7.8-.5-1.5-.3-1.6-2.8-3.1-.3-1.4-.4,1-.9-1.3-1.3-1.6h0ZM836,331.1l2.7-2.5,4.6-3.3v-3.7l-.4-3.1-1.7-4.2,1.5,1.4,1,3.2.4,7.6-1.7.4-3.1,2.4-3.2,3.2v-1.4h0ZM837.9,311.8l-.9-.2v1l2.5,2.2-.2-1.4-1.4-1.6h0ZM840.8,313.9l-1.4-2.8-2.2-3.4-2.4-3-2.2-4.3-.8-.7,2.2,4.3.3,1.3,3.4,5.5,1.8,2.1,1.3,1h0Z\"/>\n      <path class=\"cls-2\" d=\"M464.7,68.6l-1.1,2.8.8,1.4-.3,5.1-.5,1.1,2.7,9.1,1.3,2.5.7,14,1,2.7-.4,5.8,2.9,7.4.3,5.8v2.1c-.1,0-29.6-.4-29.6-.4l-46-2.1-39.2-2.9,5.2-66.7,44.5,3.4,55.3,1.6,2.4,7.3h0Z\"/>\n      <path class=\"cls-2\" d=\"M685.7,208.8l1.9-.4,3,1.3,2.1.6.7.9h1l1-1.5,1.3.8h1.5v1l-3.2.5-2,1.1,1.9.8,1.6-1.5,2.4-.4,2.2,1.5h1.5c0-.1,2.5-1.8,2.5-1.8l3.6-2.1,5.2-.3,4.9-5.9,3.8-3.1,9.3-5.1,4.9,29.9-2.2,1.2,1.4,2.1v2.2l.5,2-1.1,3.4v5.4l-1.1,3.6.5,1.1-.4,2.2-1.1.5-2,3.3-1.8,2h-.6l-1.8,1.7-1.3-1.2-1.5,1.8-.3,1.2h-1.3l-1.3,2.2v2.1l-.9.5,1.4,1.1v1.9l-1,.2-.7.8-1,.5-.6-2.1-1.6-.5-1,2.3-.3,2.2-1.1,1.3,1.3,3.6-1.5.8-.4,3.5h-1.5l-3.2,1.4-1.2-2.1-3.5-1.4-.8-2.9-.5-.8-3.4,1.8-.6,1.7h-.9l-1.3.7-1.2-.8-3-.8-1.9.8v1l-2.2-.2-1.9-2.1-2.3.2-4.1-.7v-1l-2.2-3.4-2.9-1.2-1.9.8h-2.2c0-.1-1.3-.6-1.3-.6l-6.6-57.2,21.4-3.5.9,1.1h0Z\"/>\n      <path class=\"cls-2\" d=\"M501.5,398.6l-4.6-3.8-2.2-.9-.5,1.6-5.1.3-.6-1.5-5,2.5-1.6-.7-3.7.3-.6,1.7-3.6.9-1.3-1.2h-1.2c0,.1-2-1.7-2-1.7l-2.1.7-2-.5-1.8-2-2.5,4.2-1.2.8-1-1.8.3-2-1.2-.7-2.3,2.5-1.7-1.2v-1.5c-.1,0-1.4.5-1.4.5l-2.6-1.7-3,2.6-2.3-1.1.7-2.1h-2.3c0,.1-1.9-2.9-1.9-2.9l-3.5-1.1-2,2.3-2.3-2.2-1.4.4h-2c0,.1-3.5-1.8-3.5-1.8h-2.3c0,.1-1.2-.6-1.2-.6l-.5-2.9-2.3-1.7-1.1,1.5-1.4-1-1.2-.4-1.1,1-1.5-.3-2.5-3-2.7-1.3,1.4-42.7-52.6-3.2.6-10.6,16.5,1,67.7,2.9h62c0,.1.2,10.9.2,10.9l4.1,24.4-.7,39-6.4-1.9h0Z\"/>\n      <path class=\"cls-2\" d=\"M93.9,166.5l47,11.2,8.5-37.3,2.9-5.8.4-2.1.8-.9-.9-2-2.9-1.2.2-4.2,4-5.8,2.5-.8,1.6-2.3v-1.6c-.1,0,1.7-1.6,1.7-1.6l3.2-5.5,4.2-4.8-.5-3.2-3.5-3.1-1.6-3.6-30.3-7.3-2.8,1-5.4-.9-1.8-.9-1.5,1.2-3.3-.4-4.5.5-.9.7-4.2-.4-.8-1.6-1.2-.2-4.4,1.3-1.6-1.1-2.2.8-.2-1.8-2.3-1.2-1.5-.2-1-1.1-3,.3-1.2-.8h-1.2l-1.2.9-5.5.7-6.6-4.2,1.1-5.6-.4-4.1-3.2-3.7h-3.7l-.4-1,.4-1.2-.7-.8h-1l-1.1,1.4-1.5-.2-.5-1.1h-1l-.7.5-2-1.9v4.3l-1.3,1.3-1.1,3.5v2.3l-4.6,12.3-13.2,31.3-3.2,4.6h-1.6v2l-5.2,7.1-.3,3.3,1,1.3v2.4c.1,0-1.1,1.1-1.1,1.1l-1.2,3v5.7c.1,0,1.3,2.9,1.3,2.9l66.1,18.6h.1Z\"/>\n      <path class=\"cls-2\" d=\"M826.3,189.4l-1.9.3-3-2.2-3-5.8h-2l-.4-1.5-1.7-1.1-70.5,13.9-.8-6-4.2,3.4h-.9c0,.1-2.7,3.1-2.7,3.1l-3.3,1.7,4.9,29.9,3.2,19.7,17.4-2.9,60.5-11.8,1.2-2.1,1.5-1.1,1.6-.3,1.6.6,1.4-1.7,1.6-.6,1.8-3,1.6-2.3,3.3-2.6-4.2-3.2-2.1-1.1-1-2.8-2.7-.9-.5-3.6,1-1,.7-2-1.5-1.8,3-5.4v-2.2l1.7-2.5-1.6-1.1h0Z\"/>\n      <path class=\"cls-2\" d=\"M883.2,170.7l-1.3-1.1-2.6-1.3-.6-2.2h-.8l-.7-2.6-6.5,2,3.2,12.3-.4,1.1.4,1.8,5.6-3.6v-3l-.7-.8.4-.6v-1.3l-1-.7,1.2-.4-.9-1.6,1.8.7.3,1.4.7,1.2-1.4-.8,1.1,1.7-.3,1.2-.6-1.1v2.5l.6-.9.4.9,1.3-1.5-.2-2.5,1.4,3.1,1-.9-1.4-3h0ZM878.5,182.9h.9l.5-.6-.8-1.3-.7.7v1.2h0Z\"/>\n      <path class=\"cls-2\" d=\"M772.3,350.2l-19.7,2.8v-2.6l-3.4-3-1.2,1.5-.7-.3.2-1.4-.4-.5-23.2,2.2-7.3,4.3h-1.3c0,.1-4.4,2-4.4,2v1.9l-2,1-1.4,3.2.2,1.3,6.1,3.8,2.6-.3,3.1,4,.4,1.7,4.2,5.1,2.6,1.7,1.4.2,2.2,1.6,1.1,2.2,2,1.6,1.8.5,2.7,2.7v1.4l2.7,2.8,5,2.3,3.6,6.7.3,2.7,3.9,2.1,2.5,4.8.8,3.1,4.2.4.8-1.5h.6l1.8-1.5.5-2,3.2-2.1.3-2.4-1.2-.9.8-.7.8.4,1.3-.4,1.8-2.1,3.8-1.8,1.6-2.4v-.7l4.9-4.4v-.5l-1-.8,1.1-1.5h.8l.4.5.7-.8h1.3l.6-1.5,2.3-2.1-.3-5.4.8-2.3,3.6-6.2,2.4-2.2,2.2-1.1-24.5-17.1h0Z\"/>\n      <path class=\"cls-2\" d=\"M396.5,125.9l46,2.1,29.5.4v2.2c-.1,0-1,2-1,2l-3.1,1.9-.3,1.2,1.7,2.5.4,1.8,2.6.6,1.5,1.9-.2,39.5h-2.2c0-.1-.1,1.5-.1,1.5l1.3,1.5v1.1c-.1,0-1.1.5-1.1.5l.4,1.6,1.3.4.7,2-1.7,5.1-1,4.3,1.3,1.2.3,1.3.7,1.7-1.5.2-1.8-.7-.9-2.6-1.2-1.3-6.1-2.2-.6-1.1-2-.6-1.4.6-1-.5-.9.4-.7-.4-.9.4-.7-.5-1,.7-1.5-.6-1.8,2h-1.8c0,.1-2.1-1.9-2.1-1.9l-1.7-.2-3.4-3.2-38-1.6-51.1-3.5,3.9-43.9,2-20.7,39.2,2.9h0Z\"/>\n      <path class=\"cls-2\" d=\"M620.9,365.1l45.7-4,22.9-2.9v-4.9l1.5-1.3h1.5c0,.1,1.3-.8,1.3-.8l.8-4.1,4.6-3,3.6-.5,3.2-2.6.5-1.2,4.7-2.4.6-3.4,4-3.3.8.2v1.5l.9.8,1.5-1.2.7-2.1,3.5-2.5,2.6,1.1,2.4-5.2,1.4-1.2h1.5c0,.1,0-5.1,0-5.1l.3-.7-4.6.5-.2,1-28.9,3.3-5.6,1.4-20.5,1.4-5.2.8-17.4,1-2.6.8-22.6,2-.7-.6h-3.7l1.2,3.2-.6.9-23.3,1.5-.8,1-.8-.7h-1v1.3l.6,1v1l-1.5.5,1.4,1.5-.8.7-1.7-.2.6,1,1.2,1.1v.7l-1.2.5-1,2v.6l1.5,1-.4.7h-1.5v.5l.9.9v.8l-1.3.2-.5.8-1.6.2-.9.9.6.9h1.1c0-.1.5.8.5.8l-1.6,1.3.4,1.5-2-.6v.7l.3,1.1-.3,1.4-1.3-.8-.8.8h1.1v1.6l-.6,1,1.1.9-.3,1.5.8.7-.7,1-1.2-.5-.9,2.2-1.6.7,38.3-2.6h0Z\"/>\n      <path class=\"cls-2\" d=\"M859.1,102.4l-1.1,3.5,2.1,2.8-.4,1.7v1.3l-1,2.1-1.4.4-.6,1.3-2.1,1-.7,1.5,1.4,3.4-.5,2.5.5,1.5-1,1.9.4,1.9-1.3,1.9.2,2.2-.7,1.1.7,4.5.7,1.5-.5,2.6.9,1.8-.2,2.5-.5,1.3v1.4l2,2.6-12.4,2.7-1.1-1,.5-2-3-14.2-1.9-1.5-.9,1.6-.9-2.2.8-1.8-3.1-6.7.3-3.8.4-1-.6-2,.4-2.2-2.2-2.3-.5-3.2.4-1.5-1.4-.9.6-1.9-.8-1.7,27.3-6.9,1.2,2.3h0Z\"/>\n      <path class=\"cls-2\" d=\"M834.7,265.4l-1.1,2.8.5,1.1.4-1.1.8-3.1-.6.3h0ZM800.1,258.4l-.7-1h1c0-.1,1-1,1-1l.4-1.8-.2-.5v-.5l-.2-.7-.6-.5h-.4c0-.1-.5-.5-.5-.5l-.6-.6h-1.6c0-.1-.4-.5-.4-.5v-.5l-1.6-.6-.8.3h-1.2c0-.1-.7-.8-.7-.8l-.5-.2-.2-.7.6-.8v-.9l-1.2-.2-1-.9h-.9c0,.1-1.6-.2-1.6-.2l-.4.7-.4,1.6-.5,2.3-10-5.2-.2.9.9,1.6-.8,2.3v2.9l-1.1.8-.5,2.1-.9.8-1.4,1.8-.9.8-1,2.5-2.4-1.1-2.3,8.5-1.3,1.6-2.8-.5-1.3-1.9-2.3-.7v4.7l-1.5,1.7.4,1.5-2.1,2.2.4,1.9-3.7,6.3-1,3.3,1.5,1.2-1.5,1.9v1.4l-2.2,2-.7-1.1-4.3,3.1-1.5-1-.6,1.4.8.5-.5.9-5.5,2.4-3-1.8-.8,1.7-1.9,1.8h-2.3c0,.1-4.4-2.2-4.4-2.2v-1.5l-1.6-.7.8-1.2-.7-.6-4.9,6.6-2.9,1-3,3-.4,2.2-2.1,1.3v1.7l-1.5,1.4-1.8.5-.5,1.9-1,.4-6.9,4.2,28.9-3.3.2-1,4.6-.5-.3.7,29.4-3.5,39.4-7.3,29.1-6.1-.6-1.2h.4c0-.1.9.8.9.8v-1.4l-.4-1.9,1.6,1.2.9,2.1v-1.3l-3.4-5.5v-1.2l-.7-.8-1.3.7.5,1.4h-.8l-.4-1-.6.9-.9-1.1h-2.1c0-.1-.2.6-.2.6l1.5,2.1-1.4-.7-.5-1-.4.8h-.8c0,.1-1.5,1.8-1.5,1.8l.3-1.6v-1.4l-1.5-.7-1.8-.5-.2-1.7-.6-1.3-.6,1.1-1.7-1-2,.3.2-.9,1.5-.2.9.5,1.7-.8.9.4.5,1v.7l1.9.4.3.9.9.4.9,1.2,1.4-1.6h.6v-2.1l-1.4,1-.6-.9,1.5-.2-1.2-.9-1.2.6v-1.7l-1.8.2-2.2-1.1-1.8-2.2,3.6,2.2.9.3,1.7-.8-1.7-.9.6-.6-1-.5.8-.2-.3-.9,1.1.9.4-.8.4,1.3,1.2.8.6-.5-.5-.6v-2.5h-1.2c0-.1-1.6-.9-1.6-.9l.9-1.1h-2c0-.1-.4-.6-.4-.6l-1.4.6-1.4-.8-.5-1.2-2.1-1.2-2.1-1.8-2.2-1.9,3,1.3.9,1.2,2.1.7,2.3,2.5.2-1.7.6,1.3,2.3.5v-4l-.8-1.1,1.1.4v-1.6l-3-1.4-1.6-.2-1.3-.2.3-1.2-1.5-.3v-.6h-1.9l-.2.8-.7-1h-2.7l-1-.4-.2-1-1.2-.6-.4-1.5-.6-.4-.7,1.1-.9.2-.9.7h-1.5l-.9-1.3.4-3.1.5-2.4.6.5.3-.4h0ZM822,270h.9v-.7h-.8c0,.1,0,.7,0,.7h0ZM829.5,284.2l-1,2.7,1.2-1.3-.2-1.4h0ZM827.7,268.9l.7.3-.2,1.9-.5-.5-1.3,1,1,.4-1.8,4.4v8.1l2,3.1.5-1.5.4-2.7-.3-2.3.7-.9-.2-1.4,1.2-.6-.6-.5.5-.7.8,1.1-.2,1.1-.4,3.9,1.1-2.2.4-3.1v-3l-.2-2,.6-2.3,1.1-1.8v-2.2l.4-.9-4.6,1.6-.7.8-.4.9h0Z\"/>\n      <path class=\"cls-2\" d=\"M161.9,83.6l.7,4-1.1,4.3-30.3-7.3-2.8,1-5.4-.9-1.8-.9-1.5,1.2-3.3-.4-4.5.5-.9.7-4.2-.4-.8-1.6-1.2-.2-4.4,1.3-1.6-1.1-2.2.8-.2-1.8-2.3-1.2-1.5-.2-1-1.1-3,.3-1.2-.8h-1.2l-1.2.9-5.5.7-6.6-4.2,1.1-5.6-.4-4.1-3.2-3.7h-3.7l-.4-1,.4-1.2-.7-.8h-1l-2.1-1.4-1.2.4h-2l-.7-1.6-1.6-.3,2.5-7.5-.7,6,.5.5v-2l.8-.2,1.1,2.3-.5-2.2,1.2-4.2,1.8.4-1.1-2-1,.3-1.5-.4.2-4.2.2,1.5.9.5.6-1.6h3.2l-2.2-1.2-1.7-1.9-1.4,1.6,1.2-3.1-.3-4.6-.2-3.6.9-6.1-.5-2-1.4-2.1v-4l.5-2.7,2-2.3-.7-1.4.2-.6h.9c0,.1,7.8,7.7,7.8,7.7l4.7,1.9,5.1,2.5h3.2c0-.1.2,2.9.2,2.9l1-1.6h.7l.6,2.7.5-2.6,1.4-.2.5.7-1.1.6v1.6l.8-1.5h1.1l-.4,2.6-1.1-.8.4,1.4v1.5l-.9.7-2.5,2.9,1.2-3.4-1.6.4-.4,2.1-3.8,2.8-.4,1-2.1,2.2v1h2.1l2.4-.2.5-.9-3.9.5v-.6l2.6-2.8,1.8-.8,1.9-.2,1-1.6,3-2.3v-1.4h1.1v4h-1.4l-.6.8-1.1-.9.3,1.1v1.7l-.7.7-.3-1.6-.8.8.7.6-.9,1.1h1.3l.7-.5v2l-.9,1.9-.9,1v1.8l-1.1-.2-.2-1.4.9-1.1-.8-.5-.8.7-.7,2.2-.8.9v-2l.7-1.1-.2-1.1-1.2,1.2v2.2l-.5.4-2.1-.4-1.3,1.2,2.2-.6-.2,2.2,1-1.8.4,1.4.5-1,.7,1.8h.7l.7-.8h.6l2-2,.2-1.2.8.6.3.9.7-.3v-1.2h1.4l.2-2.9v-2.7l.8.3-.7-2.1,1.4-.8.2-2.4,2.3-2.2h1c0,.1.3-1.3.3-1.3l-1.2-1.4v-3.5l-.9.9.7,2.9h-.6c0,.1-.6-1.8-.6-1.8l-.6-.5.3-2.3h1.8c0-.1.3.6.3.6l.3-1.6-1.6-1.7-.6-1.6-.2,2,.9,1.1-.7.4-1-.8-1.8,1.3,1.5.5.2,2.4-.3,1.8.9-1.3,1.4,2.3-.4,1.9h-1.5v-1.2l-1.5-1.2.5-3-1.9-2.6,2.7-3,.6-4.1h.9l1.4,3.2v-2.6l1.2.3v-3.3l-.9-.8-1.2,2.5-1-3h1.3c0-.1-1.5-5-1.5-5l1.9-.6,25.4,7.5,31.7,8,23.6,5.5s-12.7,56.1-12.7,56.1ZM83.2,44.2h.5v.8l-.4.3v.6l-.6.4-.2-.9.5-.4s.2-.8.2-.8ZM88.2,39.9l-1.2,1.9v.8l.3.2.5-.6h1.1s-.7-2.3-.7-2.3ZM87.8,18.3l.5.6,1.3-.3.2-1,1.2-1.8-1-.4-.7,1.6v-1.6l-1.2.2-.7,1.4s.4,1.3.4,1.3ZM91,12.8l.7,1.5-.9.2-.8.4-.2-2.4s1.2.3,1.2.3ZM88.3,11.2l-1.1-.2.5,1.4.6-1.2ZM87.3,13.7l.8.4-.4,1.1,1.7-.5-.2-2.2-.9-.2-1,1.4ZM84.6,13.3l.3,2.7,1.6,1.3.6-1.9-1.1-2.2h-1.4ZM86.5,12.2l-1.1-1h-.9c0,.1,1.8,1.6,1.8,1.6l.2-.6ZM89.7,5.2h-1.2v.8l1.2.6v-1.4ZM88.8,37.7l.4-2.7h-1.1l-.2,1.9s.9.8.9.8Z\"/>\n      <path class=\"cls-2\" d=\"M723.4,297.5l-.8,1.2,1.5.7v1.5l4.5,2.3h2.3c0-.1,1.9-1.9,1.9-1.9l.8-1.7,3,1.8,5.5-2.4.5-.9-.8-.5.6-1.4,1.5,1,4.3-3.1.7,1.1,2.3-2v-1.4l1.4-1.9-1.5-1.2,1-3.3,3.7-6.3-.4-1.9,2.1-2.2-.4-1.5,1.4-1.7v-4.7l2.4.7,1.3,1.9,2.8.5,1.3-1.6,2.3-8.5,2.4,1.1,1-2.5.9-.8,1.4-1.8.9-.8.5-2.1,1.2-.8v-2.9l.7-2.3-.9-1.6.2-.9,10,5.2.5-2.3.4-1.6.4-.7-.9-.4.2-1.6-1-.5-.2-.7h-.7l-.8-1.2.2-1-2.6.4-2.2-1.6-1.4.3-.9,1.4h-1.3l-1.7,2.9-3.3.4-1.9-1-2.6,3.8-2.2-.3-3.1,3.9-.9,1.6-1.8,1.6-1.7-11.4-17.4,2.9-3.2-19.7-2.2,1.2,1.4,2.1v2.2l.5,2-1.1,3.4v5.4l-1.1,3.6.5,1.1-.4,2.2-1.1.5-2,3.3-1.8,2h-.6l-1.8,1.7-1.3-1.2-1.5,1.8-.3,1.2h-1.3l-1.3,2.2v2.1l-.9.5,1.4,1.1v1.9l-1,.2-.7.8-1,.5-.6-2.1-1.6-.5-1,2.3-.3,2.2-1.1,1.3,1.3,3.6-1.5.8-.4,3.5h-1.5l-3.2,1.4v1.1l.5,1-.6,3.6,1.9,1.6.8,1.1,1,.6v.9l4.3,5.6h1.4l1.5,1.8,1.2.3h1.4c0-.1.7.5.7.5h0Z\"/>\n      <path class=\"cls-2\" d=\"M355.3,143.7l-51-5.3-57.3-7.9-2,10.7-8.5,54.8-3.3,21.9,32.1,4.8,44.9,5.7,37.5,3.4,3.7-44.2,3.9-43.9h0Z\"/>\n      <path class=\"cls-2\" d=\"M803.5,252l-2.6-1.8-1,1.7.5.4h.4c0,.1.6.6.6.6l.3.7v1c0,0,1.8-2.6,1.8-2.6h0Z\"/>\n      <g>\n        <path class=\"cls-2\" d=\"M687.6,447.4l-48.8,5.1-.5,2.9,2.5,2.8,1.7.7.9,1.2-.4,7.3-1.1.6\"/>\n        <path class=\"cls-2\" d=\"M666.6,361.1l12.9,45.8,2.9,6.1,1.8,1.9v3.2l1.7,1,.2,1.1-2.2,3.8-.3,3.7-.5,2.6,2.4,5.7-.6,6.3.5,1.4,1.5,1.5.7,2.2\"/>\n        <path class=\"cls-2\" d=\"M620.9,365.1l1.3,2-1.3,67,4.4,33.2\"/>\n        <path class=\"cls-2\" d=\"M620.9,365.1l45.7-4\"/>\n        <path class=\"cls-2\" d=\"M516.7,414.2l52.3-1.3\"/>\n        <path class=\"cls-2\" d=\"M591.7,344.9l-11.2.8,2.8-5.1,1.7-1.5v-2.2l-1.6-2.5-39.8,2-39.1.7\"/>\n        <path class=\"cls-2\" d=\"M569,412.9l1.2-1.5.5-3-1.5-2.3-.5-2.2.9-.7v-.8l-1.7-1.1v-.7l1.5-.9-1.2-1.1,1.7-7.1,3.4-1.6v-.8l-1.1-1.4,2.9-5.4h1.9l1.5-1.2-.3-5.2,3.1-4.5,1.8-.6-.5-3.1\"/>\n        <path class=\"cls-2\" d=\"M507.9,400.5l.7-39-4.1-24.4\"/>\n        <path class=\"cls-2\" d=\"M582.6,367.7l1.6-.7.9-2.2,1.2.5.7-1-.8-.7.3-1.5-1.1-.9.6-1v-1.5h-1.2c0-.1.8-.9.8-.9l1.3.8.3-1.4-.4-1.1v-.7l2.1.6-.4-1.5,1.6-1.3-.5-.9h-1.1c0,.1-.6-.8-.6-.8l.9-.9,1.6-.2.5-.8,1.4-.2v-.8l-1-.9v-.5h1.5l.4-.7-1.4-1v-.6\"/>\n        <path class=\"cls-2\" d=\"M507.9,400.5l2.6,2.3,2.8-1.3,3.2.8.2,11.9\"/>\n        <path class=\"cls-2\" d=\"M149,338.1l-.9,2.1,1.3,3.4,1.4,1.8,1.2,5.8,2.3,2.5.4,1.9-1.3,1.3-4.8,1.7-2.4,3.6-1.6,7-2.4,3.2-1.6.3-1.1,6.9,1.1,1.6,1.8.2,1,1.6-.8,2.4-3,2.2h-2.2\"/>\n        <path class=\"cls-2\" d=\"M253.8,311l-17.4,124.1\"/>\n        <path class=\"cls-2\" d=\"M167.6,296.8l-3.4,17.5-2.4,2.9h-2l-1.2-2.7-3.7-1.4-3.5.6-1,13.6.5,4.9-.5,2.9-1.4,3\"/>\n        <path class=\"cls-2\" d=\"M167.6,296.8l46.2,8.2,40,6\"/>\n        <path class=\"cls-2\" d=\"M93.9,166.5l-16.4,63.1,1.1,3.5,70.4,105\"/>\n        <path class=\"cls-2\" d=\"M27.8,147.9l66.1,18.6\"/>\n        <path class=\"cls-2\" d=\"M379.4,256.3l-4.8,67\"/>\n        <path class=\"cls-2\" d=\"M347.7,231.8l33.1,2.4-1.4,22.1\"/>\n        <path class=\"cls-2\" d=\"M253.8,311l52.6,6.5,51.7,4.8\"/>\n        <path class=\"cls-2\" d=\"M358.1,322.3l16.5,1\"/>\n        <path class=\"cls-2\" d=\"M265.3,222.7l-11.5,88.3\"/>\n        <path class=\"cls-2\" d=\"M265.3,222.7l44.9,5.7,37.5,3.4\"/>\n        <path class=\"cls-2\" d=\"M843.8,171.3l10.5-2.4.5.7.9-.3v-.7l14.9-3.4v.3\"/>\n        <path class=\"cls-2\" d=\"M846.6,194.7l-1.7-2.2,3.5-3.4-1.8-1.5-2.8-16.3\"/>\n        <path class=\"cls-2\" d=\"M870.7,165.5l3.2,12.3-.4,1.1.4,1.8\"/>\n        <path class=\"cls-2\" d=\"M801.8,254.6l1.7-2.6-2.6-1.8-1,1.7\"/>\n        <path class=\"cls-2\" d=\"M799.9,251.9l.5.4h.4c0,.1.6.6.6.6l.3.7v1\"/>\n        <path class=\"cls-2\" d=\"M817.9,230.1l7.6,27.1,10.9-2.3\"/>\n        <path class=\"cls-2\" d=\"M823.8,227.2l-1,2.2-.3,2.1\"/>\n        <path class=\"cls-2\" d=\"M817.9,230.1l1.2-2.1,1.5-1.1,1.6-.3,1.6.6\"/>\n        <path class=\"cls-2\" d=\"M687.6,447.4l3.3,6,50.1-3.3.6,3.2,1,1.1,2.1-.6.5-4.3-1.4-2.1v-2.5l2.2-1.4,1.7.9,4,.7,3.6-.3\"/>\n        <path class=\"cls-2\" d=\"M689.5,358.2l21.4-3\"/>\n        <path class=\"cls-2\" d=\"M710.9,355.2v1.9l-2,1-1.4,3.2.2,1.3,6.1,3.8,2.6-.3,3.1,4,.4,1.7,4.2,5.1,2.6,1.7,1.4.2,2.2,1.6,1.1,2.2,2,1.6,1.8.5,2.7,2.7v1.4l2.7,2.8,5,2.3,3.6,6.7.3,2.7,3.9,2.1,2.5,4.8.8,3.1,4.2.4\"/>\n        <path class=\"cls-2\" d=\"M666.6,361.1l22.9-2.9\"/>\n        <path class=\"cls-2\" d=\"M556.8,249.7l.7-.7v-2.3l-.6-.9,1-1.5,1.8-.6.9-.3,1-1.2v-2.4l1.7-2.4.5-.5v-3.5l-.8-1.4-1-.3-1.1-1.6,1-4,3-.8h2.4l4.2-1.8,1.7-2.2v-2.4l1.2-1.3,1.3-3.2v-2.6l-2.9-3.5h-1.2l-.9-1.1.2-1.6-1.7-1.7-2.5-1.3.5-.6\"/>\n        <path class=\"cls-2\" d=\"M473.6,182h28.2l36.3-.9,18.6-.7\"/>\n        <path class=\"cls-2\" d=\"M484.5,246.8h25.9c0,.1,27.2-1.1,27.2-1.1l14.3-.8,1.7,1.3.6,1.6,1.1,1.1,1.5.8\"/>\n        <path class=\"cls-2\" d=\"M484.5,246.8l-1.8-4.4.7-2.2-.8-3.3.2-2.9-1.3-.7-.4-6.1-2.8-5-.2-3.7-2.2-4.3-1.3-3.7v-1.4l-.6-1.7v-2.3l-.5-.9\"/>\n        <path class=\"cls-2\" d=\"M473.5,204.2l-.7-1.7-.3-1.3-1.3-1.2,1-4.3,1.7-5.1-.7-2-1.3-.4-.4-1.6,1-.5v-1.1c.1,0-1.2-1.5-1.2-1.5v-1.6c.1,0,2.3.1,2.3.1\"/>\n        <path class=\"cls-2\" d=\"M567.2,202l-1.3-2.8-3.3-.7-2.7-1.5-2-5.5v-2.5l1.7-3.3-.6-1.1-2.1-1.6-.2-2.6\"/>\n        <path class=\"cls-2\" d=\"M188.8,30.5l-4.8,22,3.7,7.4-1.6,4.8,3.6,4.8,1.9.7,3.9,8.3v2.1l2.3,3h.9l1.4,2.1h3.2v1.6l-7.1,17-.5,4.1,1.4.5,1.6,2.6,2.8-1.4,3.6-2.4,1.9,1.9.5,2.5-.5,3.2,2.5,9.7,2.6,3.5,2.3,1.4.4,3v4.1l2.3,2.3,1.6-2.3,6.9,1.6,2.1-1.2,9,1.7,2.8-3.3,1.8-.6,1.2,1.8,1.6,4.1h.9\"/>\n        <path class=\"cls-2\" d=\"M140.9,177.7l24.4,5.4,23.3,4.7\"/>\n        <path class=\"cls-2\" d=\"M140.9,177.7l8.5-37.3,2.9-5.8.4-2.1.8-.9-.9-2-2.9-1.2.2-4.2,4-5.8,2.5-.8,1.6-2.3v-1.6c-.1,0,1.7-1.6,1.7-1.6l3.2-5.5,4.2-4.8-.5-3.2-3.5-3.1-1.6-3.6\"/>\n        <path class=\"cls-2\" d=\"M236.5,196l-47.9-8.2\"/>\n        <path class=\"cls-2\" d=\"M174.6,27.5l-12.7,56.1.7,4-1.1,4.3\"/>\n        <path class=\"cls-2\" d=\"M245,141.2l-8.5,54.8\"/>\n        <path class=\"cls-2\" d=\"M619.4,215.7l4.1,50.2-1,5.2v2l2.4,3.5v.7l-.3.9.9,1.9-.3,2.4-1.6,1.8-1.3,4.2-3.8,5.3v7h-1.1l.9,1.9\"/>\n        <path class=\"cls-2\" d=\"M599.9,322.5l-.3-1.8,4-3.7,6.9,3,1.5-.3.4-2.4-1.7-1.8.4-3.3,1-.5,1.2.6.6-1.2,3.7-.6v-.9l-1.4-2.2v-1.1l2.1-2.7v-.9\"/>\n        <path class=\"cls-2\" d=\"M599.9,322.5h-2.8l-1.4-1.5-1.8-3.8v-1.9l.8-.6v-1.3l-1.6-1.9-.9-2.5-2.7-4.1-4.8-1.3-7.4-7.1-.4-2.4,2.8-7.6-.4-1.9,1.2-1.1v-1.3l-2.8-1.5-3-.7-3.4,1.2-1.3-2.3.6-1.9-.7-2.4-8.6-8.4-2.2-1.5-2.5-5.9-1.2-5.4,1.4-3.7\"/>\n        <path class=\"cls-2\" d=\"M567.2,202l45.9-2.8\"/>\n        <path class=\"cls-2\" d=\"M618.3,302.7l1.1.8.6-1-.7-1.7,4.6-.5.2,1.2,1.1.2.4-.9-.6-1.3.3-.8,1.3.8,1.7-.4,1.7.6,3.4,2.1,1.8-2.8,3.5-2.2,3,3.3,1.6-2.1.3-2.7,3.8-2.3.2,1.3,1.9,1.2,3-.2,1.2-.7v-3.4l2.6-3.7,4.6-4.4v-1.7l1.1-3.8,2.2,1,6.7-4.5-.4-1.7-1.5-2.1,1-1.9\"/>\n        <path class=\"cls-2\" d=\"M630.9,213.2l32.4-3.4v1.4\"/>\n        <path class=\"cls-2\" d=\"M670,268.4l-6.6-57.2\"/>\n        <path class=\"cls-2\" d=\"M504.3,326.3l-.5-48.1-3.2-.7-2.6-4.7-2.5-2.5.5-2.3,2.7-2.6v-1.2c.1,0-1.4-2.1-1.4-2.1l-.9,1-2-.6-2.9-3\"/>\n        <path class=\"cls-2\" d=\"M379.4,256.3l36,2,43.7,1.2h32.4\"/>\n        <path class=\"cls-2\" d=\"M374.6,323.3l67.7,2.9h62\"/>\n        <path class=\"cls-2\" d=\"M596.7,333.5l1-2.7,1.4.9.7-.4,1.2-4.1-1-1,1-2,.2-.9-1.3-.8M594.1,333.8l-.7-.7.2-1h1.1l.7.7-.3,1\"/>\n        <path class=\"cls-2\" d=\"M670,268.4l1.3.5h2.2c0,.1,1.9-.7,1.9-.7l2.9,1.2,2.2,3.4v1l4.1.7,2.3-.2,1.9,2.1,2.2.2v-1l1.9-.8,3,.8,1.2.8,1.3-.7h.9l.6-1.7,3.4-1.8.5.8.8,2.9,3.5,1.4,1.2,2.1\"/>\n        <path class=\"cls-2\" d=\"M596.7,333.5l23.3-1.5.6-.9-1.2-3.2h3.7l.7.6,22.6-2,2.6-.8,17.4-1,5.2-.8,20.5-1.4,5.6-1.4M594.1,333.8h1\"/>\n        <path class=\"cls-2\" d=\"M697.7,321.1l6.9-4.2,1-.4.5-1.9,1.8-.5,1.4-1.4v-1.7l2.2-1.3.4-2.2,3-3,2.9-1,4.9-6.6\"/>\n        <path class=\"cls-2\" d=\"M709.3,279.4v1.1l.5,1-.6,3.6,1.9,1.6.8,1.1,1,.6v.9l4.3,5.6h1.4l1.5,1.8,1.2.3h1.4\"/>\n        <path class=\"cls-2\" d=\"M569,412.9l-.6,1.4,1.6,7.1,1.2,1-.5,1.7,2.4,2.5v3.3h-2l1.8,2.5-6,8.4-2.4,4.8-1.7,11.9,36-2v1.4l-1.1,1.4-.9,4.6,4.8,6.8-.3,1.3,1.2,1.8.6.7\"/>\n        <path class=\"cls-2\" d=\"M516.7,414.2l.5,19.9.7,3.4,2.6,2.8.7,5.4,3.8,4.6.8,4.3h1v7.3l-3.4,6.4,1.3,2.3-1.3,1.5.7,3v4.3l-2.3,3.5v.8l-1.8,1.2,1,1.8,1.2,1.1\"/>\n        <path class=\"cls-2\" d=\"M856,152.6l18.4-3.8,1-1.5.3-1.7,1.9-.6.5-1.1,1.7-1.1,1.3.3\"/>\n        <path class=\"cls-2\" d=\"M843.8,171.3l-.7-1,.5-15\"/>\n        <path class=\"cls-2\" d=\"M870.7,165.5l6.5-2,.7,2.6h.8l.6,2.2,2.6,1.3,1.3,1.1,1.4,3\"/>\n        <path class=\"cls-2\" d=\"M843.6,155.3l12.4-2.7\"/>\n        <path class=\"cls-2\" d=\"M757.4,241.9l60.5-11.8\"/>\n        <path class=\"cls-2\" d=\"M822.9,269.3h-.8M835.3,265.1l-.6.3M833.4,265.6l-4.6,1.6-.7.8M799.9,251.9l-.6-.6h-1.6c0-.1-.4-.5-.4-.5v-.5l-1.6-.6-.8.3h-1.2c0-.1-.7-.8-.7-.8l-.5-.2-.2-.7.6-.8v-.9l-1.2-.2-1-.9h-.9c0,.1-1.6-.2-1.6-.2M799.8,258.8l.3-.4-.7-1h1c0-.1,1-1,1-1l.4-1.8\"/>\n        <path class=\"cls-2\" d=\"M757.4,241.9l1.7,11.4,1.8-1.6.9-1.6,3.1-3.9,2.2.3,2.6-3.8,1.9,1,3.3-.4,1.7-2.9h1.3l.9-1.4,1.4-.3,2.2,1.6,2.6-.4-.2,1,.8,1.2h.7l.2.7,1,.5-.2,1.6.9.4\"/>\n        <path class=\"cls-2\" d=\"M881.9,138.3l-2.3-1.4-.8-2.2-3.2-2-.6-4-11.9-36.8\"/>\n        <path class=\"cls-2\" d=\"M663.4,211.2l21.4-3.5\"/>\n        <path class=\"cls-2\" d=\"M565.6,112.3l1.9.7,3,3.8,17,3.8,1.4,1,4,.8.7.5,2.8-.2,4.9.8,1.4,1.5-1,1,.8.8,3.8.7,1.2,1.2v4.4l-1.2,2.8h2c0,.1,1-.7,1-.7l.9.8-1.1,3.1,1,1.6,1.2.3\"/>\n        <path class=\"cls-2\" d=\"M462.3,61.3l2.4,7.3-1.1,2.8.8,1.4-.3,5.1-.5,1.1,2.7,9.1,1.3,2.5.7,14,1,2.7-.4,5.8,2.9,7.4.3,5.8v2.1\"/>\n        <path class=\"cls-2\" d=\"M473.6,182l.2-39.5-1.5-1.9-2.6-.6-.4-1.8-1.7-2.5.3-1.2,3.1-1.9.9-2v-2.2\"/>\n        <path class=\"cls-2\" d=\"M556.7,180.4l-1.1-4.5-.2-3-2.2-3-2.8-.7-5.2-3.6-.6-3.3-6.3-3.1-.2-1.3h-3.3l-2.2-2.6-2-1.3.7-5.1-.9-1.6.5-5.4,1-1.8-.3-2.7-1.2-1.3-1.8-.3v-1.7l2.8-5.8,5.9-3.9-.4-13,.9.4.6-.5v-1.1l1-.6,1.4,1.2h.7\"/>\n        <path class=\"cls-2\" d=\"M491.5,259.5l-3.9-6.3-2.1-3.7.3-1.4-1.3-1.3\"/>\n        <path class=\"cls-2\" d=\"M504.3,326.3l.2,10.8\"/>\n        <path class=\"cls-2\" d=\"M591.7,344.9l1-2,1.2-.5v-.7l-1.2-1.1-.6-1,1.7.2.8-.7-1.4-1.5,1.4-.5v-1l-.5-1v-1.3M595.1,333.8l.8.7.8-1\"/>\n        <path class=\"cls-2\" d=\"M582.6,367.7l38.3-2.6\"/>\n        <path class=\"cls-2\" d=\"M362.5,56.3l-5.2,66.7\"/>\n        <path class=\"cls-2\" d=\"M357.3,123l-2,20.7\"/>\n        <path class=\"cls-2\" d=\"M355.3,143.7l-51-5.3-57.3-7.9-2,10.7\"/>\n        <path class=\"cls-2\" d=\"M710.9,355.2l4.4-1.9h1.3c0-.1,7.3-4.4,7.3-4.4l23.2-2.2.4.5-.2,1.4.7.3,1.2-1.5,3.3,3v2.6l19.8-2.8,24.5,17.1\"/>\n        <path class=\"cls-2\" d=\"M731.1,317v5.2h-1.5c0-.1-1.4,1.1-1.4,1.1l-2.4,5.2-2.6-1.1-3.5,2.5-.7,2.1-1.5,1.2-.8-.8v-1.5l-.9-.2-4,3.3-.6,3.4-4.7,2.4-.5,1.2-3.2,2.6-3.6.5-4.6,3-.8,4.1-1.3.9h-1.5c0-.1-1.4,1.2-1.4,1.2v4.9\"/>\n        <path class=\"cls-2\" d=\"M731.1,317l29.4-3.5,39.4-7.3,29.1-6.1\"/>\n        <path class=\"cls-2\" d=\"M357.3,123l39.2,2.9,46,2.1,29.5.4\"/>\n        <path class=\"cls-2\" d=\"M351.4,187.6l51.1,3.5,38,1.6,3.4,3.2,1.7.2,2.1,2h1.8c0-.1,1.8-2.1,1.8-2.1l1.5.6,1-.7.7.5.9-.4.7.4.9-.4,1,.5,1.4-.6,2,.6.6,1.1,6.1,2.2,1.2,1.3.9,2.6,1.8.7,1.5-.2\"/>\n        <path class=\"cls-2\" d=\"M347.7,231.8l3.7-44.2\"/>\n        <path class=\"cls-2\" d=\"M857.9,100.1l1.2,2.3-1.1,3.5,2.1,2.8-.4,1.7v1.3l-1,2.1-1.4.4-.6,1.3-2.1,1-.7,1.5,1.4,3.4-.5,2.5.5,1.5-1,1.9.4,1.9-1.3,1.9.2,2.2-.7,1.1.7,4.5.7,1.5-.5,2.6.9,1.8-.2,2.5-.5,1.3v1.4l2,2.6\"/>\n        <path class=\"cls-2\" d=\"M827.9,190.5l14.6,4.9-.4,5.9\"/>\n        <path class=\"cls-2\" d=\"M823.8,227.2l1.4-1.7,1.6-.6,1.8-3,1.6-2.3,3.3-2.6-4.2-3.2-2.1-1.1-1-2.8-2.7-.9-.5-3.6,1-1,.7-2-1.5-1.8,3-5.4v-2.2l1.7-2.5\"/>\n        <path class=\"cls-2\" d=\"M358.1,322.3l-.6,10.6\"/>\n        <path class=\"cls-2\" d=\"M284.3,431.2l-2-2.2.3-3,34.4,3.6,31.8,2.6,7.9-99.3h.8\"/>\n        <path class=\"cls-2\" d=\"M93.9,166.5l47,11.2\"/>\n        <path class=\"cls-2\" d=\"M188.6,187.8l-21,109\"/>\n        <path class=\"cls-2\" d=\"M827.9,190.5l-1.6-1.1-1.9.3-3-2.2-3-5.8h-2l-.4-1.5-1.7-1.1-70.5,13.9-.8-6\"/>\n        <path class=\"cls-2\" d=\"M843.6,155.3l-1.1-1,.5-2-3-14.2-1.9-1.5-.9,1.6-.9-2.2.8-1.8-3.1-6.7.3-3.8.4-1-.6-2,.4-2.2-2.2-2.3-.5-3.2.4-1.5-1.4-.9.6-1.9-.8-1.7\"/>\n        <path class=\"cls-2\" d=\"M736.8,225.1l-4.9-29.9\"/>\n        <path class=\"cls-2\" d=\"M709.3,279.4l3.2-1.4h1.5l.4-3.5,1.5-.8-1.3-3.6,1.1-1.3.3-2.2,1-2.3,1.6.5.6,2.1,1-.5.7-.8,1-.2v-1.9l-1.4-1.1,1-.5v-2.1l1.2-2.2h1.3l.3-1.2,1.5-1.8,1.3,1.2,1.8-1.7h.6l1.8-2,2-3.3,1.1-.5.4-2.2-.5-1.1,1-3.6v-5.4l1.2-3.4-.6-2v-2.2l-1.3-2.1,2.2-1.2\"/>\n        <path class=\"cls-2\" d=\"M357.5,332.9l52.6,3.2-1.4,42.7,2.7,1.3,2.5,3,1.5.3,1.1-1,1.2.4,1.4,1,1.1-1.5,2.3,1.7.5,2.9,1.2.7h2.3c0-.1,3.5,1.8,3.5,1.8h2c0-.1,1.4-.5,1.4-.5l2.3,2.2,2-2.3,3.5,1.1,1.9,3h2.3c0-.1-.7,2-.7,2l2.3,1.1,3-2.6,2.6,1.7,1.3-.5v1.5c.1,0,1.8,1.2,1.8,1.2l2.3-2.5,1.2.7-.3,2,1,1.8,1.2-.8,2.5-4.2,1.8,2,2,.5,2.1-.7,2,1.8h1.2c0-.1,1.3,1.1,1.3,1.1l3.6-.9.6-1.7,3.7-.3,1.6.7,5-2.5.6,1.5,5.1-.3.5-1.6,2.2.9,4.6,3.8,6.4,1.9\"/>\n        <path class=\"cls-2\" d=\"M161.5,91.9l-30.3-7.3-2.8,1-5.4-.9-1.8-.9-1.5,1.2-3.3-.4-4.5.5-.9.7-4.2-.4-.8-1.6-1.2-.2-4.4,1.3-1.6-1.1-2.2.8-.2-1.8-2.3-1.2-1.5-.2-1-1.1-3,.3-1.2-.8h-1.2l-1.2.9-5.5.7-6.6-4.2,1.1-5.6-.4-4.1-3.2-3.7h-3.7l-.4-1,.4-1.2-.7-.8h-1\"/>\n        <path class=\"cls-2\" d=\"M736.8,225.1l3.2,19.7,17.4-2.9\"/>\n        <path class=\"cls-2\" d=\"M351.4,187.6l3.9-43.9\"/>\n        <path class=\"cls-2\" d=\"M697.7,321.1l28.9-3.3.2-1,4.6-.5-.3.7\"/>\n        <path class=\"cls-2\" d=\"M236.5,196l-3.3,21.9,32.1,4.8\"/>\n        <path class=\"cls-2\" d=\"M722.7,296.9l.7.6-.8,1.2,1.5.7v1.5l4.5,2.3h2.3c0-.1,1.9-1.9,1.9-1.9l.8-1.7,3,1.8,5.5-2.4.5-.9-.8-.5.6-1.4,1.5,1,4.3-3.1.7,1.1,2.3-2v-1.4l1.4-1.9-1.5-1.2,1-3.3,3.7-6.3-.4-1.9,2.1-2.2-.4-1.5,1.4-1.7v-4.7l2.4.7,1.3,1.9,2.8.5,1.3-1.6,2.3-8.5,2.4,1.1,1-2.5.9-.8,1.4-1.8.9-.8.5-2.1,1.2-.8v-2.9l.7-2.3-.9-1.6.2-.9,10,5.2.5-2.3.4-1.6.4-.7\"/>\n      </g>\n      <circle class=\"cls-2\" cx=\"801.6\" cy=\"252.1\" r=\"5\"/>\n    </g>\n  </g>\n  <g id=\"Layer_2\" data-name=\"Layer 2\">\n    <path class=\"cls-2\" d=\"M69.4,365.6l3.4,5.2h-1.4c0,.1-1.8-1.8-1.8-1.8l-.2-3.4h0ZM71.3,355.8l1.8,4.1,2.6,1,.7-.6-1.3-2.5-2.6-2.4-1.2.4ZM51.4,336.8v2.4l2,1.2,4.4-.2,1-1-3.1-.2-4.3-2.2h0ZM45.5,336.9l3.3.5,1.4,2.2h-3.8l-.9-2.7ZM93.4,382.4l-1-3,.2-3-.4-7.9-1.8-4.8-1.2-1.4-.6-1.5-7-8.6h-3.6c0,.1-2-1.8-2-1.8l1.1-1.8-.7-3.7-2.2-1.2-3.9-.6-2.8-1.3-1.5-1.9-4.5-6.6-2.7-2.2-3.7-.5-3.1-2.3-4.7-1.5-2.8-.3-2.5-2.5.2-2.8.8-4.8,1.8-5.1-1.4-1.6-4-9.4-2.7-3.7-.4-3-1.6-2.3.2-2.5-2-5-2.9-2.7.6-7.1,2.4-.8,1.8-3.1-.4-3.2-1-.9h-2.5l-2.5-3.3-1.5-3.5v-7.5l1.2-4.2.2-2.1,2.5.2v1.6c-.1,0-.9.7-.9.7v2.5l3.7,3.2v-4.7l-1.4-3.4.5-1.1-1-1.7,2.8-1.5-1.9-3-1.4.5-1.5,3.8.5,1.3-.8,1h-.9c0-.1-5.4-6.2-5.4-6.2l.7-5.6-1.1-3.9-6.5-12.8.8-10.7,2.3-3.6.2-6.4-5.5-11.1.3-5.2,6.9-7.5,1.7-2.4v-1.4c-.1,0,3.9-9.2,3.9-9.2v-8.4c.1,0,1-2.5,1-2.5l66.1,18.6-16.4,63.1,1.1,3.5,70.4,105-.9,2.1,1.3,3.4,1.4,1.8,1.2,5.8,2.3,2.5.4,1.9-1.3,1.3-4.8,1.7-2.4,3.6-1.6,7-2.4,3.2-1.6.3-1.1,6.9,1.1,1.6,1.8.2,1,1.6-.8,2.4-3,2.2h-2.2c0-.1-44-5.2-44-5.2h0Z\"/>\n    <path class=\"cls-2\" d=\"M761.8,414.1v1.4l-4.2,6.2-1.2.2,1.5.5v2l-.9,1.1-.6,6-2.3,6.2.5,2,.7,5.1-3.6.3-4-.7-1.7-.9-2.2,1.4v2.5l1.4,2.1-.5,4.3-2.1.6-1-1.1-.6-3.2-50.1,3.3-3.3-6-.7-2.2-1.5-1.5-.5-1.4.6-6.3-2.4-5.7.5-2.6.3-3.7,2.2-3.8-.2-1.1-1.7-1v-3.2l-1.8-1.9-2.9-6.1-12.9-45.8,22.9-2.9,21.4-3v1.9l-2,1-1.4,3.2.2,1.3,6.1,3.8,2.6-.3,3.1,4,.4,1.7,4.2,5.1,2.6,1.7,1.4.2,2.2,1.6,1.1,2.2,2,1.6,1.8.5,2.7,2.7v1.4l2.7,2.8,5,2.3,3.6,6.7.3,2.7,3.9,2.1,2.5,4.8.8,3.1,4.2.4.9.4h0Z\"/>\n    <path class=\"cls-2\" d=\"M623.5,265.9l-1,5.2v2l2.4,3.5v.7l-.3.9.9,1.9-.3,2.4-1.6,1.8-1.3,4.2-3.8,5.3v7h-1.1l.9,1.9v.9l-2.2,2.7v1.1l1.6,2.2v.9l-3.8.6-.6,1.2-1.2-.6-1,.5-.4,3.3,1.7,1.8-.4,2.4-1.5.3-6.9-3-4,3.7.3,1.8h-2.8l-1.4-1.5-1.8-3.8v-1.9l.8-.6v-1.3l-1.6-1.9-.9-2.5-2.7-4.1-4.8-1.3-7.4-7.1-.4-2.4,2.8-7.6-.4-1.9,1.2-1.1v-1.3l-2.8-1.5-3-.7-3.4,1.2-1.3-2.3.6-1.9-.7-2.4-8.6-8.4-2.2-1.5-2.5-5.9-1.2-5.4,1.4-3.7.7-.7v-2.3l-.6-.9,1-1.5,1.8-.6.9-.3,1-1.2v-2.4l1.7-2.4.5-.5v-3.5l-.8-1.4-1-.3-1.1-1.6,1-4,3-.8h2.4l4.2-1.8,1.7-2.2v-2.4l1.2-1.3,1.3-3.2v-2.6l-2.9-3.5h-1.2l-.9-1.1.2-1.6-1.7-1.7-2.5-1.3.5-.6,45.9-2.8v4.6l3.5,4.6,1.2,4.1,1.6,3.2,4.1,50.2h0Z\"/>\n    <path class=\"cls-2\" d=\"M282.3,429l.3-3,34.4,3.6,31.8,2.6,7.9-99.3h.8l52.6,3.2-1.4,42.7,2.7,1.3,2.5,3,1.5.3,1.1-1,1.2.4,1.4,1,1.1-1.5,2.3,1.7.5,2.9,1.2.7h2.3c0-.1,3.5,1.8,3.5,1.8h2c0-.1,1.4-.5,1.4-.5l2.3,2.2,2-2.3,3.5,1.1,1.9,3h2.3c0-.1-.7,2-.7,2l2.3,1.1,3-2.6,2.6,1.7,1.3-.5v1.5c.1,0,1.8,1.2,1.8,1.2l2.3-2.5,1.2.7-.3,2,1,1.8,1.2-.8,2.5-4.2,1.8,2,2,.5,2.1-.7,2,1.8h1.2c0-.1,1.3,1.1,1.3,1.1l3.6-.9.6-1.7,3.7-.3,1.6.7,5-2.5.6,1.5,5.1-.3.5-1.6,2.2.9,4.6,3.8,6.4,1.9,2.6,2.3,2.8-1.3,3.2.8.2,11.9.5,19.9.7,3.4,2.6,2.8.7,5.4,3.8,4.6.8,4.3h1v7.3l-3.4,6.4,1.3,2.3-1.3,1.5.7,3v4.3l-2.3,3.5v.8l-1.8,1.2,1,1.8,1.2,1.1-3.5.3-8.4,3.9-3.5,1.4-1.8,1.8-.7-.5,2.1-2.3,1.8-.7.5-.9h-2.9c0-.1-.7-.9-.7-.9l.8-2-.9-1.8h-.6l-2.4,1.3-1.9,2.6.3,1.7,3.3,3.4,1.3.3v.8l-2.3,1.6-4.9,4-4,3.9-3.2,1.4-5,3-3.7,2-4.5,1.9-4.1,2.5,3.2-3v-1.1l.6-.8-.2-1.8h-1.5c0-.1-1.1,1.4-1.1,1.4l-2.6,1.3-1.8-1.2-.3-1.7h-1.5l.8,2.2,1.4.7,1.2.9,1.8,1.6-.7.8-3.9,1.7h-1.7l-1.2-1.1-.5,2.1.5,1.1-2.7,2-1.5.2-.8.7-.4,1.7-1.8,3.3-1.6.7-1.6-.6-1.8,1.1.3,1.4,1.3.8,1,.8-1.8,3.5-.3,2.8-1,1.7-1.4,1-2.9.4,1.8.6,1.9-.6-.4,3.2h-1.1l.2,1.1.3,1.4-1.3.9v3.1l1.6,1.4.6,3.1-.4,2.2-1,.4.4,1.5,1.1.4.8,1.7v2.6l1.1,2.1,2.2,2.6v.7c-.1,0-2.3-.2-2.3-.2l-1.6,1.4.2,1.4-.9-.3-1.4-.2-3.4-3.7-2.3-.6h-7.1l-2.8-.8-3.6-3-1.7-1h-2.1l-3.2-2.5-5.4-1.6v-1.3l-1.4-1.8-.9-4.7-1.1-1.7-1.7-1.4v-1.6l-1.4-.6.6-2.6-.3-2.2-1.3-1.4.7-3-.8-3.2-1.7-1.4h-1.1l-4-3.5v-1.9c.1,0-.7-1.7-.7-1.7l-.8-.2-.9-2.4-2-1.6-2.9-2.5-.2-2.1-1-.7.2-1.6.5-.7-1.4-1.5v-.7c.1,0-1.9-2.2-1.9-2.2v-2.1c.1,0-2.6-4.9-2.6-4.9v-1.7c-.1,0-1.9-3.1-1.9-3.1l-5.1-4.8v-1.1l-3.3-1.7v-1.8c-.1,0-1.3-.4-1.3-.4v-.7l-.8-.2-2.1-2.8h-.8l-.7-.6-1.3,1.1h-2.2l-2.6-1.1h-4.6l-4.2-2.1-1.3,1.9-2.2-.6-3.3,1.2-1.7,2.8-2,3.2-1.1,4.4-1.4,1.2h-1.1c0,.1-.9,1.7-.9,1.7l-1.3.6v1.8c-.1,0-3,.1-3,.1l-1.8-1.5h-1l-2-2.9-3.6-.5-1.7-2.3-1.3-.2-2.1-.8-3.4-3.4.2-.8-1.6-1.2h-1c0-.1-3.4-3.2-3.4-3.2v-2c-.1,0-2.4-4-2.4-4l.2-1.6-.7-1.3.8-1.5v-2.4c-.1,0-2.7-4.1-2.7-4.1l-.6-4.2-1.6-1.6v-1l-1.2-.2-.7-1.1-2.4-1.7h-.9c0-.1-1.9-1.7-1.9-1.7v-1.1l-2.9-1.8-.6-2.1-2.6-2.3-3.2-4.4-3-1.3-2.1-1.8.2-1.2-1.3-1.4-1.7-3.7-2.4-1-2-2.2h0ZM457.2,567.3h.8l-.6-4.7-3.5-12.3-.2-8.1,4.9-10.5,6.1-8.2,7.2-5.1v-.7h-.8l-2.6,1-3.6,2.3-.7,1.5-8.2,11.6-2.8,7.9v8.8l3.6,12,.4,4.5h0Z\"/>\n    <path class=\"cls-2\" d=\"M233.2,217.9l3.3-21.9-47.9-8.2-21,109,46.2,8.2,40,6,11.5-88.3-32.1-4.8h0Z\"/>\n    <path class=\"cls-2\" d=\"M611,144l-2.9.8.2,2.3-2.4,3.4-.2,3.1.6.7.8-.7.5-1.6,2-1.1,1.6-4.2,3.5-1.1.8-3.3.7-.9.4-2.1,1.8-1.1v-1.5l1-.9h1.4v2.1h-1c0,.1.5,1.3.5,1.3l-.7,2.2h-.6c0,.1-1.2,4.6-1.2,4.6l-.7.5-2.8,7.2-.3,4.2.6,2v1.3l-2.3,1.9.3,1.9-.9,3.1.3,1.6.4,3.7-1.1,4.1-1.5,5,1,1.5-.3.3.8,1.7-.5,1.1,1.1.9v2.7l1.3,1.5-.4,3,.3,4-45.9,2.8-1.3-2.8-3.3-.7-2.7-1.5-2-5.5v-2.5l1.7-3.3-.6-1.1-2.1-1.6-.2-2.6-1.1-4.5-.2-3-2.2-3-2.8-.7-5.2-3.6-.6-3.3-6.3-3.1-.2-1.3h-3.3l-2.2-2.6-2-1.3.7-5.1-.9-1.6.5-5.4,1-1.8-.3-2.7-1.2-1.3-1.8-.3v-1.7l2.8-5.8,5.9-3.9-.4-13,.9.4.6-.5v-1.1l1-.6,1.4,1.2h3.3l6.8-2.6.3-1h1.2l.7-1.2.4.8,1.8-.9,1.8-1.7.3.5,1-1,2.2,1.6-.8,1.6-1.2,1.4.5,1.5-1.4,1.6.4.9,2.3-1.1v-1.4l3.3,1.9,1.9.7,1.9.7,3,3.8,17,3.8,1.4,1,4,.8.7.5,2.8-.2,4.9.8,1.4,1.5-1,1,.8.8,3.8.7,1.2,1.2v4.4l-1.2,2.8h2c0,.1,1-.7,1-.7l.9.8-1.1,3.1,1,1.6,1.2.3-.3,3h0ZM561.5,106.7h-.5l-1.5,1.7.2.5,1.5-.6v-.6l.9-.3-.6-.7h0ZM563.1,105.6l-1,.3-.2.7h.9l.3-1ZM561.8,104l-.2.9h1.7l.6-.4v-1l-2.1.5ZM564.6,101l-.3,1.9,1.2-.5v-1.4h-.9ZM622.9,132.9l-2,.3-.4,1.3,1.3,1.7,1.1-3.3h0Z\"/>\n  </g>\n  <g id=\"Layer_5\" data-name=\"Layer 5\">\n    <polygon class=\"cls-1\" points=\"87.9 347.2 73 373.1 102.8 373.1 87.9 347.2\"/>\n    <polygon class=\"cls-1\" points=\"221.5 224.4 206.6 250.2 236.4 250.2 221.5 224.4\"/>\n    <polygon class=\"cls-1\" points=\"445.6 476.3 430.7 502.1 460.5 502.1 445.6 476.3\"/>\n    <polygon class=\"cls-1\" points=\"603.1 159.2 588.2 185 618 185 603.1 159.2\"/>\n    <polygon class=\"cls-1\" points=\"453.2 406.5 438.3 432.3 468.1 432.3 453.2 406.5\"/>\n    <polygon class=\"cls-1\" points=\"613.1 218.9 598.2 244.7 628 244.7 613.1 218.9\"/>\n    <polygon class=\"cls-1\" points=\"755.4 414.4 740.5 440.2 770.3 440.2 755.4 414.4\"/>\n  </g>\n</svg>";

const chapmanLogo = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 122.3 122.3\">\n  <polygon fill=\"currentcolor\" points=\"56.8 63 0 119.7 0 63 56.8 63\" />\n  <polygon fill=\"currentcolor\" points=\"0 59.3 0 2.6 56.8 59.3 0 59.3\" />\n  <polygon fill=\"currentcolor\" points=\"119.7 0 63 56.8 63 0 119.7 0\" />\n  <polygon fill=\"currentcolor\" points=\"59.3 56.8 2.6 0 59.3 0 59.3 56.8\" />\n  <polygon fill=\"currentcolor\" points=\"65.5 59.3 122.3 2.6 122.3 59.3 65.5 59.3\" />\n  <polygon fill=\"currentcolor\" points=\"122.3 63 122.3 119.7 65.5 63 122.3 63\" />\n  <polygon fill=\"currentcolor\" points=\"59.3 65.5 2.6 122.3 59.3 122.3 59.3 65.5\" />\n  <polygon fill=\"currentcolor\" points=\"63 65.5 63 122.3 119.7 122.3 63 65.5\" />\n</svg>";

const scadLogo = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 247.8 248.3\">\n  <path fill=\"currentcolor\"\n    d=\"M124.5,33.9c1.3,0,0-4.7-2-14-2.7,9.3-3.3,14-2.7,14h4.7ZM121.9,53.9l-8,.7-12,8c-17.3,9.3-29.9,18.6-37.9,29.3l-5.3,6c14-10,34.6-15.3,63.2-15.3s23.3,3.3,37.2,8.7c12,4.7,20,9.3,24.6,13.3l-4.7-6c-11.3-14-24.6-25.3-40.6-35.9l-10.6-8-6-.7h0Z\" />\n  <path fill=\"currentcolor\"\n    d=\"M120.6,87.1c-28.6.7-49.9,6-63.9,16-6.7,5.3-10,10-10,14l.7,2.7c3.3-8.7,12.6-15.3,27.3-20.6,14.6-5.3,29.9-7.3,45.9-6.6,14,0,27.9,3.3,40.6,8.7,14,5.3,23.3,12.6,29.9,20.6-.7-4-1.3-7.3-2.7-8.7-8.6-8-19.3-14.6-32.6-19.3-12-4-23.3-6.7-35.3-6.7h0Z\" />\n  <path fill=\"currentcolor\"\n    d=\"M52.7,142.3l6.7.7v8l-6,6v13.3l3.3-2.7c3.4-2.2,7.3-3.5,11.3-4l10,1.3,10-6.6,13.3-3.3c10.6-.7,18,2,23.3,6.7,4.7-5.3,12-7.3,21.3-6.7,7.3.7,14,3.3,19.3,8.7l-2.7-19.3-3.3-3.3v-9.3l9.3-4,7.3,2c-10-10-27.9-16-53.9-16.6-19.3-.7-34.6,2-47.2,8-12,5.3-19.3,12-21.9,21.3h0ZM121.9,134.3c3.3,0,4.7,1.3,4.7,4s-1.3,4.7-4.7,4.7-4-1.3-4-4.7,1.3-4,4-4ZM80.6,147.7c-2.7,0-3.3-1.3-3.3-3.3s.7-4,3.3-4,3.3,1.3,3.3,4-1.3,3.3-3.3,3.3Z\" />\n  <g>\n    <path fill=\"currentcolor\"\n      d=\"M180.4,127.7l10.6,2.7-2.7-5.3c-13.3-16.6-35.3-25.3-66.5-27.9h0s-33.9,3.3-33.9,3.3c-9.3,2-17.3,4.7-22.6,7.3-4,2-8,4.7-11.3,8.6-4.7,5.3-6.7,9.3-6,14,0,4,.7,5.3,2,3.3,6.7-8.7,14-14.6,22.6-18.6,16-6,31.9-9.3,49.2-8,27.3,1.3,47.2,8,58.5,20.6Z\" />\n    <polygon fill=\"currentcolor\"\n      points=\"127.9 49.9 125.2 43.9 124.5 38.6 119.9 38.6 119.9 38.6 118.6 40.6 117.9 43.9 115.2 49.9 121.9 49.2 127.9 49.9\" />\n    <polygon fill=\"currentcolor\" points=\"118.6 210.2 130.5 210.2 130.5 196.2 117.9 196.2 118.6 210.2\" />\n    <path fill=\"currentcolor\"\n      d=\"M212,36.3C187.4,11.8,158.6-.2,123.9-.2S60.3,11.8,35.8,36.3C12,60.1,0,89.5,0,123.7h0c0,34.5,11.7,63.3,35.8,88,0,0,0,0,0,0,25.2,24.5,54,36.4,88,36.4s62.8-11.9,88-36.4c0,0,0,0,0,0,24.1-24.8,35.8-53.5,35.8-88s-12-63.7-35.8-87.4ZM90.1,235.2l.5-17.7-7.3-3.3-12,2,.4,11.7c-1.7-.9-3.4-1.8-5.1-2.8v-9.6l-14.6-4-1.9,2c-.6-.5-1.2-1-1.8-1.5l3.8-3.8,2.7-12,1.3-3.3,2.7-2.7,3.3-.7h2.7l3.3,2,2,2.7,1.3,4,12.3-2.6,8.3,3.9.6,36.3c-.8-.2-1.6-.4-2.4-.7ZM112.6,239.4c-5.7-.5-11.2-1.4-16.6-2.7v-14.6h16.6v17.3ZM112.6,217.5h-16.6v-21.9c0-4,3.3-6,8.7-5.3,4.7,0,7.3,2,7.3,6l.7,5.3v16ZM169.1,143v4.7h0l7.3-2,57.9,13.8c-.7,2.4-1.5,4.7-2.4,7l-54.1-14.8-8,2.7h0v6l8.6-2,51.3,13.5c-.6,1.3-1.2,2.7-1.9,4l-46.7-12.8h0v37.2h1.3c7.3-18.6,18.6-26.6,33.9-22.6,3.5,1,6.6,2,8.8,3.3-.5.9-1,1.7-1.5,2.6-2.5-2.1-5.8-3.4-9.9-3.9-13.3-3.3-22.6,4-28.6,21.9h0s14.6,4,14.6,4l.7-5.3c2.7-4.7,6-6.6,10-6,1.8.4,3.5.7,4.8,1.3-.4.5-.8,1-1.3,1.6-1.5-.6-3.2-.9-4.9-.9l-6,4.7,6-.7,1.5.9c-1.4,1.6-2.9,3.2-4.5,4.8-1.9,1.8-3.8,3.6-5.7,5.2v-3l-30.6-4.7-4-2-10.6,3.3.7,13.3,9.3-2,5.3,1.3,18.7,2.5c-.8.5-1.6,1.1-2.4,1.6l-10.3-2.1-5.3.7-6-1.3v13.8c-.7.3-1.3.5-2,.8v-14.6l-8,2v15.1c-.7.2-1.3.3-2,.5v-34.3l4-.7v-.3c-.1,0,6-1.7,6-1.7v-4.7l-2-4-4-5.3-4.7-2.7-6-.7c-2.7,0-5.3,1.3-8,4l10.6,1.3,5.3,6.7.4,2.1-3.7,1.9v23.9l-20-6v-3.3h-12.6v23.3l12.6.7v-15.6l19.3,5.6v10.3c-8.5,1.9-17.3,2.9-26.6,2.9s-4.9,0-7.3-.2v-37.5h0c.6-4.1-.1-8.3-2-12h0c-1-3-2.4-5.3-4.7-6.7-2.7-2.6-6-3.3-9.3-3.3l-7.3,1.3c-1.8,1.1-3.7,2.4-5.2,3.8l.5-1.2c4-4,8.7-6.7,14-6,4.7,0,8.7,2,11.3,6l2,4,1.3,6h13.3l2-4.7,2-3.3,2.7-2.7,3.3-2,3.3-1.3h6l4.7,1.3,4,2.7,2.7,2.7,2,3.3,1.3,2,1.3,3.3v4l4,2,8.6-2v-36.6l-8,3.3v8.7c-6-8.7-14-13.3-23.9-14-7.3-.7-14,2-21.3,8.6-6-6-14-8.6-24.6-8.6-9.3.7-17.3,4.7-25.3,12.6-3.3-2.7-7.3-3.3-12-2.7-6,1.3-10.6,6-14.6,13.3v-8.6h0s-8.7-.7-8.7-.7v29.3c-.9-1-1.8-1.9-2.7-2.9v-25.1l-11.8,9.5c-1-1.5-1.9-3-2.7-4.5l15.2-11,10,1.3v-5.3l-10.6-2-17,12.2c-.8-1.6-1.6-3.2-2.3-4.8l18-12.8,10.6,2h0v-5.3l4-4.7v-4.7l-16.6-.7-20.4,14.7c-3.6-11.4-5.4-23.6-5.4-36.6h0c0-32,11.2-59.4,33.4-81.5C64.6,19.3,91.5,8.1,123.9,8.1s59.3,11.1,82.2,34c22.1,22.1,33.4,49.6,33.4,81.5s-.8,16.7-2.3,24.5l-62.7-15.2-7.3,2.7v5.3l2,2Z\" />\n    <polygon fill=\"currentcolor\" points=\"71.3 200.2 71.3 213.5 84 210.8 90 214.2 90.6 201.5 83.3 198.2 71.3 200.2\" />\n    <path fill=\"currentcolor\"\n      d=\"M64.7,204.9c-.7,1.3-.7,3.3-.7,4.7l3.3,1.3.7-7.3.7-2.7v-3.3l-2.7,2c-.7,2-1.3,3.3-1.3,5.3Z\" />\n  </g>\n</svg>";

const $$Astro = createAstro("https://rewferguson.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "Robert Ferguson: Software Engineer"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "id": "hero", "title": "Robert Ferguson", "tagline": "Software Engineer" }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Hello. I build projects for the web. I've worked in all aspects of design and development since 2006, and my focus
      at the moment is using TypeScript and React to provide accessible and performant user experiences.
` })}` })} ${renderComponent($$result2, "Content", $$Content, { "id": "about", "columns": 3, "items": [
    {
      icon: "tabler:brand-linkedin",
      callToAction: {
        target: "_blank",
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/rewferguson/"
      }
    },
    {
      icon: "tabler:brand-github",
      callToAction: {
        target: "_blank",
        text: "Github",
        href: "https://github.com/rewfergu"
      }
    },
    {
      icon: "tabler:brand-codepen",
      callToAction: {
        target: "_blank",
        text: "Codepen",
        href: "http://codepen.io/rewfergu"
      }
    }
  ], "image": {
    src: meandjack,
    alt: "Colorful Image",
    loading: "eager"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-[hsl(188,52%,57%)] opacity-50 dark:bg-[rgb(88,202,170)]"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h2 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">About me</h2> <p>
I grew up in Southern California and attended Chapman Uiversity where I studied film production. After my
        undergrad I moved to Savannah, Georgia to attend the Savannah College of Art and Design where I earned my MFA in
        Interactive Design. After my graduate degree I started off as a web designer, but soon found that engineering
        suited my personality a lot better. I focus now primarily on front end development and design systems.
</p> <div class="w-96 mx-auto my-12"> ${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`${unescapeHTML(map)}` })} </div> <p>
My careeer has taken me all over the country. Currently we are in Appleton, Wisconsin. My wife and I have one
        son and two dogs that keep us busy. We love the Great Lakes region and spend a lot of time outdoors.
</p> <p>If you're curious to dive deeper into my work, you can follow me:</p> ` })}` })} ${renderComponent($$result2, "TechCards", $$TechCards, {})} ${renderComponent($$result2, "WorkHistory", $$WorkHistory, {})} ${renderComponent($$result2, "Steps", $$Steps, { "id": "resume", "title": "Education", "classes": { container: "max-w-3xl" } }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Step", $$Step, { "title": "Master of Fine Arts in Interactive Design", "company": "Savannah College of Art and Design", "dates": "2003 - 2006", "logo": scadLogo }, { "default": ($$result4) => renderTemplate`
I studied interactive design at SCAD with a focus on nonlinear storytelling. This was the golden age of Flash and
      I was able to learn a lot about animation, interactivity, and design. I also studied game design and development a
      bit, using 3d Studio Max, Maya and the Unreal engine to make some simple games.
` })} ${renderComponent($$result3, "Step", $$Step, { "title": "Bachelor of Fine Arts in Film Production", "company": "Chapman University", "dates": "1997 - 2002", "logo": chapmanLogo }, { "default": ($$result4) => renderTemplate`
I originally studied film production with the intention of eventually becomming a filmmaker. I still love film. It
      didn't take all that long to realize the business of making films was no place for me, so I started looking at
      post production, effects, and animation. It was when I made my first project in Macromedia Director that I
      realized how much I enjoyed interactivity and nonlinear storytelling.
` })} ` })} ` })}`;
}, "/Users/robertferguson/Projects/rewferguson/src/pages/index.astro", void 0);

const $$file = "/Users/robertferguson/Projects/rewferguson/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
                    __proto__: null,
                    default: $$Index,
                    file: $$file,
                    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image$1 as $, _404 as _, ____slug_$1 as a, ____slug_ as b, index as i };