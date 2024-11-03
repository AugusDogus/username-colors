(function(Ie,je,Q,De,Nt,J,Ut,Ke,Mt){"use strict";var $e={exports:{}},d={},qe;function Vt(){if(qe)return d;qe=1;var E=Symbol.for("react.element"),l=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),$=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Z=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),G=Symbol.iterator;function se(r){return r===null||typeof r!="object"?null:(r=G&&r[G]||r["@@iterator"],typeof r=="function"?r:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,ye={};function M(r,a,p){this.props=r,this.context=a,this.refs=ye,this.updater=p||U}M.prototype.isReactComponent={},M.prototype.setState=function(r,a){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,a,"setState")},M.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function he(){}he.prototype=M.prototype;function ee(r,a,p){this.props=r,this.context=a,this.refs=ye,this.updater=p||U}var te=ee.prototype=new he;te.constructor=ee,K(te,M.prototype),te.isPureReactComponent=!0;var V=Array.isArray,O=Object.prototype.hasOwnProperty,F={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function q(r,a,p){var y,h={},S=null,R=null;if(a!=null)for(y in a.ref!==void 0&&(R=a.ref),a.key!==void 0&&(S=""+a.key),a)O.call(a,y)&&!Y.hasOwnProperty(y)&&(h[y]=a[y]);var C=arguments.length-2;if(C===1)h.children=p;else if(1<C){for(var g=Array(C),A=0;A<C;A++)g[A]=arguments[A+2];h.children=g}if(r&&r.defaultProps)for(y in C=r.defaultProps,C)h[y]===void 0&&(h[y]=C[y]);return{$$typeof:E,type:r,key:S,ref:R,props:h,_owner:F.current}}function me(r,a){return{$$typeof:E,type:r.type,key:a,ref:r.ref,props:r.props,_owner:r._owner}}function ce(r){return typeof r=="object"&&r!==null&&r.$$typeof===E}function Fe(r){var a={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(p){return a[p]})}var ge=/\/+/g;function le(r,a){return typeof r=="object"&&r!==null&&r.key!=null?Fe(""+r.key):a.toString(36)}function re(r,a,p,y,h){var S=typeof r;(S==="undefined"||S==="boolean")&&(r=null);var R=!1;if(r===null)R=!0;else switch(S){case"string":case"number":R=!0;break;case"object":switch(r.$$typeof){case E:case l:R=!0}}if(R)return R=r,h=h(R),r=y===""?"."+le(R,0):y,V(h)?(p="",r!=null&&(p=r.replace(ge,"$&/")+"/"),re(h,a,p,"",function(A){return A})):h!=null&&(ce(h)&&(h=me(h,p+(!h.key||R&&R.key===h.key?"":(""+h.key).replace(ge,"$&/")+"/")+r)),a.push(h)),1;if(R=0,y=y===""?".":y+":",V(r))for(var C=0;C<r.length;C++){S=r[C];var g=y+le(S,C);R+=re(S,a,p,g,h)}else if(g=se(r),typeof g=="function")for(r=g.call(r),C=0;!(S=r.next()).done;)S=S.value,g=y+le(S,C++),R+=re(S,a,p,g,h);else if(S==="object")throw a=String(r),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return R}function x(r,a,p){if(r==null)return r;var y=[],h=0;return re(r,y,"","",function(S){return a.call(p,S,h++)}),y}function B(r){if(r._status===-1){var a=r._result;a=a(),a.then(function(p){(r._status===0||r._status===-1)&&(r._status=1,r._result=p)},function(p){(r._status===0||r._status===-1)&&(r._status=2,r._result=p)}),r._status===-1&&(r._status=0,r._result=a)}if(r._status===1)return r._result.default;throw r._result}var c={current:null},X={transition:null},_e={ReactCurrentDispatcher:c,ReactCurrentBatchConfig:X,ReactCurrentOwner:F};function ne(){throw Error("act(...) is not supported in production builds of React.")}return d.Children={map:x,forEach:function(r,a,p){x(r,function(){a.apply(this,arguments)},p)},count:function(r){var a=0;return x(r,function(){a++}),a},toArray:function(r){return x(r,function(a){return a})||[]},only:function(r){if(!ce(r))throw Error("React.Children.only expected to receive a single React element child.");return r}},d.Component=M,d.Fragment=j,d.Profiler=k,d.PureComponent=ee,d.StrictMode=L,d.Suspense=W,d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,d.act=ne,d.cloneElement=function(r,a,p){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var y=K({},r.props),h=r.key,S=r.ref,R=r._owner;if(a!=null){if(a.ref!==void 0&&(S=a.ref,R=F.current),a.key!==void 0&&(h=""+a.key),r.type&&r.type.defaultProps)var C=r.type.defaultProps;for(g in a)O.call(a,g)&&!Y.hasOwnProperty(g)&&(y[g]=a[g]===void 0&&C!==void 0?C[g]:a[g])}var g=arguments.length-2;if(g===1)y.children=p;else if(1<g){C=Array(g);for(var A=0;A<g;A++)C[A]=arguments[A+2];y.children=C}return{$$typeof:E,type:r.type,key:h,ref:S,props:y,_owner:R}},d.createContext=function(r){return r={$$typeof:$,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:D,_context:r},r.Consumer=r},d.createElement=q,d.createFactory=function(r){var a=q.bind(null,r);return a.type=r,a},d.createRef=function(){return{current:null}},d.forwardRef=function(r){return{$$typeof:N,render:r}},d.isValidElement=ce,d.lazy=function(r){return{$$typeof:H,_payload:{_status:-1,_result:r},_init:B}},d.memo=function(r,a){return{$$typeof:Z,type:r,compare:a===void 0?null:a}},d.startTransition=function(r){var a=X.transition;X.transition={};try{r()}finally{X.transition=a}},d.unstable_act=ne,d.useCallback=function(r,a){return c.current.useCallback(r,a)},d.useContext=function(r){return c.current.useContext(r)},d.useDebugValue=function(){},d.useDeferredValue=function(r){return c.current.useDeferredValue(r)},d.useEffect=function(r,a){return c.current.useEffect(r,a)},d.useId=function(){return c.current.useId()},d.useImperativeHandle=function(r,a,p){return c.current.useImperativeHandle(r,a,p)},d.useInsertionEffect=function(r,a){return c.current.useInsertionEffect(r,a)},d.useLayoutEffect=function(r,a){return c.current.useLayoutEffect(r,a)},d.useMemo=function(r,a){return c.current.useMemo(r,a)},d.useReducer=function(r,a,p){return c.current.useReducer(r,a,p)},d.useRef=function(r){return c.current.useRef(r)},d.useState=function(r){return c.current.useState(r)},d.useSyncExternalStore=function(r,a,p){return c.current.useSyncExternalStore(r,a,p)},d.useTransition=function(){return c.current.useTransition()},d.version="18.3.1",d}var ie={exports:{}};ie.exports;var Xe;function Wt(){return Xe||(Xe=1,function(E,l){process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var j="18.3.1",L=Symbol.for("react.element"),k=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),Z=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),M=Symbol.iterator,he="@@iterator";function ee(e){if(e===null||typeof e!="object")return null;var t=M&&e[M]||e[he];return typeof t=="function"?t:null}var te={current:null},V={transition:null},O={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},F={current:null},Y={},q=null;function me(e){q=e}Y.setExtraStackFrame=function(e){q=e},Y.getCurrentStack=null,Y.getStackAddendum=function(){var e="";q&&(e+=q);var t=Y.getCurrentStack;return t&&(e+=t()||""),e};var ce=!1,Fe=!1,ge=!1,le=!1,re=!1,x={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};x.ReactDebugCurrentFrame=Y,x.ReactCurrentActQueue=O;function B(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];X("warn",e,n)}}function c(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];X("error",e,n)}}function X(e,t,n){{var o=x.ReactDebugCurrentFrame,u=o.getStackAddendum();u!==""&&(t+="%s",n=n.concat([u]));var s=n.map(function(i){return String(i)});s.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,s)}}var _e={};function ne(e,t){{var n=e.constructor,o=n&&(n.displayName||n.name)||"ReactClass",u=o+"."+t;if(_e[u])return;c("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,o),_e[u]=!0}}var r={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,n){ne(e,"forceUpdate")},enqueueReplaceState:function(e,t,n,o){ne(e,"replaceState")},enqueueSetState:function(e,t,n,o){ne(e,"setState")}},a=Object.assign,p={};Object.freeze(p);function y(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||r}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};{var h={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},S=function(e,t){Object.defineProperty(y.prototype,e,{get:function(){B("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var R in h)h.hasOwnProperty(R)&&S(R,h[R])}function C(){}C.prototype=y.prototype;function g(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||r}var A=g.prototype=new C;A.constructor=g,a(A,y.prototype),A.isPureReactComponent=!0;function Zt(){var e={current:null};return Object.seal(e),e}var er=Array.isArray;function be(e){return er(e)}function tr(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function rr(e){try{return tt(e),!1}catch{return!0}}function tt(e){return""+e}function Ee(e){if(rr(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",tr(e)),tt(e)}function nr(e,t,n){var o=e.displayName;if(o)return o;var u=t.displayName||t.name||"";return u!==""?n+"("+u+")":n}function rt(e){return e.displayName||"Context"}function z(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case k:return"Portal";case N:return"Profiler";case $:return"StrictMode";case G:return"Suspense";case se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z:var t=e;return rt(t)+".Consumer";case W:var n=e;return rt(n._context)+".Provider";case H:return nr(e,e.render,"ForwardRef");case U:var o=e.displayName||null;return o!==null?o:z(e.type)||"Memo";case K:{var u=e,s=u._payload,i=u._init;try{return z(i(s))}catch{return null}}}return null}var fe=Object.prototype.hasOwnProperty,nt={key:!0,ref:!0,__self:!0,__source:!0},ot,at,xe;xe={};function ut(e){if(fe.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function it(e){if(fe.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function or(e,t){var n=function(){ot||(ot=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function ar(e,t){var n=function(){at||(at=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}function ur(e){if(typeof e.ref=="string"&&F.current&&e.__self&&F.current.stateNode!==e.__self){var t=z(F.current.type);xe[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),xe[t]=!0)}}var Le=function(e,t,n,o,u,s,i){var f={$$typeof:L,type:e,key:t,ref:n,props:i,_owner:s};return f._store={},Object.defineProperty(f._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(f,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(f,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(f.props),Object.freeze(f)),f};function ir(e,t,n){var o,u={},s=null,i=null,f=null,v=null;if(t!=null){ut(t)&&(i=t.ref,ur(t)),it(t)&&(Ee(t.key),s=""+t.key),f=t.__self===void 0?null:t.__self,v=t.__source===void 0?null:t.__source;for(o in t)fe.call(t,o)&&!nt.hasOwnProperty(o)&&(u[o]=t[o])}var m=arguments.length-2;if(m===1)u.children=n;else if(m>1){for(var _=Array(m),b=0;b<m;b++)_[b]=arguments[b+2];Object.freeze&&Object.freeze(_),u.children=_}if(e&&e.defaultProps){var w=e.defaultProps;for(o in w)u[o]===void 0&&(u[o]=w[o])}if(s||i){var T=typeof e=="function"?e.displayName||e.name||"Unknown":e;s&&or(u,T),i&&ar(u,T)}return Le(e,s,i,f,v,F.current,u)}function sr(e,t){var n=Le(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n}function cr(e,t,n){if(e==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o,u=a({},e.props),s=e.key,i=e.ref,f=e._self,v=e._source,m=e._owner;if(t!=null){ut(t)&&(i=t.ref,m=F.current),it(t)&&(Ee(t.key),s=""+t.key);var _;e.type&&e.type.defaultProps&&(_=e.type.defaultProps);for(o in t)fe.call(t,o)&&!nt.hasOwnProperty(o)&&(t[o]===void 0&&_!==void 0?u[o]=_[o]:u[o]=t[o])}var b=arguments.length-2;if(b===1)u.children=n;else if(b>1){for(var w=Array(b),T=0;T<b;T++)w[T]=arguments[T+2];u.children=w}return Le(e.type,s,i,f,v,m,u)}function oe(e){return typeof e=="object"&&e!==null&&e.$$typeof===L}var st=".",lr=":";function fr(e){var t=/[=:]/g,n={"=":"=0",":":"=2"},o=e.replace(t,function(u){return n[u]});return"$"+o}var ct=!1,dr=/\/+/g;function lt(e){return e.replace(dr,"$&/")}function Ne(e,t){return typeof e=="object"&&e!==null&&e.key!=null?(Ee(e.key),fr(""+e.key)):t.toString(36)}function Re(e,t,n,o,u){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case L:case k:i=!0}}if(i){var f=e,v=u(f),m=o===""?st+Ne(f,0):o;if(be(v)){var _="";m!=null&&(_=lt(m)+"/"),Re(v,t,_,"",function(on){return on})}else v!=null&&(oe(v)&&(v.key&&(!f||f.key!==v.key)&&Ee(v.key),v=sr(v,n+(v.key&&(!f||f.key!==v.key)?lt(""+v.key)+"/":"")+m)),t.push(v));return 1}var b,w,T=0,P=o===""?st:o+lr;if(be(e))for(var Ae=0;Ae<e.length;Ae++)b=e[Ae],w=P+Ne(b,Ae),T+=Re(b,t,n,w,u);else{var Ge=ee(e);if(typeof Ge=="function"){var Ft=e;Ge===Ft.entries&&(ct||B("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),ct=!0);for(var rn=Ge.call(Ft),xt,nn=0;!(xt=rn.next()).done;)b=xt.value,w=P+Ne(b,nn++),T+=Re(b,t,n,w,u)}else if(s==="object"){var Lt=String(e);throw new Error("Objects are not valid as a React child (found: "+(Lt==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":Lt)+"). If you meant to render a collection of children, use an array instead.")}}return T}function Ce(e,t,n){if(e==null)return e;var o=[],u=0;return Re(e,o,"","",function(s){return t.call(n,s,u++)}),o}function pr(e){var t=0;return Ce(e,function(){t++}),t}function vr(e,t,n){Ce(e,function(){t.apply(this,arguments)},n)}function yr(e){return Ce(e,function(t){return t})||[]}function hr(e){if(!oe(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}function mr(e){var t={$$typeof:Z,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:W,_context:t};var n=!1,o=!1,u=!1;{var s={$$typeof:Z,_context:t};Object.defineProperties(s,{Provider:{get:function(){return o||(o=!0,c("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(i){t.Provider=i}},_currentValue:{get:function(){return t._currentValue},set:function(i){t._currentValue=i}},_currentValue2:{get:function(){return t._currentValue2},set:function(i){t._currentValue2=i}},_threadCount:{get:function(){return t._threadCount},set:function(i){t._threadCount=i}},Consumer:{get:function(){return n||(n=!0,c("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(i){u||(B("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",i),u=!0)}}}),t.Consumer=s}return t._currentRenderer=null,t._currentRenderer2=null,t}var de=-1,Ue=0,ft=1,gr=2;function _r(e){if(e._status===de){var t=e._result,n=t();if(n.then(function(s){if(e._status===Ue||e._status===de){var i=e;i._status=ft,i._result=s}},function(s){if(e._status===Ue||e._status===de){var i=e;i._status=gr,i._result=s}}),e._status===de){var o=e;o._status=Ue,o._result=n}}if(e._status===ft){var u=e._result;return u===void 0&&c(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,u),"default"in u||c(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,u),u.default}else throw e._result}function br(e){var t={_status:de,_result:e},n={$$typeof:K,_payload:t,_init:_r};{var o,u;Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return o},set:function(s){c("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),o=s,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return u},set:function(s){c("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),u=s,Object.defineProperty(n,"propTypes",{enumerable:!0})}}})}return n}function Er(e){e!=null&&e.$$typeof===U?c("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e!="function"?c("forwardRef requires a render function but was given %s.",e===null?"null":typeof e):e.length!==0&&e.length!==2&&c("forwardRef render functions accept exactly two parameters: props and ref. %s",e.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),e!=null&&(e.defaultProps!=null||e.propTypes!=null)&&c("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var t={$$typeof:H,render:e};{var n;Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(o){n=o,!e.name&&!e.displayName&&(e.displayName=o)}})}return t}var dt;dt=Symbol.for("react.module.reference");function pt(e){return!!(typeof e=="string"||typeof e=="function"||e===D||e===N||re||e===$||e===G||e===se||le||e===ye||ce||Fe||ge||typeof e=="object"&&e!==null&&(e.$$typeof===K||e.$$typeof===U||e.$$typeof===W||e.$$typeof===Z||e.$$typeof===H||e.$$typeof===dt||e.getModuleId!==void 0))}function Rr(e,t){pt(e)||c("memo: The first argument must be a component. Instead received: %s",e===null?"null":typeof e);var n={$$typeof:U,type:e,compare:t===void 0?null:t};{var o;Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return o},set:function(u){o=u,!e.name&&!e.displayName&&(e.displayName=u)}})}return n}function I(){var e=te.current;return e===null&&c(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function Cr(e){var t=I();if(e._context!==void 0){var n=e._context;n.Consumer===e?c("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&c("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)}function wr(e){var t=I();return t.useState(e)}function Sr(e,t,n){var o=I();return o.useReducer(e,t,n)}function Tr(e){var t=I();return t.useRef(e)}function Or(e,t){var n=I();return n.useEffect(e,t)}function kr(e,t){var n=I();return n.useInsertionEffect(e,t)}function Pr(e,t){var n=I();return n.useLayoutEffect(e,t)}function Ar(e,t){var n=I();return n.useCallback(e,t)}function Ir(e,t){var n=I();return n.useMemo(e,t)}function jr(e,t,n){var o=I();return o.useImperativeHandle(e,t,n)}function Dr(e,t){{var n=I();return n.useDebugValue(e,t)}}function $r(){var e=I();return e.useTransition()}function Fr(e){var t=I();return t.useDeferredValue(e)}function xr(){var e=I();return e.useId()}function Lr(e,t,n){var o=I();return o.useSyncExternalStore(e,t,n)}var pe=0,vt,yt,ht,mt,gt,_t,bt;function Et(){}Et.__reactDisabledLog=!0;function Nr(){{if(pe===0){vt=console.log,yt=console.info,ht=console.warn,mt=console.error,gt=console.group,_t=console.groupCollapsed,bt=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Et,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}pe++}}function Ur(){{if(pe--,pe===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:a({},e,{value:vt}),info:a({},e,{value:yt}),warn:a({},e,{value:ht}),error:a({},e,{value:mt}),group:a({},e,{value:gt}),groupCollapsed:a({},e,{value:_t}),groupEnd:a({},e,{value:bt})})}pe<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Me=x.ReactCurrentDispatcher,Ve;function we(e,t,n){{if(Ve===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);Ve=o&&o[1]||""}return`
`+Ve+e}}var We=!1,Se;{var Mr=typeof WeakMap=="function"?WeakMap:Map;Se=new Mr}function Rt(e,t){if(!e||We)return"";{var n=Se.get(e);if(n!==void 0)return n}var o;We=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=Me.current,Me.current=null,Nr();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(P){o=P}Reflect.construct(e,[],i)}else{try{i.call()}catch(P){o=P}e.call(i.prototype)}}else{try{throw Error()}catch(P){o=P}e()}}catch(P){if(P&&o&&typeof P.stack=="string"){for(var f=P.stack.split(`
`),v=o.stack.split(`
`),m=f.length-1,_=v.length-1;m>=1&&_>=0&&f[m]!==v[_];)_--;for(;m>=1&&_>=0;m--,_--)if(f[m]!==v[_]){if(m!==1||_!==1)do if(m--,_--,_<0||f[m]!==v[_]){var b=`
`+f[m].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),typeof e=="function"&&Se.set(e,b),b}while(m>=1&&_>=0);break}}}finally{We=!1,Me.current=s,Ur(),Error.prepareStackTrace=u}var w=e?e.displayName||e.name:"",T=w?we(w):"";return typeof e=="function"&&Se.set(e,T),T}function Vr(e,t,n){return Rt(e,!1)}function Wr(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function Te(e,t,n){if(e==null)return"";if(typeof e=="function")return Rt(e,Wr(e));if(typeof e=="string")return we(e);switch(e){case G:return we("Suspense");case se:return we("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case H:return Vr(e.render);case U:return Te(e.type,t,n);case K:{var o=e,u=o._payload,s=o._init;try{return Te(s(u),t,n)}catch{}}}return""}var Ct={},wt=x.ReactDebugCurrentFrame;function Oe(e){if(e){var t=e._owner,n=Te(e.type,e._source,t?t.type:null);wt.setExtraStackFrame(n)}else wt.setExtraStackFrame(null)}function Yr(e,t,n,o,u){{var s=Function.call.bind(fe);for(var i in e)if(s(e,i)){var f=void 0;try{if(typeof e[i]!="function"){var v=Error((o||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}f=e[i](t,i,o,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(m){f=m}f&&!(f instanceof Error)&&(Oe(u),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",n,i,typeof f),Oe(null)),f instanceof Error&&!(f.message in Ct)&&(Ct[f.message]=!0,Oe(u),c("Failed %s type: %s",n,f.message),Oe(null))}}}function ae(e){if(e){var t=e._owner,n=Te(e.type,e._source,t?t.type:null);me(n)}else me(null)}var Ye;Ye=!1;function St(){if(F.current){var e=z(F.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}function Br(e){if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+t+":"+n+"."}return""}function zr(e){return e!=null?Br(e.__source):""}var Tt={};function Hr(e){var t=St();if(!t){var n=typeof e=="string"?e:e.displayName||e.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}function Ot(e,t){if(!(!e._store||e._store.validated||e.key!=null)){e._store.validated=!0;var n=Hr(t);if(!Tt[n]){Tt[n]=!0;var o="";e&&e._owner&&e._owner!==F.current&&(o=" It was passed a child from "+z(e._owner.type)+"."),ae(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,o),ae(null)}}}function kt(e,t){if(typeof e=="object"){if(be(e))for(var n=0;n<e.length;n++){var o=e[n];oe(o)&&Ot(o,t)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var u=ee(e);if(typeof u=="function"&&u!==e.entries)for(var s=u.call(e),i;!(i=s.next()).done;)oe(i.value)&&Ot(i.value,t)}}}function Pt(e){{var t=e.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===H||t.$$typeof===U))n=t.propTypes;else return;if(n){var o=z(t);Yr(n,e.props,"prop",o,e)}else if(t.PropTypes!==void 0&&!Ye){Ye=!0;var u=z(t);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Gr(e){{for(var t=Object.keys(e.props),n=0;n<t.length;n++){var o=t[n];if(o!=="children"&&o!=="key"){ae(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),ae(null);break}}e.ref!==null&&(ae(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),ae(null))}}function At(e,t,n){var o=pt(e);if(!o){var u="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var s=zr(t);s?u+=s:u+=St();var i;e===null?i="null":be(e)?i="array":e!==void 0&&e.$$typeof===L?(i="<"+(z(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):i=typeof e,c("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,u)}var f=ir.apply(this,arguments);if(f==null)return f;if(o)for(var v=2;v<arguments.length;v++)kt(arguments[v],e);return e===D?Gr(f):Pt(f),f}var It=!1;function Kr(e){var t=At.bind(null,e);return t.type=e,It||(It=!0,B("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return B("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t}function qr(e,t,n){for(var o=cr.apply(this,arguments),u=2;u<arguments.length;u++)kt(arguments[u],o.type);return Pt(o),o}function Xr(e,t){var n=V.transition;V.transition={};var o=V.transition;V.transition._updatedFibers=new Set;try{e()}finally{if(V.transition=n,n===null&&o._updatedFibers){var u=o._updatedFibers.size;u>10&&B("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),o._updatedFibers.clear()}}}var jt=!1,ke=null;function Qr(e){if(ke===null)try{var t=("require"+Math.random()).slice(0,7),n=E&&E[t];ke=n.call(E,"timers").setImmediate}catch{ke=function(u){jt===!1&&(jt=!0,typeof MessageChannel>"u"&&c("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var s=new MessageChannel;s.port1.onmessage=u,s.port2.postMessage(void 0)}}return ke(e)}var ue=0,Dt=!1;function $t(e){{var t=ue;ue++,O.current===null&&(O.current=[]);var n=O.isBatchingLegacy,o;try{if(O.isBatchingLegacy=!0,o=e(),!n&&O.didScheduleLegacyUpdate){var u=O.current;u!==null&&(O.didScheduleLegacyUpdate=!1,He(u))}}catch(w){throw Pe(t),w}finally{O.isBatchingLegacy=n}if(o!==null&&typeof o=="object"&&typeof o.then=="function"){var s=o,i=!1,f={then:function(w,T){i=!0,s.then(function(P){Pe(t),ue===0?Be(P,w,T):w(P)},function(P){Pe(t),T(P)})}};return!Dt&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){i||(Dt=!0,c("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),f}else{var v=o;if(Pe(t),ue===0){var m=O.current;m!==null&&(He(m),O.current=null);var _={then:function(w,T){O.current===null?(O.current=[],Be(v,w,T)):w(v)}};return _}else{var b={then:function(w,T){w(v)}};return b}}}}function Pe(e){e!==ue-1&&c("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),ue=e}function Be(e,t,n){{var o=O.current;if(o!==null)try{He(o),Qr(function(){o.length===0?(O.current=null,t(e)):Be(e,t,n)})}catch(u){n(u)}else t(e)}}var ze=!1;function He(e){if(!ze){ze=!0;var t=0;try{for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}e.length=0}catch(o){throw e=e.slice(t+1),o}finally{ze=!1}}}var Jr=At,Zr=qr,en=Kr,tn={map:Ce,forEach:vr,count:pr,toArray:yr,only:hr};l.Children=tn,l.Component=y,l.Fragment=D,l.Profiler=N,l.PureComponent=g,l.StrictMode=$,l.Suspense=G,l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,l.act=$t,l.cloneElement=Zr,l.createContext=mr,l.createElement=Jr,l.createFactory=en,l.createRef=Zt,l.forwardRef=Er,l.isValidElement=oe,l.lazy=br,l.memo=Rr,l.startTransition=Xr,l.unstable_act=$t,l.useCallback=Ar,l.useContext=Cr,l.useDebugValue=Dr,l.useDeferredValue=Fr,l.useEffect=Or,l.useId=xr,l.useImperativeHandle=jr,l.useInsertionEffect=kr,l.useLayoutEffect=Pr,l.useMemo=Ir,l.useReducer=Sr,l.useRef=Tr,l.useState=wr,l.useSyncExternalStore=Lr,l.useTransition=$r,l.version=j,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()}(ie,ie.exports)),ie.exports}process.env.NODE_ENV==="production"?$e.exports=Vt():$e.exports=Wt();var Yt=$e.exports;const{openLazy:Bt,hideActionSheet:an}=De.findByProps("openLazy","hideActionSheet");function Qe(E,l){try{Bt(new Promise(function(j){return j({default:E})}),"ActionSheet",l)}catch(j){je.logger.error(j.stack),Mt.showToast("Got error when opening ActionSheet! Please check debug logs")}}const ve={toInt(E){return E=E.replace(/^#/,""),parseInt(E,16)},toHex(E){return"#"+E.toString(16).toUpperCase()},HSLtoHEX(E,l,j){j/=100;const L=l*Math.min(j,1-j)/100,k=function(D){const $=(D+E/30)%12,N=j-L*Math.max(Math.min($-3,9-$,1),-1);return Math.round(255*N).toString(16).padStart(2,"0")};return`#${k(0)}${k(8)}${k(4)}`}},{FormText:un,FormSection:zt,FormInput:Ht,FormRow:Je}=Ke.Forms,{Button:sn,View:Gt,TouchableOpacity:Kt,Image:qt}=Ke.General,Xt=De.findByProps("show","confirm","close"),Ze=De.findByName("CustomColorPickerActionSheet");function Qt(){const E=Q.storage.colors?.entries||[],[l,j]=Yt.useState(""),L=function(){Xt.show({title:"Enter User ID",body:React.createElement(Ht,{style:{width:"100%"},title:"Discord User ID",placeholder:"Enter the user's Discord ID",value:l,onChange:function(k){return j(k)}}),confirmText:"Next",cancelText:"Cancel",onConfirm:function(){if(!l){J.toasts.showToast("Please enter a valid User ID");return}Qe(Ze,{color:ve.toInt("#000000"),title:"Select Color",onSelect:function(k){const D=ve.toHex(k),$=Q.storage.colors?.entries||[];$.push({userId:l,color:D}),Q.storage.colors={entries:$},J.toasts.showToast("Color entry added!")}})}})};return React.createElement(React.Fragment,null,React.createElement(zt,{title:"Custom Colors"},E.map(function(k,D){return React.createElement(Je,{key:D,label:`User ID: ${k.userId}`,subLabel:"Tap to change color",onPress:function(){Qe(Ze,{color:ve.toInt(k.color),title:"Select Color",onSelect:function($){const N=ve.toHex($),W=[...E];W[D]={...k,color:N},Q.storage.colors={entries:W},J.toasts.showToast("Color updated!")}})},trailing:React.createElement(Gt,{style:{width:24,height:24,borderRadius:12,backgroundColor:k.color,borderWidth:1,borderColor:J.semanticColors.BACKGROUND_SECONDARY}})})}),E.length===0&&React.createElement(Je,{label:"No Colors Set",subLabel:"Use the + button to add a custom color"})),React.createElement(Kt,{style:et.fab,onPress:L},React.createElement(qt,{source:Ut.getAssetIDByName("ic_add_24px"),style:et.fabIcon})))}const et=Nt.stylesheet.createThemedStyleSheet({fab:{position:"absolute",bottom:20,right:20,backgroundColor:J.semanticColors.BUTTON_SECONDARY_BACKGROUND,borderRadius:50,width:56,height:56,justifyContent:"center",alignItems:"center",elevation:6},fabIcon:{width:24,height:24,tintColor:J.semanticColors.BUTTON_SECONDARY_TEXT}});var Jt={onLoad:function(){Q.storage.colors=Q.storage.colors??{entries:[]},je.logger.log("Hello world!")},onUnload:function(){je.logger.log("Goodbye, world.")},settings:Qt};return Ie.default=Jt,Object.defineProperty(Ie,"__esModule",{value:!0}),Ie})({},vendetta,vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts);
