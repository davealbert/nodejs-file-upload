
/*
 * GET home page.
 */
var fs = require('fs');
var format = require('util').format;

exports.index = function(req, res){
   res.render('index', { title: 'Express' });
};

exports.upload = function(req, res){
   //res.send(format('\nuploaded %s (%d Kb) to %s as %s'
            //, req.files.image.name
            //, req.files.image.size / 1024 | 0
            //, req.files.image.path
            //, req.body.name ));

   fs.readFile(req.files.image.path, function (err, data) {
      var newPath = __dirname + "/../public/uploads/" + req.body.name + '.png';
         fs.writeFile(newPath, data, function (err) {
         res.send('uploaded: ' + newPath);

         fs.unlink(req.files.image.path, function (err) {
           if (err) throw err;
           console.log('successfully deleted' + req.files.image.path);
         });
      });
   });

};
