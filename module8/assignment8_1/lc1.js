import images from "./images.js";

images.forEach((image) => {
  console.log(`${image.title} by ${image.artist} (${image.date})`);
});
