"use strict";(self["webpackChunkrouter_sim"]=self["webpackChunkrouter_sim"]||[]).push([[396],{2419:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(6252),o=t(2119),r={setup:function(e){var n=(0,o.tv)(),t=n.getRoutes(),r=[];for(var l in t){var u=t[l].path,c=t[l].meta&&t[l].meta.title?t[l].meta.title:null;c&&r.push({path:u,title:c})}return function(e,n){return(0,i.wg)(),(0,i.iD)("div")}}};const l=r;var u=l},8373:function(e,n,t){t.r(n),t.d(n,{default:function(){return gn}});var i=t(6252),o=t(3577),r=t(2262),l=t(8637),u=t(5317),c=t(7315),a=t(9151),s=t(9890),f=t(5693),d=t(1388),w=t(2419),k=t(736),U=t(8356),_=t(5690),p=t(2213),S=t(86),g={class:"flex flex-col gap-2"},b=(0,i._)("b",null,"SSID: ",-1),y=(0,i._)("b",null,"2,4 GHz: ",-1),m=(0,i._)("b",null," 5 GHz: ",-1),h=(0,i._)("b",null,"Mode:",-1),Z={class:"flex flex-col gap-2"},v=(0,i._)("b",null,"Security Mode: ",-1),W={key:0},j=(0,i._)("b",null,"Version: ",-1),z=(0,i._)("b",null,"Encryption: ",-1),A=(0,i._)("b",null,"PW: ",-1),L={key:1},C=(0,i._)("b",null,"Version: ",-1),I=(0,i._)("b",null,"Encryption: ",-1),q=(0,i._)("b",null,"Radius server Ip: ",-1),N=(0,i._)("b",null,"Radius server Port: ",-1),D={class:"flex flex-col gap-2"},F=(0,i._)("b",null,"MAC-Filter: ",-1),G=(0,i._)("b",null,"Regel",-1),M=(0,i._)("b",null,"SSID-Broadcast : ",-1),P=(0,i._)("b",null,"Sendeleistung: ",-1),H=(0,i._)("b",null,"WLAN Zeitabschaltung: ",-1),R={key:0},E=(0,i._)("b",null,"Wlan wird ausgeschalten von: ",-1),x=(0,i._)("b",null," bis: ",-1),T=(0,i._)("b",null,"WPS:",-1),B=(0,i._)("div",{class:"h-2"},null,-1),Y={class:"flex flex-col gap-4"},V=(0,i._)("p",{class:""}," Wenn du die Konfiguration abgeschlossen hast kannst du hier deine Einstellungen überprüfen. ",-1),K=(0,i._)("p",{class:"mb-2"},[(0,i._)("b",null,"Überprüfe"),(0,i.Uk)(" nochmal ob deine Einstellungen alle "),(0,i._)("b",null,"Anforderungen"),(0,i.Uk)(" (siehe Whitebaord) erfüllen, bevor du die Checks startest. ")],-1),O=(0,i.Uk)(" WLAN is enabled. "),X=(0,i.Uk)(" WLAN is disabled. Go to Wireless Settings to enable it. "),J={key:2,class:"mb-6"},Q=(0,i.Uk)(" The "),$=(0,i._)("b",null,"2,4 GHz",-1),ee=(0,i.Uk)(" frequency is enabled. "),ne=(0,i.Uk)(" The "),te=(0,i._)("b",null,"2,4 GHz",-1),ie=(0,i.Uk)(" frequency is disabled. Devices which only support this frequency can't connect to your Network. "),oe=(0,i.Uk)(" The "),re=(0,i._)("b",null,"5 GHz",-1),le=(0,i.Uk)(" frequency is enabled. "),ue=(0,i.Uk)(" The "),ce=(0,i._)("b",null,"5 GHz",-1),ae=(0,i.Uk)(" frequency is disabled. Devices which only support this frequency can't connect to your Network. "),se=(0,i.Uk)(" Your SSID is: "),fe=(0,i.Uk)(" Your SSID is emtpy! "),de=(0,i._)("b",null,"WLAN Mode:",-1),we=(0,i.Uk)(" Good. 👍 Older Wifi-Versions should not be supported if not necessary! "),ke=(0,i._)("b",null,"WLAN Mode:",-1),Ue=(0,i.Uk)(" Ahh. 🤔 You enabled support for older Wifi-versions. If not necessary disable them. "),_e=(0,i._)("b",null,"WLAN Mode:",-1),pe=(0,i.Uk)(" Wifi-4️⃣ is supported "),Se=(0,i._)("b",null,"WLAN Mode:",-1),ge=(0,i.Uk)(" Wifi-4️⃣ is not supported! "),be=(0,i._)("b",null,"WLAN Mode:",-1),ye=(0,i.Uk)(" Wifi-5️⃣ is supported "),me=(0,i._)("b",null,"WLAN Mode:",-1),he=(0,i.Uk)(" Wifi-5️⃣ is not supported! "),Ze=(0,i._)("b",null,"WLAN Mode:",-1),ve=(0,i.Uk)(" Wifi-6️⃣is supported "),We=(0,i._)("b",null,"WLAN Mode:",-1),je=(0,i.Uk)(" Wifi-6️⃣ is not supported! "),ze=(0,i._)("b",null,"WLAN Channel Settings:",-1),Ae=(0,i.Uk)(" Do you know what you are doing? If you don't have a reason choose the option "),Le=(0,i._)("i",null,"auto",-1),Ce=(0,i.Uk)(". "),Ie={key:1,class:"mb-6"},qe=(0,i._)("b",null,"Danger:",-1),Ne=(0,i.Uk)(" Security level to low. "),De=(0,i._)("b",null,"Warning:",-1),Fe=(0,i.Uk)(" Good Idea to use WPA/WPA2 Enterprise. But we don't have an Radius Server. "),Ge=(0,i._)("b",null,"Good choise:",-1),Me=(0,i.Uk)(" Using WPA/WPA2-PSK is a good option if your password is strong enough. ➡ Check at: "),Pe=(0,i._)("a",{class:"text-yellow-400",href:"https://checkdeinpasswort.de/",target:"_blank"},"checkdeinpasswort.de",-1),He={key:3,class:"my-6"},Re=(0,i._)("b",null,"Security Version is good ",-1),Ee=(0,i.Uk)(" WPA2 or WPA3 is a good choise "),xe=(0,i._)("b",null,"Security Version:",-1),Te=(0,i.Uk)(" Wahh. You should not use WPA anymore! 😮 "),Be=(0,i._)("b",null,"Security Encryption:",-1),Ye=(0,i.Uk)(" The AES Encryption does a good job. 👍 "),Ve=(0,i._)("b",null,"Security Encryption:",-1),Ke=(0,i.Uk)(" You should update to AES if possible. "),Oe=(0,i._)("b",null,"MAC-Filter enabled:",-1),Xe=(0,i.Uk)(" Enabling MAC-Filters is a good option to secure your Wifi-Network. But be aware that hackers can bypass this easily. "),Je=(0,i._)("b",null,"MAC-Filter disabled:",-1),Qe=(0,i.Uk)(" Enabling MAC-Filters is an option to secure your Wifi-Network. "),$e=(0,i._)("b",null,"SSID-Broadcast:",-1),en=(0,i.Uk)(" enabled. This will allow you to see the Wifi in the List of available Networks. "),nn=(0,i._)("b",null,"SSID-Broadcast:",-1),tn=(0,i.Uk)(" disabled. You won't find your WLAN in the List of available Networks. "),on=(0,i._)("b",null,"Reduce antenna transmit power:",-1),rn=(0,i.Uk)(" enabled. "),ln=(0,i._)("b",null,"Reduce antenna transmit power:",-1),un=(0,i.Uk)(" disabled. "),cn=(0,i._)("b",null,"Scheduler disabled.",-1),an=(0,i.Uk)(" Maybe you can automatically turn wifi off during the night? "),sn=(0,i._)("b",null,"Scheduler active. ",-1),fn=(0,i.Uk)(" Check if the time settings make sence. "),dn=(0,i._)("b",null,"WPS enabled.",-1),wn=(0,i.Uk)(" WPS is a nice option to add new devices to the wlan. But it may be an security hole. Better turn it off. "),kn=(0,i._)("b",null,"WPS disabled",-1),Un=(0,i.Uk)(" That sounds like a good idea. 👌 "),_n=(0,i.Uk)(" No clients are currently connected. "),pn={setup:function(e){var n=(0,r.iH)(["Wireless","Statistics"]),t=(0,l.oR)(),pn=(0,r.qj)({ssid:t.state.wifi.ssid,security_mode:t.state.wifi.security_mode}),Sn=(0,i.Fl)((function(){return t.state.darkMode})),gn=(0,i.Fl)((function(){return t.state.wifi.twoPointFourGHz||t.state.wifi.fiveGHz})),bn=(0,i.Fl)((function(){var e=t.state.wifi.mode;return console.log(e),console.log(e<=2||e>6&&e<8),e<=2||e>=6&&e<=8})),yn=(0,i.Fl)((function(){var e=t.state.wifi.mode;return 4===e||e>=6})),mn=(0,i.Fl)((function(){var e=t.state.wifi.mode;return 3===e||7===e||8===e||10===e})),hn=(0,i.Fl)((function(){var e=t.state.wifi.mode;return 5===e||e>=9})),Zn=(0,i.Fl)((function(){return!(""===t.state.wifi.turn_off.from||""===t.state.wifi.turn_off.till)})),vn=(0,r.qj)({done:t.state.checks.done,code:0,wrongCode:!1}),Wn=(0,i.Fl)((function(){return t.state.checks.done})),jn=function(){console.log("starting checks ...",vn.code),"23985"===vn.code?t.commit("runChecks",!0):vn.wrongCode=!0};return function(e,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a.Z,{"title-stack":n.value},null,8,["title-stack"]),(0,i.Wm)(c.Z,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(U.Z,{title:"Overview:",expanded:"",class:"bg-gray-200"},{default:(0,i.w5)((function(){var e,n;return[(0,i._)("div",g,[(0,i._)("p",null,[b,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(pn).ssid),1)]),(0,i._)("p",null,[y,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(t).state.wifi.twoPointFourGHz?"aktiviert":"deaktiviert"),1)]),(0,i._)("p",null,[m,(0,i.Uk)((0,o.zw)((0,r.SU)(t).state.wifi.fiveGHz?"aktiviert":"deaktiviert"),1)]),(0,i._)("p",null,[h,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(S.f8)[(0,r.SU)(t).state.wifi.mode].label),1)])]),(0,i.Wm)(f.Z),(0,i._)("div",Z,[(0,i._)("p",null,[v,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(S.XG)[(0,r.SU)(pn).security_mode]),1)]),"psk"===(0,r.SU)(t).state.wifi.security_mode?((0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("p",null,[j,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(S._Z)[(0,r.SU)(t).state.wifi.security_psk.version].label),1)]),(0,i._)("p",null,[z,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(S.HL)[(0,r.SU)(t).state.wifi.security_psk.encryption].label),1)]),(0,i._)("p",null,[A,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(t).state.wifi.security_psk.pw),1)])])):"enterprise"===(0,r.SU)(t).state.wifi.security_mode?((0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("p",null,[C,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(S._Z)[(0,r.SU)(t).state.wifi.security_enterprise.version].label),1)]),(0,i._)("p",null,[I,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(S.HL)[(0,r.SU)(t).state.wifi.security_enterprise.encryption].label),1)]),(0,i._)("p",null,[q,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(t).state.wifi.security_enterprise.radius.ip),1)]),(0,i._)("p",null,[N,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(t).state.wifi.security_enterprise.radius.port),1)])])):(0,i.kq)("",!0)]),(0,i.Wm)(f.Z),(0,i._)("div",D,[(0,i._)("p",null,[F,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(t).state.wifi.macFilter.enabled?"aktiviert":"deaktiviert")+" - ",1),G,(0,i.Uk)(": "+(0,o.zw)((0,r.SU)(t).state.wifi.macFilter.rule),1)]),(0,i._)("p",null,[M,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(t).state.wifi.broadcast_ssid?"aktiviert":"deaktiviert"),1)]),(0,i._)("p",null,[P,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(t).state.wifi.reduce_tx_power?"reduziert":"nicht reduziert"),1)]),(0,i._)("p",null,[H,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(Zn)?"aktiviert":"deaktiviert"),1)]),(0,r.SU)(Zn)?((0,i.wg)(),(0,i.iD)("p",R,[E,(0,i.Uk)(" "+(0,o.zw)(null!==(e=(0,r.SU)(t).state.wifi.turn_off.from)&&void 0!==e?e:"00:00")+" ",1),x,(0,i.Uk)(" "+(0,o.zw)(null!==(n=(0,r.SU)(t).state.wifi.turn_off.till)&&void 0!==n?n:"00:00"),1)])):(0,i.kq)("",!0),(0,i._)("p",null,[T,(0,i.Uk)(" "+(0,o.zw)((0,r.SU)(t).state.wifi.wps_enabled?"aktiviert":"deaktiviert"),1)])])]})),_:1}),B,(0,i.Wm)(s.Z,{title:"Run Checks",class:"bg-red-200"},{default:(0,i.w5)((function(){return[(0,i._)("div",Y,[V,K,(0,i.Wm)(_.Z,{label:"Starte die Checks",help:"Gebe den Code ein und klicke auf den Button Run checks"},{default:(0,i.w5)((function(){return[(0,i.Wm)(p.Z,{id:"runChecksCode",placeholder:"Enter Code",type:"numbers","wrong-input":(0,r.SU)(vn).wrongCode,onInput:l[0]||(l[0]=function(e){return(0,r.SU)(vn).code=e.target.value})},null,8,["wrong-input"]),(0,i.Wm)(d.Z,{type:"button",color:"warning",label:"Run checks",onClick:jn})]})),_:1})])]})),_:1}),(0,r.SU)(Wn)?((0,i.wg)(),(0,i.j4)(s.Z,{key:0,title:"WLAN-Settings"},{default:(0,i.w5)((function(){return[(0,r.SU)(gn)?((0,i.wg)(),(0,i.j4)(k.Z,{key:0,color:"success",icon:(0,r.SU)(u.y_2),permanent:""},{default:(0,i.w5)((function(){return[O]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:1,color:"warning",icon:(0,r.SU)(u.y_2)},{right:(0,i.w5)((function(){return[(0,i.Wm)(d.Z,{to:"/wifi-settings",icon:(0,r.SU)(u.Shd),"icon-w":"w-4","icon-h":"h-4",color:(0,r.SU)(Sn)?"white":"light",outline:(0,r.SU)(Sn),small:""},null,8,["icon","color","outline"])]})),default:(0,i.w5)((function(){return[X]})),_:1},8,["icon"])),(0,r.SU)(gn)?((0,i.wg)(),(0,i.iD)("div",J,[(0,r.SU)(t).state.wifi.twoPointFourGHz?((0,i.wg)(),(0,i.j4)(k.Z,{key:0,color:"info",icon:(0,r.SU)(u.gCD),permanent:""},{default:(0,i.w5)((function(){return[Q,$,ee]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:1,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[ne,te,ie]})),_:1},8,["icon"])),(0,r.SU)(t).state.wifi.fiveGHz?((0,i.wg)(),(0,i.j4)(k.Z,{key:2,color:"info",icon:(0,r.SU)(u.gCD),permanent:""},{default:(0,i.w5)((function(){return[oe,re,le]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:3,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[ue,ce,ae]})),_:1},8,["icon"])),""!=(0,r.SU)(t).state.wifi.ssid?((0,i.wg)(),(0,i.j4)(k.Z,{key:4,color:"info",icon:(0,r.SU)(u.gCD),permanent:""},{default:(0,i.w5)((function(){return[se,(0,i._)("b",null,(0,o.zw)((0,r.SU)(t).state.wifi.ssid),1)]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:5,color:"danger",icon:(0,r.SU)(u.TrR),permanent:""},{default:(0,i.w5)((function(){return[fe]})),_:1},8,["icon"])),(0,r.SU)(bn)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(k.Z,{key:6,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[de,we]})),_:1},8,["icon"])),(0,r.SU)(bn)?((0,i.wg)(),(0,i.j4)(k.Z,{key:7,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[ke,Ue]})),_:1},8,["icon"])):(0,i.kq)("",!0),(0,r.SU)(yn)?((0,i.wg)(),(0,i.j4)(k.Z,{key:8,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[_e,pe]})),_:1},8,["icon"])):(0,i.kq)("",!0),(0,r.SU)(yn)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(k.Z,{key:9,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[Se,ge]})),_:1},8,["icon"])),(0,r.SU)(mn)?((0,i.wg)(),(0,i.j4)(k.Z,{key:10,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[be,ye]})),_:1},8,["icon"])):(0,i.kq)("",!0),(0,r.SU)(mn)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(k.Z,{key:11,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[me,he]})),_:1},8,["icon"])),(0,r.SU)(hn)?((0,i.wg)(),(0,i.j4)(k.Z,{key:12,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[Ze,ve]})),_:1},8,["icon"])):(0,i.kq)("",!0),(0,r.SU)(hn)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(k.Z,{key:13,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[We,je]})),_:1},8,["icon"])),(0,r.SU)(t).state.wifi.channel>0?((0,i.wg)(),(0,i.j4)(k.Z,{key:14,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[ze,Ae,Le,Ce]})),_:1},8,["icon"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)]})),_:1})):(0,i.kq)("",!0),(0,r.SU)(gn)&&(0,r.SU)(Wn)?((0,i.wg)(),(0,i.iD)("div",Ie,[(0,i.Wm)(s.Z,{title:"WLAN-Security"},{default:(0,i.w5)((function(){return["disabled"==(0,r.SU)(t).state.wifi.security_mode||"wep"==(0,r.SU)(t).state.wifi.security_mode?((0,i.wg)(),(0,i.j4)(k.Z,{key:0,color:"danger",icon:(0,r.SU)(u.TrR),permanent:""},{default:(0,i.w5)((function(){return[qe,Ne]})),_:1},8,["icon"])):"wpa_e"==(0,r.SU)(t).state.wifi.security_mode?((0,i.wg)(),(0,i.j4)(k.Z,{key:1,color:"warning",icon:(0,r.SU)(u.oRA),permanent:""},{default:(0,i.w5)((function(){return[De,Fe]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:2,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[Ge,Me,Pe]})),_:1},8,["icon"])),"wpa_psk"==(0,r.SU)(t).state.wifi.security_mode?((0,i.wg)(),(0,i.iD)("div",He,[(0,r.SU)(t).state.wifi.security_psk.version>0?((0,i.wg)(),(0,i.j4)(k.Z,{key:0,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[Re,Ee]})),_:1},8,["icon"])):(0,i.kq)("",!0),0==(0,r.SU)(t).state.wifi.security_psk.version?((0,i.wg)(),(0,i.j4)(k.Z,{key:1,color:"danger",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[xe,Te]})),_:1},8,["icon"])):(0,i.kq)("",!0),(0,r.SU)(t).state.wifi.security_psk.encryption>0?((0,i.wg)(),(0,i.j4)(k.Z,{key:2,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[Be,Ye]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:3,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[Ve,Ke]})),_:1},8,["icon"]))])):(0,i.kq)("",!0)]})),_:1}),(0,i.Wm)(s.Z,{title:"Mac-Filter"},{default:(0,i.w5)((function(){return[(0,r.SU)(t).state.wifi.macFilter.enabled?((0,i.wg)(),(0,i.j4)(k.Z,{key:0,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[Oe,Xe]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:1,color:"warning",icon:(0,r.SU)(u.jZI)},{right:(0,i.w5)((function(){return[(0,i.Wm)(d.Z,{to:"/wifi-mac",icon:(0,r.SU)(u.Shd),"icon-w":"w-4","icon-h":"h-4",color:(0,r.SU)(Sn)?"white":"light",outline:(0,r.SU)(Sn),small:""},null,8,["icon","color","outline"])]})),default:(0,i.w5)((function(){return[Je,Qe]})),_:1},8,["icon"]))]})),_:1}),(0,i.Wm)(s.Z,{title:"WLAN-Advanced-Settings"},{default:(0,i.w5)((function(){return[(0,r.SU)(t).state.wifi.broadcast_ssid?((0,i.wg)(),(0,i.j4)(k.Z,{key:0,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[$e,en]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:1,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[nn,tn]})),_:1},8,["icon"])),(0,r.SU)(t).state.wifi.reduce_tx_power?((0,i.wg)(),(0,i.j4)(k.Z,{key:2,color:"success",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[on,rn]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:3,color:"warning",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[ln,un]})),_:1},8,["icon"])),""==(0,r.SU)(t).state.wifi.turn_off.from||""==(0,r.SU)(t).state.wifi.turn_off.till?((0,i.wg)(),(0,i.j4)(k.Z,{key:4,color:"warning",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[cn,an]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:5,color:"success",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[sn,fn]})),_:1},8,["icon"]))]})),_:1}),(0,i.Wm)(s.Z,{title:"WPS Settings"},{default:(0,i.w5)((function(){return[(0,r.SU)(t).state.wifi.wps_enabled?((0,i.wg)(),(0,i.j4)(k.Z,{key:0,color:"warning",icon:(0,r.SU)(u.oL1),permanent:""},{default:(0,i.w5)((function(){return[dn,wn]})),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(k.Z,{key:1,color:"success",icon:(0,r.SU)(u.jZI),permanent:""},{default:(0,i.w5)((function(){return[kn,Un]})),_:1},8,["icon"]))]})),_:1}),(0,i.Wm)(s.Z,{title:"Further Information"},{default:(0,i.w5)((function(){return[(0,i.Wm)(k.Z,{color:"info",icon:(0,r.SU)(u.gCD),permanent:""},{default:(0,i.w5)((function(){return[_n]})),_:1},8,["icon"])]})),_:1})])):(0,i.kq)("",!0)]})),_:1}),(0,i.Wm)(w.Z)],64)}}};const Sn=pn;var gn=Sn}}]);
//# sourceMappingURL=wifi-stats-legacy.af4bed5c.js.map