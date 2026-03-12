// import images from "./images";
class Image {
  constructor(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
  }
}

let images = {
  list: [],
  contains: function (title) {
    /// check if title is in list already
    let isPresent = false;
    for (item of this.list) {
      if (item.title === title) {
        isPresent = true;
        break;
      }
    }
    return isPresent;
  },
  add: function (title, artist, date) {
    if (!this.contains(title)) {
      this.list.push(new Image(title, artist, date));
    }
  },
  show: function () {
    this.list.forEach((item) =>
      console.log(`${item.title} by ${item.artist}, ${item.date}`),
    );
  },
  clear: function () {
    this.list = [];
  },
};

//! TEST CASES, DO NOT MODIFY
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Last Supper", "Leonardo da Vinci", 1495);
images.add("The Starry Night", "Vincent van Gogh", 1889);
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();
