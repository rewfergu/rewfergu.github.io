const sailuiWavebar = new Proxy({"src":"/_astro/sailui-wavebar.C8r_1Xrd.png","width":2800,"height":1826,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Sail-UI/sailui-wavebar.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Sail-UI/sailui-wavebar.png");
							return target[name];
						}
					});

export { sailuiWavebar as default };
