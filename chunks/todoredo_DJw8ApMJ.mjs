import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_Ce1GPVeZ.mjs';
import 'clsx';

const frontmatter = {
  "name": "TodoRedo",
  "status": 1,
  "priority": 9,
  "featured": true,
  "cover": {
    "src": "~/assets/images/projects/TodoRedo/todoredo2.png",
    "alt": "todoredo screenshot"
  },
  "tags": ["react", "firebase", "javascript"],
  "github": "https://github.com/rewfergu/todoredo",
  "link": "https://todoredo.firebaseapp.com",
  "images": [{
    "src": "~/assets/images/projects/TodoRedo/todoredo.firebaseapp.com_.png",
    "alt": "image"
  }, {
    "src": "~/assets/images/projects/TodoRedo/todoredo.firebaseapp.com_1.png",
    "alt": "image"
  }, {
    "src": "~/assets/images/projects/TodoRedo/todoredo.firebaseapp.com_2.png",
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
    children: "A simple todo list built in React and Firebase. I\u2019ve never made one, so I wanted to try one as a test. The only aspect of this app that I haven\u2019t seen anywhere else is I wanted a daily list that would reset itself each day. I have items that I would like to check off each day, and the next morning be presented with a fresh list."
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
const url = "src/content/work/todoredo.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/todoredo.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/todoredo.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
