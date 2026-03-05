"use strict";

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

function mainMenu() {
  let response = prompt(
    "A. Display a specific contact. \nB. Show all contacts. \nC. Add new contact.\n    Quit \nType the option: ",
    "quit",
  );

  if (response.toLowerCase() == "a") {
    let index = prompt("Enter index of contact:");
    showContact(contacts, index);
  } else if (response.toLowerCase() == "b") {
    showAllContact(contacts);
  } else if (response.toLowerCase() == "c") {
    let name = prompt("Input new name:", "");
    let phone = prompt("Input new phone:", "");
    let email = prompt("Input new email:", "");
    addNewContact(contacts, name, phone, email);
  } else if (response.toLowerCase() == "quit") {
    return;
  } else if (response == null) {
    mainMenu();
  }
}

function showContact(inputArray, index) {
  // error if input array is nonexistent
  if (inputArray instanceof Array == null) {
    alert(`${inputArray} not found.`);
    return;
  }
  let max = inputArray.length - 1;
  if (index > max) {
    alert(`Please enter 0-${inputArray.length - 1} only.`);
  } else {
    alert(
      `${inputArray[index].name} / ${inputArray[index].phone} / ${inputArray[index].email}`,
    );
  }
  mainMenu();
}

function showAllContact(inputArray) {
  if (inputArray instanceof Array == null) {
    alert(`${inputArray} not found.`);
    return;
  }
  let max = inputArray.length - 1;
  let body = "Contacts: \n";
  for (let i = 0; i < inputArray.length; i++) {
    body += `${inputArray[i].name} / ${inputArray[i].phone} / ${inputArray[i].email} \n`;
  }
  alert(body);
  mainMenu();
}

function addNewContact(inputArray, name, phone, email) {
  if (
    inputArray instanceof Array == null ||
    (name == "" && phone == "" && email == "")
  ) {
    alert(`Error adding contact. Please check details.`);
    return;
  }
  inputArray.push({ name: name, phone: phone, email: email });
  mainMenu();
}

mainMenu();
