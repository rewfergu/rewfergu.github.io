const header = new Proxy({"src":"/_astro/header.C5Z_GFSP.png","width":710,"height":345,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Udacity-Neighborhood-Map-Project/header.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Udacity-Neighborhood-Map-Project/header.png");
							return target[name];
						}
					});

export { header as default };
