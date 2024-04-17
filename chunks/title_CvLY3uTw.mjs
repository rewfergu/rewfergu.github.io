const title = new Proxy({"src":"/_astro/title.vKRGwz4u.svg","width":500,"height":313,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/title.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/title.svg");
							return target[name];
						}
					});

export { title as default };
