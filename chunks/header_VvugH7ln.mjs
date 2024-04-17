const header = new Proxy({"src":"/_astro/header.Bm_X6GUs.svg","width":809,"height":369,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Timer/header.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Timer/header.svg");
							return target[name];
						}
					});

export { header as default };
