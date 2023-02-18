const mongoose = require('mongoose');

const startDB =  async() => {
    await mongoose.connect('mongodb+srv://rehcardosochagas:123456R.@cluster0.vvly0wg.mongodb.net/test');
}

module.exports = startDB;