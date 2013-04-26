var app = app || {};

$(function($) {

    app.AppView = Backbone.View.extend({
        el: $(window),

        initialize: function() {
            gce.log("App started!");
            var maxView = new app.MaxView();
        }

    });

});
