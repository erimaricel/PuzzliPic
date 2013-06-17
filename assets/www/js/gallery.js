
function viewGallery ()
{
	window.requestFileSystem(LocalFileSystem.TEMPORARY, 0,
		function(fileSys) {
                    var directory = fileSys.root;
					var directoryReader = directory.createReader();
                    var directoryReader = directory.createReader();
						directoryReader.readEntries(function(entries) {
							var i;
							for (i=0; i<entries.length; i++) {
								$("#gallery-content").append("<img class='gallery-image'  id='img"+i+"' src='"+entries[i].fullPath+"'/>"); 
							}

						});

       }, resOnError);
			
}

function resOnError(error)
{
         console.log("Error:"+error.code); 
}



