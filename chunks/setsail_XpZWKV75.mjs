import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_aN-lAgGX.mjs';
import 'clsx';

const frontmatter = {
  "name": "SetSail",
  "status": 2,
  "priority": 2,
  "featured": true,
  "cover": {
    "src": "~/assets/images/projects/Sail-UI/sailui-cover.png",
    "alt": "The Sail UI component library chromatic menu"
  },
  "tags": ["react", "fluent", "griffel", "storybook", "chromatic", "nivo"],
  "images": [{
    "src": "~/assets/images/projects/SetSail/setSail_chat.png",
    "alt": "the SetSail chat interface"
  }, {
    "src": "~/assets/images/projects/SetSail/setSail_chat2.png",
    "alt": "the SetSail chat interface"
  }, {
    "src": "~/assets/images/projects/SetSail/setSail_chat3.png",
    "alt": "the SetSail chat interface"
  }, {
    "src": "~/assets/images/projects/SetSail/setSail_notification.png",
    "alt": "the SetSail ssai notification configuration modal"
  }, {
    "src": "~/assets/images/projects/SetSail/setSail_accounts.png",
    "alt": "the SetSail accounts dashboard"
  }, {
    "src": "~/assets/images/projects/SetSail/setsail_targets.png",
    "alt": "the SetSail targets dashboard"
  }, {
    "src": "~/assets/images/projects/SetSail/setSail_deals.png",
    "alt": "the SetSail deals dashboard"
  }, {
    "src": "~/assets/images/projects/SetSail/setSail_signals.png",
    "alt": "the SetSail signals dashboard"
  }],
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "a-sales-data-analytics-application",
    "text": "A sales data analytics application"
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
      id: "a-sales-data-analytics-application",
      children: "A sales data analytics application"
    }), "\n", createVNode(_components.p, {
      children: "SetSail is a sales data analytics application that gives sales teams the tools they need to track their progress and hit their targets. The application is built in React and Node with a Postgres database. We use ChatGPT to provide sales teams with real-time insights and suggestions. The application is hosted on AWS and uses a variety of AWS services to provide a secure and scalable platform."
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
const url = "src/content/work/setsail.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/setsail.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/setsail.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
