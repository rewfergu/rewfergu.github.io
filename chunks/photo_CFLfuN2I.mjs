const photo = new Proxy({"src":"/_astro/photo.B5nNQr3B.png","width":640,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Budget-Tracker/photo.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Budget-Tracker/photo.png");
							return target[name];
						}
					});

export { photo as default };
