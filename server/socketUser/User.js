const users = [];

const addUser = ({ id, userName, password }) => {
  const user = { id, userName, password};
  users.push(user);
  return { user };
}
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id); 

const getUsersInRoom = (password) => users.filter((user) => user.password === password);

export {  addUser, removeUser, getUser, getUsersInRoom  };