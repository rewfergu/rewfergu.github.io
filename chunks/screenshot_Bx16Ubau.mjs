const screenshot = new Proxy({"src":"/_astro/screenshot.DalROn9Y.png","width":2068,"height":1898,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Notecode/screenshot.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Notecode/screenshot.png");
							return target[name];
						}
					});

export { screenshot as default };
