import { User } from '../models/User.js';

export default class AuthController {
  static async register(req, res) {
    try {
      const user = await new User(req.body);
      user.save();
      return res.status(201).json({message: 'Berhasil mendaftar!', data: user});
    } catch (err) {
      return res.status(500).json({message: err.message});
    }
  }
}

// export default new AuthController;