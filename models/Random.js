
let mongoose = require('mongoose');

let randomSchema = mongoose.Schema({
    id:{type:Number, required:true, unique:true},
    station_cd:{type:Number},
    station_g_cd:{type:Number},
    station_name:{type:String},
    station_name_k:{type:String},
    station_name_r:{type:String},
    line_cd:{type:Number},
    pref_cd:{type:Number},
    post:{type:String},
    address:{type:String},
    lon:{type:String},
    lat:{type:String},
    open_ymd:{type:String},
    close_ymd:{type:String},
    e_status:{type:String},
    e_sort:{type:Number}
});

let Random = mongoose.model('mst_random', randomSchema);

module.exports = Random;