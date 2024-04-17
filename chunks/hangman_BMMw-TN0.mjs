const hangman = new Proxy({"src":"/_astro/hangman.BRo9Jmuk.png","width":1710,"height":752,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/hangman/hangman.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/hangman/hangman.png");
							return target[name];
						}
					});

export { hangman as default };
