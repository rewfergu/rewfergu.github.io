const props1 = new Proxy({"src":"/_astro/props-1.DU9e8xRR.jpeg","width":700,"height":498,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/props-1.jpeg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Untitled-Water-Drop-Game/props-1.jpeg");
							return target[name];
						}
					});

export { props1 as default };
