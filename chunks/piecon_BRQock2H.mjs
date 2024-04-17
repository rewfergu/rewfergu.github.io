const piecon = new Proxy({"src":"/_astro/piecon.CR2O5l8U.png","width":384,"height":452,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Budget-Tracker/piecon.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Budget-Tracker/piecon.png");
							return target[name];
						}
					});

export { piecon as default };
