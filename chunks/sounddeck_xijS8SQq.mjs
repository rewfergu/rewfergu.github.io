import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_hbxzenUl.mjs';
import 'clsx';

const frontmatter = {
  "name": "SoundDeck",
  "status": 1,
  "priority": 6,
  "featured": true,
  "cover": {
    "src": "~/assets/images/projects/sounddeck/screenshot.png",
    "alt": "sounddeck screenshot"
  },
  "tags": ["react", "socket.io", "express", "node", "mongo", "bootstrap", "soundcloud"],
  "github": "https://github.com/SoundlyEnthused/SoundDeck",
  "images": [{
    "src": "~/assets/images/projects/sounddeck/sounddeck.herokuapp.com\\_.png",
    "alt": "image"
  }, {
    "src": "~/assets/images/projects/sounddeck/sounddeck.herokuapp.com_2.png",
    "alt": "image"
  }, {
    "src": "~/assets/images/projects/sounddeck/sounddeck.herokuapp.com_3.png",
    "alt": "image"
  }, {
    "src": "~/assets/images/projects/sounddeck/sounddeck.herokuapp.com_4.png",
    "alt": "image"
  }, {
    "src": "~/assets/images/projects/sounddeck/sounddeck.herokuapp.com_5.png",
    "alt": "image"
  }],
  "video": ["https://youtu.be/r31VnkD1kbM"],
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
    children: "A community dj app based on the soundcloud api allowing users to enter rooms, curate playlists, and vote on the best tracks."
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
const url = "src/content/work/sounddeck.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/sounddeck.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/sounddeck.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
