const heronGuess = new Proxy({"src":"/_astro/heron-guess.CisyQs9Y.png","width":972,"height":1652,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/heron-guess.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/heron-guess.png");
							return target[name];
						}
					});

export { heronGuess as default };
