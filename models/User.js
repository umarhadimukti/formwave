import mongoose from 'mongoose';

// make user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
}, {timestamps: true});

// make user model
const User = mongoose.model('User', UserSchema);

export default User;

// const createUser = (name, email, password) => {
//   const create = new User({name, email, password});
//   create.save();
// };

// const updateUser = async (name, email, password) => {
//   const update = await User.findOneAndUpdate({name, email, password});
//   console.log(`name: ${update.name}\nemail: ${update.email}\npassword: ${password}`);
// }

// export const start = async () => {
//   await createUser('Umar Hadi Mukti', 'umarhadimukti@gmail.com', '123456');
//   setTimeout(() => updateUser('Nabila Nishfi', 'nabilanishfi20@gmail.com', '1234'), 3000);
// }