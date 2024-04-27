import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_BE4taKZw.mjs';
import 'clsx';

const frontmatter = {
  "name": "ACC Online",
  "status": 2,
  "priority": 4,
  "featured": true,
  "cover": {
    "src": "~/assets/images/projects/ACC-Online/cover.jpg",
    "alt": "acc online"
  },
  "tags": ["react", "Gatsby", "WordPress"],
  "link": "https://catalog.austincc.edu",
  "images": [{
    "src": "~/assets/images/projects/ACC-Online/online.austincc.edu.png",
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
    children: "ACC did not have a html based catalog, just a pdf. We put together\na CMS based in WordPress so that content owners could update pages, fed that content\ninto react components through the REST API, and we rendered and archived static\nversions with Gatsby"
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
const url = "src/content/work/acc-online.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/acc-online.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/acc-online.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
