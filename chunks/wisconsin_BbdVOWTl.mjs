const wisconsin = new Proxy({"src":"/_astro/wisconsin.CvOcmA73.svg","width":97,"height":97,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/wisconsin.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/wisconsin.svg");
							return target[name];
						}
					});

export { wisconsin as default };
