const arc = new Proxy({"src":"/_astro/arc.DIHjEstS.svg","width":35,"height":162,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/arc.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/arc.svg");
							return target[name];
						}
					});

export { arc as default };
