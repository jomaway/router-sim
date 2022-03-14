"use strict";(self["webpackChunkrouter_sim"]=self["webpackChunkrouter_sim"]||[]).push([[396],{2419:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(6252),o=i(2119),l={setup(e){const t=(0,o.tv)(),i=t.getRoutes(),l=[];for(const n in i){const e=i[n].path,t=i[n].meta&&i[n].meta.title?i[n].meta.title:null;t&&l.push({path:e,title:t})}return(e,t)=>((0,n.wg)(),(0,n.iD)("div"))}};const s=l;var a=s},8373:function(e,t,i){i.r(t),i.d(t,{default:function(){return St}});var n=i(6252),o=i(3577),l=i(2262),s=i(8637),a=i(5317),r=i(7315),c=i(9151),u=i(9890),d=i(5693),w=i(1388),k=i(2419),f=i(736),U=i(8356),_=i(5690),p=i(2213),S=i(86);const g={class:"flex flex-col gap-2"},b=(0,n._)("b",null,"SSID: ",-1),y=(0,n._)("b",null,"2,4 GHz: ",-1),m=(0,n._)("b",null," 5 GHz: ",-1),h=(0,n._)("b",null,"Mode:",-1),Z={class:"flex flex-col gap-2"},W=(0,n._)("b",null,"Security Mode: ",-1),v={key:0},j=(0,n._)("b",null,"Version: ",-1),z=(0,n._)("b",null,"Encryption: ",-1),A=(0,n._)("b",null,"PW: ",-1),L={key:1},C=(0,n._)("b",null,"Version: ",-1),I=(0,n._)("b",null,"Encryption: ",-1),q=(0,n._)("b",null,"Radius server Ip: ",-1),N=(0,n._)("b",null,"Radius server Port: ",-1),D={class:"flex flex-col gap-2"},F=(0,n._)("b",null,"MAC-Filter: ",-1),G=(0,n._)("b",null,"Regel",-1),M=(0,n._)("b",null,"SSID-Broadcast : ",-1),P=(0,n._)("b",null,"Sendeleistung: ",-1),H=(0,n._)("b",null,"WLAN Zeitabschaltung: ",-1),R={key:0},E=(0,n._)("b",null,"Wlan wird ausgeschalten von: ",-1),x=(0,n._)("b",null," bis: ",-1),T=(0,n._)("b",null,"WPS:",-1),B=(0,n._)("div",{class:"h-2"},null,-1),Y={class:"flex flex-col gap-4"},V=(0,n._)("p",{class:""}," Wenn du die Konfiguration abgeschlossen hast kannst du hier deine Einstellungen überprüfen. ",-1),K=(0,n._)("p",{class:"mb-2"},[(0,n._)("b",null,"Überprüfe"),(0,n.Uk)(" nochmal ob deine Einstellungen alle "),(0,n._)("b",null,"Anforderungen"),(0,n.Uk)(" (siehe Whitebaord) erfüllen, bevor du die Checks startest. ")],-1),O=(0,n.Uk)(" WLAN is enabled. "),X=(0,n.Uk)(" WLAN is disabled. Go to Wireless Settings to enable it. "),J={key:2,class:"mb-6"},Q=(0,n.Uk)(" The "),$=(0,n._)("b",null,"2,4 GHz",-1),ee=(0,n.Uk)(" frequency is enabled. "),te=(0,n.Uk)(" The "),ie=(0,n._)("b",null,"2,4 GHz",-1),ne=(0,n.Uk)(" frequency is disabled. Devices which only support this frequency can't connect to your Network. "),oe=(0,n.Uk)(" The "),le=(0,n._)("b",null,"5 GHz",-1),se=(0,n.Uk)(" frequency is enabled. "),ae=(0,n.Uk)(" The "),re=(0,n._)("b",null,"5 GHz",-1),ce=(0,n.Uk)(" frequency is disabled. Devices which only support this frequency can't connect to your Network. "),ue=(0,n.Uk)(" Your SSID is: "),de=(0,n.Uk)(" Your SSID is emtpy! "),we=(0,n._)("b",null,"WLAN Mode:",-1),ke=(0,n.Uk)(" Good. 👍 Older Wifi-Versions should not be supported if not necessary! "),fe=(0,n._)("b",null,"WLAN Mode:",-1),Ue=(0,n.Uk)(" Ahh. 🤔 You enabled support for older Wifi-versions. If not necessary disable them. "),_e=(0,n._)("b",null,"WLAN Mode:",-1),pe=(0,n.Uk)(" Wifi-4️⃣ is supported "),Se=(0,n._)("b",null,"WLAN Mode:",-1),ge=(0,n.Uk)(" Wifi-4️⃣ is not supported! "),be=(0,n._)("b",null,"WLAN Mode:",-1),ye=(0,n.Uk)(" Wifi-5️⃣ is supported "),me=(0,n._)("b",null,"WLAN Mode:",-1),he=(0,n.Uk)(" Wifi-5️⃣ is not supported! "),Ze=(0,n._)("b",null,"WLAN Mode:",-1),We=(0,n.Uk)(" Wifi-6️⃣is supported "),ve=(0,n._)("b",null,"WLAN Mode:",-1),je=(0,n.Uk)(" Wifi-6️⃣ is not supported! "),ze=(0,n._)("b",null,"WLAN Channel Settings:",-1),Ae=(0,n.Uk)(" Do you know what you are doing? If you don't have a reason choose the option "),Le=(0,n._)("i",null,"auto",-1),Ce=(0,n.Uk)(". "),Ie={key:1,class:"mb-6"},qe=(0,n._)("b",null,"Danger:",-1),Ne=(0,n.Uk)(" Security level to low. "),De=(0,n._)("b",null,"Warning:",-1),Fe=(0,n.Uk)(" Good Idea to use WPA/WPA2 Enterprise. But we don't have an Radius Server. "),Ge=(0,n._)("b",null,"Good choise:",-1),Me=(0,n.Uk)(" Using WPA/WPA2-PSK is a good option if your password is strong enough. ➡ Check at: "),Pe=(0,n._)("a",{class:"text-yellow-400",href:"https://checkdeinpasswort.de/",target:"_blank"},"checkdeinpasswort.de",-1),He={key:3,class:"my-6"},Re=(0,n._)("b",null,"Security Version is good ",-1),Ee=(0,n.Uk)(" WPA2 or WPA3 is a good choise "),xe=(0,n._)("b",null,"Security Version:",-1),Te=(0,n.Uk)(" Wahh. You should not use WPA anymore! 😮 "),Be=(0,n._)("b",null,"Security Encryption:",-1),Ye=(0,n.Uk)(" The AES Encryption does a good job. 👍 "),Ve=(0,n._)("b",null,"Security Encryption:",-1),Ke=(0,n.Uk)(" You should update to AES if possible. "),Oe=(0,n._)("b",null,"MAC-Filter enabled:",-1),Xe=(0,n.Uk)(" Enabling MAC-Filters is a good option to secure your Wifi-Network. But be aware that hackers can bypass this easily. "),Je=(0,n._)("b",null,"MAC-Filter disabled:",-1),Qe=(0,n.Uk)(" Enabling MAC-Filters is an option to secure your Wifi-Network. "),$e=(0,n._)("b",null,"SSID-Broadcast:",-1),et=(0,n.Uk)(" enabled. This will allow you to see the Wifi in the List of available Networks. "),tt=(0,n._)("b",null,"SSID-Broadcast:",-1),it=(0,n.Uk)(" disabled. You won't find your WLAN in the List of available Networks. "),nt=(0,n._)("b",null,"Reduce antenna transmit power:",-1),ot=(0,n.Uk)(" enabled. "),lt=(0,n._)("b",null,"Reduce antenna transmit power:",-1),st=(0,n.Uk)(" disabled. "),at=(0,n._)("b",null,"Scheduler disabled.",-1),rt=(0,n.Uk)(" Maybe you can automatically turn wifi off during the night? "),ct=(0,n._)("b",null,"Scheduler active. ",-1),ut=(0,n.Uk)(" Check if the time settings make sence. "),dt=(0,n._)("b",null,"WPS enabled.",-1),wt=(0,n.Uk)(" WPS is a nice option to add new devices to the wlan. But it may be an security hole. Better turn it off. "),kt=(0,n._)("b",null,"WPS disabled",-1),ft=(0,n.Uk)(" That sounds like a good idea. 👌 "),Ut=(0,n.Uk)(" No clients are currently connected. ");var _t={setup(e){const t=(0,l.iH)(["Wireless","Statistics"]),i=(0,s.oR)(),_t=(0,l.qj)({ssid:i.state.wifi.ssid,security_mode:i.state.wifi.security_mode}),pt=(0,n.Fl)((()=>i.state.darkMode)),St=(0,n.Fl)((()=>i.state.wifi.twoPointFourGHz||i.state.wifi.fiveGHz)),gt=(0,n.Fl)((()=>{const e=i.state.wifi.mode;return console.log(e),console.log(e<=2||e>6&&e<8),e<=2||e>=6&&e<=8})),bt=(0,n.Fl)((()=>{const e=i.state.wifi.mode;return 4===e||e>=6})),yt=(0,n.Fl)((()=>{const e=i.state.wifi.mode;return 3===e||7===e||8===e||10===e})),mt=(0,n.Fl)((()=>{const e=i.state.wifi.mode;return 5===e||e>=9})),ht=(0,n.Fl)((()=>!(""===i.state.wifi.turn_off.from||""===i.state.wifi.turn_off.till))),Zt=(0,l.qj)({done:i.state.checks.done,code:0,wrongCode:!1}),Wt=(0,n.Fl)((()=>i.state.checks.done)),vt=()=>{console.log("starting checks ...",Zt.code),"23985"===Zt.code?i.commit("runChecks",!0):Zt.wrongCode=!0};return(e,s)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c.Z,{"title-stack":t.value},null,8,["title-stack"]),(0,n.Wm)(r.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(U.Z,{title:"Overview:",expanded:"",class:"bg-gray-200"},{default:(0,n.w5)((()=>[(0,n._)("div",g,[(0,n._)("p",null,[b,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(_t).ssid),1)]),(0,n._)("p",null,[y,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.twoPointFourGHz?"aktiviert":"deaktiviert"),1)]),(0,n._)("p",null,[m,(0,n.Uk)((0,o.zw)((0,l.SU)(i).state.wifi.fiveGHz?"aktiviert":"deaktiviert"),1)]),(0,n._)("p",null,[h,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(S.f8)[(0,l.SU)(i).state.wifi.mode].label),1)])]),(0,n.Wm)(d.Z),(0,n._)("div",Z,[(0,n._)("p",null,[W,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(S.XG)[(0,l.SU)(_t).security_mode]),1)]),"psk"===(0,l.SU)(i).state.wifi.security_mode?((0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("p",null,[j,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(S._Z)[(0,l.SU)(i).state.wifi.security_psk.version].label),1)]),(0,n._)("p",null,[z,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(S.HL)[(0,l.SU)(i).state.wifi.security_psk.encryption].label),1)]),(0,n._)("p",null,[A,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.security_psk.pw),1)])])):"enterprise"===(0,l.SU)(i).state.wifi.security_mode?((0,n.wg)(),(0,n.iD)("div",L,[(0,n._)("p",null,[C,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(S._Z)[(0,l.SU)(i).state.wifi.security_enterprise.version].label),1)]),(0,n._)("p",null,[I,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(S.HL)[(0,l.SU)(i).state.wifi.security_enterprise.encryption].label),1)]),(0,n._)("p",null,[q,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.security_enterprise.radius.ip),1)]),(0,n._)("p",null,[N,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.security_enterprise.radius.port),1)])])):(0,n.kq)("",!0)]),(0,n.Wm)(d.Z),(0,n._)("div",D,[(0,n._)("p",null,[F,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.macFilter.enabled?"aktiviert":"deaktiviert")+" - ",1),G,(0,n.Uk)(": "+(0,o.zw)((0,l.SU)(i).state.wifi.macFilter.rule),1)]),(0,n._)("p",null,[M,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.broadcast_ssid?"aktiviert":"deaktiviert"),1)]),(0,n._)("p",null,[P,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.reduce_tx_power?"reduziert":"nicht reduziert"),1)]),(0,n._)("p",null,[H,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(ht)?"aktiviert":"deaktiviert"),1)]),(0,l.SU)(ht)?((0,n.wg)(),(0,n.iD)("p",R,[E,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.turn_off.from??"00:00")+" ",1),x,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.turn_off.till??"00:00"),1)])):(0,n.kq)("",!0),(0,n._)("p",null,[T,(0,n.Uk)(" "+(0,o.zw)((0,l.SU)(i).state.wifi.wps_enabled?"aktiviert":"deaktiviert"),1)])])])),_:1}),B,(0,n.Wm)(u.Z,{title:"Run Checks",class:"bg-red-200"},{default:(0,n.w5)((()=>[(0,n._)("div",Y,[V,K,(0,n.Wm)(_.Z,{label:"Starte die Checks",help:"Gebe den Code ein und klicke auf den Button Run checks"},{default:(0,n.w5)((()=>[(0,n.Wm)(p.Z,{id:"runChecksCode",placeholder:"Enter Code",type:"numbers","wrong-input":(0,l.SU)(Zt).wrongCode,onInput:s[0]||(s[0]=e=>(0,l.SU)(Zt).code=e.target.value)},null,8,["wrong-input"]),(0,n.Wm)(w.Z,{type:"button",color:"warning",label:"Run checks",onClick:vt})])),_:1})])])),_:1}),(0,l.SU)(Wt)?((0,n.wg)(),(0,n.j4)(u.Z,{key:0,title:"WLAN-Settings"},{default:(0,n.w5)((()=>[(0,l.SU)(St)?((0,n.wg)(),(0,n.j4)(f.Z,{key:0,color:"success",icon:(0,l.SU)(a.y_2),permanent:""},{default:(0,n.w5)((()=>[O])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:1,color:"warning",icon:(0,l.SU)(a.y_2)},{right:(0,n.w5)((()=>[(0,n.Wm)(w.Z,{to:"/wifi-settings",icon:(0,l.SU)(a.Shd),"icon-w":"w-4","icon-h":"h-4",color:(0,l.SU)(pt)?"white":"light",outline:(0,l.SU)(pt),small:""},null,8,["icon","color","outline"])])),default:(0,n.w5)((()=>[X])),_:1},8,["icon"])),(0,l.SU)(St)?((0,n.wg)(),(0,n.iD)("div",J,[(0,l.SU)(i).state.wifi.twoPointFourGHz?((0,n.wg)(),(0,n.j4)(f.Z,{key:0,color:"info",icon:(0,l.SU)(a.gCD),permanent:""},{default:(0,n.w5)((()=>[Q,$,ee])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:1,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[te,ie,ne])),_:1},8,["icon"])),(0,l.SU)(i).state.wifi.fiveGHz?((0,n.wg)(),(0,n.j4)(f.Z,{key:2,color:"info",icon:(0,l.SU)(a.gCD),permanent:""},{default:(0,n.w5)((()=>[oe,le,se])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:3,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[ae,re,ce])),_:1},8,["icon"])),""!=(0,l.SU)(i).state.wifi.ssid?((0,n.wg)(),(0,n.j4)(f.Z,{key:4,color:"info",icon:(0,l.SU)(a.gCD),permanent:""},{default:(0,n.w5)((()=>[ue,(0,n._)("b",null,(0,o.zw)((0,l.SU)(i).state.wifi.ssid),1)])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:5,color:"danger",icon:(0,l.SU)(a.TrR),permanent:""},{default:(0,n.w5)((()=>[de])),_:1},8,["icon"])),(0,l.SU)(gt)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(f.Z,{key:6,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[we,ke])),_:1},8,["icon"])),(0,l.SU)(gt)?((0,n.wg)(),(0,n.j4)(f.Z,{key:7,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[fe,Ue])),_:1},8,["icon"])):(0,n.kq)("",!0),(0,l.SU)(bt)?((0,n.wg)(),(0,n.j4)(f.Z,{key:8,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[_e,pe])),_:1},8,["icon"])):(0,n.kq)("",!0),(0,l.SU)(bt)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(f.Z,{key:9,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[Se,ge])),_:1},8,["icon"])),(0,l.SU)(yt)?((0,n.wg)(),(0,n.j4)(f.Z,{key:10,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[be,ye])),_:1},8,["icon"])):(0,n.kq)("",!0),(0,l.SU)(yt)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(f.Z,{key:11,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[me,he])),_:1},8,["icon"])),(0,l.SU)(mt)?((0,n.wg)(),(0,n.j4)(f.Z,{key:12,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[Ze,We])),_:1},8,["icon"])):(0,n.kq)("",!0),(0,l.SU)(mt)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(f.Z,{key:13,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[ve,je])),_:1},8,["icon"])),(0,l.SU)(i).state.wifi.channel>0?((0,n.wg)(),(0,n.j4)(f.Z,{key:14,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[ze,Ae,Le,Ce])),_:1},8,["icon"])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)])),_:1})):(0,n.kq)("",!0),(0,l.SU)(St)&&(0,l.SU)(Wt)?((0,n.wg)(),(0,n.iD)("div",Ie,[(0,n.Wm)(u.Z,{title:"WLAN-Security"},{default:(0,n.w5)((()=>["disabled"==(0,l.SU)(i).state.wifi.security_mode||"wep"==(0,l.SU)(i).state.wifi.security_mode?((0,n.wg)(),(0,n.j4)(f.Z,{key:0,color:"danger",icon:(0,l.SU)(a.TrR),permanent:""},{default:(0,n.w5)((()=>[qe,Ne])),_:1},8,["icon"])):"wpa_e"==(0,l.SU)(i).state.wifi.security_mode?((0,n.wg)(),(0,n.j4)(f.Z,{key:1,color:"warning",icon:(0,l.SU)(a.oRA),permanent:""},{default:(0,n.w5)((()=>[De,Fe])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:2,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[Ge,Me,Pe])),_:1},8,["icon"])),"wpa_psk"==(0,l.SU)(i).state.wifi.security_mode?((0,n.wg)(),(0,n.iD)("div",He,[(0,l.SU)(i).state.wifi.security_psk.version>0?((0,n.wg)(),(0,n.j4)(f.Z,{key:0,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[Re,Ee])),_:1},8,["icon"])):(0,n.kq)("",!0),0==(0,l.SU)(i).state.wifi.security_psk.version?((0,n.wg)(),(0,n.j4)(f.Z,{key:1,color:"danger",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[xe,Te])),_:1},8,["icon"])):(0,n.kq)("",!0),(0,l.SU)(i).state.wifi.security_psk.encryption>0?((0,n.wg)(),(0,n.j4)(f.Z,{key:2,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[Be,Ye])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:3,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[Ve,Ke])),_:1},8,["icon"]))])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(u.Z,{title:"Mac-Filter"},{default:(0,n.w5)((()=>[(0,l.SU)(i).state.wifi.macFilter.enabled?((0,n.wg)(),(0,n.j4)(f.Z,{key:0,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[Oe,Xe])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:1,color:"warning",icon:(0,l.SU)(a.jZI)},{right:(0,n.w5)((()=>[(0,n.Wm)(w.Z,{to:"/wifi-mac",icon:(0,l.SU)(a.Shd),"icon-w":"w-4","icon-h":"h-4",color:(0,l.SU)(pt)?"white":"light",outline:(0,l.SU)(pt),small:""},null,8,["icon","color","outline"])])),default:(0,n.w5)((()=>[Je,Qe])),_:1},8,["icon"]))])),_:1}),(0,n.Wm)(u.Z,{title:"WLAN-Advanced-Settings"},{default:(0,n.w5)((()=>[(0,l.SU)(i).state.wifi.broadcast_ssid?((0,n.wg)(),(0,n.j4)(f.Z,{key:0,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[$e,et])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:1,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[tt,it])),_:1},8,["icon"])),(0,l.SU)(i).state.wifi.reduce_tx_power?((0,n.wg)(),(0,n.j4)(f.Z,{key:2,color:"success",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[nt,ot])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:3,color:"warning",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[lt,st])),_:1},8,["icon"])),""==(0,l.SU)(i).state.wifi.turn_off.from||""==(0,l.SU)(i).state.wifi.turn_off.till?((0,n.wg)(),(0,n.j4)(f.Z,{key:4,color:"warning",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[at,rt])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:5,color:"success",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[ct,ut])),_:1},8,["icon"]))])),_:1}),(0,n.Wm)(u.Z,{title:"WPS Settings"},{default:(0,n.w5)((()=>[(0,l.SU)(i).state.wifi.wps_enabled?((0,n.wg)(),(0,n.j4)(f.Z,{key:0,color:"warning",icon:(0,l.SU)(a.oL1),permanent:""},{default:(0,n.w5)((()=>[dt,wt])),_:1},8,["icon"])):((0,n.wg)(),(0,n.j4)(f.Z,{key:1,color:"success",icon:(0,l.SU)(a.jZI),permanent:""},{default:(0,n.w5)((()=>[kt,ft])),_:1},8,["icon"]))])),_:1}),(0,n.Wm)(u.Z,{title:"Further Information"},{default:(0,n.w5)((()=>[(0,n.Wm)(f.Z,{color:"info",icon:(0,l.SU)(a.gCD),permanent:""},{default:(0,n.w5)((()=>[Ut])),_:1},8,["icon"])])),_:1})])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(k.Z)],64))}};const pt=_t;var St=pt}}]);
//# sourceMappingURL=wifi-stats.031fa540.js.map