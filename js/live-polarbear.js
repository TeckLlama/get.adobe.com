/**
 * $Header: /source/docroot/downloadcenter/js/live/polarbear.js,v 1.21 2012/01/05 19:37:33 clechner Exp $
 */ 
if(typeof JSON!=='object'){JSON={}}(function(){'use strict';function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse');}}}()); 
var samcapData = {
  "lightroom" : {
    "Windows" : "KHBGG",
    "Macintosh" : "KHBGH"
  }
};  
(function($) {
	
	$.localizeNumber = function(num, locale){
		var commaLocales = ["de","fr","es","it","br","se","nl","no","fi","dk","ru","cz","tr","pl"];
		for (var i = commaLocales.length - 1; i >= 0; i--){
			if (locale == commaLocales[i]) {
				return num.toString().replace(/\.+/,',');
			}
		};
		return num;
	}
	
	$.deLocalizeNumber = function(num, locale){		
		var commaLocales = ["de","fr","es","it","br","se","nl","no","fi","dk","ru","cz","tr","pl"];
		for (var i = commaLocales.length - 1; i >= 0; i--){
			if (locale == commaLocales[i]) {				
				return num.toString().replace(/\,+/,'.');
			}
		};
		return num;
	}
	
	// use instead of console.log(), which errors in IE
	$.log = function(text){
	    if( (window['console'] !== undefined) ){
	        console.log(text);
	    }
	}
	
	// use .fn and return this so it's chainable
	$.fn.exists = function () {
	    return this.length !== 0;
	}
	
	//use this function to check flash version is valid. Returns true if version needs to be updated
	$.isFlashPlayerUpToDate = function(latestVersion) {
		var temp = deconcept.SWFObjectUtil.getPlayerVersion();
		var currentVersion = [
			deconcept.SWFObjectUtil.getPlayerVersion().major,
			deconcept.SWFObjectUtil.getPlayerVersion().minor,
			deconcept.SWFObjectUtil.getPlayerVersion().rev
		];
		
		for (var i = 0; i <= latestVersion.length; i++) {
			if (latestVersion[i] > currentVersion[i]) {
				return false;
			}
		}
		
		return true;
	}
	
	//use this function to detect flash is enabled or disabled. Returns true if enabled and false if disabled
	$.isFlashPluginEnabled = function() {
		var flashVersion = deconcept.SWFObjectUtil.getPlayerVersion();
		if(flashVersion.major === 0 && flashVersion.minor === 0 && flashVersion.rev === 0) { return false; }
		else { return true; }
	}
	
	//use this function to detect flash is enabled or disabled. Returns true if enabled and false if disabled
	$.isMetroDevice = function() {
		return window.location.href.match("metro=true");
	}
	
	//use to function to check the consumer Preview
	$.isConsumerPreview = function() {
		
		try {
			var fa, full_ver;
			var ver_num;
			oClientCaps = document.createElement("DIV");
			oClientCaps.id = "oClientCaps";
			oClientCaps.addBehavior ("#default#clientCaps");
			document.getElementsByTagName("body")[0].appendChild(oClientCaps);
			full_ver = oClientCaps.getComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4383}","componentid");
			fa = full_ver.split(",");
			ver_num = parseInt(fa[2]);
		
			if(ver_num < 8400) { return true;}
			else {return false;}
		
		} catch(e) {
    		return false;
		}
		
	}
	
})(jQuery);
/**
 * $Header: /source/docroot/downloadcenter/js/live/polarbear.downloadbutton.js,v 1.17 2012/01/27 21:57:32 clechner Exp $
 */ 
(function($) {
	var DownloadButton = function(element, options) {
		var elem = $(element);
		var obj = this;
		var settings = $.extend({}, options || {});
		var useAihIfPossible = false;
		
		var queryStringParameters = {
			installer: null,
			a: null,
			d: null,
			p: null,
			b: null,
			os: null,
			browser_type: null,
			browser_dist: null,
			browser_vers: null,
			aList: [],
			dList: [],
			dualoffer: null,
			mdualoffer: null,
			chromedefault: null,
			type: null,
			stype: null,
			cr: null,
			direct: false,
			goc: null,
			cta: null
		};
		
		var uriParameters = {
			downloadcenter: null,
			locale: null,
			downloadType: null 
		};
		
		var aihParameters = {
			mainInstallerName: null,
			mainInstallerBrowser: null,
			mainInstallerArchitecture: null,
			mainInstallerAihCompatible: false,
			clientPlatformType: null,
			clientPlatformDistribution: null,
			clientPlatformArchitecture: null,
            clientPlatformMisc: null
		};
		var gcEligible = false;
		// TODO: decide when methods should be private vs. public
		
		this.setOriginalUrl = function (url) {
			if (url === undefined) {
				jQuery.error("setOriginalUrl(): 'url' argument is required.");
			}
			obj.originalUrl = url;
			return this; 	
		}
		this.getOriginalUrl =  function() {
			return obj.originalUrl;
		};
		this.setMainInstaller = function(installer) {
			queryStringParameters.installer = installer;
			return this;
		};
		this.getMainInstaller =  function() {
			return queryStringParameters.installer;
		};
		
		this.setMainInstallerBrowser = function(browser) {
			aihParameters.mainInstallerBrowser = browser;
			return this;
		};
		this.getMainInstallerBrowser =  function() {
			return aihParameters.mainInstallerBrowser;
		};
		
		this.setMainInstallerName = function(name) {
			aihParameters.mainInstallerName = name;
			return this;
		};
		this.getMainInstallerName =  function() {
			return aihParameters.mainInstallerName;
		};
		
		this.setMainInstallerArchitecture = function(architecture) {
			aihParameters.mainInstallerArchitecture = architecture;
			return this;
		};
		this.getMainInstallerArchitecture =  function() {
			return aihParameters.mainInstallerArchitecture;
		};
		
		this.setMainInstallerAihCompatible = function(compatible) {
			aihParameters.mainInstallerAihCompatible = compatible;
			return this;
		};
		this.getMainInstallerAihCompatible =  function() {
			return aihParameters.mainInstallerAihCompatible;
		};
		
		this.setAcceptedInstaller = function(installer) {
			queryStringParameters.a = installer;
			return this;
		};
		this.getAcceptedInstaller = function() {
			return queryStringParameters.a;
		};
		
		this.setDeclinedInstaller = function(installer) {
			queryStringParameters.d = installer;
			return this;
		};
		this.getDeclinedInstaller = function() {
			return queryStringParameters.d;
		};
		
		this.setPreinstalledInstaller = function(installer) {
			if (installer !== undefined && !installer.match(/McAfee/)) { 				
				queryStringParameters.p = installer;
			}
			return this;
		};
		this.getPreinstalledInstaller = function() {
			return queryStringParameters.p;
		};
		
		this.setBundledInstaller = function(installer) {
			queryStringParameters.b = installer;
			return this;
		};
		this.getBundledInstaller = function() {
			return queryStringParameters.b;
		};
		
		this.setClientPlatformType = function(type) {
			aihParameters.clientPlatformType = type;
			return this;
		};
		this.getClientPlatformType = function() {
			return aihParameters.clientPlatformType;
		};
		
		this.setClientPlatformDistribution = function(os) {
			aihParameters.clientPlatformDistribution = os;
			return this;
		};
		this.getClientPlatformDistribution = function() {
			return aihParameters.clientPlatformDistribution;
		};
		
        this.setClientPlatformMisc = function(version) {
			aihParameters.clientPlatformMisc = version;
			return this;
		};
		this.getClientPlatformMisc = function() {
			return aihParameters.clientPlatformMisc;
		};
        
		this.setOperatingSystem = function(os) {
			queryStringParameters.os = os;
			return this;
		};
		this.getOperatingSystem = function() {
			return queryStringParameters.os;
		};
		
		this.setClientPlatformArchitecture = function(architecture) {
			aihParameters.clientPlatformArchitecture = architecture;
			return this;
		};
		this.getClientPlatformArchitecture = function() {
			return aihParameters.clientPlatformArchitecture;
		};
		
		this.setClientBrowserType = function(type) {
			queryStringParameters.browser_type = type;
			return this;
		};
		
		this.getClientBrowserType = function() {
			return queryStringParameters.browser_type;
		};
		
		this.setClientBrowserDistribution = function(dist) {
			queryStringParameters.browser_dist = dist;
			return this;
		};
		
		this.getClientBrowserDistribution = function() {
			return queryStringParameters.browser_dist;
		};
		
		this.setClientBrowserVersion = function(version){
			queryStringParameters.browser_vers = version;
			return this;
		}
		
		this.getClientBrowserVersion = function(){
			return queryStringParameters.browser_vers;
		}
		
		this.setDualOffer = function(dualoffer) {
			queryStringParameters.dualoffer = dualoffer;
			return this; 
		}
		
		this.getDualOffer = function(){
			return queryStringParameters.dualoffer;
		}
		
		this.setMDualOffer = function(mdualoffer) {
			queryStringParameters.mdualoffer = mdualoffer;
			return this; 
		}
		
		this.getMDualOffer = function(){
			return queryStringParameters.mdualoffer;
		}
		
		this.setChromeDefault = function(chromedefault) {
			queryStringParameters.chromedefault = chromedefault;
			return this;
		}
		
		this.getChromeDefault = function() {
			return queryStringParameters.chromedefault;
		}
		
		this.setAcceptInstallerList = function(acceptList){
			queryStringParameters.aList = acceptList;
		}
		
		this.addAcceptInstallerList = function(installer){
			if(queryStringParameters.aList.indexOf(installer) === -1){
				queryStringParameters.aList.push(installer);	
			}
			if(queryStringParameters.dList.indexOf(installer) >= 0){
				queryStringParameters.dList.splice(queryStringParameters.dList.indexOf(installer), 1);
			}
			return this;
		}
		
		this.getAcceptInstallerList = function(){
			return queryStringParameters.aList;
		}
		
		this.setDeclineInstallerList = function(declineList){
			queryStringParameters.dList = declineList;
		}
		
		this.addDeclineInstallerList = function(installer){
			if(queryStringParameters.dList.indexOf(installer) === -1){
				queryStringParameters.dList.push(installer);	
			}
			if(queryStringParameters.aList.indexOf(installer) >= 0){
				queryStringParameters.aList.splice(queryStringParameters.aList.indexOf(installer), 1);
			}
			return this;
		}
		
		this.getDeclineInstallerList = function(){
			return queryStringParameters.dList;
		}
		
		this.setType = function(value){
			queryStringParameters.type = value;
		} 
		
		this.getType = function(){
			return queryStringParameters.value;
		}
		
		this.setSamcap = function(value) {
			queryStringParameters.samcap = value;
			
		}
		
		this.getSamcap = function() {
			return queryStringParameters.samcap;
		}
		
		this.setAcrobatDownloadUrl = function() {
			if(this.getClientPlatformType() !== "Macintosh" && window.location.href.indexOf("otherversions") !== -1){
				if (this.getLocale() === "en") {
					var downloadPageUrl = "/reader/download/?installer=Reader_11.0.08_English_UK_for_Windows&stype="+this.getstype()+"&acr=true";
					$("#buttonDownload1").attr("href", downloadPageUrl).attr("target","_self");
					if (this.getbtnActivity() === true){
						$("#buttonDownload1").attr("href",downloadPageUrl+"&cta=true").attr("target","_self");
					}
				} else {
					$("#buttonDownload1").attr("href", "/"+this.getLocale()+"/reader/download/?installer=Reader_11.0.08_English_UK_for_Windows&stype="+this.getstype()+"&acr=true").attr("target","_self");
				}
			}
		}	
		this.setDirect = function(value){
			queryStringParameters.direct = value;
		}
		
		this.getDirect = function(){
			return queryStringParameters.direct;
		}
			
		this.setDownloadCenter = function(name) {
			if (name === undefined) {
				jQuery.error("setDownloadCenter(): 'name' argument is required.");
			}
			uriParameters.downloadcenter = name;
			return this;
		};
		this.getDownloadCenter = function() {
			return uriParameters.downloadcenter;
		};
		
		this.setLocale = function(locale) {
			if (locale === undefined) {
				jQuery.error("setLocale(): 'locale' argument is required.");
			} 
			uriParameters.locale = locale;
			return this;
		};
		this.getLocale = function() {
			return uriParameters.locale;
		};
		
		this.isClientAihCompatible = function() {			
			if(obj.getClientPlatformType() == "Windows")
			{
				return (obj.getClientPlatformType() == "Windows")  && ($.inArray(obj.getClientPlatformDistribution(), [ "Windows 11", "Windows 10", "Windows 8.1", "Windows 8", "Windows 7", "XP", "Vista", "2008", "2003", "2019", "2016", "2012" ]) > -1)
				}
			else{
				return (obj.getClientPlatformType() == "Macintosh")  && ($.inArray(obj.getClientPlatformDistribution(), ["OSX" ]) > -1) && ($.inArray(obj.getClientPlatformMisc(), []) > -1);
			}
			
		};
		
		this.isAihCompatible = function() {
			return obj.getUseAihIfPossible() && obj.isClientAihCompatible() && obj.getMainInstallerAihCompatible() && !(this.getClientPlatformArchitecture() == "x86-32" && this.getMainInstallerName().match(/64-bit/)) && !(this.getMainInstallerName().match(/Catalan/) || this.getMainInstallerName().match(/Basque/));
		};
		
		this.setUseAihIfPossible = function(useAih) {
			obj.useAihIfPossible = useAih;
			return this;
		};
		
		this.getUseAihIfPossible = function() {
			return obj.useAihIfPossible;
		};
		
		this.setDownloadType = function() {
			if (obj.isAihCompatible()){
				uriParameters.downloadType = obj.aihDownloadType;
			} else {
				uriParameters.downloadType = obj.defaultDownloadType;
			}
			return this;
		};
		this.getDownloadType = function() {
			return uriParameters.downloadType;
		};
		
		this.setDefaultDownloadType = function(type) {
			if (type === undefined) {
				jQuery.error("setDefaultDownloadType(): 'type' argument is required.");
			}
			obj.defaultDownloadType = type;
			return this;
		};
		this.getDefaultDownloadType = function() {
			return obj.defaultDownloadType;
		};
		
		this.setSaiDownloadType = function(type) {
			if (type === undefined)
				type = obj.defaultDownloadType;
			
			obj.saiDownloadType = type;
			return this;
		};
		this.getSaiDownloadType = function() {
			return obj.saiDownloadType;
		};
		
		this.setAihDownloadType = function(type) {
			obj.aihDownloadType = type;
			return this;
		};
		this.getAihDownloadType = function() {
			return obj.aihDownloadType;
		};	
		
		this.setstype = function(type) {
			queryStringParameters.stype = type;
			return this;
		};		
		this.getstype = function() {			
			return queryStringParameters.stype;	
		};
		
		this.setcr = function(type) {
			queryStringParameters.cr = type;
			return this;
		};		
		this.getcr = function() {			
			return queryStringParameters.cr;	
		};
		this.setgoc = function(type) {
			queryStringParameters.goc = type;
			return this;
		};	
		this.setbtnActivity = function(type){
			queryStringParameters.cta = type;
			return this;
		};
		this.getbtnActivity = function(){
			return queryStringParameters.cta;
		};		
		this.getgoc = function() {			
			return queryStringParameters.goc;	
		};
		
		this.getGCEligible = function(){
			return obj.gcEligible;
		};
		this.getSampleNumber = function(){
  			return Math.random();
		};
		this.getSpreadPercentage = function(){
			var clientGeo = $("#clientgeocountry").html();
  			return 0.4799998999;
		};
		this.setGCEligible = function(){
			if($("#clientgeocountry").length !== 0 ) {
						var gcClientGeo = $("#clientgeocountry").html();
						var gcEligibleCountryList = ["IN","SG","CA","KR"];
						if(this.getDownloadCenter() =="reader" && this.getClientPlatformType() == "Windows" && this.getClientPlatformDistribution() !== "XP" && this.getClientPlatformDistribution() !== "Vista" && !gcEligible)
							if(this.getSampleNumber() <= this.getSpreadPercentage()) {	
								obj.gcEligible = ($.inArray(gcClientGeo,gcEligibleCountryList) > -1);
							}
					}
		};
		this.setButtonClass = function(str) {
			if (str === undefined) {
				jQuery.error("setButtonClass(): 'str' argument is required.");
			} 
			obj.buttonClass = str;
			return this; 
		}
		this.getButtonClass = function() {
			return obj.buttonClass;
		}
		
		this.isEnabled = function() {
			return 	obj.getMainInstaller() !== undefined 
					&& obj.getLocale() !== undefined 
					&& obj.getDownloadCenter() !== undefined;
		};
		
		this.getQueryString = function() {
			// Download pages use a different set of parameters than other pages
				var params = obj.getDownloadType() == "download" ? [ "installer", "os", "browser_type", "browser_dist", "a", "b", "d", "p", "dualoffer", "mdualoffer","chromedefault", "type", "browser_vers", "cr" , "goc" , "cta", "stype" ] : [ "installer", "stype" ];
			
			// Build the query string array
			var queryString = [];
			var isDualOffer = queryStringParameters.dualoffer !== undefined && queryStringParameters.dualoffer !== null && queryStringParameters.dualoffer ? true : false;
			var isMDualOffer = queryStringParameters.mdualoffer !== undefined && queryStringParameters.mdualoffer !== null && queryStringParameters.mdualoffer ? true : false;
			var isSamcap = queryStringParameters.samcap !== undefined && queryStringParameters.samcap !== null && queryStringParameters.samcap ? true : false;

			$.each(params, function(key, value) {
				if (queryStringParameters[value] === null || queryStringParameters[value] === undefined) return;
				if(isDualOffer && (value == "a" || value == "d" )){
					return;
				}else if(isMDualOffer && (value == "a" || value == "d" )){
					return;
				}else{
					$.log(" value=" + queryStringParameters[value]);
					queryString.push([ value, queryStringParameters[value] ].join("="));				
				}	
			});
			
			//set samcap for ltrosx when offer is accepted.
			if(isSamcap) {
				var sdid = '';
				if (typeof samcapData !== 'undefined' && typeof samcapData.lightroom !== 'undefined' && typeof  samcapData.lightroom[obj.getClientPlatformType()] !== 'undefined'){
					sdid = samcapData.lightroom[obj.getClientPlatformType()];
				} 
				else { //Fallback
					if(obj.getClientPlatformType() == "Windows") {
							sdid= 'KHBGG';
						}
						else {
							sdid= 'KHBGH';
					 }
				}
				queryString.push([ 'sdid', sdid ].join("="));
			}
			
			if(isDualOffer){
				$.each(queryStringParameters.aList, function(key, value) {
					if($.trim(value).length > 0){
						$.log("accept list value=" + value);
						queryString.push(["a", value].join("="));
					}
				})
				
				$.each(queryStringParameters.dList, function(key, value) {
					if($.trim(value).length > 0){
						$.log("decline list value=" + value);
						queryString.push(["d", value].join("="));
					}	
				})	
			}
			if(isMDualOffer){
				$.each(queryStringParameters.aList, function(key, value) {
					if($.trim(value).length > 0){
						$.log("accept list value=" + value);
						queryString.push(["a", value].join("="));
					}
				})
				
				$.each(queryStringParameters.dList, function(key, value) {
					if($.trim(value).length > 0){
						$.log("decline list value=" + value);
						queryString.push(["d", value].join("="));
					}	
				})	
			}
			if(obj.getDirect()){
				queryString.push(["direct", "true"].join("="));
			}
			if (!obj.isAihCompatible()){
				queryString.push(["standalone", "1"].join("="));
			}
			
			return queryString;
		};
		
		this.getDownloadPageUrl = function() {
			
			this.setDownloadType();
			
			// Build the uri array
			var uri = [
				uriParameters.locale != "en" ? uriParameters.locale : null,
				uriParameters.downloadcenter,
				obj.isAihCompatible() ? uriParameters.downloadType : obj.saiDownloadType
			];
						
			// Strip elements equal to null
			uri = $.grep(uri, function(value) {
				return value !== null;
			});
			
			// Pad the uri array with null elements to provide leading and trailing forward slashes
			uri.splice(0, 0, null);
			uri.splice(uri.length, 0, null);
			
			// Join all elements and build a relative url string
			return [ uri.join("/"), obj.getQueryString().join("&") ].join("?");
		};
		
		this.updateDownloadButton = function() {
			var downloadPageUrl = obj.getDownloadPageUrl();
			if (obj.isEnabled()) {
				if(this.getClientPlatformType() !== "Macintosh"){
					if(downloadPageUrl.indexOf("standalone=1") !== -1){
						$("#buttonDownload1").attr("href", "/reader/download/?installer=Reader_11.0.08_English_UK_for_Windows&stype="+this.getstype()+"&acr=true").attr("target","_self");
					}
					else{
						$("#buttonDownload1").attr("href",downloadPageUrl+"&acr=true").attr("target","_self");
					}
				}

				return $(elem).removeClass(obj.buttonClass+"-disabled")
								.removeAttr("disabled")
								.attr("href", downloadPageUrl);
			} else {
				if(this.getClientPlatformType() !== "Macintosh"){
					if(window.location.href.indexOf("otherversions") === -1){
					$("#buttonDownload1").attr("href", obj.originalUrl+"&acr=true").attr("target","_self");
					}
					else{
						$("#buttonDownload1").attr("href", "/reader/download/?installer=Reader_11.0.08_English_UK_for_Windows&stype="+this.getstype()+"&acr=true").attr("target","_self");
					}
				}
				return $(elem).addClass(obj.buttonClass+"-disabled")
								.attr("disabled", true)
								.attr("href", obj.originalUrl);
			}
		};
		
		this.openExtraWindow = function() {									
			var userAgentObj = $.pbUserAgent().getClientUserAgent();			
			if (this.getClientBrowserType() == "MSIE" && userAgentObj.browser_vers <= 11 && this.getClientPlatformType() !== "Macintosh" && this.isAihCompatible()) {
				// AIH work flow for IE.
				var msie_aih_download_url = "";
				
				if (obj.getLocale() !== undefined && obj.getLocale() !== 'en') {
					msie_aih_download_url = "/"+obj.getLocale();
				}
				msie_aih_download_url += "/"+obj.getDownloadCenter()+"/download/msie/?"+obj.getQueryString().join("&");
				window.open(	
					  msie_aih_download_url
					, "msiedownload"
					, "status=0,toolbar=0,location=1,menubar=0,directories=0,resizable=1,scrollbars=1,height=1,width=1");
			}
		};
		
		// Constructor should be run last
		(function() {
			
			// Retrieve the original href value
			obj.setOriginalUrl(elem.attr("href"));
			
			// Set instance values based on settings
			obj.setMainInstaller(settings.mainInstaller);
			obj.setMainInstallerName(settings.mainInstallerName);
			obj.setMainInstallerBrowser(settings.mainInstallerBrowser);
			obj.setMainInstallerArchitecture(settings.mainInstallerArchitecture);
			obj.setMainInstallerAihCompatible(settings.mainInstallerAihCompatible);
			
			obj.setAcceptedInstaller(settings.acceptedInstaller);
			obj.setDeclinedInstaller(settings.declinedInstaller);			
			obj.setPreinstalledInstaller(settings.preinstalledInstaller);
			obj.setBundledInstaller(settings.bundledInstaller);
			
			obj.setClientPlatformType(settings.clientPlatformType);
			obj.setClientPlatformDistribution(settings.clientPlatformDistribution);
			obj.setClientPlatformArchitecture(settings.clientPlatformArchitecture);
			obj.setClientBrowserType(settings.browser_type);
			obj.setClientBrowserDistribution(settings.browser_dist);
			obj.setClientBrowserVersion(settings.browser_vers);
			obj.setClientPlatformMisc(settings.clientPlatformMisc);
			
			obj.setOperatingSystem(settings.clientPlatformDistribution);
			obj.setDownloadCenter(settings.downloadcenter);
			obj.setDefaultDownloadType(settings.defaultDownloadType);
			obj.setSaiDownloadType(settings.saiDownloadType);
			obj.setAihDownloadType(settings.aihDownloadType);
			obj.setstype(settings.sType);
			obj.setcr(settings.cr);
			obj.setLocale(settings.locale);
			obj.setButtonClass(settings.buttonClass);
			obj.setUseAihIfPossible(settings.useAihIfPossible);
			obj.setType(settings.type);
			
			if(settings.cta !== undefined && settings.cta ===true){
				obj.setbtnActivity(settings.cta);				
			}
			//set acrobatprotrial url
			obj.setAcrobatDownloadUrl();
			if(settings.direct !== undefined && settings.direct === true){
				obj.setDirect(settings.direct);
			}
			obj.setGCEligible();
			obj.setgoc(settings.goc);
			if(settings.downloadNowText !== undefined && !obj.isAihCompatible()){
				$(elem).text(settings.downloadNowText);
			}
			elem.click(function(event) {
				// opens depending on client (AIH work flow for IE).
				obj.openExtraWindow();
			});
			
			// Add the standard download-button class 
			if (!elem.hasClass(obj.buttonClass)) {
				elem.addClass(obj.buttonClass);
			}
		})();
	};
	
	$.fn.downloadbutton = function(options) {
		return this.each(function() {
			var element = $(this);
			if (element.data('downloadbutton')) return;
			element.data('downloadbutton', new DownloadButton(this, options));
		});
	};
})(jQuery);

/**
 * $Header: /source/docroot/downloadcenter/js/livebeta/polarbear.otherversions.js,v 1.21 2012/02/16 21:21:28 alongnio Exp $
 */ 
 (function($) {
	var OtherVersions = function(element, options) {
		var elem = $(element);
		var obj = this;
		var settings = $.extend({}, options || {});
		var selectBoxes = [];
		
		var init = function() {
			// Generate DOM nodes for select boxes and options
			obj.setSelectBoxes(obj.generateSelectBoxes(settings.steps));
			obj.generateSelectOptions(obj.getSelectBoxes(), settings.options, null, 0);
			// keep to original URL, so we can set it back if necessary
			obj.originalSysRequirementsUrl = settings.config.sysRequirementsLink.prop("href");
			
			$.each(obj.getSelectBoxes(), function(key, select) {
				select.bind("resetOptions", obj.getResetEventHandler());
				
				if (key != obj.getSelectBoxes().length - 1) {
					// Bind event handlers to the select boxes
					select.bind("updateOptions.fromSelectBox", obj.getUpdateEventHandler());
					select.bind("change.updateNextStep", obj.getChangeNextStepEventHandler());
				} else {
					// But the last select box has different event handlers
					select.bind("updateOptions.fromAjax", obj.getAjaxEventHandler(obj.getSelectBoxes(), settings.config));
					select.bind("change.updateDownloadContent", obj.getChangeDownloadContentEventHandler(settings.config));
				}
				// Reset the options to the default and add this select to the array of all selects
				select.trigger("resetOptions");
			})
			// Populate options in the first select box
			obj.getSelectBoxes()[0].trigger("updateOptions", [ null ]).prop('disabled', false).focus();
		};
		
		function sortByName(a,b){
			var a_array=a.Name.split(" ");
			var b_array=b.Name.split(" ");
			if(a_array && b_array){ 
				//return a.Name < b.Name ? 1 : -1;
				return parseFloat(b_array[1]) - parseFloat(a_array[1]);
			}
   		};
		
		this.generateSelectBoxes = function(steps) {
			// Iteratively generate the select boxes
			var nodes = [];
			$.each(steps, function(key, step) {
				var seperator = $("<div class=step-seperator />").append($("<label style=\"font: normal normal normal 12px/15px adobe-clean;padding-right: 10px;\" />").prop("for",step.label).text(step.label));
				var select = $("<select />").prop("id", step.id).data("options", {}).data("defaultOption", step.defaultOption);
				select.css("width", 306);
				select.css("height", 32);
				select.css("padding-left", 12);
				if(settings.config.locale=="jp"){
					select.css("font","italic normal normal 12px/17px adobe-clean");
				}
				else{
					select.css("font","italic normal normal 14px/17px adobe-clean");
				}
				select.appendTo(seperator);
				elem.append(seperator).append($("<p />"));
				// Add request parameters
				select.data("requestParameters", step.requestParameters);
				// Assign references to the next and previous select boxes
				nodes.push(select);
				if (nodes.length > 1) {
					nodes[key - 1].data("nextSelectBox", select);
				}
				// Assign the nextSelectBox to null for the last select box
				if (nodes.length == steps.length) {
					select.data("nextSelectBox", null);
				}
			});
			// Return the select objects in order
			return nodes;			
		};
		
		this.generateSelectOptions = function(selects, options, key, index) {
			$.each(options, function(i) {
				$.each(options[i], function(option, value) {
					// Store a new array of options by key in the current select box
					if (selects[index].data("options")[key] === undefined) {
						selects[index].data("options")[key] = [ ];
					}
					// Add an option to the select box by key
					selects[index].data("options")[key].push(option);
					// Recurse into the next depth level
					if (value !== null) {
						obj.generateSelectOptions(selects, value, option, index + 1);
					}
				});
			});
			return this;
		};
		
		this.getResetEventHandler = function(select) {
			// The reset event restores this select box to a default state
			return function(event) {
				$(event.currentTarget).empty()
									.prop('disabled', 'disabled')
									.append($("<option />", { value: "default", selected: "selected" })
									.text($(event.currentTarget).data("defaultOption")));
			}
		}
		
		this.getUpdateEventHandler = function() {
			// The update event populates this select box with the option elements matching 
			// the select from a previous select box
			return function(event, selection) {
				if ($(event.currentTarget).data("options")[selection]) {
					// Reset the options if the selection matched one of the available choices
					$(event.currentTarget).trigger("resetOptions");
					// Iteratively generate new options
					$.each($(event.currentTarget).data("options")[selection], function(key, option) {
						//PLUTUS-5333 - SHOULD PROVIDE 64 BIT OPTION ONLY FOR FEW COUNTRIES 
						var selectOS = $('#select_os');

						if (selectOS.val() != "default") {
							if(option.indexOf("64Bit") != -1 && window.location.href.indexOf("otherversions") === -1 ){
								return true;
							}
						}
						$(event.currentTarget).append($("<option />", { value: option }).text(option));
					});
				}
			}
		}
		
		this.getChangeNextStepEventHandler = function() {
			// The change event updates the next select box or resets all subsequent select boxes 
			// if the user chooses a default option
			return function(event) {
				// Reset all subsequent select boxes
				var nextSelectBox = $(event.currentTarget).data("nextSelectBox");
				while (nextSelectBox !== null) {
					nextSelectBox.trigger("resetOptions");
					nextSelectBox.trigger("change.updateDownloadContent").prop('disabled', 'disabled');
					nextSelectBox = nextSelectBox.data("nextSelectBox");
				}
				// Update the next event
				if ($(event.currentTarget).data("nextSelectBox") !== null) {
					$(event.currentTarget).data("nextSelectBox").trigger("updateOptions", [ event.currentTarget.value ]);
					$(event.currentTarget).data("nextSelectBox").trigger("change.updateDownloadContent");
					
					// if it has more than just a default option, re-enable this select
					if ($(event.currentTarget).data("nextSelectBox").children().length > 1) {
						$(event.currentTarget).data("nextSelectBox").fadeOut(200).fadeIn(300);
						$(event.currentTarget).data("nextSelectBox").prop('disabled', false).focus();
					}
				}				
			}
		} 
		
		this.getChangeDownloadContentEventHandler = function(config) {
			return function(event) {
				if (event.currentTarget.value != "default") {							
					var selectedInstaller = $(event.currentTarget).data("installers")[event.currentTarget.value]; 
					var bytesAbbreviation = config.megabyteAbbreviation;
					var selectOS = $('#select_os');
					var selectedPlatformType = selectOS.data("requestParameters")[selectOS.val()]["platform_type"];
					
					// set installer info to determine if it's AIH compatible
					config.downloadButton.setMainInstaller(selectedInstaller.queryName);
					config.downloadButton.setMainInstallerName(selectedInstaller.Name);
					if(selectedInstaller.Name.indexOf("DC") !== -1 && selectedPlatformType !== "Macintosh"){
				
						var is_chrome = (config.downloadButton.getClientBrowserDistribution() === 'Chrome' && 
										navigator.userAgent.toLowerCase().indexOf('edg') === -1) //check for chrome browser		
						if (is_chrome) {
						    $("#chrchk").show();
						    $("#getMorePane").show();
						}
					}
					else{
						$("#chrchk").hide();
						$("#getMorePane").hide();
					}
					if(selectOS.val().indexOf("Windows") !== -1 ){
					    config.downloadButton.setGCEligible();
					}
					if(selectedInstaller.aih_installer_abbr !== undefined && selectedInstaller.aih_installer_abbr.indexOf("reader11") !== -1){
						config.downloadButton.gcEligible = false;
					}
					if(selectOS.val().indexOf("Windows") === -1 || selectOS.val().indexOf("XP") !== -1 || selectOS.val().indexOf("Vista")!== -1){
					    config.downloadButton.gcEligible = false;
					}
					config.downloadButton.setMainInstallerAihCompatible(selectedInstaller.aih_compatible);
					config.downloadButton.updateDownloadButton();
					if (config.displayProperties.bundledAddon !== undefined) {
						config.displayProperties.bundledAddon.html("");
					}
					
					// Populate the display properties
					$.each(config.displayProperties, function(property, node) {
						if(config.locale !== undefined && property == 'file_size'){
							node.text( $.localizeNumber(selectedInstaller[property],config.locale));
						}else{
							node.text( selectedInstaller[property] );
						}
					});					
					
					if (selectedInstaller.Name.match(/YUM/)) {
						bytesAbbreviation = config.kilobyteAbbreviation;
					}
					config.displayProperties.fileSizeLabel.html(bytesAbbreviation);
					
					// Handle addons
					if (config.addons !== undefined) {
						config.addons.reset();
					}

					$("#playerInformationPane").hide();
					$("#offersInformationPane").hide();
					var useAddon = config.addons !== undefined && selectedInstaller.aih_optional_addons !== undefined && config.downloadButton.isAihCompatible();
					if (useAddon) { 
						config.addons.setGdpr(config.geo);
						var result = config.addons.getBestOfferFromList(selectedInstaller.aih_optional_addons); 
						if (result !== undefined) {
							config.addons.preinstalled(result.preinstalled);
							config.addons.offerOptionalAddon(result.best);
							var addonOffered = config.addons.getAddonById(result.best);
							if(typeof(addonOffered) != "undefined" && (addonOffered.abbr === "ltrosx" || addonOffered.abbr === "ltrosxjp" ||  addonOffered.abbr === "ltr5x32" || addonOffered.abbr === "ltr5x64")){											
								result.accepted = false;	
							}
							result.accepted ? config.addons.accept() : config.addons.decline();
							
   							if (config.addons.getGdpr()){
								if ($("#offerCheckbox").length) {    
									$("#offerCheckbox").attr('checked', false);
									$("#offerCheckbox").trigger("change");
								}
								if ($("#offerCheckbox1").length) {    
									$("#offerCheckbox1").attr('checked', false);
									$("#offerCheckbox1").trigger("change");
								}
								if ($("#chrExtCheckbox").length) {    
									$("#chrExtCheckbox").attr('checked', false);
									$("#chrExtCheckbox").trigger("change");
								}
							}
						}
						if (result.best == undefined || result.best == "" ) {
							$("#playerInformationPane").show();
						}
						else {
									$("#offersInformationPane").show();
						}
						if (selectedInstaller.aih_bundled_addons != "") {
							config.addons.offerBundledAddon(selectedInstaller.aih_bundled_addons, selectedInstaller.aih_version_suffix);
						}
						
					} else if (selectedInstaller.aih_version_suffix !== undefined && selectedInstaller.aih_version_suffix != "" && selectedInstaller.aih_compatible != 1) {
						//config.displayProperties.bundledAddon.html(selectedInstaller.aih_version_suffix);
						$("#playerInformationPane").show();
						$("#totalsize").text($("#clientfilesize").text());
					} else {
						$("#playerInformationPane").show();
						$("#totalsize").text($("#clientfilesize").text());
					}

					$("#buttonDownload").removeClass("ButtonDisabled"); 
					$("#buttonDownload").addClass("ButtonBlue");
					$("#buttonDownload").css("background-color", "#1473E6");
					
					$("#offersInformationPane").css("font-size","9px");
					//fix for Learnmore text truncated 
					if(config.locale === "ru"){
						$("#offersInformationPane").css("font-size","8.2px");
					}
					// append query strings to modal link
					if (config.sysRequirementsLink !== undefined && config.sysRequirementsUrl !== undefined) {
						if (selectedInstaller.aih_version_suffix !== undefined && selectedInstaller.aih_version_suffix != "") {							
							var readerVersion = selectedInstaller.aih_version_suffix;
						}
						else {							
							var readerVersion = selectedInstaller.Version;
						}
						if(selectedInstaller.aih_installer_abbr.indexOf("readerdc64") !== -1){
							config.sysRequirementsUrl = config.sysRequirementsUrl.replace("readerSystemRequirement", "readerSystemRequirement_64");
						}
						var sysRequirementsUrl = config.sysRequirementsUrl + "&version=" + readerVersion;
						var selectOS = $('#select_os');
						var selectedPlatformType = selectOS.data("requestParameters")[selectOS.val()]["platform_type"];
						var majorVersion = readerVersion.toString().split('.')[0];
						// only need these if we need a minor version exception
						var minorVersion = readerVersion.toString().split('.')[1];
						var shortVers = majorVersion + "." + minorVersion;
						
						// only versions higher than 10 currently have SSI files for the modal window to display
						if (majorVersion > 9 || (config.downloadButton.getDownloadCenter() == "air" && majorVersion > 2)) {
							sysRequirementsUrl = sysRequirementsUrl + "&os=" + selectedPlatformType;
							config.sysRequirementsLink.prop("href", sysRequirementsUrl);
							config.sysRequirementsLink.removeAttr("target");
						} else {
							// reset link to original state
							config.sysRequirementsLink.prop("href", obj.originalSysRequirementsUrl);
							config.sysRequirementsLink.prop("target", "_blank");
							config.sysRequirementsLink.unbind().removeData();
						}
					}
					
					config.downloadContent.show();
				} else {
					// Disable and hide
					if (config.addons !== undefined) {
						config.addons.reset();
					}
					config.downloadButton.setMainInstaller();
					config.downloadButton.setMainInstallerName();
					config.downloadButton.setMainInstallerAihCompatible();
					config.downloadButton.updateDownloadButton();
					config.downloadContent.hide();					
				}

				var selectOS = $('#select_os');
				var selectVersion = $('#select_version');

				if (selectOS.val() == "default" || selectVersion.val() == "default") {
					if (config.addons !== undefined) {
						config.addons.reset();
					}
					$("#playerInformationPane").show();
					$("#offersInformationPane").hide();
					$("#chrchk").hide();
					$("#goCartChk").hide();
					$("#readerdiv").show();$("#gocartdiv").hide();
					$("#getMorePane").hide();
					$("#buttonDownload").removeClass("ButtonBlue"); 
					$("#buttonDownload").addClass("ButtonDisabled");
					$("#buttonDownload").css("background-color", "#F4F4F4");
					$("#totalsize").text("");
					$("#total_size_text").hide();
				}
				else {
					$("#total_size_text").show();
				}

				var selectedPlatformType = selectOS.data("requestParameters")[selectOS.val()]["platform_type"];
				var selectedPlatformDist = selectOS.data("requestParameters")[selectOS.val()]["platform_dist"];
				if(config.downloadButton.getClientPlatformType() !== selectedPlatformType){
					config.downloadButton.setClientPlatformType(selectedPlatformType);
				}
				if(config.downloadButton.getClientPlatformDistribution() !== selectedPlatformDist){
					config.downloadButton.setClientPlatformDistribution(selectedPlatformDist);
					config.downloadButton.setGCEligible();
				}
				if(config.downloadButton.getOperatingSystem() !== selectedPlatformDist){
					config.downloadButton.setOperatingSystem(selectedPlatformDist);
				}
			}
		}
		
		this.getAjaxEventHandler = function(selects, config) {
			return function(event, selection) {
				// Get request parameters from previous select boxes and generate query string
				var q = [];
				var cancelThisEvent = false;
				$.each(selects, function(index, select) {
					// Terminate early if one of the select boxes has a default selection
					if (index < selects.length - 1 && select.val() == "default") {
						cancelThisEvent = true;
						return false;
					}
					// Build the query string
					if (select.data("requestParameters")[select.val()]) {
						$.each(select.data("requestParameters")[select.val()], function(key, value) {
							q.push([ key, value ].join("="));
						});
					}
				});
				
				if (cancelThisEvent) {
					return false;
				}
				
				// Note: I had to wrap this in a closure to preserve the original select box reference
				(function(select) {
					$.ajax({
						url: [ config.webserviceUrl, q.join("&") ].join("?"),
						beforeSend: function() {
							// Show the spinner graphic
							config.ajaxLoader.show();
						},
						success: function(installers) {
							// remove error if there was one previously
							if (config.errorBox.text().length) {
								config.errorBox.fadeOut(300);
							}
							// Show unavailable message if no installers were found
							if (installers.length == 0) {
								config.unavailableContent.show();
								return false;
							}
							// Setup the data for this select box
							select.data("options", {});
							select.data("options")[selection] = [];
							select.data("installers", {});
							
							// Sort Installers in Descending order
							if(settings.config.sorting !== undefined && settings.config.sorting){
								installers = $(installers).sort(sortByName);
							}
							// Add installers and options to the data of this select box
							$.each(installers, function(i, installer) {
								select.data("options")[selection].push(installer.Name);
								select.data("installers")[installer.Name] = installer;
							});
						},
						complete: function() {
							// Hide the spinner graphic
							config.ajaxLoader.hide();
							// Bind the original updateOptions event and fire it off
							select.bind("updateOptions.fromSelectBox", obj.getUpdateEventHandler());
							select.trigger("updateOptions.fromSelectBox", [ selection ]);
							select.fadeOut(100).fadeIn(300).prop('disabled', false).focus();
							select.unbind("updateOptions.fromSelectBox");
						},
						error: function(xhr, errorType) {
							if (errorType === "error"){
								obj.showError( 	xhr.status, 
												xhr.statusText, 
												xhr.responseText, 
												config.errorMessage,
												config.errorBox );
							}
						}
					});
				})($(event.currentTarget));
			}
		}
		

		this.setSelectBoxes = function(selects) {
			selectBoxes = selects;
			return this;
		};
		this.getSelectBoxes = function() {
			return selectBoxes;
		};
		
		this.showError = function( statusCode, statusText, errors, friendlyMessage, errorBox ) {
			// NOTE: only uncomment logging for debugging on dev
			//$.log('statusCode: '+statusCode);
			//$.log('statusText: '+statusText);
			//$.log('errors: '+errors);
			
			// return friendly error message with nice animation to draw attention
			errorBox.html(friendlyMessage).hide().fadeIn(1300);
		};
		init();
	};
	
	$.fn.otherversions = function(options) {
		return this.each(function() {
			var element = $(this);
			if (element.data('otherversions')) return;
			element.data('otherversions', new OtherVersions(this, options));
		});
	};
})(jQuery);

(function($){
	
	var DualOffer = function(element, options){
		var elem = $(element);
		var obj = this;
		var settings = $.extend({}, options ||{});
		var dualStruct = {
			gtbcheckbox : undefined,
			chrcheckbox : undefined,
			chrdefcheckbox : undefined
		};
		
		var init = function() {
			dualStruct.gtbcheckbox = settings.gtb;
			dualStruct.chrcheckbox = settings.chr; 
			dualStruct.chrdefcheckbox = settings.chromedefault;
			obj.getContainer();
		};
		
		this.getContainer = function(){
			//elem.append(obj.getGtbCheckbox()).append(obj.getChrCheckbox()).append(obj.getChrDefaultCheckbox());
			elem.append(obj.getChrDefaultCheckbox());
		}
		
		/*this.getGtbCheckbox = function(){
			var addon = dualStruct.gtbcheckbox; 
			var localeFileSize = addon.SIZE;
			if(settings.locale !== undefined){
				localeFileSize = $.localizeNumber(localeFileSize,settings.locale); 
			}
			
			var filesize = $("<span class='stamp-fileinfo' />").text(" (" + localeFileSize + " " + settings.megabyteAbbr + ")");
		
			    if($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 9.0)
					var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','gtbcheckbox').css({position: 'relative'});
				else
					var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','gtbcheckbox');	
					
				inputcheckbox.on("change",obj.checkboxEventHandler);
				var spanforimage = $("<span/>").attr('class','CheckboxImage');
				var labelforcheckbox = $("<label/>").attr('for','gtbcheckbox');
				labelforcheckbox.append(spanforimage);
				labelforcheckbox.append(addon.TEXT);
				labelforcheckbox.append(filesize);
				var offer = $("<div/>").attr('id','AUTO_ID_js_div_gtb_checkbox').attr('class','Checkbox dialog');
				//var offer = "";
				inputcheckbox.appendTo(offer);
				labelforcheckbox.appendTo(offer);

			return offer;
		}
		
		this.getChrCheckbox = function(){
			var addon = dualStruct.chrcheckbox; 
			var localeFileSize = addon.SIZE; 
			if(settings.locale !== undefined){
				localeFileSize = $.localizeNumber(localeFileSize,settings.locale);
			}
			var filesize = $("<span class='stamp-fileinfo' />").text(" (" + localeFileSize + " " + settings.megabyteAbbr + ")");
			
				if($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 9.0)
					var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','chrcheckbox').css({position: 'relative'});
				else
					var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','chrcheckbox');
					
				inputcheckbox.on("change",obj.checkboxEventHandler);
				var spanforimage = $("<span/>").attr('class','CheckboxImage');
				var labelforcheckbox = $("<label/>").attr('for','chrcheckbox');
				labelforcheckbox.append(spanforimage);
				labelforcheckbox.append(addon.TEXT);
				labelforcheckbox.append(filesize);
				var offer = $("<div/>").attr('id','AUTO_ID_js_div_chr_checkbox').attr('class','Checkbox dialog');
				//var offer = "";
				inputcheckbox.appendTo(offer);
				labelforcheckbox.appendTo(offer);
				
			return offer;
		}*/
		
		this.getChrDefaultCheckbox = function(){
			var addon = dualStruct.chrdefcheckbox;
			
				if($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 9.0)
					var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','chrdefcheckbox').css({position: 'relative'});
				else
					var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','chrdefcheckbox');
						
				inputcheckbox.on("change",obj.checkboxEventHandler);
				var spanforimage = $("<span/>").attr('id','CheckboxImageChrDef').attr('class','CheckboxImage');
				var labelforcheckbox = $("<label/>").attr('for','chrdefcheckbox');
				var brspace = $("<br/>");
				labelforcheckbox.append(spanforimage);
				labelforcheckbox.append(addon.TEXT);
				var offer = $("<div/>").attr('id','AUTO_ID_js_div_chrdef_checkbox').attr('class','Checkbox dialog');
				brspace.appendTo(offer);
				inputcheckbox.appendTo(offer);
				labelforcheckbox.appendTo(offer);
				
			return offer;
		}
		
		this.checkboxEventHandler = function(event) {
			var selectedOption = dualStruct[this.id];
			
			if($(event.currentTarget).attr('checked'))
			{	
				if (($('#offerLabelDef').length) && ($('#offerLabelNonDef').length) && ($("#offerCheckbox").attr("checked"))) {					
					$("#offerLabelNonDef").hide();
					$("#offerLabelDef").show();
				}
				if ($("#offerCheckbox").attr("checked"))
				{
					settings.downloadButton.data("downloadbutton").setChromeDefault(true);					
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
				}
				else
				{
					$("#chrdefcheckbox").attr({checked: false});
					settings.downloadButton.data("downloadbutton").setChromeDefault(false);					
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
				}				
			}
			else
			{
				if (($('#offerLabelDef').length) && ($('#offerLabelNonDef').length)) {
					$("#offerLabelDef").hide();
					$("#offerLabelNonDef").show();
				}
				settings.downloadButton.data("downloadbutton").setChromeDefault(false);				
				settings.downloadButton.data("downloadbutton").updateDownloadButton();				
			}
			//if (this.id === "chrdefcheckbox") {
				/*if ($(event.currentTarget).attr('checked') && !$("#chrcheckbox").attr('checked')) {
					$("#chrdefcheckbox").attr({checked: false});
					settings.downloadButton.data("downloadbutton").setChromeDefault(false);
				}*/
//				else {
					//$(event.currentTarget).attr('checked') ? settings.downloadButton.data("downloadbutton").setChromeDefault(true) : settings.downloadButton.data("downloadbutton").setChromeDefault(false);
				//}	
			//}
			/*else {
				if(this.id === "chrcheckbox" && !$(event.currentTarget).attr('checked')){
					$("#chrdefcheckbox").attr({ checked: false });
					settings.downloadButton.data("downloadbutton").setChromeDefault(false);
				}else if(this.id === "chrcheckbox" && $(event.currentTarget).attr('checked')){
					$("#chrdefcheckbox").attr({ checked: true });
					settings.downloadButton.data("downloadbutton").setChromeDefault(true);
				}
				$(event.currentTarget).attr('checked') ? settings.downloadButton.data("downloadbutton").addAcceptInstallerList(selectedOption.QNAME) : settings.downloadButton.data("downloadbutton").addDeclineInstallerList(selectedOption.QNAME);
			}*/
			
//			obj.displayFileSizeAndLink();
//			settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null);
//			settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null);
//			settings.downloadButton.data("downloadbutton").updateDownloadButton();
		}
		
		
		this.reset = function(event){

			if(!$("#offerCheckbox").attr("checked"))
			{				
				$("#chrdefcheckbox").attr('checked', false);
				settings.downloadButton.data("downloadbutton").setChromeDefault(false);
				$("#offerLabelDef").hide();
				$("#offerLabelNonDef").show();
			}
			obj.clearDualOfferCookies();
			settings.downloadButton.data("downloadbutton").updateDownloadButton();			
		}
		
		this.selectAll = function(event,installOptionAddon){
					
			if (event === undefined) 
			{	
				$("#chrdefcheckbox").attr('checked', true);
				settings.downloadButton.data("downloadbutton").setChromeDefault(true);
			}
			if (installOptionAddon==='dual')
			{
				if (event === undefined && obj.getOfferCookieGTB())
				{
					obj.setCheckboxFromCookie();
				}
				else
				{  
				   if(!$("#offerCheckbox1").attr('checked')){
					   settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.gtbcheckbox.QNAME);
					}
					else{
						settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.gtbcheckbox.QNAME);
					}
					if(!$("#offerCheckbox").attr('checked')){
						settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.chrcheckbox.QNAME);
					}
					else{
						settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.chrcheckbox.QNAME);
					}			
					if(!$("#chrdefcheckbox").attr('checked')){					
						settings.downloadButton.data("downloadbutton").setChromeDefault(false);
					}
					else{					
						settings.downloadButton.data("downloadbutton").setChromeDefault(true);
					}
					if($("#offerCheckbox").attr('checked') && (!$("#chrdefcheckbox").attr('checked')) && event !== undefined && event.currentTarget.id === "offerCheckbox") {						
						$("#offerLabelDef").hide();
						$("#offerLabelNonDef").show();						
					}					
				}
			}
			else if (installOptionAddon==='chr') {
				if($("#offerCheckbox").attr('checked') && (!$("#chrdefcheckbox").attr('checked')) && event !== undefined && event.currentTarget.id === "offerCheckbox") {						
					$("#offerLabelDef").hide();
					$("#offerLabelNonDef").show();						
				}
			}
		}
		
		this.getOfferCookieGTB = function() {
		
			var gtbname = settings.downloadcenter + "gtbchoice";
			var rexpGtb = new RegExp(gtbname + "=(.*)");
			var resultGTB = false;
			$.each(window.document.cookie.split(";"), function(k, cookie) {
				if ((testGtb = cookie.match(rexpGtb))) {
					resultGTB = unescape(decodeURI(testGtb[1]));
					return false;
				}				
			});			
			return resultGTB;
		};
		
		this.getOfferCookieCHR = function() {
			var chrname = settings.downloadcenter + "chrchoice";
			var rexpChr = new RegExp(chrname + "=(.*)");
			var resultCHR = false;
			$.each(window.document.cookie.split(";"), function(k, cookie) {
				if ((testChr = cookie.match(rexpChr))) {
					resultCHR = unescape(decodeURI(testChr[1]));
					return false;
				}				
			});			
			return resultCHR;
		};
		
		this.getOfferCookiedefCHR = function() {
			var chrdefname = settings.downloadcenter + "defchrchoice";
			var rexpdefChr = new RegExp(chrdefname + "=(.*)");
			var resultdefCHR = false;
			$.each(window.document.cookie.split(";"), function(k, cookie) {
				if ((testdefChr = cookie.match(rexpdefChr))) {
					resultdefCHR = unescape(decodeURI(testdefChr[1]));					
					return false;
				}				
			});						
			return resultdefCHR;
		};	
		
		this.setCookie = function() {
			
			var addon= "dual";
			var gtbchoice=$("#offerCheckbox1").attr("checked") ? true : false;
			var chrchoice=$("#offerCheckbox").attr("checked") ? true : false;
			var defchrchoice=$("#chrdefcheckbox").attr("checked") ? true : false;			
			window.document.cookie = settings.downloadcenter + "offerchoice" + "=" + escape(addon + "=" + true) + ";path=/";
			window.document.cookie = settings.downloadcenter + "gtbchoice" + "=" + escape("GTB=" + gtbchoice) + ";path=/";
			window.document.cookie = settings.downloadcenter + "chrchoice" + "=" + escape("CHR=" + chrchoice) + ";path=/";
			window.document.cookie = settings.downloadcenter + "defchrchoice" + "=" + escape("defChr=" + defchrchoice) + ";path=/";
		}
		
		this.clearDualOfferCookies = function(){
			jaaulde.utils.cookies.set(settings.downloadcenter + "offerchoice","",-1,"/");
			jaaulde.utils.cookies.set(settings.downloadcenter + "gtbchoice","",-1,"/");
			jaaulde.utils.cookies.set(settings.downloadcenter + "chrchoice","",-1,"/");
			jaaulde.utils.cookies.set(settings.downloadcenter + "defchrchoice","",-1,"/");	
		}
			
		/*this.displayFileSizeAndLink = function(){
			var localeTotalFileSize = 0;
			if(!$("#gtbcheckbox").attr('checked') && !$("#chrcheckbox").attr('checked'))
			{
				$('#adobeEULA').html(settings.adobeEula);
				//$("#offerCheckbox").attr({ checked: false });
				$("#CheckboxImage").fadeTo(1,1.0);
				$(".addonResourcesCHR").hide();
				$(".addonResourcesGTB").hide();
				$('#dualEulaLink').attr('href',settings.eulaLink);				
			}else if(!$("#gtbcheckbox").attr('checked') && $("#chrcheckbox").attr('checked')){
				$('#adobeEULA').html(settings.adobeDualEula);
				//$("#offerCheckbox").attr({ checked: true });
				$("#CheckboxImage").fadeTo(1,0.5);
				$(".addonResourcesCHR").show();
				$(".addonResourcesGTB").hide();
				$('#dualEulaLink').attr('href',settings.eulaLink + settings.eulaLinkCHR);
				localeTotalFileSize = dualStruct.chrcheckbox.SIZE;
			
			}else if($("#gtbcheckbox").attr('checked') && !$("#chrcheckbox").attr('checked')){
			
				$('#adobeEULA').html(settings.adobeDualEula);
				//$("#offerCheckbox").attr({ checked: true });
				$("#CheckboxImage").fadeTo(1,0.5);
				$(".addonResourcesCHR").hide();
				$(".addonResourcesGTB").show();
				$('#dualEulaLink').attr('href',settings.eulaLink + settings.eulaLinkGTB);
				localeTotalFileSize = dualStruct.gtbcheckbox.SIZE;
			
			}else if($("#gtbcheckbox").attr('checked') && $("#chrcheckbox").attr('checked'))
			{
				$('#adobeEULA').html(settings.adobeDualEula);
				//$("#offerCheckbox").attr({ checked: true });
				$("#CheckboxImage").fadeTo(1,1.0);
				$(".addonResourcesGTB").show();
				$(".addonResourcesCHR").show();
				$('#dualEulaLink').attr('href',settings.eulaLink);
				localeTotalFileSize = dualStruct.gtbcheckbox.SIZE + dualStruct.chrcheckbox.SIZE;
				
			}
			
			if($("#gtbcheckbox").attr('checked') && $("#chrcheckbox").attr('checked') && !$("#chrdefcheckbox").attr('checked')){
				$("#CheckboxImage").fadeTo(1,0.5);
			}
			obj.setTotalFileSize(localeTotalFileSize,'accept');
		}*/

		/*this.setTotalFileSize = function(totalSize,callfrom){
			var localeTotalFileSize = totalSize;
			if(settings.locale !== undefined){
				localeTotalFileSize = $.localizeNumber(localeTotalFileSize,settings.locale);
			}
			if (callfrom == 'decline')			
			{
				$("#totalsize").text($("#clientfilesize").text());		
			}
			else
			{
				var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#clientfilesize").text(),settings.locale)) + parseFloat(localeTotalFileSize))*100)/100;			
				$("#totalsize").text($.localizeNumber(fullsize,settings.locale));				
			}
		}*/
		
		this.setCheckboxFromCookie = function(){
			if((cookieGTB = obj.getOfferCookieGTB())){
			   var gtbcheck = cookieGTB.split("=")[1] == "true" ? true : false;
			   
			   $("#offerCheckbox1").attr({ checked: gtbcheck });			   
			   if(!gtbcheck){
				   settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.gtbcheckbox.QNAME);
				}
				else{
					settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.gtbcheckbox.QNAME);
				}
			}
					  
			if((cookieCHR = obj.getOfferCookieCHR())){
				var chrcheck = cookieCHR.split("=")[1] == "true" ? true : false;				
				$("#offerCheckbox").attr({ checked: chrcheck });
				if(!chrcheck){
					settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.chrcheckbox.QNAME);
				}
				else{
					settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.chrcheckbox.QNAME);
				}
			}
				  
			if((cookiedefCHR = obj.getOfferCookiedefCHR())){
				var defchrcheck = cookiedefCHR.split("=")[1] == "true" ? true : false;				
				$("#chrdefcheckbox").attr({ checked: defchrcheck });
				if (!defchrcheck) {
					$("#offerLabelDef").hide();
					$("#offerLabelNonDef").show();
				}
				settings.downloadButton.data("downloadbutton").setChromeDefault(defchrcheck);				
			}
		}
		
		init();
	}
	
	$.fn.dualoffer = function(options) {
		return this.each(function() {
			var element = $(this);
			if (element.data('dualoffer')) return;
			element.data('dualoffer', new DualOffer(this, options));
		});
	}
	
})(jQuery);

(function($){
	
	var MdualOffer = function(element, options){
		var elem = $(element);
		var obj = this;
		var settings = $.extend({}, options ||{});
		var dualStruct = {			
			msscheckbox : undefined,
			msccheckbox : undefined			
		};
		
		var init = function() {			
			dualStruct.msscheckbox = settings.mss;
			dualStruct.msccheckbox = settings.msc;
		};
		
		this.reset = function(event){
			obj.clearDualOfferCookies();
			settings.downloadButton.data("downloadbutton").updateDownloadButton();			
		}
		
		this.selectAll = function(event,installOptionAddon){
			
			if (event === undefined && obj.getOfferCookieMSC())
			{					
				obj.setCheckboxFromCookie();
			}
			else
			{ 
			   if(!$("#offerCheckbox1").attr('checked')){					   
				   settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.msccheckbox.QNAME);
				}
				else{						
					settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.msccheckbox.QNAME);
				}
				if(!$("#offerCheckbox").attr('checked')){					
					settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.msscheckbox.QNAME);
				}
				else{						
					settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.msscheckbox.QNAME);
				}
			}			
		}
		
		this.getOfferCookieMSS = function() {
		
			var mssname = settings.downloadcenter + "msschoice";
			var rexpMss = new RegExp(mssname + "=(.*)");
			var resultMSS = false;
			$.each(window.document.cookie.split(";"), function(k, cookie) {
				if ((testMss = cookie.match(rexpMss))) {
					resultMSS = unescape(decodeURI(testMss[1]));
					return false;
				}				
			});			
			return resultMSS;
		};
		
		this.getOfferCookieMSC = function() {
			var mscname = settings.downloadcenter + "mscchoice";
			var rexpMsc = new RegExp(mscname + "=(.*)");
			var resultMsc = false;
			$.each(window.document.cookie.split(";"), function(k, cookie) {
				if ((testMsc = cookie.match(rexpMsc))) {
					resultMsc = unescape(decodeURI(testMsc[1]));
					return false;
				}				
			});			
			return resultMsc;
		};
		
		this.setCookie = function() {
			
			var addon= "mdual";
			var mscchoice=$("#offerCheckbox1").attr("checked") ? true : false;
			var msschoice=$("#offerCheckbox").attr("checked") ? true : false;						
			window.document.cookie = settings.downloadcenter + "offerchoice" + "=" + escape(addon + "=" + true) + ";path=/";
			window.document.cookie = settings.downloadcenter + "msschoice" + "=" + escape("MSS=" + msschoice) + ";path=/";
			window.document.cookie = settings.downloadcenter + "mscchoice" + "=" + escape("MSC=" + mscchoice) + ";path=/";			
		}
		
		this.clearDualOfferCookies = function(){
			jaaulde.utils.cookies.set(settings.downloadcenter + "offerchoice","",-1,"/");
			jaaulde.utils.cookies.set(settings.downloadcenter + "msschoice","",-1,"/");
			jaaulde.utils.cookies.set(settings.downloadcenter + "mscchoice","",-1,"/");			
		}		
		
		this.setCheckboxFromCookie = function(){
			if((cookieMSS = obj.getOfferCookieMSS())){
			   var msscheck = cookieMSS.split("=")[1] == "true" ? true : false;
			   
			   $("#offerCheckbox").attr({ checked: msscheck });			   
			   if(!msscheck){
				   settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.msscheckbox.QNAME);
				}
				else{
					settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.msscheckbox.QNAME);
				}
			}
					  
			if((cookieMSC = obj.getOfferCookieMSC())){
				var msccheck = cookieMSC.split("=")[1] == "true" ? true : false;				
				$("#offerCheckbox1").attr({ checked: msccheck });
				if(!msccheck){
					settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.msccheckbox.QNAME);
				}
				else{
					settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.msccheckbox.QNAME);
				}
			}
		}		
		init();
	}
	
	$.fn.mdualoffer = function(options) {
		return this.each(function() {
			var element = $(this);
			if (element.data('mdualoffer')) return;
			element.data('mdualoffer', new MdualOffer(this, options));
		});
	}
	
})(jQuery);
/**
 * $Header: /source/docroot/downloadcenter/js/live/polarbear.addons.js,v 1.11 2012/01/24 18:40:19 clechner Exp $
 */ 
 (function($) {
	var Addons = function(element, options) {
		var elem = $(element);
		var obj = this;
		var settings = $.extend({}, options || {});
		var state = {
			preinstalled: undefined,
			optional: undefined,
			bundled: undefined
		};
		
		var addons = {
			byId: {},
			byAbbr: {},
			byGroup: {}
		};
		
		var init = function() {
			
		};
		
		this.registerAddon = function(id, properties) {
			addons.byId[id] = properties;
			addons.byAbbr[properties.abbr] = properties;
			addons.byGroup[properties.group] = properties;
		};
		
		this.getBestOfferFromList = function(offers) {
			var available = {};
			var groups = [];
			var result = { preinstalled: undefined, best: undefined, accepted: true, defaultAddon: undefined, singleAddon: undefined, brErrorCode: undefined  };
			var cookie;
			
			if (offers === undefined) {
				return; 
			}			
			
			var preinstalledAddonsArray = [];
			var inPalSiteCatalyst = "false";
			var eligibleAddonArray = [];
			
			$.each(String(offers).split(/,/), function(k, id) { 
				// Only sort addons that have already been registered
				var addon = obj.getAddonById(id); 
				
				if (addon === undefined) { 
					return;
				}
				
				if(addon.isEligibleOffer !== undefined && !addon.isEligibleOffer){
					return;					
				}
				
				if(addon.isDefault !== undefined && addon.isDefault == true){
					result.defaultAddon = addon; 
				}
				// Array containing the entire list of Addons
				eligibleAddonArray.push(addon);
				
				if(obj.isPal(addon.abbr)){
					preinstalledAddonsArray.push(addon);
					inPalSiteCatalyst = "true";
				}				
				
				
			});
			
			var eList = obj.getListAbbrFromAddonList(eligibleAddonArray);
			var pList = obj.getListAbbrFromAddonList(preinstalledAddonsArray);						
			var initialeList = eList;
			var initialpList = pList;
						
			if (pList.indexOf('mdual') !== -1) {
				if((pList.indexOf('mss') === -1) && (pList.indexOf('msc') === -1)) {
			   		var pListArr = pList.split(",");
					pListArr.splice(pListArr.indexOf("mdual"),1);
					pList = pListArr.join(); 
				}
			}			
			
			if (navigator && (navigator.userAgent.indexOf("Edge") > -1))
			{				
				eListArray = eList.split(",");				
				indexofgtb = eListArray.indexOf("gtb");
				
				if(indexofgtb !== -1)
				{
					eListArray.splice(indexofgtb,1);
				}
				indexofdual = eListArray.indexOf("dual");
				
				if(indexofdual !== -1)
				{
					eListArray.splice(indexofdual,1);
				}				
				eList = eListArray.toString();				
				
				if((pList.indexOf('dual') !== -1) && (pList.indexOf('gtb') == -1))
				{
					var gtbinlist =",gtb";
					pList = pList.concat(gtbinlist);
				}
				
				if((pList.indexOf('gtb') !== -1) || (pList.indexOf('chr') !== -1))
				{
					if(pList.indexOf('dual') == -1)
					{
						var duallist =",dual";
						pList = pList.concat(duallist);
					}
				}
			}
			
			if((pList.indexOf('mss') !== -1) || (pList.indexOf('msc') !== -1))
			{
				var mudallist =",mdual";
				pList = pList.concat(mudallist);
			}							
											
			var bestOfferAbbr = undefined;
			var req = {};
			
			// Need to get geo detection. 
			req.country = "All";
			req.language = "All";			
			if(obj.isObjInList(settings.brLanguageList, settings.language)){
				req.language = settings.language;
			}
			if(obj.isObjInList(settings.brCountryList, settings.country)){
				req.country = settings.country;
			}			
			$.ajax({
                  url: "/webservices/adbr/",
                  global: false,
                  type: "GET",
                  data: {geo:req.country,language:req.language,dlc:settings.downloadcenter,os:settings.os,browser_type:settings.browser_type,browser_dist:settings.browser_dist},
                  dataType: "text",
                  async:false,
                  success: function(bestOfferFromBusinessRule){
                	try{
						var returnedObject = $.parseJSON(bestOfferFromBusinessRule);						
						var bestOfferAbbr = settings.appdetection.getBestOffer(eList, pList,returnedObject.bestoffer);
				
						if(bestOfferAbbr !== undefined || bestOfferAbbr != ""){
							$.each(eligibleAddonArray, function(i,addon){
								if(result.best === undefined && addon.abbr === bestOfferAbbr){
									result.best = addon.id;
									return false;
							}
							})
						}
                	}catch(e){
                		result.best = undefined;
                		result.brErrorCode = 1001;
					}
				  },
				  error: function(x, t, m){
					  result.brErrorCode = 1000;
				  } 
               }
            );
            
			if(result.best === undefined && result.defaultAddon !== undefined){ 
				result.best = result.defaultAddon.id;
			}
				
			if(result.best === undefined && eligibleAddonArray[0] !== undefined){
				result.best = eligibleAddonArray[0].id;
				 result.brErrorCode = 1002;
				}
			
			
			if(pList.length > 0){
				// remove dual and replace with gtb
				var pListArray = pList.split(",");
				if(pListArray.indexOf("dual") !== -1){
			   		pListArray.splice(pListArray.indexOf("dual"),1);
			   		if(pListArray.indexOf("gtb") === -1){
			   			pListArray.push("gtb");
					}
				}				
				if(pListArray.indexOf("ltr5x32") !== -1){
					pListArray.splice(pListArray.indexOf("ltr5x32"), 1);
					if(pListArray.indexOf("ltr5") === -1){
						pListArray.push("ltr5");
					}
				} 
				if(pListArray.indexOf("ltr5x64") !== -1){
					pListArray.splice(pListArray.indexOf("ltr5x64"), 1);
					if(pListArray.indexOf("ltr5") === -1){
						pListArray.push("ltr5");
					}
				}
			   	pListArray.sort();
				result.preinstalled = pListArray.join(",");
				
				var mscinpreinstalled = result.preinstalled.indexOf("msc");
				if(mscinpreinstalled != -1){					
					if(obj.getAddonById(result.best).abbr == "msc"){
						result.best = "";						
					}					
				}
				
				var mdualinpreinstalled = result.preinstalled.indexOf("mdual");
				if(mdualinpreinstalled != -1){					
					if(obj.getAddonById(result.best).abbr == "mdual"){
						result.best = "";						
					}					
				}				
				
				if(initialeList == initialpList)
				{					
					result.best = "";
				}				
			}			
									
			try{
				if(digitalData !== undefined){
					jaaulde.utils.cookies.set("palValue",inPalSiteCatalyst,0,"/",".adobe.com");
					digitalData._set('digitalData.getAdobe.lso', inPalSiteCatalyst);
					if(result.brErrorCode !== undefined && result.best !== undefined){
						digitalData._set('digitalData.getAdobe.addonBRE_Error', [settings.omniturePrefix + obj.getAddonById(result.best).abbr,result.brErrorCode].join("_"));
						prop72Value = [settings.omniturePrefix + obj.getAddonById(result.best).abbr,result.brErrorCode].join("_");
						jaaulde.utils.cookies.set("prop72Cookie",prop72Value,0,"/",".adobe.com");
					}
				}
			}catch (e) {};
			
			// Test if there is already an offer cookie and override results if necessary
			if ((cookie = obj.getOfferCookie())) {
				var addon = obj.getAddonByAbbr(String(cookie).split("=")[0], offers);
				if (addon && addon.id === result.best) {
					result.best = addon.id;
					result.accepted = String(cookie).split("=")[1] == "true" ? true : false;
					result.cookie = String(cookie).split("=")[0];
					$.log("Found offer cookie: " + addon.id + " | value = " + result.accepted);
				}
			}						
			$.log("Best offer is: " + result.best);
		
			//OneTrustMigration -- Addons should not be offered without the consent
			var consentType ;
			if(this.getGdpr()){
				consentType = "Gdpr";
				if(!this.isOneTrustConesntProvided()){
					var defaultOffer;
					result.best = this.bestOfferNC(offers);
					consentType = consentType + "_NC";
				}
				else{
					//set launch ping _OT
					consentType = consentType + "_OT";
				}
			try{
				digitalData._set("digitalData.getAdobe.consentType",consentType);
			}catch(e){};
			}
			
			$.log("Best offer after checking for user consent is: " + result.best);
			// Return the best addon
			return result;
						
		};
		this.bestOfferNC = function(offers){
			var mssInstalled = settings.polarbearpal._isMss(); // checks if mss is already present
			var mscInstalled = settings.polarbearpal._isMsc(); // checks if msc is already present
			var gtbInstalled = settings.polarbearpal._isGtb(); //checks if gtb is already present
			if(!gtbInstalled && settings.downloadButton.data("downloadbutton").getClientBrowserType() === "MSIE"){
				defaultOffer = this.getAddonByAbbr("gtb",offers);
				if(defaultOffer !== undefined)
					return defaultOffer.id;
			}
			if(!mssInstalled && !mscInstalled){
				defaultOffer = this.getAddonByAbbr("mdual",offers);
				if(defaultOffer !== undefined)
					return defaultOffer.id;
			}
			if(!mssInstalled){
				defaultOffer = this.getAddonByAbbr("mss",offers);
				if(defaultOffer !== undefined)
					return defaultOffer.id;
			}
			if(!mscInstalled){
				defaultOffer = this.getAddonByAbbr("msc",offers);
				if(defaultOffer !== undefined)
					return defaultOffer.id;
			}
			return "";
		}
		this.setGdpr = function(country){
			this.isGdpr = false;
			var gdprCountryList = ["AT","BE","BG","CZ","CY","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","LV","LI","LT","LU","MT","NL","NO","PL","PT","RO","SK","SI","ES","SE","CH","GB","CA"];
			if(($.inArray(country,gdprCountryList) > -1))
				this.isGdpr = true;
		}
		this.getGdpr = function(){
			return this.isGdpr;
		}
		this.isOneTrustConesntProvided = function(){
			if((window.adobePrivacy != undefined) && !window.adobePrivacy.hasUserProvidedConsent()){
					return false;
			}
			return true;
		}
		
		this.chrExtChkboxEventHandler = function(event) {			
			if($("#chrExtCheckbox").attr('checked'))
			{
				settings.downloadButton.data("downloadbutton").setcr(true);				
				settings.downloadButton.data("downloadbutton").updateDownloadButton();				
			}
			else
			{
				settings.downloadButton.data("downloadbutton").setcr(false);				
				settings.downloadButton.data("downloadbutton").updateDownloadButton();
			}

		}
		
		this.checkboxEventHandler = function(event) {	
			$.log("Checkbox: ");
			if (this.id !== "chrdefcheckbox") {				
				$(event.currentTarget).attr('checked') ? obj.accept(event) : obj.decline(event);
			}
			else
			{
				if($("#chrdefcheckbox").attr('checked'))
				{					
					if (($('#offerLabelDef').length) && ($('#offerLabelNonDef').length) && ($("#offerCheckbox").attr("checked"))) {					
						$("#offerLabelNonDef").hide();				
						$("#offerLabelDef").show();
					}
					if ($("#offerCheckbox").attr("checked"))
					{
						settings.downloadButton.data("downloadbutton").setChromeDefault(true);					
						settings.downloadButton.data("downloadbutton").updateDownloadButton();
					}
					else
					{	
						$("#chrdefcheckbox").attr({checked: false});
						settings.downloadButton.data("downloadbutton").setChromeDefault(false);					
						settings.downloadButton.data("downloadbutton").updateDownloadButton();
					}				
				}
				else
				{	
					if (($('#offerLabelDef').length) && ($('#offerLabelNonDef').length)) {
						$("#offerLabelDef").hide();
						$("#offerLabelNonDef").show();
					}
					settings.downloadButton.data("downloadbutton").setChromeDefault(false);				
					settings.downloadButton.data("downloadbutton").updateDownloadButton();				
				}						
			}
		}
		
		this.openNyroModal = function(event){
			settings.dualModalWindow.click();
		}
		
		this.offerOptionalAddon = function(id) {			
			var addon = obj.getAddonById(id);
			var getMorePaneShown = false;
			if ($("#chrchk").length) {
				$("#chrchk").show();
				$("#chrExtCheckbox").on("change",obj.chrExtChkboxEventHandler);
				$("#getMorePane").show();
				getMorePaneShown = true;
				if($("#chrExtCheckbox").attr('checked'))
				{
					settings.downloadButton.data("downloadbutton").setcr(true);				
					settings.downloadButton.data("downloadbutton").updateDownloadButton();					
				}
				else
				{
					settings.downloadButton.data("downloadbutton").setcr(false);	
					settings.downloadButton.data("downloadbutton").updateDownloadButton();	
				}
				}
			
			try{
				if(digitalData !== undefined){
					digitalData._set('digitalData.page.pageInfo.variant', 'Type1');
				}
			}catch (e) {};
			if(settings.downloadButton.data("downloadbutton").getGCEligible()){
				if (getMorePaneShown === false)
					$("#getMorePane").show();
				$("#goCartChk").css("display","block");
				$("#goCartExtCheckbox").on("change",obj.checkboxEventHandler);
				var yellowGreenCountryList = ["IN","SG"];
				if($("#clientgeocountry").length !== 0 && $.inArray($("#clientgeocountry").html(),yellowGreenCountryList) > -1){
					$("#goCartExtCheckbox").attr("checked","true");
					try{
						if(digitalData !== undefined)
							digitalData._set( 'digitalData.product[2].productInfo.productName', 'GoCart');
					}catch (e) {};
					var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#clientfilesize").text(),settings.locale)) + parseFloat($("#GCFileSize").text()))*100)/100;	
					$("#clientfilesize").text($.localizeNumber(fullsize,settings.locale));
		           	settings.downloadButton.data("downloadbutton").setgoc(true);
					try{
						if(digitalData !== undefined){
							digitalData._set('digitalData.page.pageInfo.variant', 'Type2');
						}
					}catch (e) {};
					$("#readerdiv").hide();$("#gocartdiv").show();
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
				}
				else{
					settings.downloadButton.data("downloadbutton").setgoc(false);	
					try{
						if(digitalData !== undefined){
							digitalData._set('digitalData.page.pageInfo.variant', 'Type2');
						}
					}catch (e) {};
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
					$("#readerdiv").show();$("#gocartdiv").hide();
				}
			}
			if(addon == undefined){
				$("#offersInformationPane").hide();
				$("#playerInformationPane").show();
				$("#totalsize").text($("#clientfilesize").text());
				
				//show acrobat for both reader and fp if no offer
				$("#acrobat_section").show();
				/*if(document.title.indexOf("Reader") != -1 )
				{
					$(".section").css("min-height","623px");
					$(".ContentColumn").css("height","586px");
					$("#acrobat_section").show();
				}*/
			}
			else {
				
				if(settings.locale ==="kr" || settings.locale ==="ua"|| settings.locale ==="de" || settings.locale ==="ro" ||settings.locale ==="ru" || settings.locale ==="tr"|| settings.locale ==="it" || settings.locale ==="dk"){
				$("#AUTO_ID_columnright_div_01").css("font-size","0.88em");
					
				}
			
				
				if(addon.abbr === "dual" || addon.abbr === "mdual")
				{					
					$("#AUTO_ID_columnright_h3_optional_offer").text(addon.text.optionalOffers);
				}
			
				if(addon.abbr !== "dual"){					
					var localeFileSize = addon.size;				
					if(settings.locale !== undefined){
						localeFileSize = $.localizeNumber(localeFileSize,settings.locale);
					}
				}
				if(addon.abbr === "gdr"){
					$("#addonFileSize").text("");
				} else{
					$("#addonFileSize").text("Total size: " + localeFileSize + " " + settings.megabyteAbbr);
				}
				if (addon.abbr !== "dual" && addon.abbr !== "mdual") {
					if($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 9.0){
						var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','offerCheckbox').attr("checked", true).css({position: 'relative'});	
					}else{
						var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','offerCheckbox').attr("checked", true);
					}
					inputcheckbox.on("change",obj.checkboxEventHandler);
					var IE_7_UserAgent = ($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 8.0);
					var spanforimagebase = $("<span/>").attr('class','CheckboxImage');
					var spanforimage = (IE_7_UserAgent) ? spanforimagebase : spanforimagebase.attr('id','CheckboxImage');
					var labelforcheckbox = $("<label/>").attr('for','offerCheckbox');
					labelforcheckbox.append(spanforimage);
					if (addon.abbr === "chr") {						
						var labelfordeftext = $("<span/>").attr('id','offerLabelDef');
						labelfordeftext.append(addon.text.checkboxChrome);
						labelforcheckbox.append(labelfordeftext);
						var labelfornondeftext = $("<span/>").attr('id','offerLabelNonDef').css('display','none');
						labelfornondeftext.append(addon.text.checkboxChromeNonDef);
						labelforcheckbox.append(labelfornondeftext);
						if($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 9.0)
							var inputcheckbox2 = $("<input/>").attr('type','checkbox').attr('id','chrdefcheckbox').css({position: 'relative'});
						else
							var inputcheckbox2 = $("<input/>").attr('type','checkbox').attr('id','chrdefcheckbox');
								
						inputcheckbox2.on("change",obj.checkboxEventHandler);
						var spanforimage2 = $("<span/>").attr('id','CheckboxImageChrDef').attr('class','CheckboxImage');					
						var labelforcheckbox2 = $("<label/>").attr('for','chrdefcheckbox');					
						labelforcheckbox2.append(spanforimage2);
						labelforcheckbox2.append(addon.text.chromedefault);
						if (navigator && (navigator.userAgent.indexOf("Windows NT 10.0") > -1)){
							var checkbox2 = $("<div/>").attr('id','AUTO_ID_js_div_chrdef_checkbox').attr('style','display:None;');
						}else{
							var checkbox2 = $("<div/>").attr('id','AUTO_ID_js_div_chrdef_checkbox').attr('class','Checkbox dialog');											
						}
						
						inputcheckbox2.appendTo(checkbox2);
						labelforcheckbox2.appendTo(checkbox2);
					}else {
						labelforcheckbox.append(addon.text.checkbox);
					}
					var checkbox = $("<div/>").attr('id','AUTO_ID_js_div_offer_checkbox').addClass('Checkbox');
					inputcheckbox.appendTo(checkbox);
					labelforcheckbox.appendTo(checkbox);
				}
				else {					
					
					if($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 9.0){
						var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','offerCheckbox').attr("checked", true).css({position: 'relative'});	
					}else{
						var inputcheckbox = $("<input/>").attr('type','checkbox').attr('id','offerCheckbox').attr("checked", true);
					}
					inputcheckbox.on("change",obj.checkboxEventHandler);
					var IE_7_UserAgent = ($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 8.0);
					var spanforimagebase = $("<span/>").attr('class','CheckboxImage');
					var spanforimage = (IE_7_UserAgent) ? spanforimagebase : spanforimagebase.attr('id','CheckboxImage');
					var labelforcheckbox = $("<label/>").attr('for','offerCheckbox');					
					labelforcheckbox.append(spanforimage);
					var labelfordeftext = $("<span/>").attr('id','offerLabelDef');					
					if (addon.abbr === "dual")
						labelfordeftext.append(addon.text.checkboxChrome);
					else
						labelfordeftext.append(addon.text.checkboxMss);					
					labelforcheckbox.append(labelfordeftext);
					var labelfornondeftext = $("<span/>").attr('id','offerLabelNonDef').css('display','none');
					labelfornondeftext.append(addon.text.checkboxChromeNonDef);
					labelforcheckbox.append(labelfornondeftext);									
					var checkbox = $("<div/>").attr('id','AUTO_ID_js_div_offer_checkbox').addClass('Checkbox');
					inputcheckbox.appendTo(checkbox);
					labelforcheckbox.appendTo(checkbox);	
									
					if($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 9.0){
						var inputcheckbox1 = $("<input/>").attr('type','checkbox').attr('id','offerCheckbox1').attr("checked", true).css({position: 'relative'});				
					} else {
						var inputcheckbox1 = $("<input/>").attr('type','checkbox').attr('id','offerCheckbox1').attr("checked", true);
					}
					inputcheckbox1.on("change",obj.checkboxEventHandler);
					var spanforimagebase1 = $("<span/>").attr('class','CheckboxImage');
					var spanforimage1 = (IE_7_UserAgent) ? spanforimagebase1 : spanforimagebase1.attr('id','CheckboxImage1');
					var labelforcheckbox1 = $("<label/>").attr('for','offerCheckbox1');
					labelforcheckbox1.append(spanforimage1);
					if (addon.abbr === "dual")
						labelforcheckbox1.append(addon.text.checkboxGTB);
					else
						labelforcheckbox1.append(addon.text.checkboxMsc);	
					var checkbox1 = $("<div/>").attr('id','AUTO_ID_js_div_offer_checkbox1').addClass('Checkbox');
					inputcheckbox1.appendTo(checkbox1);
					labelforcheckbox1.appendTo(checkbox1);					
					
					if (addon.abbr === "dual"){						
						if($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 9.0)
							var inputcheckbox2 = $("<input/>").attr('type','checkbox').attr('id','chrdefcheckbox').css({position: 'relative'});
						else
							var inputcheckbox2 = $("<input/>").attr('type','checkbox').attr('id','chrdefcheckbox');
								
						inputcheckbox2.on("change",obj.checkboxEventHandler);
						var spanforimage2 = $("<span/>").attr('id','CheckboxImageChrDef').attr('class','CheckboxImage');					
						var labelforcheckbox2 = $("<label/>").attr('for','chrdefcheckbox');					
						labelforcheckbox2.append(spanforimage2);
						labelforcheckbox2.append(addon.text.chromedefault);
						if (navigator && (navigator.userAgent.indexOf("Windows NT 10.0") > -1)){
							var checkbox2 = $("<div/>").attr('id','AUTO_ID_js_div_chrdef_checkbox').attr('style','display:None;');
						}else{
							var checkbox2 = $("<div/>").attr('id','AUTO_ID_js_div_chrdef_checkbox').attr('class','Checkbox dialog');											
						}
						//var checkbox2 = $("<div/>").attr('id','AUTO_ID_js_div_chrdef_checkbox').addClass('Checkbox');					
						inputcheckbox2.appendTo(checkbox2);
						labelforcheckbox2.appendTo(checkbox2);
					}
				}				
 				
				var details = ''; //checkbox.append(addon.text.checkbox);				
				if(addon.abbr === "dual" || addon.abbr === "chrosx"){
					//var installoptions = $("<a href=\"javascript:void(0);\"\/>").text(addon.text.installoptions).click(obj.openNyroModal);
					//var detailsWithOptions = details.append(" ").append(installoptions);					
					var offer = $("<div id=\"AUTO_ID_js_div_offer_details\" />").append(checkbox).append(checkbox2).append(checkbox1);//append(detailsWithOptions);	
				}else if (addon.abbr === "mdual"){					
					var offer = $("<div id=\"AUTO_ID_js_div_offer_details\" />").append(checkbox).append(checkbox1);
				}else{
					var offer = $("<div id=\"AUTO_ID_js_div_offer_details\" />").append(checkbox).append(details);
				}								
				
				var image = $("<p id=\"AUTO_ID_js_p_offer_image\" class=\"NoMargin\"/>").append($("<img id=\"AUTO_ID_js_img_offer_image\" />").attr({ src: addon.image.src, width: addon.image.width, height: addon.image.height, alt: addon.image.alt }));
				if(addon.abbr === "ltrosx" || addon.abbr === "ltrosxjp" || addon.abbr === "ltr5x32" || addon.abbr === "ltr5x64"){
					image = image.css({"padding-top":"20px"});
				}				
				if(addon.abbr === "dual"){	
					var learnMoreChr = $("<a rel=\"learnmorechr\" href=\"#\" style=\"font-style: italic;\" id=\"AUTO_ID_js_a_learnmore\"> "+ addon.text.learnmore +"</a>");
					var learnMoreGtb = $("<a rel=\"learnmoregtb\" href=\"#\" style=\"font-style: italic;\" id=\"AUTO_ID_js_a_learnmore\"> "+ addon.text.learnmore +"</a>");
					learnMoreChr.appendTo(labelforcheckbox);
					learnMoreGtb.appendTo(labelforcheckbox1);
				}else if(addon.abbr === "mdual"){						
					var learnMoreMss = $("<a rel=\"learnmoremss\" href=\"#\" style=\"font-style: italic;\" id=\"AUTO_ID_js_a_learnmore\"> "+ addon.text.learnmore +"</a>");
					var learnMoreMsc = $("<a rel=\"learnmoremsc\" href=\"#\" style=\"font-style: italic;\" id=\"AUTO_ID_js_a_learnmore\"> "+ addon.text.learnmore +"</a>");
					learnMoreMss.appendTo(labelforcheckbox);
					learnMoreMsc.appendTo(labelforcheckbox1);
				}else if(addon.abbr === "chr"){	
					var learnMore = $("<a rel=\"learnmore\" href=\"#\" style=\"font-style: italic;\" id=\"AUTO_ID_js_a_learnmore\"> "+ addon.text.learnmore +"</a>");
					learnMore.appendTo(labelforcheckbox);
				}else if(addon.abbr === "gtb"){				
					var learnMore = $("<a rel=\"learnmore\" href=\"#\" style=\"font-style: italic;\" id=\"AUTO_ID_js_a_learnmore\"> "+ addon.text.learnmore + "</a>");
					learnMore.appendTo(labelforcheckbox);
				}else if(addon.abbr === "msc"){				
					var learnMore = $("<a rel=\"learnmore\" href=\"#\" style=\"font-style: italic;\" id=\"AUTO_ID_js_a_learnmore\"> "+ addon.text.learnmore + "</a>");
					learnMore.appendTo(labelforcheckbox);
				}else {
					var learnMore = $("<a rel=\"learnmore\" href=\"#\" style=\"font-style: italic;\" id=\"AUTO_ID_js_a_learnmore\"> "+ addon.text.learnmore + "</a>");
					learnMore.appendTo(labelforcheckbox);
				}				
				if(addon.text.marketing !== ""){
					var marketing = $("<div id=\"learnMorePanel\" style=\"display: none;padding-left:45px;font-style:italic;line-height:19px;margin-top:-10px;\" />").append($("<p style=\"font-size:14px;\" />").append(addon.text.marketing));	
				if(addon.abbr === "dual") {
				//	$("#acrobat_section").hide();
					var marketingGTB = $("<div id=\"learnMorePanelGTB\" style=\"display: none;padding-left:45px;font-style:italic;line-height:19px;margin-top:-10px;\" />").append($("<p style=\"font-size:14px;\" />").append(addon.text.marketingGTB));
					var marketingChrome = $("<div id=\"learnMorePanelChrome\" style=\"display: none;padding-left:45px;font-style:italic;line-height:19px;margin-top:-10px;\" />").append($("<p style=\"font-size:14px;\" />").append(addon.text.marketingChrome));
					var container = $("<div id=\"AUTO_ID_js_div_offer_container\" />").append(image).append(checkbox).append(checkbox2).append(marketingChrome).append(checkbox1).append(marketingGTB);										
				}
				else if(addon.abbr === "mdual") {	
				//	$("#acrobat_section").show(); //to display acrbat for mcafee
					var marketingMss = $("<div id=\"learnMorePanelMss\" style=\"display: none;padding-left:45px;font-style:italic;line-height:19px;margin-top:-10px;\" />").append($("<p style=\"font-size:14px;\" />").append(addon.text.marketingMss));
					var marketingMsc = $("<div id=\"learnMorePanelMsc\" style=\"display: none;padding-left:45px;font-style:italic;line-height:19px;margin-top:-10px;\" />").append($("<p style=\"font-size:14px;\" />").append(addon.text.marketingMsc));
					var container = $("<div id=\"AUTO_ID_js_div_offer_container\" />").append(image).append(checkbox).append(marketingMss).append(checkbox1).append(marketingMsc);
				}
				else if (addon.abbr === "gtb" || addon.abbr === "chr"){
				//	$("#acrobat_section").hide();
					var container = $("<div id=\"AUTO_ID_js_div_offer_container\" />").append(image).append(checkbox).append(checkbox2).append(checkbox1).append(marketing);	
				}
				else if(addon.abbr === "msc") {
				//	$("#acrobat_section").show(); //to display acrbat for mcafee
					var container = $("<div id=\"AUTO_ID_js_div_offer_container\" />").append(image).append(checkbox).append(marketing);
				}
				else {
				//	$("#acrobat_section").show(); //to display acrbat for mcafee
					var container = $("<div id=\"AUTO_ID_js_div_offer_container\" />").append(image).append(checkbox).append(marketing);
				}
				$("#acrobat_section").show();
				} else{				
					var container = offer.append(image).append(marketing);
				}
				
				settings.downloadButton.click(function() {
					obj.setOfferCookie(addon.abbr, $("#offerCheckbox").attr("checked") ? true : false);

				});
				
				elem.append(container);				
				state.optional = addon;
				if (addon.abbr === "dual" || addon.abbr === "chr"){
					$("#AUTO_ID_js_div_chrdef_checkbox").css({"margin-left": "20px"});
				}
				//PLUTUS-4930 removing font-style italic for the below locales
				if (settings.locale === "kr" || settings.locale === "cn" || settings.locale === "tw"||settings.locale === "jp"){
					$("#learnMorePanelMss").css("font-style","normal");
					$("#learnMorePanelMsc").css("font-style","normal");
					$("#learnMorePanelGTB").css("font-style","normal");
					$("#learnMorePanelChrome").css("font-style","normal");
					$("#learnMorePanel").css("font-style","normal");
					$("a[rel=learnmoremsc]").css("font-style","normal");
					$("a[rel=learnmoregtb]").css("font-style","normal");
				}
				var testdiv,colorvalue;		
				testdiv=document.createElement("div");
				testdiv.style.color="rgb(31,41,59)";
				document.body.appendChild(testdiv);
				colorvalue=document.defaultView?document.defaultView.getComputedStyle(testdiv,null).color:testdiv.currentStyle.color;
				document.body.removeChild(testdiv);
				colorvalue=colorvalue.replace(/ /g,"");		
				if (colorvalue!="rgb(31,41,59)"){
					$("#offerCheckbox").css({opacity: 1});
					$("#CheckboxImage").removeClass("CheckboxImage");
					$("#CheckboxImage").addClass("HCMcheckboxAlign");
					$("#offerCheckbox1").css({opacity: 1});
					$("#CheckboxImage1").removeClass("CheckboxImage");
					$("#CheckboxImage1").addClass("HCMcheckboxAlign");
					$("#chrdefcheckbox").css({opacity: 1});
					$("#CheckboxImageChrDef").removeClass("CheckboxImage");
					$("#CheckboxImageChrDef").addClass("HCMcheckboxAlign");
				}				
				
				// Build the omniture value
				var omniture = [];
				var omniture_tag = [];
				
				if (addon.abbr === "ltrosx" || addon.abbr === "ltrosxjp" || addon.abbr === "chrosx" || addon.abbr === "ltr5x32" || addon.abbr === "ltr5x64") {				
					omniture.push([ settings.omniturePrefix + addon.siteCatalystAbbr.toUpperCase(), "offer-eligible" ].join("="));
					omniture_tag.push([ settings.omniturePrefix + addon.siteCatalystAbbr.toUpperCase(), "offer-eligible" ].join("="));
				}else {
					omniture.push([ settings.omniturePrefix + addon.abbr.toUpperCase(), "offer-eligible" ].join("="));
					omniture_tag.push([ settings.omniturePrefix + addon.abbr.toUpperCase(), "offer-eligible" ].join("="));
				}
				
				// Add preinstalled addon
				if (state.preinstalled) {
					omniture.push([ state.preinstalled.abbr.toUpperCase(), "offer-preinstalled" ].join("="));
					omniture_tag.push([ state.preinstalled.abbr.toUpperCase(), "offer-preinstalled" ].join("="));
				}
				
				// Set the omniture tag as a global js var				
				try{
				s_prop34 = omniture.join("&");
				}catch (e) {};
				return this;
			}	

		}
		
		this.offerBundledAddon = function(id, marketingText) {
			var addon = obj.getAddonById(id);
			if (settings.bundledAddon && addon) {
				// Show the marketing text
				settings.bundledAddon.html(marketingText);
				
				// Update the file size
				settings.fileSize.text(Math.round((parseFloat(settings.fileSize.text()) + parseFloat(addon.size))*100)/100);
				settings.fileSizeLabel.text(settings.megabyteAbbr);
				
				// Add the bundled addon
				settings.downloadButton.data("downloadbutton").setBundledInstaller(addon.queryName).updateDownloadButton();
			}
		};
		
		this.preinstalled = function(id) {
			// Set the preinstalled addon
			/*
			var addon = obj.getAddonById(id);
			state.preinstalled = addon;
			
			if (addon !== undefined && addon.abbr !== "dual") {
				settings.downloadButton.data("downloadbutton").setPreinstalledInstaller(addon.queryName);	
			}
			*/

			
			if(id !== undefined){
				settings.downloadButton.data("downloadbutton").setPreinstalledInstaller(id);	
			}
			
			settings.downloadButton.data("downloadbutton").updateDownloadButton();
			return this;
		};
		
		this.displayFileSizeAccept = function(secondaddon, firstaddon, optionaladdon){
			//var localeTotalFileSize = 0;
			var dualAcceptStruct = { 
				filesize : undefined,
				addon : undefined			
			};
			
			if (optionaladdon === "dual") {
				if($("#offerCheckbox1").attr('checked') && $("#offerCheckbox").attr('checked')) {				
					dualAcceptStruct.filesize = secondaddon + firstaddon;
					dualAcceptStruct.addon = "dual";
				}else if(!$("#offerCheckbox1").attr('checked') && $("#offerCheckbox").attr('checked')) {			
					dualAcceptStruct.filesize = firstaddon;			
					dualAcceptStruct.addon = "chr";
				}else if($("#offerCheckbox1").attr('checked') && !$("#offerCheckbox").attr('checked')) {	
					dualAcceptStruct.filesize = secondaddon;			
					dualAcceptStruct.addon = "gtb";							
				}
			}
			else {
				if($("#offerCheckbox1").attr('checked') && $("#offerCheckbox").attr('checked')) {				
					dualAcceptStruct.filesize = secondaddon + firstaddon;
					dualAcceptStruct.addon = "mdual";
				}else if(!$("#offerCheckbox1").attr('checked') && $("#offerCheckbox").attr('checked')) {			
					dualAcceptStruct.filesize = firstaddon;			
					dualAcceptStruct.addon = "mss";
				}else if($("#offerCheckbox1").attr('checked') && !$("#offerCheckbox").attr('checked')) {	
					dualAcceptStruct.filesize = secondaddon;			
					dualAcceptStruct.addon = "msc";							
				}				
			}
			return dualAcceptStruct;
		};
		
		this.displayFileSizeDecline = function(secondaddon, firstaddon, optionaladdon){
			var dualDeclineStruct = { 
				filesize : undefined,
				addon : undefined			
			};
			//var localeTotalFileSize = 0;
			if (optionaladdon === "dual") {
				if(!$("#offerCheckbox1").attr('checked') && !$("#offerCheckbox").attr('checked')) {				
					dualDeclineStruct.filesize = 0;
					dualDeclineStruct.addon = "none";				
				}else if(!$("#offerCheckbox1").attr('checked') && $("#offerCheckbox").attr('checked')) {
					dualDeclineStruct.filesize = secondaddon;
					dualDeclineStruct.addon = "gtb";							
				}else if($("#offerCheckbox1").attr('checked') && !$("#offerCheckbox").attr('checked')) {
					dualDeclineStruct.filesize = firstaddon;
					dualDeclineStruct.addon = "chr";							
				}
			}
			else {
				if(!$("#offerCheckbox1").attr('checked') && !$("#offerCheckbox").attr('checked')) {				
					dualDeclineStruct.filesize = 0;
					dualDeclineStruct.addon = "none";				
				}else if(!$("#offerCheckbox1").attr('checked') && $("#offerCheckbox").attr('checked')) {
					dualDeclineStruct.filesize = secondaddon;
					dualDeclineStruct.addon = "msc";							
				}else if($("#offerCheckbox1").attr('checked') && !$("#offerCheckbox").attr('checked')) {
					dualDeclineStruct.filesize = firstaddon;
					dualDeclineStruct.addon = "mss";							
				}				
			}			
			return dualDeclineStruct;
		};
		
		this.accept = function(event) {	
			if(event != undefined && event.target.id == "goCartExtCheckbox") {
				var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#clientfilesize").text(),settings.locale)) + parseFloat($("#GCFileSize").text()))*100)/100;		
				$("#clientfilesize").text($.localizeNumber(fullsize,settings.locale));
				$("#totalsize").text($("#clientfilesize").text());
				settings.downloadButton.data("downloadbutton").setgoc(true);
				$("#readerdiv").hide();$("#gocartdiv").show();
				settings.downloadButton.data("downloadbutton").updateDownloadButton();
				return this;
			}
			if (state.optional) {					
				// Update the download button
				$.log("offer accepted: " + state.optional.queryName);
				if (state.optional.abbr !== "dual" && state.optional.abbr !== "mdual") {			
					$("#offerCheckbox").attr({ checked: true });	
				}
				if(state.optional.abbr !== undefined && (state.optional.abbr === "ltrosx" || state.optional.abbr === "ltrosxjp" || state.optional.abbr === "ltr5x32" || state.optional.abbr === "ltr5x64")){														
					var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#clientfilesize").text(),settings.locale)) + parseFloat(state.optional.size))*100)/100;			
					$("#totalsize").text($.localizeNumber(fullsize,settings.locale));
					
					//for acr
					fullsize = Math.round((parseFloat($.deLocalizeNumber($("#acrfilesize").text(),settings.locale)) + parseFloat(state.optional.size))*100)/100;			
					$("#totalsizeacr").text($.localizeNumber(fullsize,settings.locale));

					settings.downloadButton.data("downloadbutton").setSamcap(true);		
				}
				else if (state.optional.abbr !== undefined && state.optional.abbr === "dual") {
					var addonstruct = obj.displayFileSizeAccept(state.optional.size.GTB, state.optional.size.Chrome, state.optional.abbr);					
					var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#clientfilesize").text(),settings.locale)) + parseFloat(addonstruct.filesize))*100)/100;			
					$("#totalsize").text(fullsize);

					//for acr
					fullsize = Math.round((parseFloat($.deLocalizeNumber($("#acrfilesize").text(),settings.locale)) + parseFloat(addonstruct.filesize))*100)/100;			
					$("#totalsizeacr").text(fullsize);
				}
				else if (state.optional.abbr !== undefined && state.optional.abbr === "mdual") {
					var addonstruct = obj.displayFileSizeAccept(state.optional.size.msc, state.optional.size.mss, state.optional.abbr);					
					var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#clientfilesize").text(),settings.locale)) + parseFloat(addonstruct.filesize))*100)/100;			
					$("#totalsize").text(fullsize);

					//for acr
					fullsize = Math.round((parseFloat($.deLocalizeNumber($("#acrfilesize").text(),settings.locale)) + parseFloat(addonstruct.filesize))*100)/100;			
					$("#totalsizeacr").text(fullsize);
				}
				else
				{
					var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#clientfilesize").text(),settings.locale)) + parseFloat(state.optional.size))*100)/100;			
					$("#totalsize").text(fullsize);

					//for acr
					fullsize = Math.round((parseFloat($.deLocalizeNumber($("#acrfilesize").text(),settings.locale)) + parseFloat(state.optional.size))*100)/100;			
					$("#totalsizeacr").text(fullsize);
				}
				if(state.optional.abbr !== undefined && state.optional.abbr === "dual"){					
					settings.downloadButton.data("downloadbutton").setDualOffer(true);
					settings.downloadButton.data("downloadbutton").setMDualOffer(false);
					settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null);
					settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null);					
					settings.downloadButton.data("downloadbutton").setAcceptInstallerList([]);
					settings.downloadButton.data("downloadbutton").setDeclineInstallerList([]);					
					settings.dualOfferInstallOptions.data("dualoffer").selectAll(event,state.optional.abbr);										
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
				
				} else if(state.optional.abbr !== undefined && state.optional.abbr === "mdual"){
										
					settings.downloadButton.data("downloadbutton").setMDualOffer(true);		
					settings.downloadButton.data("downloadbutton").setDualOffer(false);
					settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null);
					settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null);					
					settings.downloadButton.data("downloadbutton").setAcceptInstallerList([]);
					settings.downloadButton.data("downloadbutton").setDeclineInstallerList([]);					
					settings.dualOfferInstallOptions.data("mdualoffer").selectAll(event,state.optional.abbr);										
					settings.downloadButton.data("downloadbutton").updateDownloadButton();													
				
				} else if(state.optional.abbr !== undefined && state.optional.abbr === "chrosx"){
					$(".addonResourcesCHR").remove();
					$.each(state.optional.text.additionalResourcesCHR, function(k, resource) {
						settings.resources.append($("<li class=addonResourcesCHR />").html(resource));
					});
					settings.downloadButton.data("downloadbutton").setDualOffer(true);
					settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null);
					settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null);
					settings.dualOfferInstallOptions.data("chrsosxOffer").selectAll();

				}else{
										
					$.each(state.optional.text.additionalResources, function(k, resource) {
						settings.resources.append($("<li class=addonResources />").html(resource));

					});	
					settings.downloadButton.data("downloadbutton").setDualOffer(false);
					settings.downloadButton.data("downloadbutton").setMDualOffer(false);
					if(state.optional.abbr !== undefined && state.optional.abbr === "chr") {
						settings.dualOfferInstallOptions.data("dualoffer").selectAll(event,state.optional.abbr);
					}
					settings.downloadButton.data("downloadbutton").setAcceptedInstaller(state.optional.queryName);
					settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null);
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
				}			
				// Replace the eula
				/*settings.eula.html(state.optional.text.eula);
				if(state.optional.text.eula_acr !== undefined){
				settings.eula_acr.html(state.optional.text.eula_acr);
				}*/
				//Changed the strings such that it loads only the license agreement dynamically so added a new div
				if(settings.licenseListdiv != undefined){
					if(state.optional.text.licenseList !== undefined){
						settings.licenseListdiv.html(state.optional.text.licenseList);
						settings.licenseListdiv.show();
					}
					else{
						settings.licenseListdiv.hide();
					}
				}
				else{
					settings.eula.html(state.optional.text.eula);
				}
				if(settings.licenseListdiv_acr != undefined){
					if(state.optional.text.licenseList !== undefined){
						settings.licenseListdiv_acr.html(state.optional.text.licenseList);
						settings.licenseListdiv_acr.show();
					}
					else{
						settings.licenseListdiv_acr.hide();
					}
				}
				else{
					if(state.optional.text.eula_acr !== undefined){
						settings.eula_acr.html(state.optional.text.eula_acr);
					}
				}
			}
			return this;
		};
		
			this.decline = function(event) {
			if(event != undefined && event.target.id == "goCartExtCheckbox") {
				var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#totalsize").text(),settings.locale)) - parseFloat($("#GCFileSize").text()))*100)/100;			
				$("#clientfilesize").text($.localizeNumber(fullsize,settings.locale));
				$("#totalsize").text($.localizeNumber($("#clientfilesize").text(),settings.locale));
				settings.downloadButton.data("downloadbutton").setgoc(false);
				$("#readerdiv").show();$("#gocartdiv").hide();
				settings.downloadButton.data("downloadbutton").updateDownloadButton();
				return this;
			}
			if (state.optional) {
				// Update the download button
				$.log("offer declined: " + state.optional.queryName);
				if (state.optional.abbr !== "dual" && state.optional.abbr !== "mdual") {			
					$("#offerCheckbox").attr({ checked: false });	
				}				
				var fullsize;
				if(state.optional.abbr !== undefined && (state.optional.abbr === "ltrosx" || state.optional.abbr === "ltrosxjp" || state.optional.abbr === "ltr5x32" || state.optional.abbr === "ltr5x64")){														
					if (parseFloat($("#clientfilesize").text()) < parseFloat(state.optional.size))

					{						
						$("#totalsize").text($("#clientfilesize").text());
						//for acr
						$("#totalsizeacr").text($("#acrfilesize").text());
					}
					else
					{
						fullsize = Math.round((parseFloat($.deLocalizeNumber($("#clientfilesize").text(),settings.locale)) - parseFloat(state.optional.size))*100)/100;																				
						if(fullsize>0) {
							$("#totalsize").text($.localizeNumber(fullsize,settings.locale));
						fullsize = Math.round((parseFloat($.deLocalizeNumber($("#acrfilesize").text(),settings.locale)) - parseFloat(state.optional.size))*100)/100;
						$("#totalsizeacr").text($.localizeNumber(fullsize ,settings.locale));
				
						}
					}
					settings.downloadButton.data("downloadbutton").setSamcap(false);
				}
				else if (state.optional.abbr !== undefined && state.optional.abbr === "dual") {
					var addonstruct = obj.displayFileSizeDecline(state.optional.size.GTB, state.optional.size.Chrome, state.optional.abbr);					
					if (addonstruct.filesize===0) {
						$("#totalsize").text($("#clientfilesize").text());
						$("#totalsizeacr").text($("#acrfilesize").text());
					}
					else {						
						var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#totalsize").text(),settings.locale)) - parseFloat(addonstruct.filesize))*100)/100;									
						$("#totalsize").text(fullsize);
						fullsize =  Math.round((parseFloat($.deLocalizeNumber($("#totalsizeacr").text(),settings.locale)) - parseFloat(addonstruct.filesize))*100)/100;
						$("#totalsizeacr").text(fullsize);

					}
				}
				else if (state.optional.abbr !== undefined && state.optional.abbr === "mdual") {
					var addonstruct = obj.displayFileSizeDecline(state.optional.size.msc, state.optional.size.mss, state.optional.abbr);					
					if (addonstruct.filesize===0) {
						$("#totalsize").text($("#clientfilesize").text());
						$("#totalsizeacr").text($("#acrfilesize").text());
					}
					else {						
						var fullsize = Math.round((parseFloat($.deLocalizeNumber($("#totalsize").text(),settings.locale)) - parseFloat(addonstruct.filesize))*100)/100;									
						$("#totalsize").text(fullsize);
				
						fullsize = Math.round((parseFloat($.deLocalizeNumber($("#totalsizeacr").text(),settings.locale)) - parseFloat(addonstruct.filesize))*100)/100;									
						$("#totalsizeacr").text(fullsize);
					}
				}
				else
				{
					if (parseFloat($("#clientfilesize").text()) < parseFloat(state.optional.size))
					{						
						$("#totalsize").text($("#clientfilesize").text());
						$("#totalsizeacr").text($("#acrfilesize").text());
					}
					else
					{
						fullsize = Math.round((parseFloat($.deLocalizeNumber($("#clientfilesize").text(),settings.locale)))*100)/100;
						if(fullsize>0) {
							$("#totalsize").text(fullsize);
						}
						fullsize = Math.round((parseFloat($.deLocalizeNumber($("#acrfilesize").text(),settings.locale)))*100)/100;
						if(fullsize>0) {
							$("#totalsizeacr").text(fullsize);
						}
					}
				}
				if(state.optional.abbr !== undefined && state.optional.abbr === "dual"){					
					settings.downloadButton.data("downloadbutton").setDualOffer(true);
					settings.downloadButton.data("downloadbutton").setMDualOffer(false);
					settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null);
					settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null);										
					settings.downloadButton.data("downloadbutton").setAcceptInstallerList([]);
					settings.downloadButton.data("downloadbutton").setDeclineInstallerList([]);
					settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.gtb);
					settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.chrome);
					settings.dualOfferInstallOptions.data("dualoffer").reset(event);					
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
					if(addonstruct.addon==="gtb"){
				   		settings.downloadButton.data("downloadbutton").addAcceptInstallerList(state.optional.chrome);
						settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.gtb);
					}
					else if(addonstruct.addon==="chr"){
						settings.downloadButton.data("downloadbutton").addAcceptInstallerList(state.optional.gtb);
						settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.chrome);						
					}
					else if(addonstruct.addon==="none") {
						settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.gtb);
						settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.chrome);
					}
					settings.downloadButton.data("downloadbutton").updateDownloadButton();												
				}else if(state.optional.abbr !== undefined && state.optional.abbr === "mdual"){
					
					settings.downloadButton.data("downloadbutton").setMDualOffer(true);
					settings.downloadButton.data("downloadbutton").setDualOffer(false);
					settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null);
					settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null);										
					settings.downloadButton.data("downloadbutton").setAcceptInstallerList([]);
					settings.downloadButton.data("downloadbutton").setDeclineInstallerList([]);
					settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.mss);
					settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.msc);
					settings.dualOfferInstallOptions.data("mdualoffer").reset(event);					
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
									
					if(addonstruct.addon==="mss"){				   		
						settings.downloadButton.data("downloadbutton").addAcceptInstallerList(state.optional.msc);
						settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.mss);
					}
					else if(addonstruct.addon==="msc"){						
						settings.downloadButton.data("downloadbutton").addAcceptInstallerList(state.optional.mss);
						settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.msc);						
					}
					else if(addonstruct.addon==="none") {
						settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.mss);
						settings.downloadButton.data("downloadbutton").addDeclineInstallerList(state.optional.msc);
					}
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
					
				}else if(state.optional.abbr !== undefined && state.optional.abbr === "chrosx"){
					$(".addonResourcesCHR").remove();
					$.each(state.optional.text.additionalResourcesCHR, function(k, resource) {
						settings.resources.append($("<li class=addonResourcesCHR />").html(resource));
					});
					settings.dualOfferInstallOptions.data("chrsosxOffer").reset();
					$("#CheckboxImage").fadeTo(1,1.0);
					$(".addonResourcesCHR").hide();		
				}else{
					settings.downloadButton.data("downloadbutton").setDualOffer(false);
					settings.downloadButton.data("downloadbutton").setMDualOffer(false);
					if(state.optional.abbr !== undefined && state.optional.abbr === "chr") {
						settings.dualOfferInstallOptions.data("dualoffer").reset(event);
					}
					settings.downloadButton.data("downloadbutton").setDeclinedInstaller(state.optional.queryName);
					settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null);
					settings.downloadButton.data("downloadbutton").updateDownloadButton();
					$(".addonResources").remove();	
				}								
				if(state.optional.abbr !== undefined && (state.optional.abbr === "dual" || state.optional.abbr === "mdual") && addonstruct.addon==="none") {
					/*settings.eula.html(settings.adobeEula);
					if(settings.adobeEula_acr !== undefined){
						settings.eula_acr.html(settings.adobeEula_acr);
					}*/
					if(settings.licenseListdiv != undefined){
						if(settings.licenseList !== undefined){
							settings.licenseListdiv.html(settings.licenseList);
							settings.licenseListdiv.show();
						}
						else{
							settings.licenseListdiv.hide();
						}
					}
					else{
						settings.eula.html(settings.adobeEula);
					}
					if(settings.licenseListdiv_acr != undefined){
						if(settings.licenseList !== undefined){
							settings.licenseListdiv_acr.html(settings.licenseList);
							settings.licenseListdiv_acr.show();
						}
						else{
							settings.licenseListdiv_acr.hide();
						}
					}
					else{
						if(settings.adobeEula_acr !== undefined){
							settings.eula_acr.html(settings.adobeEula_acr);
						}
					}
				
				}else if(state.optional.abbr !== undefined && state.optional.abbr !== "dual" && state.optional.abbr !== "mdual"){
					/*settings.eula.html(settings.adobeEula);
					if(settings.adobeEula_acr !== undefined){
						settings.eula_acr.html(settings.adobeEula_acr);
					}*/
					//Changed the strings such that it loads only the license agreement dynamically so added a new div
					if(settings.licenseListdiv != undefined){
						if(settings.licenseList !== undefined){
							settings.licenseListdiv.html(settings.licenseList);
							settings.licenseListdiv.show();
						}
						else{
							settings.licenseListdiv.hide();
						}
					}
					else{
						settings.eula.html(settings.adobeEula);
					}
					if(settings.licenseListdiv_acr != undefined){
						if(settings.licenseList !== undefined){
							settings.licenseListdiv_acr.html(settings.licenseList);
							settings.licenseListdiv_acr.show();
						}
						else{
							settings.licenseListdiv_acr.hide();
						}
					}
					else{
						if(settings.adobeEula_acr !== undefined){
							settings.eula_acr.html(settings.adobeEula_acr);
						}
					}
				}
			}			
			return this;
		};
		
		this.getOfferCookie = function() {			
			var name = settings.downloadcenter + "offerchoice";
			var rexp = new RegExp(name + "=(.*)");
			var result = false;			
			$.each(String(window.document.cookie).split(";"), function(k, cookie) {
				if ((test = cookie.match(rexp))) {
					result = unescape(decodeURI(test[1]));
					return false;
				}
			});
			
			return result;
		};
		
		this.setOfferCookie = function(addon, choice) {
			if(addon === "dual")
			{
				settings.dualOfferInstallOptions.data("dualoffer").setCookie();
			
			}
			else if(addon === "mdual")
			{
				settings.dualOfferInstallOptions.data("mdualoffer").setCookie();
			
			}
			else if(addon === "chrosx")
			{
				settings.dualOfferInstallOptions.data("chrsosxOffer").setCookie();
			
			}
			else
			{
				window.document.cookie = settings.downloadcenter + "offerchoice" + "=" + escape(addon + "=" + choice) + ";path=/";
			}
		};
		
		this.reset = function() {
			// Reset the addon element and download button
			elem.text("");
			settings.downloadButton.data("downloadbutton").setPreinstalledInstaller();
			settings.downloadButton.data("downloadbutton").setAcceptedInstaller();
			settings.downloadButton.data("downloadbutton").setDeclinedInstaller();
			settings.downloadButton.data("downloadbutton").setBundledInstaller();
			settings.downloadButton.data("downloadbutton").updateDownloadButton();
			
			if (settings.bundledAddon) {
				settings.bundledAddon.html("");
			}
			
			// Replace the eula
			//settings.eula.html(settings.adobeEula);
			if(settings.licenseListdiv != undefined){
				if(settings.licenseList !== undefined){
					settings.licenseListdiv.html(settings.licenseList);
					settings.licenseListdiv.show();
				}
				else{
					settings.licenseListdiv.hide();
				}
			}
			else{
				settings.eula.html(settings.adobeEula);
			}
			
			return this;
		}
		
			
		this.getAddonById = function(id) {
			return addons.byId[id];
		};
		
		this.getAddonByAbbr = function(abbr, offers) {
			addonFound = addons.byAbbr[abbr];
			$.each(String(offers).split(/,/), function(k, id) {
				if(addons.byId[id] && addons.byId[id].abbr === abbr){
					addonFound = addons.byId[id];
				}
			})	
			return addonFound;
		};
		
		this.isObjInList = function(aList, obj){
			var arr = aList.split(",");
			return (arr.indexOf(obj) !== -1);
		};
		
		this.getListAbbrFromAddonList = function(addonList){
			var retArr = [];
			$.each(addonList, function(i, addon){
				retArr.push(addon.abbr);
			});
			return retArr.join(",");
		};
		
		this.setPalList = function(aList){
			if(aList !== undefined && aList.length > 0){
				settings.polarbearpal.inPal(aList);
			} 
		}
		
		this.isPal = function(abbr){
			try{
				if(abbr === 'dual'){
					return settings.polarbearpal.isPal('dual');
				}else if(abbr === 'mdual'){
					return settings.polarbearpal.isPal('mdual');	
				}else if(abbr === 'ltr5x32' || abbr === 'ltr5x64'){
					return settings.polarbearpal.isPal('ltr5');
				}else{
					return settings.polarbearpal.isPal(abbr);
				}
			}catch(e){
				return false;
			}
		}
		init();
	};
	 
	
		
	$.fn.addons = function(options) {
		return this.each(function() {
			var element = $(this);
			if (element.data('addons')) return;
			element.data('addons', new Addons(this, options));
		});
	};
})(jQuery);
var cookieExists = function(cookieName){
   return ( document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)')) != null )
};

var deleteCookie = function(cookieName){
 	if(cookieExists(cookieName)){
				document.cookie = cookieName +'=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			}
};

var getCookie = function(cookieName){
	var value = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
	return value ? value[2] : null;
	
};

var setCookie = function(cookieName,cookieValue,days){
	var expireTime = new Date();
	expireTime.setTime(expireTime.getTime() + (days * 24 * 60 * 60 * 1000));
	window.document.cookie = cookieName + "=" + cookieValue + ";path=/;expires=" + expireTime.toUTCString() + ";";
};

(function($){
	
	var DualOffer = function(element, options){
		var elem = $(element);
		var obj = this;
		var settings = $.extend({}, options ||{});
		var dualStruct = {
			chrcheckbox : undefined,
			chrdefcheckbox : undefined
		};
		
		var init = function() {
			dualStruct.chrcheckbox = settings.chr; 
			dualStruct.chrdefcheckbox = settings.chromedefault;
			obj.getContainer();
		};
		
		this.getContainer = function(){
			elem.append(obj.getChrCheckbox()).append(obj.getChrDefaultCheckbox());
		}
		
		this.getChrCheckbox = function(){
			var addon = dualStruct.chrcheckbox; 
			var localeFileSize = addon.SIZE;
			if(settings.locale !== undefined){
				localeFileSize = $.localizeNumber(localeFileSize,settings.locale);
			}
			var filesize = $("<span class='stamp-fileinfo' />").text(" (" + localeFileSize + " " + settings.megabyteAbbr + ")");
			var checkbox = $("<p class='pullout-item clip-bottom' />").append($("<input />").attr({ id: "chrcheckbox", type: "checkbox" }).change(obj.checkboxEventHandler));
			var details = $("<p class=clip-bottom />").append($("<label />").attr({ "for": "chrcheckbox" }).append(addon.TEXT).append(filesize));
			var offer = $("<div class='pullout-left left-20' />").append(checkbox).append(details);
			return offer;
		}
		
		this.getChrDefaultCheckbox = function(){
			var addon = dualStruct.chrdefcheckbox;
			var checkbox =  $("<p class='pullout-item clip-bottom' />").append($("<input />").attr({ id: "chrdefcheckbox", type: "checkbox" }).change(obj.checkboxEventHandler));
			var details = $("<p class=clip-bottom />").append($("<label />").attr({ "for": "chrdefcheckbox" }).append(addon.TEXT));
			var offer = $("<div class='pullout-left left-20' style='padding-left:20px'/>").append(checkbox).append(details);
			return offer;
		}
		
		this.checkboxEventHandler = function(event) {
			var selectedOption = dualStruct[this.id];
			if (this.id === "chrdefcheckbox") {
				if ($(event.currentTarget).attr('checked') && !$("#chrcheckbox").attr('checked')) {
					$("#chrdefcheckbox").attr({checked: false});
					settings.downloadButton.data("downloadbutton").setChromeDefault(false);
				}
				else {
					$(event.currentTarget).attr('checked') ? settings.downloadButton.data("downloadbutton").setChromeDefault(true) : settings.downloadButton.data("downloadbutton").setChromeDefault(false);
				}	
			}
			else {
				if(this.id === "chrcheckbox" && !$(event.currentTarget).attr('checked')){
					$("#chrdefcheckbox").attr({ checked: false });
					settings.downloadButton.data("downloadbutton").setChromeDefault(false);
				}else if(this.id === "chrcheckbox" && $(event.currentTarget).attr('checked')){
					$("#chrdefcheckbox").attr({ checked: true });
					settings.downloadButton.data("downloadbutton").setChromeDefault(true);
				}
				$(event.currentTarget).attr('checked') ? settings.downloadButton.data("downloadbutton").addAcceptInstallerList(selectedOption.QNAME) : settings.downloadButton.data("downloadbutton").addDeclineInstallerList(selectedOption.QNAME);
			}
			
			obj.displayFileSizeAndLink();
			settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null);
			settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null);
			settings.downloadButton.data("downloadbutton").updateDownloadButton();
		}
		
		
		this.reset = function(){
			$("#chrcheckbox").attr('checked', false);
			$("#chrdefcheckbox").attr('checked', false);
			obj.clearDualOfferCookies();
			var localeTotalFileSize = dualStruct.chrcheckbox.SIZE;
			obj.setTotalFileSize(localeTotalFileSize);
			settings.downloadButton.data("downloadbutton").setDualOffer(true);
			settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null);
			settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null);
			settings.downloadButton.data("downloadbutton").setAcceptInstallerList([]);
			settings.downloadButton.data("downloadbutton").setDeclineInstallerList([]);
			settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.chrcheckbox.QNAME);
			settings.downloadButton.data("downloadbutton").setChromeDefault(false);
			settings.downloadButton.data("downloadbutton").updateDownloadButton();
			
		}
		
		this.selectAll = function(){ 
			$("#chrcheckbox").attr('checked', true);
			$("#chrdefcheckbox").attr('checked', true);
					
			settings.downloadButton.data("downloadbutton").setAcceptedInstaller(null); 
			settings.downloadButton.data("downloadbutton").setDeclinedInstaller(null); 
			settings.downloadButton.data("downloadbutton").setAcceptInstallerList([]); 
			settings.downloadButton.data("downloadbutton").setDeclineInstallerList([]); 
			
			settings.downloadButton.data("downloadbutton").setDualOffer(true); 
			settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.chrcheckbox.QNAME); 
			settings.downloadButton.data("downloadbutton").setChromeDefault(true); 
			settings.downloadButton.data("downloadbutton").updateDownloadButton(); 
			obj.setCheckboxFromCookie(); 
			obj.clearDualOfferCookies();
			obj.displayFileSizeAndLink(); 
			settings.downloadButton.data("downloadbutton").updateDownloadButton();
			
		}
		
		this.getOfferCookieCHR = function() {
			var chrname = settings.downloadcenter + "chrchoice";
			var rexpChr = new RegExp(chrname + "=(.*)");
			var resultCHR = false;
			$.each(window.document.cookie.split(";"), function(k, cookie) {
				if ((testChr = cookie.match(rexpChr))) {
					resultCHR = unescape(decodeURI(testChr[1]));
					return false;
				}
				
			});
			
			return resultCHR;
		};
		
		this.getOfferCookiedefCHR = function() {
			var chrdefname = settings.downloadcenter + "defchrchoice";
			var rexpdefChr = new RegExp(chrdefname + "=(.*)");
			var resultdefCHR = false;
			$.each(window.document.cookie.split(";"), function(k, cookie) {
				if ((testdefChr = cookie.match(rexpdefChr))) {
					resultdefCHR = unescape(decodeURI(testdefChr[1]));
					return false;
				}
				
			});
			
			return resultdefCHR;
		};
		
		
		
		this.setCookie = function() {
			
			var addon= "dual";
			var chrchoice=$("#chrcheckbox").attr("checked") ? true : false;
			var defchrchoice=$("#chrdefcheckbox").attr("checked") ? true : false;
			var choice=$("#offerCheckbox").attr("checked") ? true : false;
			window.document.cookie = settings.downloadcenter + "offerchoice" + "=" + escape(addon + "=" + choice) + ";path=/";
			window.document.cookie = settings.downloadcenter + "chrchoice" + "=" + escape("CHR=" + chrchoice) + ";path=/";
			window.document.cookie = settings.downloadcenter + "defchrchoice" + "=" + escape("defChr=" + defchrchoice) + ";path=/";
		}
		
		this.clearDualOfferCookies = function(){
			jaaulde.utils.cookies.set(settings.downloadcenter + "offerchoice","",-1,"/");
			jaaulde.utils.cookies.set(settings.downloadcenter + "chrchoice","",-1,"/");
			jaaulde.utils.cookies.set(settings.downloadcenter + "defchrchoice","",-1,"/");
		}
			
		this.displayFileSizeAndLink = function(){ 
			var localeTotalFileSize = 0;
			if(!$("#chrcheckbox").attr('checked'))
			{	
				$('#adobeEULA').html(settings.adobeEula);
				$("#offerCheckbox").attr({ checked: false });
				$("#offerCheckbox").fadeTo(1,1.0);
				$(".addonResourcesCHR").hide();
				$('#dualEulaLink').attr('href',settings.eulaLink);
				localeTotalFileSize = dualStruct.chrcheckbox.SIZE;
			}else if($("#chrcheckbox").attr('checked')){ 
				$('#adobeEULA').html(settings.adobeDualEula);
				$("#offerCheckbox").attr({ checked: true });
				$("#offerCheckbox").fadeTo(1,1.0);
				$(".addonResourcesCHR").show();
				$('#dualEulaLink').attr('href',settings.eulaLink + settings.eulaLinkCHR);
				localeTotalFileSize = dualStruct.chrcheckbox.SIZE;
			
			}
			if($("#chrcheckbox").attr('checked') && !$("#chrdefcheckbox").attr('checked')){	
				$("#offerCheckbox").fadeTo(1,0.5);
			}
			obj.setTotalFileSize(localeTotalFileSize);
		}

		this.setTotalFileSize = function(totalSize){
			var localeTotalFileSize = totalSize;
			if(settings.locale !== undefined){
				localeTotalFileSize = $.localizeNumber(localeTotalFileSize,settings.locale);
			}
			$("#addonFileSize").text(" (" + localeTotalFileSize + " " + settings.megabyteAbbr + ")");
		}
		
		this.setCheckboxFromCookie = function(){ 
			if((cookieCHR = obj.getOfferCookieCHR())){
				var chrcheck = cookieCHR.split("=")[1] == "true" ? true : false;
				$("#chrcheckbox").attr({ checked: chrcheck }); 
				if(!chrcheck){
					settings.downloadButton.data("downloadbutton").addDeclineInstallerList(dualStruct.chrcheckbox.QNAME);
				}
				else{
					settings.downloadButton.data("downloadbutton").addAcceptInstallerList(dualStruct.chrcheckbox.QNAME);
				}
			}
				  
			if((cookiedefCHR = obj.getOfferCookiedefCHR())){
				var defchrcheck = cookiedefCHR.split("=")[1] == "true" ? true : false;
				$("#chrdefcheckbox").attr({ checked: defchrcheck }); 
				if(!defchrcheck){
					settings.downloadButton.data("downloadbutton").setChromeDefault(defchrcheck);
				}
			}
		}
		
		init();
	}
	
	$.fn.chrsosxOffer = function(options) {
		return this.each(function() {
			var element = $(this);
			if (element.data('chrsosxOffer')) return;
			element.data('chrsosxOffer', new DualOffer(this, options));
		});
	}
	
})(jQuery);

/* $Header: /source/docroot/downloadcenter/js/live/polarbear.store.js */
/* Copyright (c) 2010-2012 Marcus Westin */
(function(){function g(){try{return d in b&&b[d]}catch(a){return!1}}var a={},b=window,c=b.document,d="localStorage",e="__storejs__",f;a.disabled=!1,a.set=function(a,b){},a.get=function(a){},a.remove=function(a){},a.clear=function(){},a.transact=function(b,c,d){var e=a.get(b);d==null&&(d=c,c=null),typeof e=="undefined"&&(e=c||{}),d(e),a.set(b,e)},a.getAll=function(){},a.serialize=function(a){return JSON.stringify(a)},a.deserialize=function(a){if(typeof a!="string")return undefined;try{return JSON.parse(a)}catch(b){return a||undefined}};if(g())f=b[d],a.set=function(b,c){return c===undefined?a.remove(b):(f.setItem(b,a.serialize(c)),c)},a.get=function(b){return a.deserialize(f.getItem(b))},a.remove=function(a){f.removeItem(a)},a.clear=function(){f.clear()},a.getAll=function(){var b={};for(var c=0;c<f.length;++c){var d=f.key(c);b[d]=a.get(d)}return b};else if(c.documentElement.addBehavior){var h,i;try{i=new ActiveXObject("htmlfile"),i.open(),i.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'),i.close(),h=i.w.frames[0].document,f=h.createElement("div")}catch(j){f=c.createElement("div"),h=c.body}function k(b){return function(){var c=Array.prototype.slice.call(arguments,0);c.unshift(f),h.appendChild(f),f.addBehavior("#default#userData"),f.load(d);var e=b.apply(a,c);return h.removeChild(f),e}}var l=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function m(a){return a.replace(l,"___")}a.set=k(function(b,c,e){return c=m(c),e===undefined?a.remove(c):(b.setAttribute(c,a.serialize(e)),b.save(d),e)}),a.get=k(function(b,c){return c=m(c),a.deserialize(b.getAttribute(c))}),a.remove=k(function(a,b){b=m(b),a.removeAttribute(b),a.save(d)}),a.clear=k(function(a){var b=a.XMLDocument.documentElement.attributes;a.load(d);for(var c=0,e;e=b[c];c++)a.removeAttribute(e.name);a.save(d)}),a.getAll=k(function(b){var c=b.XMLDocument.documentElement.attributes;b.load(d);var e={};for(var f=0,g;g=c[f];++f)e[g]=a.get(g);return e})}try{a.set(e,e),a.get(e)!=e&&(a.disabled=!0),a.remove(e)}catch(j){a.disabled=!0}a.enabled=!a.disabled,typeof module!="undefined"&&typeof module!="function"?module.exports=a:typeof define=="function"&&define.amd?define(a):this.store=a})()
/**
 * $Header: /source/docroot/downloadcenter/js/live/polarbear.mssdetection.js $
 */ 

MssDetection = function(){
	var httpObj = null; 
	var exists = false;
	var mssPrecheckStatus = null;
}

MssDetection.prototype = {
	isIE: function(userAgent){
		if (!/MSIE (\d+\.\d+);/.test(userAgent)){
			return false;
		}else{
			return true;
		}
	},

	isMssInstalledForIE: function(bho1){
		if(bho1 != null && bho1 != undefined){
			return true;
		}else{
			return false;
		}
	},

	isMssInstalledForNonIE: function(pluginArray){
		var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		var mssFound = false;		
		
		if (mssFound == false && is_chrome == false){
			//if the navigator.plugins name is MSS+ then MSS is installed
			var chkMSSPlugin = navigator.plugins['McAfee Security Scanner +'];
			if (chkMSSPlugin != null && chkMSSPlugin != undefined ) {
				return true;
			}
			
			//Check for firefox native extension for MSS. 
			if ($('#MSS_Install_Check').length == 0) {
				return false; 
			}else{
				return true;
			}
		}
	},
	

	isInstalled: function(){
		$.log("IsInstalled ... started");
		if(this.mssPrecheckStatus !== null && this.mssPrecheckStatus !== undefined){
			return this.mssPrecheckStatus;
		}
		httpObj = new XMLHttpRequest();
		try{
			$.log("IsInstalled...try");
			// XHR for Chrome/Firefox/Opera/Safari/IE latest versions.	
			var HttpsUrl = 'https://mssplus.mcafee.com/mssplus.txt?' + new Date().getTime();				
			httpObj.open('HEAD', HttpsUrl,false);	
			//httpObj.timeout = 250;
			httpObj.send();	
			$.log("isInstalled.httpObj.status= " +httpObj.status );	
			if (httpObj.readyState==4)
    			{		
				if(httpObj.status == 200) // HTTP Status 200 OK
				{
					// HTTP request succeeded. Consider MSS+ is not installed.
					// Show the MSS+ offer image.
					$.log("Connection to mssplus.mcafee.com succeeded... mss not found..." + "return false");
					this.mssPrecheckStatus = false;
					return false;
				}
				else
				{
					// HTTP request failed. Consider MSS+ is already installed.	
					$.log("Connection to mssplus.mcafee.com failed... mss found..." + "return true");
					this.mssPrecheckStatus = true;
					return true;
				}
    			}
		}
		catch(ee){
			$.log("IsInstalled...catch");
			$.log("Connection to mssplus.mcafee.com failed... mss found..." + "return true");
			this.mssPrecheckStatus = true;
			return true;
		}
			
		if (!httpObj) 
		{
			// If the HTTP object creation failed / Open URL failed, Show the MSS+ offer
			$.log("!httpObj..." + "return false");
			return false;
		}
				
		$.log("IsInstalled ... end");		
	}


}
/**
 * $Header: /source/docroot/downloadcenter/js/live/polarbear.mscdetection.js $
 */ 

MscDetection = function(){
	var httpObj = null; 
	var exists = false;
	var mscPrecheckStatus = null;
}

MscDetection.prototype = {

	isInstalled: function(){
		$.log("IsInstalled ... started");
		if(this.mscPrecheckStatus !== null && this.mscPrecheckStatus !== undefined){
			return this.mscPrecheckStatus;
		}
		httpObj = new XMLHttpRequest();
		try{
			$.log("IsInstalled...try");
			// XHR for Chrome/Firefox/Opera/Safari/IE latest versions.	
			var HttpsUrl = 'https://scinstallcheck.mcafee.com/msc.txt';
			
			httpObj.open('HEAD', HttpsUrl,false);
			//httpObj.timeout = 250;
			
			httpObj.send();	
			$.log("isInstalled.httpObj.status= " +httpObj.status );	
			if (httpObj.readyState==4)
			{		
				if(httpObj.status == 200) // HTTP Status 200 OK
				{
				// HTTP request succeeded. Consider MSC is not installed.
				// Show the MSC offer image.
					$.log("Connection to scinstallcheck.mcafee.com succeeded... msc not found..." + "return false");
					this.mscPrecheckStatus = false;
					return false;
				}
				else
				{
					// HTTP request failed. Consider MSC is already installed.	
					$.log("Connection to scinstallcheck.mcafee.com failed... msc found..." + "return true");
					this.mscPrecheckStatus = true;
					return true;
				}	
			}	
			
		}
		catch(ee){
			
			$.log("IsInstalled...catch");
			$.log("Connection to scinstallcheck.mcafee.com failed... msc found..." + "return true");
			this.mscPrecheckStatus = true;
			return true;
		}
		
				
		$.log("IsInstalled ... end");		
	}


}
/**
 * $Header: /source/docroot/downloadcenter/js/live/polarbear.gtbdetection.js $
 */ 
 
 
GtbDetection = function(){
}

GtbDetection.prototype = {
    isInstalled: function(){
		try{
			return this.isVerGTE();
		} catch (err) { return false; }	
    },
	initBho : function() {
		var bInitBho = false;
		var theBho = null;		

		if(!bInitBho) {
			bInitBho = true;
			var y = document.createElement("div");
			var bho = document.createElement("OBJECT");
			bho.width = 1;
			bho.height = 1;
			bho.classid ="clsid:2318C2B1-4965-11d4-9B18-009027A5CD4F";
			bho.id ="bho";
			y.appendChild(bho);

			var bho2 = document.createElement("OBJECT");
			bho2.width = 1;
			bho2.height = 1;
			bho2.classid ="clsid:2318C2B1-4965-11d4-9B18-009027A5CD4F";
			bho2.id ="bho2";
			y.appendChild( bho2 );

			if (null != bho2 && "undefined" != typeof(bho2) && null != bho2.object) {
				theBho = bho2;
			} else if (null != bho && "undefined" != typeof(bho) && null != bho.object) {
				theBho = bho;
			}
		}
		return theBho;
	},
	isVerGTE : function() {
		var PlatformDist = "none";
		var PlatformArch = "x86-32";

		if (navigator.userAgent.indexOf("Windows NT 10.0") != -1) { PlatformDist = "Windows 10";}
		if (navigator.userAgent.indexOf("Windows NT 6.2") != -1) { PlatformDist = "Windows 8";}
		if (navigator.userAgent.indexOf("Windows NT 6.1") != -1) { PlatformDist = "Windows 7";}	
		if (navigator.userAgent.indexOf("Windows NT 6.0") != -1) { PlatformDist = "Vista";}		
		if (navigator.userAgent.indexOf("WOW64") == -1 && navigator.userAgent.indexOf("Win64") != -1) {
			//alert ("Metro mode.  Make Dual GTB/Chrome offer.");
			return false;
		} 
		else {
			var isToolbarFound = false;
			try {
				var theBho = this.initBho();
				if (null != theBho) {
					isToolbarFound = true;
				}
			} 
			catch (err) { 
				isToolbarFound = true;
			}
			
			if (isToolbarFound) {
				//alert ("Toolbar already installed; offer only Chrome");
				return true;
			}
			else {
				//alert ("Toolbar not present; dual offer");
				return false;
			}
		}
	}
};


/***
    name: Polarbearpal
    @param store - instace of store.js 
    @param storageKey - name of the key to use
**/
(function(){
    Polarbearpal = function(){
        this.storage = window.store; 
        this.storageKey = "polarbear.pal";
        this.storageKeyRe = "polarbear.re";        
        this.mss = new MssDetection();
        this.msc = new MscDetection();
        this.gtb = new GtbDetection();
    }
        
    Polarbearpal.prototype = {
        _getMss: function(){
            return this.mss;
        },
        _getMsc: function(){
            return this.msc;
        },
        _getGtb: function(){
            return this.gtb;
        },    
        isPal: function(pal){
            if(typeof pal === "undefined" || pal === ""){
                throw new Error("Parameter passed is empty");
            }else if(pal.toUpperCase() === "MSS"){
				var ua = navigator.userAgent;
				if (/MSIE (\d+\.\d+);/.test(ua) && ua.indexOf("Trident/7.0") < 0 && ua.indexOf("Trident/6.0") < 0) {
					return this._find(pal);
				}
                return (this._isMss() || this._find(pal));  
            }else if(pal.toUpperCase() === "CHR"){
                return this._find(pal) && this._findRe("re") === false;
            }else if(pal.toUpperCase() === "GTB"){
                return this._isGtb();  
            }else if(pal.toUpperCase() === "MSC"){
                return this._find(pal);
            }else if(pal.toUpperCase() === "DUAL"){
				if(this._isGtb() || (this._find("chr") && (this._findRe("re") === false))){
					return true;
				}else{
					return false;
				}
            }else if(pal.toUpperCase() === "MDUAL"){
				if(this._isMss() || this._find("msc")){
					return true;
				}else{
					return false;
				}
            }else if(pal.toUpperCase() === "CHROSX"){
				return this._find("chrosx");    
			}else if(pal.toUpperCase() === "LTROSX"){
				return this._find("ltrosx");
			}else if(pal.toUpperCase() === "LTR5"){
				return this._find("ltr5");	   	
            }else {
                throw new Error("Not Implemented for " + pal );
            }
        },
        isStorageEnabled: function(){
            return this.storage.enabled;
        },
        inPal: function(value){
            if(this.isStorageEnabled()){
                try{                    
					if (navigator && (navigator.userAgent.indexOf("Windows NT 10.0") > -1) && (navigator.userAgent.indexOf("Edge") > -1)) {
						jaaulde.utils.cookies.set("pal",value,0,"/",".adobe.com");
					}					
					this.storage.set(this.storageKey, value);
                    return true;
                }catch(err){
                    return false;
                }
            }else{
                return false;
            }
        },
        inRe: function(value){
            if(this.isStorageEnabled()){
                try{
					if (navigator && (navigator.userAgent.indexOf("Windows NT 10.0") > -1) && (navigator.userAgent.indexOf("Edge") > -1)) {
						jaaulde.utils.cookies.set("re",value,0,"/",".adobe.com");
					}
                    this.storage.set(this.storageKeyRe, value);
                    return true;
                }catch(err){
                    return false;
                }
            }else{
                return false;
            }
        },       
        get: function(){
            if(this.isStorageEnabled()){
                try{
					if (navigator && (navigator.userAgent.indexOf("Windows NT 10.0") > -1) && (navigator.userAgent.indexOf("Edge") > -1)) {						
						return jaaulde.utils.cookies.get("pal");
					}
					else { return this.storage.get(this.storageKey); }
                }catch(err){
                    return false;
                }
            }else{
                return false;
            }
        },
        getRe: function(){
            if(this.isStorageEnabled()){
                try{
					if (navigator && (navigator.userAgent.indexOf("Windows NT 10.0") > -1) && (navigator.userAgent.indexOf("Edge") > -1)) {						
						return jaaulde.utils.cookies.get("re");
					}
                    return this.storage.get(this.storageKeyRe);
                }catch(err){
                    return false;
                }
            }else{
                return false;
            }
        },        
        _find: function(pal){
            var pals = this.get();			
            var found = false;            
			if(pals !== undefined && pals !== null && pals !== false){
                if( typeof pals === 'string' ) {
                	pal = '"' + pal + '"';
                    if(pals.indexOf(pal.toUpperCase()) !== -1){
                        found = true;
                    }    
                }else{
                    $.each(pals, function(index, item){
                        if(item.toUpperCase() === pal.toUpperCase()){
                            found = true;
                            return false; // break each loop
                        }    
                    });
                }
            }
            return found;
        },
        _findRe: function(re){
            var re = this.getRe();            
            if(re !== undefined && re !== null && re !== false){
            	if(re === 1){
            		return true;
            	}
            }
            return false;
        },        
        _isMss: function(){
            if(this._isWindowsOS() && this.mss !== null){					
               return this.mss.isInstalled();
			
            }else{
                return false;
            }
			
		},
        _isMsc: function(){
            if(this._isWindowsOS() && this.msc !== null){                   
               return this.msc.isInstalled();
            
            }else{
                return false;
            }
            
        },
		_isGtb: function(){
			 if(this._isWindowsOS() && this.gtb !== null){
					if (navigator && (navigator.userAgent.indexOf("Windows NT 10.0") > -1) && (navigator.userAgent.indexOf("Edge") > -1)) {						
						return true;
					}
                return this.gtb.isInstalled();
             }else{
                return false;
             }
		},
        _isWindowsOS: function(){
            var uaProduct = navigator.userAgent.split(" ")[0];
		    var ua = uaProduct.length > 0 ? navigator.userAgent.replace(uaProduct,""): navigator.userAgent;
            if(ua.indexOf("Windows") >= 0){
				return true;
            }else{
                return false;
            }    
        }
    }    
})();   

/****************************
* polarbear.localehelper.js
*****************************/
(function($){
    var LocaleHelper = function(options){
		var obj = this;
		var settings = $.extend({}, options || {});
        var adobeLanguageMap = {
            reader : [ "en","br","cn","cz","de","dk","es","fi","fr","it","jp","kr","nl","no","se","tw","uk" ],
            flashplayer: ["en", "jp", "fr", "de", "it", "es", "kr", "br", "ru", "nl", "se", "tw", "cn", "cz", "pl", "tr"]
        }
		
		var isoLanguageMap = {
			br : [ "pt" ],
			cn : [ "zh" ],
			de : [ "de" ],
			dk : [ "da" ],
			en : [ "en" ],
			es : [ "es" ],
			fi : [ "fi" ],
			fr : [ "fr" ],
			it : [ "it" ],
			jp : [ "ja" ],
			kr : [ "ko" ],
			nl : [ "nl" ],
			no : [ "no","nb","nn" ],
			ru : [ "ru" ],
			se : [ "sv" ],
            cz : [ "cs" ],
            pl : [ "pl" ],
            tr : [ "tr" ]
            
		};
			
		var isoDialectMap = {
			tw : [ "zh-tw","zh-hk" ],
			uk : [ "en-gb","en-uk" ]
		};
		
		this.getLocaleMap = function(){
			var lMap = {};
			$.each(isoDialectMap, function(key,val){
				$.each(isoDialectMap[key], function(){
					lMap[this] = key;
				});
			});
			$.each(isoLanguageMap, function(key,val){
				$.each(isoLanguageMap[key], function(){
					lMap[this] = key;
				});
			});
			return lMap;
		};
		
		var init = function(){
			var locale = obj.getLocale();
			var path = obj.getPath();
			var patharr = path.split("/");
			if(patharr[1]=== settings.downloadcenter && obj.isValidLocale(settings.downloadcenter, locale) && locale !== "en" ){
				window.location.href = obj.redirect("/" + locale + path);
			}
        }
		
		this.redirect = function(path){
			return $(location).attr("protocol") + "//" + $(location).attr("host") + path + window.location.search;
		}
        
      	this.getPath = function(){
			return $(location).attr("pathname");
		}
		
        this.getLocale = function(){
			var localeMap = obj.getLocaleMap();
			var found = false;
			var locale = "en";
			var navLang = "en-US";
			
			if(navigator.language){
				navLang = navigator.language.toLowerCase();
			}else if(navigator.userLanguage){
				navLang = navigator.systemLanguage.toLowerCase();
			}
			
			try{
				$.each(localeMap,function(key,value){
					if(key === navLang){
						locale = value;
						found = true;
						return;
					}	
				});
				if(!found){
					var navLangLocale = navLang.split("-")[0];
					$.each(localeMap,function(key,value){
						if(key === navLangLocale){
							locale = value;
							found = true;
							return;
						}	
					});
				}
			}catch(err){
				locale = "en";
			}	
			return locale;
        }
        this.isValidLocale = function(product, loc){
			var valid = false;
			var availiableLocales = obj.getAvailableLanguageByProduct(product);
			for(var i=0; i < availiableLocales.length; i++) {
				if (availiableLocales[i] === loc){
					valid = true;
					break;
				}	
			}
			return valid;
		}
		
        this.getAvailableLanguageByProduct = function(product){
            return adobeLanguageMap[product];
        }
		
		init();
    }
    
    $.pbLocaleHelper = function(options){
        return new LocaleHelper(options);
    }
})(jQuery);

/**
 * polarbear.useragent.js
 */
(function($){
	$.pbUserAgent = function(){
		var uaProduct = navigator.userAgent.split(" ")[0];
		var ua = uaProduct.length > 0 ? navigator.userAgent.replace(uaProduct,""): navigator.userAgent; 
		var mobileua = navigator.userAgent.toLowerCase();
		var clientUserAgent = {
			platform_type : undefined,
			platform_dist : undefined,
			platform_misc : undefined,
			platform_arch : undefined,
			browser_type : undefined,
			browser_dist : undefined,
			browser_vers : undefined,
			browser_arch : undefined
		};
		
		var browserDistributionVersion = {
			distribution : undefined,
			version : undefined
		}
		
		init = function(){
			clientUserAgent.platform_type = getPlatformType();
			clientUserAgent.platform_dist = getPlatformDist();
			clientUserAgent.platform_arch = getPlatformArch();
			
			getBrowserDistributionVersion();
			clientUserAgent.browser_type = getBrowserType();
			clientUserAgent.browser_dist = getBrowserDist();
			clientUserAgent.browser_vers = getBrowserVersion();
			clientUserAgent.browser_arch = getBrowserArch();
			clientUserAgent.platform_misc = getPlatformMisc();
			
		}
		
		getPlatformType = function(){
			if(ua.indexOf("Windows") >= 0)
				return "Windows";
			if(ua.indexOf("CrOS") >= 0)
				return "Chrome";	
			if(ua.toLowerCase().indexOf("psp") >= 0 || mobileua.toLowerCase().indexOf("psp") >= 0)
				return "PSP";
			if(ua.toLowerCase().indexOf("playstation") >=0 || mobileua.toLowerCase().indexOf("playstation") >= 0)
				return "Playstation";
			if(ua.indexOf("iPhone") >= 0 || mobileua.indexOf("iPhone") >= 0)
				return "iPhone";
			if(ua.indexOf("iPod") >= 0 || mobileua.indexOf("iPod") >= 0) 
				return "iPod";
			if(ua.indexOf("iPad") >= 0 || mobileua.indexOf("iPad") >= 0) 
				return "iPad";				
			if(ua.indexOf("webOS") >= 0 && ua.indexOf("Pre/1.0") >= 0)
  				return "PalmPre";
			if(ua.indexOf("Android 1.") >= 0 || mobileua.toLowerCase().indexOf("android 1.") >= 0) 
				return "UnsupportedMobileDevice";
			if(ua.indexOf("Android 2.") >= 0 || mobileua.toLowerCase().indexOf("android 2.") >= 0) 
				return "Android";
			if(ua.indexOf("Android 3.") >= 0 || mobileua.toLowerCase().indexOf("android 3.") >= 0) 
				return "Android";				
			if(ua.indexOf("Mac") >= 0)
				return "Macintosh";
			if(ua.indexOf("Linux") >= 0)
				return "Linux";
			if(ua.toLowerCase().indexOf("sunos") >= 0)
				return "Solaris";
			if(ua.indexOf("AIX") >= 0)
				return "AIX";
			if(ua.indexOf("HP-UX") >= 0)
				return "HP-UX";
			if(ua.toLowerCase().indexOf("googlebot") >= 0 || ua.toLowerCase().indexOf("msnbot") >= 0
				|| ua.toLowerCase().indexOf("slurp") >= 0 
				|| ua.toLowerCase().indexOf("crawler") >= 0 
				|| ua.toLowerCase().indexOf("seekbot") >= 0 
				|| ua.toLowerCase().indexOf("linkwalker") >= 0 
				|| ua.toLowerCase().indexOf("ia_archiver") >= 0 
				|| ua.toLowerCase().indexOf("atomz") >= 0 
				|| ua.toLowerCase().indexOf("gsa-crawler-www") >= 0) 
				return "Spider";			
           
			// otherwise, return nothing
			return "Unknown";
		};
		
		getPlatformDist = function(comment){
			if(ua.indexOf("Windows NT 10.0") >= 0)
				return "Windows 10";
				
			if(ua.indexOf("Windows NT 6.3") >= 0)
				return "Windows 8";
			
			if(ua.indexOf("Windows NT 6.2") >= 0)
				return "Windows 8";
			
			if(ua.indexOf("Windows NT 6.1") >= 0)
				return "Windows 7";
			
			if(ua.indexOf("Windows NT 6.0") >= 0)
				return "Vista";
			
			// look for XP 32bit OR XP 64bit
			if(ua.match("Windows NT (5\\.1|32)") !== null || (ua.indexOf("Windows NT 5.2") >= 0 && ua.indexOf("Win64") >= 0))
				return "XP";
				
			if(ua.indexOf("Windows NT 5.2") >= 0)
				return "2003";
				
			if(ua.match("Windows (NT 5\\.0|NT 5\\.01|2000)") !== null)
				return "2000";
			
			if(ua.match("Windows (98; Win 9x 4\\.90|ME)") !== null)
				return "ME";
				
			if(ua.indexOf("Windows NT") >= 0)
				return "NT";
			
			if(ua.match("Win(98|dows 98)") !== null)
				return "98";
				
			if(ua.indexOf("Windows CE") >= 0)
				return "CE";
				
			if(ua.toLowerCase().indexOf("mac os x") >= 0)
				return "OSX";
				
			if(ua.indexOf("Mac_PowerPC") >= 0)
				return "OS9";
				
			if(ua.indexOf("Windows 95") >= 0)
				return "95";
				
			if(ua.indexOf("Windows 3.1") >= 0)
				return "3.1";
				
			return "";
				
		};
	
	
		getPlatformArch = function(){
			if(ua.match("(Win64|IA64|AMD64|x64|x86_64|WOW64)") !== null)
				return "x86-64";
				
			if(ua.match("(PPC|Mac_PowerPC)") !== null)
				return "PPC";
				
			if(ua.match("sun4") !== null)
				return "SPARC";
			
			//The default arch should be assumed 32bit x86
			return "x86-32";
		}
		
		getBrowserType = function(){
			if(uaProduct.indexOf("Opera") >= 0 || ua.indexOf("Opera") >= 0 || uaProduct.indexOf("OPR") >= 0 || ua.indexOf("OPR") >= 0)
				return "Opera";
				
			if(ua.indexOf("MSIE") >= 0)
				return "MSIE";
			
			if(ua.match("(Windows NT 10.0|Windows NT 6.3|Windows NT 6.2|Windows NT 6.1)") !== null && ua.indexOf("Trident") >= 0)
				return "MSIE";	
				
			if(ua.indexOf("KHTML") >= 0)
				return "KHTML";
				
			if(ua.indexOf("Gecko") >= 0)
				return "Gecko";
				
			if(ua.indexOf("Mozilla") >= 0)
				return "Netscape";
				
			return "";
		}
		
		getBrowserDistributionVersion = function(){
			switch(getBrowserType()){
				case "Opera":
					browserDistributionVersion.distribution = "OEM";
					var re = new RegExp("Opera/(\\d+)");
					var m = re.exec(navigator.userAgent);
					if(m !== null && m.length >= 3){
						browserDistributionVersion.version = m[1];
					}
					re = new RegExp("Version/(\\d+)");
					m = re.exec(navigator.userAgent);
					if(m !== null && m.length >= 3){
						browserDistributionVersion.version = m[1];
					}
					break;
				case "MSIE":
					browserDistributionVersion.distribution = "OEM";
					if (ua.match("(America Online Browser|AOL)") !== null){
						browserDistributionVersion.distribution  = "AOL";
					}
					
					if(ua.indexOf("MSN") >= 0){
						browserDistributionVersion.distribution= "MSN";	
					}
					var re = new RegExp("MSIE (\\d+)\\.\\d+");
					var m = re.exec(ua);
					if(m !== null){
						browserDistributionVersion.version = m[1];
					}
					
					if(ua.indexOf("Trident/7.0") >= 0  && browserDistributionVersion.distribution === "OEM")
						browserDistributionVersion.version = "11";
					
					if(ua.indexOf("Trident/6.0") >= 0  && browserDistributionVersion.distribution === "OEM")
						browserDistributionVersion.version = "10";	
						
					if(ua.indexOf("Trident/5.0") >= 0  && browserDistributionVersion.distribution === "OEM")
						browserDistributionVersion.version = "9";
					break;
				case "KHTML":
					var re = new RegExp("(GoogleTV)/([\\d\\.]*)");
					var m = re.exec(ua);
					if (m !== null){
						var distver = m[0].split("/");
						browserDistributionVersion.distribution = distver[0];
						browserDistributionVersion.version = distver[distver.length - 1];
					} 
	                else {
						re = new RegExp("(Chrome|Safari|Konqueror)/([\\d\\.]*)");
						m = re.exec(ua);
						if(m !== null){
							var distver = m[0].split("/");
							// get first
							browserDistributionVersion.distribution = distver[0];
							// get last
							browserDistributionVersion.version = distver[distver.length - 1];
	                        if(browserDistributionVersion.distribution.indexOf("Safari") >= 0){
	                        	re = new RegExp("Version/(\\d+)");
								m = re.exec(ua);
								if(m !== null){
									distver = m[0].split("/");
									browserDistributionVersion.version = distver[distver.length - 1];
								}
							}  
						}
					}
					break;
				case "Gecko":
					var re = new RegExp("(Netscape|Firefox|Camino|SeaMonkey)/(\\d+)\\.?\\d+");
					var m = re.exec(ua);
					if(m !== null && m.length >= 3){
						browserDistributionVersion.distribution = m[1];
						browserDistributionVersion.version = m[2];
					}
					break;
				case "Netscape":
					browserDistributionVersion.distribution = "OEM";
					var re = new RegExp("Mozilla/(\\d+)\\.\\d+");
					var m = re.exec(uaProduct);
					if(m !== null){
						browserDistributionVersion.version = m[1];
					}
					break;		 		
			}
		}
		
		getBrowserDist = function(){
			return browserDistributionVersion.distribution;
		}
	
		getBrowserVersion = function(){
			return browserDistributionVersion.version;
		}
		
		getBrowserArch = function(){
			if(ua.match("(Win64|IA64|AMD64|x64|x86_64)") !== null)
				return "x86-64";
				
			return "x86-32";
		}
		getPlatformMisc = function(){
			var platformType = clientUserAgent.platform_type;
			var platformDist = clientUserAgent.platform_dist;
			var browserType = clientUserAgent.browser_type;
			var browserVersion = clientUserAgent.browser_vers;
			
			if(platformType === "Windows") {				
				if(ua.indexOf("SV1") >= 0)
					return "SP2";
					
				if(ua.indexOf("SV1") >= 0 && platformDist === "2003")
					return "SP1";
				
				// MSIE 7 and 8 are only available for SP2 and greater
				// Firefox on XP does not send SP info so we should assume the user has SP2 or better
				if (platformDist === "XP" &&  
						(browserType === "MSIE" && 
						(browserVersion === "7" || browserVersion === "8") ||
						(browserType === "Gecko")))
					return "SP3";
									
			}else if (platformType === "Macintosh"){
				if(ua.indexOf("10.7") >=0 || ua.indexOf("10_7") >=0){
					return "10.7.2";
				}else if(ua.indexOf("10.15") >=0 || ua.indexOf("10_15") >=0){
					return "10.15";
				}else if(ua.indexOf("10.14") >=0 || ua.indexOf("10_14") >=0){
					return "10.14";
				}else if(ua.indexOf("10.13") >=0 || ua.indexOf("10_13") >=0){
					return "10.13";
				}else if(ua.indexOf("10.12") >=0 || ua.indexOf("10_12") >=0){
					return "10.12";	
				}else if(ua.indexOf("10.11") >=0 || ua.indexOf("10_11") >=0){
					return "10.11";
				}else if(ua.indexOf("10.10") >=0 || ua.indexOf("10_10") >=0){
					return "10.10";						
				}else if(ua.indexOf("10.9") >=0 || ua.indexOf("10_9") >=0){
					return "10.9";					
				}else if(ua.indexOf("10.8") >=0 || ua.indexOf("10_8") >=0){
					return "10.8.1";
				}else if(ua.indexOf("10.6.8") >=0 || ua.indexOf("10_6_8") >=0){
					return "10.6.8";	
				}else if(ua.indexOf("10.6") >=0 || ua.indexOf("10_6") >=0){
					return "10.6.5";
				}else if(ua.indexOf("10.5") >=0 || ua.indexOf("10_5") >=0){
					return "10.5.8";
				}else if(ua.indexOf("10.4") >=0 || ua.indexOf("10_4") >=0){
					return "10.4.11";
				}else{
					return "10.4.11";
				}
			}
		}
		
		init();
		
		return {
			getClientUserAgent: function(){
				return clientUserAgent;
			}		
		}
	};
})(jQuery);
PolarbearAppDetection = function(){
	
};

PolarbearAppDetection.prototype = {
		getBestOffer: function(eList, lsoList, businessData){
			var bestOffer = undefined;
			var filteredData = this._filterBusinessData(eList, businessData);
			/**
			 *  Check LSO is full
			 *  a. if default list is not blank then get the first item
			 *  b. if default list is blank then return the first item from addonList
			 */
			if(this._isFull(eList, lsoList)){
				if(filteredData.dList.length !== 0){
					bestOffer = filteredData.dList.split(",")[0];
				}else{
					bestOffer = filteredData.aList.split(",")[0];
				}
			}else{
				// if over list is not empty then return the first element
				if(filteredData.oList.length !== 0){
					bestOffer = filteredData.oList.split(",")[0];
				}else{
					
					//If LSO is empty then take the first element from the addonList 
					if(this._isEmpty(eList, lsoList)){
						bestOffer = filteredData.aList.split(",")[0];
					}else{
						// get the first element from addonList that is not in lso
						var lsoFilteredList = this._getFilteredList(eList, lsoList).split(",");
						var aList = filteredData.aList.split(",");
						var found = false;
						jQuery.each(aList, function(i,v){
							if(!found && lsoFilteredList.indexOf(v) === -1){
								bestOffer = v;
								found = true;
							}
						})
					}
				}
			}
			return bestOffer;
		},
		
		_filterBusinessData: function(eligibleList, businessData){
			var data = {
							"aList" : "",
							"oList" : "",
							"dList" : ""
						};
			var eListArray = eligibleList.split(",");
			var aListArray = businessData.aList.split(",");
			var oListArray = businessData.oList.split(",");
			var dListArray = businessData.dList.split(",");
			
			var aList = [];
			var oList = [];
			var dList = [];
			jQuery.each(aListArray, function(i,v){
				if(eListArray.indexOf(v) !== -1){
					aList.push(v);
				}
			});
			jQuery.each(oListArray, function(i,v){
				if(eListArray.indexOf(v) !== -1){
					oList.push(v);
				}
			});
			jQuery.each(dListArray, function(i,v){
				if(eListArray.indexOf(v) !== -1){
					dList.push(v);
				}
			});
			
			data.aList = aList.join(",");
			data.oList = oList.join(",");
			data.dList = dList.join(",");
			return data;
		},
		_isEmpty: function(eligibleList, compareList){
			if(compareList.split(",").length === 0){
				return true;
			}else{
				var found = false;
				var eListArray = eligibleList.split(",");
				var cArray = compareList.split(",");
				jQuery.each(cArray, function(i,v){
					if(eListArray.indexOf(v) !== -1){
						found = true;
						return false;
					}
				});
				return !found;
			}
		},
		_isFull: function(eligibleList, compareList){
			if(compareList.split(",").length === 0){
				return false;
			}else{
				var found = true;
				var eListArray = eligibleList.split(",");
				var cArray = compareList.split(",");
				jQuery.each(eListArray, function(i,v){
					if(cArray.indexOf(v) === -1){
						found = false;
						return false;
					}
				});
				return found;
			}	
		},
		_getFilteredList: function(eligibleList, compareList){
			var retList = [];
			var eList = eligibleList.split(",");
			var cList = compareList.split(",");
			jQuery.each(cList, function(i,v){
				if(eList.indexOf(v) !== -1){
					retList.push(v);
				}
			});
			return retList.join(",");
		}
}
	function PalDomainStorage(origin, path){
						    this.origin = origin;
						    this.path = path;
						    this._iframe = null;
						    this._iframeReady = false;
						    this._queue = [];
						    this._requests = {};
						    this._id = 0;
	}
	
	PalDomainStorage.prototype = {
	
	    //restore constructor
	    constructor: PalDomainStorage,
	
	    //public interface methods
	
	    init: function(){
	    	var that = this;
	
	        if (!this._iframe){
	            if (window.postMessage){
	                this._iframe = document.createElement("iframe");
	                this._iframe.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;";
	                document.body.appendChild(this._iframe);
	
	                if (window.addEventListener){
	                    this._iframe.addEventListener("load", function(){ that._iframeLoaded(); }, false);
	                    window.addEventListener("message", function(event){ that._handleMessage(event); }, false);
	                } else if (this._iframe.attachEvent){
	                    this._iframe.attachEvent("onload", function(){ that._iframeLoaded(); }, false);
	                    window.attachEvent("onmessage", function(event){ that._handleMessage(event); });
	                }
	            } else {
	                throw new Error("Unsupported browser.");
	            }
	        }
	
	        this._iframe.src = this.origin + this.path;
	    },
	
	    requestValue: function(callback){
	        var request = {
	                id: ++this._id
	            },
	            data = {
	                request: request,
	                callback: callback
	            };
	
	        if (this._iframeReady){
	            this._sendRequest(data);
	        } else {
	            this._queue.push(data);
	        }   
	
	        if (!this._iframe){
	            this.init();
	        }
	    },
	
	    //private methods
	
	    _sendRequest: function(data){
	    	this._requests[data.request.id] = data;
	        this._iframe.contentWindow.postMessage(JSON.stringify(data.request), this.origin);
	    },
	
	    _iframeLoaded: function(){
	        this._iframeReady = true;
	
	        if (this._queue.length){
	            for (var i=0, len=this._queue.length; i < len; i++){
	                this._sendRequest(this._queue[i]);
	            }
	            this._queue = [];
	        }
	    },
	
	    _handleMessage: function(event){
	        if (event.origin == this.origin){
	            var data = JSON.parse(event.data);
	            this._requests[data.id].callback(data.value);
	            delete this._requests[data.id];
	        }
	    }
	};
 
