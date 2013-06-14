document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.splashscreen.show();
}	

function initPuzzlePic() { 
	$(document).bind("mobileinit", function(){
	  //apply overrides here
	});

}

   $('#gallery').live('pageshow',function(event, ui){
	viewGallery();
    });
    
       $('#gallery').live('pagebeforeshow',function(event, ui){
   $('#gallery-content').empty();
    });