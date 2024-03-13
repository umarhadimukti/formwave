import mongoose from 'mongoose';

// make user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'field name wajib diisi!'],
    minLength: [3, 'nama harus minimal 3 kata.']
  },
  email: {
    type: String,
    required: [true, 'field email wajib diisi!'],
  },
  password: {
    type: String,
    required: [true, 'field password wajib diisi!'],
    minLength: [6, 'password harus minimal 6 huruf.']
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
}, {timestamps: true});

// make user model
export const User = mongoose.model('User', UserSchema);


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