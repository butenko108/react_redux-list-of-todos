(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{21:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n,s=c(6),a=c.n(s),r=c(3),o=c(13),i=c(5),d=c(10),l=c(11);!function(e){e.SetTodoId="currentTodo/setId",e.RemoveTodoId="currentTodo/removeId"}(n||(n={}));var u,j,b=function(e){return{type:n.SetTodoId,payload:e}},h=function(){return{type:n.RemoveTodoId}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SetTodoId:return t.payload;case n.RemoveTodoId:return null;default:return e}},O=c(2),m=function(e){return{type:"currentUser/SET",payload:e}},x=function(e){return{type:"currentUser/setIsLoading",payload:e}},p={user:null,isLoading:!1},v=m,y=x,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentUser/SET":return Object(O.a)(Object(O.a)({},e),{},{user:t.payload});case"currentUser/REMOVE":return Object(O.a)(Object(O.a)({},e),{},{user:null});case"currentUser/setIsLoading":return Object(O.a)(Object(O.a)({},e),{},{isLoading:t.payload});default:return e}};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(u||(u={})),function(e){e.SetQuery="filter/set_query",e.SetFilter="filter/set_filter"}(j||(j={}));var N,T=function(e){return{type:j.SetQuery,payload:e}},S=function(e){return{type:j.SetFilter,payload:e}},I={query:"",status:u.All},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SetQuery:return Object(O.a)(Object(O.a)({},e),{},{query:t.payload});case j.SetFilter:return Object(O.a)(Object(O.a)({},e),{},{status:t.payload});default:return e}};!function(e){e.SetTodos="todos/set_todos",e.SetIsLoadingTodos="todos/set_isLoadingTodos"}(N||(N={}));var w=function(e){return{type:N.SetTodos,payload:e}},k=function(e){return{type:N.SetIsLoadingTodos,payload:e}},C={todos:[],isLoading:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.SetTodos:return Object(O.a)(Object(O.a)({},e),{},{todos:t.payload});case N.SetIsLoadingTodos:return Object(O.a)(Object(O.a)({},e),{},{isLoading:t.payload});default:return e}},_=Object(i.combineReducers)({currentTodoId:f,filter:L,todos:A,currentUser:g}),E=Object(i.createStore)(_,Object(d.composeWithDevTools)(Object(i.applyMiddleware)(l.a))),U=c(0),q=(c(21),c(22),c(23),c(12)),F=c.n(q),R=function(e){return e.todos},B=function(e){return e.filter},D=function(e){var t=e.todos.todos,c=e.filter,n=c.query,s=c.status;return t.filter((function(e){var t=e.title,c=e.completed,a=t.toLowerCase().includes(n.toLowerCase());switch(s){case u.All:return a;case u.Active:return a&&!c;case u.Completed:return a&&c;default:return a}}))},Q=function(e){return e.todos.todos.find((function(t){return t.id===e.currentTodoId}))},J=function(e){return e.currentUser},M=c(1),P=function(){var e=Object(r.b)(),t=Object(r.c)(Q),c=Object(r.c)(D);return Object(M.jsx)(M.Fragment,{children:c.length>0?Object(M.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"#"}),Object(M.jsx)("th",{children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:"fas fa-check"})})}),Object(M.jsx)("th",{children:"Title"}),Object(M.jsx)("th",{children:" "})]})}),Object(M.jsx)("tbody",{children:c.map((function(c){return Object(M.jsxs)("tr",{"data-cy":"todo",className:F()({"has-background-info-light":(null===t||void 0===t?void 0:t.id)===c.id}),children:[Object(M.jsx)("td",{className:"is-vcentered",children:c.id}),Object(M.jsx)("td",{className:"is-vcentered",children:c.completed&&Object(M.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(M.jsx)("i",{className:"fas fa-check"})})}),Object(M.jsx)("td",{className:"is-vcentered is-expanded",children:Object(M.jsx)("p",{className:c.completed?"has-text-success":"has-text-danger",children:c.title})}),Object(M.jsx)("td",{className:"has-text-right is-vcentered",children:Object(M.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(b(c.id))},children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:(null===t||void 0===t?void 0:t.id)===c.id?"far fa-eye-slash":"far fa-eye"})})})})]},c.id)}))})]}):Object(M.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},V=function(){var e=Object(r.c)(B),t=Object(r.b)();return Object(M.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(M.jsx)("p",{className:"control",children:Object(M.jsx)("span",{className:"select",children:Object(M.jsxs)("select",{"data-cy":"statusSelect",value:e.status,onChange:function(e){return t(S(e.target.value))},children:[Object(M.jsx)("option",{value:u.All,children:"All"}),Object(M.jsx)("option",{value:u.Active,children:"Active"}),Object(M.jsx)("option",{value:u.Completed,children:"Completed"})]})})}),Object(M.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(M.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:e.query,onChange:function(e){return t(T(e.target.value))}}),Object(M.jsx)("span",{className:"icon is-left",children:Object(M.jsx)("i",{className:"fas fa-magnifying-glass"})}),e.query&&Object(M.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(M.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return t(T(""))}})})]})]})},W=(c(25),function(){return Object(M.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(M.jsx)("div",{className:"Loader__content"})})});function z(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var G=function(e){return z("/users/".concat(e))},H=function(){return z("/todos")},K=function(){var e=Object(r.b)(),t=Object(r.c)(Q),c=Object(r.c)(J),n=c.user,s=c.isLoading;return Object(U.useEffect)((function(){t&&(e(y(!0)),G(t.userId).then((function(t){return e(v(t))})).catch().finally((function(){return e(y(!1))})))}),[]),Object(M.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(M.jsx)("div",{className:"modal-background"}),s?Object(M.jsx)(W,{}):Object(M.jsxs)("div",{className:"modal-card",children:[Object(M.jsxs)("header",{className:"modal-card-head",children:[Object(M.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(M.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e(h())}})]}),Object(M.jsxs)("div",{className:"modal-card-body",children:[Object(M.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(M.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(M.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(M.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",n&&Object(M.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})},X=r.b,Y=r.c,Z=function(){var e=X(),t=Y(Q),c=Y(R).isLoading;return Object(U.useEffect)((function(){e(k(!0)),H().then((function(t){return e(w(t))})).catch().finally((function(){return e(k(!1))}))}),[]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"section",children:Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)("div",{className:"box",children:[Object(M.jsx)("h1",{className:"title",children:"Todos:"}),Object(M.jsx)("div",{className:"block",children:Object(M.jsx)(V,{})}),Object(M.jsx)("div",{className:"block",children:c?Object(M.jsx)(W,{}):Object(M.jsx)(P,{})})]})})}),t&&Object(M.jsx)(K,{})]})},$=function(){return Object(M.jsx)(r.a,{store:E,children:Object(M.jsx)(o.a,{children:Object(M.jsx)(Z,{})})})};a.a.render(Object(M.jsx)($,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fdd52bb9.chunk.js.map