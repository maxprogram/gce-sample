var app = app || {};

$(function() {

    app.HomeView = Backbone.View.extend({
        el: $("#newAnimal"),

        events: {
            "submit": "submit"
        },

        initialize: function() {
            this.listenTo(app.animalList, "reset sync", this.render);
            this.listenTo(app.animalList, "add", this.addOne);

            this.$list = $("<ul/>");
            $("#test").after(this.$list);
        },

        render: function() {
            this.$list.empty();
            app.animalList.each(this.addOne, this);

            gce.success("animalList reset");
            return this;
        },

        addOne: function(animal) {
            var view = new app.AnimalView({ model: animal });
            this.$list.append(view.render().el);
        },

        submit: function(e) {
            app.animalList.create({
                name: this.$("#name").val(),
                species: this.$("#species").val()
            });

            return false;
        }
    });

});
