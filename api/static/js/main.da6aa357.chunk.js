(this["webpackJsonpfont-quiz"]=this["webpackJsonpfont-quiz"]||[]).push([[0],{143:function(e,t,a){e.exports=a(300)},148:function(e,t,a){},149:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=(a(148),a(149),a(21)),o=a(22),l=a(25),u=a(24),m=a(72),d=(a(33),a(303)),h=a(304),p=a(301),v=(a(107),a(32)),f=a(302),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.props.addData({id:e.target.value,number:n.props.item.number,question:n.props.item.question},"ADD").then((function(){console.log(n.props.data.sort((function(e,t){return e.number>t.number?1:-1})))})),n.setState({value:e.target.value})},n.state={value:"None"},n}return Object(o.a)(a,[{key:"render",value:function(){var e={display:"block",height:"30px",lineHeight:"30px"},t=this.state.value;this.props.form.getFieldDecorator;return r.a.createElement("div",{className:"container question"},r.a.createElement("center",null,r.a.createElement("h4",null,"Question ",this.props.index,"/",this.props.total)),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header mt-2"},r.a.createElement("h5",null,this.props.item.question))),r.a.createElement(f.a.Group,{onChange:this.onChange,value:t},this.props.item.answers.map((function(t,a){var n=t.id,c=t.answer;return r.a.createElement("strong",null,r.a.createElement(f.a,{style:e,value:n,key:a+n+c},c))}))))}}]),a}(r.a.Component),E=p.a.create({})(b),y=Object(v.b)((function(e){return{data:e.data}}),(function(e){return{addData:function(t){return new Promise((function(a){e({type:"ADD",payload:t}),a()}))}}}))(E),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={current:0},n}return Object(o.a)(a,[{key:"getScore",value:function(){var e=this.props.data,t=this.props.questions,a=0;return t.forEach((function(t){e.forEach((function(e){t.number===e.number&&t.correct===e.id&&a++}))})),a}},{key:"render",value:function(){var e=this.props.questions;return r.a.createElement("div",{id:"container"},r.a.createElement("center",null,r.a.createElement("h4",{className:"tittle"},"Results"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,this.getScore(),"/",e.length)))))}}]),a}(n.Component),q=p.a.create({})(g),O=Object(v.b)((function(e){return{data:e.data}}))(q),j=a(139),w=a.n(j),N={get_questions:"http://localhost:8000/api/quiz/",submit:"http://locahost:8000/api/quiz/submit"},k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={current:0,visble:!1,infos:[],questions:[],quiz_name:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.get(N.get_questions+document.getElementById("quiz_id").value).then((function(t){e.arrangeQuestions(t.data.quiz,t.data.max,t.data.name)}))}},{key:"arrangeQuestions",value:function(e,t,a){var n=[];e.forEach((function(e){var t=[{id:"A",answer:e.A},{id:"B",answer:e.B},{id:"C",answer:e.C},{id:"D",answer:e.D}],a={number:e.number,question:e.question,correct:e.correct,answers:t};n.push(a)})),Array.prototype.shuffle=function(){for(var e,t=this.length;t;){var a=[this[e=Math.random()*t-->>>0],this[t]];this[t]=a[0],this[e]=a[1]}return this},n.shuffle();for(var r=[],c=t<e.length?t:e.length,i=0;i<c;i++)r.push(n[i]);this.setState({questions:r,quiz_name:a})}},{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e})}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"render",value:function(){var e=this,t=(d.a.Step,this.state.current),a=[];return this.state.questions.map((function(t,n){a.push({title:"Step x",content:r.a.createElement(y,{form:e.props.form,item:t,index:n+1,total:e.state.questions.length})})})),a.push({title:"Step 4",content:r.a.createElement(O,{form:this.props.form,questions:this.state.questions})}),r.a.createElement("div",{className:"steps"},r.a.createElement("center",null,r.a.createElement("h3",null,this.state.quiz_name)),a.map((function(t,a){var n=t.title,c=t.content;return r.a.createElement("div",{key:n+a,className:a===e.state.current?"foo fade-in":"foo"},c)})),r.a.createElement("div",{className:"steps-action"},t>0&&r.a.createElement(h.a,{style:{marginLeft:8},onClick:function(){return e.prev()},className:"but"},"Previous"),t<a.length-2&&r.a.createElement(h.a,{type:"primary",onClick:function(){return e.next()},id:"suivant",className:"but"},"Next"),t===a.length-2&&r.a.createElement(h.a,{type:"primary",onClick:function(){return e.next()},id:"suivant",className:"but"},"Finish"),t===a.length-1&&r.a.createElement(h.a,{style:{marginRight:8},type:"primary",onClick:function(){return e.getAllData()},id:"suivant",className:"but"},"Sumit")))}}]),a}(r.a.Component),D=p.a.create({})(k),C=Object(v.b)((function(e){return{data:e.data}}),(function(e){return{addData:function(t){return new Promise((function(a){e({type:"ADD",payload:t}),a()}))}}}))(D),x=(r.a.Component,a(299),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-faded",id:"nav"}),r.a.createElement("div",{id:"reserve_title"}),r.a.createElement("div",{className:"row head1"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"row",id:"top_row"},r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"row"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{id:"main_form"},r.a.createElement(C,null))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"row",id:"top_row"},r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"row"}))))}}]),a}(n.Component)),S=x;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(70),z=a(53),A=a(76),I={data:[],chosenIds:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":var a=e.chosenIds.indexOf(t.payload.question)>-1,n=e.data.slice();return a?(n=n.filter((function(e){return e.question!==t.payload.question})),Object(A.a)({},e,{data:[].concat(Object(z.a)(n),[t.payload])})):Object(A.a)({},e,{data:[].concat(Object(z.a)(e.data),[t.payload]),chosenIds:[].concat(Object(z.a)(e.chosenIds),[t.payload.question])});case"UPDATE":return Object(A.a)({},e,{data:Object(z.a)(t.payload)});default:return e}},P=Object(_.b)(B);i.a.render(r.a.createElement(v.a,{store:P},r.a.createElement(S,null)),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.da6aa357.chunk.js.map