const output = new Proxy({"src":"/_astro/output.RVIdH12V.png","width":764,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Frame-Squeezer/output.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Frame-Squeezer/output.png");
							return target[name];
						}
					});

export { output as default };
