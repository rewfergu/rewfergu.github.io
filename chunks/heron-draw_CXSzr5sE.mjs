const heronDraw = new Proxy({"src":"/_astro/heron-draw.DGd4TKff.png","width":966,"height":1642,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/heron-draw.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/heron-draw.png");
							return target[name];
						}
					});

export { heronDraw as default };
