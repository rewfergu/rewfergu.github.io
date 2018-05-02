webpackJsonp([47492997218774],{522:function(e,t){e.exports={data:{markdownRemark:{html:'<p><video src="https://s3.amazonaws.com/rewferguson.com/img/Quadcopter/react_test.mp4" controls></video></p>\n<p>This is a simple experiment to communicate with servos over a node server.  Node is running an express server with a react ui, communication is then sent back to the server in real time using socket.io, then those instructions are sent to the servos using the Johnny Five framework.</p>\n<p><img src="https://s3.amazonaws.com/rewferguson.com/img/Quadcopter/nodeClaw-ui-01.png" alt="first node claw ui"></p>\n<p>You can use the UI slider to send a message to the servo. The range is 0 to 180 to reflect the degrees of the servos motion.</p>\n<p><a href="https://github.com/rewfergu/nodeClaw">https://github.com/rewfergu/nodeClaw</a></p>',frontmatter:{title:"nodeClaw"}},projectInfo:{edges:[{node:{name:"Quadcopter",folder:"quadcopter",status:2,image:"https://s3.amazonaws.com/rewferguson.com/img/Quadcopter/header.svg",description:"I'm trying to build a quadcopter, and learning about each piece as I go.",tags:["arduino","node","raspberry pi","johnny five"],github:null,link:null}}]},currentProject:{edges:[{node:{frontmatter:{title:"remote controlled web page",date:"25 February 2016"},fields:{slug:"/projects/quadcopter/2016-02-25-remote-controlled-web-page/"},excerpt:"Getting an RC transmitter to talk to a servo is pretty easy. That's what it is made for and it pretty much works out of the box. Getting an…",html:'<p>Getting an RC transmitter to talk to a servo is pretty easy. That\'s what it is made for and it pretty much works out of the box. Getting an RC transmitter to talk to node.js isn\'t really that straightforward.  </p>\n<div class="flex-video"><iframe src="https://drive.google.com/file/d/1yJgTYC08b6wN3c14Y-_b0giQ2Z8pHtCKPw/preview" width="640" height="480"></iframe></div>\n<p>I started by putting a voltmeter on the pins of the rc receiver and I did get a voltage when I moved the stick, but it was very small.</p>\n<ul>\n<li>0.26 at center</li>\n<li>0.35 all the way right</li>\n<li>0.17 all the way left</li>\n</ul>\n<p>If you try using analogRead() with johnny five on those values it doesn\'t really work. Plug a servo into those pins and it works fine though, so somehow they know what to do with the voltage.  I pulled the case off and started poking around with a voltmeter to see if any of the values could be useful to input into the analog pins of the Arduino. It turns out the voltage on two of the pins of the potentiometer were usable! So basically to use the signal coming off the RC transmitter I just needed to use an extra servo as an interpreter.</p>\n<figure>\n  <img src="https://lh3.googleusercontent.com/146mhjTTG3ZoNv707RkN9lAEfaVrn5kUYeT08YYc1a656wkq0g6fwJckLAXOvUWCsb-eFey1iBp4wgROOSfKIhcOlPJhaBkFx5SDpZGMYkxBcBdRfBOtymUppXV_gIGPko1mw_c8sViAAWXg_le-3SQIZXfQMCNq2ENZ1Cz0O7LFemwt2a5q8r8jI_zqDHISsLqnDS1MyKTjFH2lB2QcdUqOlW0TF7bPHSxEN99GPLq4w4afZ4sIKEsNuFUrofRPZAH7A6UMLz8vn4GhHi20zjAYd3DtaNARYiRAM4YhyqJG3PG2O8palx0c66fc1pRegRfAUB8lPjPKBbVxDygw4Ej2w9PGSSx_cuEFXKgb4xgS4aFxB3OSMUgIr-F9wUVEhyHs9TJXtSHlQFsbWibyjhI0T4ceMdRSzjSfg4O0cQrGSOaw3EwAHUi-U5vuOsD4KXosxP5wyVHwDKfsNwBr2qvgnAoBa4DHH-h5n3uWP-qz9ObZ_lVXP0gDNkyLVpnsoa3_55tLxz6JZLjNG0MaBe--cbf1i7CcIsJihgK9uNoqLX4jxk9tzb5r1-kb7ZAB0qWsxw=w1242-h1656-no" alt="the inside of a servo">\n  <figcaption>\n    If I attach wires to two of the contacts on a potentiometer I can get a voltage that johnny five will read via analogRead()\n  </figcaption>\n</figure>\n<p>Using johnny five\'s analogRead function, I was getting useful values.</p>\n<ul>\n<li>214 at center</li>\n<li>307 all the way right</li>\n<li>120 all the way left</li>\n</ul>\n<p>Since I only needed three real states to control the screen, I can group conditional statements to send socket.io messages.</p>'}},{node:{frontmatter:{title:"salvaged RC parts",date:"17 February 2016"},fields:{slug:"/projects/quadcopter/2016-02-17-salvaged-RC-parts/"},excerpt:"I was able to salvage the transmitter, receiver, motor, speed controller, and servos from an old RC plane I found.  Still works. The whole…",html:'<p>I was able to salvage the transmitter, receiver, motor, speed controller, and servos from an old RC plane I found.  Still works. The whole setup is actually much simpler than I imagined.</p>\n<p>It does need lots of batteries, which I don\'t have, so I just pulled a couple AC adapters out of my AC adapter graveyard and wired the transmitter and receiver directly to them. The receiver worked with 5 volts and the transmitter with 12.</p>\n<p><video src="https://s3.amazonaws.com/rewferguson.com/img/Quadcopter/rc_test.mp4" controls></video></p>'}},{node:{frontmatter:{title:"nodeClaw",date:"11 February 2016"},fields:{slug:"/projects/quadcopter/2016-02-11-nodeClaw/"},excerpt:"This is a simple experiment to communicate with servos over a node server.  Node is running an express server with a react ui, communication…",html:'<p><video src="https://s3.amazonaws.com/rewferguson.com/img/Quadcopter/react_test.mp4" controls></video></p>\n<p>This is a simple experiment to communicate with servos over a node server.  Node is running an express server with a react ui, communication is then sent back to the server in real time using socket.io, then those instructions are sent to the servos using the Johnny Five framework.</p>\n<p><img src="https://s3.amazonaws.com/rewferguson.com/img/Quadcopter/nodeClaw-ui-01.png" alt="first node claw ui"></p>\n<p>You can use the UI slider to send a message to the servo. The range is 0 to 180 to reflect the degrees of the servos motion.</p>\n<p><a href="https://github.com/rewfergu/nodeClaw">https://github.com/rewfergu/nodeClaw</a></p>'}}]}},pathContext:{slug:"/projects/quadcopter/2016-02-11-nodeClaw/",folder:"/quadcopter/",folderName:"quadcopter"}}}});
//# sourceMappingURL=path---projects-quadcopter-2016-02-11-node-claw-da30ad4e03496a2d980c.js.map