
import { firstComments } from "./comments.js";
// Задание 2: Извлечение подмассива

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.slice(4, 10);
console.log(numbersFromFive);

// Задание 3: Проверка наличия элемента в массиве

const furnitureSet = [`Стуль`, `Стол`, `Диван`, `Кровать`, `Шкаф`];

function checkFurniture(item) {
    if (typeof item !== `string`) {
        return false;
    }
    return furnitureSet.includes(item);
}
console.log(checkFurniture('Стол'));

// Задание 4: Реверсирование массива

function reverseArray(array) {
    return array.reverse();
}
console.log(reverseArray(furnitureSet), reverseArray(numbers));

// Задание 7: Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const emailFragment = firstComments.filter(comment => comment.email.includes(`.com`))
console.log(emailFragment );

// Задание 8: Обновить postId для каждого комментария

const updatedComments = firstComments.map(comment => {
    let newPostId;
    if (comment.id <= 5) {
        newPostId = 2;
    } else {
        newPostId = 1;
    }
    
    return {
        ...comment,
        postId: newPostId
    };
});
console.log(updatedComments);

// Задание 9: Создать новый массив, содержащий только id и name каждого комментария

const result = firstComments.map(({ id, name, ...rest }) => ({ id, name }));
console.log(result);

// Задание 10: Добавить новое свойство isInvalid в каждый комментарий

const validatedComments = firstComments.map(item => ({
    ...item,
    isInvalid: item.body.length > 180
}));
console.log(validatedComments);

// Задание 11: Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const firstVersionMethod = firstComments.map(user => user.email);
console.log(firstVersionMethod);

const secondVersionMethod = firstComments.reduce((acc, user) => {
    acc.push(user.email);
    return acc;
}, []);
console.log(secondVersionMethod);

// Задание 12: Почитать про методы массива toString и join. Используя их, вывести массив почт в виде строки

const emailList = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us'
]


const firstEmailList = emailList.toString();
console.log(firstEmailList);

const secondEmailList = emailList.join(', ');
console.log(secondEmailList);

