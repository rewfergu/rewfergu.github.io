import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_Ce1GPVeZ.mjs';
import 'clsx';

const frontmatter = {
  "name": "Notecode",
  "status": 1,
  "priority": 7,
  "featured": true,
  "cover": {
    "src": "~/assets/images/projects/Notecode/notecode.png",
    "alt": "notecode screenshot"
  },
  "tags": ["codemirror", "react", "mongo", "jest"],
  "github": "https://github.com/rewfergu/notecode",
  "link": "https://notecode-c3469.firebaseapp.com/",
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
    children: "A note taking app build on react, mongo and CodeMirror"
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
const url = "src/content/work/notecode.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/notecode.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/notecode.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
