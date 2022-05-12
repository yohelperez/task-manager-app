const mongoose = require('mongoose');

const URI= 'mongodb+srv://yohelperez:yohelperez98@cluster0.01l9s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

module.exports = mongoose;