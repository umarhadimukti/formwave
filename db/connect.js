import mongoose from 'mongoose';

const connectDB = (URI) => {
  mongoose.connect(URI);
  const connection = mongoose.connection;
  connection.on('error', console.error.bind(console, 'connection error: '));
  connection.once('open', () => console.log('Connection DB successfully!'));
}

export default connectDB;