const cameraFront = new Proxy({"src":"/_astro/cameraFront.DlsPDqRl.jpg","width":3264,"height":2448,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Raspberry-Pi-Video-Camera/cameraFront.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Raspberry-Pi-Video-Camera/cameraFront.jpg");
							return target[name];
						}
					});

export { cameraFront as default };
