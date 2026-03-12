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

    this.courses = {};
    this.messages = [];
  }

  addCourse(course, level) {
    this.courses[course] = level;
    console.log(`${course} (Level ${level}) added to ${this.name}'s courses`);
  }

  removeCourse(course) {
    if (this.courses.hasOwnProperty(course)) {
      delete this.courses[course];
      console.log(`${course} removed from ${this.name}'s courses`);
    } else {
      console.log(`${course} not found in ${this.name}'s courses`);
    }
  }

  editCourse(course, level) {
    if (this.courses.hasOwnProperty(course)) {
      this.courses[course] = level;
      console.log(`${course} level updated to ${level} for ${this.name}`);
    } else {
      console.log(`${course} not found in ${this.name}'s courses`);
    }
  }

  sendMessage(from, message) {
    const messageData = {
      from: `${from.name} ${from.surname}`,
      fromEmail: from.email,
      toEmail: this.email,
      message: message,
      timestamp: new Date(),
    };
    this.messages.push(messageData);

    sendEmail(from.email, this.email, message);
    console.log(`${from.email} -> ${this.email}: ${message}`);
  }

  showMessagesHistory() {
    console.log(`\n--- Messages History for ${this.name} ${this.surname} ---`);
    if (this.messages.length === 0) {
      console.log("No messages yet");
    } else {
      this.messages.forEach((msg, index) => {
        console.log(`${index + 1}. From: ${msg.from} (${msg.fromEmail})`);
        console.log(`   Message: ${msg.message}`);
        console.log(`   Time: ${msg.timestamp}`);
      });
    }
    console.log("");
  }

  get courses() {
    return this._courses;
  }

  set courses(value) {
    this._courses = value;
  }
}

//! TEST CODE, DO NOT
let student1 = new User({
  name: "Rafael",
  surname: "Fife",
  email: "rfife@rhyta.com",
  role: "student",
});
let student2 = new User({
  name: "Kelly",
  surname: "Estes",
  email: "k_estes@dayrep.com",
  role: "student",
});
let teacher1 = new User({
  name: "Paula",
  surname: "Thompkins",
  email: "PaulaThompkins@jourrapide.com",
  role: "teacher",
});

student1.addCourse("maths", 2);
student1.addCourse("physics", 1);
student1.removeCourse("physics");
teacher1.addCourse("biology", 3);
teacher1.editCourse("biology", 4);
console.log(
  `${student1.name}: ${Object.keys(student1.courses).length} courses`,
); // -> Rafael: 1 courses
console.log(
  `${teacher1.name}: ${Object.keys(teacher1.courses).length} courses`,
); // -> Paula: 1 courses
teacher1.sendMessage(student1, "test message");
teacher1.sendMessage(student1, "another message");
teacher1.showMessagesHistory();
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: test message
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: another message
