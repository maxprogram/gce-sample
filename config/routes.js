module.exports = function(match, resources) {
    resources('/animal', 'animal');

    match('/', 'home#index');

};
