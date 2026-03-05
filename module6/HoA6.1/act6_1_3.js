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
    "1. Show first contact. \n2. Show last contact. \n3. Show all contacts. \n4. Add new contact contact. \n0. Exit \nEnter # of choice: ",
    0,
  );

  if (response == 1) {
    showContacts(1, contacts);
  } else if (response == 2) {
    showContacts(2, contacts);
  } else if (response == 3) {
    showContacts(3, contacts);
  } else if (response == 4) {
    appendContact(contacts);
  } else if (response == 0) {
    return;
  }
}

function showContacts(condition, inputArray) {
  let last = inputArray.length - 1;
  if (condition == 1) {
    alert(
      `${inputArray[0].name} / ${inputArray[0].phone} / ${inputArray[0].email}`,
    );
    mainMenu();
  } else if (condition == 2) {
    alert(
      `${inputArray[last].name} / ${inputArray[last].phone} / ${inputArray[last].email}`,
    );
    mainMenu();
  } else if (condition == 3) {
    let body = "Contacts: \n";
    for (let i = 0; i < inputArray.length; i++) {
      body += `${inputArray[i].name} / ${inputArray[i].phone} / ${inputArray[i].email} \n`;
    }
    alert(body);
    mainMenu();
  }
}

// call main menu
mainMenu();
