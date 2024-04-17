import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>An online version of the hangman game with user authentication, single player and real time multiplayer capabilities.</p>";

				const frontmatter = {"name":"Hangman","status":2,"cover":{"src":"~/assets/images/projects/hangman/hangman.png","alt":"Hangman"},"github":"https://github.com/rewfergu/hangman","readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/hangman.md";
				const url = undefined;
				function rawContent() {
					return "\nAn online version of the hangman game with user authentication, single player and real time multiplayer capabilities.\n";
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
