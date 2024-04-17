const chapman = new Proxy({"src":"/_astro/chapman.B2Yej0wl.svg","width":122,"height":122,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/chapman.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/chapman.svg");
							return target[name];
						}
					});

export { chapman as default };
