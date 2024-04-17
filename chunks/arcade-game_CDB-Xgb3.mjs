import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Project 4 for the Udacity Front End Developer Nanodegree program.</p>";

				const frontmatter = {"name":"Udacity Arcade Game Project","status":3,"cover":{"src":"~/assets/images/projects/Udacity-Arcade-Game-projects/screenshot.png","alt":"Udacity Arcade Game Project"},"description":null,"tags":["javascript","animation","canvas"],"github":"https://github.com/rewfergu/udacity-arcade-game","readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/arcade-game.md";
				const url = undefined;
				function rawContent() {
					return "\nProject 4 for the Udacity Front End Developer Nanodegree program.\n";
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
