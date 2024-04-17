const output = new Proxy({"src":"/_astro/output.DSuPutfT.png","width":300,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/output.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/output.png");
							return target[name];
						}
					});

export { output as default };
