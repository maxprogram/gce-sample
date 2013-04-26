//=============================================
///Users/Max/Dropbox/websites/notes+/client/models/animal.js
//=============================================

var app = app || {};

(function($) {

    app.Animal = Backbone.Model.extend({
        defaults: {
            name: "Tiger",
            species: "cat"
        }
    });

})(jQuery);


//=============================================
///Users/Max/Dropbox/websites/notes+/client/collections/animalList.js
//=============================================

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


//=============================================
///Users/Max/Dropbox/websites/notes+/client/views/animalView.js
//=============================================

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


//=============================================
///Users/Max/Dropbox/websites/notes+/client/views/app.js
//=============================================

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


//=============================================
///Users/Max/Dropbox/websites/notes+/client/views/maxView.js
//=============================================

var app = app || {};

$(function($) {

    app.MaxView = Backbone.View.extend({
        el: $("#newAnimal"),

        events: {
            "submit": "submit"
        },

        initialize: function() {
            this.listenTo(app.animalList, "reset", this.render);
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


//=============================================
///Users/Max/Dropbox/websites/notes+/client/routers/router.js
//=============================================

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


//=============================================
///Users/Max/Dropbox/websites/notes+/client/templates/animal.hbs
//=============================================

var app = app || {};
(function(){
app.jst = app.jst || {};
app.jst["animal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<b>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b> (<i>";
  if (stack1 = helpers.species) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.species; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</i>)\r\n<form>\r\n    <input type=\"text\" placeholder=\"Update name\">\r\n    <input type=\"submit\" value=\">\">\r\n</form>\r\n<input type=\"button\" class=\"close\" value=\"X\">\r\n";
  return buffer;
  });
Handlebars.partials["animal"] = app.jst["animal"];
})();

//=============================================
///Users/Max/Dropbox/websites/notes+/client/app.js
//=============================================

//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree ./templates

var app = app || {};

(function($) {

    $(function () {
        app.router = new app.Router();
        Backbone.history.start();
    });

})(jQuery);


// Line numbers for debugging
var gce = gce || {};
gce.files = gce.files || {};
gce.files['/javascripts/app.js'] = [["models/animal.js","collections/animalList.js","views/animalView.js","views/app.js","views/maxView.js","routers/router.js","templates/animal.hbs","app.js"], [13,22,42,16,44,22,22,17]];