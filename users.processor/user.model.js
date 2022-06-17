const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      firstName: {
        type : String,
        required : true
      },
      lastName: {
        type : String,
        required : true
      },
      email: {
        type : String,
        required : false,
        match: /.+\@.+\..+/,
        unique : true
      },
      phone: {
        type : String,
        required : true,
        unique : true
      },
      isDeleted: {
        type : Boolean,
        default : false
      },
      blockedUsers: {
        type: [String]
      },
      appSettings: {
        type: String
      }
})

const model = mongoose.model('user', userSchema);



exports.create = (user) => {
  
    if (!user.lastName || !user.firstName || !user.phone ) {
        throw new Error("Mandatory fields can not be empty!" );
      }
  
    const newUser = new model(user);

    return newUser
      .save()
      .then(data => data)
      .catch(err => {
        throw err;
      });
};
exports.findByProperty = (filter) => model.findOne(filter).exec();
