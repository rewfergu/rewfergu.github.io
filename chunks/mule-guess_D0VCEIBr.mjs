const muleGuess = new Proxy({"src":"/_astro/mule-guess.BfekFbsf.png","width":664,"height":1168,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/mule-guess.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/mule-guess.png");
							return target[name];
						}
					});

export { muleGuess as default };
