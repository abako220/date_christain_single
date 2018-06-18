'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    var userSchema = new Schema({
                name: String,
                username: {
                    type: String,
                    required: [true,'Username is Required'],
                    unique: true
                },
                password: {
                    type: String,
                    required: [true,'Password is Required']
                },
                
                isActive: Boolean,
                location: String,

                meta:{
                    age:{
                        type:Number, 
                        required:[true,'Age is Required'],
                        max:[3, 'Age Must not be More Than Three Digits'], 
                        min:[2, 'Age must be two or three Digits'], 
                        default:0
                        },

                    email: {
                        type: String,
                        required: true,
                        min: 4,
                        unique: true,
                        lowercase: true,
                        trim: true
                    },
                    height:{type: Float32Array, required:true, max:4},
                    colour:{type: String, required:true},
                    phoneNumber: {
                        type: String,
                        validate: {
                            validator: function (v) {
                                return /\d{3}-\d{3}-\d{4}/.test(v);
                            },
                            message: '{VALUE} is not a valid phone number!'
                        },
                        required: [true, 'User phone number required']
                    },

                    state:{
                        type: String, 
                        required:[true, 'State is Required']
                          },

                        country: {
                            type: String, 
                            required:[true, 'Country is Required']
                            },

                        lga: {
                            type: String, 
                            required: [true, 'Local Government Area Required']
                            },

                        geneNoType: {
                            enum: ['AA', 'AS', 'SS']},
                        bloodGroup:{
                            enum:['0+', '0-','AB+', 'A+','B+','AB-','A-','B-']},

                        },
                        region: {
                            type: String,
                            required: [true, 'Region is Required']
                        },

                        instagram_name: {
                            type: String,
                            required: [true, 'Instagram name is Required']
                        },

                        imagePath:{
                            type: String,
                            required: [true, 'Required']
                        },

                        userID: {
                            type: String,
                            unique: true
                        },

                        min_desired_age: {
                            type: Number,
                            max: [3, 'Age Cannot be More than 3 Digits'],
                            min: [2, 'Age Cannot be less than 2 Digits'],
                            required: [true, 'Minimum Desired Age is Required']
                        },

                        max_desired_age: {
                            type: Number,
                            max: [3, 'Age Cannot be More than 3 Digits'],
                            min: [2, 'Age Cannot be less than 2 Digits'],
                            required: [true, 'Maximum Desired Age is Required']
                        },

                        Desired_Location: {
                            type: String,
                            required: [true, 'Desired Location is Required']
                        },

                        Desired_State_of_Origin: {
                            type: String,
                            required: [true, 'Desired State of Origin is Required']
                        },
                        Desired_Country: {
                            type: String,
                            required: [true, 'Desired Country is Required']
                        },
                        Desired_Region: {
                            type: String,
                            required: [true, 'Desired Region is Required']
                        },
                        status: String,

                        created_at: Date,
                        updated_at: {
                            type: Date,
                            default: Date.now
                        }


                });

               var User = mongoose.model('UsersModel', userSchema);
               module.exports = User;
