const header = new Proxy({"src":"/_astro/header.BR13Q5SY.png","width":480,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Photo-Scramble/header.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Photo-Scramble/header.png");
							return target[name];
						}
					});

export { header as default };
