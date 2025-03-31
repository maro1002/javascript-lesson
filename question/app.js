//Q1

let nickname = '島田';
let age = '24';

let Text = '私は' + nickname + 'です。年齢は' + age + 'です。';

console.log(Text);

//Q2

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(templateText);

//Q3

let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};

console.log(user.age);

//Q4

let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
];

console.log(playerList[1].favorites[1]);

//Q5

let aveAge = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;

console.log(aveAge);

//Q6

user.birthday = '2000-09-27';

user.sayHello = function() {
    console.log('Hello !');
};

user.sayHello();

//Q7

let x = y = 0;

let calc = {};

calc.add        = function(){console.log(x + y);};
calc.substract  = function(){console.log(x - y);};
calc.multiply   = function(){console.log(x * y);};
calc.divide     = function(){console.log(x / y);};

x = 3;
y = 4;
calc.add();

x = 11;
y = 1;
calc.substract();

x =7;
y =7;
calc.multiply();

x = 25;
y = 5;
calc.divide();

//Q8

function reminder(x, y){
    return x % y;
}
console.log('5と3で割った余りは' + reminder(5, 3) +'です。');

//Q10

//let x = 1と定義されているものの、xは関数fooのローカル変数であるため、関数foo内でしかスコープが有効でない。
// そのためfooの外で記述されているconsole.log(x)ではローカル変数であるxを参照できず、エラーが返された。

//Q1

console.log(Math.round( Math.random() * 9 ));

//Q2

setTimeout(
    function(){console.log('Hello World!')},
    3000
);

//Q3

let num = 0;

if(num > 0){
  console.log('num is greater than 0');
}else if(num < 0){
  console.log('num is less than 0');
}else if(num === 0){
  console.log('num is 0');
}

//Q4

let numbers = [];
for(i = 0; i < 100; i++){
  numbers[i] = i;
}

for(i = 0; i < 100; i++){
  console.log(numbers[i]);
}


//Q5

let mixed = [4, '2', 5, '8', '9', 0, 1];

for(i = 0; i < mixed.length; i++){
  typeof mixed[i] != 'number' ? console.log('not number') :
    mixed[i] % 2 === 0 ? console.log('even') : console.log('odd');
  ;

}