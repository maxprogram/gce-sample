var app = app || {};

$(function($) {

    app.AppView = Backbone.View.extend({
        el: $(window),

        initialize: function() {
            gce.log("App started!");

            app.animalList = new app.AnimalList();
            app.homeView = new app.HomeView();
            app.animalList.reset(app.animalListInitial);
        }

    });

});
