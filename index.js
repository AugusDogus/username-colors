(function(O,U,S,x,c,C,X,R,W,E,he,be,h,we){"use strict";function w(e,n){function t(o,i,a){return Object.assign(o,{filter:e,raw:a,uniq:[a&&"raw::",n(i)].filter(Boolean).join("")})}const r=function(o){return function(){for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return t(function(d,s,l){return e(a,d,s,l)},a,o)}};return Object.assign(r(!1),{byRaw:r(!0),uniqMaker:n})}function Se(e,n){let{signal:t,edges:r}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,i=null;const a=r!=null&&r.includes("leading"),u=r==null||r.includes("trailing"),d=function(){i!==null&&(e.apply(o,i),o=void 0,i=null)},s=function(){u&&d(),V()};let l=null;const v=function(){l!=null&&clearTimeout(l),l=setTimeout(function(){l=null,s()},n)},b=function(){l!==null&&(clearTimeout(l),l=null)},V=function(){b(),o=void 0,i=null},lt=function(){b(),d()},N=function(){for(var pe=arguments.length,me=new Array(pe),B=0;B<pe;B++)me[B]=arguments[B];if(t?.aborted)return;o=this,i=me;const ft=l==null;v(),a&&ft&&d()};return N.schedule=v,N.cancel=V,N.flush=lt,t?.addEventListener("abort",V,{once:!0}),N}const m=window.nativeModuleProxy,xe=m.MMKVManager;m.DCDFileManager??m.RTNFileManager,m.InfoDictionaryManager??m.RTNClientInfoManager,m.DCDDeviceManager??m.RTNDeviceManager,m.RTNThemeManager??m.DCDTheme;var P=function(e){return e[e.EXISTS=1]="EXISTS",e[e.BLACKLISTED=2]="BLACKLISTED",e}({}),D=function(e){return e[e.FULL_LOOKUP=0]="FULL_LOOKUP",e[e.NOT_FOUND=1]="NOT_FOUND",e}({});const Ee="__bunny_metro_cache_key__";let T=null;const k=window.__getMetroCache=function(){return T},Y=Se(function(){xe.setItem(Ee,JSON.stringify(T))},1e3);function J(e){return e?P.EXISTS:void 0}function Ie(e,n){const t=J(n);t&&t!==P.EXISTS&&(T.exportsIndex[e]=t)}function Ce(e){T.exportsIndex[e]|=P.BLACKLISTED}function Re(e,n){const t=T.findIndex[e]??={};return{cacheId(r,o){t[r]??=J(o),Y()},finish(r){n&&(t[`_${D.FULL_LOOKUP}`]=1),r&&(t[`_${D.NOT_FOUND}`]=1),Y()}}}const{before:Te,instead:z}=require("spitroast"),y=window.modules,j=window.__r,$=new Map,Q=new Set,_e=function(){},ve=Function.prototype.toString;let Z=!1,ee=!1,te=!1,_=-1;for(const e in y){const n=Number(e),t=y[n];if(k().exportsIndex[n]&P.BLACKLISTED){M(n);continue}t.factory&&z("factory",t,function(r,o){const i=_;_=n;const{1:a,4:u}=r;r[2]=function(d){const s=a(d);return s&&s.__esModule?s.default:s},r[3]=function(d){const s=a(d);if(s&&s.__esModule)return s;const l={};return s&&Object.assign(l,s),l.default=s,l},o(...r),K(u.exports)?M(n):Pe(u.exports,n),_=i})}function M(e){Object.defineProperty(y,e,{enumerable:!1}),Q.add(e),Ce(Number(e))}function K(e){return!e||e===window||e["<!@ pylix was here :fuyusquish: !@>"]===null||e.__proto__===Object.prototype&&Reflect.ownKeys(e).length===0}function Pe(e,n){if(Ie(n,e),e.initSentry&&=function(){},e.default?.track&&e.default.trackMaker&&(e.default.track=function(){return Promise.resolve()}),e.registerAsset&&require("@lib/api/assets").patchAssets(e),!te&&["customBubblingEventTypes","customDirectEventTypes","register","get"].every(function(r){return e[r]})&&(z("register",e,function(r,o){try{return o(...r)}catch{}}),te=!0),e?.default?.constructor?.displayName==="DeveloperExperimentStore"&&(e.default=new Proxy(e.default,{get(r,o,i){if(o==="isDeveloper"){const{settings:a}=require("@lib/api/settings");return a.enableDiscordDeveloperSettings??!1}return Reflect.get(r,o,i)}})),!ee&&e.fileFinishedImporting&&(Te("fileFinishedImporting",e,function(r){let[o]=r;_===-1||!o||(y[_].__filePath=o)}),ee=!0),!Z&&window["__core-js_shared__"]){const r=function(o){return typeof o=="function"&&ve.apply(o,[])};window["__core-js_shared__"].inspectSource=r,Z=!0}if(e.findHostInstance_DEPRECATED){const r=(y[n-1]?.publicModule.exports).default?.reactProfilingEnabled?1:-1;y[n+r]?.isInitialized||M(n+r)}e.isMoment&&z("defineLocale",e,function(r,o){const i=e.locale();o(...r),e.locale(i)});const t=$.get(Number(n));t&&(t.forEach(function(r){return r()}),$.delete(Number(n)))}function De(e,n){const t=$.get(e)??new Set;return t.add(n),$.set(e,t),function(){return t.delete(n)}}function A(e){if(y[0]?.isInitialized||j(0),Q.has(e))return;if(Number(e)===-1)return require("@metro/polyfills/redesign");if(y[e]?.isInitialized&&!y[e]?.hasError)return j(e);const n=ErrorUtils.getGlobalHandler();ErrorUtils.setGlobalHandler(_e);let t;try{t=j(e)}catch{M(e),t=void 0}return ErrorUtils.setGlobalHandler(n),t}function*$e(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;yield[-1,require("@metro/polyfills/redesign")];let t=k().findIndex[e];if(n&&!t?.[`_${D.FULL_LOOKUP}`]&&(t=void 0),!t?.[`_${D.NOT_FOUND}`]){for(const r in t){if(r[0]==="_")continue;const o=A(Number(r));K(o)||(yield[r,o])}for(const r in y){const o=A(Number(r));K(o)||(yield[r,o])}}}const Me=w(function(e,n){return e.length===0?n[e[0]]:e.every(function(t){return n[t]})},function(e){return`bunny.metro.byProps(${e.join(",")})`});w(function(e,n){let[t]=e;return n.name===t},function(e){return`bunny.metro.byName(${e})`}),w(function(e,n){let[t]=e;return n.displayName===t},function(e){return`bunny.metro.byDisplayName(${e})`}),w(function(e,n){let[t]=e;return n.type?.name===t},function(e){return`bunny.metro.byTypeName(${e})`}),w(function(e,n){let[t]=e;return n.getName?.length===0&&n.getName()===t},function(e){return`bunny.metro.byStoreName(${e})`});const ne=w(function(e,n,t,r){let[o,i]=e;return i===r&&y[t]?.__filePath===o},function(e){let[n,t]=e;return`bunny.metro.byFilePath(${n},${t})`});w(function(e,n){let[t]=e;return n?.[t]&&!Object.getOwnPropertyDescriptor(n,t)?.get},function(e){return`bunny.metro.byMutableProp(${e})`});function Ae(e,n,t){return e.default&&e.__esModule&&t(e.default,n,!0)?{exports:t.raw?e:e.default,defaultExport:!t.raw}:!t.raw&&t(e,n,!1)?{exports:e,defaultExport:!1}:{}}function Fe(e){const{cacheId:n,finish:t}=Re(e.uniq,!1);for(const[r,o]of $e(e.uniq,!1)){const{exports:i,defaultExport:a}=Ae(o,r,e);if(i!==void 0)return n(r,i),{id:r,defaultExport:a}}return t(!0),{}}function q(e){const{id:n,defaultExport:t}=Fe(e);if(n!=null)return t?A(n).default:A(n)}const{after:Le,before:Ne,instead:Be}=require("spitroast"),H=Symbol.for("bunny.api.patcher.delay");function G(e){function n(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];if(H in i[1]){const u=i[1][H];let d=!1,s=function(){return d=!0};return u(function(l){d||(i[1]=l,s=e.apply(r,i))}),function(){return s()}}return e.apply(this,i)}function t(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];const u=i[1];if(!u||!("then"in u))throw new Error("target is not a then-able object");let d=!1,s=function(){return d=!0};return u.then(function(l){d||(i[1]=l,s=n.apply(r,i))}),function(){return s()}}return Object.assign(n,{await:t})}G(Le),G(Ne),G(Be);const re=new Set(["arguments","caller","prototype"]),Oe=function(e){return typeof e=="string"&&re.has(e)},Ue=new WeakMap,I=new WeakMap,ke={...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(function(e){return[e,function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];const i=I.get(n)?.factory();if(!i)throw new Error(`Trying to Reflect.${e} of ${typeof i}`);return Reflect[e](i,...r)}]})),has(e,n){const t=I.get(e);if(t?.options){const{exemptedEntries:o}=t.options;if(o&&n in o)return!0}const r=t?.factory();if(!r)throw new Error(`Trying to Reflect.has of ${typeof r}`);return Reflect.has(r,n)},get(e,n,t){const r=I.get(e);if(r?.options){const{exemptedEntries:i}=r.options;if(i?.[n])return i[n]}const o=r?.factory();if(!o)throw new Error(`Trying to Reflect.get of ${typeof o}`);return Reflect.get(o,n,t)},ownKeys:function(e){const n=I.get(e)?.factory();if(!n)throw new Error(`Trying to Reflect.ownKeys of ${typeof n}`);const t=Reflect.ownKeys(n);return re.forEach(function(r){return!t.includes(r)&&t.push(r)}),t},getOwnPropertyDescriptor:function(e,n){const t=I.get(e)?.factory();if(!t)throw new Error(`Trying to getOwnPropertyDescriptor of ${typeof t}`);if(Oe(n))return Reflect.getOwnPropertyDescriptor(e,n);const r=Reflect.getOwnPropertyDescriptor(t,n);return r&&Object.defineProperty(e,n,r),r}};function F(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t;const r=n.hint!=="object"?function(){}:{},o=function(){return t??=e()},i=new Proxy(r,ke);return Ue.set(i,o),I.set(r,{factory:e,options:n}),i}function oe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=F(e);return new Proxy({},{get(r,o){return o===Symbol.iterator?function*(){throw yield t,yield new Proxy({},{get:function(i,a){return F(function(){return t[a]},n)}}),new Error("This is not a real iterator, this is likely used incorrectly")}:F(function(){return t[o]},n)}})}const ze=Symbol.for("bunny.metro.lazyContext"),ie=new WeakMap;function je(e){const n=k().findIndex[e.uniq];if(n){for(const t in n)if(t[0]!=="_")return Number(t)}}function Ke(e,n){const t=qe(e);if(!t)throw new Error("Subscribing a module for non-proxy-find");if(!t.indexed)throw new Error("Attempting to subscribe to a non-indexed find");return De(t.moduleId,function(){n(q(t.filter))})}function qe(e){return ie.get(e)}function ae(e){let n;const t=je(e),r={filter:e,indexed:!!t,moduleId:t,getExports(i){return!t||y[t]?.isInitialized?(i(this.forceLoad()),function(){}):this.subscribe(i)},subscribe(i){return Ke(o,i)},get cache(){return n},forceLoad(){if(n??=q(e),!n)throw new Error(`${e.uniq} is ${typeof n}! (id ${r.moduleId??"unknown"})`);return n}},o=F(function(){return r.forceLoad()},{exemptedEntries:{[ze]:r,[H]:function(i){return r.getExports(i)}}});return ie.set(o,r),o}const g=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return ae(Me(...n))},He=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return q(ne(e,n))},Ge=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return ae(ne(e,n))},Ve=he.createFilterDefinition(function(e,n){let[t]=e;return n[t]&&Object.keys(n).length===1},function(e){return`bunny.metro.common.components.bySingularProp(${e})`}),p=function(e){return E.proxyLazy(function(){return be.findExports(Ve(e))?.[e]})},f=function(e){return E.proxyLazy(function(){return h.findByProps(e)[e]})};h.findByDisplayNameLazy("FluxContainer(Alert)"),h.findByPropsLazy("Looks","Colors","Sizes"),h.findByNameLazy("HelpMessage"),E.proxyLazy(function(){return h.findByProps("useSafeAreaInsets").SafeAreaView}),f("ActionSheetRow"),p("Button"),f("TwinButtons"),p("IconButton"),f("RowButton"),f("PressableScale"),f("TableRow"),f("TableRowIcon"),f("TableRowTrailingText"),f("TableRowGroup"),f("TableSwitchRow"),p("FormSwitch"),p("FormRadio"),p("FormCheckbox"),p("FormSwitch"),p("FormRadio"),p("FormCheckbox"),f("Card"),E.proxyLazy(function(){return h.findByProps("RedesignCompat").RedesignCompat}),f("Stack"),p("TextInput"),f("SegmentedControl"),f("SegmentedControlPages"),p("useSegmentedControlState"),f("CompatSegmentedControl"),f("FloatingActionButton"),f("ActionSheet"),f("BottomSheetTitleHeader");const Xe=h.findByPropsLazy("Text","LegacyText");E.proxyLazy(function(){return Xe.Text});const We=h.findByPropsLazy("Form","FormSection");E.lazyDestructure(function(){return We}),f("FlashList"),g("Fonts","Permissions"),g("getVoiceChannelId"),g("Messages"),g("openURL","openDeeplink"),g("setString","getString","hasString"),g("registerAsset"),g("acceptInviteAndTransitionToInviteChannel"),g("getBuiltInCommands"),g("pushLazy"),Ge("modules/toast/native/ToastActionCreators.tsx",!0),g("sendBotMessage"),g("createStackNavigator"),g("NavigationContainer"),g("colors","unsafe_rawColors"),g("parse","clean"),g("connectStores"),x.findByProps("_interceptors"),window.React=g("createElement"),window.ReactNative=g("AppRegistry");const{Button:dt,Text:Ye}=R.General,{AlertModal:Je,AlertActionButton:Qe}=oe(function(){return x.findByProps("AlertModal","AlertActions")}),Ze=Qe;function et(e){return!He("modules/forwarding/native/ForwardFailedAlertModal.tsx")&&"extraContent"in e&&(e.content=React.createElement(W.View,{style:{gap:16}},React.createElement(Ye,{variant:"text-md/medium",color:"text-muted"},e.content),React.createElement(W.View,null,e.extraContent)),delete e.extraContent),React.createElement(Je,e)}const{Stack:se,TextInput:tt,ScrollView:nt}=R.Forms,{Button:ue}=R.General;function ce(e){let{initialValue:n="",onConfirm:t,title:r}=e;const[o,i]=c.React.useState(n),[a,u]=c.React.useState(""),[d,s]=c.React.useState(!1),l=function(b){return/^\d+$/.test(b)};function v(){if(!l(o)){u("Please enter a valid Discord User ID (numbers only)");return}s(!0),t(o),s(!1)}return c.React.createElement(et,{title:r,content:"Enter the Discord User ID:",extraContent:c.React.createElement(se,{style:{marginTop:-12}},c.React.createElement(tt,{autoFocus:!0,isClearable:!0,value:o,onChange:function(b){i(b),a&&u("")},returnKeyType:"done",onSubmitEditing:v,state:a?"error":void 0,errorMessage:a||void 0,keyboardType:"numeric"}),c.React.createElement(nt,{horizontal:!0,showsHorizontalScrollIndicator:!1,style:{gap:8}},c.React.createElement(ue,{size:"sm",variant:"tertiary",text:"Import from clipboard",icon:X.getAssetIDByName("ic_clipboard"),onPress:function(){return c.clipboard.getString().then(function(b){return i(b)})}}))),actions:c.React.createElement(se,null,c.React.createElement(ue,{loading:d,text:"Confirm",variant:"primary",disabled:!o,onPress:v}),c.React.createElement(Ze,{disabled:d,text:"Cancel",variant:"secondary"}))})}const{openLazy:rt,hideActionSheet:gt}=x.findByProps("openLazy","hideActionSheet");function le(e,n){try{rt(new Promise(function(t){return t({default:e})}),"ActionSheet",n)}catch(t){U.logger.error(t.stack),we.showToast("Got error when opening ActionSheet! Please check debug logs")}}const L={toInt(e){return e=e.replace(/^#/,""),parseInt(e,16)},toHex(e){return"#"+e.toString(16).toUpperCase()},HSLtoHEX(e,n,t){t/=100;const r=n*Math.min(t,1-t)/100,o=function(i){const a=(i+e/30)%12,u=t-r*Math.max(Math.min(a-3,9-a,1),-1);return Math.round(255*u).toString(16).padStart(2,"0")};return`#${o(0)}${o(8)}${o(4)}`}},{FormText:yt,FormInput:pt,FormRow:ot}=R.Forms,{Button:mt,View:it,TouchableOpacity:at,Image:st}=R.General;x.findByProps("pushModal","popModal");const{openAlert:fe,dismissAlert:de}=oe(function(){return x.findByProps("openAlert","dismissAlert")}),ge=x.findByName("CustomColorPickerActionSheet");function ut(){const e=S.storage.colors?.entries||[],n=function(r,o){fe({key:"edit-userid-modal",content:c.React.createElement(ce,{title:"Edit User ID",initialValue:r.userId,onConfirm:function(i){const a=[...e];a[o]={...r,userId:i},S.storage.colors={entries:a},C.toasts.showToast("User ID updated!"),de("edit-userid-modal")}})})},t=function(){fe("UserIDInputAlert",c.React.createElement(ce,{title:"User ID",onConfirm:function(r){de("UserIDInputAlert"),le(ge,{color:L.toInt("#000000"),title:"Select Color",onSelect:function(o){const i=L.toHex(o),a=e||[];a.push({userId:r,color:i}),S.storage.colors={entries:a},C.toasts.showToast("Color entry added!")}})}}))};return c.React.createElement(c.React.Fragment,null,e.map(function(r,o){return c.React.createElement(ot,{key:o,label:`User ID: ${r.userId}`,subLabel:"Tap to change color",onPress:function(){le(ge,{color:L.toInt(r.color),title:"Select Color",onSelect:function(i){const a=L.toHex(i),u=[...e];u[o]={...r,color:a},S.storage.colors={entries:u},C.toasts.showToast("Color updated!")}})},onLongPress:function(){return n(r,o)},trailing:c.React.createElement(it,{style:{width:24,height:24,borderRadius:12,backgroundColor:r.color,borderWidth:1,borderColor:C.semanticColors.BACKGROUND_SECONDARY}})})}),c.React.createElement(at,{style:ye.fab,onPress:t},c.React.createElement(st,{source:X.getAssetIDByName("ic_add_24px"),style:ye.fabIcon})))}const ye=c.stylesheet.createThemedStyleSheet({fab:{position:"absolute",bottom:20,right:20,backgroundColor:C.semanticColors.BACKGROUND_SECONDARY,borderRadius:50,width:56,height:56,justifyContent:"center",alignItems:"center",elevation:6},fabIcon:{width:24,height:24,tintColor:"white"}});var ct={onLoad:function(){S.storage.colors=S.storage.colors??{entries:[]},U.logger.log("Hello world!")},onUnload:function(){U.logger.log("Goodbye, world.")},settings:ut};return O.default=ct,Object.defineProperty(O,"__esModule",{value:!0}),O})({},vendetta,vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.assets,vendetta.ui.components,reactNative,lazy,factories,finders,wrappers,vendetta.ui.toasts);
