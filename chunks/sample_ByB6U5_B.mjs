const sample = new Proxy({"src":"/_astro/sample.5Y2LMgBp.png","width":717,"height":293,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Budget-Tracker/sample.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Budget-Tracker/sample.png");
							return target[name];
						}
					});

export { sample as default };
