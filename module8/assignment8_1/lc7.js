function sendEmail(from, to, message) {}

class User {
  constructor(name, surname, email, role) {
    if (typeof name === "object" && name !== null) {
      this.name = name.name;
      this.surname = name.surname;
      this.email = name.email;
      this.role = name.role;
    } else {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.role = role;
    }
    this.courses = [];
    this.messages = [];
  }

  addCourse(course, level) {
    this.courses.push({ course, level });
  }

  removeCourse(course) {
    this.courses = this.courses.filter((c) => c.course !== course);
  }

  editCourse(course, level) {
    let found = this.courses.find((c) => c.course === course);
    if (found) found.level = level;
    else this.addCourse(course, level);
  }

  sendMessage(from, message) {
    this.messages.push({
      from: `${from.name} ${from.surname}`,
      fromEmail: from.email,
      message,
      timestamp: new Date(),
    });
    sendEmail(from.email, this.email, message);
  }

  showMessagesHistory() {
    this.messages.forEach((msg) => {
      console.log(`${msg.fromEmail} -> ${this.email}: ${msg.message}`);
    });
  }
}

class ExtendedUser extends User {
  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(fullName) {
    const [name, surname] = fullName.split(" ");
    this.name = name;
    this.surname = surname;
  }
}

class Teacher extends ExtendedUser {
  constructor(name, surname, email) {
    if (typeof name === "object" && name !== null) {
      super(name.name, name.surname, name.email, "teacher");
    } else {
      super(name, surname, email, "teacher");
    }
  }
}

class Student extends ExtendedUser {
  constructor(name, surname, email) {
    if (typeof name === "object" && name !== null) {
      super(name.name, name.surname, name.email, "student");
    } else {
      super(name, surname, email, "student");
    }
  }
}

//! TEST CODE, DO NOT MODIFY
let student1 = new Student({
  name: "Rafael",
  surname: "Fife",
  email: "rfife@rhyta.com",
});
let student2 = new Student({
  name: "Kelly",
  surname: "Estes",
  email: "k_estes@dayrep.com",
});
let teacher1 = new Teacher({
  name: "Paula",
  surname: "Thompkins",
  email: "PaulaThompkins@jourrapide.com",
});

student1.addCourse("maths", 2);
teacher1.addCourse("biology", 3);
teacher1.editCourse("chemistry", 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = "Rafael Fifer";
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses
