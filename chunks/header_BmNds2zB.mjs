const header = new Proxy({"src":"/_astro/header.Co7-2sWL.png","width":800,"height":648,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/header.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/flipDraw/header.png");
							return target[name];
						}
					});

export { header as default };
