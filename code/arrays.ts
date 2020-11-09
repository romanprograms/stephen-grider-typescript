const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camero']];

// help with inference when extracting values
const car = carsByMake[0];
const myCar = carsByMake.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car;
});

// Flexible Types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
