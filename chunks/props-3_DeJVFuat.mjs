const props3 = new Proxy({"src":"/_astro/props-3.BquKvhVL.jpeg","width":718,"height":470,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/props-3.jpeg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/props-3.jpeg");
							return target[name];
						}
					});

export { props3 as default };
