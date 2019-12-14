import dotenv from 'dotenv';
import helper from '../help/help'

dotenv.config();

export const testingData = {
    newUser:{
        firstName: 'habimana',
        lastName: 'emmy',
        email: 'habimanaemmy@gmail.com',
        userName: 'habimanaemmy',
        password: 'kigalikigali',
        birthDay: '27.03.1996',
        gender: 'male'
      },
      notMacthUser:{
        firstName: 'habimana',
        lastName: 'emmy',
        email: 'habimanaemmy@gmail.com',
        userName: 'habimanaemmy',
        password: 'kigalik',
        birthDay: '27.03.1996',
        gender: 'male'
      },
    wrongUser:{
        firstName: 'habimana',
        lastName: 'emmy',
        email: 'habimanaemmy@gmail.com',
        userName: '0',
        password: 'kigalikigali',
        birthDay: '27.03.1996',
        gender: 'male'
      },
     validationUser: {
        firstName: '',
        lastName: 'emmy',
        email: 'habimanaemmy@gmail.com',
        userName: 'habimanaemmy',
        password: 'kigalikigali',
        birthDay: '27.03.1996',
        gender: 'male'
      },
}
 

export const invaldToken = helper.generateToken(0);


// export const notExistUserToken = helper.generateToken(0, 'testuser@gmail.com');



// export const realMentor = helper.generateToken(3, 'mentor@gmail.com');

// export const realAdmin = helper.generateToken(1, 'kimenyikevin@gmail.com');

const hashPassword = helper.hashPassword('kigalikigali');
export const text = `INSERT INTO
users(id, first_name, last_name, email, user_name, password, birth_day, gender)
VALUES($1, $2, $3, $4, $5, $6, $7, $8)
returning *`;
export const testData = [
  1,
  'habimana',
  'emmy',
  'habimanaemmy01@gmail.com',
  'habimana',
  hashPassword,
  '28.3.1996',
  'male'
];
// export const insertAdmin = `
// INSERT INTO users (id,firstName, lastName, email, password, address, bio,status, occupation, expertise)
// VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
// `;
// export const insertSesssion = `INSERT INTO  sessions (sessionid, mentorid, menteeid, questions, menteeemail)
// VALUES ($1, $2, $3, $4)
// RETURNING *`;
// const hashPass = helper.hashPassword('passwordpass');
// export const values = [
//   1,
//   'kimenyi',
//   'kevin',
//   'kimenyikevin@gmail.com',
//   hashPass,
//   'kigali',
//   'engineer',
//   'Admin',
//   'engineer',
//   'engineer'
// ];
// export const userTest = [
//   2,
//   'kimenyi',
//   'kevin',
//   'usertest@gmail.com',
//   hashPass,
//   'kigali',
//   'engineer',
//   'user',
//   'engineer',
//   'engineer'
// ];

// export const mentorTest = [
//   3,
//   'kimenyi',
//   'kevin',
//   'mentortest@gmail.com',
//   hashPass,
//   'kigali',
//   'engineer',
//   'mentor',
//   'engineer',
//   'engineer'
// ];

// export const session = [
//   1,
//   2,
//   2,
//   'i need help',
//   'usertest@gmail.com'
// ]