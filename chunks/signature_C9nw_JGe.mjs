const signature = new Proxy({"src":"/_astro/signature.DTvpWGWw.png","width":1270,"height":642,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/hangman/signature.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/hangman/signature.png");
							return target[name];
						}
					});

export { signature as default };
