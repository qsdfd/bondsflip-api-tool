module.exports.convertToNumber = function(obj){
    return convertToType(Number, obj);
}

module.exports.convertToBoolean = function(obj){
    return convertToType(JSON.parse, obj);
}

function convertToType(typeConverterFunc, obj){
    return obj ? typeConverterFunc(obj) : null;
}