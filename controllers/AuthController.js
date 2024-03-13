import { User } from '../models/User.js';

export class AuthController {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({message: 'Berhasil mendaftar!', data: user});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }
}