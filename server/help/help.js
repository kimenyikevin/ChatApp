import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class Info {
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  }
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }
  generateToken(id) {
    const token = jwt.sign({
      userId: id
    },
      process.env.SECRET, { expiresIn: '10d' }
    );
    return token;
  }
}

export default new Info();