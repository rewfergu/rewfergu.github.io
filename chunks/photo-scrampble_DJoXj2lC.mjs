import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A basic photo scramble game. I wanted to design a project in javascript\nthat I could then wrap in PhoneGap and try to access the camera roll to play a\ngame.</p>";

				const frontmatter = {"name":"Photo Scramble","slug":"photo-scramble","status":3,"cover":{"src":"~/assets/images/projects/Photo-Scramble/header.png","alt":"Photo Scramble"},"tags":["javascript","jquery"],"github":"https://github.com/rewfergu/photo-scramble","readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/photo-scrampble.md";
				const url = undefined;
				function rawContent() {
					return "\nA basic photo scramble game. I wanted to design a project in javascript\nthat I could then wrap in PhoneGap and try to access the camera roll to play a\ngame.\n";
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
