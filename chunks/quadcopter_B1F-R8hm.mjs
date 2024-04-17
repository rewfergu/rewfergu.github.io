import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I’m trying to build a quadcopter, and learning about each piece as I go.</p>";

				const frontmatter = {"name":"Quadcopter","status":2,"cover":{"src":"~/assets/images/projects/Quadcopter/header.svg","alt":"Quadcopter"},"tags":["arduino","node","raspberry pi","johnny five"],"readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/quadcopter.md";
				const url = undefined;
				function rawContent() {
					return "\nI'm trying to build a quadcopter, and learning about each piece as I go.\n";
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
