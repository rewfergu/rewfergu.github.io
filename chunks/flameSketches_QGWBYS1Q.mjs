const flameSketches = new Proxy({"src":"/_astro/flameSketches.CMVwahGT.jpeg","width":549,"height":322,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/flameSketches.jpeg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/flameSketches.jpeg");
							return target[name];
						}
					});

export { flameSketches as default };
