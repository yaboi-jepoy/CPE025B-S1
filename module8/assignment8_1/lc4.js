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
  edit: function (title, artist, date) {
    for (item of this.list) {
      if (item.title === title) {
        item.artist = artist;
        item.date = date;
      }
    }
  },
  delete: function (title) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].title === title) {
        this.list.splice(i, 1);
      }
    }
  },
};

//! TEST CASES, DO NOT MODIFY
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Last Supper", "Leonardo da Vinci", 1495);
images.add("The Starry Night", "Vincent van Gogh", 1889);
images.edit("Mona Lisa", "Leonardo da Vinci", 1504);
images.delete("The Last Supper");
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)
