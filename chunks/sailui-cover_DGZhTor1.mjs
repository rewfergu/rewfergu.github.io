const sailuiCover = new Proxy({"src":"/_astro/sailui-cover.DLqnVb8c.png","width":1856,"height":1311,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Sail-UI/sailui-cover.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Sail-UI/sailui-cover.png");
							return target[name];
						}
					});

export { sailuiCover as default };
