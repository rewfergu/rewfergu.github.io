const FaceTest = new Proxy({"src":"/_astro/FaceTest.6QOYvWTL.svg","width":347,"height":390,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Drawing-Game/FaceTest.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Drawing-Game/FaceTest.svg");
							return target[name];
						}
					});

export { FaceTest as default };
