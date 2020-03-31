let message;
message = 'abc';
let endsWithC = (<String>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

console.log(alternativeWay);
console.log(endsWithC);
