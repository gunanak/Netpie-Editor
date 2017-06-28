function file () {
	var example = '../examples/';

	var fs = require('fs');
	var mongoose = require('../db').mongoose;
	var db = mongoose.connection;
	var Grid = require('gridfs-stream');
	Grid.mongo = mongoose.mongo;
	var gfs = Grid(db.db);

	this.getAllFile = function(req,res,next){
		var allfile = [];
		var file = [];
		/* read allfile from local*/
		// fs.readdirSync(example).forEach(file => {
			// if(! /^\..*/.test(file)) {
  				// allfile.push(file);
    		// }
		// })

		/*read allfile from mongo*/
    	//write content to file system
		gfs.files.find({ }).toArray(function (err, files) {
	    if (err) {
	        throw (err);
	    }
	    	return res.json({files})
	  	})
	}

	this.getFileContent = function(req,res,next){
		// console.log(req.params.name);
		var val = req.params.name;
		// console.log(val)
		// fs.readFile(example+val, 'utf8', function (err,data) {
  		// if (err) {
    		// console.log(err);
  		// }
  			// var value = data;
  			// return res.json({value})
		// });

		/*read contentfile */
		// var fs_write_stream = fs.createWriteStream('write.txt');
		var value = '';
		var readstream = gfs.createReadStream({
    		filename: val
		});
		readstream.on('data',function(chuck){
			value += chuck;
		})
        readstream.on("end", function () {
            return res.json({value})
        });
		
	}
}
module.exports = new file();