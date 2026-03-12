import images from "./images.js";

let Image = function (title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
};
let getImage = function (title, artist, date) {
  return (title, artist, date);
};

// blank arrays
let images1 = [];
let images2 = [];

// create new array from image
images.forEach((image) =>
  images1.push(new Image(image.title, image.artist, image.date)),
);
// create new array from images1
images1.forEach((image) =>
  images2.push(new Image(image.title, image.artist, image.date)),
);

images2.forEach((image) =>
  console.log(`"${image.title}" by ${image.artist} (${image.date})`),
);
