(this.webpackJsonpbibliotech=this.webpackJsonpbibliotech||[]).push([[0],Array(50).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(3),r=c.n(n),a=c(35),s=c.n(a),i=c(6),o=c(8),l=c(7),j=c.n(l),b=c(13),u=c(5),d=c(10),h=c(25);c(78);h.a.initializeApp({apiKey:"AIzaSyAsW2WD3hH_rek18BtMjIMRFmJngwclrKQ",authDomain:"bibliotech-a10cc.firebaseapp.com",projectId:"bibliotech-a10cc",storageBucket:"bibliotech-a10cc.appspot.com",messagingSenderId:"938811057785",appId:"1:938811057785:web:a01a45c294e07229f596a8"});var O=h.a.firestore();function m(){return(m=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,O.collection("categories").orderBy("booksQty","desc").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(Object(d.a)({},e.data()))})),t(c)})),e.next=8;break;case 4:throw e.prev=4,e.t0=e.catch(0),console.log(e.t0),new Error("Las categor\xedas no se pudieron cargar.");case 8:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function x(){return(x=Object(b.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,O.collection("books").orderBy("category","asc").orderBy("title","asc").onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(Object(d.a)({},e.data()))})),t(n),c(!1)})),e.next=9;break;case 4:throw e.prev=4,e.t0=e.catch(0),console.log(e.t0),c(!1),new Error("Los mensajes no se pudieron cargar.");case 9:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function p(e,t,c){return f.apply(this,arguments)}function f(){return(f=Object(b.a)(j.a.mark((function e(t,c,n){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=[],a=O.batch(),e.next=5,O.collection("books").where("id","in",t.map((function(e){return e.id}))).get();case 5:if(e.sent.docs.forEach((function(e){var c=t.find((function(t){return t.id===e.data().id})),n=c.id,s=c.qty,i=c.title;e.data().stock>=s?a.update(e.ref,{stock:e.data().stock-s}):r.push({id:n,title:i,stock:e.data().stock})})),0!==r.length){e.next=12;break}return a.commit(),e.abrupt("return",!0);case 12:return c(r),r.forEach((function(e){return n(e.id,e.stock)})),e.abrupt("return",!1);case 15:e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(0),console.log(e.t0),new Error("No se pudo checkear el stock.");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.collection("orders").add(t).then((function(e){return c(e.id)}));case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log(e.t0),new Error("La orden no se pudo enviar.");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function k(e){return N.apply(this,arguments)}function N(){return(N=Object(b.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.username,n=t.password,e.prev=1,e.next=4,O.collection("admins").where("username","==",c).where("password","==",n).get();case 4:if(!e.sent.docs[0]){e.next=9;break}return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(1),console.log(e.t0),new Error("El usuario no se pudo validar.");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function C(e,t){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(j.a.mark((function e(t,c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.collection("books").where("id","==",t).get();case 3:return n=e.sent,e.next=6,n.docs[0].ref.update({stock:c});case 6:e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.log(e.t0),new Error("No se pudo actualizar el stock de ".concat(t,"."));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var S=c(1),w=Object(n.createContext)(),E=function(){return Object(n.useContext)(w)};function I(e){var t=e.children,c=Object(n.useState)(!0),r=Object(u.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!1),o=Object(u.a)(i,2),l=o[0],d=o[1],h=Object(n.useState)([]),O=Object(u.a)(h,2),p=O[0],f=O[1],v=Object(n.useState)([]),g=Object(u.a)(v,2),k=g[0],N=g[1],y=Object(n.useState)(!1),E=Object(u.a)(y,2),I=E[0],D=E[1],F=Object(n.useState)(!1),q=Object(u.a)(F,2),L=q[0],T=q[1],B=Object(n.useState)(!1),A=Object(u.a)(B,2),P=A[0],Q=A[1];function z(){return(z=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),Q(!1),e.next=5,Promise.all(t.map(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t.id,t.stock);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:T(!1),Q(!0),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),T(!1),D(!0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(e){return m.apply(this,arguments)})(f).catch((function(e){console.log(e),d(!0)})),function(e,t){return x.apply(this,arguments)}(N,s).catch((function(e){console.log(e),d(!0)}))}),[]),Object(S.jsx)(w.Provider,{value:{loading:a,error:l,categories:p,books:k,loadStock:function(e){return z.apply(this,arguments)},updatingStock:L,stockError:I,stockUpdated:P},children:t})}var D=c(18),F=Object(n.createContext)(),q=function(){return Object(n.useContext)(F)};function L(e){var t=e.children,c=Object(n.useState)(JSON.parse(localStorage.getItem("cartItems"))||[]),r=Object(u.a)(c,2),a=r[0],s=r[1],i=function(e){return a.some((function(t){return t.item.id===e}))};return Object(n.useEffect)((function(){localStorage.setItem("cartItems",JSON.stringify(a))}),[a]),Object(S.jsx)(F.Provider,{value:{cartItems:a,isInCart:i,getItemsQty:function(){return a.reduce((function(e,t){return e+t.qty}),0)},getCartTotal:function(){return a.reduce((function(e,t){return e+t.item.price*t.qty}),0)},addItem:function(e,t){if(!i(e.id)){var c=Object(D.a)(a),n=e.price*t;c.push({item:e,qty:t,subtotal:n}),s(c)}},updateItemStock:function(e,t){var c=Object(D.a)(a);c.find((function(t){return t.item.id===e})).item.stock=t,s(c)},updateItemQty:function(e,t){var c=Object(D.a)(a),n=c.find((function(t){return t.item.id===e})),r=n.item.price*t;n.qty=t,n.subtotal=r,s(c)},removeItem:function(e){var t=Object(D.a)(a);t=t.filter((function(t){return t.item.id!==e})),s(t)},clearCart:function(){s([])}},children:t})}function T(){var e=Object(o.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var B=Object(n.createContext)(),A=function(){return Object(n.useContext)(B)};function P(e){var t=e.children,c=Object(n.useState)(""),r=Object(u.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),l=o[0],j=o[1];return Object(S.jsx)(B.Provider,{value:{mobNavOpened:a,setMobNavOpened:s,catDropdownOpened:l,setCatDropdownOpened:j,closeDropdowns:function(){s(""),j("")}},children:t})}c(50);function Q(){var e=q().getItemsQty;return Object(S.jsx)(S.Fragment,{children:e()>0&&Object(S.jsxs)("div",{className:"cartWidget",children:[Object(S.jsx)("img",{className:"cartButton",src:"https://i.ibb.co/vmrYNNp/cart.png",alt:"Carrito"}),Object(S.jsx)("p",{children:e()})]})})}c(51);function z(){var e=E().categories,t=A(),c=t.catDropdownOpened,r=t.setCatDropdownOpened,a=t.closeDropdowns;return Object(n.useEffect)((function(){setTimeout((function(){r("opened")}),1)}),[r]),Object(S.jsx)("div",{className:"categoriesDropdown "+c,children:Object(S.jsx)("ul",{children:e&&e.map((function(e){return Object(S.jsx)("li",{className:"category",children:Object(S.jsx)(i.b,{to:"/categories/".concat(e.id),onClick:a,children:e.title})},e.id)}))})})}c(52);function M(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],r=t[1],a=A().closeDropdowns;return Object(S.jsxs)("ul",{className:"navbar-nav",children:[Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(i.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/",onClick:a,children:"Inicio"})}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(i.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/contact",onClick:a,children:"Contacto"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("li",{className:"nav-item categories",onClick:function(){r(!c)},children:"Categor\xedas"}),c&&Object(S.jsx)(z,{})]}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(i.b,{to:"/admin",onClick:a,children:"Login"})}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(i.b,{to:"/cart",onClick:a,children:Object(S.jsx)(Q,{})})})]})}function J(){return Object(S.jsx)("div",{className:"navMenu navigation",children:Object(S.jsx)(M,{})})}var R=c(37);function U(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],r=t[1],a=A(),s=a.mobNavOpened,i=a.setMobNavOpened;return Object(S.jsxs)("div",{className:"mobileNavigation",children:[Object(S.jsx)(R.a,{className:"hamburgerButton",size:"40px",color:"black",onClick:function(){r(!c),setTimeout((function(){i(c?"":"opened")}),1)}}),c&&Object(S.jsx)("div",{className:"navMenu "+s,children:Object(S.jsx)(M,{})})]})}c(53);function _(){return Object(S.jsx)(P,{children:Object(S.jsxs)("nav",{className:"nav navbar-expand-md",children:[Object(S.jsxs)("div",{className:"nav__brand",children:[Object(S.jsx)(i.b,{className:"nav__logo",to:"/",children:Object(S.jsx)("img",{src:"https://i.ibb.co/6n2wKTt/Biblio-Tech-logo.png",alt:"LOGO"})}),Object(S.jsx)("h1",{className:"nav__title",children:"BiblioTech"})]}),Object(S.jsx)(J,{}),Object(S.jsx)(U,{})]})})}c(54);function G(e){var t=e.id,c=e.title,n=e.price,r=e.imgUrl;return Object(S.jsxs)("li",{className:"bookCard",children:[Object(S.jsxs)("div",{className:"bookCardHeader",children:[Object(S.jsx)("img",{src:r,alt:"Car\xe1tula"}),Object(S.jsx)("h4",{children:c})]}),Object(S.jsxs)("div",{className:"bookCardDetails",children:[Object(S.jsx)(i.b,{to:"/book/".concat(t),children:Object(S.jsx)("button",{children:"Ver descripci\xf3n"})}),Object(S.jsxs)("p",{children:["$",n]})]})]})}c(55);function $(e){var t=e.name,c=e.children;return Object(S.jsxs)("section",{className:"booksCategory",children:[Object(S.jsx)("h3",{children:t}),Object(S.jsx)("div",{className:"booksGrid",children:c})]})}function K(){var e=E(),t=e.categories,c=e.books,n=Object(o.g)().categoryId,r=function(e){return c.filter((function(t){return t.category===e})).map((function(e){return Object(S.jsx)(G,{id:e.id,title:e.title,price:e.price,imgUrl:e.imgUrl},e.id)}))};return Object(S.jsxs)("div",{className:"booksList",children:[t&&c&&!n&&t.map((function(e){return Object(S.jsx)($,{name:e.title,children:r(e.id)},e.id)})),t&&c&&n&&t.filter((function(e){return e.id===n})).map((function(e){return Object(S.jsx)($,{name:e.title,children:r(e.id)},e.id)}))]})}c(56);function W(){var e=E(),t=e.loading,c=e.error,n=e.categories,r=e.books;return Object(S.jsxs)("div",{className:"booksListContainer",children:[Object(S.jsx)("h2",{children:"Libros"}),t&&Object(S.jsx)("h3",{children:"Cargando libros..."}),c&&Object(S.jsx)("h3",{children:"Error al cargar libros."}),!t&&n&&r&&Object(S.jsx)(K,{})]})}c(57);function H(){return Object(S.jsxs)("form",{className:"requestBookForm",action:"",children:[Object(S.jsx)("h3",{children:"Pedinos un libro que no tengamos!"}),Object(S.jsxs)("div",{className:"inputsContainer",children:[Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"name",children:"Nombre"}),Object(S.jsx)("input",{id:"name",name:"name",type:"text",placeholder:"Escriba su nombre..."})]}),Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"mail",children:"Correo Electr\xf3nico"}),Object(S.jsx)("input",{id:"mail",name:"mail",type:"text",placeholder:"Escriba su correo electr\xf3nico..."})]}),Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"book",children:"Libro"}),Object(S.jsx)("input",{id:"book",name:"book",type:"text",placeholder:"Escriba el nombre del libro..."})]})]}),Object(S.jsx)("button",{type:"submit",children:"Enviar"})]})}c(58);function V(){return Object(S.jsxs)("form",{className:"inquiryForm",action:"",children:[Object(S.jsx)("h3",{children:"Dejanos tu consulta o sugerencia!"}),Object(S.jsxs)("div",{className:"inputsContainer",children:[Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"name",children:"Nombre"}),Object(S.jsx)("input",{id:"name",name:"name",type:"text",placeholder:"Escriba su nombre..."})]}),Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"mail",children:"Correo Electr\xf3nico"}),Object(S.jsx)("input",{id:"mail",name:"mail",type:"text",placeholder:"Escriba su correo electr\xf3nico..."})]}),Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"message",children:"Mensaje"}),Object(S.jsx)("textarea",{id:"message",name:"message",type:"text",placeholder:"Escriba su mensaje..."})]})]}),Object(S.jsx)("button",{type:"submit",children:"Enviar"})]})}c(59);function Y(){return Object(S.jsxs)("div",{className:"contactContainer",children:[Object(S.jsx)("h2",{children:"Contacto"}),Object(S.jsxs)("div",{className:"contactFormsContainer",children:[Object(S.jsx)(H,{}),Object(S.jsx)(V,{})]})]})}var X=c(27);c(60);function Z(e){var t=e.max,c=e.qty,n=e.setQty;return Object(S.jsxs)("div",{className:"counterContainer",children:[Object(S.jsx)(X.b,{className:"counterButton",size:"40px",color:"white",onClick:function(){c>1&&n(c-1)}}),Object(S.jsx)("p",{children:c}),Object(S.jsx)(X.a,{className:"counterButton",size:"40px",color:"white",onClick:function(){c<t&&n(c+1)}})]})}function ee(e){var t=e.max,c=e.handleAddItem,r=Object(n.useState)(0!==t?1:0),a=Object(u.a)(r,2),s=a[0],i=a[1];return Object(S.jsxs)("div",{className:"addToCart",children:[Object(S.jsx)(Z,{max:t,qty:s<=t?s:t,setQty:i}),Object(S.jsx)("button",{disabled:0===t,onClick:function(){c(s)},children:"Agregar al Carrito"})]})}c(61);function te(){return Object(S.jsxs)("div",{className:"goToCart",children:[Object(S.jsx)("p",{children:"Agregado al carrito!"}),Object(S.jsx)(i.b,{to:"/cart",children:Object(S.jsx)("button",{children:"Finalizar Compra"})})]})}c(62);function ce(e){var t=e.book,c=t.title,r=t.description,a=t.price,s=t.imgUrl,i=t.stock,o=q(),l=o.addItem,j=o.isInCart,b=Object(n.useState)(!1),d=Object(u.a)(b,2),h=d[0],O=d[1];return Object(n.useEffect)((function(){O(j(t.id))}),[t,j]),Object(S.jsxs)("div",{className:"bookDetails",children:[Object(S.jsx)("h3",{children:c}),Object(S.jsxs)("div",{className:"bookInfo",children:[Object(S.jsxs)("div",{className:"bookItemCard",children:[Object(S.jsx)("img",{src:s,alt:"Car\xe1tula"}),Object(S.jsxs)("div",{className:"bookItemPurchase",children:[h?Object(S.jsx)(te,{}):Object(S.jsx)(ee,{max:i,handleAddItem:function(e){l(t,e),O(!0)}}),Object(S.jsxs)("div",{className:"priceAndStock",children:[Object(S.jsxs)("p",{className:"price",children:["$",a]}),Object(S.jsx)("p",{className:"stock",children:"Stock: ".concat(i)})]})]})]}),Object(S.jsxs)("div",{className:"bookDescription",children:[Object(S.jsx)("h4",{children:"Descripci\xf3n"}),Object(S.jsx)("p",{children:r})]})]})]})}c(63);function ne(){var e=E(),t=e.loading,c=e.error,r=e.books,a=Object(o.g)().bookId,s=Object(n.useState)(!1),i=Object(u.a)(s,2),l=i[0],j=i[1],b=Object(n.useState)({}),d=Object(u.a)(b,2),h=d[0],O=d[1];return Object(n.useEffect)((function(){r&&(O(r.find((function(e){return e.id===Number(a)}))),j(!t&&!h))}),[r,a,t,h]),Object(S.jsxs)("div",{className:"bookDetailsContainer",children:[Object(S.jsx)("h2",{children:"Detalles"}),t&&Object(S.jsx)("h3",{children:"Cargando libro..."}),!t&&l&&Object(S.jsx)("h3",{children:"No se ha encontrado ese libro."}),c&&Object(S.jsx)("h3",{children:"Error al cargar el libro."}),!t&&h&&Object(S.jsx)(ce,{book:h})]})}c(64);function re(){return Object(S.jsxs)("div",{className:"noItemsAdded",children:[Object(S.jsx)("h3",{children:"El carrito est\xe1 vac\xedo."}),Object(S.jsx)(i.b,{to:"/",children:Object(S.jsx)("button",{children:"AGREGAR LIBROS"})})]})}var ae=c(38);c(65);function se(e){var t=e.id,c=e.title,n=e.stock,r=e.qty,a=e.subtotal,s=q(),i=s.updateItemQty,o=s.removeItem;return Object(S.jsxs)("div",{className:"item",children:[Object(S.jsx)("div",{className:"titleDiv",children:Object(S.jsx)("h5",{children:c})}),Object(S.jsx)("div",{className:"qtyDiv",children:Object(S.jsx)(Z,{max:n,qty:r<=n?r:n,setQty:function(e){i(t,e)}})}),Object(S.jsx)("div",{className:"subtotalDiv",children:Object(S.jsxs)("p",{children:["$ ",a]})}),Object(S.jsx)("div",{className:"removeDiv",children:Object(S.jsx)(ae.a,{className:"removeButton",size:"25px",color:"white",onClick:function(){o(t)}})})]})}c(66);function ie(){var e=q(),t=e.clearCart,c=e.cartItems,n=e.getCartTotal;return Object(S.jsxs)("div",{className:"cart",children:[Object(S.jsx)("h3",{children:"Libros Agregados"}),Object(S.jsxs)("div",{className:"itemList",children:[Object(S.jsxs)("div",{className:"list",children:[Object(S.jsxs)("div",{className:"columns",children:[Object(S.jsx)("h4",{className:"titleColumn",children:"T\xedtulo"}),Object(S.jsx)("h4",{className:"qtyColumn",children:"Cantidad"}),Object(S.jsx)("h4",{className:"qtyColumnShort",children:"Cant."}),Object(S.jsx)("h4",{className:"subtotalColumn",children:"Subtotal"}),Object(S.jsx)("h4",{className:"subtotalColumnShort",children:"Subt."}),Object(S.jsx)("h4",{className:"removeColumn",children:"Eliminar"}),Object(S.jsx)("h4",{className:"removeColumnShort",children:"Elim."})]}),c.length>0?c.map((function(e){return Object(S.jsx)(se,{id:e.item.id,title:e.item.title,stock:e.item.stock,qty:e.qty,subtotal:e.subtotal},e.item.id)})):Object(S.jsx)(re,{})]}),Object(S.jsx)("div",{className:"totalDiv",children:Object(S.jsxs)("h4",{children:["Total: $ ",n()]})})]}),Object(S.jsxs)("div",{className:"cartButtons",children:[Object(S.jsx)("button",{type:"reset",onClick:t,children:"Limpiar"}),Object(S.jsx)(i.b,{to:"/checkout",children:Object(S.jsx)("button",{type:"button",children:"Pagar"})})]})]})}c(67);function oe(){return Object(S.jsxs)("div",{className:"cartContainer",children:[Object(S.jsx)("h2",{children:"Carrito"}),Object(S.jsx)("div",{className:"cartSection",children:Object(S.jsx)(ie,{})})]})}var le=c(22);c(68);function je(e){var t=e.generateOrder,c=Object(n.useState)(JSON.parse(localStorage.getItem("buyer"))||{name:"",phone:"",mail:""}),r=Object(u.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)({name:"",phone:"",mail:""}),o=Object(u.a)(i,2),l=o[0],j=o[1],b=function(e){var t=e.name,c=e.phone,n=e.mail,r={name:"",phone:"",mail:""};return t.length>=3||(r=Object(d.a)(Object(d.a)({},r),{},{name:"El nombre tiene que tener como m\xednimo tres caracteres."})),c.length>=9||(r=Object(d.a)(Object(d.a)({},r),{},{phone:"El n\xfamero tiene que tener como m\xednimo nueve caracteres."})),n.includes("@")||(r=Object(d.a)(Object(d.a)({},r),{},{mail:"El correo introducido no es v\xe1lido."})),j(r),!!(t.length>=3&&c.length>=9&&n.includes("@"))},h=function(e){var t=e.target,c=t.name,n=t.value,r=Object(d.a)({},a);r=Object(d.a)(Object(d.a)({},r),{},Object(le.a)({},c,n)),s(r),b(r)};return Object(n.useEffect)((function(){localStorage.setItem("buyer",JSON.stringify(a))}),[a]),Object(S.jsxs)("form",{className:"checkoutForm",action:"",children:[Object(S.jsx)("h3",{children:"Ingrese los datos del titular!"}),Object(S.jsxs)("div",{className:"inputsContainer",children:[Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"name",children:"Nombre"}),Object(S.jsx)("input",{id:"name",name:"name",type:"text",title:"Como m\xednimo 3 caracteres.",value:a.name,onChange:h,placeholder:"Escriba su nombre..."}),Object(S.jsx)("p",{children:l.name})]}),Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"phone",children:"Tel\xe9fono"}),Object(S.jsx)("input",{id:"phone",name:"phone",type:"number",title:"3335000111 \xf3 155000111",value:a.phone,onChange:h,placeholder:"Escriba su n\xfamero de tel\xe9fono..."}),Object(S.jsx)("p",{children:l.phone})]}),Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"mail",children:"Correo Electr\xf3nico"}),Object(S.jsx)("input",{id:"mail",name:"mail",type:"email",title:"correoelectronico@mail.com",value:a.mail,onChange:h,placeholder:"Escriba su correo electr\xf3nico..."}),Object(S.jsx)("p",{children:l.mail})]})]}),Object(S.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),b(a)&&t(a)},children:"Pagar"})]})}c(69);function be(e){var t=e.orderId;return Object(S.jsxs)("div",{className:"order",children:[Object(S.jsx)("h3",{children:"La orden ha sido enviada!"}),Object(S.jsxs)("p",{children:["C\xd3DIGO DE ORDEN: ",t]}),Object(S.jsx)(i.b,{to:"/",children:Object(S.jsx)("button",{children:"INICIO"})})]})}c(70);function ue(e){var t=e.itemsOutOfStock;return Object(S.jsxs)("div",{className:"itemsOutOfStock",children:[Object(S.jsx)("h3",{children:"No hay stock suficiente para estos libros."}),Object(S.jsx)("div",{className:"outOfStockList",children:t.map((function(e){return Object(S.jsx)("li",{children:e.title},e.id)}))}),Object(S.jsx)(i.b,{to:"/cart",children:Object(S.jsx)("button",{children:"CARRITO"})})]})}c(71);function de(){var e=q(),t=e.getItemsQty,c=e.clearCart,r=e.cartItems,a=e.getCartTotal,s=e.updateItemStock,i=Object(n.useState)(!1),o=Object(u.a)(i,2),l=o[0],O=o[1],m=Object(n.useState)(!1),x=Object(u.a)(m,2),f=x[0],g=x[1],k=Object(n.useState)([]),N=Object(u.a)(k,2),C=N[0],y=N[1],w=Object(n.useState)(!1),E=Object(u.a)(w,2),I=E[0],D=E[1],F=Object(n.useState)(""),L=Object(u.a)(F,2),T=L[0],B=L[1],A=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),n=r.map((function(e){return{id:e.item.id,title:e.item.title,qty:e.qty,subtotal:e.subtotal}})),e.next=5,p(n,y,s);case 5:if(!e.sent){e.next=11;break}return i={buyer:Object(d.a)({},t),items:Object(d.a)({},n),date:h.a.firestore.Timestamp.fromDate(new Date),total:a()},e.next=9,v(i,B);case 9:c(),D(!0);case 11:O(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),g(!0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"checkoutContainer",children:[Object(S.jsx)("h2",{children:"Checkout"}),Object(S.jsxs)("div",{className:"checkoutFormContainer",children:[t()>0&&!l&&0===C.length&&Object(S.jsx)(je,{generateOrder:A}),l&&Object(S.jsx)("h3",{children:"Enviando orden..."}),f&&Object(S.jsx)("h3",{children:"Se produjo un error al enviar la orden."}),0===t()&&(I?Object(S.jsx)(be,{orderId:T}):Object(S.jsx)(re,{})),C.length>0&&Object(S.jsx)(ue,{itemsOutOfStock:C})]})]})}c(72);function he(e){var t=e.handleLogin,c=Object(n.useState)({username:"",password:""}),r=Object(u.a)(c,2),a=r[0],s=r[1],i=function(e){var t=e.target,c=t.name,n=t.value;s(Object(d.a)(Object(d.a)({},a),{},Object(le.a)({},c,n)))};return Object(S.jsxs)("form",{className:"loginForm",onSubmit:function(e){t(e,a)},children:[Object(S.jsxs)("div",{className:"inputsContainer",children:[Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"username",children:"Usuario"}),Object(S.jsx)("input",{id:"username",name:"username",type:"text",value:a.username,placeholder:"Escriba su username...",onChange:i})]}),Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(S.jsx)("input",{id:"password",name:"password",type:"password",value:a.password,placeholder:"Escriba su contrase\xf1a...",onChange:i})]})]}),Object(S.jsx)("button",{type:"submit",children:"Ingresar"})]})}c(73);function Oe(e){var t=e.book,c=e.changeStock,r=Object(n.useState)(t.stock),a=Object(u.a)(r,2),s=a[0],i=a[1];return Object(S.jsxs)("li",{className:"item",children:[Object(S.jsx)("div",{className:"titleDiv",children:Object(S.jsx)("h4",{children:t.title})}),Object(S.jsx)("div",{className:"stockDiv",children:Object(S.jsx)("input",{type:"number",value:s,onChange:function(e){var n=e.target.value;i(n),c(t.id,n)}})})]})}c(74);function me(){var e=E(),t=e.books,c=e.loadStock,r=e.updatingStock,a=e.stockUpdated,s=e.stockError,i=Object(n.useState)(Object(D.a)(t)),o=Object(u.a)(i,2),l=o[0],j=o[1],b=function(e,t){var c=Object(D.a)(l);c.find((function(t){return t.id===e})).stock=t,j(c)};return Object(S.jsxs)("form",{className:"stockPanel",onSubmit:function(e){e.preventDefault(),c(l)},children:[Object(S.jsx)("h3",{children:"Stock"}),!s&&!r&&Object(S.jsx)("div",{className:"itemList",children:l&&l.map((function(e){return Object(S.jsx)(Oe,{book:e,changeStock:b},e.id)}))}),!s&&r&&Object(S.jsx)("h4",{children:"Cargando stock..."}),s&&Object(S.jsx)("h4",{children:"Se produjo un error al cargar stock."}),a&&Object(S.jsx)("h4",{children:"Stock Cargado!"}),Object(S.jsx)("button",{type:"submit",children:"Cargar Stock"})]})}c(75);function xe(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(u.a)(a,2),i=s[0],o=s[1],l=Object(n.useState)(!1),d=Object(u.a)(l,2),h=d[0],O=d[1],m=function(){var e=Object(b.a)(j.a.mark((function e(t,c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r(!0),e.prev=2,e.next=5,k(c);case 5:n=e.sent,O(n),r(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),o(!0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"adminContainer",children:[Object(S.jsx)("h2",{children:"Panel de Administrador"}),Object(S.jsxs)("div",{className:"adminPanels",children:[!c&&!h&&Object(S.jsx)(he,{handleLogin:m}),c&&Object(S.jsx)("h3",{children:"Validando..."}),i&&Object(S.jsx)("h3",{children:"Se produjo un error..."}),!c&&h&&Object(S.jsx)(me,{})]})]})}c(76);var pe=function(){return Object(S.jsx)(I,{children:Object(S.jsx)(L,{children:Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(i.a,{children:[Object(S.jsx)(T,{}),Object(S.jsx)("header",{className:"header fixed-top",children:Object(S.jsx)(_,{})}),Object(S.jsx)("main",{children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{exact:!0,path:"/",children:Object(S.jsx)(W,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/bibliotech",children:Object(S.jsx)(W,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/categories/:categoryId",children:Object(S.jsx)(W,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/book/:bookId",children:Object(S.jsx)(ne,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/contact",children:Object(S.jsx)(Y,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/cart",children:Object(S.jsx)(oe,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/checkout",children:Object(S.jsx)(de,{})}),Object(S.jsx)(o.a,{exact:!0,path:"/admin",children:Object(S.jsx)(xe,{})}),Object(S.jsx)(o.a,{path:"*",children:Object(S.jsx)("h2",{children:"Error 404 - P\xe1gina no encontrada..."})})]})})]})})})})},fe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(pe,{})}),document.getElementById("root")),fe()}]),[[77,1,2]]]);
//# sourceMappingURL=main.2f06c9df.chunk.js.map