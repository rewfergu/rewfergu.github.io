const mazy = new Proxy({"src":"/_astro/mazy.C6JFnq-O.png","width":3589,"height":3593,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Maze-Game/mazy.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Maze-Game/mazy.png");
							return target[name];
						}
					});

export { mazy as default };
