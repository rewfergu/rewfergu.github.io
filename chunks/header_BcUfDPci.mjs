const header = new Proxy({"src":"/_astro/header.CDMK0zAi.svg","width":909,"height":500,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/header.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/header.svg");
							return target[name];
						}
					});

export { header as default };
