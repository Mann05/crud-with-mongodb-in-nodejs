var service = require('../services/dataServices');


var create = (payload, callback) => {
    service.create(payload, callback);
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