const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
})

// app.listen(process.env.PORT || 8081)

// For db
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/posts', {useNewUrlParser: true});

var Post = require("./models/post-model");

var db = mongoose.connection;
db.once('open', () => {
    console.log('Connection Succeeded');
    app.listen(process.env.PORT || 8081,
      () => console.log(`Server start on port ...`))
    })
    .on('error', error => console.warn(error))

// API post
app.post('/posts', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
        title: title,
        description: description
    })

    new_post.save(function (error, data) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: `Post with ID_${data._id} saved successfully!`
        })

        console.log(new_post)
    })
})

// app.get('/posts', (req, res) => {
//     Post.find({}, 'title description', function (error, posts) {
//         if (error) { console.error(error); }
//         res.send({
//             posts: posts
//         })
//     }).sort({_id:-1})
// })

// const express = require('express');
// // const bodyParser = require('body-parser');
// const cors = require('cors');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const config = require('./config/config');
// const Posts = require('./routes/posts');
//
// mongoose.Promise = global.Promise;
//
// const app = express();
//
// app.use(morgan('combined'));
// // app.use(bodyParser.json());
// app.use(express.json());
// // app.use(express.urlencoded());
// app.use(cors());
// app.use(require('./routes/posts'));
//
// mongoose.connect(config.dbURL, config.dbOptions);
//
// mongoose.connection
//   .once('open', () => {
//     console.log('Mongoose - successful connection ...');
//     app.listen(process.env.PORT || config.port,
//       () => console.log(`Server start on port ${config.port} ...`));
//   })
//   .on('error', error => console.warn(error));

