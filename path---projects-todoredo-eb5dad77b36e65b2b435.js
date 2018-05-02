webpackJsonp([0xa55cf3bac855],{551:function(e,t){e.exports={data:{siteJson:{name:"TodoRedo",folder:"todoredo",status:1,image:"https://s3.amazonaws.com/rewferguson.com/img/TodoRedo/todoredo2.png",description:"A simple todo list built in React and Firebase. I’ve never made one, so I wanted to try one as a test. The only aspect of this app that I haven’t seen anywhere else is I wanted a daily list that would reset itself each day. I have items that I would like to check off each day, and the next morning be presented with a fresh list.",tags:["react","firebase","javascript"],github:"https://github.com/rewfergu/todoredo",link:"https://todoredo.firebaseapp.com"},projectCategory:{edges:[{node:{name:"Drawing Game",folder:"drawing-game",status:1,image:null,description:"A mobile game where you are presented with parts of a design, and you use drawing tools to complete the image.",tags:["javascript","svg","canvas","processing","p5"],github:"",link:null}},{node:{name:"Flip Draw",folder:"flipdraw",status:1,image:"https://s3.amazonaws.com/rewferguson.com/img/flipDraw/header.png",description:"Simple two player drawing and guessing game using JavaScript.  One player has a blank drawing canvas and the other player has scrambled letter tiles.  As the first player draws the second player guesses the drawing by assembling the tiles.",tags:["svg","paperjs","canvas","firebase","javascript","jquery","jquery ui","mobile"],github:"https://github.com/rewfergu/flipDraw",link:""}},{node:{name:"The Frank Tank",folder:"franktank",status:1,image:null,description:"YouTube player application that curates sports videos and allows users to comment on and favorite time based segments.",tags:null,github:"https://github.com/rubber-duckies/the-frank-tank",link:null}},{node:{name:"Notecode",folder:"notecode",status:1,image:"https://s3.amazonaws.com/rewferguson.com/img/Notecode/notecode.png",description:"A note taking app build on react, mongo and CodeMirror",tags:["codemirror","react","mongo","jest"],github:"https://github.com/rewfergu/notecode",link:"https://notecode-c3469.firebaseapp.com/"}},{node:{name:"SoundDeck",folder:"sounddeck",status:1,image:"https://s3.amazonaws.com/rewferguson.com/img/sounddeck/screenshot_1080.jpg",description:"A community dj app based on the soundcloud api allowing users to enter rooms, curate playlists, and vote on the best tracks.",tags:["react","bootstrap","socket.io","express","node","soundcloud"],github:"https://github.com/SoundlyEnthused/SoundDeck",link:null}},{node:{name:"TodoRedo",folder:"todoredo",status:1,image:"https://s3.amazonaws.com/rewferguson.com/img/TodoRedo/todoredo2.png",description:"A simple todo list built in React and Firebase. I’ve never made one, so I wanted to try one as a test. The only aspect of this app that I haven’t seen anywhere else is I wanted a daily list that would reset itself each day. I have items that I would like to check off each day, and the next morning be presented with a fresh list.",tags:["react","firebase","javascript"],github:"https://github.com/rewfergu/todoredo",link:"https://todoredo.firebaseapp.com"}}]},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Reset Guest Data",date:"11 November 2017"},fields:{slug:"/projects/todoredo/2017-11-11-reset-guest-data/"},excerpt:"There is a guest login option that populates the lists with sample data. In order to keep things tidy the data needs to be reset…",html:'<p><img src="https://s3.amazonaws.com/rewferguson.com/img/TodoRedo/todoredo-login.jpg" alt="TodoRedo Login Screen"></p>\n<p>There is a guest login option that populates the lists with sample data. In order to keep things tidy the data needs to be reset periodically. I\'ve added a cron task on my raspberry pi to reset this data every hour using the firebase cli.</p>'}},{node:{frontmatter:{title:"react animation test",date:"21 February 2016"},fields:{slug:"/projects/todoredo/2016-02-21-react-animation-test/"},excerpt:"I added a react animation test to CodePen. I wanted to test out the possibility of adding GreenSock TweenMax animations to react components…",html:'<p>I added a react animation test to CodePen. I wanted to test out the possibility of adding GreenSock TweenMax animations to react components. So far it seems pretty easy. I added animations during:</p>\n<ul>\n<li>componentDidMount</li>\n<li>componentDidUpdate</li>\n<li>custom function calls</li>\n</ul>\n<p>I referenced the elements using the <em>ref</em> attribute and passing in a custom <em>position</em> prop. I incremented the position prop at render and was able to use it to delay the animation trigger.</p>\n<pre>\n<code class="language-jsx">\nrender() {\n  var _this = this;\n  return (\n    &lt;div className="wrapper"&gt;\n      &lt;Hello /&gt;\n      &lt;button onClick={this.toggleList} ref="listBtn"&gt;Close&lt;/button&gt;\n      &lt;ul ref="list"&gt;\n      {this.props.fish.map(function(item, i) {\n        return &lt;ListItem itemText={item} position={i} visible={_this.state.listExpanded} /&gt;;\n      })}\n      &lt;/ul&gt;\n    &lt;/div&gt;\n  );\n}\n</code>\n</pre>\n<p data-height="600" data-theme-id="21445" data-slug-hash="PZyLMj" data-default-tab="result" data-user="rewfergu" class=\'codepen\'>See the Pen <a href=\'http://codepen.io/rewfergu/pen/PZyLMj/\'>React with GSAP</a> by rewfergu (<a href=\'http://codepen.io/rewfergu\'>@rewfergu</a>) on <a href=\'http://codepen.io\'>CodePen</a>.</p>\n<script async src="//assets.codepen.io/assets/embed/ei.js"></script>'}},{node:{frontmatter:{title:"added react branch",date:"18 February 2016"},fields:{slug:"/projects/todoredo/2016-02-18-added-react-branch/"},excerpt:"I wasn't happy with the UI I had built in Angular or Angular + Ionic, so I started again using react this time. I never really liked using…",html:'<p><img src="https://s3.amazonaws.com/rewferguson.com/img/TodoRedo/react-ui.png" alt="react ui"></p>\n<p>I wasn\'t happy with the UI I had built in Angular or Angular + Ionic, so I started again using react this time. I never really liked using animations in angular and I didn\'t want to keep messing with the old version anyway so starting over didn\'t seem any worse than any of the other options.  </p>\n<p>I started down the PouchDB road, but eventually I did think storing the data in a database was a good idea, and I already had the firebase thing setup so I went back to that. Adding the login back in is never super fun to me, but I got the basics in without that much trouble.</p>\n<p>I still don\'t have any animations yet, but based on some CodePen test I think I can do it with a bit more flexibility. And I\'m starting to get the swing of setting up and nesting react components.</p>\n<p><a href="https://github.com/rewfergu/todoredo/tree/reactfire">react branch on Github</a></p>'}},{node:{frontmatter:{title:"added PouchDB branch",date:"18 February 2016"},fields:{slug:"/projects/todoredo/2016-02-18-added-PouchDB-branch/"},excerpt:"I started thinking about using PouchDB and just using local storage for the todo list data. It works, but not great and there may still be…",html:'<p>I started thinking about using PouchDB and just using local storage for the todo list data. It works, but not great and there may still be an easier way.</p>\n<p><a href="https://github.com/rewfergu/todoredo/tree/pouch">PouchDB branch on GitHub</a></p>\n<p>PouchDB is an offline first data storage library built on CouchDB. The idea is that the data is managed offline and then synced online when you have a connection. To use offline only, just don\'t sync the data.</p>\n<p><a href="http://pouchdb.com/">pouchdb.com</a></p>'}},{node:{frontmatter:{title:"CodePen Demo",date:"23 December 2015"},fields:{slug:"/projects/todoredo/2015-12-23-CodePen-Demo/"},excerpt:"Another version with Bootstrap this time instead of ionic.",html:'<p data-height="622" data-theme-id="21445" data-slug-hash="wawNWN" data-default-tab="result" data-user="rewfergu" class=\'codepen\'>See the Pen <a href=\'http://codepen.io/rewfergu/pen/wawNWN/\'>localstorage todo list</a> by rewfergu (<a href=\'http://codepen.io/rewfergu\'>@rewfergu</a>) on <a href=\'http://codepen.io\'>CodePen</a>.</p>\n<script async src="//assets.codepen.io/assets/embed/ei.js"></script>\n<p>Another version with Bootstrap this time instead of ionic.</p>'}},{node:{frontmatter:{title:"GitHub Repo",date:"23 December 2015"},fields:{slug:"/projects/todoredo/2015-12-23-GitHub-Repo/"},excerpt:"TodoRedo repository on GitHub Created a repository on GitHub for the project and I've started referring to it as TodoRedo, instead of just…",html:'<p><a href="https://github.com/rewfergu/todoredo/">TodoRedo repository on GitHub</a></p>\n<p>Created a repository on GitHub for the project and I\'ve started referring to it as TodoRedo, instead of just Angular Todo List.</p>'}},{node:{frontmatter:{title:"Screenshot",date:"12 February 2015"},fields:{slug:"/projects/todoredo/2015-02-12-screenshot/"},excerpt:"",html:'<figure>\n  <img src="https://s3.amazonaws.com/rewferguson.com/img/TodoRedo/todoredo-screenshot-577x1024.png" alt="Screenshot from my phone running the Angular + Ionic web app" />\n  <figcaption>\n    Screenshot from my phone running the Angular + Ionic web app\n  </figcaption>\n</figure>'}}]}},pathContext:{name:"TodoRedo",folder:"/todoredo/",status:1,image:"https://s3.amazonaws.com/rewferguson.com/img/TodoRedo/todoredo2.png",description:"A simple todo list built in React and Firebase. I’ve never made one, so I wanted to try one as a test. The only aspect of this app that I haven’t seen anywhere else is I wanted a daily list that would reset itself each day. I have items that I would like to check off each day, and the next morning be presented with a fresh list.",tags:["react","firebase","javascript"],github:"https://github.com/rewfergu/todoredo",link:"https://todoredo.firebaseapp.com"}}}});
//# sourceMappingURL=path---projects-todoredo-eb5dad77b36e65b2b435.js.map