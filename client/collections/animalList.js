var app = app || {};

(function($) {

    app.AnimalList = Backbone.Collection.extend({
        model: app.Animal,

        url: '/animal',

        initialize: function() {},

        comparator: function(Animal) {
            return Animal.get('id');
        }
    });

})(jQuery);
