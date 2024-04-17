import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Randomly generated artwork created in Processing. Processing takes an SVG file with tiles inside and arranges them on a grid in random order so the white curves connect from tile to tile. For the most part.</p>";

				const frontmatter = {"name":"branches","status":3,"cover":{"src":"~/assets/images/projects/Branches/output.png","alt":"branches screenshot"},"tags":["svg","processing"],"github":"https://github.com/rewfergu/branches","readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/branches.md";
				const url = undefined;
				function rawContent() {
					return "\nRandomly generated artwork created in Processing. Processing takes an SVG file with tiles inside and arranges them on a grid in random order so the white curves connect from tile to tile. For the most part.\n";
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
