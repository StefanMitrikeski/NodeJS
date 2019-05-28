import urlsConfigs from '../../config/urls';
const Y = require("../../config/urls");

// console.log('configs', urlsConfigs['stagin']);
const json = {

}

const urlConfig = urlsConfigs['dev'];

// const users1 = urlConfig.users;

const { users } = urlConfig;
// console.log(users1);
// console.log(users);



const list = async (req, res, next) => {
  await next;
};

async function get(req, res, next) {
  await next;
};



const dev = {
  "arrayTemp": [
    "user", 
    "sdas",
    "Adassa"
  ],
  "users": "https://jsonplaceholder.typicode.com/users",
  "posts": "https://jsonplaceholder.typicode.com/posts",
  "sudents": "codeacademy.mk"
};

// console.log('DEVVVVVVVVV', dev);
// console.log('Url configs', urlsConfigs);
// console.log('config', urlConfig);
const array = ["asdas", "Asdas", "Asdas"]
// const url = "https://jsonplaceholder.typicode.com/users"
// const arr1 = [];
// array.forEach((a) => {
//   a = '44',
//   arr1.push(a);
// })

// console.log('Localy arr', array);


export default {
  list,
  get,
};
