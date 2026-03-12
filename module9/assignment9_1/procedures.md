# Procedures

the given snippets of codes are test cases, do not modify them

## Lab Challenge #1

Write a function that will draw m integers from 0 to n. Pass parameters m and n and two flags to the function:

the first determines whether the drawn numbers may be repeated;
the second one states if the returned array of numbers should be sorted.

Use the Set class.

Test your solution using the following code:

```JavaScript
    console.log(getRandomSet(10, 20, false, false));
    console.log(getRandomSet(10, 20, false, true));
    console.log(getRandomSet(10, 20, true, false));
    console.log(getRandomSet(10, 20, true, true));
```

## Lab Challenge #2

Declare a User class that will allow you to create objects with user information (first name, last name, email).

The data should be passed to the constructor and stored as private properties.

Create setters and getters to handle them. Use regular expressions to check if the data passed to the constructor or setter is in the correct format (first and last name consist of letters only, first letter upper-case, proper email address format). For simplicity, assume that an email address can only consist of letters, while strings of letters can be separated by dots.

For example, `abc.def@ghi.jk` or `a@abc.def.gh` will be valid, while `a_b@abc.def` or `abcd1@efg.hi.jk` will be invalid.

If data is incompatible with the format, do not save it and throw an exception (Error class) with an appropriate message.

Test your solution using the following code:

```JavaScript
    try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error

    } catch(err) {
        console.log(err.message);
    }
```

## Lab Challenge #3

Create a Users class that will allow you to create objects containing a collection of individual users (users are created using the User class from the previous task).

To create a collection, use a Map class (the key should be the email address, and the value should be the User object). The class should provide the following methods:

add – add a single user, arguments are name, surname and email;
delete - remove the user from the collection (the argument is the email)
get - retrieve a single user from the collection (the argument is the email)
getAll - retrieve all users from the collection (the argument is the name of the field by which the array is to be sorted: name, surname, or email

Test your solution using the following code:

```JavaScript
    let users = new Users();
    users.add("Aaaa", "Bbbb", "cccc@gmail.com");
    users.add("Mmmm", "Ffff", "eeee@gmail.com");
    users.add("Aaaa", "Bbbb", "cccc@gmail.com");
    users.add("Xxxx", "Oooo", "dddd@gmail.com");
    console.log(users.get("dddd@gmail.com"));
    console.log(users.getAll("name").map(u => u.name));
    console.log(users.getAll("surname").map(u => u.surname));
    console.log(users.getAll("email").map(u => u.email));
```

## Lab Challenge #4

Define three classes: Point, Line, and Figure:

The Point class should have only three properties: x and y coordinates and type (always set to 'point'). The constructor takes the x and y coordinates.
The Line class should have the type property equal to 'line' and the points property, which is an array of Point class objects (points that form a line). The constructor of the constructor takes an array of point coordinates in the format [[x1, y1], [x2, y2], ...] (e.g. [[0, 0], [10, 20], [20, 20]]).
The Figure class is to allow you to create an object that is a collection of points and lines (stored in separate properties). Define the following methods:
constructor - takes an array of elements as an argument (lines and points)
addPoint - takes the x and y coordinates of the new point to add to the collection;
addLine - takes an array of line points in the format [[x1, y1], [x2, y2], ...] and adds it to the collection;
toJSON - returns the saved collection (points and lines) in JSON format;
fromJSON - takes JSON data, parses it, and adds to the collection. As an additional argument, provide a flag that specifies whether the data should be added to an existing collection or replace it;
deleteAll - deletes all data from the collection.

Test the solution on the following example:

```JavaScript
    let f = new Figure();
    f.addPoint(10,20);
    f.addPoint(10,10);
    f.addLine([[10,20], [30,40], [50,60]]);
    let json = f.toJSON();
    console.log(json);
    f.fromJSON(json, true);
    console.log(f.elements.points.length);
    console.log(f.elements.lines.length);
    f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
    console.log(f.elements.points.length);
    console.log(f.elements.lines.length);
```

## Lab Challenge #5

Modify the Figure class from the previous task so that you can sort points and lines in the collection and automatically remove elements with the same values (e.g. lines composed of the same points).

## Lab Challenge #6

Write a class called MyIterable that will allow you to create an iterable object with the following properties:

it will be possible to add arbitrary elements to it (add method)
an attempt to add an element that is already in the object will be ignored;
it will be possible to check whether an element is present in the object (has method)
it will be possible to delete an element (del method)
it will be possible to check the number of elements (length property)
it will be possible to use any technique for passing elements of an iterable object (spread operator, for ... of, iterators), and an appropriate generator should be used in the implementation.

Test the class using the following example:

```JavaScript
let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);


console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5
```

## Lab Challenge #7

Write a decorator named myDecorator that will store the arguments of the decorated function call.

If the function has already been called with these arguments, an appropriate message should appear in the console containing, among other things, the values of those arguments.

Note – the function can be called with any number of arguments, so use rest arguments for this purpose.

Test the decorator using the following code:

```JavaScript
let sum = function(...args) {
    let retVal = 0;
    for(let arg of args) {
        retVal += arg;
    }
    return retVal;
}
let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5
```

## Lab Challenge #8

Write a getPromiseArray function that will take an array of any length as an argument.

The function should return an array of promises (one promise for each element of the array passed as an argument) according to the following scheme:

if the array element is a positive integer, then the promise should be fulfilled after a time equal to this number and return the same number as its value;
otherwise the promise should be rejected immediately (generate a corresponding error using the Error object)

Test the function using the following code:

```JavaScript
let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
Promise.all(promises1).then(a => console.log(`all: ${a}`))
.catch(e => console.log(`all: ${e.message}`)); // -> any: 10
Promise.any(promises1).then(a => console.log(`any: ${a}`)).
catch(e => console.log(`any: ${e.message}`)); // -> all: a is not a positive integer
```

## Lab Challenge #9

There is a REST service at `http://localhost:3000/weather` that returns the current weather data for selected cities. The request is made using GET, with the name of the city and optionally the type of information you want to get (selectable: 'wind', 'clouds', 'temp', 'precipitation').

For example, for the query:
`http://localhost:3000/weather?city=Oslo&info=wind`

we get the answer in JSON format:

```JSON
{
    "city": "Oslo",
    "weather": {
      "wind": {
          "speed": 8,
          "deg": 170
      }
    }
}
```

If only the name of the city, or an incorrect information type is given, the complete weather for a given location will still be displayed.

For example, for the following query:
`http://localhost:3000/weather?city=Oslo`

we should get the answer:

```JSON
"city": "Oslo",
    "weather": {
        "wind": {
            "speed": 8,
            "deg": 170
        },
        "clouds": 0,
        "temp": 0,
        "precipitation": 0
        }
```

Wind speed in meters per second, direction in degrees, temperature in Celsius, cloud cover and precipitation as a percentage. Entering a city name for which the service does not provide weather data will only return that name.

Write a getWeather function that will retrieve weather information from the server. The function takes two arguments:

the name of the city or cities (if you are interested in one city, it is just the name, if several, it is an array of names)
the type of information ('wind' etc.), and if no argument is given or 'all' is given, then all data is returned.

The retrieved data should be displayed in the console in a user readable form. Additionally, in the event that the wind speed is higher than 15 m/s or the temperature is lower than -20ºC, an appropriate warning should appear in the console.

Use promises and the fetch method in the implementation.

Test the function using the following code:

```JavaScript
let weather1 = getWeather('Berlin', 'wind');
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %
```

### REST service code

```JavaScript
var express = require("express");
var cors = require("cors");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

const weather = [
    {
        city: "Oslo",
        weather: {
            wind: {
                speed: 8,
                deg: 170
            },
            clouds: 0,
            temp: 0,
            precipitation: 0
        }
    },
    {
        city: "Edinburgh",
        weather: {
            wind: {
                speed: 4,
                deg: 85
            },
            clouds: 60,
            temp: 3,
            precipitation: 0
        }
    },
    {
        city: "Berlin",
        weather: {
            wind: {
                speed: 16,
                deg: 117
            },
            clouds: 70,
            temp: 2,
            precipitation: 30
        }
    },
    {
        city: "Amsterdam",
        weather: {
            wind: {
                speed: 7,
                deg: 160
            },
            clouds: 80,
            temp: 5,
            precipitation: 10
        }
    },
    {
        city: "Yakutsk",
        weather: {
            wind: {
                speed: 0,
                deg: 0
            },
            clouds: 0,
            temp: -40,
            precipitation: 0
        }
    }
];

app.get("/", (req, res, next) => {
  res.send(' \
   \
   \
     \

Sample Site \
   \
   \
   \
  ');
});

app.get("/weather", async (req, res, next) => {
    let ret = weather.find(e => e.city === req.query.city);
    if(ret) {
        if(!req.query.info || !Object.keys(ret.weather).includes(req.query.info)) {
            res.json(ret);
        } else {
            res.json({
                city: ret.city,
                weather: {
                    [req.query.info]: ret.weather[req.query.info]
                }
            });
        }
    } else {
        res.json({
            city: req.query.city
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

## Lab Challenge #10

Modify the getWeather function from the previous task using the async/await statement.

The result of the function should be identical to the previous one.

Don’t forget about error handling.
