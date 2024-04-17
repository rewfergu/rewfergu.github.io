const todoredoLogin = new Proxy({"src":"/_astro/todoredo-login.C5a07TH3.jpg","width":500,"height":889,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/todoredo-login.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/todoredo-login.jpg");
							return target[name];
						}
					});

export { todoredoLogin as default };
