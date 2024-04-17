const twoFace = new Proxy({"src":"/_astro/twoFace.DaZ9t4dW.png","width":1262,"height":1402,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Drawing-Game/twoFace.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Drawing-Game/twoFace.png");
							return target[name];
						}
					});

export { twoFace as default };
