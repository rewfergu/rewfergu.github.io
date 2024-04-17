import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I picked an office with no windows, so I’m stuck with artificial light only while I work. I’d like some ambient light provided with RGB LEDs that change their color temperature based on the local weather outside. I’m sure there are lamps that do this, but I would like the light more integrated into my work area. Not one single spot of colored light, but an overall ambient glow. I figure to get this effect I would have to build something myself.</p>";

				const frontmatter = {"name":"Weather Lamp","status":2,"cover":{"src":"projects/Weather-Lamp/header.svg","alt":"Weather Lamp"},"tags":["processing"],"readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/weather-lamp.md";
				const url = undefined;
				function rawContent() {
					return "\nI picked an office with no windows, so I’m stuck with artificial light only while I work. I’d like some ambient light provided with RGB LEDs that change their color temperature based on the local weather outside. I’m sure there are lamps that do this, but I would like the light more integrated into my work area. Not one single spot of colored light, but an overall ambient glow. I figure to get this effect I would have to build something myself.\n";
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
