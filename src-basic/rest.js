const user ={name:'gun', age: 10};
const user1 ={name:'재희', age: user.age};
const user2 ={...user, name:'영자'};
console.log(user1);
console.log(user);
console.log(user2);

const fruits = ['사과', '바나나', '오렌지'];
console.log(fruits.concat('포도'));
const fruits2 =[...fruits];
console.log("fruits2", fruits2);