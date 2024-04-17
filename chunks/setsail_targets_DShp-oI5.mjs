const setsail_targets = new Proxy({"src":"/_astro/setsail_targets.C6lW71K-.png","width":2520,"height":1826,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/SetSail/setsail_targets.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/SetSail/setsail_targets.png");
							return target[name];
						}
					});

export { setsail_targets as default };
