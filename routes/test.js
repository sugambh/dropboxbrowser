var request = require('request');
exports.list = function(req, res){
	console.log('folder name is'+req.query.folder);
	var folder='?query='+req.query.folder;
	var access_token=user_session.access_token;
	var header_val='Bearer '+access_token;
	var my_url='https://api.dropbox.com/1/search/auto/'+folder;
request({
    url: my_url, //URL to hit
    method: 'GET',
    headers: {
        'Authorization': header_val
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        
    console.log("response is "+body);
    var p=JSON.parse(body);
    var x=p[0];
    if ( typeof(x) !== "undefined" && x !== null ) {
    	if(x.is_dir==false){
    		res.send(req.query.folder+" is not a folder");
    	}
    	else{
    		console.log("Searching for files");

                    var meta_url='https://api.dropbox.com/1/metadata/auto'+x.path;
				    request({
				    url: meta_url, //URL to hit
				    method: 'GET',
				    headers: {
				        'Authorization': header_val
				    }
				  }, function(error, response, body){
				    if(error) {
				        console.log(error);
				    } else {
				        
				    console.log("response from folder search is"+body);
				    var result=body;
				    res.send(result);
                    /*
				    var files=result.contents;
				    if ( typeof(files) !== "undefined" && files !== null ) {


				    	for(var i = 0; i < files.length; i++) {
				    		   if(files[i].is_dir==false){
							    var obj = files[i];

							    console.log(obj.path);
							}
							}

				    }
				    */

				    
				 



				    }
				});






































    	}

    }
    else
    {
    	res.send("please enter a valid folder name !, and enter again");
    }



    }
});

	


};