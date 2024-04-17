const todoredoScreenshot = new Proxy({"src":"/_astro/todoredo-screenshot.yCE-2vpR.png","width":640,"height":1136,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/todoredo-screenshot.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/todoredo-screenshot.png");
							return target[name];
						}
					});

export { todoredoScreenshot as default };
