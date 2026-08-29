const userData = {
  Firstname: "Daud",
  lastname: "Daudovich",
  email: "Daudov@gmail.com",
  job: "specialist",
  age: 20,
  country: "Russia",
  city: "Perm"
}

const car = {
  make: "Honda",
  model: "Civic",
  yearOfManufacture: 1998,
  color: "Red",
  typeOfBox: "Mechanics",
  carOwner: userData
}
console.log(car);

function checkMaxSpeed(car) {
  if(!("maxSpeed" in car)) {
    car.maxSpeed=180;
  }
}

checkMaxSpeed(car);
console.log(car);

function showProperty(obj, prop) {
  console.log(obj[prop]);
}

showProperty(car, "make");
showProperty(car, "model");
showProperty(car, "color");

let fruits = ["Яблоко", "Апельсин", "Слива"];

const books = [
  {
    title: "Harry Potter", 
    author:"J.K.Rowling",
    YearOfRelese: 1997, 
    CoverColor: "green", 
    Genre: "fantasy"
  },
  {
    title: 1994, 
    author:"GeorgeOrwell",
    YearOfRelese: 1949, 
    CoverColor: "black", 
    Genre: "politicalProse"
  },
  {
    title: "Crime and Punishmen", 
    author:"FyodorDostoevsky",
    YearOfRelese: 1866, 
    CoverColor: "brown", 
    Genre: "novel"
  }
];

books.push({
    title: "The Hobbit", 
    author:"J.R.R. Tolkien",
    YearOfRelese: 2022, 
    CoverColor: "brown", 
    Genre: "fantasy",
});

console.log(books);

function addRareProperty(booksArray) {
  return booksArray.map(function(book) {
    const newBook = { ...book };
    if (book.year > 2000) {
      newBook.isRare = true;
    } else {
      newBook.isRare = false;
    }
    return newBook;

  });
}

const updateBooks = addRareProperty(books);
console.log(updateBooks);
