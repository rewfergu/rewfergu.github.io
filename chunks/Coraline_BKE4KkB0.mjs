const Coraline = new Proxy({"src":"/_astro/Coraline.CBtG0Wyq.jpg","width":1024,"height":368,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Frame-Squeezer/Coraline.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Frame-Squeezer/Coraline.jpg");
							return target[name];
						}
					});

export { Coraline as default };
