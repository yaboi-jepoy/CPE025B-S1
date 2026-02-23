"use strict";

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 7196495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villareal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
  {
    name: "Malsie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca",
  },
];

// hehe tinatamad po mag type
for (let index = 0; index < contacts.length; index++) {
  const name = contacts[index].name;
  const phone = contacts[index].phone;
  const email = contacts[index].email;

  console.log(`Contact #${index}: ${name}, ${phone}, ${email}`);
}
