const sailuiWidgetChat = new Proxy({"src":"/_astro/sailui-widget-chat.B5hzDKGe.png","width":2520,"height":1826,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Sail-UI/sailui-widget-chat.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/robertferguson/Projects/rewferguson/src/assets/images/projects/Sail-UI/sailui-widget-chat.png");
							return target[name];
						}
					});

export { sailuiWidgetChat as default };
