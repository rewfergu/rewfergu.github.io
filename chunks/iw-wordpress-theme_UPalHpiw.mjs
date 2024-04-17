import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_hbxzenUl.mjs';
import 'clsx';

const frontmatter = {
  "name": "Instructional Web WordPress Theme",
  "status": 2,
  "priority": 6,
  "featured": true,
  "cover": {
    "src": "~/assets/images/projects/iw-wordpress-theme/cover.jpg",
    "alt": "iw wordpress theme screenshot"
  },
  "tags": ["WordPress", "php", "javascript", "css", "twig"],
  "images": [{
    "src": "~/assets/images/projects/iw-wordpress-theme/pss.austincc.edu_pstc.png",
    "alt": "image"
  }],
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
    children: "Many of ACCs department sites and instructional projects were based\nin WordPress. Instructional Web needed to develop a base theme so that these projects\nwould benefit from a similar visual language and more closely follow college branding\nand standards. We developed a series of customizable content blocks in Advanced\nCustom Fields that could then be reassembled in the admin to give content owners\nsome control over the presentation and still be within a standard accessible theme."
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
const url = "src/content/work/iw-wordpress-theme.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/iw-wordpress-theme.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/iw-wordpress-theme.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
