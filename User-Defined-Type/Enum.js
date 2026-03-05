var Person;
(function (Person) {
    Person[Person["name"] = 0] = "name";
    Person[Person["age"] = 1] = "age";
    Person[Person["bg"] = 2] = "bg";
})(Person || (Person = {}));
// console.log(Person);
//  enum Person2{
//     physics="A+",
//     chemistry="A",
//     biology="B"
//  }
//  console.log(Person2);
var Person2;
(function (Person2) {
    Person2["physics"] = "A+";
    Person2["chemistry"] = "A";
    Person2["biology"] = "B";
    Person2[Person2["math"] = 70] = "math";
})(Person2 || (Person2 = {}));
console.log(Person2);
