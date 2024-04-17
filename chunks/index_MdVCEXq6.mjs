const id = "its-alive/index.mdx";
						const collection = "words";
						const slug = "its-alive";
						const body = "import { Image } from 'astro:assets';\nimport AstroLogo from './astro-icon-light-gradient.svg'\nimport OldSite from './old-next-site.png'\n\n## After 5 years or so I'm finally ready to update this thing.\n\nI've had the same site pretty much untouched for a few years. There was always something more important to do. When I finally dusted it off the old version of Next.js didn't even run. So much was different and the static output functions I had weren't available anymore. A lot happened to Next in 5 years.\n\nI did eventually get it all updated and refactored, but it wasn't any fun and I was already tired of everything by the time I made some trivial updates and got it published to my domain again.\n\n<Image src={OldSite} alt=\"screenshot from the old next js version of the about page\" />\n\n### Astro for the win\n\nI had never built anything with Astro before, but it was just amazing how fun it was with so little effort. It was like saved all the good parts from glory days of web development and replaced all the lame parts with modern convenience.\n\n<Image src={AstroLogo} alt=\"Astro Logo\" class=\"bg-accent aspect-square w-32 p-8 text-white rounded-md shadow-md mx-auto\" />\n\nI am hooked.\n";
						const data = {name:"It's Alive!",date:new Date(1713225600000),tags:["astro","next"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/robertferguson/Projects/rewferguson/src/content/words/its-alive/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
