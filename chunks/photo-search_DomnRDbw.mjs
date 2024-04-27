import { _ as __astro_tag_component__, F as Fragment, w as createVNode } from './astro_Qw7etMx4.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_wt7wRGu0.mjs';
import { $ as $$Image } from './prerender_BE4taKZw.mjs';
import 'clsx';

const frontmatter = {
  "name": "Photo Search",
  "status": 2,
  "priority": 8,
  "featured": true,
  "cover": {
    "src": "~/assets/images/projects/photo-search/cover.png",
    "alt": "screenshot of main photo search screen with title and camera button"
  },
  "tags": ["python", "flask", "opencv"],
  "images": [{
    "src": "~/assets/images/projects/photo-search/img_2173.png",
    "alt": "mobile screenshot showing home screen with title and camera button"
  }, {
    "src": "~/assets/images/projects/photo-search/img_2174.png",
    "alt": "mobile screenshot showing the take picture interaction"
  }, {
    "src": "~/assets/images/projects/photo-search/img_2175.png",
    "alt": "the results screen after a successful match"
  }],
  "video": ["https://youtu.be/zJCTS6EI4sQ"],
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
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Now that I have a family, I thought it would be a great idea to put more family photos around. As I was collecting photos, I realized I don\u2019t know a lot about the poeple in some of these older ones, and as the years march on it\u2019s possible I could find myself in a situation where I dont have access to this information. So it\u2019s not just a matter of saving photos, but saving as much of the story as I can as well."
    }), "\n", createVNode(_components.p, {
      children: "Since I am a web developer, my first idea was to create a web project, and I wanted a way to search the photo database using only the photo as a query parameter. By storing the photos in a searchable database, I can use a mobile snapshot of the framed picture on the wall to search for info about it. That photo goes to my server where it uses a matching algorithm to match the photo request and provide any relavant info from the database."
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
const url = "src/content/work/photo-search.mdx";
const file = "/Users/robertferguson/Projects/rewferguson/src/content/work/photo-search.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/robertferguson/Projects/rewferguson/src/content/work/photo-search.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
