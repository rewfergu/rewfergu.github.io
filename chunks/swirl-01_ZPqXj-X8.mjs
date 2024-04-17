const swirl01 = new Proxy({"src":"/_astro/swirl-01.D1ztrff5.svg","width":500,"height":500,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Quadcopter/swirl-01.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Quadcopter/swirl-01.svg");
							return target[name];
						}
					});

export { swirl01 as default };
