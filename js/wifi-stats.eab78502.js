"use strict";(self["webpackChunkrouter_sim"]=self["webpackChunkrouter_sim"]||[]).push([[396],{2419:function(e,i,t){t.d(i,{Z:function(){return a}});var n=t(6252),s=t(2119),l={setup(e){const i=(0,s.tv)(),t=i.getRoutes(),l=[];for(const n in t){const e=t[n].path,i=t[n].meta&&t[n].meta.title?t[n].meta.title:null;i&&l.push({path:e,title:i})}return(e,i)=>((0,n.wg)(),(0,n.iD)("div"))}};const r=l;var a=r},8671:function(e,i,t){t.r(i),t.d(i,{default:function(){return He}});var n=t(6252),s=t(2262),l=t(3577),r=t(9963),a=t(8637),u=t(3002),c=t(5317),o=t(7315),d=t(9770),g=t(9890),w=t(5693),f=t(1388),m=t(2419),p=t(8356),_=t(5690),k=t(2213),h=t(86),S=t(1088),v=t(744);const U={class:"flex flex-col md:flex-row items-center"},b={key:0},W={key:1};var y={props:{outline:Boolean,icon:{type:String,default:null},condition:{type:Boolean,default:!1},successMsg:{type:String,default:""},warningMsg:{type:String,default:""},isCritical:Boolean},setup(e){const i=e,t=(0,n.Fl)((()=>i.condition?"success":i.isCritical?"danger":"warning")),r=(0,n.Fl)((()=>i.outline?S.bN[t.value]:[S.cE[t.value],S.Y8[t.value]]));return(i,t)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,l.C_)([(0,s.SU)(r),"px-3 py-6 md:py-3 mx-6 md:mx-0 mb-2 border rounded transition-colors duration-150"])},[(0,n._)("div",U,[(0,n.Wm)(v.Z,{path:e.icon?e.icon:e.condition?(0,s.SU)(c.oL1):e.isCritical?(0,s.SU)(c.TrR):(0,s.SU)(c.jZI),w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",class:"md:mr-2"},null,8,["path"]),(0,n._)("span",null,[e.condition?((0,n.wg)(),(0,n.iD)("p",b,(0,l.zw)(e.successMsg),1)):((0,n.wg)(),(0,n.iD)("p",W,(0,l.zw)(e.warningMsg),1))])])],2))}};const z=y;var A=z,x=t(9622);const C={class:"flex flex-col md:flex-row items-center"},D={class:"text-center md:text-left"},Z={key:0};var F={props:{outline:Boolean,icon:{type:String,default:null},msg:{type:String,default:""},value:{type:String,default:""}},setup(e){const i=e,t=(0,n.Fl)((()=>i.outline?S.bN.info:[S.cE.info,S.Y8.info]));return(i,r)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,l.C_)([(0,s.SU)(t),"px-3 py-6 md:py-3 mx-6 md:mx-0 mb-2 border rounded transition-colors duration-150"])},[(0,n.Wm)(x.Z,null,{default:(0,n.w5)((()=>[(0,n._)("div",C,[(0,n.Wm)(v.Z,{path:e.icon?e.icon:(0,s.SU)(c.gCD),w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",class:"md:mr-2"},null,8,["path"]),(0,n._)("span",D,[(0,n._)("p",null,[(0,n.Uk)((0,l.zw)(e.msg)+" ",1),e.value?((0,n.wg)(),(0,n.iD)("b",Z,(0,l.zw)(e.value),1)):(0,n.kq)("",!0)])])])])),_:1})],2))}};const N=F;var L=N;const H={class:"flex flex-col gap-2"},q=(0,n._)("b",null,"SSID: ",-1),M=(0,n._)("b",null,"2,4 GHz: ",-1),G=(0,n._)("b",null," 5 GHz: ",-1),E=(0,n._)("b",null,"Mode:",-1),P={class:"flex flex-col gap-2"},R=(0,n._)("b",null,"Security Mode: ",-1),j={key:0},B=(0,n._)("b",null,"Version: ",-1),V=(0,n._)("b",null,"Encryption: ",-1),I=(0,n._)("b",null,"PW: ",-1),K={key:1},Y=(0,n._)("b",null,"Version: ",-1),O=(0,n._)("b",null,"Encryption: ",-1),T=(0,n._)("b",null,"Radius server Ip: ",-1),X=(0,n._)("b",null,"Radius server Port: ",-1),J={class:"flex flex-col gap-2"},Q=(0,n._)("b",null,"MAC-Filter: ",-1),$=(0,n._)("b",null,"Regel",-1),ee=(0,n._)("b",null,"SSID-Broadcast : ",-1),ie=(0,n._)("b",null,"Sendeleistung: ",-1),te=(0,n._)("b",null,"WLAN Zeitabschaltung: ",-1),ne={key:0},se=(0,n._)("b",null,"Wlan wird ausgeschalten von: ",-1),le=(0,n._)("b",null," bis: ",-1),re=(0,n._)("b",null,"WPS:",-1),ae=(0,n._)("div",{class:"h-2"},null,-1),ue={class:"flex flex-col gap-4"},ce=(0,n._)("p",{class:""}," Wenn du die Konfiguration abgeschlossen hast kannst du hier deine Einstellungen überprüfen. ",-1),oe=(0,n._)("p",{class:"mb-2"},[(0,n._)("b",null,"Überprüfe"),(0,n.Uk)(" nochmal ob deine Einstellungen alle "),(0,n._)("b",null,"Anforderungen"),(0,n.Uk)(" (siehe Whitebaord) erfüllen, bevor du die Checks startest. ")],-1),de={class:"grid grid-cols-1 md:grid-cols-2 gap-3"},ge=(0,n._)("div",{class:"flex flex-col gap-4"},[(0,n._)("p",null,[(0,n.Uk)("Hier siehst du die "),(0,n._)("b",null,"Auswertung deiner Konfiguration"),(0,n.Uk)(".")]),(0,n._)("p",null," Du kannst die aktuelle Konfiguration nun nicht mehr ändern. "),(0,n._)("p",{class:"mb-2"},[(0,n.Uk)(" Auf der "),(0,n._)("a",{href:"#/status",class:"link text-red-700 font-bold"}," ➡ Status Seite "),(0,n.Uk)(" kannst du einen "),(0,n._)("b",null,"Reset"),(0,n.Uk)(" durchführen und mit der Konfiguration nochmal von vorne anfangen. ")])],-1),we=(0,n._)("div",{class:"h-2"},null,-1),fe=(0,n._)("div",{class:"flex items-center gap-2"},[(0,n._)("svg",{role:"status",class:"mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n._)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),(0,n._)("p",{class:"font-bold text-lg"}," Die Konfiguration wird ausgewertet. Dies dauert einen kurzen Moment. ")],-1),me={key:3,id:"check-results-wrapper"},pe={class:"grid grid-cols-1 md:grid-cols-2 gap-2 w-full"},_e={class:"flex flex-col gap-1"},ke=(0,n._)("p",{class:"font-bold"}," Allgemein ",-1),he={class:"flex flex-col gap-1"},Se=(0,n._)("p",{class:"font-bold"}," Unterstütze WLAN-Standards ",-1),ve={class:"grid grid-cols-1 md:grid-cols-2 gap-2 mb-2 w-full"},Ue=(0,n._)("p",{class:"font-bold mb-2"}," Authentifizierung ",-1),be={key:3,class:"text-sm ml-2 text-slate-700"},We=(0,n.Uk)(" Überprüfe die Sicherheit deines Passworts unter "),ye=(0,n._)("a",{href:"https://checkdeinpasswort.de/",target:"_blank",class:"text-red-700"},"checkdeinpasswort.de",-1),ze=[We,ye],Ae={key:0},xe=(0,n._)("p",{class:"font-bold mb-2"}," Verschlüsselung ",-1),Ce={key:0},De={key:1},Ze={class:"grid grid-cols-1 md: grid-cols-2 gap-2"},Fe=(0,n._)("p",{class:"font-bold mb-2"}," Advanced-Settings ",-1);var Ne={setup(e){const i=(0,s.iH)(["Wireless","Statistics"]),t=(0,a.oR)(),S=(0,u.pm)(),v=(0,n.Fl)((()=>t.state.wifi.twoPointFourGHz||t.state.wifi.fiveGHz)),U=(0,n.Fl)((()=>{const e=t.state.wifi.mode;return console.log(e),console.log(e<=2||e>6&&e<8),e<=2||e>=6&&e<=8})),b=(0,n.Fl)((()=>{const e=t.state.wifi.mode;return 4===e||e>=6})),W=(0,n.Fl)((()=>{const e=t.state.wifi.mode;return 3===e||7===e||8===e||10===e})),y=(0,n.Fl)((()=>{const e=t.state.wifi.mode;return 5===e||e>=9})),z=(0,n.Fl)((()=>!(""===t.state.wifi.turn_off.from||""===t.state.wifi.turn_off.till))),x=(0,s.qj)({running:!1,done:t.state.checks.done,code:0,wrongCode:!1}),C=(0,s.iH)(null),D=(0,s.iH)(null),Z=(0,n.Fl)((()=>!!h.Au||t.state.checks.done)),F=()=>{console.log("starting checks ...",x.code),"23985"===x.code?(x.running=!0,C.value.toggleExpanded(),t.dispatch("checksDone",!0),S.info("Running checks ... "),setTimeout(N,6e3)):(x.wrongCode=!0,S.error("Please insert corect code"))},N=()=>{x.running=!1,S.success("Running checks done ")};return(e,a)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d.Z,{"title-stack":i.value},null,8,["title-stack"]),(0,n.Wm)(o.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p.Z,{ref_key:"overviewCard",ref:C,title:"Overview:",expanded:!(0,s.SU)(Z),class:"bg-gray-200"},{default:(0,n.w5)((()=>[(0,n._)("div",H,[(0,n._)("p",null,[q,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.ssid),1)]),(0,n._)("p",null,[M,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.twoPointFourGHz?"aktiviert":"deaktiviert"),1)]),(0,n._)("p",null,[G,(0,n.Uk)((0,l.zw)((0,s.SU)(t).state.wifi.fiveGHz?"aktiviert":"deaktiviert"),1)]),(0,n._)("p",null,[E,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(h.f8)[(0,s.SU)(t).state.wifi.mode].label),1)])]),(0,n.Wm)(w.Z),(0,n._)("div",P,[(0,n._)("p",null,[R,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(h.XG)[(0,s.SU)(t).state.wifi.security_mode]),1)]),"psk"===(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.iD)("div",j,[(0,n._)("p",null,[B,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(h._Z)[(0,s.SU)(t).state.wifi.security_psk.version].label),1)]),(0,n._)("p",null,[V,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(h.HL)[(0,s.SU)(t).state.wifi.security_psk.encryption].label),1)]),(0,n._)("p",null,[I,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.security_psk.pw),1)])])):"enterprise"===(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.iD)("div",K,[(0,n._)("p",null,[Y,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(h._Z)[(0,s.SU)(t).state.wifi.security_enterprise.version].label),1)]),(0,n._)("p",null,[O,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(h.HL)[(0,s.SU)(t).state.wifi.security_enterprise.encryption].label),1)]),(0,n._)("p",null,[T,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.security_enterprise.radius.ip),1)]),(0,n._)("p",null,[X,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.security_enterprise.radius.port),1)])])):(0,n.kq)("",!0)]),(0,n.Wm)(w.Z),(0,n._)("div",J,[(0,n._)("p",null,[Q,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.macFilter.enabled?"aktiviert":"deaktiviert")+" - ",1),$,(0,n.Uk)(": "+(0,l.zw)((0,s.SU)(t).state.wifi.macFilter.rule),1)]),(0,n._)("p",null,[ee,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.broadcast_ssid?"aktiviert":"deaktiviert"),1)]),(0,n._)("p",null,[ie,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.reduce_tx_power?"reduziert":"nicht reduziert"),1)]),(0,n._)("p",null,[te,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(z)?"aktiviert":"deaktiviert"),1)]),(0,s.SU)(z)?((0,n.wg)(),(0,n.iD)("p",ne,[se,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.turn_off.from??"00:00")+" ",1),le,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.turn_off.till??"00:00"),1)])):(0,n.kq)("",!0),(0,n._)("p",null,[re,(0,n.Uk)(" "+(0,l.zw)((0,s.SU)(t).state.wifi.wps_enabled?"aktiviert":"deaktiviert"),1)])])])),_:1},8,["expanded"]),ae,(0,s.SU)(Z)?((0,n.wg)(),(0,n.j4)(g.Z,{key:1,title:"Auswertung",class:"bg-blue-200"},{default:(0,n.w5)((()=>[(0,n._)("div",de,[ge,(0,n._)("div",null,[(0,n.Wm)(_.Z,{label:"Bedeutung der Farben!"},{default:(0,n.w5)((()=>[(0,n.Wm)(A,{condition:!0,"success-msg":"Diese Einstellung ist gut. 👍"}),(0,n.Wm)(A,{condition:!1,"warning-msg":"Diese Einstellung kann verbessert werden. 🤔"}),(0,n.Wm)(A,{condition:!1,"is-critical":"","warning-msg":"Diese Einstellung macht dein WLAN unsicher und angreifbar! 🤬"}),(0,n.Wm)(L,{msg:"Dies ist eine Information. 🤗"})])),_:1})])])])),_:1})):((0,n.wg)(),(0,n.j4)(g.Z,{key:0,title:"Run checks",class:"bg-red-200"},{default:(0,n.w5)((()=>[(0,n._)("div",ue,[ce,oe,(0,n.Wm)(_.Z,{label:"Starte die Überprüfung",help:"Gebe den Code ein und klicke auf den Button Run checks",form:""},{default:(0,n.w5)((()=>[(0,n.Wm)(k.Z,{ref_key:"runChecksCode",ref:D,placeholder:"Enter Code",type:"numbers","wrong-input":(0,s.SU)(x).wrongCode,onInput:a[0]||(a[0]=e=>(0,s.SU)(x).code=e.target.value),onKeyup:(0,r.D2)(F,["enter"])},null,8,["wrong-input","onKeyup"]),(0,n.Wm)(f.Z,{type:"button",color:"warning",label:"Run checks",onClick:F})])),_:1})])])),_:1})),we,(0,s.SU)(x).running?((0,n.wg)(),(0,n.j4)(g.Z,{key:2,class:"bg-orange-600"},{default:(0,n.w5)((()=>[fe])),_:1})):(0,n.kq)("",!0),(0,s.SU)(Z)&&!(0,s.SU)(x).running?((0,n.wg)(),(0,n.iD)("div",me,[(0,n.Wm)(p.Z,{expanded:"",title:"WLAN-Settings",class:"mb-2"},{default:(0,n.w5)((()=>[(0,n._)("div",pe,[(0,n._)("div",_e,[ke,(0,n.Wm)(A,{condition:(0,s.SU)(v),icon:(0,s.SU)(c.y_2),"success-msg":"WLAN ist aktiviert.","warning-msg":"Du hast das WLAN nicht aktiviert"},null,8,["condition","icon"]),(0,n.Wm)(A,{condition:(0,s.SU)(t).state.wifi.twoPointFourGHz,"success-msg":"Die 2,4 GHz Frequenz is aktiviert.","warning-msg":"Die 2,4 GHz Frequenz ist nicht aktiviert"},null,8,["condition"]),(0,n.Wm)(A,{condition:(0,s.SU)(t).state.wifi.fiveGHz,"success-msg":"Die 5 GHz Frequenz is aktiviert.","warning-msg":"Die 5 GHz Frequenz ist nicht aktiviert"},null,8,["condition"]),""!=(0,s.SU)(t).state.wifi.ssid?((0,n.wg)(),(0,n.j4)(L,{key:0,msg:"Your SSID is:",value:(0,s.SU)(t).state.wifi.ssid},null,8,["value"])):(0,n.kq)("",!0)]),(0,n._)("div",he,[Se,(0,n.Wm)(A,{condition:!(0,s.SU)(U),"success-msg":"Unterstützung für ältere Wifi-Standards deaktiviert. Gut 👍","warning-msg":"Unterstützung für ältere Wifi-Standards aktiviert. Das ist nicht nötig 🤔"},null,8,["condition"]),(0,n.Wm)(A,{condition:(0,s.SU)(b),"success-msg":"Wifi-4️⃣ wird unterstützt.","warning-msg":"Wifi-4️⃣ wird nicht unterstützt."},null,8,["condition"]),(0,n.Wm)(A,{condition:(0,s.SU)(W),"success-msg":"Wifi-5️⃣ wird unterstützt.","warning-msg":"Wifi-5️⃣ wird nicht unterstützt."},null,8,["condition"]),(0,n.Wm)(A,{condition:(0,s.SU)(y),"success-msg":"Wifi-6️⃣ wird unterstützt.","warning-msg":"Wifi-6️⃣ wird nicht unterstützt."},null,8,["condition"])])]),(0,n.Wm)(A,{condition:!(0,s.SU)(t).state.wifi.channel>0,"success-msg":"Auto Channel aktiviert. Der Router wählt automatisch den verwendeten Kanal.","warning-msg":"Du hast einen festen Kanal gewählt. Auto Channel ist meist die bessere Option."},null,8,["condition"])])),_:1}),(0,n.Wm)(p.Z,{title:"WLAN-Security",expanded:"",class:"mb-2"},{default:(0,n.w5)((()=>[(0,n._)("div",ve,[(0,n._)("div",null,[Ue,(0,n.Wm)(A,{condition:!("disabled"==(0,s.SU)(t).state.wifi.security_mode||"wep"==(0,s.SU)(t).state.wifi.security_mode),"success-msg":"WLAN durch Authentifizierung abgesichert.","warning-msg":"WLAN nicht abgesichert.","is-critical":""},null,8,["condition"]),"disabled"==(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.j4)(L,{key:0,msg:"Du hast keine Authentifizierung ausgewählt!"})):(0,n.kq)("",!0),"wep"==(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.j4)(L,{key:1,msg:"Die Methode WEP ist veraltet und unsicher!"})):(0,n.kq)("",!0),"psk"==(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.j4)(L,{key:2,msg:"Dein Passwort ist:",value:(0,s.SU)(t).state.wifi.security_psk.pw},null,8,["value"])):(0,n.kq)("",!0),"psk"==(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.iD)("p",be,ze)):(0,n.kq)("",!0),"enterprise"==(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.j4)(L,{key:4,msg:"Für diese Authentifizierung brauchst du einen extra Radius server!","is-warning":""})):(0,n.kq)("",!0)]),"disabled"!=(0,s.SU)(t).state.wifi.security_mode&&"wep"!=(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.iD)("div",Ae,[xe,"psk"==(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.iD)("div",Ce,[(0,n.Wm)(A,{condition:(0,s.SU)(t).state.wifi.security_psk.version>0,"success-msg":"WLAN Verschlüsselung sicher","warning-msg":"WLAN Verschlüsselung nicht sicher. WPA kann gehackt werden.","is-critical":""},null,8,["condition"]),(0,n.Wm)(A,{condition:1==(0,s.SU)(t).state.wifi.security_psk.encryption,"success-msg":"Verschlüsselungsalgorithmus sicher. 👍","warning-msg":"Verschlüsselungsalgorithmus veraltet. Nutze AES."},null,8,["condition"])])):"enterprise"==(0,s.SU)(t).state.wifi.security_mode?((0,n.wg)(),(0,n.iD)("div",De,[(0,n.Wm)(A,{condition:(0,s.SU)(t).state.wifi.security_enterprise.version>0,"success-msg":"WLAN Verschlüsselung sicher","warning-msg":"WLAN Verschlüsselung nicht sicher. WPA kann gehackt werden.","is-critical":""},null,8,["condition"]),(0,n.Wm)(A,{condition:1==(0,s.SU)(t).state.wifi.security_enterprise.encryption,"success-msg":"Verschlüsselungsalgorithmus sicher. 👍","warning-msg":"Verschlüsselungsalgorithmus veraltet. Nutze AES."},null,8,["condition"])])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)])])),_:1}),(0,n.Wm)(p.Z,{title:"Weitere Einstellungen",expanded:"",class:"mb-2"},{default:(0,n.w5)((()=>[(0,n._)("div",Ze,[(0,n._)("div",null,[Fe,(0,n.Wm)(_.Z,{help:"Wird der SSID Broadcast deaktiviert wird das WLAN in der Liste der verfügbaren Netzwerke nicht angezeigt. Für Hacker ist es jedoch trotzdem leicht auffindbar."},{default:(0,n.w5)((()=>[(0,n.Wm)(A,{condition:(0,s.SU)(t).state.wifi.broadcast_ssid,"success-msg":"SSID-Broadcast aktiviert. ","warning-msg":"SSID-Broadcast deaktiviert."},null,8,["condition"])])),_:1}),(0,n.Wm)(_.Z,{help:"Durch die Reduzierung der Sendeleistung wird die Reichweite des Netzwerks beeinflusst."},{default:(0,n.w5)((()=>[(0,n.Wm)(A,{condition:(0,s.SU)(t).state.wifi.reduce_tx_power,"success-msg":"Sendeleistung der Antennen reduziert.","warning-msg":"Sendeleistung der Antennen nicht reduziert."},null,8,["condition"])])),_:1}),(0,n.Wm)(_.Z,{label:"Zeitschaltung",help:"Du solltest das WLAN in der Nacht automatisch abschalten!"},{default:(0,n.w5)((()=>[(0,n.Wm)(A,{condition:!(""==(0,s.SU)(t).state.wifi.turn_off.from||""==(0,s.SU)(t).state.wifi.turn_off.till),"success-msg":"Automatische Zeitabschaltung aktiviert.","warning-msg":"Automatische Zeitabschaltung nicht aktiviert."},null,8,["condition"])])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(_.Z,{label:"MAC-Filter",help:"Durch die Aktivierung des MAC-Filters kann man WLAN Geräte mit bestimmten MAC-Adressen vom WLAN ausschließen."},{default:(0,n.w5)((()=>[(0,n.Wm)(A,{condition:(0,s.SU)(t).state.wifi.macFilter.enabled,"success-msg":"MAC-Filter aktiviert.","warning-msg":"MAC-Filter nicht aktiviert."},null,8,["condition"])])),_:1}),(0,n.Wm)(_.Z,{label:"WPS-Einstellungen",help:"WPS vereinfacht es neue Geräte zum WLAN hinzuzufügen. Macht den WLAN-Zugang aber auch einfacher angreifbar."},{default:(0,n.w5)((()=>[(0,n.Wm)(A,{condition:!(0,s.SU)(t).state.wifi.wps_enabled,"success-msg":"WPS nicht aktiviert.","warning-msg":"WPS aktiviert."},null,8,["condition"])])),_:1})])])])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(m.Z)],64))}};const Le=Ne;var He=Le}}]);
//# sourceMappingURL=wifi-stats.eab78502.js.map