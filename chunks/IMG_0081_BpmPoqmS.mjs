const IMG_0081 = new Proxy({"src":"/_astro/IMG_0081.BzL3xI4B.jpg","width":2592,"height":1936,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/iPad-Stand/IMG_0081.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/iPad-Stand/IMG_0081.jpg");
							return target[name];
						}
					});

export { IMG_0081 as default };
