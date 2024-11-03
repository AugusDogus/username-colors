(function(y,p,c,d,e,u,b,f,B){"use strict";const{openLazy:M,hideActionSheet:V}=d.findByProps("openLazy","hideActionSheet");function C(t,i){try{M(new Promise(function(a){return a({default:t})}),"ActionSheet",i)}catch(a){p.logger.error(a.stack),B.showToast("Got error when opening ActionSheet! Please check debug logs")}}const g={toInt(t){return t=t.replace(/^#/,""),parseInt(t,16)},toHex(t){return"#"+t.toString(16).toUpperCase()},HSLtoHEX(t,i,a){a/=100;const n=i*Math.min(a,1-a)/100,r=function(s){const o=(s+t/30)%12,l=a-n*Math.max(Math.min(o-3,9-o,1),-1);return Math.round(255*l).toString(16).padStart(2,"0")};return`#${r(0)}${r(8)}${r(4)}`}},{AlertModal:T,AlertActionButton:U}=d.findByProps("AlertModal","AlertActions"),k=U;function x(t){return React.createElement(T,t)}const{Stack:R,TextInput:N,ScrollView:F}=f.Forms,{Button:I}=f.General;function S(t){let{initialValue:i="",onConfirm:a,title:n}=t;const[r,s]=e.React.useState(i),[o,l]=e.React.useState(""),[D,m]=e.React.useState(!1),_=function(h){return/^\d+$/.test(h)};function P(){if(!_(r)){l("Please enter a valid Discord User ID (numbers only)");return}m(!0),a(r),m(!1)}return e.React.createElement(x,{title:n,content:"Enter the Discord User ID:",extraContent:e.React.createElement(R,{style:{marginTop:-12}},e.React.createElement(N,{autoFocus:!0,isClearable:!0,value:r,onChange:function(h){s(h),o&&l("")},returnKeyType:"done",onSubmitEditing:P,state:o?"error":void 0,errorMessage:o||void 0,keyboardType:"numeric"}),e.React.createElement(F,{horizontal:!0,showsHorizontalScrollIndicator:!1,style:{gap:8}},e.React.createElement(I,{size:"sm",variant:"tertiary",text:"Import from clipboard",icon:b.getAssetIDByName("ic_clipboard"),onPress:function(){return e.clipboard.getString().then(function(h){return s(h)})}}))),actions:e.React.createElement(R,null,e.React.createElement(I,{loading:D,text:"Confirm",variant:"primary",disabled:!r,onPress:P}),e.React.createElement(k,{disabled:D,text:"Cancel",variant:"secondary"}))})}const{FormText:K,FormInput:j,FormRow:$}=f.Forms,{Button:Y,View:H,TouchableOpacity:O,Image:G}=f.General;d.findByProps("pushModal","popModal");const{openAlert:A,dismissAlert:E}=d.findByProps("openAlert","dismissAlert"),v=d.findByName("CustomColorPickerActionSheet");function L(){const t=c.storage.colors?.entries||[],i=function(n,r){A({key:"edit-userid-modal",content:e.React.createElement(S,{title:"Edit User ID",initialValue:n.userId,onConfirm:function(s){const o=[...t];o[r]={...n,userId:s},c.storage.colors={entries:o},u.toasts.showToast("User ID updated!"),E("edit-userid-modal")}})})},a=function(){A({key:"add-userid-modal",content:e.React.createElement(S,{title:"Add New User ID",onConfirm:function(n){E("add-userid-modal"),C(v,{color:g.toInt("#000000"),title:"Select Color",onSelect:function(r){const s=g.toHex(r),o=t||[];o.push({userId:n,color:s}),c.storage.colors={entries:o},u.toasts.showToast("Color entry added!")}})}})})};return e.React.createElement(e.React.Fragment,null,t.map(function(n,r){return e.React.createElement($,{key:r,label:`User ID: ${n.userId}`,subLabel:"Tap to change color",onPress:function(){C(v,{color:g.toInt(n.color),title:"Select Color",onSelect:function(s){const o=g.toHex(s),l=[...t];l[r]={...n,color:o},c.storage.colors={entries:l},u.toasts.showToast("Color updated!")}})},onLongPress:function(){return i(n,r)},trailing:e.React.createElement(H,{style:{width:24,height:24,borderRadius:12,backgroundColor:n.color,borderWidth:1,borderColor:u.semanticColors.BACKGROUND_SECONDARY}})})}),e.React.createElement(O,{style:w.fab,onPress:a},e.React.createElement(G,{source:b.getAssetIDByName("ic_add_24px"),style:w.fabIcon})))}const w=e.stylesheet.createThemedStyleSheet({fab:{position:"absolute",bottom:20,right:20,backgroundColor:u.semanticColors.BACKGROUND_SECONDARY,borderRadius:50,width:56,height:56,justifyContent:"center",alignItems:"center",elevation:6},fabIcon:{width:24,height:24,tintColor:"white"}});var z={onLoad:function(){c.storage.colors=c.storage.colors??{entries:[]},p.logger.log("Hello world!")},onUnload:function(){p.logger.log("Goodbye, world.")},settings:L};return y.default=z,Object.defineProperty(y,"__esModule",{value:!0}),y})({},vendetta,vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts);
