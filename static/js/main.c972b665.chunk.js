(this.webpackJsonprenoweb=this.webpackJsonprenoweb||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"reduxStore",(function(){return Ye}));var r={};n.r(r),n.d(r,"saveToken",(function(){return S})),n.d(r,"fetchUser",(function(){return N})),n.d(r,"login",(function(){return U})),n.d(r,"logOut",(function(){return I})),n.d(r,"signup",(function(){return L})),n.d(r,"saveUser",(function(){return C}));var s={};n.r(s),n.d(s,"loginUser",(function(){return ce})),n.d(s,"signupUser",(function(){return le})),n.d(s,"fetchUser",(function(){return ue})),n.d(s,"logOut",(function(){return de})),n.d(s,"watchUser",(function(){return pe}));var a=n(0),o=n.n(a),i=n(28),c=n.n(i),l=(n(87),n(29)),u=n(30),d=n(32),p=n(31),h=(n(88),n(33)),m=n(10),g=n(3),b=function(){return Object(g.jsx)("div",{})},j=n(14),f=n(25),x="LOGIN_USER",O="LOG_OUT",v="SAVE_TOKEN",w="FETCH_USER",y="SIGN_UP",A="SAVE_USER",k=Object(j.a)({userId:null,token:sessionStorage.getItem("auth-token"),loggedIn:!1,firstName:"",lastName:"",email:"",displayName:"",address:"",phoneNumber:"",role:""},JSON.parse(sessionStorage.getItem("auth-user")));function S(e){return{type:v,payload:{token:e.token,getUser:e.getUser||!0}}}function N(){return{type:w}}function U(e){return{type:x,payload:e}}function I(){return{type:O}}function L(e){return{type:y,payload:e}}function C(e){return console.log("save user action",e),{type:A,payload:e}}var P=n(19),B=n.n(P),E=n(21),R=n.n(E),T=n(23),G="http://ec2-35-163-200-125.us-west-2.compute.amazonaws.com:8080/api/",W="http://ec2-35-163-200-125.us-west-2.compute.amazonaws.com:8080/api/auth/",H="http://ec2-35-163-200-125.us-west-2.compute.amazonaws.com:8080/oauth2/authorization/google?redirect_uri=http://localhost:8081/login",M="http://ec2-35-163-200-125.us-west-2.compute.amazonaws.com:8080/oauth2/authorization/facebook?redirect_uri=http://localhost:8081/login",V=n(66),q=n.n(V);function D(e){var t=sessionStorage.getItem("auth-token"),n=Object(j.a)({Accept:"application/json","Content-Type":"application/json","x-access-token":t},e);return t&&(n.Authorization="Bearer ".concat(t)),n}function z(e){var t=e.url,n=e.init,r=e.query,s=e.option,a=r?"?".concat(q.a.stringify(r)):"",o="".concat("").concat(t).concat(a);return console.log("fetchUrl",o),R()({url:o,method:n.method,data:s,headers:D(n.headers),timeout:s&&s.timeout?s.timeout:0}).then((function(e){return e})).catch((function(e){e.response&&e.response.status}))}var Y,J={get:function(e,t){return z({url:e,init:{method:"GET"},option:t})},post:function(e,t){return z({url:e,init:{method:"POST"},option:t})},put:function(e,t){return z({url:e,init:{method:"PUT"},option:t})}},F=n(18),K=Object(F.a)(),Q=n(17),Z={userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{userId:null,token:null,loggedIn:!1,firstName:"",lastName:"",email:"",displayName:"",address:"",phoneNumber:"",role:""};case v:case A:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}}},X=n(77),_=B.a.mark(ee),$=B.a.mark(te);function ee(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_)}function te(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([ee(),s.watchUser()]);case 2:case"end":return e.stop()}}),$)}var ne=B.a.mark(ce),re=B.a.mark(le),se=B.a.mark(ue),ae=B.a.mark(pe),oe="auth-token",ie="auth-user";function ce(e){var t,n;return B.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(T.b)(J.post,W+"signin",{email:e.payload.username,password:e.payload.password});case 3:if(t=s.sent,console.log("response fromn login saga",t),!t.data){s.next=12;break}if(!(n=t.data).accessToken){s.next=11;break}return R.a.defaults.headers.common={Authorization:"Bearer ".concat(n.accessToken)},s.next=11,Object(T.c)({type:v,payload:{token:n.accessToken,getUser:!n.user}});case 11:n.user&&(window.sessionStorage.removeItem(ie),window.sessionStorage.setItem(ie,JSON.stringify(n.user)),Y(r.saveUser(n.user)));case 12:s.next=17;break;case 14:s.prev=14,s.t0=s.catch(0),console.log("error login user",s.t0);case 17:case"end":return s.stop()}}),ne,null,[[0,14]])}function le(e){var t,n;return B.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(T.b)(J.post,W+"signup",{displayName:t.displayName,email:t.email,password:t.password,matchingPassword:t.matchingPassword,socialProvider:"LOCAL"});case 4:(n=r.sent).data&&n.data.message&&K.push("/login"),console.log("signupUser response",n),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log("error sign up user",r.t0);case 12:case"end":return r.stop()}}),re,null,[[1,9]])}function ue(e){var t,n,s;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if((t=e.payload.token)&&(window.sessionStorage.removeItem(oe),window.sessionStorage.setItem(oe,t)),!e.payload.getUser){a.next=9;break}return a.next=5,Object(T.b)(J.get,G+"user/me");case 5:n=a.sent,s=Object(j.a)({},n.data),console.log("fetchUser Response",s),s&&(window.sessionStorage.setItem(ie,JSON.stringify(s)),Y(r.saveUser(s)));case 9:case"end":return a.stop()}}),se)}function de(){window.sessionStorage.clear()}function pe(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.d)(x,ce),Object(T.d)(y,le),Object(T.d)(w,ue),Object(T.d)(v,ue),Object(T.d)(O,de)]);case 2:case"end":return e.stop()}}),ae)}var he=function(e){var t=e.name;e.id;return Object(g.jsx)("div",{style:{height:"200px",width:"200px",justifyContent:"center",alignItems:"center",display:"flex",border:"1px solid #000",margin:"10px"},children:t})},me=function(e){var t=e.name;e.id;return Object(g.jsx)("div",{style:{height:"200px",width:"400px",justifyContent:"center",alignItems:"center",display:"flex",border:"1px solid #000",margin:"10px"},children:t})},ge=n(38),be=n(148),je=n(142),fe=n(143),xe=n(144),Oe=n(146),ve=n(140),we=n(15),ye=n(75),Ae=n.n(ye),ke=n(76),Se=n.n(ke),Ne=n(145),Ue=Object(ve.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(ge.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(ge.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(we.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(we.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(ge.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function Ie(e){var t=e.user,n=e.logOut,r=Ue();return Object(g.jsx)("div",{className:r.root,children:Object(g.jsx)(be.a,{position:"static",children:Object(g.jsxs)(je.a,{children:[Object(g.jsx)(fe.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"open drawer",children:Object(g.jsx)(Ae.a,{})}),Object(g.jsx)(xe.a,{className:r.title,variant:"h6",noWrap:!0,onClick:function(){console.log(sessionStorage.getItem("auth-token")),console.log(sessionStorage.getItem("auth-user")),console.log("redux  user",t)},children:"Home Reno"}),Object(g.jsxs)("div",{className:r.search,children:[Object(g.jsx)("div",{className:r.searchIcon,children:Object(g.jsx)(Se.a,{})}),Object(g.jsx)(Oe.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"}})]}),t.token?Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsx)("h2",{children:t.displayName}),Object(g.jsx)(Ne.a,{variant:"contained",color:"primary",onClick:function(){return n()},children:"Logout"})]}):Object(g.jsxs)(o.a.Fragment,{children:[Object(g.jsx)(h.b,{to:"/login",children:Object(g.jsx)(Ne.a,{variant:"contained",color:"primary",children:"Login"})}),Object(g.jsx)(h.b,{to:"/signup",children:Object(g.jsx)(Ne.a,{variant:"contained",color:"primary",children:"signup"})})]})]})})})}var Le=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={categories:["Plumbing","Electric","Painting","Flooring","HVAC","Roofing","Landscaping","Home Cleaning"],contactors:["person 1","person 2","person 3","person 4"]},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.categories,n=e.contactors,r=this.props,s=r.user,a=r.logOut;return Object(g.jsxs)("div",{children:[Object(g.jsx)(Ie,{user:s,logOut:a}),Object(g.jsxs)("div",{style:{padding:"10px"},children:[Object(g.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),Object(g.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:t.map((function(e,t){return Object(g.jsx)(he,{name:e},t)}))}),Object(g.jsx)("p",{children:"Find contractors near you"}),Object(g.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:n.map((function(e,t){return Object(g.jsx)(me,{name:e},t)}))}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"How it works?"}),Object(g.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})]})}}]),n}(o.a.Component),Ce=Object(f.b)((function(e){return console.log(e),{user:e.userState}}),(function(e,t){return Object(j.a)({},Object(Q.b)({logOut:r.logOut},e))}))(Le),Pe=n(36),Be="auth-token",Ee="auth-user",Re={signOut:function(){window.sessionStorage.clear()},saveToken:function(e){window.sessionStorage.removeItem(Be),window.sessionStorage.setItem(Be,e)},getToken:function(){return sessionStorage.getItem(Be)},saveUser:function(e){window.sessionStorage.removeItem(Ee),window.sessionStorage.setItem(Ee,JSON.stringify(e))},getUser:function(){return JSON.parse(sessionStorage.getItem(Ee))}},Te={getPublicContent:function(){return R.a.get(G+"all",{responseType:"text"})},getUserBoard:function(){return R.a.get(G+"user",{responseType:"text"})},getModeratorBoard:function(){return R.a.get(G+"mod",{responseType:"text"})},getAdminBoard:function(){return R.a.get(G+"admin",{responseType:"text"})},getCurrentUser:function(e){return R.a.get(G+"user/me")}},Ge={login:function(e){return R.a.post(W+"signin",{email:e.username,password:e.password})},register:function(e){return R.a.post(W+"signup",{displayName:e.displayName,email:e.email,password:e.password,matchingPassword:e.matchingPassword,socialProvider:"LOCAL"})}},We=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={username:"",password:""},r.errorMessage="error",r.googleURL=H,r.facebookURL=M,r.tokenStorage=Re,r.userService=Te,r.authService=Ge,r.handleSubmit=r.handleSubmit.bind(Object(Pe.a)(r)),r.username=o.a.createRef(),r.password=o.a.createRef(),r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.location.search,t=new URLSearchParams(e).get("token");console.log("token",t);this.props.user.token?this.props.history.push("/home"):t?this.props.saveToken({token:t,getUser:!0}):this.errorMessage=""}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({username:this.username.current.value,password:this.password.current.value},(function(){t.props.login(t.state)}))}},{key:"render",value:function(){this.props.user;return Object(g.jsx)("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#eee"},children:Object(g.jsxs)("form",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"20px",border:"1px solid gray",backgroundColor:"#ffffff"},onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{placeholder:"Username or Email",type:"text",ref:this.username,defaultValue:this.state.username,style:{margin:"10px 0px 10px 0px"}}),Object(g.jsx)("input",{placeholder:"Password",type:"password",ref:this.password,defaultValue:this.state.password,style:{margin:"10px 0px 10px 0px"}}),Object(g.jsx)(Ne.a,{type:"submit",variant:"contained",style:{margin:"10px 0px 10px 0px"},color:"primary",children:"Continue"}),Object(g.jsx)("a",{href:H,children:Object(g.jsx)(Ne.a,{variant:"contained",color:"secondary",style:{margin:"10px 0px 10px 0px"},startIcon:Object(g.jsx)("img",{alt:"Login with Google",style:{height:"30px",width:"30px"},src:"data:image/png;base64,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"}),children:"Gmail"})}),Object(g.jsx)("a",{href:M,children:Object(g.jsx)(Ne.a,{variant:"contained",color:"secondary",style:{margin:"10px 0px 10px 0px"},startIcon:Object(g.jsx)("img",{alt:"Login with Facebook",style:{height:"30px",width:"30px"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/klEQVRoge2aS0sCURTHT6biI7TUsggNQoRyEUQQJCTkyp3RY9mqh7h0XS36AH2ANn2DENtLbtq3KCrKkjCwNLM0RenBBdvVzCEdZ+Z0f9v5c8784HrunRm75jYSvQAQB4AA0CQFAGENcUlousU1xCW/CWiUcR/Sw0WpwUWpoVWyz6DdBE67UTBzcllA1VKcKJOLLvty074Bi1arEbZsEowcimYUI9pj0kFkYTwf8rsdAOBsd31FiDLJvc3Ak9NmdEjVQxHDqClpk7KH7KJr82MlqSVBblG2ZBeDo/pO9JJVdHZyqIqdrK0iq2jI7853qpesU9frsqKm7M39a24/ce5kh4PyW+NPvWQVxSxbJrm6c9Tyvirb0vW4LKjcQTKNC4ogm6jZqEPlsg+Vtgwr/phGDS5KDf6GoR2wLeS36epxWVEdxHKVagOu7l5E60gqur0+lRnuN4+0UiO65BO8nn2sZFa2kqI9VL90S+U6ykH1ohe3zx+YnOpFC6Ua6oioetGzdLEPk1O9KJu6GFQvitlaQO2ilWqjiM1Kuo+eXhdZ/cxP1wz6boPdahB9oC6Uarla/b0mUB/1G2X/YfjEBNvNhNcOu7EZ0aqx3WP09xUh+KGeGlyUGlyUGlyUGlyUGlyUGlyUGlyUGlyUGv9KNKWA+5CaFBMNE5dNAUD4C1qOcQQp43iEAAAAAElFTkSuQmCC"}),children:"Facebook"})})]})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.user.token&&e.history.push("/home"),Object(j.a)({},t)}}]),n}(o.a.Component),He=Object(f.b)((function(e){return console.log(e),{user:e.userState}}),(function(e,t){return Object(j.a)({},Object(Q.b)({login:r.login,saveToken:r.saveToken,fetchUser:r.fetchUser},e))}))(We),Me=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={errorMessage:"Error",user:{}},r.displayName=o.a.createRef(),r.password=o.a.createRef(),r.matchingPassword=o.a.createRef(),r.email=o.a.createRef(),r.handleSubmit=r.handleSubmit.bind(Object(Pe.a)(r)),r}return Object(u.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({user:{displayName:this.displayName.current.value,password:this.password.current.value,email:this.email.current.value,matchingPassword:this.matchingPassword.current.value}},(function(){t.props.signup(t.state.user)}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsxs)("div",{className:"card card-container",children:[Object(g.jsxs)("form",{name:"form",onSubmit:this.handleSubmit,noValidate:!0,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"displayName",children:"Display Name"})," ",Object(g.jsx)("input",{type:"text",className:"form-control",name:"displayName",required:!0,ref:this.displayName,minLength:"3",maxLength:"20"}),Object(g.jsxs)("div",{className:"alert-danger",children:[Object(g.jsx)("div",{children:"Display Name is required"}),Object(g.jsx)("div",{children:"Display Name must be at least 3 characters"}),Object(g.jsx)("div",{children:"Display Name must be at most 20 characters"})]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email"})," ",Object(g.jsx)("input",{type:"email",className:"form-control",name:"email",ref:this.email,required:!0}),Object(g.jsxs)("div",{className:"alert-danger",children:[Object(g.jsx)("div",{children:"Email is required"}),Object(g.jsx)("div",{children:"Email must be a valid email address"})]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password"})," ",Object(g.jsx)("input",{type:"password",className:"form-control",name:"password",required:!0,ref:this.password,minLength:"6"}),Object(g.jsxs)("div",{className:"alert-danger",children:[Object(g.jsx)("div",{children:"Password is required"}),Object(g.jsx)("div",{children:"Password must be at least 6 characters"})]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"matchingPassword",children:"Confirm Password"})," ",Object(g.jsx)("input",{type:"password",className:"form-control",name:"matchingPassword",required:!0,ref:this.matchingPassword,minLength:"6"}),Object(g.jsxs)("div",{className:"alert-danger",children:[Object(g.jsx)("div",{children:"Confirm Password is required"}),Object(g.jsx)("div",{children:"Confirm Password must be at least 6 characters"})]})]}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("button",{onClick:this.handleSubmit,children:"Sign Up"})}),Object(g.jsxs)("div",{className:"alert alert-warning",children:["Signup failed! ",Object(g.jsx)("br",{}),this.state.errorMessage]})]}),Object(g.jsx)("div",{className:"alert alert-success",children:"Your registration is successful!"})]})})}}]),n}(o.a.Component),Ve=Object(f.b)(null,(function(e,t){return Object(j.a)({},Object(Q.b)({signup:r.signup},e))}))(Me),qe=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={},r}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(h.a,{basename:"/home",history:K,children:[Object(g.jsx)(b,{}),Object(g.jsxs)(m.d,{children:[Object(g.jsx)(m.b,{exact:!0,path:"/",children:Object(g.jsx)(m.a,{to:"/home"})}),Object(g.jsx)(m.b,{path:"/home",component:Ce}),Object(g.jsx)(m.b,{path:"/login",component:He}),Object(g.jsx)(m.b,{path:"/signup",component:Ve})]})]})}}]),n}(o.a.Component),De=Object(f.b)((function(e){return console.log("app",e),{user:e.userState}}))(qe),ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),a(e),o(e)}))},Ye=function(e){var t=Object(Q.c)(Z),n=Object(X.a)(),r=Object(Q.e)(t,Object(Q.a)(n));return n.run(te),Y=r.dispatch,r.getState(),r}(window.REDUX_INITIAL_DATA);c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(f.a,{store:Ye,children:Object(g.jsx)(De,{})})}),document.getElementById("root")),ze()},87:function(e,t,n){},88:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.c972b665.chunk.js.map