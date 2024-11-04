(function(g,S,s,c,r,u,m,y,h,p){"use strict";const T=c.findByProps("ActionSheet")?.ActionSheet??c.find(function(e){return e.render?.name==="ActionSheet"}),{ActionSheetTitleHeader:D,ActionSheetCloseButton:v}=c.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton"),P=c.findByProps("openLazy","hideActionSheet"),{openLazy:B,hideActionSheet:R}=P;c.findByProps("showSimpleActionSheet");const b=function(e){let{title:o,onClose:t,children:d}=e;return React.createElement(T,null,React.createElement(D,{title:o,trailing:React.createElement(v,{onPress:t??function(){return R()}})}),React.createElement(r.ReactNative.View,null,d))};b.open=function(e,o){B(new Promise(function(t){return t({default:e})}),"ActionSheet",o)};const{FormRow:w}=h.Forms,{Text:x}=h.General,k=r.stylesheet.createThemedStyleSheet({wompwomp:{flexDirection:"column",gap:8},destructiveIcon:{tintColor:u.semanticColors.TEXT_DANGER}});function N(e){let{kaboom:o}=e;return React.createElement(b,{title:"Message Actions"},React.createElement(w,{label:React.createElement(x,null,"Delete Files"),leading:React.createElement(w.Icon,{style:k.destructiveIcon,source:y.getAssetIDByName("ic_trash_24px")}),onPress:function(){return m.showConfirmationAlert({title:"Delete DOOM files?",content:"Are you sure you want to delete DOOM files?",confirmText:"Delete",confirmColor:"RED",cancelText:"Cancel",onConfirm:async function(){R(),o(),p.showToast("Deleted files",y.getAssetIDByName("Check"))}})}}))}const{openLazy:O,hideActionSheet:F}=c.findByProps("openLazy","hideActionSheet");function C(e,o){try{O(new Promise(function(t){return t({default:e})}),"ActionSheet",o)}catch(t){S.logger.error(t.stack),p.showToast("Got error when opening ActionSheet! Please check debug logs")}}const f={toInt(e){return e=e.replace(/^#/,""),parseInt(e,16)},toHex(e){return"#"+e.toString(16).toUpperCase()},HSLtoHEX(e,o,t){t/=100;const d=o*Math.min(t,1-t)/100,n=function(a){const i=(a+e/30)%12,l=t-d*Math.max(Math.min(i-3,9-i,1),-1);return Math.round(255*l).toString(16).padStart(2,"0")};return`#${n(0)}${n(8)}${n(4)}`}},{FormRow:L}=h.Forms,{View:H,TouchableOpacity:M,Image:G}=h.General,E=c.findByName("CustomColorPickerActionSheet");function _(){const[e,o]=r.React.useState(s.storage.colors?.entries||[]),t=function(n,a){C(N,{kaboom:function(){console.log("kaboom")}})},d=function(){m.showInputAlert({title:"Enter User ID",confirmText:"Save",cancelText:"Cancel",placeholder:"Type here...",onConfirm:function(n){C(E,{color:f.toInt("#000000"),title:"Select Color",onSelect:function(a){const i=f.toHex(a),l=[...e,{userId:n,color:i}];s.storage.colors={entries:l},o(l),u.toasts.showToast("Color entry added!")}})}})};return r.React.createElement(r.React.Fragment,null,e.map(function(n,a){return r.React.createElement(L,{key:a,label:`User ID: ${n.userId}`,subLabel:"Tap to change color",onPress:function(){C(E,{color:f.toInt(n.color),title:"Select Color",onSelect:function(i){const l=f.toHex(i),A=[...e];A[a]={...n,color:l},s.storage.colors={entries:A},o(A),u.toasts.showToast("Color updated!")}})},onLongPress:function(){return t()},trailing:r.React.createElement(H,{style:{width:24,height:24,borderRadius:12,backgroundColor:n.color,borderWidth:1,borderColor:u.semanticColors.BACKGROUND_SECONDARY}})})}),r.React.createElement(M,{style:I.fab,onPress:d},r.React.createElement(G,{source:y.getAssetIDByName("ic_add_24px"),style:I.fabIcon})))}const I=r.stylesheet.createThemedStyleSheet({fab:{position:"absolute",bottom:20,right:20,backgroundColor:u.semanticColors.BACKGROUND_SECONDARY,borderRadius:50,width:56,height:56,justifyContent:"center",alignItems:"center",elevation:6},fabIcon:{width:24,height:24,tintColor:"white"}});var $={onLoad:function(){s.storage.colors=s.storage.colors??{entries:[]},S.logger.log("Hello world!")},onUnload:function(){S.logger.log("Goodbye, world.")},settings:_};return g.default=$,Object.defineProperty(g,"__esModule",{value:!0}),g})({},vendetta,vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.alerts,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts);
