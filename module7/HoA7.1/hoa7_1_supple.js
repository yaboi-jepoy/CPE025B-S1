"use strict";

let contacts = [
  {
    name: "Linus Torvalds",
    role: "System Admin",
    skills: ["Linux", "Git", "Kernels"],
    availability: true,
  },
  {
    name: "Ada Lovelace",
    role: "Logic Analyst",
    skills: ["Algorithms", "Math", "Analytics"],
    availability: false,
  },
  {
    name: "Alan Turing",
    role: "Cryptographer",
    skills: ["Logic", "Enigma", "Security"],
    availability: true,
  },
];

let response;

function mainMenu() {}

function showContact(array, index) {
  if (array instanceof Array == false) {
    return;
  }
  let max = array.length - 1;
  if (index > max) {
    alert(`Contacts only has ${max} contacts in it.`);
  }
  alert(
    `${array[index].name}\n${array[index].role}\n${array[index].skills}\n${array[index].availability}`,
  );
}

function showAllContacts(array) {
  if (array instanceof Array == false) {
    return;
  }
  let content = "";
  for (let index = 0; index <= array.length - 1; index++) {
    content += `${index + 1}. ${array[index].name} | ${array[index].role} | ${array[index].skills} | ${array[index].availability} \n`;
  }
  alert(content);
}

function addContact(array) {
  if (array instanceof Array == false) {
    return;
  }
  let name = prompt("Enter name:");
  let role = prompt("Enter role:");
  let skill = prompt("Enter a skill:");

  if (name && role && skill) {
    array.push({
      name: name,
      role: role,
      skills: [skill],
      availability: true,
    });
    alert("Contact added successfully!");
  } else {
    alert("Error: All fields (name, role, skill) must be filled in.");
  }
}

function searchContact(array) {
  if (array instanceof Array == false) {
    return;
  }
  let searchName = prompt("Enter name to search: ");
  if (searchName == null) {
    return;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.toLowerCase().includes(searchName.toLowerCase())) {
      alert(`${array[i].name} / ${array[i].phone} / ${array[i].email}`);
    } else {
      alert("Contact not found.");
      break;
    }
  }
}

while (response != "quit") {
  response = prompt("Enter your choice: \nShow \nAll \nAdd \nSearch \nQuit");
  switch (response.toLowerCase()) {
    case "show":
      response = prompt("Enter entry index:");
      showContact(contacts, response);
      break;
    case "all":
      showAllContacts(contacts);
      break;
    case "add":
      addContact(contacts);
      break;
    case "search":
      searchContact(contacts);
      break;

    default:
      break;
  }
}
