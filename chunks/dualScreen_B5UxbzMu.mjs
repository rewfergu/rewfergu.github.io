const dualScreen = new Proxy({"src":"/_astro/dualScreen.4tUMOfi8.png","width":800,"height":557,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/dualScreen.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/dualScreen.png");
							return target[name];
						}
					});

export { dualScreen as default };
