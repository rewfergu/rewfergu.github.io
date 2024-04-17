const IMG_0644 = new Proxy({"src":"/_astro/IMG_0644.DgML9TUK.jpg","width":1049,"height":647,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/DynamiCat/IMG_0644.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/DynamiCat/IMG_0644.jpg");
							return target[name];
						}
					});

export { IMG_0644 as default };
