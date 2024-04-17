const screenshot = new Proxy({"src":"/_astro/screenshot.DYWM8uQn.png","width":1000,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/DynamiCat/screenshot.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/DynamiCat/screenshot.png");
							return target[name];
						}
					});

export { screenshot as default };
