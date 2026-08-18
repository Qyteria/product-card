function getWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по цельсию.`)
}
getWeather(`Тольяти`, 20)


const SPEED_LIGHT = 300000; // км/c
function visionSpeed(speed) {
  if (speed > SPEED_LIGHT) {
    console.log(`Сверхсветовая скорость`);
  } else if (speed < SPEED_LIGHT) {
    console.log(`Субсветовая скорость`);
  } else {
    console.log(`Скорость света`);
  }
}
visionSpeed(150000);   // Субсветовая скорость
visionSpeed(300000);   // Скорость света
visionSpeed(500000);   // Сверхсветовая скорость

let fruit = `potatos`;
let price = 3555;
function budget(currentBudget) {
  if (currentBudget >= price) {
    let change = currentBudget - price;
    console.log(`Potatos приобретён. Спасибо за покупку!`);
    console.log(`Ваша сдача: ${change}$`);
  } else {
    let difference = price - currentBudget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

budget(999);
budget(1600);
budget(512);
budget(7100);
budget(6200);
budget(500);
budget(600);
budget(500);
budget(400);
budget(100);
budget(780);

// 6

function greetUser(name) {
    console.log(`Привет, ${name}!`);
}
greetUser(`Daud`)

// 7

const productName = `moisturizingMask`;
let price = 2000;
const car = `bodyWork`;