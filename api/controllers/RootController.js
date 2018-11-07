module.exports = class {
    static respond(req, res){
        this.createResponse(this.createParamModelObj(req))
            .then(data => res.json(data))
            .catch(err => res.json(err));
    };
}