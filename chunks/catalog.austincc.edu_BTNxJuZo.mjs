const catalog_austincc_edu = new Proxy({"src":"/_astro/catalog.austincc.edu.CM8eaI5y.png","width":1165,"height":3540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/ACC-Catalog/catalog.austincc.edu.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/ACC-Catalog/catalog.austincc.edu.png");
							return target[name];
						}
					});

export { catalog_austincc_edu as default };
