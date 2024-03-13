import { User } from '../models/User.js';

export default class AuthController {
  static async register(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({status: true, message: 'Berhasil mendaftar!', data: user});
    } catch (err) {
      const errorMessage = err.message.substring(24);
      return res.status(500).json({status: false, message: errorMessage});
    }
  }
}

// export default new AuthController;