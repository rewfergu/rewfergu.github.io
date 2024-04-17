const KXAN02 = new Proxy({"src":"/_astro/KXAN02.DKcxalmI.jpg","width":1280,"height":720,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/KXAN02.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/KXAN02.jpg");
							return target[name];
						}
					});

export { KXAN02 as default };
