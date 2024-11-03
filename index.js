(function(I,y,c,f,t,l,w,p,v){"use strict";const{showSimpleActionSheet:D}=f.findByProps("showSimpleActionSheet"),{FormInput:P,View:U}=p.Forms,{Button:m}=p.General;function A(e){let{entry:a,index:o,colorEntries:i}=e;const[s,r]=t.React.useState(a.userId);return t.React.createElement(U,{style:{padding:16}},t.React.createElement(P,{title:"Discord User ID",value:s,onChange:r}),t.React.createElement(m,{title:"Save",onPress:function(){if(!s){l.toasts.showToast("Please enter a valid User ID");return}const n=[...i];n[o]={...a,userId:s},c.storage.colors={entries:n},l.toasts.showToast("User ID updated!")}}))}const{openLazy:M,hideActionSheet:G}=f.findByProps("openLazy","hideActionSheet");function C(e,a){try{M(new Promise(function(o){return o({default:e})}),"ActionSheet",a)}catch(o){y.logger.error(o.stack),v.showToast("Got error when opening ActionSheet! Please check debug logs")}}const h={toInt(e){return e=e.replace(/^#/,""),parseInt(e,16)},toHex(e){return"#"+e.toString(16).toUpperCase()},HSLtoHEX(e,a,o){o/=100;const i=a*Math.min(o,1-o)/100,s=function(r){const n=(r+e/30)%12,d=o-i*Math.max(Math.min(n-3,9-n,1),-1);return Math.round(255*d).toString(16).padStart(2,"0")};return`#${s(0)}${s(8)}${s(4)}`}},{FormText:L,FormInput:T,FormRow:k}=p.Forms,{Button:B,View:b,TouchableOpacity:x,Image:N}=p.General,{pushModal:E,popModal:F}=f.findByProps("pushModal","popModal"),S=f.findByName("CustomColorPickerActionSheet"),H=function(e){let{colorEntries:a,inputUserId:o,setInputUserId:i}=e;return t.React.createElement(b,{style:{padding:16}},t.React.createElement(T,{title:"Discord User ID",placeholder:"Enter the user's Discord ID",value:o,onChange:function(s){return i(s)},style:{marginBottom:16}}),t.React.createElement(B,{title:"Next",onPress:function(){if(!o){l.toasts.showToast("Please enter a valid User ID");return}F("add-entry-modal"),C(S,{color:h.toInt("#000000"),title:"Select Color",onSelect:function(s){const r=h.toHex(s),n=a||[];n.push({userId:o,color:r}),c.storage.colors={entries:n},i(""),l.toasts.showToast("Color entry added!")}})}}))};function O(){const e=c.storage.colors?.entries||[],[a,o]=t.React.useState(""),i=function(r,n){D({key:"CardOverflow",header:{title:`User ID: ${r.userId}`},options:[{label:"Modify User ID",onPress:function(){E("edit-userid-modal",{render:function(){return t.React.createElement(A,{entry:r,index:n,colorEntries:e})}})}},{label:"Modify Color",onPress:function(){C(S,{color:h.toInt(r.color),title:"Select Color",onSelect:function(d){const g=h.toHex(d),u=[...e];u[n]={...r,color:g},c.storage.colors={entries:u},l.toasts.showToast("Color updated!")}})}},{label:"Delete",isDestructive:!0,onPress:function(){const d=e.filter(function(g,u){return u!==n});c.storage.colors={entries:d},l.toasts.showToast("Color entry removed!")}},{label:"Cancel"}]})},s=function(){E({key:"add-entry-modal",modal:{key:"add-entry-modal",modal:function(){return t.React.createElement(H,{colorEntries:e,inputUserId:a,setInputUserId:o})},animation:"slide-up",shouldPersistUnderModals:!1,props:{title:"Add New Entry"},closable:!0}})};return t.React.createElement(t.React.Fragment,null,e.map(function(r,n){return t.React.createElement(k,{key:n,label:`User ID: ${r.userId}`,subLabel:"Tap to change color",onPress:function(){C(S,{color:h.toInt(r.color),title:"Select Color",onSelect:function(d){const g=h.toHex(d),u=[...e];u[n]={...r,color:g},c.storage.colors={entries:u},l.toasts.showToast("Color updated!")}})},onLongPress:function(){return i(r,n)},trailing:t.React.createElement(b,{style:{width:24,height:24,borderRadius:12,backgroundColor:r.color,borderWidth:1,borderColor:l.semanticColors.BACKGROUND_SECONDARY}})})}),t.React.createElement(x,{style:R.fab,onPress:s},t.React.createElement(N,{source:w.getAssetIDByName("ic_add_24px"),style:R.fabIcon})))}const R=t.stylesheet.createThemedStyleSheet({fab:{position:"absolute",bottom:20,right:20,backgroundColor:l.semanticColors.BACKGROUND_SECONDARY,borderRadius:50,width:56,height:56,justifyContent:"center",alignItems:"center",elevation:6},fabIcon:{width:24,height:24,tintColor:"white"}});var $={onLoad:function(){c.storage.colors=c.storage.colors??{entries:[]},y.logger.log("Hello world!")},onUnload:function(){y.logger.log("Goodbye, world.")},settings:O};return I.default=$,Object.defineProperty(I,"__esModule",{value:!0}),I})({},vendetta,vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts);
