const logoMin = new Proxy({"src":"/_astro/logo-min.BdXQxra-.svg","width":158,"height":117,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/logo-min.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/logo-min.svg");
							return target[name];
						}
					});

export { logoMin as default };
