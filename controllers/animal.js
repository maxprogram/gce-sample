
// GET /animal
exports.index = function(req,res,models) {

    models.Animal.all(function(err, animals) {
        if (err) throw err;
        res.json(animals);
    });

};

// POST /animal
exports.create = function(req,res,models) {

    var data = req.body;
    data.created_at = new Date().toISOString();
    data.updated_at = new Date().toISOString();

    models.Animal.create(data, function(err,animal){
        if (err) throw err;
        res.json(animal);
    });

};

// GET /animal/:id
exports.show = function(req,res,models) {

    var id = req.param('id');
    models.Animal.find(id, function(err,animal) {
        if (err) throw err;
        console.log(JSON.stringify(animal,null,2));
        res.json(animal);
    });

};

// PUT /animal/:id
exports.update = function(req,res,models) {

    var data = req.body, id = req.param('id');
    delete data.id;
    data.updated_at = new Date().toISOString();
    models.Animal.findByIdAndUpdate(id, data, function(err,result){
        if (err) throw err;
        res.json(result);
    });

};

// DELETE /animal/:id
exports.destroy = function(req,res,models) {

    var id = req.param('id');
    models.Animal.findByIdAndRemove(id, function(err){
        if (err) throw err;
    });

};
