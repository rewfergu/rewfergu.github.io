const output = new Proxy({"src":"/_astro/output.BmMX86Lg.png","width":749,"height":375,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Branches/output.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Branches/output.png");
							return target[name];
						}
					});

export { output as default };
