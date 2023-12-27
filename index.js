const greetings = [
  'Happy Holidays!',
  'Merry Chrysler!',
  'Happy Crisis!',
  'Happy Hollandaise!',
  'Happy Honda Days!',
  'Feliz Navidad!',
  'Bon Natal',
  'Eid Mubarak'
];

export function happyHolidays() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function sayHappyHolidays() {
  console.log(happyHolidays());
}