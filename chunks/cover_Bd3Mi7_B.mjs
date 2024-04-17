const cover = new Proxy({"src":"/_astro/cover.chRw1jqA.jpg","width":1449,"height":555,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/ACC-Online/cover.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/ACC-Online/cover.jpg");
							return target[name];
						}
					});

export { cover as default };
