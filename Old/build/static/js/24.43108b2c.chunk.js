(this.webpackJsonpmitesh=this.webpackJsonpmitesh||[]).push([[24],{298:function(t,e,n){"use strict";n.r(e);var a=n(32),r=n(33),s=n(35),i=n(34),l=n(0),o=n.n(l),c=n(9),u=n.n(c),d=n(4),h=Object(d.a)((function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,52))})),m=Object(d.a)((function(){return n.e(17).then(n.bind(null,610))})),p=Object(d.a)((function(){return n.e(16).then(n.bind(null,611))})),f=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={count:4,result:[],test:[],showCard:!1,score:0,highScore:0},r}return Object(r.a)(n,[{key:"findCommonElement",value:function(t,e){return t.sort().toString()===e.sort().toString()}},{key:"componentDidMount",value:function(){this.setCode()}},{key:"setCode",value:function(){for(var t=this,e=[];e.length<this.state.count;){var n=Math.floor(Math.random()*(this.state.count*this.state.count))+1;-1===e.indexOf(n)&&e.push(n)}this.setState({result:e,showCard:!1}),setTimeout((function(){t.setState({result:[],test:e})}),700)}},{key:"renderBox",value:function(){var t=this,e=new Array(this.state.count).fill(this.state.count),n=Array.from(Array(this.state.count*this.state.count),(function(t,e){return e+1}));return e.map((function(a,r){return o.a.createElement("div",{className:"row",key:r},e.map((function(e,a){return o.a.createElement("div",{onClick:function(){var e=t.state.result.includes(n[t.state.count*r+a])?t.state.result.filter((function(e){return e!==n[t.state.count*r+a]})):t.state.result.concat(n[t.state.count*r+a]);return t.state.result.includes(n[t.state.count*r+a]),t.setState({result:e,showCard:!0})},key:a,style:{borderRadius:15,background:t.state.result.includes(n[t.state.count*r+a])?"Green":"#FAA9F4",border:"5px solid #ff033e",minHeight:(t.props.windowWidth>1100?400:200)/t.state.count,minWidth:(t.props.windowWidth>1100?400:200)/t.state.count}})})))}))}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"container-fluid",style:{marginTop:70,height:"75vh",overflowY:"scroll"}},o.a.createElement(h,null),o.a.createElement("div",{className:"row",style:{margin:"auto"}},o.a.createElement("div",{className:"col-sm-12 col-xl-12 col-lg-12 col-md-12",style:{margin:"auto"}},o.a.createElement("div",{style:{border:"2px solid #7ef0ff",borderRadius:10,marginTop:50}},o.a.createElement("div",{className:"row",style:{marginTop:30,marginBottom:30}},o.a.createElement("div",{className:"col-sm-12 col-lg-4"},o.a.createElement("label",{style:{color:"aqua",padding:20}},"The game is just to test your short term memory, Colored boxes light up in a specific pattern. After displaying the pattern, the player must repeat the pattern by clicking the boxes in the same order. every successful completion, the pattern gets longer. If a player selects the wrong pattern the game ends.")),o.a.createElement("div",{className:"col-sm-12 col-lg-4"},o.a.createElement("div",{style:{height:this.props.windowWidth>1100?400:200,width:this.props.windowWidth>1100?400:"100%",display:"flex",justifyContent:"center"}},o.a.createElement("div",null,this.state.showCard&&this.state.result.length>=this.state.test.length&&0!==this.state.result.length&&0!==this.state.test.length?this.findCommonElement(this.state.result,this.state.test)?o.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"center",width:this.props.windowWidth>1100?400:200,marginLeft:-15,background:"black",opacity:.9,height:this.props.windowWidth>1100?400:200,flexDirection:"column",alignItems:"center"}},o.a.createElement("div",{style:{color:"aqua",textAlign:"center"},onClick:function(){return t.setState({result:[],count:t.state.count+1,highScore:t.state.score+10*t.state.count>=t.state.highScore?t.state.score+10*t.state.count:t.state.highScore,score:t.state.score+10*t.state.count},(function(){return t.setCode()}))}},o.a.createElement("label",{style:{fontSize:40}},"Great!"),o.a.createElement("br",null),o.a.createElement("label",{style:{fontSize:30}},"Next"))):o.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"center",width:this.props.windowWidth>1100?400:200,marginLeft:-15,background:"black",opacity:.9,height:this.props.windowWidth>1100?400:200,flexDirection:"column",alignItems:"center"}},o.a.createElement("div",{style:{color:"aqua",textAlign:"center"},onClick:function(){return t.setState({result:[],count:4,test:[],showCard:!1,highScore:t.state.score>t.state.highScore?t.state.score:t.state.highScore,score:0},(function(){return t.setCode()}))}},o.a.createElement("label",{style:{fontSize:30}},"Game Over"))):null,this.renderBox()))),o.a.createElement("div",{className:"col-sm-12 col-lg-4"},o.a.createElement("div",{style:{textAlign:"center",marginTop:30,display:"flex",justifyContent:"center"}},o.a.createElement("div",{style:{padding:"10px 20px",textAlign:"center",color:"aqua",width:200,border:"2px solid",borderRadius:20},onClick:function(){return t.setCode()}},"Start")),o.a.createElement("div",{style:{textAlign:"center",marginTop:30,display:"flex",justifyContent:"center"}},o.a.createElement("div",{style:{padding:"10px 20px",fontSize:22,textAlign:"center",color:"aqua"}},"Score")),o.a.createElement("div",{style:{textAlign:"center",display:"flex",justifyContent:"center"}},o.a.createElement("div",{style:{padding:"10px 20px",fontSize:22,textAlign:"center",color:"aqua"}},this.state.score)),o.a.createElement("div",{style:{textAlign:"center",marginTop:30,display:"flex",justifyContent:"center"}},o.a.createElement("div",{style:{padding:"10px 20px",fontSize:22,textAlign:"center",color:"aqua"}},"High Score")),o.a.createElement("div",{style:{textAlign:"center",display:"flex",justifyContent:"center"}},o.a.createElement("div",{style:{padding:"10px 20px",fontSize:22,textAlign:"center",color:"aqua"}},this.state.highScore))))),o.a.createElement(p,null),o.a.createElement(m,null))))}}]),n}(l.Component);e.default=u()(f)}}]);