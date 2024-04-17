const online_austincc_edu = new Proxy({"src":"/_astro/online.austincc.edu.D4GX0iZ4.png","width":1449,"height":2416,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/ACC-Online/online.austincc.edu.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/ACC-Online/online.austincc.edu.png");
							return target[name];
						}
					});

export { online_austincc_edu as default };
