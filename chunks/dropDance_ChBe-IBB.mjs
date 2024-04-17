const dropDance = new Proxy({"src":"/_astro/dropDance.Ca2UM-Vf.gif","width":200,"height":200,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/dropDance.gif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/dropDance.gif");
							return target[name];
						}
					});

export { dropDance as default };
