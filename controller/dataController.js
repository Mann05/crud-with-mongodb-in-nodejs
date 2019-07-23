var service = require('../services/dataServices');
var bcrypt = require('bcrypt');

var create = (payload, callback) => {
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){ return callback(err);}
        else{
            bcrypt.hash(payload.password,salt,(err,encpass)=>{
                if(err){return callback(err);}
                payload.password=encpass;
                service.create(payload, callback);
            });
        }
    });
}
var find = (criteria, projection, options, callback) => {
    service.find(criteria, projection, options, callback);
}
var remove = (query, callback) => {
    service.delete(query, callback);
};
var updateOne = (query, updation, options, callback) => {
    service.updateOne(query, updation, options, callback);
}
module.exports = {
    'create': create,
    'find': find,
    'remove': remove,
    'updateOne': updateOne
}