const flameCharacter = new Proxy({"src":"/_astro/flameCharacter.DaucVvmI.gif","width":256,"height":256,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/flameCharacter.gif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/flameCharacter.gif");
							return target[name];
						}
					});

export { flameCharacter as default };
