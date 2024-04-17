const spiritedAway = new Proxy({"src":"/_astro/spiritedAway.BR0geoAh.jpg","width":1024,"height":368,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Frame-Squeezer/spiritedAway.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Frame-Squeezer/spiritedAway.jpg");
							return target[name];
						}
					});

export { spiritedAway as default };
