import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_Ce1GPVeZ.mjs';
import 'clsx';

const AstroLogo = new Proxy({"src":"/_astro/astro-icon-light-gradient.DTUX52xl.svg","width":85,"height":107,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/content/words/its-alive/astro-icon-light-gradient.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/content/words/its-alive/astro-icon-light-gradient.svg");
							return target[name];
						}
					});

const OldSite = new Proxy({"src":"/_astro/old-next-site.BLYhF0F_.png","width":1163,"height":1353,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/content/words/its-alive/old-next-site.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/content/words/its-alive/old-next-site.png");
							return target[name];
						}
					});

const frontmatter = {
  "name": "It's Alive!",
  "tags": ["astro", "next"],
  "date": "2024-04-16T00:00:00.000Z",
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "after-5-years-or-so-im-finally-ready-to-update-this-thing",
    "text": "After 5 years or so I\u2019m finally ready to update this thing."
  }, {
    "depth": 3,
    "slug": "astro-for-the-win",
    "text": "Astro for the win"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "after-5-years-or-so-im-finally-ready-to-update-this-thing",
      children: "After 5 years or so I\u2019m finally ready to update this thing."
    }), "\n", createVNode(_components.p, {
      children: "I\u2019ve had the same site pretty much untouched for a few years. There was always something more important to do. When I finally dusted it off the old version of Next.js didn\u2019t even run. So much was different and the static output functions I had weren\u2019t available anymore. A lot happened to Next in 5 years."
    }), "\n", createVNode(_components.p, {
      children: "I did eventually get it all updated and refactored, but it wasn\u2019t any fun and I was already tired of everything by the time I made some trivial updates and got it published to my domain again."
    }), "\n", createVNode($$Image, {
      src: OldSite,
      alt: "screenshot from the old next js version of the about page"
    }), "\n", createVNode(_components.h3, {
      id: "astro-for-the-win",
      children: "Astro for the win"
    }), "\n", createVNode(_components.p, {
      children: "I had never built anything with Astro before, but it was just amazing how fun it was with so little effort. It was like saved all the good parts from glory days of web development and replaced all the lame parts with modern convenience."
    }), "\n", createVNode($$Image, {
      src: AstroLogo,
      alt: "Astro Logo",
      class: "bg-accent aspect-square w-32 p-8 text-white rounded-md shadow-md mx-auto"
    }), "\n", createVNode(_components.p, {
      children: "I am hooked."
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/words/its-alive/index.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/its-alive/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/words/its-alive/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
