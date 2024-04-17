const header = new Proxy({"src":"/_astro/header.DUtP4pTT.gif","width":495,"height":213,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/header.gif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/header.gif");
							return target[name];
						}
					});

export { header as default };
