const screenshot = new Proxy({"src":"/_astro/screenshot._8IGW4F-.png","width":640,"height":259,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Udacity-Arcade-Game-Project/screenshot.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Udacity-Arcade-Game-Project/screenshot.png");
							return target[name];
						}
					});

export { screenshot as default };
