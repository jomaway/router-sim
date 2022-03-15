"use strict";(self["webpackChunkrouter_sim"]=self["webpackChunkrouter_sim"]||[]).push([[396],{2419:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(6252),o=n(2119),l={setup(e){const t=(0,o.tv)(),n=t.getRoutes(),l=[];for(const i in n){const e=n[i].path,t=n[i].meta&&n[i].meta.title?n[i].meta.title:null;t&&l.push({path:e,title:t})}return(e,t)=>((0,i.wg)(),(0,i.iD)("div"))}};const s=l;var a=s},8373:function(e,t,n){n.r(t),n.d(t,{default:function(){return gt}});var i=n(6252),o=n(3577),l=n(2262),s=n(8637),a=n(3002),r=n(5317),c=n(7315),u=n(9151),w=n(9890),d=n(5693),k=n(1388),f=n(2419),U=n(736),_=n(8356),p=n(5690),S=n(2213),g=n(86);const b={class:"flex flex-col gap-2"},y=(0,i._)("b",null,"SSID: ",-1),m=(0,i._)("b",null,"2,4 GHz: ",-1),h=(0,i._)("b",null," 5 GHz: ",-1),Z=(0,i._)("b",null,"Mode:",-1),W={class:"flex flex-col gap-2"},v=(0,i._)("b",null,"Security Mode: ",-1),j={key:0},z=(0,i._)("b",null,"Version: ",-1),A=(0,i._)("b",null,"Encryption: ",-1),L=(0,i._)("b",null,"PW: ",-1),C={key:1},I=(0,i._)("b",null,"Version: ",-1),q=(0,i._)("b",null,"Encryption: ",-1),N=(0,i._)("b",null,"Radius server Ip: ",-1),D=(0,i._)("b",null,"Radius server Port: ",-1),F={class:"flex flex-col gap-2"},P=(0,i._)("b",null,"MAC-Filter: ",-1),G=(0,i._)("b",null,"Regel",-1),M=(0,i._)("b",null,"SSID-Broadcast : ",-1),H=(0,i._)("b",null,"Sendeleistung: ",-1),R=(0,i._)("b",null,"WLAN Zeitabschaltung: ",-1),E={key:0},x=(0,i._)("b",null,"Wlan wird ausgeschalten von: ",-1),T=(0,i._)("b",null," bis: ",-1),B=(0,i._)("b",null,"WPS:",-1),Y=(0,i._)("div",{class:"h-2"},null,-1),V={class:"flex flex-col gap-4"},K=(0,i._)("p",{class:""}," Wenn du die Konfiguration abgeschlossen hast kannst du hier deine Einstellungen überprüfen. ",-1),O=(0,i._)("p",{class:"mb-2"},[(0,i._)("b",null,"Überprüfe"),(0,i.Uk)(" nochmal ob deine Einstellungen alle "),(0,i._)("b",null,"Anforderungen"),(0,i.Uk)(" (siehe Whitebaord) erfüllen, bevor du die Checks startest. ")],-1),X=(0,i.Uk)(" WLAN is enabled. "),J=(0,i.Uk)(" WLAN is disabled. Go to Wireless Settings to enable it. "),Q={key:2,class:"mb-6"},$=(0,i.Uk)(" The "),ee=(0,i._)("b",null,"2,4 GHz",-1),te=(0,i.Uk)(" frequency is enabled. "),ne=(0,i.Uk)(" The "),ie=(0,i._)("b",null,"2,4 GHz",-1),oe=(0,i.Uk)(" frequency is disabled. Devices which only support this frequency can't connect to your Network. "),le=(0,i.Uk)(" The "),se=(0,i._)("b",null,"5 GHz",-1),ae=(0,i.Uk)(" frequency is enabled. "),re=(0,i.Uk)(" The "),ce=(0,i._)("b",null,"5 GHz",-1),ue=(0,i.Uk)(" frequency is disabled. Devices which only support this frequency can't connect to your Network. "),we=(0,i.Uk)(" Your SSID is: "),de=(0,i.Uk)(" Your SSID is emtpy! "),ke=(0,i._)("b",null,"WLAN Mode:",-1),fe=(0,i.Uk)(" Good. 👍 Older Wifi-Versions should not be supported if not necessary! "),Ue=(0,i._)("b",null,"WLAN Mode:",-1),_e=(0,i.Uk)(" Ahh. 🤔 You enabled support for older Wifi-versions. If not necessary disable them. "),pe=(0,i._)("b",null,"WLAN Mode:",-1),Se=(0,i.Uk)(" Wifi-4️⃣ is supported "),ge=(0,i._)("b",null,"WLAN Mode:",-1),be=(0,i.Uk)(" Wifi-4️⃣ is not supported! "),ye=(0,i._)("b",null,"WLAN Mode:",-1),me=(0,i.Uk)(" Wifi-5️⃣ is supported "),he=(0,i._)("b",null,"WLAN Mode:",-1),Ze=(0,i.Uk)(" Wifi-5️⃣ is not supported! "),We=(0,i._)("b",null,"WLAN Mode:",-1),ve=(0,i.Uk)(" Wifi-6️⃣is supported "),je=(0,i._)("b",null,"WLAN Mode:",-1),ze=(0,i.Uk)(" Wifi-6️⃣ is not supported! "),Ae=(0,i._)("b",null,"WLAN Channel Settings:",-1),Le=(0,i.Uk)(" Do you know what you are doing? If you don't have a reason choose the option "),Ce=(0,i._)("i",null,"auto",-1),Ie=(0,i.Uk)(". "),qe={key:1,class:"mb-6"},Ne=(0,i._)("b",null,"Danger:",-1),De=(0,i.Uk)(" Security level to low. "),Fe=(0,i._)("b",null,"Warning:",-1),Pe=(0,i.Uk)(" Good Idea to use WPA/WPA2 Enterprise. But we don't have an Radius Server. "),Ge=(0,i._)("b",null,"Good choise:",-1),Me=(0,i.Uk)(" Using WPA/WPA2-PSK is a good option if your password is strong enough. ➡ Check at: "),He=(0,i._)("a",{class:"text-yellow-400",href:"https://checkdeinpasswort.de/",target:"_blank"},"checkdeinpasswort.de",-1),Re={key:3,class:"my-6"},Ee=(0,i._)("b",null,"Security Version is good ",-1),xe=(0,i.Uk)(" WPA2 or WPA3 is a good choise "),Te=(0,i._)("b",null,"Security Version:",-1),Be=(0,i.Uk)(" Wahh. You should not use WPA anymore! 😮 "),Ye=(0,i._)("b",null,"Security Encryption:",-1),Ve=(0,i.Uk)(" The AES Encryption does a good job. 👍 "),Ke=(0,i._)("b",null,"Security Encryption:",-1),Oe=(0,i.Uk)(" You should update to AES if possible. "),Xe=(0,i._)("b",null,"MAC-Filter enabled:",-1),Je=(0,i.Uk)(" Enabling MAC-Filters is a good option to secure your Wifi-Network. But be aware that hackers can bypass this easily. "),Qe=(0,i._)("b",null,"MAC-Filter disabled:",-1),$e=(0,i.Uk)(" Enabling MAC-Filters is an option to secure your Wifi-Network. "),et=(0,i._)("b",null,"SSID-Broadcast:",-1),tt=(0,i.Uk)(" enabled. This will allow you to see the Wifi in the List of available Networks. "),nt=(0,i._)("b",null,"SSID-Broadcast:",-1),it=(0,i.Uk)(" disabled. You won't find your WLAN in the List of available Networks. "),ot=(0,i._)("b",null,"Reduce antenna transmit power:",-1),lt=(0,i.Uk)(" enabled. "),st=(0,i._)("b",null,"Reduce antenna transmit power:",-1),at=(0,i.Uk)(" disabled. "),rt=(0,i._)("b",null,"Scheduler disabled.",-1),ct=(0,i.Uk)(" Maybe you can automatically turn wifi off during the night? "),ut=(0,i._)("b",null,"Scheduler active. ",-1),wt=(0,i.Uk)(" Check if the time settings make sence. "),dt=(0,i._)("b",null,"WPS enabled.",-1),kt=(0,i.Uk)(" WPS is a nice option to add new devices to the wlan. But it may be an security hole. Better turn it off. "),ft=(0,i._)("b",null,"WPS disabled",-1),Ut=(0,i.Uk)(" That sounds like a good idea. 👌 "),_t=(0,i.Uk)(" No clients are currently connected. ");var pt={setup(e){const t=(0,l.iH)(["Wireless","Statistics"]),n=(0,s.oR)(),pt=(0,a.pm)(),St=(0,i.Fl)((()=>n.state.darkMode)),gt=(0,i.Fl)((()=>n.state.wifi.twoPointFourGHz||n.state.wifi.fiveGHz)),bt=(0,i.Fl)((()=>{const e=n.state.wifi.mode;return console.log(e),console.log(e<=2||e>6&&e<8),e<=2||e>=6&&e<=8})),yt=(0,i.Fl)((()=>{const e=n.state.wifi.mode;return 4===e||e>=6})),mt=(0,i.Fl)((()=>{const e=n.state.wifi.mode;return 3===e||7===e||8===e||10===e})),ht=(0,i.Fl)((()=>{const e=n.state.wifi.mode;return 5===e||e>=9})),Zt=(0,i.Fl)((()=>!(""===n.state.wifi.turn_off.from||""===n.state.wifi.turn_off.till))),Wt=(0,l.qj)({done:n.state.checks.done,code:0,wrongCode:!1}),vt=(0,i.Fl)((()=>n.state.checks.done)),jt=()=>{console.log("starting checks ...",Wt.code),"23985"===Wt.code?(n.commit("runChecks",!0),pt.success("Running checks done ")):(Wt.wrongCode=!0,pt.error("Please insert corect code"))};return(e,s)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u.Z,{"title-stack":t.value},null,8,["title-stack"]),(0,i.Wm)(c.Z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_.Z,{title:"Overview:",expanded:"",class:"bg-gray-200"},{default:(0,i.w5)((()=>[(0,i._)("div",b,[(0,i._)("p",null,[y,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.ssid),1)]),(0,i._)("p",null,[m,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.twoPointFourGHz?"aktiviert":"deaktiviert"),1)]),(0,i._)("p",null,[h,(0,i.Uk)((0,o.zw)((0,l.SU)(n).state.wifi.fiveGHz?"aktiviert":"deaktiviert"),1)]),(0,i._)("p",null,[Z,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(g.f8)[(0,l.SU)(n).state.wifi.mode].label),1)])]),(0,i.Wm)(d.Z),(0,i._)("div",W,[(0,i._)("p",null,[v,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(g.XG)[(0,l.SU)(n).state.wifi.security_mode]),1)]),"psk"===(0,l.SU)(n).state.wifi.security_mode?((0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("p",null,[z,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(g._Z)[(0,l.SU)(n).state.wifi.security_psk.version].label),1)]),(0,i._)("p",null,[A,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(g.HL)[(0,l.SU)(n).state.wifi.security_psk.encryption].label),1)]),(0,i._)("p",null,[L,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.security_psk.pw),1)])])):"enterprise"===(0,l.SU)(n).state.wifi.security_mode?((0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("p",null,[I,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(g._Z)[(0,l.SU)(n).state.wifi.security_enterprise.version].label),1)]),(0,i._)("p",null,[q,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(g.HL)[(0,l.SU)(n).state.wifi.security_enterprise.encryption].label),1)]),(0,i._)("p",null,[N,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.security_enterprise.radius.ip),1)]),(0,i._)("p",null,[D,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.security_enterprise.radius.port),1)])])):(0,i.kq)("",!0)]),(0,i.Wm)(d.Z),(0,i._)("div",F,[(0,i._)("p",null,[P,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.macFilter.enabled?"aktiviert":"deaktiviert")+" - ",1),G,(0,i.Uk)(": "+(0,o.zw)((0,l.SU)(n).state.wifi.macFilter.rule),1)]),(0,i._)("p",null,[M,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.broadcast_ssid?"aktiviert":"deaktiviert"),1)]),(0,i._)("p",null,[H,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.reduce_tx_power?"reduziert":"nicht reduziert"),1)]),(0,i._)("p",null,[R,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(Zt)?"aktiviert":"deaktiviert"),1)]),(0,l.SU)(Zt)?((0,i.wg)(),(0,i.iD)("p",E,[x,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.turn_off.from??"00:00")+" ",1),T,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.turn_off.till??"00:00"),1)])):(0,i.kq)("",!0),(0,i._)("p",null,[B,(0,i.Uk)(" "+(0,o.zw)((0,l.SU)(n).state.wifi.wps_enabled?"aktiviert":"deaktiviert"),1)])])])),_:1}),Y,(0,i.Wm)(w.Z,{title:"Run Checks",class:"bg-red-200"},{default:(0,i.w5)((()=>[(0,i._)("div",V,[K,O,(0,i.Wm)(p.Z,{label:"Starte die Checks",help:"Gebe den Code ein und klicke auf den Button Run checks"},{default:(0,i.w5)((()=>[(0,i.Wm)(S.Z,{id:"runChecksCode",placeholder:"Enter Code",type:"numbers","wrong-input":(0,l.SU)(Wt).wrongCode,onInput:s[0]||(s[0]=e=>(0,l.SU)(Wt).code=e.target.value)},null,8,["wrong-input"]),(0,i.Wm)(k.Z,{type:"button",color:"warning",label:"Run checks",onClick:jt})])),_:1})])])),_:1}),(0,l.SU)(vt)?((0,i.wg)(),(0,i.j4)(w.Z,{key:0,title:"WLAN-Settings"},{default:(0,i.w5)((()=>[(0,l.SU)(gt)?((0,i.wg)(),(0,i.j4)(U.Z,{key:0,color:"success",icon:(0,l.SU)(r.y_2),permanent:""},{default:(0,i.w5)((()=>[X])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:1,color:"warning",icon:(0,l.SU)(r.y_2)},{right:(0,i.w5)((()=>[(0,i.Wm)(k.Z,{to:"/wifi-settings",icon:(0,l.SU)(r.Shd),"icon-w":"w-4","icon-h":"h-4",color:(0,l.SU)(St)?"white":"light",outline:(0,l.SU)(St),small:""},null,8,["icon","color","outline"])])),default:(0,i.w5)((()=>[J])),_:1},8,["icon"])),(0,l.SU)(gt)?((0,i.wg)(),(0,i.iD)("div",Q,[(0,l.SU)(n).state.wifi.twoPointFourGHz?((0,i.wg)(),(0,i.j4)(U.Z,{key:0,color:"info",icon:(0,l.SU)(r.gCD),permanent:""},{default:(0,i.w5)((()=>[$,ee,te])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:1,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[ne,ie,oe])),_:1},8,["icon"])),(0,l.SU)(n).state.wifi.fiveGHz?((0,i.wg)(),(0,i.j4)(U.Z,{key:2,color:"info",icon:(0,l.SU)(r.gCD),permanent:""},{default:(0,i.w5)((()=>[le,se,ae])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:3,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[re,ce,ue])),_:1},8,["icon"])),""!=(0,l.SU)(n).state.wifi.ssid?((0,i.wg)(),(0,i.j4)(U.Z,{key:4,color:"info",icon:(0,l.SU)(r.gCD),permanent:""},{default:(0,i.w5)((()=>[we,(0,i._)("b",null,(0,o.zw)((0,l.SU)(n).state.wifi.ssid),1)])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:5,color:"danger",icon:(0,l.SU)(r.TrR),permanent:""},{default:(0,i.w5)((()=>[de])),_:1},8,["icon"])),(0,l.SU)(bt)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(U.Z,{key:6,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[ke,fe])),_:1},8,["icon"])),(0,l.SU)(bt)?((0,i.wg)(),(0,i.j4)(U.Z,{key:7,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[Ue,_e])),_:1},8,["icon"])):(0,i.kq)("",!0),(0,l.SU)(yt)?((0,i.wg)(),(0,i.j4)(U.Z,{key:8,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[pe,Se])),_:1},8,["icon"])):(0,i.kq)("",!0),(0,l.SU)(yt)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(U.Z,{key:9,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[ge,be])),_:1},8,["icon"])),(0,l.SU)(mt)?((0,i.wg)(),(0,i.j4)(U.Z,{key:10,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[ye,me])),_:1},8,["icon"])):(0,i.kq)("",!0),(0,l.SU)(mt)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(U.Z,{key:11,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[he,Ze])),_:1},8,["icon"])),(0,l.SU)(ht)?((0,i.wg)(),(0,i.j4)(U.Z,{key:12,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[We,ve])),_:1},8,["icon"])):(0,i.kq)("",!0),(0,l.SU)(ht)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(U.Z,{key:13,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[je,ze])),_:1},8,["icon"])),(0,l.SU)(n).state.wifi.channel>0?((0,i.wg)(),(0,i.j4)(U.Z,{key:14,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[Ae,Le,Ce,Ie])),_:1},8,["icon"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])),_:1})):(0,i.kq)("",!0),(0,l.SU)(gt)&&(0,l.SU)(vt)?((0,i.wg)(),(0,i.iD)("div",qe,[(0,i.Wm)(w.Z,{title:"WLAN-Security"},{default:(0,i.w5)((()=>["disabled"==(0,l.SU)(n).state.wifi.security_mode||"wep"==(0,l.SU)(n).state.wifi.security_mode?((0,i.wg)(),(0,i.j4)(U.Z,{key:0,color:"danger",icon:(0,l.SU)(r.TrR),permanent:""},{default:(0,i.w5)((()=>[Ne,De])),_:1},8,["icon"])):"wpa_e"==(0,l.SU)(n).state.wifi.security_mode?((0,i.wg)(),(0,i.j4)(U.Z,{key:1,color:"warning",icon:(0,l.SU)(r.oRA),permanent:""},{default:(0,i.w5)((()=>[Fe,Pe])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:2,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[Ge,Me,He])),_:1},8,["icon"])),"wpa_psk"==(0,l.SU)(n).state.wifi.security_mode?((0,i.wg)(),(0,i.iD)("div",Re,[(0,l.SU)(n).state.wifi.security_psk.version>0?((0,i.wg)(),(0,i.j4)(U.Z,{key:0,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[Ee,xe])),_:1},8,["icon"])):(0,i.kq)("",!0),0==(0,l.SU)(n).state.wifi.security_psk.version?((0,i.wg)(),(0,i.j4)(U.Z,{key:1,color:"danger",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[Te,Be])),_:1},8,["icon"])):(0,i.kq)("",!0),(0,l.SU)(n).state.wifi.security_psk.encryption>0?((0,i.wg)(),(0,i.j4)(U.Z,{key:2,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[Ye,Ve])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:3,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[Ke,Oe])),_:1},8,["icon"]))])):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(w.Z,{title:"Mac-Filter"},{default:(0,i.w5)((()=>[(0,l.SU)(n).state.wifi.macFilter.enabled?((0,i.wg)(),(0,i.j4)(U.Z,{key:0,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[Xe,Je])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:1,color:"warning",icon:(0,l.SU)(r.jZI)},{right:(0,i.w5)((()=>[(0,i.Wm)(k.Z,{to:"/wifi-mac",icon:(0,l.SU)(r.Shd),"icon-w":"w-4","icon-h":"h-4",color:(0,l.SU)(St)?"white":"light",outline:(0,l.SU)(St),small:""},null,8,["icon","color","outline"])])),default:(0,i.w5)((()=>[Qe,$e])),_:1},8,["icon"]))])),_:1}),(0,i.Wm)(w.Z,{title:"WLAN-Advanced-Settings"},{default:(0,i.w5)((()=>[(0,l.SU)(n).state.wifi.broadcast_ssid?((0,i.wg)(),(0,i.j4)(U.Z,{key:0,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[et,tt])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:1,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[nt,it])),_:1},8,["icon"])),(0,l.SU)(n).state.wifi.reduce_tx_power?((0,i.wg)(),(0,i.j4)(U.Z,{key:2,color:"success",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[ot,lt])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:3,color:"warning",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[st,at])),_:1},8,["icon"])),""==(0,l.SU)(n).state.wifi.turn_off.from||""==(0,l.SU)(n).state.wifi.turn_off.till?((0,i.wg)(),(0,i.j4)(U.Z,{key:4,color:"warning",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[rt,ct])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:5,color:"success",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[ut,wt])),_:1},8,["icon"]))])),_:1}),(0,i.Wm)(w.Z,{title:"WPS Settings"},{default:(0,i.w5)((()=>[(0,l.SU)(n).state.wifi.wps_enabled?((0,i.wg)(),(0,i.j4)(U.Z,{key:0,color:"warning",icon:(0,l.SU)(r.oL1),permanent:""},{default:(0,i.w5)((()=>[dt,kt])),_:1},8,["icon"])):((0,i.wg)(),(0,i.j4)(U.Z,{key:1,color:"success",icon:(0,l.SU)(r.jZI),permanent:""},{default:(0,i.w5)((()=>[ft,Ut])),_:1},8,["icon"]))])),_:1}),(0,i.Wm)(w.Z,{title:"Further Information"},{default:(0,i.w5)((()=>[(0,i.Wm)(U.Z,{color:"info",icon:(0,l.SU)(r.gCD),permanent:""},{default:(0,i.w5)((()=>[_t])),_:1},8,["icon"])])),_:1})])):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(f.Z)],64))}};const St=pt;var gt=St}}]);
//# sourceMappingURL=wifi-stats.a34989e3.js.map