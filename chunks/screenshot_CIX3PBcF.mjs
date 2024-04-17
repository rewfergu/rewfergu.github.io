const screenshot = new Proxy({"src":"/_astro/screenshot.BE2jYiPt.png","width":2578,"height":1310,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/sounddeck/screenshot.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/sounddeck/screenshot.png");
							return target[name];
						}
					});

export { screenshot as default };
