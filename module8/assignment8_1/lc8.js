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

  static match(teacher, student, courseName) {
    if (courseName) {
      let studentCourse = student.courses.find((c) => c.course === courseName);
      if (!studentCourse) return undefined;
      let teacherCourse = teacher.courses.find((c) => c.course === courseName);
      if (!teacherCourse || teacherCourse.level < studentCourse.level)
        return undefined;
      return { course: courseName, level: studentCourse.level };
    }

    let matches = [];
    student.courses.forEach((studentCourse) => {
      let teacherCourse = teacher.courses.find(
        (c) => c.course === studentCourse.course,
      );
      if (teacherCourse && teacherCourse.level >= studentCourse.level) {
        matches.push({
          course: studentCourse.course,
          level: studentCourse.level,
        });
      }
    });
    return matches;
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

//! TEST CASE, DO NOT MODIFY
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
student1.addCourse("physics", 4);
teacher1.addCourse("maths", 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse("maths", 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse("physics", 4);
match = ExtendedUser.match(teacher1, student1, "physics");
console.log(match); // -> {course: 'physics', level: 4}
