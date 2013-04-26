var app = app || {};

(function($) {

    var AnimalList = Backbone.Collection.extend({
        model: app.Animal,

        url: '/animal',

        initialize: function() {
            this.fetch();
        },

        comparator: function(Animal) {
            return Animal.get('id');
        }
    });

    app.animalList = new AnimalList();

})(jQuery);
