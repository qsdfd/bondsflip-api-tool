module.exports.getJsonByStringPath = (obj, path) => {
    if(!obj) throw new Error('Response object cannot be undefined or null');
    if(path){
        path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        path = path.replace(/^\./, '');           // strip a leading dot
        let a = path.split('.');

        for (let i = 0, n = a.length; i < n; ++i) {
            try{
                let k = a[i];
                if (k in obj) {
                    obj = obj[k];
                }else{
                    return null;
                }
            }catch(err){
                return null;
            }
        }
    }
    return obj;
};