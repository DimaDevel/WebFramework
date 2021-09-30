import { User } from "./models/User";

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'newName' });

user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});

user.trigger('change');

console.log(user);

// console.log(user.get('name'));
// console.log(user.get('age'));