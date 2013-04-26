var app = app || {};

(function($) {

    app.Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'test/:name': 'test'
        },

        home: function() {
            new app.AppView();
        },

        test: function(name) {
            this.home();
            gce.log("Router working: " + name);
        }
    });

})(jQuery);
