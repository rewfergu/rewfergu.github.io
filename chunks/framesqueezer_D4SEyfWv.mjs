import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I really liked the movie barcode images on Tumblr, and I’ve been trying to figure out a way to approximate that type of image using Processing.</p>";

				const frontmatter = {"name":"Frame Squeezer","status":3,"cover":{"src":"~/assets/images/projects/Frame-Squeezer/output.png","alt":"Frame Squeezer output"},"tags":["processing"],"github":"https://github.com/rewfergu/frameSqueezer","readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/framesqueezer.md";
				const url = undefined;
				function rawContent() {
					return "\nI really liked the movie barcode images on Tumblr, and I’ve been trying to figure out a way to approximate that type of image using Processing.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
