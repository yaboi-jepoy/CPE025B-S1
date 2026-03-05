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

function appendContact(inputArray) {
  // ask for input
  let _name = prompt("Input new name:", "");
  let _phone = prompt("Input new phone:", "");
  let _email = prompt("Input new email:", "");

  // check if the details are complete
  if (_name != "" && _phone != "" && _email != "") {
    // append to array
    inputArray.push({ name: _name, phone: _phone, email: _email });
  } else {
    alert("Incomplete information. Enter details again.");
  }

  mainMenu();
}

function mainMenu() {
  let response = prompt(
    "A. Display a specific contact. \nB. Show all contacts. \nC. Add new contact. \nD. Search contact using name. \n    Quit \nType the option: ",
    "quit",
  );

  if (response.toLowerCase() == "a") {
    showContacts(1, contacts);
  } else if (response.toLowerCase() == "b") {
    showContacts(2, contacts);
  } else if (response.toLowerCase() == "c") {
    appendContact(contacts);
  } else if (response.toLowerCase() == "d") {
    showContacts(3, contacts);
  } else if (response.toLowerCase() == "quit") {
    return;
  } else if (response == null) {
    mainMenu();
  }
}

function showContacts(mode, inputArray) {
  /// modes 1 = index search, 2 = show all, 3 = search name
  let max = inputArray.length - 1;

  if (mode == 1) {
    let index = prompt("Enter index of contact:");
    if (index == null) {
      mainMenu();
    }
    if (index > max) {
      alert(`Please enter 0-${inputArray.length - 1} only.`);
    } else {
      alert(
        `${inputArray[index].name} / ${inputArray[index].phone} / ${inputArray[index].email}`,
      );
    }
    mainMenu();
  } else if (mode == 2) {
    let body = "Contacts: \n";
    for (let i = 0; i < inputArray.length; i++) {
      body += `${inputArray[i].name} / ${inputArray[i].phone} / ${inputArray[i].email} \n`;
    }
    alert(body);
    mainMenu();
  } else if (mode == 3) {
    let searchName = prompt("Enter name to search: ");
    if (searchName == null) {
      mainMenu();
    }
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].name.toLowerCase().includes(searchName.toLowerCase())) {
        alert(
          `${inputArray[i].name} / ${inputArray[i].phone} / ${inputArray[i].email}`,
        );
      } else {
        alert("Contact not found.");
        break;
      }
    }
    mainMenu();
  }
}

// call main menu
mainMenu();
