(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(7),c=e.n(r),o=e(2),u=e(3),a=e(5),i=e(4),s=e(1),d=e.n(s),p=(e(12),e(0)),b=function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var t=this,n=this.props.counter;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{children:["Counter:"," ",n]}),Object(p.jsx)("button",{type:"button",onClick:function(){t.props.addOne()},children:"+ 1"}),Object(p.jsx)("button",{type:"button",onClick:function(){t.props.add100()},children:"+ 100"}),Object(p.jsx)("button",{type:"button",onClick:function(){n%5===0?(t.props.addOne(),t.props.add100()):t.props.addOne()},children:"+ 1"})]})}}]),e}(d.a.PureComponent),j=function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(o.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=n.call.apply(n,[this].concat(c))).state={counter:0},t.addOne=function(){return t.setState((function(t){return{counter:t.counter+1}}))},t.add100=function(){return t.setState((function(t){return{counter:t.counter+100}}))},t.increase=function(){},t}return Object(u.a)(e,[{key:"render",value:function(){return Object(p.jsx)(b,{addOne:this.addOne,add100:this.add100,increase:this.increase,counter:this.state.counter})}}]),e}(d.a.Component),O=j;c.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cf73efb2.chunk.js.map