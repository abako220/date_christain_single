'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StateSchema = new Schema({

    lga_data: {
        type: Array,
        meta: {
            enum: [{
                "STATE_ID": "1",
                "STATE": "Abia"
            },
            {
                "STATE_ID": "2",
                "STATE": "Adamawa"
            },
            {
                "STATE_ID": "3",
                "STATE": "Akwa Ibom"
            },
            {
                "STATE_ID": "4",
                "STATE": "Anambra"
            },
            {
                "STATE_ID": "5",
                "STATE": "Bauchi"
            },
            {
                "STATE_ID": "6",
                "STATE": "Bayelsa"
            },
            {
                "STATE_ID": "7",
                "STATE": "Benue"
            },
            {
                "STATE_ID": "8",
                "STATE": "Borno"
            },
            {
                "STATE_ID": "9",
                "STATE": "Cross Rivers"
            },
            {
                "STATE_ID": "10",
                "STATE": "Delta"
            },
            {
                "STATE_ID": "11",
                "STATE": "Ebonyi"
            },
            {
                "STATE_ID": "12",
                "STATE": "Edo"
            },
            {
                "STATE_ID": "13",
                "STATE": "Ekiti"
            },
            {
                "STATE_ID": "14",
                "STATE": "Enugu"
            },
            {
                "STATE_ID": "15",
                "STATE": "FCT"
            },
            {
                "STATE_ID": "16",
                "STATE": "Gombe"
            },
            {
                "STATE_ID": "17",
                "STATE": "Imo"
            },
            {
                "STATE_ID": "18",
                "STATE": "Jigawa"
            },
            {
                "STATE_ID": "19",
                "STATE": "Kaduna"
            },
            {
                "STATE_ID": "20",
                "STATE": "Kano"
            },
            {
                "STATE_ID": "21",
                "STATE": "Katsina"
            },
            {
                "STATE_ID": "22",
                "STATE": "Kebbi"
            },
            {
                "STATE_ID": "23",
                "STATE": "Kogi"
            },
            {
                "STATE_ID": "24",
                "STATE": "Kwara"
            },
            {
                "STATE_ID": "25",
                "STATE": "Lagos"
            },
            {
                "STATE_ID": "26",
                "STATE": "Nasarawa"
            },
            {
                "STATE_ID": "27",
                "STATE": "Niger"
            },
            {
                "STATE_ID": "28",
                "STATE": "Ogun"
            },
            {
                "STATE_ID": "29",
                "STATE": "Ondo"
            },
            {
                "STATE_ID": "30",
                "STATE": "Osun"
            },
            {
                "STATE_ID": "31",
                "STATE": "Oyo"
            },
            {
                "STATE_ID": "32",
                "STATE": "Plateau"
            },
            {
                "STATE_ID": "33",
                "STATE": "Rivers"
            },
            {
                "STATE_ID": "34",
                "STATE": "Sokoto"
            },
            {
                "STATE_ID": "35",
                "STATE": "Taraba"
            },
            {
                "STATE_ID": "36",
                "STATE": "Yobe"
            },
            {
                "STATE_ID": "37",
                "STATE": "Zamfara"
            }
        ]
    }

}
});
var state = mongoose.model('StateModel', StateSchema);
module.exports = state;



