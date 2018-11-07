const convertToType = (typeConverterFunc, obj) => obj ? typeConverterFunc(obj) : null;

module.exports.convertToNumber = obj => convertToType(Number, obj);
module.exports.convertToBoolean = obj => convertToType(JSON.parse, obj);