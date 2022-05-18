import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  articles: [{ type: mongoose.Types.ObjectId, ref: 'Article' }],
  isAdmin: Boolean,
  isWriter: Boolean,
  isEditor: Boolean,
  isCoach: Boolean,
  isAthlete: Boolean,
  isMedical: Boolean,
});

UserSchema.pre('save', function encryptPassword(next) {
  // * this -> new document that's gonna be created { username: ..., password: ... etc. }
  // * hashSync -> turn my password into a hash
  // * bcrypt.genSaltSync() -> adds a SALT. A salt is an extra string that gets added to the end
  // * of our hash, making it just a little bit more secure.
  // ! If the password has changed...
  if (this.isModified('password')) {
    // ! Hashing the password
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
  }
  // ! Tell mongoose to continue its lifecycle
  next();
});

// ! This function will compare the password the user logs in with, with the hashed pw in database.
// ! So the 2 hashes get compared together, if they're the same, you're golden.
UserSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('User', UserSchema);
