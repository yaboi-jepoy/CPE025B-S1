class User {
  #firstName;
  #lastName;
  #email;

  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(value) {
    let nameRegex = /^[A-Z][a-z]*$/;
    if (nameRegex.test(value)) {
      this.#firstName = value;
    } else {
      throw new Error(
        "First name must start with uppercase letter and contain only letters",
      );
    }
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(value) {
    let nameRegex = /^[A-Z][a-z]*$/;
    if (nameRegex.test(value)) {
      this.#lastName = value;
    } else {
      throw new Error(
        "Last name must start with uppercase letter and contain only letters",
      );
    }
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    let emailRegex = /^[a-z]+(\.[a-z]+)*@[a-z]+(\.[a-z]+)*$/;
    if (emailRegex.test(value)) {
      this.#email = value;
    } else {
      throw new Error("Invalid email format");
    }
  }

  get name() {
    return this.#firstName;
  }

  get surname() {
    return this.#lastName;
  }
}

class Users {
  constructor() {
    this.userMap = new Map();
  }

  add(firstName, lastName, email) {
    try {
      let user = new User(firstName, lastName, email);
      // only add if not already present
      if (!this.userMap.has(email)) {
        this.userMap.set(email, user);
      }
    } catch (err) {
      throw err;
    }
  }

  delete(email) {
    this.userMap.delete(email);
  }

  get(email) {
    return this.userMap.get(email);
  }

  getAll(sortBy) {
    let allUsers = Array.from(this.userMap.values());

    if (sortBy === "name") {
      allUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (sortBy === "surname") {
      allUsers.sort((a, b) => a.lastName.localeCompare(b.lastName));
    } else if (sortBy === "email") {
      allUsers.sort((a, b) => a.email.localeCompare(b.email));
    }

    return allUsers;
  }
}

//! TEST CASES, DO NOT MODIFY
let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map((u) => u.name));
console.log(users.getAll("surname").map((u) => u.surname));
console.log(users.getAll("email").map((u) => u.email));
