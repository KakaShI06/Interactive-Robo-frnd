(this["webpackJsonprobo-frnd-app"]=this["webpackJsonprobo-frnd-app"]||[]).push([[0],{15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),i=n(8),s=n.n(i),c=(n(13),n(2)),o=n(3),l=n(4),h=n(6),m=n(5),u=n(0);var d=function(e){return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(e.id,"?size=200x200"),alt:"Robots"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("p",{children:e.email})]})]})};var b=function(e){var a=e.robots,n=a.map((function(e,n){return Object(u.jsx)(d,{id:a[n].id,name:a[n].name,email:a[n].email},n)}));return Object(u.jsxs)("div",{children:[n,";"]})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],p=function(e){Object(h.a)(n,e);var a=Object(m.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"tc",children:Object(u.jsx)("input",{type:"text",placeholder:"Robot",onChange:this.props.searchChange})})}}]),n}(r.a.Component),O=function(e){Object(h.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=a.call(this)).state={robot:j,Searchfield:" "},e.onSearchChange=e.onSearchChange.bind(Object(l.a)(e)),e}return Object(o.a)(n,[{key:"onSearchChange",value:function(e){this.setState({Searchfield:e.target.value})}},{key:"render",value:function(){var e=this,a=this.state.robot.filter((function(a){return a.name.toLowerCase().includes(e.state.Searchfield.toLowerCase())}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"tc",children:"RoboFriend"}),Object(u.jsx)(p,{searchChange:this.onSearchChange}),Object(u.jsx)(b,{robots:a})]})}}]),n}(r.a.Component);n(15);s.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.51443f5d.chunk.js.map