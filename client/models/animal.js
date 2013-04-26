var app = app || {};

(function($) {

    app.Animal = Backbone.Model.extend({
        defaults: {
            name: "Tiger",
            species: "cat"
        }
    });

})(jQuery);
