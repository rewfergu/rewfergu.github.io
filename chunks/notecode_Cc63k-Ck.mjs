const notecode = new Proxy({"src":"/_astro/notecode.DTCCygDT.png","width":2880,"height":1120,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Notecode/notecode.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Notecode/notecode.png");
							return target[name];
						}
					});

export { notecode as default };
