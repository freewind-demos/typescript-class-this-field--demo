class User {
  constructor() {
    (this as any)['name'] = 'abc'
  }
}

const user = new User();
console.log(user);
