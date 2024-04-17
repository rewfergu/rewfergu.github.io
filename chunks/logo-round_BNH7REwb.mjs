const logoRound = new Proxy({"src":"/_astro/logo-round.BaQcAnC6.svg","width":224,"height":225,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/logo-round.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/logo-round.svg");
							return target[name];
						}
					});

export { logoRound as default };
