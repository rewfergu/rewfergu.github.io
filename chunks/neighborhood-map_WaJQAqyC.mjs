import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Project 5 for the Udacity Front End Developer Nanodegree program.</p>";

				const frontmatter = {"name":"Udacity Neighborhood Map Project","status":3,"cover":{"src":"~/assets/images/projects/Udacity-Neighborhood-Map-projects/header.png","alt":"Udacity Neighborhood Map Project"},"tags":["javascript","knockoutjs","requirejs","bootstrap","sass","Google Maps JavaScript API","Google Geocode API","Google Places API","Dark Sky Weather API","Wikipedia API","Foursquare API","Flickr API"],"github":"https://github.com/rewfergu/udacity-neighborhood-map","readingTime":1};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/neighborhood-map.md";
				const url = undefined;
				function rawContent() {
					return "Project 5 for the Udacity Front End Developer Nanodegree program.\n";
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
