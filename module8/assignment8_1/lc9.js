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

class Tutoring {
  constructor() {
    this.students = [];
    this.teachers = [];
  }

  addStudent(name, surname, email) {
    this.students.push(new Student(name, surname, email));
  }

  addTeacher(name, surname, email) {
    this.teachers.push(new Teacher(name, surname, email));
  }

  getStudentByName(name, surname) {
    return this.students.find((s) => s.name === name && s.surname === surname);
  }

  getTeacherByName(name, surname) {
    return this.teachers.find((t) => t.name === name && t.surname === surname);
  }

  getTeacherForStudent(student) {
    return this.teachers.filter((teacher) => {
      let match = ExtendedUser.match(teacher, student);
      return match.length > 0;
    });
  }

  getStudentsForTeacher(teacher) {
    return this.students.filter((student) => {
      let match = ExtendedUser.match(teacher, student);
      return match.length > 0;
    });
  }
}

//! TEST CASES, DO NOT MODIFY
let tutoring = new Tutoring();
tutoring.addStudent("Rafael", "Fife", "rfife@rhyta.com");
tutoring.addStudent("Kelly", "Estes", "k_estes@dayrep.com");
tutoring.addTeacher("Paula", "Thompkins", "PaulaThompkins@jourrapide.com");
let student = tutoring.getStudentByName("Rafael", "Fife");
student.addCourse("maths", 2);
student.addCourse("physics", 4);
let teacher = tutoring.getTeacherByName("Paula", "Thompkins");
teacher.addCourse("maths", 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

student = tutoring.getStudentByName("Kelly", "Estes");
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...
