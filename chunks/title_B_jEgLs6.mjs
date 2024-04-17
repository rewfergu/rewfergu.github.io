const title = new Proxy({"src":"/_astro/title.SVzi_tzA.svg","width":500,"height":313,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/icons/title.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/icons/title.svg");
							return target[name];
						}
					});

export { title as default };
