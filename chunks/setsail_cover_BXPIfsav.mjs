const setsail_cover = new Proxy({"src":"/_astro/setsail_cover.CRr1ANHa.png","width":2520,"height":774,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/SetSail/setsail_cover.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/SetSail/setsail_cover.png");
							return target[name];
						}
					});

export { setsail_cover as default };
