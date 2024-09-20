//@ui5-bundle captrialui/captrialui/Component-preload.js
sap.ui.require.preload({
	"captrialui/captrialui/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","captrialui/captrialui/model/models"],function(i,e,t){"use strict";return i.extend("captrialui.captrialui.Component",{metadata:{manifest:"json"},init:function(){i.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"captrialui/captrialui/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(i){"use strict";return i.extend("captrialui.captrialui.controller.App",{onInit:function(){}})});
},
	"captrialui/captrialui/controller/Main.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(i){"use strict";return i.extend("captrialui.captrialui.controller.Main",{onInit:function(){}})});
},
	"captrialui/captrialui/i18n/i18n.properties":'# This is the resource bundle for captrialui.captrialui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Demo App\n\n#YDES: Application description\nappDescription=Demo App\n#XTIT: Main view title\ntitle=Demo App\n\n#XFLD,24\nflpTitle=Demo App\n',
	"captrialui/captrialui/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"captrialui.captrialui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.4","toolsId":"437b818c-bf1f-4c9e-bea3-f701020cfe10"},"dataSources":{"mainService":{"uri":"trialcapservice/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"captrialui-Manage":{"semanticObject":"captrialui","action":"Manage","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.127.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"captrialui.captrialui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"captrialui.captrialui.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMain","pattern":":?query:","target":["TargetMain"]}],"targets":{"TargetMain":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Main","viewName":"Main"}}},"rootView":{"viewName":"captrialui.captrialui.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"captrailprj"}}',
	"captrialui/captrialui/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"captrialui/captrialui/view/App.view.xml":'<mvc:View controllerName="captrialui.captrialui.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"captrialui/captrialui/view/Main.view.xml":'<mvc:View controllerName="captrialui.captrialui.controller.Main"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content /></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
