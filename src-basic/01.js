//... spread operator
const user = { name: "철수", age: 20 };
const user1 = { name: "영희", age: user.age };
const user2 = { ...user, name: "정숙" };
console.log(user1);
console.log(user);
console.log(user2);

const fruits = ["사과", "바나나"];
const fruits1 = fruits.concat("오렌지");
const fruits2 = [...fruits, "망고"];
console.log(fruits.concat("오렌지"));
console.log("fruits2", fruits2);
