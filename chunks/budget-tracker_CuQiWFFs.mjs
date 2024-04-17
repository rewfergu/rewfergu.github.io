import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_hbxzenUl.mjs';
import 'clsx';

const frontmatter = {
  "name": "Budget Tracker",
  "status": 2,
  "cover": {
    "src": "~/assets/images/projects/Budget-Tracker/sample.png",
    "alt": "budget tracker"
  },
  "tags": ["angular", "firebase", "javascript"],
  "github": "https://github.com/rewfergu/budgetTracker",
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
    children: "A mobile application used to track expenses. Built in AngularJS with a Firebase backend."
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
const url = "src/content/work/budget-tracker.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/budget-tracker.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/budget-tracker.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
