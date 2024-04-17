const next = new Proxy({"src":"/_astro/next.wDISTP9j.svg","width":394,"height":394,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/icons/next.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/icons/next.svg");
							return target[name];
						}
					});

export { next as default };
