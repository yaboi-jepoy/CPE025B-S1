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
    "A. Display a specific contact. \nB. Show all contacts. \nC. Add new contact.\nD. Show sorted \n    Quit \nType the option: ",
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
  } else if (response.toLowerCase() == "d") {
    sortAction(contacts);
  } else if (response.toLowerCase() == "quit") {
    return;
  } else if (response == null) {
    mainMenu();
  }
}

let showContact = function (contacts, i) {
  if (contacts instanceof Array && contacts[i]) {
    console.log(
      `${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`,
    );
  }
};

let showAllContacts = function (contacts) {
  if (contacts instanceof Array) {
    for (contact of contacts) {
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
  }
};

let addNewContact = function (contacts, name, phone, email) {
  if (contacts instanceof Array && name && phone && email) {
    contacts.push({
      name: name,
      phone: phone,
      email: email,
    });
  }
};

function sortContacts(contacts, sortBy) {
  if (contacts instanceof Array) {
    contacts.sort(function (first, second) {
      if (first[sortBy] < second[sortBy]) {
        return -1;
      }
      if (first[sortBy] > second[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
}

function sortAction(contacts) {
  let sortBy = prompt("Sort by: name, phone, or email?");

  if (sortBy === "name" || sortBy === "phone" || sortBy === "email") {
    sortContacts(contacts, sortBy);
    console.log("Contacts sorted by " + sortBy);
    showAllContacts(contacts);
  } else {
    console.log("Invalid sort option. Choose name, phone, or email.");
  }
}

mainMenu();
