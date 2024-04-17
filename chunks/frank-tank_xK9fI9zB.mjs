import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>YouTube player application that curates sports videos and allows users to comment on and favorite time based segments.</p>";

				const frontmatter = {"name":"The Frank Tank","status":1,"github":"https://github.com/rubber-duckies/the-frank-tank","readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/frank-tank.md";
				const url = undefined;
				function rawContent() {
					return "\nYouTube player application that curates sports videos and allows users to comment on and favorite time based segments.\n";
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
