"use strict";

// 1. Create the Directory
let teamDirectory = [
  {
    name: "Leo Brooks",
    role: "Designer",
    skills: ["UI", "UX", "Figma"],
    available: true,
  },
  {
    name: "Sasha Ivana",
    role: "Developer",
    skills: ["HTML", "CSS", "JS"],
    available: false,
  },
  {
    name: "Jordan Lee",
    role: "Manager",
    skills: ["Planning", "Agile"],
    available: true,
  },
];

// 2. Add a New Specialist
teamDirectory.push({
  name: "Casey Moore",
  role: "QA Enginer",
  skills: ["Testing", "Debugging"],
  available: true,
});

// 3. Update Availability
console.log(teamDirectory[1].available); // false
teamDirectory[1].available = true;
console.log(teamDirectory[1].available); // true

// 4. Data Extraction
// a. first name and first skill of first team member
console.log(
  `name: ${teamDirectory[0].name} \nskill: ${teamDirectory[1].skills[0]}`,
);
// b. name and total number of skills of last team member
console.log(
  `name: ${teamDirectory[3].name} \nnumber of skills: ${teamDirectory[3].skills.length}`,
);
// c. total number of people in the directory
console.log(`Total people: ${teamDirectory.length}`);
