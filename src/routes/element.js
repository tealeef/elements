
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("element " + req.params.id);
};