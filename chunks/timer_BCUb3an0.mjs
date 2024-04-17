import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Qw7etMx4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"time-boxing-for-fun-and-profit\">Time boxing for fun and profit</h2>\n<p>I have a tendency to get sidetracked.  It’s very easy to get way to in the weeds.</p>\n<p>Its for personal projects really and managing your free time\nManaging free time sounds like hell, but if you want to actually get stuff done its kind of the only way.</p>\n<p>Once you start in on learning something new, you could waste an entire evening on something, and with a family that starts becoming less and less allowable.</p>\n<p>Todo lists kind of work, kind of don’t.  Without the time component to them its just so easy to kick the can or avoid stuff altogether.  I still haven’t painted the upstairs in my house and its been 2 years since we moved in.</p>\n<p>A simple animated timer application written in JavaScript, SVG and the Electron framework.</p>\n<p>To start with I don’t want to see the numbers.  Never tell me the numbers.  I don’t need the added stress.  Going with an svg dial just gives me a general ballpark of the time remaining and that just feels better to me.</p>\n<p>honestly the rotating dial graphic was the only reason I was motivated to build it at all really.  The rest wasn’t that interesting to me.</p>\n<h3 id=\"whats-next\">Whats next</h3>\n<p>What this really needs is a list of timers.  In effect a timed todo list, and when the time runs out I have the option of either extending or auto completing.  With my use case what I really want is “work on x for 1 hour”, so no much “work on x until complete”</p>";

				const frontmatter = {"name":"Timer","status":3,"featured":true,"cover":{"src":"~/assets/images/projects/Timer/header.svg","alt":"Timer header"},"tags":["svg","animation","javascript","electron"],"link":"https://ryj173yr0p.codesandbox.io/","github":"https://github.com/rewfergu/timer","images":[{"src":"~/assets/images/projects/Timer/screenshot.png","alt":"Timer screenshot"},{"src":"~/assets/images/projects/Timer/ryj173yr0p.codesandbox.io\\_.png","alt":"Timer screenshot"}],"readingTime":2};
				const file = "/Users/robertferguson/Projects/rewferguson/src/content/words/timer.md";
				const url = undefined;
				function rawContent() {
					return "## Time boxing for fun and profit\n\nI have a tendency to get sidetracked.  It's very easy to get way to in the weeds.  \n\nIts for personal projects really and managing your free time\nManaging free time sounds like hell, but if you want to actually get stuff done its kind of the only way.  \n\nOnce you start in on learning something new, you could waste an entire evening on something, and with a family that starts becoming less and less allowable.  \n\nTodo lists kind of work, kind of don't.  Without the time component to them its just so easy to kick the can or avoid stuff altogether.  I still haven't painted the upstairs in my house and its been 2 years since we moved in.  \n\nA simple animated timer application written in JavaScript, SVG and the Electron framework.\n\nTo start with I don't want to see the numbers.  Never tell me the numbers.  I don't need the added stress.  Going with an svg dial just gives me a general ballpark of the time remaining and that just feels better to me.  \n\nhonestly the rotating dial graphic was the only reason I was motivated to build it at all really.  The rest wasn't that interesting to me.  \n### Whats next\n\nWhat this really needs is a list of timers.  In effect a timed todo list, and when the time runs out I have the option of either extending or auto completing.  With my use case what I really want is \"work on x for 1 hour\", so no much \"work on x until complete\"\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"time-boxing-for-fun-and-profit","text":"Time boxing for fun and profit"},{"depth":3,"slug":"whats-next","text":"Whats next"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
