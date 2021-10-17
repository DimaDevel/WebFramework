import { User } from './models/User';

const user = new User({ name: 'The brand new user', age: 44 });

// user.set({ name: 'NEW NAME', age: 21 });
user.save();