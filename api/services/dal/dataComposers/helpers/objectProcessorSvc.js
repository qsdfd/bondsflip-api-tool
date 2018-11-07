module.exports.getLastItemOfObject = (obj) => {
    let keysArr = Object.keys(obj);
    let lastKey = keysArr[keysArr.length - 1]
    return obj[lastKey];
}

module.exports.mergeTwoObjects = (obj1, obj2) => Object.assign(obj1, obj2);
