const todoredo = new Proxy({"src":"/_astro/todoredo.BYFe8Kxx.png","width":856,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/todoredo.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/todoredo.png");
							return target[name];
						}
					});

export { todoredo as default };
