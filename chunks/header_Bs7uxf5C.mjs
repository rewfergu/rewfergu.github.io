const header = new Proxy({"src":"/_astro/header.BdEfRrX2.png","width":768,"height":264,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Quadcopter/header.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Quadcopter/header.png");
							return target[name];
						}
					});

export { header as default };
