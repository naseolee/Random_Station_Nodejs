'use strict'

let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

//DB Setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;

db.once('open', ()=>{ console.log('DB connected')});

db.on('error', () => {console.log('DB ERROR : ',err)});

// Template Engine 
app.set('view engine', 'ejs');
//イメージ、CSS ファイル、JavaScript ファイルなどの
//静的ファイルを提供するには、Express に標準実装されている
//express.static ミドルウェア関数を使用します。
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', require('./routes/home'));
app.use('/random', require('./routes/random'));

let port = 3000;
app.listen(port, 
    () => {console.log('Random Server On http://localhost: + port')});
