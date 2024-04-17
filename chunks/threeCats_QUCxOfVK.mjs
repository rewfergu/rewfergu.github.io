const threeCats = new Proxy({"src":"/_astro/threeCats.C7_UE8he.png","width":402,"height":206,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/DynamiCat/threeCats.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/DynamiCat/threeCats.png");
							return target[name];
						}
					});

export { threeCats as default };
