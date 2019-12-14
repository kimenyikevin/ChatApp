import service from '../service/service';
import Helper from '../help/help'

class User {
  async create(req, res) {
    const hashPassword = Helper.hashPassword(req.body.password);
    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.userName,
      hashPassword,
      req.body.birthDay,
      req.body.gender,
    ];

    try {
      const rows   = await service.create_user(values);
      if(!rows){
        return res.status(409).send({
            status: 409,
            error: `E-mail ${req.body.email} is alrady exist`,
          });
      }
      const token = Helper.generateToken(rows[0].id)
      return res.status(201).send({
          status: 201,
          token,  
      });
    } catch(error) {
      return res.status(400).send(error);
    }
  }
async login(req, res){
    try {
      const user = await service.login_user(req.body.userName);
      if (!user) {
        return res.status(404).send({
          status: 404,
           error: `${req.body.userName} does not exist in our database` 
          });
      }
      if (!Helper.comparePassword(user.password, req.body.password)) {
        return res.status(400).send({ 
            status: 400,
            error: 'user_name and password do not match' 
          });
      }
      const token = Helper.generateToken(user.id, user.email);
      return res.status(200).send({
        status: 200,
        message: 'User is successfully logged in',
        token:  token,
        });
    } catch (error) {
      return res.status(400).send({
        error: `error accured ${error}`,
      });
    }
}
async getAll(req, res) {
  try {
    const user  = await service.getAll_user();
    if(user.length < 1){
      return res.status(404).send({
        status: 404,
         error: `no user found in our databse` 
        });
    }
    const owner = req.user;
const foundUser = user.find(u => owner.id === u.id)
if(foundUser){
  const index = user.indexOf(foundUser);
  user.splice(index, 1);
}
const newUsers = user.map(u => {
  const {id, email, password, birth_day, gender, ...userInfo} = u;
  return userInfo;
});
    return res.status(200).send({
       status: 200,
       data: newUsers
      });
  } catch(error) {
    return res.status(400).send(error);
  }
}
}

export default new User();