const piCameraWithIpad = new Proxy({"src":"/_astro/piCamera-with-ipad.Bp4JjOX5.jpg","width":2102,"height":1175,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Raspberry-Pi-Video-Camera/piCamera-with-ipad.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Raspberry-Pi-Video-Camera/piCamera-with-ipad.jpg");
							return target[name];
						}
					});

export { piCameraWithIpad as default };
