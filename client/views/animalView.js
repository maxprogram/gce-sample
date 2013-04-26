var app = app || {};

$(function($) {

    app.AnimalView = Backbone.View.extend({
        tagName: "li",

        events: {
            "click .close": "clear",
            "submit form": "update"
        },

        template: app.jst['animal'],

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove);
        },

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        },

        update: function() {
            gce.log("Updating Animal...");
            var newName = this.$("input").val();
            this.model.save({
                name: newName
            });
            return false;
        },

        clear: function() {
            gce.log("Removing Animal...");
            this.model.destroy();
            return false;
        }
    });

});
