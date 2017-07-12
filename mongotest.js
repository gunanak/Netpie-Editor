var mongo = require("mongoskin");
var ObjectID = mongo.ObjectID;

var db = mongo.db("mongodb://testdb:NETPIE_test_mongo2017@s5.netpie.io:27077/ne$077/netpie_test", {native_parser:true});


var msg, new_id;
var str_uid = '5603f0f31aa3cbaf15c539a8';
var d = new Date();

//insert directory
msg = { '_id' : new ObjectID(),
                                'uid' : new ObjectID(str_uid),
                                'lastupdate' : d.getTime(),
                                'structure' : {
                                   'folder' : [],
                                   'file' : []
                                }
}
db.collection('user_directory').insert(msg, function(err) {     
        if(!err) console.log('insert directory success');
        else console.log('insert directory error : '+err);
        db.close();
});
//insert file
/*db.collection('user_directory').findOne({'uid':new ObjectID(str_uid)}, functi$
        if(!err && ud){ 
                new_id = new ObjectID();
                msg = { '_id' : new_id,
                                                'udid' : ud._id,
                                                'uid' : new ObjectID(str_uid),
                                                'lastupdate' : d.getTime(),
                                                'content' : 'file content',
                                                'filename' : ''
                }
                db.collection('user_file').insert(msg, function(err) {  
                        if(!err){ 
                                console.log('insert file success');
                                db.collection('user_directory').update({'_id':u$
                                                'uid' : new ObjectID(str_uid),
                                                'lastupdate' : d.getTime(),
                                                'content' : 'file content',
                                                'filename' : ''
                }
                db.collection('user_file').insert(msg, function(err) {  
                        if(!err){ 
                                console.log('insert file success');
                                db.collection('user_directory').update({'_id':u$
                                        if(!err) console.log('update directory $
                                        else console.log('update directory erro$
                                        db.close();
                                });     
                        }
                        else{ 
                                console.log('insert file error : '+err);
                                db.close();
                        }
                });
                                        else console.log('update directory erro$
                                        db.close();
                                });     
                        }
                        else{ 
                                console.log('insert file error : '+err);
                                db.close();
                        }
                });
        }
        else{
                console.log('insert directory before : '+err);
                db.close();
        }
});*/

//delete file
/*db.collection('user_directory').findOne({'uid':new ObjectID(str_uid)}, functi$
        if(!err && ud){ 
                var ufid = new ObjectID('...objectID of file...');
                db.collection('user_file').remove({'_id': ufid}, function(err){
                        if(!err){ 
                                console.log('delete file success');

                                db.collection('user_directory').update({'_id':u$
                                        if(!err) console.log('update directory $
                                        else console.log('update directory erro$
                                        db.close();
                                }); 
 }
                        else{
                                console.log('delete file error : '+err);
                                db.close();
                        }
                });
        }
        else{
                console.log('not found directory : '+err);
                db.close();
 }
});*/









