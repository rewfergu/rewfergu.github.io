const muleDraw = new Proxy({"src":"/_astro/mule-draw.BAhppK6h.png","width":687,"height":1165,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/mule-draw.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/mule-draw.png");
							return target[name];
						}
					});

export { muleDraw as default };
