const pss_austincc_edu_pstc = new Proxy({"src":"/_astro/pss.austincc.edu_pstc.B9vnK-Wl.png","width":1165,"height":2677,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/iw-wordpress-theme/pss.austincc.edu_pstc.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/iw-wordpress-theme/pss.austincc.edu_pstc.png");
							return target[name];
						}
					});

export { pss_austincc_edu_pstc as default };
