const sketch = new Proxy({"src":"/_astro/sketch.DLirD9Gq.jpg","width":402,"height":535,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/sketch.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Weather-Lamp/sketch.jpg");
							return target[name];
						}
					});

export { sketch as default };
