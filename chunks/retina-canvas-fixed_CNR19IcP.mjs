const retinaCanvasFixed = new Proxy({"src":"/_astro/retina-canvas-fixed.DePmw1ja.png","width":642,"height":440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Budget-Tracker/retina-canvas-fixed.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Budget-Tracker/retina-canvas-fixed.png");
							return target[name];
						}
					});

export { retinaCanvasFixed as default };
