import model from '../models/user'

class User {
    async create_user(data){
      try {
        const text = `INSERT INTO
        users(first_name, last_name, email, user_name, password, birth_day, gender)
        VALUES($1, $2, $3, $4, $5, $6, $7)
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
    async login_user(user_name) {
        const text = 'SELECT * FROM users WHERE user_name = $1';
        try {
          const { rows } = await model.execute(text, [user_name]);
          return rows[0];
        } catch (error) {
          console.log(`error accured ${error}`);
        }
      }
      async getAll_user() {
        const findAll = 'SELECT * FROM users';
        try {
          const { rows } = await model.execute(findAll);
          return rows;
        } catch(error) {
          console.log(`error accured ${error}`);
        }
      }
      async getOne_user(id) {
        const text = 'SELECT * FROM users WHERE id = $1';
        try {
          const { rows } = await model.execute(text, id);
          if (!rows[0]) {
            return undefined;
          }
          return rows;
        } catch(error) {
          console.log(`error accured ${error}`);
        }
      }

      async create_messages(data){
        try {
          const findReceiver = 'SELECT * FROM users WHERE id = $1';
          const  receiver_id = data[1];
          const receiver = await model.execute(findReceiver, [receiver_id])
           const { rows } = receiver;
          if(!rows[0]){
              return undefined;
          }
          const text = `INSERT INTO
          messages(sender_id, receiver_id, sender_username, receiver_username, message, created_date)
          VALUES($1, $2, $3, $4, $5, $6)
          returning *`;
          const messages = await model.execute(text, data);
          return messages;
        } catch (error) {
            console.log(`error accured in service ${error}`)
        }
      }
      async getOneMessage(id) {
        const text = 'SELECT * FROM messages WHERE receiver_id = $1';
        try {
          const { rows } = await model.execute(text, id);
          if (!rows[0]) {
            return undefined;
          }
          return rows;
        } catch(error) {
          console.log(`error accured ${error}`);
        }
      }
}

export default new User();