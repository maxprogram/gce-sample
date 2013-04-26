// Animal Model

module.exports = function(val) {
    return {
        name: "Animal",

        schema: {
            name: String,
            species: String,
            created_at: Date,
            updated_at: Date
        },

        methods: {},

        validations: {}
    };
};
