const header = new Proxy({"src":"/_astro/header.DKMEHn_S.svg","width":768,"height":264,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Quadcopter/header.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Quadcopter/header.svg");
							return target[name];
						}
					});

export { header as default };
