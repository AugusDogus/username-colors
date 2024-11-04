(function(g,C,l,h,i,d,b,w,y,m){"use strict";const{openLazy:v,hideActionSheet:x}=h.findByProps("openLazy","hideActionSheet");function f(e,a){try{v(new Promise(function(s){return s({default:e})}),"ActionSheet",a)}catch(s){C.logger.error(s.stack),m.showToast("Got error when opening ActionSheet! Please check debug logs")}}const u={toInt(e){return e=e.replace(/^#/,""),parseInt(e,16)},toHex(e){return"#"+e.toString(16).toUpperCase()},HSLtoHEX(e,a,s){s/=100;const I=a*Math.min(s,1-s)/100,t=function(r){const o=(r+e/30)%12,n=s-I*Math.max(Math.min(o-3,9-o,1),-1);return Math.round(255*n).toString(16).padStart(2,"0")};return`#${t(0)}${t(8)}${t(4)}`}},{FormInput:B,FormRow:A}=y.Forms,{Button:H,View:D,TouchableOpacity:R,Image:T}=y.General,S=h.findByName("CustomColorPickerActionSheet"),E=h.findByProps("ActionSheet")?.ActionSheet??h.find(function(e){return e.render?.name==="ActionSheet"});function P(){const[e,a]=i.React.useState(l.storage.colors?.entries||[]),s=function(t,r){f(E,{header:`User ID: ${t.userId}`,options:[{label:"Modify User ID",onPress:function(){b.showInputAlert({title:"Edit User ID",placeholder:"Enter new User ID",initialValue:t.userId,confirmText:"Save",onConfirm:function(o){const n=[...e];n[r]={...t,userId:o},l.storage.colors={entries:n},a(n),d.toasts.showToast("User ID updated!")}})}},{label:"Change Color",onPress:function(){f(S,{color:u.toInt(t.color),title:"Select Color",onSelect:function(o){const n=u.toHex(o),c=[...e];c[r]={...t,color:n},l.storage.colors={entries:c},a(c),d.toasts.showToast("Color updated!")}})}},{label:"Delete Entry",isDestructive:!0,onPress:function(){const o=e.filter(function(n,c){return c!==r});l.storage.colors={entries:o},a(o),d.toasts.showToast("Entry deleted!")}},{label:"Cancel",isCancel:!0}]})},I=function(){b.showInputAlert({title:"Enter User ID",confirmText:"Save",cancelText:"Cancel",placeholder:"Type here...",onConfirm:function(t){f(S,{color:u.toInt("#000000"),title:"Select Color",onSelect:function(r){const o=u.toHex(r),n=[...e,{userId:t,color:o}];l.storage.colors={entries:n},a(n),d.toasts.showToast("Color entry added!")}})}})};return i.React.createElement(i.React.Fragment,null,e.map(function(t,r){return i.React.createElement(A,{key:r,label:`User ID: ${t.userId}`,subLabel:"Tap to change color",onPress:function(){f(S,{color:u.toInt(t.color),title:"Select Color",onSelect:function(o){const n=u.toHex(o),c=[...e];c[r]={...t,color:n},l.storage.colors={entries:c},a(c),d.toasts.showToast("Color updated!")}})},onLongPress:function(){return s(t,r)},trailing:i.React.createElement(D,{style:{width:24,height:24,borderRadius:12,backgroundColor:t.color,borderWidth:1,borderColor:d.semanticColors.BACKGROUND_SECONDARY}})})}),i.React.createElement(R,{style:p.fab,onPress:I},i.React.createElement(T,{source:w.getAssetIDByName("ic_add_24px"),style:p.fabIcon})))}const p=i.stylesheet.createThemedStyleSheet({fab:{position:"absolute",bottom:20,right:20,backgroundColor:d.semanticColors.BACKGROUND_SECONDARY,borderRadius:50,width:56,height:56,justifyContent:"center",alignItems:"center",elevation:6},fabIcon:{width:24,height:24,tintColor:"white"}});var U={onLoad:function(){l.storage.colors=l.storage.colors??{entries:[]},C.logger.log("Hello world!")},onUnload:function(){C.logger.log("Goodbye, world.")},settings:P};return g.default=U,Object.defineProperty(g,"__esModule",{value:!0}),g})({},vendetta,vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.alerts,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts);
