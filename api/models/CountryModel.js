'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountrySchema = new Schema({

    lga_data: {
        type: Array,
        meta: {
            enum: [{
                "country_iso_code": "AD",
                "country_name": "Andorra",
                "priority": "3"
            },
            {
                "country_iso_code": "AE",
                "country_name": "United Arab Emirates",
                "priority": "3"
            },
            {
                "country_iso_code": "AF",
                "country_name": "Afghanistan",
                "priority": "3"
            },
            {
                "country_iso_code": "AG",
                "country_name": "Antigua And Barbuda",
                "priority": "3"
            },
            {
                "country_iso_code": "AI",
                "country_name": "Anguilla",
                "priority": "3"
            },
            {
                "country_iso_code": "AL",
                "country_name": "Albania",
                "priority": "3"
            },
            {
                "country_iso_code": "AM",
                "country_name": "Armenia",
                "priority": "3"
            },
            {
                "country_iso_code": "AN",
                "country_name": "Netherlands Antilles",
                "priority": "3"
            },
            {
                "country_iso_code": "AO",
                "country_name": "Angola",
                "priority": "3"
            },
            {
                "country_iso_code": "AQ",
                "country_name": "Antarctica",
                "priority": "3"
            },
            {
                "country_iso_code": "AR",
                "country_name": "Argentina",
                "priority": "3"
            },
            {
                "country_iso_code": "AS",
                "country_name": "American Samoa",
                "priority": "3"
            },
            {
                "country_iso_code": "AT",
                "country_name": "Austria",
                "priority": "3"
            },
            {
                "country_iso_code": "AU",
                "country_name": "Australia",
                "priority": "3"
            },
            {
                "country_iso_code": "AW",
                "country_name": "Aruba",
                "priority": "3"
            },
            {
                "country_iso_code": "AZ",
                "country_name": "Azerbaijan",
                "priority": "3"
            },
            {
                "country_iso_code": "BA",
                "country_name": "Bosnia And Herzegowina",
                "priority": "3"
            },
            {
                "country_iso_code": "BB",
                "country_name": "Barbados",
                "priority": "3"
            },
            {
                "country_iso_code": "BD",
                "country_name": "Bangladesh",
                "priority": "3"
            },
            {
                "country_iso_code": "BE",
                "country_name": "Belgium",
                "priority": "3"
            },
            {
                "country_iso_code": "BF",
                "country_name": "Burkina Faso",
                "priority": "3"
            },
            {
                "country_iso_code": "BG",
                "country_name": "Bulgaria",
                "priority": "3"
            },
            {
                "country_iso_code": "BH",
                "country_name": "Bahrain",
                "priority": "3"
            },
            {
                "country_iso_code": "BI",
                "country_name": "Burundi",
                "priority": "3"
            },
            {
                "country_iso_code": "BJ",
                "country_name": "Benin",
                "priority": "2"
            },
            {
                "country_iso_code": "BM",
                "country_name": "Bermuda",
                "priority": "3"
            },
            {
                "country_iso_code": "BN",
                "country_name": "Brunei Darussalam",
                "priority": "3"
            },
            {
                "country_iso_code": "BO",
                "country_name": "Bolivia",
                "priority": "3"
            },
            {
                "country_iso_code": "BR",
                "country_name": "Brazil",
                "priority": "3"
            },
            {
                "country_iso_code": "BS",
                "country_name": "Bahamas",
                "priority": "3"
            },
            {
                "country_iso_code": "BT",
                "country_name": "Bhutan",
                "priority": "3"
            },
            {
                "country_iso_code": "BV",
                "country_name": "Bouvet Island",
                "priority": "3"
            },
            {
                "country_iso_code": "BW",
                "country_name": "Botswana",
                "priority": "3"
            },
            {
                "country_iso_code": "BY",
                "country_name": "Belarus",
                "priority": "3"
            },
            {
                "country_iso_code": "BZ",
                "country_name": "Belize",
                "priority": "3"
            },
            {
                "country_iso_code": "CA",
                "country_name": "Canada",
                "priority": "3"
            },
            {
                "country_iso_code": "CC",
                "country_name": "Cocos (Keeling) Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "CD",
                "country_name": "Congo, The Drc",
                "priority": "3"
            },
            {
                "country_iso_code": "CF",
                "country_name": "Central African Republic",
                "priority": "2"
            },
            {
                "country_iso_code": "CG",
                "country_name": "Congo",
                "priority": "3"
            },
            {
                "country_iso_code": "CH",
                "country_name": "Switzerland",
                "priority": "3"
            },
            {
                "country_iso_code": "CI",
                "country_name": "Ivory Coast",
                "priority": "2"
            },
            {
                "country_iso_code": "CK",
                "country_name": "Cook Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "CL",
                "country_name": "Chile",
                "priority": "3"
            },
            {
                "country_iso_code": "CM",
                "country_name": "Cameroon",
                "priority": "2"
            },
            {
                "country_iso_code": "CN",
                "country_name": "China",
                "priority": "3"
            },
            {
                "country_iso_code": "CO",
                "country_name": "Colombia",
                "priority": "3"
            },
            {
                "country_iso_code": "CR",
                "country_name": "Costa Rica",
                "priority": "3"
            },
            {
                "country_iso_code": "CU",
                "country_name": "Cuba",
                "priority": "3"
            },
            {
                "country_iso_code": "CV",
                "country_name": "Cape Verde",
                "priority": "3"
            },
            {
                "country_iso_code": "CX",
                "country_name": "Christmas Island",
                "priority": "3"
            },
            {
                "country_iso_code": "CY",
                "country_name": "Cyprus",
                "priority": "3"
            },
            {
                "country_iso_code": "CZ",
                "country_name": "Czech Republic",
                "priority": "3"
            },
            {
                "country_iso_code": "DE",
                "country_name": "Germany",
                "priority": "3"
            },
            {
                "country_iso_code": "DJ",
                "country_name": "Djibouti",
                "priority": "3"
            },
            {
                "country_iso_code": "DK",
                "country_name": "Denmark",
                "priority": "3"
            },
            {
                "country_iso_code": "DM",
                "country_name": "Dominica",
                "priority": "3"
            },
            {
                "country_iso_code": "DO",
                "country_name": "Dominican Republic",
                "priority": "3"
            },
            {
                "country_iso_code": "DZ",
                "country_name": "Algeria",
                "priority": "3"
            },
            {
                "country_iso_code": "EC",
                "country_name": "Ecuador",
                "priority": "3"
            },
            {
                "country_iso_code": "EE",
                "country_name": "Estonia",
                "priority": "3"
            },
            {
                "country_iso_code": "EG",
                "country_name": "Egypt",
                "priority": "3"
            },
            {
                "country_iso_code": "EH",
                "country_name": "Western Sahara",
                "priority": "3"
            },
            {
                "country_iso_code": "ER",
                "country_name": "Eritrea",
                "priority": "3"
            },
            {
                "country_iso_code": "ES",
                "country_name": "Spain",
                "priority": "3"
            },
            {
                "country_iso_code": "ET",
                "country_name": "Ethiopia",
                "priority": "3"
            },
            {
                "country_iso_code": "FI",
                "country_name": "Finland",
                "priority": "3"
            },
            {
                "country_iso_code": "FJ",
                "country_name": "Fiji",
                "priority": "3"
            },
            {
                "country_iso_code": "FK",
                "country_name": "Falkland Islands (Malvinas)",
                "priority": "3"
            },
            {
                "country_iso_code": "FM",
                "country_name": "Micronesia",
                "priority": "3"
            },
            {
                "country_iso_code": "FO",
                "country_name": "Faroe Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "FR",
                "country_name": "France",
                "priority": "3"
            },
            {
                "country_iso_code": "FX",
                "country_name": "France, Metropolitan",
                "priority": "3"
            },
            {
                "country_iso_code": "GA",
                "country_name": "Gabon",
                "priority": "3"
            },
            {
                "country_iso_code": "GB",
                "country_name": "United Kingdom",
                "priority": "3"
            },
            {
                "country_iso_code": "GD",
                "country_name": "Grenada",
                "priority": "3"
            },
            {
                "country_iso_code": "GE",
                "country_name": "Georgia",
                "priority": "3"
            },
            {
                "country_iso_code": "GF",
                "country_name": "French Guiana",
                "priority": "3"
            },
            {
                "country_iso_code": "GH",
                "country_name": "Ghana",
                "priority": "2"
            },
            {
                "country_iso_code": "GI",
                "country_name": "Gibraltar",
                "priority": "3"
            },
            {
                "country_iso_code": "GL",
                "country_name": "Greenland",
                "priority": "3"
            },
            {
                "country_iso_code": "GM",
                "country_name": "Gambia",
                "priority": "3"
            },
            {
                "country_iso_code": "GN",
                "country_name": "Guinea",
                "priority": "3"
            },
            {
                "country_iso_code": "GP",
                "country_name": "Guadeloupe",
                "priority": "3"
            },
            {
                "country_iso_code": "GQ",
                "country_name": "Equatorial Guinea",
                "priority": "3"
            },
            {
                "country_iso_code": "GR",
                "country_name": "Greece",
                "priority": "3"
            },
            {
                "country_iso_code": "GS",
                "country_name": "South Georgia South Sandwich Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "GT",
                "country_name": "Guatemala",
                "priority": "3"
            },
            {
                "country_iso_code": "GU",
                "country_name": "Guam",
                "priority": "3"
            },
            {
                "country_iso_code": "GW",
                "country_name": "Guinea-Bissau",
                "priority": "3"
            },
            {
                "country_iso_code": "GY",
                "country_name": "Guyana",
                "priority": "3"
            },
            {
                "country_iso_code": "HK",
                "country_name": "Hong Kong",
                "priority": "3"
            },
            {
                "country_iso_code": "HM",
                "country_name": "Heard and Mc Donald Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "HN",
                "country_name": "Honduras",
                "priority": "3"
            },
            {
                "country_iso_code": "HR",
                "country_name": "Croatia",
                "priority": "3"
            },
            {
                "country_iso_code": "HT",
                "country_name": "Haiti",
                "priority": "3"
            },
            {
                "country_iso_code": "HU",
                "country_name": "Hungary",
                "priority": "3"
            },
            {
                "country_iso_code": "ID",
                "country_name": "Indonesia",
                "priority": "3"
            },
            {
                "country_iso_code": "IE",
                "country_name": "Ireland",
                "priority": "3"
            },
            {
                "country_iso_code": "IL",
                "country_name": "Israel",
                "priority": "3"
            },
            {
                "country_iso_code": "IN",
                "country_name": "India",
                "priority": "3"
            },
            {
                "country_iso_code": "IO",
                "country_name": "British Indian Ocean Territory",
                "priority": "3"
            },
            {
                "country_iso_code": "IQ",
                "country_name": "Iraq",
                "priority": "3"
            },
            {
                "country_iso_code": "IR",
                "country_name": "Iran",
                "priority": "3"
            },
            {
                "country_iso_code": "IS",
                "country_name": "Iceland",
                "priority": "3"
            },
            {
                "country_iso_code": "IT",
                "country_name": "Italy",
                "priority": "3"
            },
            {
                "country_iso_code": "JM",
                "country_name": "Jamaica",
                "priority": "3"
            },
            {
                "country_iso_code": "JO",
                "country_name": "Jordan",
                "priority": "3"
            },
            {
                "country_iso_code": "JP",
                "country_name": "Japan",
                "priority": "3"
            },
            {
                "country_iso_code": "KE",
                "country_name": "Kenya",
                "priority": "3"
            },
            {
                "country_iso_code": "KG",
                "country_name": "Kyrgyzstan",
                "priority": "3"
            },
            {
                "country_iso_code": "KH",
                "country_name": "Cambodia",
                "priority": "3"
            },
            {
                "country_iso_code": "KI",
                "country_name": "Kiribati",
                "priority": "3"
            },
            {
                "country_iso_code": "KM",
                "country_name": "Comoros",
                "priority": "3"
            },
            {
                "country_iso_code": "KN",
                "country_name": "Saint Kitts and Nevis",
                "priority": "3"
            },
            {
                "country_iso_code": "KP",
                "country_name": "North Korea",
                "priority": "3"
            },
            {
                "country_iso_code": "KR",
                "country_name": "South Korea",
                "priority": "3"
            },
            {
                "country_iso_code": "KW",
                "country_name": "Kuwait",
                "priority": "3"
            },
            {
                "country_iso_code": "KY",
                "country_name": "Cayman Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "KZ",
                "country_name": "Kazakhstan",
                "priority": "3"
            },
            {
                "country_iso_code": "LA",
                "country_name": "Laos",
                "priority": "3"
            },
            {
                "country_iso_code": "LB",
                "country_name": "Lebanon",
                "priority": "3"
            },
            {
                "country_iso_code": "LC",
                "country_name": "Saint Lucia",
                "priority": "3"
            },
            {
                "country_iso_code": "LI",
                "country_name": "Liechtenstein",
                "priority": "3"
            },
            {
                "country_iso_code": "LK",
                "country_name": "Sri Lanka",
                "priority": "3"
            },
            {
                "country_iso_code": "LR",
                "country_name": "Liberia",
                "priority": "2"
            },
            {
                "country_iso_code": "LS",
                "country_name": "Lesotho",
                "priority": "3"
            },
            {
                "country_iso_code": "LT",
                "country_name": "Lithuania",
                "priority": "3"
            },
            {
                "country_iso_code": "LU",
                "country_name": "Luxembourg",
                "priority": "3"
            },
            {
                "country_iso_code": "LV",
                "country_name": "Latvia",
                "priority": "3"
            },
            {
                "country_iso_code": "LY",
                "country_name": "Libya",
                "priority": "3"
            },
            {
                "country_iso_code": "MA",
                "country_name": "Morocco",
                "priority": "3"
            },
            {
                "country_iso_code": "MC",
                "country_name": "Monaco",
                "priority": "3"
            },
            {
                "country_iso_code": "MD",
                "country_name": "Moldova",
                "priority": "3"
            },
            {
                "country_iso_code": "ME",
                "country_name": "Montenegro",
                "priority": "3"
            },
            {
                "country_iso_code": "MG",
                "country_name": "Madagascar",
                "priority": "3"
            },
            {
                "country_iso_code": "MH",
                "country_name": "Marshall Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "MK",
                "country_name": "Macedonia",
                "priority": "3"
            },
            {
                "country_iso_code": "ML",
                "country_name": "Mali",
                "priority": "3"
            },
            {
                "country_iso_code": "MM",
                "country_name": "Myanmar",
                "priority": "3"
            },
            {
                "country_iso_code": "MN",
                "country_name": "Mongolia",
                "priority": "3"
            },
            {
                "country_iso_code": "MO",
                "country_name": "Macau",
                "priority": "3"
            },
            {
                "country_iso_code": "MP",
                "country_name": "Northern Mariana Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "MQ",
                "country_name": "Martinique",
                "priority": "3"
            },
            {
                "country_iso_code": "MR",
                "country_name": "Mauritania",
                "priority": "3"
            },
            {
                "country_iso_code": "MS",
                "country_name": "Montserrat",
                "priority": "3"
            },
            {
                "country_iso_code": "MT",
                "country_name": "Malta",
                "priority": "3"
            },
            {
                "country_iso_code": "MU",
                "country_name": "Mauritius",
                "priority": "3"
            },
            {
                "country_iso_code": "MV",
                "country_name": "Maldives",
                "priority": "3"
            },
            {
                "country_iso_code": "MW",
                "country_name": "Malawi",
                "priority": "3"
            },
            {
                "country_iso_code": "MX",
                "country_name": "Mexico",
                "priority": "3"
            },
            {
                "country_iso_code": "MY",
                "country_name": "Malaysia",
                "priority": "3"
            },
            {
                "country_iso_code": "MZ",
                "country_name": "Mozambique",
                "priority": "3"
            },
            {
                "country_iso_code": "NA",
                "country_name": "Namibia",
                "priority": "3"
            },
            {
                "country_iso_code": "NC",
                "country_name": "New Caledonia",
                "priority": "3"
            },
            {
                "country_iso_code": "NE",
                "country_name": "Niger",
                "priority": "2"
            },
            {
                "country_iso_code": "NF",
                "country_name": "Norfork Island",
                "priority": "3"
            },
            {
                "country_iso_code": "NG",
                "country_name": "Nigeria",
                "priority": "1"
            },
            {
                "country_iso_code": "NI",
                "country_name": "Nicaragua",
                "priority": "3"
            },
            {
                "country_iso_code": "NL",
                "country_name": "Netherlands",
                "priority": "3"
            },
            {
                "country_iso_code": "NO",
                "country_name": "Norway",
                "priority": "3"
            },
            {
                "country_iso_code": "NP",
                "country_name": "Nepal",
                "priority": "3"
            },
            {
                "country_iso_code": "NR",
                "country_name": "Nauru",
                "priority": "3"
            },
            {
                "country_iso_code": "NU",
                "country_name": "Niue",
                "priority": "3"
            },
            {
                "country_iso_code": "NZ",
                "country_name": "New Zealand",
                "priority": "3"
            },
            {
                "country_iso_code": "OM",
                "country_name": "Oman",
                "priority": "3"
            },
            {
                "country_iso_code": "PA",
                "country_name": "Panama",
                "priority": "3"
            },
            {
                "country_iso_code": "PE",
                "country_name": "Peru",
                "priority": "3"
            },
            {
                "country_iso_code": "PF",
                "country_name": "French Polynesia",
                "priority": "3"
            },
            {
                "country_iso_code": "PG",
                "country_name": "Papua New Guinea",
                "priority": "3"
            },
            {
                "country_iso_code": "PH",
                "country_name": "Philippines",
                "priority": "3"
            },
            {
                "country_iso_code": "PK",
                "country_name": "Pakistan",
                "priority": "3"
            },
            {
                "country_iso_code": "PL",
                "country_name": "Poland",
                "priority": "3"
            },
            {
                "country_iso_code": "PM",
                "country_name": "St. Pierre and Miquelon",
                "priority": "3"
            },
            {
                "country_iso_code": "PN",
                "country_name": "Pitcairn",
                "priority": "3"
            },
            {
                "country_iso_code": "PR",
                "country_name": "Puerto Rico",
                "priority": "3"
            },
            {
                "country_iso_code": "PT",
                "country_name": "Portugal",
                "priority": "3"
            },
            {
                "country_iso_code": "PW",
                "country_name": "Palau",
                "priority": "3"
            },
            {
                "country_iso_code": "PY",
                "country_name": "Paraguay",
                "priority": "3"
            },
            {
                "country_iso_code": "QA",
                "country_name": "Qatar",
                "priority": "3"
            },
            {
                "country_iso_code": "RE",
                "country_name": "Reunion",
                "priority": "3"
            },
            {
                "country_iso_code": "RO",
                "country_name": "Romania",
                "priority": "3"
            },
            {
                "country_iso_code": "RS",
                "country_name": "Serbia",
                "priority": "3"
            },
            {
                "country_iso_code": "RU",
                "country_name": "Russian",
                "priority": "3"
            },
            {
                "country_iso_code": "RW",
                "country_name": "Rwanda",
                "priority": "3"
            },
            {
                "country_iso_code": "SA",
                "country_name": "Saudi Arabia",
                "priority": "3"
            },
            {
                "country_iso_code": "SB",
                "country_name": "Solomon Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "SC",
                "country_name": "Seychelles",
                "priority": "3"
            },
            {
                "country_iso_code": "SD",
                "country_name": "Sudan",
                "priority": "3"
            },
            {
                "country_iso_code": "SE",
                "country_name": "Sweden",
                "priority": "3"
            },
            {
                "country_iso_code": "SG",
                "country_name": "Singapore",
                "priority": "3"
            },
            {
                "country_iso_code": "SH",
                "country_name": "St. Helena",
                "priority": "3"
            },
            {
                "country_iso_code": "SI",
                "country_name": "Slovenia",
                "priority": "3"
            },
            {
                "country_iso_code": "SJ",
                "country_name": "Svalbarn and Jan Mayen Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "SK",
                "country_name": "Slovakia",
                "priority": "3"
            },
            {
                "country_iso_code": "SL",
                "country_name": "Sierra Leone",
                "priority": "3"
            },
            {
                "country_iso_code": "SM",
                "country_name": "San Marino",
                "priority": "3"
            },
            {
                "country_iso_code": "SN",
                "country_name": "Senegal",
                "priority": "3"
            },
            {
                "country_iso_code": "SO",
                "country_name": "Somalia",
                "priority": "3"
            },
            {
                "country_iso_code": "SR",
                "country_name": "Suriname",
                "priority": "3"
            },
            {
                "country_iso_code": "SS",
                "country_name": "South Sudan",
                "priority": "3"
            },
            {
                "country_iso_code": "ST",
                "country_name": "Sao Tome and Principe",
                "priority": "3"
            },
            {
                "country_iso_code": "SV",
                "country_name": "El Salvador",
                "priority": "3"
            },
            {
                "country_iso_code": "SY",
                "country_name": "Syrian Arab Republic",
                "priority": "3"
            },
            {
                "country_iso_code": "SZ",
                "country_name": "Swaziland",
                "priority": "3"
            },
            {
                "country_iso_code": "TC",
                "country_name": "Turks and Caicos Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "TD",
                "country_name": "Chad",
                "priority": "2"
            },
            {
                "country_iso_code": "TF",
                "country_name": "French Southern Territories",
                "priority": "3"
            },
            {
                "country_iso_code": "TG",
                "country_name": "Togo",
                "priority": "2"
            },
            {
                "country_iso_code": "TH",
                "country_name": "Thailand",
                "priority": "3"
            },
            {
                "country_iso_code": "TJ",
                "country_name": "Tajikistan",
                "priority": "3"
            },
            {
                "country_iso_code": "TK",
                "country_name": "Tokelau",
                "priority": "3"
            },
            {
                "country_iso_code": "TM",
                "country_name": "Turkmenistan",
                "priority": "3"
            },
            {
                "country_iso_code": "TN",
                "country_name": "Tunisia",
                "priority": "3"
            },
            {
                "country_iso_code": "TO",
                "country_name": "Tonga",
                "priority": "3"
            },
            {
                "country_iso_code": "TP",
                "country_name": "East Timor",
                "priority": "3"
            },
            {
                "country_iso_code": "TR",
                "country_name": "Turkey",
                "priority": "3"
            },
            {
                "country_iso_code": "TT",
                "country_name": "Trinidad and Tobago",
                "priority": "3"
            },
            {
                "country_iso_code": "TV",
                "country_name": "Tuvalu",
                "priority": "3"
            },
            {
                "country_iso_code": "TW",
                "country_name": "Taiwan",
                "priority": "3"
            },
            {
                "country_iso_code": "TY",
                "country_name": "Mayotte",
                "priority": "3"
            },
            {
                "country_iso_code": "TZ",
                "country_name": "Tanzania",
                "priority": "3"
            },
            {
                "country_iso_code": "UA",
                "country_name": "Ukraine",
                "priority": "3"
            },
            {
                "country_iso_code": "UG",
                "country_name": "Uganda",
                "priority": "3"
            },
            {
                "country_iso_code": "UM",
                "country_name": "United States minor outlying islands",
                "priority": "3"
            },
            {
                "country_iso_code": "US",
                "country_name": "United States",
                "priority": "3"
            },
            {
                "country_iso_code": "UY",
                "country_name": "Uruguay",
                "priority": "3"
            },
            {
                "country_iso_code": "UZ",
                "country_name": "Uzbekistan",
                "priority": "3"
            },
            {
                "country_iso_code": "VA",
                "country_name": "Vatican City State",
                "priority": "3"
            },
            {
                "country_iso_code": "VC",
                "country_name": "Saint Vincent and the Grenadines",
                "priority": "3"
            },
            {
                "country_iso_code": "VE",
                "country_name": "Venezuela",
                "priority": "3"
            },
            {
                "country_iso_code": "VG",
                "country_name": "Virgin Islands (British)",
                "priority": "3"
            },
            {
                "country_iso_code": "VI",
                "country_name": "Virgin Islands (U.S.)",
                "priority": "3"
            },
            {
                "country_iso_code": "VN",
                "country_name": "Vietnam",
                "priority": "3"
            },
            {
                "country_iso_code": "VU",
                "country_name": "Vanuatu",
                "priority": "3"
            },
            {
                "country_iso_code": "WF",
                "country_name": "Wallis and Futuna Islands",
                "priority": "3"
            },
            {
                "country_iso_code": "WS",
                "country_name": "Samoa",
                "priority": "3"
            },
            {
                "country_iso_code": "YE",
                "country_name": "Yemen",
                "priority": "3"
            },
            {
                "country_iso_code": "YT",
                "country_name": "Mayotte",
                "priority": "3"
            },
            {
                "country_iso_code": "YU",
                "country_name": "Yugoslavia",
                "priority": "3"
            },
            {
                "country_iso_code": "ZA",
                "country_name": "South Africa",
                "priority": "2"
            },
            {
                "country_iso_code": "ZM",
                "country_name": "Zambia",
                "priority": "3"
            },
            {
                "country_iso_code": "ZR",
                "country_name": "Zaire",
                "priority": "3"
            },
            {
                "country_iso_code": "ZW",
                "country_name": "Zimbabwe",
                "priority": "3"
            }
            ]

       
       
        }}});
var country = mongoose.model('CountryModel', CountrySchema);
module.exports = country;
        
               

