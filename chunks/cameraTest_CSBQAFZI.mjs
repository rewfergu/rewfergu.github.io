const cameraTest = new Proxy({"src":"/_astro/cameraTest.BS0WVLZj.jpg","width":2592,"height":1944,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Raspberry-Pi-Video-Camera/cameraTest.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Raspberry-Pi-Video-Camera/cameraTest.jpg");
							return target[name];
						}
					});

export { cameraTest as default };
