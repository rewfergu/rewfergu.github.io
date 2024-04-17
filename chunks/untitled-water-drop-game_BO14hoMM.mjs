import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A mobile game where the main character is a drop of water. Physical properties like surface tension apply. Enemies are evaporative elements like sun, fires, etc.</p>";

				const frontmatter = {"name":"Untitled Water Drop Game","status":2,"cover":{"src":"~/assets/images/projects/Untitled-Water-Drop-Game/header.gif","alt":"The header image for the Untitled Water Drop Game project"},"tags":["animation","javascript","unity"],"readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/untitled-water-drop-game.md";
				const url = undefined;
				function rawContent() {
					return "\nA mobile game where the main character is a drop of water. Physical properties like surface tension apply. Enemies are evaporative elements like sun, fires, etc.\n";
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
