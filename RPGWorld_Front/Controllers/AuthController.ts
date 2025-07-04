import USERS from '../DummyData/Users.json';

type IUser = {
  id: number;
  email: string;
  password: string;
  token: string;
};

const users: IUser[] = USERS;

export function loginController(email: string, password: string) {
  console.log(users);
  const loggedUser = users.find(
    user => user.email === email && user.password === password,
  );
  return loggedUser;
}

export function signupController(email: string, password: string) {
  const newUser: IUser = {
    id: Math.floor(Math.random() * 100000 + 1),
    email: email,
    password: password,
    token: 'adsoidhjasokdjaoskdjoasikjdoasdij',
  };
  users.push(newUser);
  return newUser;
}
