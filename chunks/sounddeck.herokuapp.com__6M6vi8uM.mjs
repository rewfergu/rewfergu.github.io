const sounddeck_herokuapp_com_ = new Proxy({"src":"/_astro/sounddeck.herokuapp.com_.srd_1H9V.png","width":3168,"height":1291,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/sounddeck/sounddeck.herokuapp.com_.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/sounddeck/sounddeck.herokuapp.com_.png");
							return target[name];
						}
					});

export { sounddeck_herokuapp_com_ as default };
