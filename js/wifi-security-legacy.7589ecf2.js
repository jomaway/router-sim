"use strict";(self["webpackChunkrouter_sim"]=self["webpackChunkrouter_sim"]||[]).push([[681],{2419:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(6252),r=t(2119),l={setup:function(e){var n=(0,r.tv)(),t=n.getRoutes(),l=[];for(var u in t){var a=t[u].path,s=t[u].meta&&t[u].meta.title?t[u].meta.title:null;s&&l.push({path:a,title:s})}return function(e,n){return(0,i.wg)(),(0,i.iD)("div")}}};const u=l;var a=u},2618:function(e,n,t){t.d(n,{Z:function(){return p}});t(9653),t(8309);var i=t(6252),r=t(3577),l=t(2262),u=t(9963),a=["type","name","value"],s=(0,i._)("span",{class:"check"},null,-1),o={class:"control-label"},d={props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup:function(e,n){var t=n.emit,d=e,c=(0,i.Fl)({get:function(){return d.modelValue},set:function(e){t("update:modelValue",e)}}),p=(0,i.Fl)((function(){return"radio"===d.type?"radio":"checkbox"}));return function(n,t){return(0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.options,(function(n,d){return(0,i.wg)(),(0,i.iD)("label",{key:d,class:(0,r.C_)([e.type,"mr-6 mb-3 last:mr-0"])},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,l.dq)(c)?c.value=e:null}),type:(0,l.SU)(p),name:e.name,value:d},null,8,a),[[u.YZ,(0,l.SU)(c)]]),s,(0,i._)("span",o,(0,r.zw)(n),1)],2)})),128))],2)}}};const c=d;var p=c},8739:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var i=t(6252),r=t(2262),l=t(9963),u=t(8637),a=t(5317),s=t(7315),o=t(9151),d=t(2618),c=t(5690),p=t(2213),f=t(5693),m=t(1388),w=t(6373),h=t(2419),g=t(8356),_=t(736),W=t(744),S=t(7841),y=t(86),v=(0,i._)("p",null,"Wifi-Security saved. Go to Statistics to check your Wifi-Status ",-1),b={key:0},k=(0,i._)("b",null,"Danger:",-1),U=(0,i.Uk)(" You disabled all wifi-security settings. Your network will be open for everyone within reach. "),Z={key:1},V={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},A={key:2},P=(0,i._)("b",null,"Info:",-1),D=(0,i.Uk)(" Ein externer Radius Server ist für diese Einstellung notwendig! "),z={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},L={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3"},N={key:3},x=(0,i._)("b",null,"Danger:",-1),E=(0,i.Uk)(" This security option is highly insecure. WEP can be hacked within minutes. "),F={key:4},H=(0,i.Uk)(" Please select an Security Option! "),I=(0,i._)("p",null,"Funksignale bewegen sich im freien Raum. Das bedeutet, jeder der ein Funksignal empfangen kann, kann die gesendeten Funksignale abhören oder manipulieren. Das Abhören einer Funkverbindung kann praktisch nicht verhindert werden. Deshalb müssen WLANs mit Authentifizierung und Verschlüsselung betrieben werden.",-1),R=(0,i._)("p",null,"Fremde Personen sollten das eigene WLAN nicht nutzen dürfen. Deshalb sollte der Zugriff auf das WLAN mit einem starken Passwort eingeschränkt werden. Das Passwort bekommen dann nur die Personen und Geräte, die Zugriff auf das WLAN haben dürfen. Doch ist das Passwort erst einmal bekannt, dann ist damit der Zugriff ungesichert. Dieses Verfahren nennt man PSK (Pre-Shared-Key).",-1),C=(0,i._)("p",null,"Bei größeren WLANs mit vielen Nutzern und Access Points kann Authentifizierung auch mit eigene Zugangsdaten (Benutzername und Passwort) pro Nutzer eingerichtet werden. An einer zentralen Stelle kann der Zugriff auf einfache Art und Weise freigegeben oder eingeschränkt werden. Dies erfordert doch einen erhöhten administrativen Aufwand.",-1),j=(0,i._)("p",null,"Durch die Verschlüsselung soll das Mitlesen der übertragenen Daten verhindert werden. Die Verschlüsselungsstandards (WEP, WPA, WPA2 und WPA3) legen fest wie die Verschlüsselung funktioniert. WEP und WPA sind heutzutage leicht zu knacken und sollten auf keinen Fall verwendet werden.",-1),G=(0,i._)("p",null,"WPA2 (Wifi Protected Access 2) wurde 2004 eingeführt und war lange Zeit der sicherste Standard und gilt auch heute noch als relativ sicher. Jedoch hat auch WPA2 einige Schwachstellen. Deshalb wurde 2018 der Nachfolger WPA3 vorgestellt. Dieser gilt als der aktuelle und sicherste Verschlüsselungsstandard. Leider unterstützen immer noch nicht alle Geräte diesen Standard, so das oft auf WPA2 zurückgegriffen werden muss.",-1),M={class:"flex"},Y=(0,i._)("a",{class:"link text-red-600",href:"https://www.elektronik-kompendium.de/sites/net/1403011.htm",target:"_blank"}," Weitere Infos hier",-1),K={setup:function(e){var n=(0,r.iH)(["Wireless","Security"]),t=(0,u.oR)(),K=(0,r.qj)({selected:t.state.wifi.security_mode,wpa_p:{version:y._Z[t.state.wifi.security_psk.version],encryption:y.HL[t.state.wifi.security_psk.encryption],pw:t.state.wifi.security_psk.pw},wpa_e:{version:y._Z[t.state.wifi.security_enterprise.version],encryption:y.HL[t.state.wifi.security_enterprise.encryption],ip:t.state.wifi.security_enterprise.radius.ip,port:t.state.wifi.security_enterprise.radius.port}}),O=function(){t.dispatch("saveWifiSettings",K),console.log("Wifi-Security saved"),q.value=!0},q=(0,r.iH)(!1);return function(e,t){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(S.Z,{modelValue:q.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return q.value=e}),title:"Wifi Security Saved"},{default:(0,i.w5)((function(){return[v]})),_:1},8,["modelValue"]),(0,i.Wm)(o.Z,{"title-stack":n.value},null,8,["title-stack"]),(0,i.Wm)(s.Z,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(g.Z,{title:"Wifi-Security",icon:(0,r.SU)(a.y_2),expanded:"",form:"",onSubmit:(0,l.iM)(O,["prevent"])},{default:(0,i.w5)((function(){return[(0,i.Wm)(d.Z,{modelValue:(0,r.SU)(K).selected,"onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,r.SU)(K).selected=e}),name:"selected-security-option",type:"radio",options:(0,r.SU)(y.XG)},null,8,["modelValue","options"]),(0,i.Wm)(f.Z),"disabled"==(0,r.SU)(K).selected?((0,i.wg)(),(0,i.iD)("div",b,[(0,i.Wm)(_.Z,{color:"danger",icon:(0,r.SU)(a.uac),permanent:""},{default:(0,i.w5)((function(){return[k,U]})),_:1},8,["icon"])])):"psk"==(0,r.SU)(K).selected?((0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("div",V,[(0,i.Wm)(c.Z,{label:"Version",help:"WPA sollte nicht mehr verwendet werden. Umso höher die Version umso besser. Allerdings unterstützen noch nicht alle Clients WPA3!"},{default:(0,i.w5)((function(){return[(0,i.Wm)(p.Z,{modelValue:(0,r.SU)(K).wpa_p.version,"onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,r.SU)(K).wpa_p.version=e}),options:(0,r.SU)(y._Z)},null,8,["modelValue","options"])]})),_:1}),(0,i.Wm)(c.Z,{label:"Encryption",help:"Select encryption type: AES ist moderner und sicherer als TKIP"},{default:(0,i.w5)((function(){return[(0,i.Wm)(p.Z,{modelValue:(0,r.SU)(K).wpa_p.encryption,"onUpdate:modelValue":t[3]||(t[3]=function(e){return(0,r.SU)(K).wpa_p.encryption=e}),options:(0,r.SU)(y.HL)},null,8,["modelValue","options"])]})),_:1})]),(0,i.Wm)(c.Z,{label:"Password",help:"Choose a strong password for safety reasons. Verify at https://checkdeinpasswort.de/ "},{default:(0,i.w5)((function(){return[(0,i.Wm)(p.Z,{modelValue:(0,r.SU)(K).wpa_p.pw,"onUpdate:modelValue":t[4]||(t[4]=function(e){return(0,r.SU)(K).wpa_p.pw=e})},null,8,["modelValue"])]})),_:1})])):"enterprise"==(0,r.SU)(K).selected?((0,i.wg)(),(0,i.iD)("div",A,[(0,i.Wm)(_.Z,{color:"info",icon:(0,r.SU)(a._gM),permanent:""},{default:(0,i.w5)((function(){return[P,D]})),_:1},8,["icon"]),(0,i._)("div",z,[(0,i.Wm)(c.Z,{label:"Version"},{default:(0,i.w5)((function(){return[(0,i.Wm)(p.Z,{modelValue:(0,r.SU)(K).wpa_e.version,"onUpdate:modelValue":t[5]||(t[5]=function(e){return(0,r.SU)(K).wpa_e.version=e}),options:(0,r.SU)(y._Z)},null,8,["modelValue","options"])]})),_:1}),(0,i.Wm)(c.Z,{label:"Encryption",help:"Select encryption type"},{default:(0,i.w5)((function(){return[(0,i.Wm)(p.Z,{modelValue:(0,r.SU)(K).wpa_e.encryption,"onUpdate:modelValue":t[6]||(t[6]=function(e){return(0,r.SU)(K).wpa_e.encryption=e}),options:(0,r.SU)(y.HL)},null,8,["modelValue","options"])]})),_:1})]),(0,i._)("div",L,[(0,i.Wm)(c.Z,{class:"col-span-2",label:"Radius Server IP",help:"Geben Sie hier die IP-Adresse des Radius servers ein."},{default:(0,i.w5)((function(){return[(0,i.Wm)(p.Z,{modelValue:(0,r.SU)(K).wpa_e.ip,"onUpdate:modelValue":t[7]||(t[7]=function(e){return(0,r.SU)(K).wpa_e.ip=e})},null,8,["modelValue"])]})),_:1}),(0,i.Wm)(c.Z,{label:"Radius Server Port",help:"Der Standardport ist: 1812"},{default:(0,i.w5)((function(){return[(0,i.Wm)(p.Z,{modelValue:(0,r.SU)(K).wpa_e.port,"onUpdate:modelValue":t[8]||(t[8]=function(e){return(0,r.SU)(K).wpa_e.port=e})},null,8,["modelValue"])]})),_:1})])])):"wep"==(0,r.SU)(K).selected?((0,i.wg)(),(0,i.iD)("div",N,[(0,i.Wm)(_.Z,{color:"danger",icon:(0,r.SU)(a.uac)},{right:(0,i.w5)((function(){return[(0,i.Wm)(W.Z,{path:(0,r.SU)(a._gM)},null,8,["path"])]})),default:(0,i.w5)((function(){return[x,E]})),_:1},8,["icon"])])):((0,i.wg)(),(0,i.iD)("div",F,[(0,i.Wm)(_.Z,{color:"info",icion:(0,r.SU)(a._gM)},{right:(0,i.w5)((function(){return[]})),default:(0,i.w5)((function(){return[H]})),_:1},8,["icion"])])),(0,i.Wm)(f.Z),(0,i.Wm)(w.Z,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(m.Z,{type:"submit",color:"info",label:"Save"})]})),_:1})]})),_:1},8,["icon","onSubmit"])]})),_:1}),(0,i.Wm)(s.Z,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(g.Z,{title:"Weitere Infos:",icon:(0,r.SU)(a.geb),expanded:"",class:"bg-gray-200"},{default:(0,i.w5)((function(){return[(0,i.Wm)(c.Z,{label:"WLAN-Sicherheit"},{default:(0,i.w5)((function(){return[I]})),_:1}),(0,i.Wm)(c.Z,{label:"WLAN-Authentifizierung"},{default:(0,i.w5)((function(){return[R,C]})),_:1}),(0,i.Wm)(c.Z,{label:"WLAN-Verschlüsselung"},{default:(0,i.w5)((function(){return[j,G]})),_:1}),(0,i.Wm)(f.Z),(0,i._)("div",M,[(0,i.Wm)(W.Z,{path:(0,r.SU)(a.aIO)},null,8,["path"]),Y])]})),_:1},8,["icon"])]})),_:1}),(0,i.Wm)(h.Z)],64)}}};const O=K;var q=O}}]);
//# sourceMappingURL=wifi-security-legacy.7589ecf2.js.map