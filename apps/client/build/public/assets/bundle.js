(()=>{function d(){}function O(t){return t()}function B(){return Object.create(null)}function g(t){t.forEach(O)}function H(t){return typeof t=="function"}function v(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}var G=!1;function tt(){G=!0}function et(){G=!1}function x(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function nt(t){return document.createTextNode(t)}function A(){return nt(" ")}function Y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function U(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}var D;function y(t){D=t}var m=[];var I=[],$=[],z=[],rt=Promise.resolve(),C=!1;function ot(){C||(C=!0,rt.then(V))}function M(t){$.push(t)}var S=new Set,F=0;function V(){let t=D;do{for(;F<m.length;){let e=m[F];F++,y(e),st(e.$$)}for(y(null),m.length=0,F=0;I.length;)I.pop()();for(let e=0;e<$.length;e+=1){let n=$[e];S.has(n)||(S.add(n),n())}$.length=0}while(m.length);for(;z.length;)z.pop()();C=!1,S.clear(),y(t)}function st(t){if(t.fragment!==null){t.update(),g(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}var w=new Set,ct;function j(t,e){t&&t.i&&(w.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(w.has(t))return;w.add(t),ct.c.push(()=>{w.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}var ht=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function K(t){t&&t.c()}function N(t,e,n,r){let{fragment:o,on_mount:a,on_destroy:l,after_update:f}=t.$$;o&&o.m(e,n),r||M(()=>{let u=a.map(O).filter(H);l?l.push(...u):g(u),t.$$.on_mount=[]}),f.forEach(M)}function k(t,e){let n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(m.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(t,e,n,r,o,a,l,f=[-1]){let u=D;y(t);let i=t.$$={fragment:null,ctx:null,props:a,update:d,not_equal:o,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:B(),dirty:f,skip_bound:!1,root:e.target||u.$$.root};l&&l(i.root);let s=!1;if(i.ctx=n?n(t,e.props||{},(c,L,...R)=>{let P=R.length?R[0]:L;return i.ctx&&o(i.ctx[c],i.ctx[c]=P)&&(!i.skip_bound&&i.bound[c]&&i.bound[c](P),s&&lt(t,c)),L}):[],i.update(),s=!0,g(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){tt();let c=it(e.target);i.fragment&&i.fragment.l(c),c.forEach(h)}else i.fragment&&i.fragment.c();e.intro&&j(t.$$.fragment),N(t,e.target,e.anchor,e.customElement),et(),V()}y(u)}var ut;typeof HTMLElement=="function"&&(ut=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(O).filter(H);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){g(this.$$.on_disconnect)}$destroy(){k(this,1),this.$destroy=d}$on(t,e){let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!W(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var _=class{$destroy(){k(this,1),this.$destroy=d}$on(e,n){let r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};function at(t){let e;return{c(){e=p("div"),e.innerHTML="<h1>Hello World</h1>",U(e,"id","header")},m(n,r){b(n,e,r)},p:d,i:d,o:d,d(n){n&&h(e)}}}var T=class extends _{constructor(e){super(),E(this,e,null,at,v,{})}},Q=T;function X(t){let e;return{c(){e=p("p"),e.textContent="Click and I disappear"},m(n,r){b(n,e,r)},d(n){n&&h(e)}}}function ft(t){let e,n,r,o,a,l,f,u;n=new Q({});let i=t[0]&&X(t);return{c(){e=p("div"),K(n.$$.fragment),r=A(),i&&i.c(),o=A(),a=p("button"),a.textContent="Click Me"},m(s,c){b(s,e,c),N(n,e,null),x(e,r),i&&i.m(e,null),x(e,o),x(e,a),l=!0,f||(u=Y(a,"click",t[1]),f=!0)},p(s,[c]){s[0]?i||(i=X(s),i.c(),i.m(e,o)):i&&(i.d(1),i=null)},i(s){l||(j(n.$$.fragment,s),l=!0)},o(s){J(n.$$.fragment,s),l=!1},d(s){s&&h(e),k(n),i&&i.d(),f=!1,u()}}}function dt(t,e,n){let r=!0;return[r,()=>{n(0,r=!r)}]}var q=class extends _{constructor(e){super(),E(this,e,dt,ft,v,{})}},Z=q;var _t=new Z({target:document.body}),Et=_t;})();
//# sourceMappingURL=bundle.js.map