const stroke = new Proxy({"src":"/_astro/stroke.BYgddrIs.gif","width":376,"height":694,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/stroke.gif";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/stroke.gif");
							return target[name];
						}
					});

export { stroke as default };
