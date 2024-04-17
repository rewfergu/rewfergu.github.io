const Rob = new Proxy({"src":"/_astro/Rob.Dv53B8bD.jpg","width":1568,"height":1788,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/Rob.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/Rob.jpg");
							return target[name];
						}
					});

export { Rob as default };
