let user = {
  name: 'crystal',
  age: 13,
  email: "crystal@thenentninja.com",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"]

};
console.log(user);
user.age = 35;
console.log(user.age);

console.log(user["name"]);
user['name'] = "Chun-li";
console.log(user["name"]);