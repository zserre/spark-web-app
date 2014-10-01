
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'BEERNGIN + Spark.io LED Example' });
};