module.exports.getLastItemOfObject = function(obj){
    let keysArr = Object.keys(obj);
    let lastKey = keysArr[keysArr.length - 1]
    return obj[lastKey];
}

module.exports.mergeTwoObjects = function(obj1, obj2){
    return Object.assign(obj1, obj2);
}
