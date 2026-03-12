class Point {
  constructor(x, y) {
    this.type = "point";
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(pointCoordinates) {
    this.type = "line";
    this.points = pointCoordinates.map(
      (coord) => new Point(coord[0], coord[1]),
    );
  }
}

class Figure {
  constructor(elements = []) {
    this.elements = {
      points: [],
      lines: [],
    };

    // add initial elements if provided
    elements.forEach((element) => {
      if (element.type === "point") {
        this.elements.points.push(element);
      } else if (element.type === "line") {
        this.elements.lines.push(element);
      }
    });
  }

  addPoint(x, y) {
    this.elements.points.push(new Point(x, y));
  }

  addLine(pointCoordinates) {
    this.elements.lines.push(new Line(pointCoordinates));
  }

  toJSON() {
    return JSON.stringify(this.elements);
  }

  fromJSON(jsonData, append = false) {
    // parse if string, otherwise use as object
    let data = typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;

    if (!append) {
      this.elements = {
        points: [],
        lines: [],
      };
    }

    // add points
    if (data.points) {
      data.points.forEach((pointData) => {
        let point = new Point(pointData.x, pointData.y);
        this.elements.points.push(point);
      });
    }

    // add lines
    if (data.lines) {
      data.lines.forEach((lineData) => {
        let coords = lineData.points.map((p) => [p.x, p.y]);
        this.elements.lines.push(new Line(coords));
      });
    }
  }

  deleteAll() {
    this.elements.points = [];
    this.elements.lines = [];
  }
}

//! TEST CASES, DO NOT MODIFY
let f = new Figure();
f.addPoint(10, 20);
f.addPoint(10, 10);
f.addLine([
  [10, 20],
  [30, 40],
  [50, 60],
]);
let json = f.toJSON();
console.log(json);
f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
f.fromJSON(
  '{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}',
);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
