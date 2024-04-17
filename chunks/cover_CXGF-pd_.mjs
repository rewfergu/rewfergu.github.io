const cover = new Proxy({"src":"/_astro/cover.BcbecOs3.png","width":2008,"height":751,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/photo-search/cover.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/photo-search/cover.png");
							return target[name];
						}
					});

export { cover as default };
