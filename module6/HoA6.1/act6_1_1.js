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

// write your code here
function appendContact(inputArray) {
  // ask for input
  let _name = prompt("Input new name:", 0);
  let _phone = prompt("Input new phone:", 0);
  let _email = prompt("Input new email:", 0);

  // append to array
  inputArray.push({ name: _name, phone: _phone, email: _email });
}

let last = contacts.length - 1;

console.log(
  `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`,
);
console.log(
  `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`,
);

appendContact(contacts);
last = contacts.length - 1;
console.log(
  `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`,
);
