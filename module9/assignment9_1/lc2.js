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
    // first letter uppercase, rest lowercase, letters only
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
    // first letter uppercase, rest lowercase, letters only
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
    // email format: letters only, separated by dots, @ required
    let emailRegex = /^[a-z]+(\.[a-z]+)*@[a-z]+(\.[a-z]+)*$/;
    if (emailRegex.test(value)) {
      this.#email = value;
    } else {
      throw new Error("Invalid email format");
    }
  }

  toString() {
    return `User { firstName: '${this.#firstName}', lastName: '${this.#lastName}', email: '${this.#email}' }`;
  }
}

//! TEST CASES, DO NOT MODIFY
try {
  let user1 = new User("Aaaa", "Bbbb", "Aaaa@gmail.com");
  console.log(user1);
  let user2 = new User("aaaa", "Bbbb", "Aaaa@gmail.com"); // -> Error
} catch (err) {
  console.log(err.message);
}
