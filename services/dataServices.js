var dataModel = require('../models/dataModel');

var create = (payload, callback) => {
    var data = new dataModel();
    data.name = payload.name;
    data.password = payload.password;
    data.gender = payload.gender
    data.age = payload.age;
    data.info = payload.info;
    data.save(payload, (err, r) => {
        callback(err, r);
    });
}
var find = (criteria, projection, options, callback) => {
    dataModel.find(criteria, projection, options, callback);
}
var updateOne = (query, updation, options, callback) => {
    dataModel.updateOne(query, updation, options, callback);
}
var deleteData = (query, callback) => {
    dataModel.remove(query, callback);
};
module.exports = {
    'create': create,
    'find': find,
    'updateOne': updateOne,
    'delete': deleteData
}