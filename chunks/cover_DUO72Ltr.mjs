const cover = new Proxy({"src":"/_astro/cover.CLH1x6AG.jpg","width":1165,"height":1191,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/ACC-Catalog/cover.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/ACC-Catalog/cover.jpg");
							return target[name];
						}
					});

export { cover as default };
