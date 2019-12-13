import model from '../models/user'
import user from '../models/user';
class User {
    async create_user(data){
      try {
        const text = `INSERT INTO
        users(first_name, last_name, email, password, birth_day, gender)
        VALUES($1, $2, $3, $4, $5, $6)
        returning *`;
        const users = await model.execute(text, data);
        if(users.routine == '_bt_check_unique'){
            return undefined;
        }
        const { rows } = users;
        return rows;
      } catch (error) {
          console.log(`error accured in service ${error}`)
      }
    }
    async login_user(email, pass) {
        const text = 'SELECT * FROM users WHERE email = $1';
        try {
          const { rows } = await model.execute(text, [email]);
          return rows[0];
        } catch (error) {
          console.log(`error accured ${error}`);
        }
      }
}

export default new User();