const photoScramble = new Proxy({"src":"/_astro/photoScramble.loJDjCkA.png","width":818,"height":990,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Photo-Scramble/photoScramble.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Photo-Scramble/photoScramble.png");
							return target[name];
						}
					});

export { photoScramble as default };
