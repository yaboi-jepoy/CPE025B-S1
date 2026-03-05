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
  if (_name != "" || _phone != "" || _email != "") {
    // append to array
    inputArray.push({ name: _name, phone: _phone, email: _email });
  } else {
    alert("Incomplete information. Enter details again.");
  }

  mainMenu();
}

function mainMenu() {
  let response = prompt(
    "1. Show first contact. \n2. Show last contact. \n3. Add new contact contact. \nEnter # of choice: ",
    0,
  );

  if (response == 1) {
    showFirst();
  } else if (response == 2) {
    showLast();
  } else if (response == 3) {
    appendContact(contacts);
  } else if (response == 0) {
    return;
  }
}

function showFirst() {
  alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
  mainMenu();
}

function showLast() {
  let last = contacts.length - 1;
  alert(
    `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`,
  );
  mainMenu();
}

// call main menu
mainMenu();
