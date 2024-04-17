import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_Ce1GPVeZ.mjs';
import 'clsx';

const frontmatter = {
  "name": "Sail UI",
  "status": 2,
  "priority": 1,
  "featured": true,
  "cover": {
    "src": "~/assets/images/projects/Sail-UI/sailui-cover.png",
    "alt": "The Sail UI component library chromatic menu"
  },
  "tags": ["react", "fluent", "griffel", "storybook", "chromatic", "nivo"],
  "images": [{
    "src": "~/assets/images/projects/Sail-UI/sailui-activity-widget.png",
    "alt": "the Sail UI component library"
  }, {
    "src": "~/assets/images/projects/Sail-UI/sailui-activity-widget2.png",
    "alt": "the Sail UI component library"
  }, {
    "src": "~/assets/images/projects/Sail-UI/sailui-progress-stat.png",
    "alt": "the Sail UI component library"
  }, {
    "src": "~/assets/images/projects/Sail-UI/sailui-progress-stat2.png",
    "alt": "the Sail UI component library"
  }, {
    "src": "~/assets/images/projects/Sail-UI/sailui-wavebar.png",
    "alt": "the Sail UI component library"
  }, {
    "src": "~/assets/images/projects/Sail-UI/sailui-widget-chat.png",
    "alt": "the Sail UI component library"
  }, {
    "src": "~/assets/images/projects/Sail-UI/sailui-widget-chat2.png",
    "alt": "the Sail UI component library"
  }, {
    "src": "~/assets/images/projects/Sail-UI/sailui-chromatic.png",
    "alt": "the Sail UI component library"
  }],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "react-component-library-for-setsail",
    "text": "React component library for SetSail"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "react-component-library-for-setsail",
      children: "React component library for SetSail"
    }), "\n", createVNode(_components.p, {
      children: "The first thing that I was asked to do when joining SetSail was create a unified set of UI compopnents for the team to use. Sail UI enabled the team to quickly build out new features and maintain a consistent look and feel across the application. The library was built in React and styled with Fluent UI. We used Storybook to document the components and Chromatic to test them. We also used Nivo to create the charts and graphs."
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
const url = "src/content/work/sail-ui.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/sail-ui.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/sail-ui.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
