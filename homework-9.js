const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NewArray = numbers.slice(4, 10);
console.log(NewArray);

const furnitureSet = [`Стуль`, `Стол`, `Диван`, `Кровать`, `Шкаф`];
const NewArray2 = furnitureSet.includes(`Стол`);
console.log(NewArray2);

function reverseArray(array) {
    return array.reverse();
}

console.log(reverseArray(furnitureSet), reverseArray(numbers));

