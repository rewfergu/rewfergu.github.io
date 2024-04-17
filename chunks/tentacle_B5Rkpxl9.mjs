const tentacle = new Proxy({"src":"/_astro/tentacle.Mbzy2x0E.png","width":914,"height":804,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Octopus/tentacle.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Octopus/tentacle.png");
							return target[name];
						}
					});

export { tentacle as default };
