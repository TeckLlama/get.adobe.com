/*-------------------------------------------------------------------
Name: Single Page PDC - Core JS
$Author: saik $
$DateTime: 2020/10/03 17:24:24 $
$Revision: #9 $
-------------------------------------------------------------------*/

$(function() {
	// Special links setup
	$("a[rel='learnmore']").live('click', function(event) {
		event.preventDefault();
		$("#learnMorePanel").toggle();
		if($("#learnMorePanel").css('display') == 'none'){
			$(".section").height("-=14");
			$(".ContentColumn").height("-=14");
			
		}
		else{
			$(".section").height("+=14");
			$(".ContentColumn").height("+=14");
			
		}
	});
	
	$("a[rel='learnmoregtb']").live('click', function(event) {
		event.preventDefault();
		$("#learnMorePanelGTB").toggle();
		if($("#learnMorePanelGTB").css('display') == 'none'){
			$(".section").height("-=14");
			//$(".ContentColumn").height("-=14");
			$("#AUTO_ID_columnleft_div_01").height("-=14");
			$("#AUTO_ID_columnright_div_01").height("-=14");
		}
		else{
			$(".section").height("+=14");
			//$(".ContentColumn").height("+=14");
			$("#AUTO_ID_columnleft_div_01").height("+=14");
			$("#AUTO_ID_columnright_div_01").height("+=14");
		}
		if (locale === 'en') 
			var height = 100;
		else if (locale === 'ru')
			var height = 200;
		else
			var height = 150;
		if ($("#learnMorePanelGTB").css('display') == 'block') {
			if(($("#learnMorePanelChrome").css('display') == 'block') &&
		   	($("#learnMorePanelChromeExt").css('display') == 'block')) {
				//alert("MSS block NO CHANGE IN HEIGHT");
			} else if (($("#learnMorePanelChrome").css('display') == 'block') ||
		   	($("#learnMorePanelChromeExt").css('display') == 'block')) {
				var heightSec = $(".section").height();
				heightSec += height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft += height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight += height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				
				//$(".section").height("+=height");
				//$("#AUTO_ID_columnleft_div_01").height("+=height");
				//$("#AUTO_ID_columnright_div_01").height("+=height");
				//alert("MSS block increase IN HEIGHT");
			} 
		} else if ($("#learnMorePanelGTB").css('display') == 'none') {
			if(
				(($("#learnMorePanelChrome").css('display') == 'none') &&
		   		($("#learnMorePanelChromeExt").css('display') == 'none')) || 
				(($("#learnMorePanelChrome").css('display') == 'block') &&
		   		($("#learnMorePanelChromeExt").css('display') == 'block'))) {
				//alert("MSS none NO CHANGE IN HEIGHT");
			} else if ((($("#learnMorePanelChrome").css('display') == 'block') ||
		   		($("#learnMorePanelChromeExt").css('display') == 'block'))) {
				var heightSec = $(".section").height();
				heightSec -= height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft -= height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight -= height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				
				/*$(".section").height("-=height");
				$("#AUTO_ID_columnleft_div_01").height("-=height");
				$("#AUTO_ID_columnright_div_01").height("-=height");*/
				//alert("MSS none decrease IN HEIGHT");	   
			}
		}
	});
	
	$("a[rel='learnmorechr']").live('click', function(event) {
		event.preventDefault();
		$("#learnMorePanelChrome").toggle();
		if($("#learnMorePanelChrome").css('display') == 'none'){
			$(".section").height("-=14");
			//$(".ContentColumn").height("-=14");
			$("#AUTO_ID_columnleft_div_01").height("-=14");
			$("#AUTO_ID_columnright_div_01").height("-=14");
		}
		else{
			$(".section").height("+=14");
			//$(".ContentColumn").height("+=14");
			$("#AUTO_ID_columnleft_div_01").height("+=14");
			$("#AUTO_ID_columnright_div_01").height("+=14");
		}
		if (locale === 'en') 
			var height = 100;
		else if (locale === 'ru')
			var height = 200;
		else
			var height = 150;
		if ($("#learnMorePanelChrome").css('display') == 'block') {
			if(($("#learnMorePanelGTB").css('display') == 'block') &&
		   	($("#learnMorePanelChromeExt").css('display') == 'block')) {
				//alert("MSS block NO CHANGE IN HEIGHT");
			} else if (($("#learnMorePanelGTB").css('display') == 'block') ||
		   	($("#learnMorePanelChromeExt").css('display') == 'block')) {
				var heightSec = $(".section").height();
				heightSec += height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft += height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight += height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				/*$(".section").height("+=height");
				$("#AUTO_ID_columnleft_div_01").height("+=height");
				$("#AUTO_ID_columnright_div_01").height("+=height");*/
				//alert("MSS block increase IN HEIGHT");
			} 
		} else if ($("#learnMorePanelChrome").css('display') == 'none') {
			if(
				(($("#learnMorePanelGTB").css('display') == 'none') &&
		   		($("#learnMorePanelChromeExt").css('display') == 'none')) || 
				(($("#learnMorePanelGTB").css('display') == 'block') &&
		   		($("#learnMorePanelChromeExt").css('display') == 'block'))) {
				//alert("MSS none NO CHANGE IN HEIGHT");
			} else if ((($("#learnMorePanelGTB").css('display') == 'block') ||
		   		($("#learnMorePanelChromeExt").css('display') == 'block'))) {
				var heightSec = $(".section").height();
				heightSec -= height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft -= height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight -= height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				
				/*$(".section").height("-=height");
				$("#AUTO_ID_columnleft_div_01").height("-=height");
				$("#AUTO_ID_columnright_div_01").height("-=height");*/
				//alert("MSS none decrease IN HEIGHT");	   
			}
		}
	});
	
	$("a[rel='learnmoremss']").live('click', function(event) {
		event.preventDefault();
		$("#learnMorePanelMss").toggle();
		if($("#learnMorePanelMss").css('display') == 'none'){
			$(".section").height("-=14");
			//$(".ContentColumn").height("-=14");
			$("#AUTO_ID_columnleft_div_01").height("-=14");
			$("#AUTO_ID_columnright_div_01").height("-=14");
		}
		else{
			$(".section").height("+=14");
			//$(".ContentColumn").height("+=14");
			$("#AUTO_ID_columnleft_div_01").height("+=14");
			$("#AUTO_ID_columnright_div_01").height("+=14");
		}
		if (locale === 'en') 
			var height = 100;
		else if (locale === 'ru')
			var height = 200;
		else
			var height = 150;	
		if ($("#learnMorePanelMss").css('display') == 'block') {
			if(($("#learnMorePanelMsc").css('display') == 'block') &&
		   	($("#learnMorePanelChromeExt").css('display') == 'block')) {
				//alert("MSS block NO CHANGE IN HEIGHT");
			} else if (($("#learnMorePanelMsc").css('display') == 'block') ||
		   	($("#learnMorePanelChromeExt").css('display') == 'block')) {
				/*$(".section").height("+=height");
				$("#AUTO_ID_columnleft_div_01").height("+=height");
				$("#AUTO_ID_columnright_div_01").height("+=height");*/
				var heightSec = $(".section").height();
				heightSec += height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft += height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight += height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				//alert("MSS block increase IN HEIGHT");
			} 
		} else if ($("#learnMorePanelMss").css('display') == 'none') {
			if(
				(($("#learnMorePanelMsc").css('display') == 'none') &&
		   		($("#learnMorePanelChromeExt").css('display') == 'none')) || 
				(($("#learnMorePanelMsc").css('display') == 'block') &&
		   		($("#learnMorePanelChromeExt").css('display') == 'block'))) {
				//alert("MSS none NO CHANGE IN HEIGHT");
			} else if ((($("#learnMorePanelMsc").css('display') == 'block') ||
		   		($("#learnMorePanelChromeExt").css('display') == 'block'))) {
				var heightSec = $(".section").height();
				heightSec -= height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft -= height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight -= height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				
				/*$(".section").height("-=height");
				$("#AUTO_ID_columnleft_div_01").height("-=height");
				$("#AUTO_ID_columnright_div_01").height("-=height");*/
				//alert("MSS none decrease IN HEIGHT");	   
			}
		}
	});
	
	$("a[rel='learnmoremsc']").live('click', function(event) {
		event.preventDefault();
		$("#learnMorePanelMsc").toggle();
		if($("#learnMorePanelMsc").css('display') == 'none'){
			$(".section").height("-=14");
			//$(".ContentColumn").height("-=14");
			$("#AUTO_ID_columnleft_div_01").height("-=14");
			$("#AUTO_ID_columnright_div_01").height("-=14");
		}
		else{
			$(".section").height("+=14");
			//$(".ContentColumn").height("+=14");
			$("#AUTO_ID_columnleft_div_01").height("+=14");
			$("#AUTO_ID_columnright_div_01").height("+=14");
		}
		if (locale === 'en') 
			var height = 100;
		else if (locale === 'ru')
			var height = 200;
		else
			var height = 150;
		if ($("#learnMorePanelMsc").css('display') == 'block') {
			if(($("#learnMorePanelChromeExt").css('display') == 'block') &&
		   	($("#learnMorePanelMss").css('display') == 'block')) {
				//alert("MSC block NO CHANGE IN HEIGHT");
			} else if (($("#learnMorePanelChromeExt").css('display') == 'block') ||
		   	($("#learnMorePanelMss").css('display') == 'block')) {
				var heightSec = $(".section").height();
				heightSec += height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft += height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight += height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				/*$(".section").height("+=height");
				$("#AUTO_ID_columnleft_div_01").height("+=height");
				$("#AUTO_ID_columnright_div_01").height("+=height");*/
				
				//alert("MSC block increase IN HEIGHT");
			} 
		} else if ($("#learnMorePanelMsc").css('display') == 'none') {
			if(
				(($("#learnMorePanelChromeExt").css('display') == 'none') &&
		   		($("#learnMorePanelMss").css('display') == 'none')) || 
				(($("#learnMorePanelChromeExt").css('display') == 'block') &&
		   		($("#learnMorePanelMss").css('display') == 'block'))) {
				//alert("MSC none NO CHANGE IN HEIGHT");
			} else if ((($("#learnMorePanelChromeExt").css('display') == 'block') ||
		   		($("#learnMorePanelMss").css('display') == 'block'))) {
				var heightSec = $(".section").height();
				heightSec -= height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft -= height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight -= height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				
				/*$(".section").height("-=height");
				$("#AUTO_ID_columnleft_div_01").height("-=height");
				$("#AUTO_ID_columnright_div_01").height("-=height");*/
				//alert("MSC none decrease IN HEIGHT");	   
			}
		}
	});
	
	$("a[rel='learnmorechrext']").live('click', function(event) {
		event.preventDefault();
		$("#learnMorePanelChromeExt").toggle();
		if($("#learnMorePanelChromeExt").css('display') == 'none'){
			$(".section").height("-=8");
			$("#AUTO_ID_columnleft_div_01").height("-=8");
			$("#AUTO_ID_columnright_div_01").height("-=8");
			//$(".ContentColumn").height("-=8");
		}
		else{
			$(".section").height("+=8");
			//$(".ContentColumn").height("+=8");
			$("#AUTO_ID_columnleft_div_01").height("+=8");
			$("#AUTO_ID_columnright_div_01").height("+=8");
		}
		if (locale === 'en') 
			var height = 100;
		else if (locale === 'ru')
			var height = 200;
		else
			var height = 150;
		if ($("#learnMorePanelChromeExt").css('display') == 'block') {
			if(($("#learnMorePanelMsc").css('display') == 'block') &&
		   	($("#learnMorePanelMss").css('display') == 'block')) {
				//alert("CHRM block NO CHANGE IN HEIGHT");
			} else if (($("#learnMorePanelMsc").css('display') == 'block') ||
		   	($("#learnMorePanelMss").css('display') == 'block')) {
				var heightSec = $(".section").height();
				heightSec += height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft += height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight += height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				/*$(".section").height("+=height");
				$("#AUTO_ID_columnleft_div_01").height("+=height");
				$("#AUTO_ID_columnright_div_01").height("+=height");*/
				//alert("CHR block increase IN HEIGHT");
			} 
		} else if ($("#learnMorePanelChromeExt").css('display') == 'none') {
			if(
				(($("#learnMorePanelMsc").css('display') == 'none') &&
		   		($("#learnMorePanelMss").css('display') == 'none')) || 
				(($("#learnMorePanelMsc").css('display') == 'block') &&
		   		($("#learnMorePanelMss").css('display') == 'block'))) {
				//alert("CHR none NO CHANGE IN HEIGHT");
			} else if ((($("#learnMorePanelMsc").css('display') == 'block') ||
		   		($("#learnMorePanelMss").css('display') == 'block'))) {
				var heightSec = $(".section").height();
				heightSec -= height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft -= height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight -= height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				/*$(".section").height("-=height");
				$("#AUTO_ID_columnleft_div_01").height("-=height");
				$("#AUTO_ID_columnright_div_01").height("-=height");*/
				//alert("CHR none decrease IN HEIGHT");	   
			}
		}
		
		if ($("#learnMorePanelChromeExt").css('display') == 'block') {
			if(($("#learnMorePanelGTB").css('display') == 'block') &&
		   	($("#learnMorePanelChrome").css('display') == 'block')) {
				//alert("CHRM block NO CHANGE IN HEIGHT");
			} else if (($("#learnMorePanelGTB").css('display') == 'block') ||
		   	($("#learnMorePanelChrome").css('display') == 'block')) {
				var heightSec = $(".section").height();
				heightSec += height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft += height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight += height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				/*$(".section").height("+=height");
				$("#AUTO_ID_columnleft_div_01").height("+=height");
				$("#AUTO_ID_columnright_div_01").height("+=height");*/
				//alert("CHR block increase IN HEIGHT");
			} 
		} else if ($("#learnMorePanelChromeExt").css('display') == 'none') {
			if(
				(($("#learnMorePanelGTB").css('display') == 'none') &&
		   		($("#learnMorePanelChrome").css('display') == 'none')) || 
				(($("#learnMorePanelGTB").css('display') == 'block') &&
		   		($("#learnMorePanelChrome").css('display') == 'block'))) {
				//alert("CHR none NO CHANGE IN HEIGHT");
			} else if ((($("#learnMorePanelGTB").css('display') == 'block') ||
		   		($("#learnMorePanelChrome").css('display') == 'block'))) {
				var heightSec = $(".section").height();
				heightSec -= height;
				$(".section").height(heightSec);
				
				var heightColLeft = $("#AUTO_ID_columnleft_div_01").height();
				heightColLeft -= height;
				$("#AUTO_ID_columnleft_div_01").height(heightColLeft);
				
				var heightColRight = $("#AUTO_ID_columnright_div_01").height();
				heightColRight -= height;
				$("#AUTO_ID_columnright_div_01").height(heightColRight);
				/*$(".section").height("-=height");
				$("#AUTO_ID_columnleft_div_01").height("-=height");
				$("#AUTO_ID_columnright_div_01").height("-=height");*/
				//alert("CHR none decrease IN HEIGHT");	   
			}
		}
	});
	
	$("a[rel='eulalearnmore']").live('click', function(event) {
		event.preventDefault();		
		$("#licenseListEula").toggle();
		if($("#licenseListEula").css('display') == 'none'){
			$(".section").height("-=52");
			$(".ContentColumn").height("-=52");
			$(".ContentColumn .ContentBox-Bottom").height("+=52");
		}
		else{
			$(".section").height("+=52");
			$(".ContentColumn").height("+=52");
			$(".ContentColumn .ContentBox-Bottom").height("-=52");
		}
	});
	
	$("a[rel='eulalearnmore_acr']").live('click', function(event) {
		event.preventDefault();		
		$("#licenseListEula_acr").toggle();
		if($("#licenseListEula_acr").css('display') == 'none'){
			$(".section").height("-=57");
			$(".ContentColumn").height("-=57");
			$(".ContentColumn .ContentBox-Top").height("+=57");
		}
		else{
			$(".section").height("+=57");
			$(".ContentColumn").height("+=57");
			$(".ContentColumn .ContentBox-Top").height("-=57");
		}
	});
	
	$("a[rel='installoptions']").live('click', function(event) {
		event.preventDefault();
		
		var dualOfferWidth = 350;		
		if (locale === "hu" || locale === "hr" || locale === "it") 
			dualOfferWidth = 415;
		else if (locale === "cz" || locale === "sk" || locale === "pl" || locale === "es")
			dualOfferWidth = 485;
		else if (locale === "ua")
			dualOfferWidth = 565;
		
		$("#dualOfferInstallOptions").dialog({
			dialogClass: "close-button", 
			modal: true, 
			minWidth: dualOfferWidth, 
			minHeight: 110,
			open: function() {
				$(".ui-widget-overlay").bind('click', function() {
					$("#dualOfferInstallOptions").dialog('close');
				});
			},
			close: function() {
				$(".ui-widget-overlay").unbind('click');
			}
		});
	});

	$("a[rel='modal']").live('click', function(event) {
		event.preventDefault();

		var destURL = $(this).attr("href");
		
		if ($.string(destURL).startsWith('http') || $.string(destURL).startsWith('//'))  {
			handleModal({width: 860, height: 438, external: true, target: "modal-ui", href: this.href, title: this.title});
		}
		else {
			handleModal({width: "auto", height: "auto", external: false, target: "modal-ui", href: this.href, title: this.title});
		}
	});
	
	// Footer Region text change
	var countryCode = $.cookies.get('international');
    if (countryCode) {
        $('#RegionLinkSet').show();
        $('#RegionLink').hide();
    }
    else {
        $('#RegionLinkSet').hide();
        $('#RegionLink').show();
    }
	
	// Region panel click events
	$('#RegionPanel').bind( "clickoutside focusout", function(){
		$('#RegionPanel').hide();
		return false;
	});
	
	$('#RegionLink a, #RegionLinkSet a, #RegionClose').bind( "click", function(){
		$('#RegionPanel').toggle();
		return false;
	});
	
	// Function for changing the region via the Region Panel
	changeRegion = function(regioncode) {
		// Normalize the storeregion cookies and set the cookies with a duration of 1 year
		if ($.string(regioncode).startsWith('be_')) {
			$.cookies.set('international', regioncode, {domain: 'adobe.com', hoursToLive: 8760});
			$.cookies.set('storeregion', 'be', {domain: 'adobe.com', hoursToLive: 8760});
		}
		else if ($.string(regioncode).startsWith('ca')) {
			$.cookies.set('international', regioncode, {domain: 'adobe.com', hoursToLive: 8760});
			$.cookies.set('storeregion', 'ca', {domain: 'adobe.com', hoursToLive: 8760});
		}
		else if ($.string(regioncode).startsWith('eeur')) {
			$.cookies.set('international', regioncode, {domain: 'adobe.com', hoursToLive: 8760});
			$.cookies.set('storeregion', 'eu', {domain: 'adobe.com', hoursToLive: 8760});
		}
		else if ($.string(regioncode).startsWith('hk_')) {
			$.cookies.set('international', regioncode, {domain: 'adobe.com', hoursToLive: 8760});
			$.cookies.set('storeregion', 'cn', {domain: 'adobe.com', hoursToLive: 8760});
		}
		else if ($.string(regioncode).startsWith('lu_')) {
			$.cookies.set('international', regioncode, {domain: 'adobe.com', hoursToLive: 8760});
			$.cookies.set('storeregion', 'lu', {domain: 'adobe.com', hoursToLive: 8760});
		}
		else if ($.string(regioncode).startsWith('uk')) {
			$.cookies.set('international', regioncode, {domain: 'adobe.com', hoursToLive: 8760});
			$.cookies.set('storeregion', 'gb', {domain: 'adobe.com', hoursToLive: 8760});
		}
		else {
			$.cookies.set('international', regioncode, {domain: 'adobe.com', hoursToLive: 8760});
			$.cookies.set('storeregion', regioncode, {domain: 'adobe.com', hoursToLive: 8760});
		}
	
		// Get the URL the user is on
		var currURL = window.location.pathname + window.location.search;
		
		// Remove the CQ pathing and EN locale if present to ensure proper locale detection and redirection
		if ( $.string(currURL).startsWith('/content/dotcom/') ) {
			currURL = currURL.replace('/content/dotcom/','/');
		}
		else if ( $.string(currURL).startsWith('/content/help/') ) {
			currURL = currURL.replace('/content/help/','/');
		}	
	
		if ( $.string(currURL).startsWith('/en/') ) {
			currURL = currURL.replace('/en/','/');
		}	
	
		// Set up an array of all the locales on adobe.com in the WCMS
		var geoArray = ["africa","ap","at","au","be_en","be_fr","be_nl","bg","br","ca","ca_fr","ch_de","ch_fr","ch_it","cn","cz","de","dk","eeurope","ee","en","es","fi","fr","hk_en","hk_zh","hr","hu","ie","il_en","il_he","in","it","jp","kr","la","lt","lu_de","lu_en","lu_fr","lv","mena_ar","mena_en","mena_fr","mx","nl","no","nz","pl","pt","ro","ru","si","se","sea","sk","tr","tw","ua","uk"];
	
		// Go through the array and remove the locale folder path, if present, to know what page to check for
		$.each(geoArray, function() {
			if ($.string(currURL).startsWith('/'+this+'/')) {
				currURL = currURL.replace('/'+this+'/','/');
				return false;
			}
		});
			
		// Build the URLs to redirect the user to:
		// newURL = the URL of the page the user is on in the region they selected
		// homeURL = the URL of the homepage in the region they selected
		if (regioncode != 'us') {
			newURL = "/" + regioncode + currURL;
		}
		else {
			newURL = currURL;
		}
	
		// Check to see if the page we want to send the user to actually exists, and if not, go to the homepage instead
		$.ajax({
			url: newURL,
			type: 'HEAD',
			error:
				function() {
					location.reload();
				},
			success:
				function(){
					window.location = newURL;
				}
		});
	};
});