import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"finally-a-note-taking-application-flexible-enough-to-fit\">Finally a note taking application flexible enough to fit</h2>\n<p>I’m replacing NoteCode with Obsidian</p>";

				const frontmatter = {"name":"Trying Obsidian","tags":["Obsidian","productivity"],"readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/obsidian.md";
				const url = undefined;
				function rawContent() {
					return "\n## Finally a note taking application flexible enough to fit\n\nI'm replacing NoteCode with Obsidian\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"finally-a-note-taking-application-flexible-enough-to-fit","text":"Finally a note taking application flexible enough to fit"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
