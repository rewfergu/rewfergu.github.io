import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A mobile game where you are presented with parts of a design, and you\nuse drawing tools to complete the image.</p>";

				const frontmatter = {"name":"Drawing Game","status":1,"tags":["javascript","svg","canvas","processing","p5"],"github":"","readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/drawing-game.md";
				const url = undefined;
				function rawContent() {
					return "\nA mobile game where you are presented with parts of a design, and you\nuse drawing tools to complete the image.\n";
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
