function getReaderVersion() {
	
	/*********** IE **************/
	try { 
		// used by Adobe Reader version 7 and later 
		return getVersionForOmniture( getVersionViaActiveX('AcroPDF.PDF') );
	} catch (e) {};
	
	try { 
		// used by version 6 and earlier
		return getVersionForOmniture( getVersionViaActiveX('PDF.PdfCtrl') );
	} catch (e) {};
	
	/**** FF, Safari & Chrome *****/
	try { 
		var browserPlugins = window.navigator.plugins;
		for (var i = 0; i <= browserPlugins.length; i++) {
			if ( browserPlugins[i].name.match(/Adobe Acrobat/)) {
				var versionString = browserPlugins[i].description.split(" ").pop();
				return getVersionForOmniture(versionString);
			} 
		}
	} catch(e) {};
	
	return getNoReader()
}

function getVersionViaActiveX( PDFString ) {
	var objReader = new ActiveXObject(PDFString);
	
	var versionNumbers = [ 'x', 'x', 'x' ];
	
	// something like Accessibility=10.1.
	var firstKeyValuePair = objReader.GetVersions().split(',')[0].split('=');
	
	for (var i = 0; i <= firstKeyValuePair.length; i++) {
		if ( i == 1 ) {
			
			// get plugin version number string
			var intPluginVersion = new Number( parseFloat(firstKeyValuePair[i]) );
			var fullVersion = new String( intPluginVersion );
			
			// make string into an array
			var versionElements = fullVersion.split('.');
			
			for (var ii = 0; ii <= ( versionElements.length-1 ); ii++ ) {
				
				versionNumbers[ii] = versionElements[ii];
			}
		}
	}
	return versionNumbers.join('.');
}

function getNoReader() {
	return "No Reader";
}

function getVersionForOmniture(versionString) {
	var versionNumbers = versionString.split('.');
	
	if (versionNumbers.length >= 2) {
		return "Reader " + versionNumbers[0] + "." + versionNumbers[1];
	} 
	return getNoReader();
}

// for omniture
try { var s_prop5 = getReaderVersion(); } catch (e) {}