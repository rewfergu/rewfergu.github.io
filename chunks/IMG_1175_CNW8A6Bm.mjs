const IMG_1175 = new Proxy({"src":"/_astro/IMG_1175.1_iGZCHK.jpg","width":1050,"height":1008,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/IMG_1175.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/IMG_1175.jpg");
							return target[name];
						}
					});

export { IMG_1175 as default };
