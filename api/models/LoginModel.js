'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    var loginSchema = new Schema({
        username: {
            type: String,
            unique: true,
            required: [true, 'Username Required']
        },

        password: {
            type: String,
            required: [true, 'Password Required']
        },

        role: {
            type: String,
            required: [true, 'Username Required']
        },

        created_at: Date,
        updated_at: {
            type: Date,
            default: Date.now
        },

        surname: {
            type: String,
            required: [true, 'Surname is Required'],

        },
        first_name: {
            type: String,
            required: [true, 'First_name is Required'],

        },

        other_name: {
            type: String,
            required: [true, 'Other_name is Required'],

        },


    });

var login = mongoose.model('LoginModel', loginSchema);
module.exports = login;
