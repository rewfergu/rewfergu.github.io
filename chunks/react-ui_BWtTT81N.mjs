const reactUi = new Proxy({"src":"/_astro/react-ui.Bu8QxsrN.png","width":440,"height":403,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/react-ui.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/TodoRedo/react-ui.png");
							return target[name];
						}
					});

export { reactUi as default };
