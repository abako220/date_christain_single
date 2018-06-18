'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    var lgaSchema = new Schema({

        lga_data:{
            type: Array,
            meta:{
                enum: [
                    {
                        "LGA_ID": "1",
                        "LGA": "Aba North",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "2",
                        "LGA": "Aba South",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "3",
                        "LGA": "Arochukwu",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "4",
                        "LGA": "Bende",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "5",
                        "LGA": "Ikwuano",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "6",
                        "LGA": "Isiala-Ngwa North",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "7",
                        "LGA": "Isiala-Ngwa South",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "8",
                        "LGA": "Isuikwato",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "9",
                        "LGA": "Obi Nwa",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "10",
                        "LGA": "Ohafia",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "11",
                        "LGA": "Osisioma",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "12",
                        "LGA": "Ngwa",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "13",
                        "LGA": "Ugwunagbo",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "14",
                        "LGA": "Ukwa East",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "15",
                        "LGA": "Ukwa West",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "16",
                        "LGA": "Umuahia North",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "17",
                        "LGA": "Umuahia South",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "18",
                        "LGA": "Umu-Neochi",
                        "STATE_ID": "1"
                    },
                    {
                        "LGA_ID": "19",
                        "LGA": "Demsa",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "20",
                        "LGA": "Fufore",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "21",
                        "LGA": "Ganaye",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "22",
                        "LGA": "Gireri",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "23",
                        "LGA": "Gombi",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "24",
                        "LGA": "Guyuk",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "25",
                        "LGA": "Hong",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "26",
                        "LGA": "Jada",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "27",
                        "LGA": "Lamurde",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "28",
                        "LGA": "Madagali",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "29",
                        "LGA": "Maiha",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "30",
                        "LGA": "Mayo-Belwa",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "31",
                        "LGA": "Michika",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "32",
                        "LGA": "Mubi North",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "33",
                        "LGA": "Mubi South",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "34",
                        "LGA": "Numan",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "35",
                        "LGA": "Shelleng",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "36",
                        "LGA": "Song",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "37",
                        "LGA": "Toungo",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "38",
                        "LGA": "Yola North",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "39",
                        "LGA": "Yola South",
                        "STATE_ID": "2"
                    },
                    {
                        "LGA_ID": "40",
                        "LGA": "Abak",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "41",
                        "LGA": "Eastern Obolo",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "42",
                        "LGA": "Eket",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "43",
                        "LGA": "Esit Eket",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "44",
                        "LGA": "Essien Udim",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "45",
                        "LGA": "Etim Ekpo",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "46",
                        "LGA": "Etinan",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "47",
                        "LGA": "Ibeno",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "48",
                        "LGA": "Ibesikpo Asutan",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "49",
                        "LGA": "Ibiono Ibom",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "50",
                        "LGA": "Ika",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "51",
                        "LGA": "Ikono",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "52",
                        "LGA": "Ikot Abasi",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "53",
                        "LGA": "Ikot Ekpene",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "54",
                        "LGA": "Ini",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "55",
                        "LGA": "Itu",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "56",
                        "LGA": "Mbo",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "57",
                        "LGA": "Mkpat Enin",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "58",
                        "LGA": "Nsit Atai",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "59",
                        "LGA": "Nsit Ibom",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "60",
                        "LGA": "Nsit Ubium",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "61",
                        "LGA": "Obot Akara",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "62",
                        "LGA": "Okobo",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "63",
                        "LGA": "Onna",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "64",
                        "LGA": "Oron",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "65",
                        "LGA": "Oruk Anam",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "66",
                        "LGA": "Udung Uko",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "67",
                        "LGA": "Ukanafun",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "68",
                        "LGA": "Uruan",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "69",
                        "LGA": "Urue-Offong  Oruko",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "70",
                        "LGA": "Uyo",
                        "STATE_ID": "3"
                    },
                    {
                        "LGA_ID": "71",
                        "LGA": "Aguata",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "72",
                        "LGA": "Anambra East",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "73",
                        "LGA": "Anambra West",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "74",
                        "LGA": "Anaocha",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "75",
                        "LGA": "Awka North",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "76",
                        "LGA": "Awka South",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "77",
                        "LGA": "Ayamelum",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "78",
                        "LGA": "Dunukofia",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "79",
                        "LGA": "Ekwusigo",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "80",
                        "LGA": "Idemili North",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "81",
                        "LGA": "Idemili south",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "82",
                        "LGA": "Ihiala",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "83",
                        "LGA": "Njikoka",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "84",
                        "LGA": "Nnewi North",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "85",
                        "LGA": "Nnewi South",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "86",
                        "LGA": "Ogbaru",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "87",
                        "LGA": "Onitsha North",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "88",
                        "LGA": "Onitsha South",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "89",
                        "LGA": "Orumba North",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "90",
                        "LGA": "Orumba South",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "91",
                        "LGA": "Oyi",
                        "STATE_ID": "4"
                    },
                    {
                        "LGA_ID": "92",
                        "LGA": "Alkaleri",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "93",
                        "LGA": "Bauchi",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "94",
                        "LGA": "Bogoro",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "95",
                        "LGA": "Damban",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "96",
                        "LGA": "Darazo",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "97",
                        "LGA": "Dass",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "98",
                        "LGA": "Ganjuwa",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "99",
                        "LGA": "Giade",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "100",
                        "LGA": "Itas  Gadau",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "101",
                        "LGA": "Jama-are",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "102",
                        "LGA": "Katagum",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "103",
                        "LGA": "Kirfi",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "104",
                        "LGA": "Misau",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "105",
                        "LGA": "Ningi",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "106",
                        "LGA": "Shira",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "107",
                        "LGA": "Tafawa-Balewa",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "108",
                        "LGA": "Toro",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "109",
                        "LGA": "Warji",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "110",
                        "LGA": "Zaki",
                        "STATE_ID": "5"
                    },
                    {
                        "LGA_ID": "111",
                        "LGA": "Brass",
                        "STATE_ID": "6"
                    },
                    {
                        "LGA_ID": "112",
                        "LGA": "Ekeremor",
                        "STATE_ID": "6"
                    },
                    {
                        "LGA_ID": "113",
                        "LGA": "Kolokuma  Opokuma",
                        "STATE_ID": "6"
                    },
                    {
                        "LGA_ID": "114",
                        "LGA": "Nembe",
                        "STATE_ID": "6"
                    },
                    {
                        "LGA_ID": "115",
                        "LGA": "Ogbia",
                        "STATE_ID": "6"
                    },
                    {
                        "LGA_ID": "116",
                        "LGA": "Sagbama",
                        "STATE_ID": "6"
                    },
                    {
                        "LGA_ID": "117",
                        "LGA": "Southern-Ijaw",
                        "STATE_ID": "6"
                    },
                    {
                        "LGA_ID": "118",
                        "LGA": "Ado",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "119",
                        "LGA": "Agatu",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "120",
                        "LGA": "Apa",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "121",
                        "LGA": "Buruku",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "122",
                        "LGA": "Gboko",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "123",
                        "LGA": "Guma",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "124",
                        "LGA": "Gwer-East",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "125",
                        "LGA": "Gwer-West",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "126",
                        "LGA": "Katsina-Ala",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "127",
                        "LGA": "Konshisha",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "128",
                        "LGA": "Kwande",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "129",
                        "LGA": "Logo",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "130",
                        "LGA": "Makurdi",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "131",
                        "LGA": "Obi",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "132",
                        "LGA": "Ogbadibo",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "133",
                        "LGA": "Oju",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "134",
                        "LGA": "Okpokwu",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "135",
                        "LGA": "Ohimini",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "136",
                        "LGA": "Oturkpo",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "137",
                        "LGA": "Tarka",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "138",
                        "LGA": "Ukum",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "139",
                        "LGA": "Ushongo",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "140",
                        "LGA": "Vandeikya",
                        "STATE_ID": "7"
                    },
                    {
                        "LGA_ID": "141",
                        "LGA": "Abadam",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "142",
                        "LGA": "Askira  Uba",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "143",
                        "LGA": "Bama",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "144",
                        "LGA": "Bayo",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "145",
                        "LGA": "Biu",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "146",
                        "LGA": "Chibok",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "147",
                        "LGA": "Damboa",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "148",
                        "LGA": "Dikwa",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "149",
                        "LGA": "Gubio",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "150",
                        "LGA": "Guzamala",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "151",
                        "LGA": "Gwoza",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "152",
                        "LGA": "Hawul",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "153",
                        "LGA": "Jere",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "154",
                        "LGA": "Kaga",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "155",
                        "LGA": "Kala  Balge",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "156",
                        "LGA": "Konduga",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "157",
                        "LGA": "Kukawa",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "158",
                        "LGA": "Kwaya Kusar",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "159",
                        "LGA": "Mafa",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "160",
                        "LGA": "Magumeri",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "161",
                        "LGA": "Maiduguri",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "162",
                        "LGA": "Marte",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "163",
                        "LGA": "Mobbar",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "164",
                        "LGA": "Monguno",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "165",
                        "LGA": "Ngala",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "166",
                        "LGA": "Nganzai",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "167",
                        "LGA": "Shani",
                        "STATE_ID": "8"
                    },
                    {
                        "LGA_ID": "168",
                        "LGA": "Akpabuyo",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "169",
                        "LGA": "Odukpani",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "170",
                        "LGA": "Akamkpa",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "171",
                        "LGA": "Biase",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "172",
                        "LGA": "Abi",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "173",
                        "LGA": "Ikom",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "174",
                        "LGA": "Yarkur",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "175",
                        "LGA": "Odubra",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "176",
                        "LGA": "Boki",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "177",
                        "LGA": "Ogoja",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "178",
                        "LGA": "Yala",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "179",
                        "LGA": "Obanliku",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "180",
                        "LGA": "Obudu",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "181",
                        "LGA": "Calabar South",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "182",
                        "LGA": "Etung",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "183",
                        "LGA": "Bekwara",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "184",
                        "LGA": "Bakassi",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "185",
                        "LGA": "Calabar Municipality",
                        "STATE_ID": "9"
                    },
                    {
                        "LGA_ID": "186",
                        "LGA": "Oshimili",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "187",
                        "LGA": "Aniocha",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "188",
                        "LGA": "Aniocha South",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "189",
                        "LGA": "Ika South",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "190",
                        "LGA": "Ika North-East",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "191",
                        "LGA": "Ndokwa West",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "192",
                        "LGA": "Ndokwa East",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "193",
                        "LGA": "Isoko south",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "194",
                        "LGA": "Isoko North",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "195",
                        "LGA": "Bomadi",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "196",
                        "LGA": "Burutu",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "197",
                        "LGA": "Ughelli South",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "198",
                        "LGA": "Ughelli North",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "199",
                        "LGA": "Ethiope West",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "200",
                        "LGA": "Ethiope East",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "201",
                        "LGA": "Sapele",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "202",
                        "LGA": "Okpe",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "203",
                        "LGA": "Warri North",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "204",
                        "LGA": "Warri South",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "205",
                        "LGA": "Uvwie",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "206",
                        "LGA": "Udu",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "207",
                        "LGA": "Warri Central",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "208",
                        "LGA": "Ukwani",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "209",
                        "LGA": "Oshimili North",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "210",
                        "LGA": "Patani",
                        "STATE_ID": "10"
                    },
                    {
                        "LGA_ID": "211",
                        "LGA": "Afikpo South",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "212",
                        "LGA": "Afikpo North",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "213",
                        "LGA": "Onicha",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "214",
                        "LGA": "Ohaozara",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "215",
                        "LGA": "Abakaliki",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "216",
                        "LGA": "Ishielu",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "217",
                        "LGA": "lkwo",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "218",
                        "LGA": "Ezza",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "219",
                        "LGA": "Ezza South",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "220",
                        "LGA": "Ohaukwu",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "221",
                        "LGA": "Ebonyi",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "222",
                        "LGA": "Ivo",
                        "STATE_ID": "11"
                    },
                    {
                        "LGA_ID": "223",
                        "LGA": "Esan North-East",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "224",
                        "LGA": "Esan Central",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "225",
                        "LGA": "Esan West",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "226",
                        "LGA": "Egor",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "227",
                        "LGA": "Ukpoba",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "228",
                        "LGA": "Central",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "229",
                        "LGA": "Etsako Central",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "230",
                        "LGA": "Igueben",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "231",
                        "LGA": "Oredo",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "232",
                        "LGA": "Ovia SouthWest",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "233",
                        "LGA": "Ovia South-East",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "234",
                        "LGA": "Orhionwon",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "235",
                        "LGA": "Uhunmwonde",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "236",
                        "LGA": "Etsako East",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "237",
                        "LGA": "Esan South-East",
                        "STATE_ID": "12"
                    },
                    {
                        "LGA_ID": "238",
                        "LGA": "Ado",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "239",
                        "LGA": "Ekiti-East",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "240",
                        "LGA": "Ekiti-West",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "241",
                        "LGA": "Emure  Ise  Orun",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "242",
                        "LGA": "Ekiti South-West",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "243",
                        "LGA": "Ikare",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "244",
                        "LGA": "Irepodun",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "245",
                        "LGA": "Ijero,",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "246",
                        "LGA": "Ido  Osi",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "247",
                        "LGA": "Oye",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "248",
                        "LGA": "Ikole",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "249",
                        "LGA": "Moba",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "250",
                        "LGA": "Gbonyin",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "251",
                        "LGA": "Efon",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "252",
                        "LGA": "Ise  Orun",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "253",
                        "LGA": "Ilejemeje.",
                        "STATE_ID": "13"
                    },
                    {
                        "LGA_ID": "254",
                        "LGA": "Enugu South,",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "255",
                        "LGA": "Igbo-Eze South",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "256",
                        "LGA": "Enugu North",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "257",
                        "LGA": "Nkanu",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "258",
                        "LGA": "Udi Agwu",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "259",
                        "LGA": "Oji-River",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "260",
                        "LGA": "Ezeagu",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "261",
                        "LGA": "IgboEze North",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "262",
                        "LGA": "Isi-Uzo",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "263",
                        "LGA": "Nsukka",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "264",
                        "LGA": "Igbo-Ekiti",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "265",
                        "LGA": "Uzo-Uwani",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "266",
                        "LGA": "Enugu Eas",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "267",
                        "LGA": "Aninri",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "268",
                        "LGA": "Nkanu East",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "269",
                        "LGA": "Udenu.",
                        "STATE_ID": "14"
                    },
                    {
                        "LGA_ID": "270",
                        "LGA": "Gwagwalada",
                        "STATE_ID": "15"
                    },
                    {
                        "LGA_ID": "271",
                        "LGA": "Kuje",
                        "STATE_ID": "15"
                    },
                    {
                        "LGA_ID": "272",
                        "LGA": "Abaji",
                        "STATE_ID": "15"
                    },
                    {
                        "LGA_ID": "273",
                        "LGA": "Abuja Municipal",
                        "STATE_ID": "15"
                    },
                    {
                        "LGA_ID": "274",
                        "LGA": "Bwari",
                        "STATE_ID": "15"
                    },
                    {
                        "LGA_ID": "275",
                        "LGA": "Kwali",
                        "STATE_ID": "15"
                    },
                    {
                        "LGA_ID": "276",
                        "LGA": "Akko",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "277",
                        "LGA": "Balanga",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "278",
                        "LGA": "Billiri",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "279",
                        "LGA": "Dukku",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "280",
                        "LGA": "Kaltungo",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "281",
                        "LGA": "Kwami",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "282",
                        "LGA": "Shomgom",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "283",
                        "LGA": "Funakaye",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "284",
                        "LGA": "Gombe",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "285",
                        "LGA": "Nafada  Bajoga",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "286",
                        "LGA": "Yamaltu  Delta.",
                        "STATE_ID": "16"
                    },
                    {
                        "LGA_ID": "287",
                        "LGA": "Aboh-Mbaise",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "288",
                        "LGA": "Ahiazu-Mbaise",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "289",
                        "LGA": "Ehime-Mbano",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "290",
                        "LGA": "Ezinihitte",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "291",
                        "LGA": "Ideato North",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "292",
                        "LGA": "Ideato South",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "293",
                        "LGA": "Ihitte  Uboma",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "294",
                        "LGA": "Ikeduru",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "295",
                        "LGA": "Isiala Mbano",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "296",
                        "LGA": "Isu",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "297",
                        "LGA": "Mbaitoli",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "298",
                        "LGA": "Mbaitoli",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "299",
                        "LGA": "Ngor-Okpala",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "300",
                        "LGA": "Njaba",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "301",
                        "LGA": "Nwangele",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "302",
                        "LGA": "Nkwerre",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "303",
                        "LGA": "Obowo",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "304",
                        "LGA": "Oguta",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "305",
                        "LGA": "Ohaji  Egbema",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "306",
                        "LGA": "Okigwe",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "307",
                        "LGA": "Orlu",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "308",
                        "LGA": "Orsu",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "309",
                        "LGA": "Oru East",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "310",
                        "LGA": "Oru West",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "311",
                        "LGA": "Owerri-Municipal",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "312",
                        "LGA": "Owerri North",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "313",
                        "LGA": "Owerri West",
                        "STATE_ID": "17"
                    },
                    {
                        "LGA_ID": "314",
                        "LGA": "Auyo",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "315",
                        "LGA": "Babura",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "316",
                        "LGA": "Birni Kudu",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "317",
                        "LGA": "Biriniwa",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "318",
                        "LGA": "Buji",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "319",
                        "LGA": "Dutse",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "320",
                        "LGA": "Gagarawa",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "321",
                        "LGA": "Garki",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "322",
                        "LGA": "Gumel",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "323",
                        "LGA": "Guri",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "324",
                        "LGA": "Gwaram",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "325",
                        "LGA": "Gwiwa",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "326",
                        "LGA": "Hadejia",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "327",
                        "LGA": "Jahun",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "328",
                        "LGA": "Kafin Hausa",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "329",
                        "LGA": "Kaugama Kazaure",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "330",
                        "LGA": "Kiri Kasamma",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "331",
                        "LGA": "Kiyawa",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "332",
                        "LGA": "Maigatari",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "333",
                        "LGA": "Malam Madori",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "334",
                        "LGA": "Miga",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "335",
                        "LGA": "Ringim",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "336",
                        "LGA": "Roni",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "337",
                        "LGA": "Sule-Tankarkar",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "338",
                        "LGA": "Taura",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "339",
                        "LGA": "Yankwashi",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "340",
                        "LGA": "Owerri West",
                        "STATE_ID": "18"
                    },
                    {
                        "LGA_ID": "341",
                        "LGA": "Birni-Gwari",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "342",
                        "LGA": "Chikun",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "343",
                        "LGA": "Giwa",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "344",
                        "LGA": "Igabi",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "345",
                        "LGA": "Ikara",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "346",
                        "LGA": "jaba",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "347",
                        "LGA": "Jemaa",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "348",
                        "LGA": "Kachia",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "349",
                        "LGA": "Kaduna North",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "350",
                        "LGA": "Kaduna South",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "351",
                        "LGA": "Kagarko",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "352",
                        "LGA": "Kajuru",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "353",
                        "LGA": "Kaura",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "354",
                        "LGA": "Kauru",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "355",
                        "LGA": "Kubau",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "356",
                        "LGA": "Kudan",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "357",
                        "LGA": "Lere",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "358",
                        "LGA": "Makarfi",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "359",
                        "LGA": "Sabon-Gari",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "360",
                        "LGA": "Sanga",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "361",
                        "LGA": "Soba",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "362",
                        "LGA": "Zango-Kataf",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "363",
                        "LGA": "Zaria",
                        "STATE_ID": "19"
                    },
                    {
                        "LGA_ID": "364",
                        "LGA": "Ajingi",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "365",
                        "LGA": "Albasu",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "366",
                        "LGA": "Bagwai",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "367",
                        "LGA": "Bebeji",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "368",
                        "LGA": "Bichi",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "369",
                        "LGA": "Bunkure",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "370",
                        "LGA": "Dala",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "371",
                        "LGA": "Dambatta",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "372",
                        "LGA": "Dawakin Kudu",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "373",
                        "LGA": "Dawakin Tofa",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "374",
                        "LGA": "Doguwa",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "375",
                        "LGA": "Fagge",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "376",
                        "LGA": "Gabasawa",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "377",
                        "LGA": "Garko",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "378",
                        "LGA": "Garum",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "379",
                        "LGA": "Mallam",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "380",
                        "LGA": "Gaya",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "381",
                        "LGA": "Gezawa",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "382",
                        "LGA": "Gwale",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "383",
                        "LGA": "Gwarzo",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "384",
                        "LGA": "Kabo",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "385",
                        "LGA": "Kano Municipal",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "386",
                        "LGA": "Karaye",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "387",
                        "LGA": "Kibiya",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "388",
                        "LGA": "Kiru",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "389",
                        "LGA": "kumbotso",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "390",
                        "LGA": "Kunchi",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "391",
                        "LGA": "Kura",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "392",
                        "LGA": "Madobi",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "393",
                        "LGA": "Makoda",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "394",
                        "LGA": "Minjibir",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "395",
                        "LGA": "Nasarawa",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "396",
                        "LGA": "Rano",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "397",
                        "LGA": "Rimin Gado",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "398",
                        "LGA": "Rogo",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "399",
                        "LGA": "Shanono",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "400",
                        "LGA": "Sumaila",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "401",
                        "LGA": "Takali",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "402",
                        "LGA": "Tarauni",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "403",
                        "LGA": "Tofa",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "404",
                        "LGA": "Tsanyawa",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "405",
                        "LGA": "Tudun Wada",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "406",
                        "LGA": "Ungogo",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "407",
                        "LGA": "Warawa",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "408",
                        "LGA": "Wudil",
                        "STATE_ID": "20"
                    },
                    {
                        "LGA_ID": "409",
                        "LGA": "Bakori",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "410",
                        "LGA": "Batagarawa",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "411",
                        "LGA": "Batsari",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "412",
                        "LGA": "Baure",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "413",
                        "LGA": "Bindawa",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "414",
                        "LGA": "Charanchi",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "415",
                        "LGA": "Dandume",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "416",
                        "LGA": "Danja",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "417",
                        "LGA": "Dan Musa",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "418",
                        "LGA": "Daura",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "419",
                        "LGA": "Dutsi",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "420",
                        "LGA": "Dutsin-Ma",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "421",
                        "LGA": "Faskari",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "422",
                        "LGA": "Funtua",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "423",
                        "LGA": "Ingawa",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "424",
                        "LGA": "Jibia",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "425",
                        "LGA": "Kafur",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "426",
                        "LGA": "Kaita",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "427",
                        "LGA": "Kankara",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "428",
                        "LGA": "Kankia",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "429",
                        "LGA": "Katsina",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "430",
                        "LGA": "Kurfi",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "431",
                        "LGA": "Kusada",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "432",
                        "LGA": "Mai Adua",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "433",
                        "LGA": "Malumfashi",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "434",
                        "LGA": "Mani",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "435",
                        "LGA": "Mashi",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "436",
                        "LGA": "Matazuu",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "437",
                        "LGA": "Musawa",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "438",
                        "LGA": "Rimi",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "439",
                        "LGA": "Sabuwa",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "440",
                        "LGA": "Safana",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "441",
                        "LGA": "Sandamu",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "442",
                        "LGA": "Zango",
                        "STATE_ID": "21"
                    },
                    {
                        "LGA_ID": "443",
                        "LGA": "Aleiro",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "444",
                        "LGA": "Arewa-Dandi",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "445",
                        "LGA": "Argungu",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "446",
                        "LGA": "Augie",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "447",
                        "LGA": "Bagudo",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "448",
                        "LGA": "Birnin Kebbi",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "449",
                        "LGA": "Bunza",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "450",
                        "LGA": "Dandi",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "451",
                        "LGA": "Fakai",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "452",
                        "LGA": "Gwandu",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "453",
                        "LGA": "Jega",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "454",
                        "LGA": "Kalgo",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "455",
                        "LGA": "Koko  Besse",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "456",
                        "LGA": "Maiyama",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "457",
                        "LGA": "Ngaski",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "458",
                        "LGA": "Sakaba",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "459",
                        "LGA": "Shanga",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "460",
                        "LGA": "Suru",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "461",
                        "LGA": "Wasagu  Danko",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "462",
                        "LGA": "Yauri",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "463",
                        "LGA": "Zuru",
                        "STATE_ID": "22"
                    },
                    {
                        "LGA_ID": "464",
                        "LGA": "Adavi",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "465",
                        "LGA": "Ajaokuta",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "466",
                        "LGA": "Ankpa",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "467",
                        "LGA": "Bassa",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "468",
                        "LGA": "Dekina",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "469",
                        "LGA": "Ibaji",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "470",
                        "LGA": "Idah",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "471",
                        "LGA": "Igalamela-Odolu",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "472",
                        "LGA": "Ijumu",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "473",
                        "LGA": "Kabba  Bunu",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "474",
                        "LGA": "Kogi",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "475",
                        "LGA": "Lokoja",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "476",
                        "LGA": "Mopa-Muro",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "477",
                        "LGA": "Ofu",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "478",
                        "LGA": "Ogori  Mangongo",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "479",
                        "LGA": "Okehi",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "480",
                        "LGA": "Okene",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "481",
                        "LGA": "Olamabolo",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "482",
                        "LGA": "Omala",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "483",
                        "LGA": "Yagba East",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "484",
                        "LGA": "Yagba West",
                        "STATE_ID": "23"
                    },
                    {
                        "LGA_ID": "485",
                        "LGA": "Asa",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "486",
                        "LGA": "Baruten",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "487",
                        "LGA": "Edu",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "488",
                        "LGA": "Ekiti",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "489",
                        "LGA": "Ifelodun",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "490",
                        "LGA": "Ilorin East",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "491",
                        "LGA": "Ilorin West",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "492",
                        "LGA": "Irepodun",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "493",
                        "LGA": "Isin",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "494",
                        "LGA": "Kaiama",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "495",
                        "LGA": "Moro",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "496",
                        "LGA": "Offa",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "497",
                        "LGA": "Oke-Ero",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "498",
                        "LGA": "Oyun",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "499",
                        "LGA": "Pategi",
                        "STATE_ID": "24"
                    },
                    {
                        "LGA_ID": "500",
                        "LGA": "Agege",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "501",
                        "LGA": "Ajeromi-Ifelodun",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "502",
                        "LGA": "Alimosho",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "503",
                        "LGA": "Amuwo-Odofin",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "504",
                        "LGA": "Apapa",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "505",
                        "LGA": "Badagry",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "506",
                        "LGA": "Epe",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "507",
                        "LGA": "Eti-Osa",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "508",
                        "LGA": "Ibeju  Lekki",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "509",
                        "LGA": "Ifako-Ijaye",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "510",
                        "LGA": "Ikeja",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "511",
                        "LGA": "Ikorodu",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "512",
                        "LGA": "Kosofe",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "513",
                        "LGA": "Lagos Island",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "514",
                        "LGA": "Lagos Mainland",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "515",
                        "LGA": "Mushin",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "516",
                        "LGA": "Ojo",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "517",
                        "LGA": "Oshodi-Isolo",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "518",
                        "LGA": "Shomolu",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "519",
                        "LGA": "Surulere",
                        "STATE_ID": "25"
                    },
                    {
                        "LGA_ID": "520",
                        "LGA": "Akwanga",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "521",
                        "LGA": "Awe",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "522",
                        "LGA": "Doma",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "523",
                        "LGA": "Karu",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "524",
                        "LGA": "Keana",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "525",
                        "LGA": "Keffi",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "526",
                        "LGA": "Kokona",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "527",
                        "LGA": "Lafia",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "528",
                        "LGA": "Nasarawa",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "529",
                        "LGA": "Nasarawa-Eggon",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "530",
                        "LGA": "Obi",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "531",
                        "LGA": "Toto",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "532",
                        "LGA": "Wamba",
                        "STATE_ID": "26"
                    },
                    {
                        "LGA_ID": "533",
                        "LGA": "Agaie",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "534",
                        "LGA": "Agwara",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "535",
                        "LGA": "Bida",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "536",
                        "LGA": "Borgu",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "537",
                        "LGA": "Bosso",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "538",
                        "LGA": "Chanchaga",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "539",
                        "LGA": "Edati",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "540",
                        "LGA": "Gbako",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "541",
                        "LGA": "Gurara",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "542",
                        "LGA": "Katcha",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "543",
                        "LGA": "Kontagora",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "544",
                        "LGA": "Lapai",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "545",
                        "LGA": "Lavun",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "546",
                        "LGA": "Magama",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "547",
                        "LGA": "Mariga",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "548",
                        "LGA": "Mashegu",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "549",
                        "LGA": "Mokwa",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "550",
                        "LGA": "Muya",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "551",
                        "LGA": "Pailoro",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "552",
                        "LGA": "Rafi",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "553",
                        "LGA": "Rijau",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "554",
                        "LGA": "Shiroro",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "555",
                        "LGA": "Suleja",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "556",
                        "LGA": "Tafa",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "557",
                        "LGA": "Wushishi",
                        "STATE_ID": "27"
                    },
                    {
                        "LGA_ID": "558",
                        "LGA": "Abeokuta North",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "559",
                        "LGA": "Abeokuta South",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "560",
                        "LGA": "Ado-Odo  Ota",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "561",
                        "LGA": "Egbado North",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "562",
                        "LGA": "Egbado South",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "563",
                        "LGA": "Ewekoro",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "564",
                        "LGA": "Ifo",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "565",
                        "LGA": "Ijebu East",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "566",
                        "LGA": "Ijebu North",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "567",
                        "LGA": "Ijebu North East",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "568",
                        "LGA": "Ijebu Ode",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "569",
                        "LGA": "Ikenne",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "570",
                        "LGA": "Imeko-Afon",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "571",
                        "LGA": "Ipokia",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "572",
                        "LGA": "Obafemi-Owode",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "573",
                        "LGA": "Ogun Waterside",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "574",
                        "LGA": "Odeda",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "575",
                        "LGA": "Odogbolu",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "576",
                        "LGA": "Remo North",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "577",
                        "LGA": "Shagamu",
                        "STATE_ID": "28"
                    },
                    {
                        "LGA_ID": "578",
                        "LGA": "Akoko North East",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "579",
                        "LGA": "Akoko North West",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "580",
                        "LGA": "Akoko South Akure East",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "581",
                        "LGA": "Akoko South West",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "582",
                        "LGA": "Akure North",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "583",
                        "LGA": "Akure South",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "584",
                        "LGA": "Ese-Odo",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "585",
                        "LGA": "Idanre",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "586",
                        "LGA": "Ifedore",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "587",
                        "LGA": "Ilaje",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "588",
                        "LGA": "Ile-Oluji",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "589",
                        "LGA": "Okeigbo",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "590",
                        "LGA": "Irele",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "591",
                        "LGA": "Odigbo",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "592",
                        "LGA": "Okitipupa",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "593",
                        "LGA": "Ondo East",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "594",
                        "LGA": "Ondo West",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "595",
                        "LGA": "Ose",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "596",
                        "LGA": "Owo",
                        "STATE_ID": "29"
                    },
                    {
                        "LGA_ID": "597",
                        "LGA": "Aiyedade",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "598",
                        "LGA": "Aiyedire",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "599",
                        "LGA": "Atakumosa East",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "600",
                        "LGA": "Atakumosa West",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "601",
                        "LGA": "Boluwaduro",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "602",
                        "LGA": "Boripe",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "603",
                        "LGA": "Ede North",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "604",
                        "LGA": "Ede South",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "605",
                        "LGA": "Egbedore",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "606",
                        "LGA": "Ejigbo",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "607",
                        "LGA": "Ife Central",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "608",
                        "LGA": "Ife East",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "609",
                        "LGA": "Ife North",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "610",
                        "LGA": "Ife South",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "611",
                        "LGA": "Ifedayo",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "612",
                        "LGA": "Ifelodun",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "613",
                        "LGA": "Ila",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "614",
                        "LGA": "Ilesha East",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "615",
                        "LGA": "Ilesha West",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "616",
                        "LGA": "Irepodun",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "617",
                        "LGA": "Irewole",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "618",
                        "LGA": "Isokan",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "619",
                        "LGA": "Iwo",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "620",
                        "LGA": "Obokun",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "621",
                        "LGA": "Odo-Otin",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "622",
                        "LGA": "Ola-Oluwa",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "623",
                        "LGA": "Olorunda",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "624",
                        "LGA": "Oriade",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "625",
                        "LGA": "Orolu",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "626",
                        "LGA": "Osogbo",
                        "STATE_ID": "30"
                    },
                    {
                        "LGA_ID": "627",
                        "LGA": "Afijio",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "628",
                        "LGA": "Akinyele",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "629",
                        "LGA": "Atiba",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "630",
                        "LGA": "Atigbo",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "631",
                        "LGA": "Egbeda",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "632",
                        "LGA": "IbadanCentral",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "633",
                        "LGA": "Ibadan North",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "634",
                        "LGA": "Ibadan North West",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "635",
                        "LGA": "Ibadan South East",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "636",
                        "LGA": "Ibadan South West",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "637",
                        "LGA": "Ibarapa Central",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "638",
                        "LGA": "Ibarapa East",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "639",
                        "LGA": "Ibarapa North",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "640",
                        "LGA": "Ido",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "641",
                        "LGA": "Irepo",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "642",
                        "LGA": "Iseyin",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "643",
                        "LGA": "Itesiwaju",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "644",
                        "LGA": "Iwajowa",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "645",
                        "LGA": "Kajola",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "646",
                        "LGA": "Lagelu Ogbomosho North",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "647",
                        "LGA": "Ogbmosho South",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "648",
                        "LGA": "Ogo Oluwa",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "649",
                        "LGA": "Olorunsogo",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "650",
                        "LGA": "Oluyole",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "651",
                        "LGA": "Ona-Ara",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "652",
                        "LGA": "Orelope",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "653",
                        "LGA": "Ori Ire",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "654",
                        "LGA": "Oyo East",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "655",
                        "LGA": "Oyo West",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "656",
                        "LGA": "Saki East",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "657",
                        "LGA": "Saki West",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "658",
                        "LGA": "Surulere",
                        "STATE_ID": "31"
                    },
                    {
                        "LGA_ID": "659",
                        "LGA": "Barikin Ladi",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "660",
                        "LGA": "Bassa",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "661",
                        "LGA": "Bokkos",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "662",
                        "LGA": "Jos East",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "663",
                        "LGA": "Jos North",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "664",
                        "LGA": "Jos South",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "665",
                        "LGA": "Kanam",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "666",
                        "LGA": "Kanke",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "667",
                        "LGA": "Langtang North",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "668",
                        "LGA": "Langtang South",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "669",
                        "LGA": "Mangu",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "670",
                        "LGA": "Mikang",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "671",
                        "LGA": "Pankshin",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "672",
                        "LGA": "Quaan Pan",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "673",
                        "LGA": "Riyom",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "674",
                        "LGA": "Shendam",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "675",
                        "LGA": "Wase",
                        "STATE_ID": "32"
                    },
                    {
                        "LGA_ID": "676",
                        "LGA": "Abua Odual",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "677",
                        "LGA": "Ahoada East",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "678",
                        "LGA": "Ahoada West",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "679",
                        "LGA": "Akuku Toru",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "680",
                        "LGA": "Andoni",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "681",
                        "LGA": "Asari-Toru",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "682",
                        "LGA": "Bonny",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "683",
                        "LGA": "Degema",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "684",
                        "LGA": "Emohua",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "685",
                        "LGA": "Eleme",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "686",
                        "LGA": "Etche",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "687",
                        "LGA": "Gokana",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "688",
                        "LGA": "Ikwerre",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "689",
                        "LGA": "Khana",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "690",
                        "LGA": "Obia  Akpor",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "691",
                        "LGA": "Ogba Egbema Ndoni",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "692",
                        "LGA": "Ogu Bolo",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "693",
                        "LGA": "Okrika",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "694",
                        "LGA": "Omumma",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "695",
                        "LGA": "Opobo  Nkoro",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "696",
                        "LGA": "Oyigbo",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "697",
                        "LGA": "Port-Harcourt",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "698",
                        "LGA": "Tai",
                        "STATE_ID": "33"
                    },
                    {
                        "LGA_ID": "699",
                        "LGA": "Binji",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "700",
                        "LGA": "Bodinga",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "701",
                        "LGA": "Dange-shnsi",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "702",
                        "LGA": "Gada",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "703",
                        "LGA": "Goronyo",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "704",
                        "LGA": "Gudu",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "705",
                        "LGA": "Gawabawa",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "706",
                        "LGA": "Illela",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "707",
                        "LGA": "Isa",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "708",
                        "LGA": "Kware",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "709",
                        "LGA": "kebbe",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "710",
                        "LGA": "Rabah",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "711",
                        "LGA": "Sabon birni",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "712",
                        "LGA": "Shagari",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "713",
                        "LGA": "Silame",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "714",
                        "LGA": "Sokoto North",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "715",
                        "LGA": "Sokoto South",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "716",
                        "LGA": "Tambuwal",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "717",
                        "LGA": "Tqngaza",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "718",
                        "LGA": "Tureta",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "719",
                        "LGA": "Wamako",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "720",
                        "LGA": "Wurno",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "721",
                        "LGA": "Yabo",
                        "STATE_ID": "34"
                    },
                    {
                        "LGA_ID": "722",
                        "LGA": "Ardo-kola",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "723",
                        "LGA": "Bali",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "724",
                        "LGA": "Donga",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "725",
                        "LGA": "Gashaka",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "726",
                        "LGA": "Cassol",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "727",
                        "LGA": "Ibi",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "728",
                        "LGA": "Jalingo",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "729",
                        "LGA": "Karin-Lamido",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "730",
                        "LGA": "Kurmi",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "731",
                        "LGA": "Lau",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "732",
                        "LGA": "Sardauna",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "733",
                        "LGA": "Takum",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "734",
                        "LGA": "Ussa",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "735",
                        "LGA": "Wukari",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "736",
                        "LGA": "Yorro",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "737",
                        "LGA": "Zing",
                        "STATE_ID": "35"
                    },
                    {
                        "LGA_ID": "738",
                        "LGA": "Bade",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "739",
                        "LGA": "Bursari",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "740",
                        "LGA": "Damaturu",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "741",
                        "LGA": "Fika",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "742",
                        "LGA": "Fune",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "743",
                        "LGA": "Geidam",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "744",
                        "LGA": "Gujba",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "745",
                        "LGA": "Gulani",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "746",
                        "LGA": "Jakusko",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "747",
                        "LGA": "Karasuwa",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "748",
                        "LGA": "Karawa",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "749",
                        "LGA": "Machina",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "750",
                        "LGA": "Nangere",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "751",
                        "LGA": "Nguru Potiskum",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "752",
                        "LGA": "Tarmua",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "753",
                        "LGA": "Yunusari",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "754",
                        "LGA": "Yusufari",
                        "STATE_ID": "36"
                    },
                    {
                        "LGA_ID": "755",
                        "LGA": "Anka",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "756",
                        "LGA": "Bakura",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "757",
                        "LGA": "Birnin Magaji",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "758",
                        "LGA": "Bukkuyum",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "759",
                        "LGA": "Bungudu",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "760",
                        "LGA": "Gummi",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "761",
                        "LGA": "Gusau",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "762",
                        "LGA": "Kaura",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "763",
                        "LGA": "Namoda",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "764",
                        "LGA": "Maradun",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "765",
                        "LGA": "Maru",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "766",
                        "LGA": "Shinkafi",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "767",
                        "LGA": "Talata Mafara",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "768",
                        "LGA": "Tsafe",
                        "STATE_ID": "37"
                    },
                    {
                        "LGA_ID": "769",
                        "LGA": "Zurmi",
                        "STATE_ID": "37"
                    }
                ]

            }
        }
    });

var lgaModel = mongoose.model('LgaModel', lgaSchema);
module.exports = lgaModel;
        