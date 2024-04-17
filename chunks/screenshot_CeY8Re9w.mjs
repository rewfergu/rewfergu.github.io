const screenshot = new Proxy({"src":"/_astro/screenshot.0KgM8WFH.png","width":2880,"height":1292,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Timer/screenshot.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Timer/screenshot.png");
							return target[name];
						}
					});

export { screenshot as default };
