(this["webpackJsonpgraph-visualizer"]=this["webpackJsonpgraph-visualizer"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=(t(13),t(5)),s=t(6),d=t(7),u=t(2),l=(t(14),t(1)),f=t.n(l),h=function e(){return Object(u.a)(this,e),f.a.Bodies.circle(960,540,30,{restitution:.5,label:"XD"})},v=function e(n,t){return Object(u.a)(this,e),f.a.Constraint.create({bodyA:n,bodyB:t,restitution:.97,length:100,stiffness:.01,render:{lineWidth:.5}})},w=function(e){Object(d.a)(t,e);var n=Object(s.a)(t);function t(e){var r;return Object(u.a)(this,t),(r=n.call(this,e)).state={},r}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=f.a.Engine,n=f.a.Render,t=f.a.World,r=f.a.Mouse,a=f.a.MouseConstraint,i=e.create();i.world.gravity.y=0;var o=n.create({element:document.body,engine:i,options:{height:window.innerHeight-4,width:window.innerWidth,wireframes:!1}}),c=r.create(o.canvas),s=a.create(i,{mouse:c,constraint:{stiffness:.2,render:{visible:!1}}});t.add(i.world,s);var d=new h;t.add(i.world,d);for(var u=0;u<10;u++){var l=new h;t.add(i.world,l),t.add(i.world,new v(d,l))}e.run(i),n.run(o)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"})}}]),t}(a.a.Component);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root"))},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.3a59a7cb.chunk.js.map