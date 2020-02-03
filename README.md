# ChatApp
[![Build Status](https://travis-ci.com/kimenyikevin/ChatApp.svg?token=nSaAX5QFfDwLa34qR6Cs&branch=develop)](https://travis-ci.com/kimenyikevin/ChatApp)
[![Coverage Status](https://coveralls.io/repos/github/kimenyikevin/ChatApp/badge.svg?branch=develop)](https://coveralls.io/github/kimenyikevin/ChatApp?branch=develop)



# ChatApp Challege Project  
**ChatApp** is a web chat application  which allow people to communicate in real time using their browser. this application can be compotible with all available browser.

I developed UI for Fronted in **Reactjs** and also i developed API for this project to functionality. 

Here is important pages you should first on my project. 

* Home page.
* Sing up page, after sign up you will be redirected to signin page.
* Sign in page.
* User dashboard,where you should chat with your freinds.


### HOW DO I CHAT WITH MY FREINDS ON THIS APP
Start to communicate with your freinds by clicking on sigbup and register your acccount, sign in with you user name and password to start chat.
* To see **ChatApp** simply click on this [link]()

### ChatApp Back-End 
Here is a list of all API Endpoints that you will find:
* POST /api/v1/signup: before you do anything first create an account.
* POST /api/v1/login: if you already have an acount you can use this EndPoint to sign in.
* GET /api/v1/getall : This EndPoint wiil help you to display all users available.
* GET /api/v1/getall/:id : this EndPoint is for specific user.
* POST /api/v1/messages : this Endpoint is for user want to send message.
* POST /api/v1/messages/:receiver_id : this Endpoint is for user want to see messages have sent to specific user.

### Technology tools used in this Project
* Server side Framework : **Node/Express**
* Linting Library: **ESLint**
* Style Guide: **Airbnb**
* Testing Framework: **Mocha**
* Database: **Postgresql**
* Hosting API: **Heroku**
* Hosting UI: **Netlify**
### Additional Tools
* JavaScript Es6 with Babel compiler
* TravisCI for Continous Integration
* nyc for test coverage
* PivotTrack for managing a user stories 
* Heroku for Deployment
* Reactjs for UI
### Here there is important link you may visit
* [chatapp019.herokuapp.com](https://chatapp019.herokuapp.com/) Here is link  for APIs EndPoints
* For a better test you will need to use [POSTMAN](https://www.getpostman.com/)
### Setup project locally
* Install [git](https://git-scm.com/downloads)
* Install [Node js](https://nodejs.org/en/)
* Clone Repo [ChatApp](https://github.com/kimenyikevin/ChatApp.git)

```
$ To move into folder
```
$ cd ChatApp
```
Install dependincies as they appear in package.json file by

```
$ npm install
```
To start the server do

```
$ npm run dev-start
```
To run the test do

```
$ npm run test
### Author
[Kevin KIMENYI](https://github.com/kimenyikevin)
### Mentor
[Eric Serge Uwimana](https://github.com/euwimana)

