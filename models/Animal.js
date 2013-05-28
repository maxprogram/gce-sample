// Animal Model

var Model = require('grand-central-express').Model;

module.exports = new Model({

    name: "Animal",

    schema: {
        name: String,
        species: String,
        created_at: Date,
        updated_at: Date
    },

    methods: {},

    validations: {},

    relationships: []

});
