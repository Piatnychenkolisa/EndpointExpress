const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    auth_id: {
        type : String,
        required : false,
        unique : true,
      },
      first_name: {
        type : String,
        required : true
      },
      last_name: {
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
      is_deleted: {
        type : Boolean,
        default : false
      },
      blocked_users: {
        type: [String]
      },
      app_settings: {
        type: String
      }
})

const model = mongoose.model('User', userSchema);

exports.create = (user) => {
    // Validate request
    if (!user.last_name || !user.first_name || !user.phone ) {
        throw new Error("Mandatory fields can not be empty!" );
      }
  
    // Create a User
    const newUser = new model(user);
    // Save User in the database
    return newUser
      .save()
      .then(data => {
        delete data.auth_id;
        return(data);
      })
      .catch(err => {
        throw err;
      });
  };