(function(A,l,d,a,i,g,R,f,p,y,E){"use strict";const B=a.findByProps("ActionSheet")?.ActionSheet??a.find(function(e){return e.render?.name==="ActionSheet"}),{ActionSheetTitleHeader:N,ActionSheetCloseButton:k}=a.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton"),U=a.findByProps("openLazy","hideActionSheet"),{openLazy:b,hideActionSheet:C}=U;function S(e,t){try{b(new Promise(function(o){return o({default:e})}),"ActionSheet",t)}catch(o){l.logger.error(o.stack),y.showToast("Got error when opening ActionSheet! Please check debug logs")}}a.findByProps("showSimpleActionSheet");const w=function(e){let{title:t,onClose:o,children:u}=e;return React.createElement(B,null,React.createElement(N,{title:t,trailing:React.createElement(k,{onPress:o??function(){return C()}})}),React.createElement(i.ReactNative.View,null,u))};w.open=function(e,t){b(new Promise(function(o){return o({default:e})}),"ActionSheet",t)};const h={toInt(e){return e=e.replace(/^#/,""),parseInt(e,16)},toHex(e){return"#"+e.toString(16).toUpperCase()},HSLtoHEX(e,t,o){o/=100;const u=t*Math.min(o,1-o)/100,n=function(r){const c=(r+e/30)%12,s=o-u*Math.max(Math.min(c-3,9-c,1),-1);return Math.round(255*s).toString(16).padStart(2,"0")};return`#${n(0)}${n(8)}${n(4)}`}},{FormRow:m}=p.Forms,{Text:v}=p.General,H=a.findByName("CustomColorPickerActionSheet"),x=i.stylesheet.createThemedStyleSheet({wompwomp:{flexDirection:"column",gap:8},destructiveIcon:{tintColor:g.semanticColors.TEXT_DANGER},destructiveText:{color:g.semanticColors.TEXT_DANGER,fontWeight:"bold"}});function L(e){let{entry:t,index:o,entries:u,setEntries:n}=e;return React.createElement(w,{title:"Message Actions"},React.createElement(m,{label:"Modify User ID",onPress:function(){R.showInputAlert({title:"Edit User ID",placeholder:"Enter new User ID",initialValue:t.userId,confirmText:"Save",onConfirm:function(r){const c=[...u];c[o]={...t,userId:r},d.storage.colors={entries:c},n(c),y.showToast("User ID updated!",f.getAssetIDByName("Check")),C()}})}}),React.createElement(m,{label:"Change Color",onPress:function(){S(H,{color:h.toInt(t.color),title:"Select Color",onSelect:function(r){const c=h.toHex(r),s=[...u];s[o]={...t,color:c},d.storage.colors={entries:s},n(s),y.showToast("Color updated!",f.getAssetIDByName("Check")),C()}})}}),React.createElement(m,{label:React.createElement(v,{style:x.destructiveText},"Delete Entry"),leading:React.createElement(m.Icon,{style:x.destructiveIcon,source:f.getAssetIDByName("ic_trash_24px")}),onPress:function(){const r=u.filter(function(c,s){return s!==o});d.storage.colors={entries:r},n(r),y.showToast("Entry deleted!",f.getAssetIDByName("Check")),C()}}))}const{FormRow:M}=p.Forms,{View:G,TouchableOpacity:O,Image:F}=p.General,D=a.findByName("CustomColorPickerActionSheet");function $(){const[e,t]=i.React.useState(d.storage.colors?.entries||[]),o=function(n,r){S(L,{entry:n,index:r,entries:e,setEntries:t})},u=function(){R.showInputAlert({title:"Enter User ID",confirmText:"Save",cancelText:"Cancel",placeholder:"Type here...",onConfirm:function(n){S(D,{color:h.toInt("#000000"),title:"Select Color",onSelect:function(r){const c=h.toHex(r),s=[...e,{userId:n,color:c}];d.storage.colors={entries:s},t(s),g.toasts.showToast("Color entry added!")}})}})};return i.React.createElement(i.React.Fragment,null,e.map(function(n,r){return i.React.createElement(M,{key:r,label:`User ID: ${n.userId}`,subLabel:"Tap to change color",onPress:function(){S(D,{color:h.toInt(n.color),title:"Select Color",onSelect:function(c){const s=h.toHex(c),I=[...e];I[r]={...n,color:s},d.storage.colors={entries:I},t(I),g.toasts.showToast("Color updated!")}})},onLongPress:function(){return o(n,r)},trailing:i.React.createElement(G,{style:{width:24,height:24,borderRadius:12,backgroundColor:n.color,borderWidth:1,borderColor:g.semanticColors.BACKGROUND_SECONDARY}})})}),i.React.createElement(O,{style:P.fab,onPress:u},i.React.createElement(F,{source:f.getAssetIDByName("ic_add_24px"),style:P.fabIcon})))}const P=i.stylesheet.createThemedStyleSheet({fab:{position:"absolute",bottom:20,right:20,backgroundColor:g.semanticColors.BACKGROUND_SECONDARY,borderRadius:50,width:56,height:56,justifyContent:"center",alignItems:"center",elevation:6},fabIcon:{width:24,height:24,tintColor:"white"}});let T;function j(){try{const e=a.findByName("Text")||a.findByDisplayName("Text");if(!e){l.logger.log("Could not find Text component");return}l.logger.log("Found Text component:",e),e.render?T=E.before("render",e,function(t){l.logger.log("Text render props:",t[0])}):typeof e=="function"?T=E.before(null,e,function(t){l.logger.log("Text function props:",t[0])}):e.default?.render?T=E.before("render",e.default,function(t){l.logger.log("Text default.render props:",t[0])}):l.logger.log("Could not find patchable function on Text component:",Object.keys(e)),l.logger.log("Successfully set up patch")}catch(e){l.logger.log("Error while setting up patch:",e.message),l.logger.log(e.stack)}}var z={onLoad:function(){d.storage.colors=d.storage.colors??{entries:[]},j(),l.logger.log("Username Colors plugin loaded!")},onUnload:function(){T?.(),l.logger.log("Username Colors plugin unloaded.")},settings:$};return A.default=z,Object.defineProperty(A,"__esModule",{value:!0}),A})({},vendetta,vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.alerts,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts,vendetta.patcher);
