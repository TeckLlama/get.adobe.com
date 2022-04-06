/*-------------------------------------------------------------------
Name: Single Page PDC - Modal JS
$Author: skattima $
$DateTime: 2013/09/18 09:32:01 $
$Revision: #4 $
-------------------------------------------------------------------*/

/*-- Code based on the WCMS Modal implementation --*/

handleModal = function(config) {
	var currentWindowSize =	{
		width: 0,
		height: 0
	};	
	function handleWindowResize(event) {
		var dimension = event.data.dimension,
		newsize = $(window)[dimension]();		
		if (!dimension) {
			return;
		} 
		if (newsize == currentWindowSize[dimension]) {
			return;
		}
		currentWindowSize[dimension] = newsize;
		var handler = event.data.handler;
		if (!handler) {
			return;
		}
		event.data.handler();
	}
	function getValidDimension(dim, buffer) {
		var out = parseInt(dim),
		finalDim = '';
		if ($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 8.0) {
			// For some reason IE7 always does better calculating the height and width itself
			finalDim = "auto";
		} else {
			if (isNaN(out)) {
				finalDim = "auto";
			} else {
				finalDim = (out + parseInt(buffer));
			}
		}
		return finalDim;
	}
	function createOpenModalHandler(config)	{
		var modal = $("#"+config.target),
		marginWidth = 40,
		marginHeight = 62;
		if (config.external == true ) {
			modal.html('<iframe style="border: 0;" frameborder="0" src="' + config.href + '" width="100%" height="99%"></iframe>').dialog({
				modal: true,
				title: config.title || "",
				height: config.height,
				width: config.width,
				autoOpen: false,
				resizable: false,
				draggable: false,
				closeOnClick: true,
				open: function() {
					// Adjust the width for IE8 with 'auto' config
					if ($.browser.msie && parseFloat($.browser.version) >= 8.0 && isNaN(config.height))	{
						modal.dialog('option','width',(modal.innerWidth() - 20));
						modalRelocate();
					}
					// Adjust the title bar for IE7
					if ($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 8.0) {
						$('.ui-dialog-titlebar').css('width', (modal.parent().innerWidth() - marginWidth));
					}
					// allow closing by clicking outside the modal window
					if (modal.dialog( "option", "closeOnClick" )) {
						$(".ui-widget-overlay").bind('click', function() {
							modal.dialog('close');
						});
					}
				},
				close: function() {
					// Unbind scrolling and window resizing
					$(window).unbind("resize", handleWindowResize);
					// Check for browser scroll events and relocate the modal.
					if ($.browser.msie && parseFloat($.browser.version) <= 7.0)	{
						// Skip scroll events for IE6 & 7
					} else {
						$(window).unbind("scroll", modalRelocate);
					}
					// Reset titlebar dimensions for IE7
					if ($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 8.0) {
						$('.ui-dialog-titlebar').css('width', '');
					}
					// Unbind closing by clicking outside the modal window
					if (modal.dialog( "option", "closeOnClick" )) {
						$(".ui-widget-overlay").unbind('click');
					}
					// empty() and destroy() are kind of broken until jquery 1.8.5
					modal.remove();
				}
			});
		} else {
			modal.dialog({
				modal: true,
				title: config.title || "",
				height: getValidDimension(config.height, marginHeight),
				width: getValidDimension(config.width, marginWidth),
				autoOpen: false,
				resizable: false,
				draggable: false,
				closeOnClick: true,
				open: function() {
					// Adjust the width for IE8 with 'auto' config
					if ($.browser.msie && parseFloat($.browser.version) >= 8.0 && isNaN(config.height))	{
						modal.dialog('option','width',(modal.innerWidth() - 20));
						modalRelocate();
					}
					// Adjust the title bar for IE7
					if ($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 8.0) {
						$('.ui-dialog-titlebar').css('width', (modal.parent().innerWidth() - marginWidth));
					}
					// allow closing by clicking outside the modal window
					if (modal.dialog( "option", "closeOnClick" )) {
						$(".ui-widget-overlay").bind('click', function() {
							modal.dialog('close');
						});
					}
				},
				close: function() {
					// Reset titlebar dimensions for IE7
					if ($.browser.msie && parseFloat($.browser.version) >= 7.0 && parseFloat($.browser.version) < 8.0) {
						$('.ui-dialog-titlebar').css('width', '');
					}
					// Unbind closing by clicking outside the modal window
					if (modal.dialog( "option", "closeOnClick" )) {
						$(".ui-widget-overlay").unbind('click');
					}
					// empty() and destroy() are kind of broken until jquery 1.8.5
					modal.remove();
				}
			});
	}
	function modalRelocate() {
		modal.dialog('option','position',['center','center']);
	}
	function modalLaunch(combinedXObjects,combinedYObjects) {
		var modalX = null,
		modalY = null;
		if (combinedXObjects != null) {
			modalX = ( $(window).width() - combinedXObjects ) / 2;
			modal.dialog('option','width',combinedXObjects);
		}
		if (combinedYObjects != null) {
			modalY = ( $(window).height() - combinedYObjects ) / 2;
			modal.dialog('option','height',combinedYObjects);
		}
		if (modalY != null && modalX != null) {
			modal.dialog('option','position',[modalX,modalY]);
		}
		modal.dialog('open');
	}
	function openModal() {
		if ( config.external == false ) {
			modal.load(config.href, function(response, status) {	
				var external = config.external;	
				if (status == "error" && external == "undefined") {
					return true;
				} else {
					var browserIE = $.browser.msie,
					browserVersion = parseFloat($.browser.version);
					if (browserIE && browserVersion >= 7 && browserVersion < 8) {
						$("#"+config.target).css('width',config.width);
					}
					if (browserIE && browserVersion < 7){
						if ($("#"+config.target + " img").length != 0) {
							var newImg = new Image(),
							combinedXObjects = (newImg.width + marginWidth) - 20,
							combinedYObjects = newImg.height + marginHeight + 11;
							newImg.src = modal.find("img").attr('src');
							modal.dialog('option','width',combinedXObjects);
							modal.dialog('option','height',combinedYObjects);
							modal.dialog('open');
						} else if ($("#"+config.target + " object").length != 0) {
							combinedXObjects = (parseInt($("#"+config.target + " object").attr('width')) + marginWidth) - 20;
							combinedYObjects = parseInt($("#"+config.target + " object").attr('height')) + marginHeight + 8;
							modalLaunch(combinedXObjects,combinedYObjects);
						} else {
							var modalWidth = config.width,
							modalHeight = "auto";
							modal.dialog('option','width',modalWidth);
							modal.dialog('option','height',modalHeight);
							modal.dialog('open');
						}						
					} else {
						modal.dialog('open');
					}
				}
			});
			return false;
			} else {
				modal.dialog('open');
				return false;
			}
		}
		openModal();
	}
	//TOP LEVEL ON LOAD ACTIONS EVERYTHING BEFORE THIS ARE METHODS IN THE MODAL CLOSURE
	if (config === undefined) {
		return;
	}
	currentWindowSize.width = $(window).width();
	if (currentWindowSize.width > (parseInt(config.width) || 0)) {
		// get modal element target from config
		var mid = config.target,
		e = $("#"+mid);
		// create a modal element if none found
		if (e[0] == null) {
			$('<div/>', {id: mid}).appendTo('body');
		}
		createOpenModalHandler(config);
	}
};