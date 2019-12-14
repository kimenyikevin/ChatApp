import jwt from 'jsonwebtoken';
import models from '../models/user'

const Auth = {
  async verifyToken(req, res, next) {
    const token = req.headers['token'];
    if(!token) {
      return res.status(400).send({ 
          status: 400,
          error: 'Token is not provided'
         });
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET);
      const text = 'SELECT * FROM users WHERE id = $1';
      const { rows } = await models.execute(text, [decoded.userId]);
      if(!rows[0]) {
        return res.status(400).send({ 
            status: 400,
            error: 'The token you provided is invalid' 
        });
      }
      req.user = rows[0];
      next();
    } catch(error) {
      return res.status(400).send({
          status: 400,
          error,
      });
    }
  }
}

export default Auth;