
/*
 * GET users listing.
 */

exports.list = function(req, res){
	 res.redirect('https://www.dropbox.com/1/oauth2/authorize?client_id=&response_type=code&redirect_uri=http://127.0.0.1:3000/db1&state=1234', 301);
};