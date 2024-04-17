const map1 = new Proxy({"src":"/_astro/map-1.BkGVpTVS.png","width":2339,"height":1387,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/map-1.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/map-1.png");
							return target[name];
						}
					});

export { map1 as default };
