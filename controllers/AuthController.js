import { User } from '../models/User.js';

export default class AuthController {
  static async register(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({message: 'Berhasil mendaftar!', data: user});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }
}

// export default new AuthController;