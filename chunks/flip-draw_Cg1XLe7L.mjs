import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_BE4taKZw.mjs';
import 'clsx';

const frontmatter = {
  "name": "Flip Draw",
  "status": 1,
  "priority": 5,
  "featured": true,
  "cover": {
    "src": "~/assets/images/projects/flipDraw/header.png",
    "alt": "flipdraw screenshot"
  },
  "tags": ["svg", "paperjs", "canvas", "firebase", "javascript", "jquery", "jquery ui", "mobile"],
  "github": "https://github.com/rewfergu/flipDraw",
  "images": [{
    "src": "~/assets/images/projects/flipDraw/dualScreen.png",
    "alt": "dual screen view"
  }],
  "video": ["https://youtu.be/FgEt6hTyxCs"],
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "Simple two player drawing and guessing game using JavaScript. One player has a blank drawing canvas and the other player has scrambled letter tiles. As the first player draws the second player guesses the drawing by assembling the tiles."
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
const url = "src/content/work/flip-draw.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/flip-draw.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/flip-draw.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
