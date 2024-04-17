const todoredo2 = new Proxy({"src":"/_astro/todoredo2.x6D8E43z.png","width":2148,"height":762,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/todoredo2.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/todoredo2.png");
							return target[name];
						}
					});

export { todoredo2 as default };
