
exports.index = function(req, res, models) {
    models.Animal.all(function(err, animals) {
        if (err) new Error(err);

        res.render('index', {
            title: 'Grand Central Express',
            animals: animals
        });
    });
};
