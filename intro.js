// Exercise 1

var op1 =  12 + 12; //Addition problem that equals 24
var op2 =  46-22; //Subtraction problem that equals 24
var op3 =  6*4; //Multiplication problem that equals 24
var op4 =  48/2; //Division problem equals 24

// console.log(op2)

//Practice Modulus

for(var i=0; i<10; i++){
    if(i%2 == 0){
        console.log("i is currently "+ i);
    }
}

//Exercise 2
var ope1 = 6 % 3;
var ope2 = 10 % 2;
var ope3 = 5 % 3;

console.log(ope1 !== ope2)

// var increment = 4;
// increment = increment + 1;
// increment = increment + 6;
// increment *= 2; 
// console.log(increment)

// Exercise 3

var line1 = "Test Grades as follows \n"
var line2 = "\t Student1: 96 \n"
var line3 = "\t Comment: \"None\""

console.log(line1 + line2 + line3);

//Exercise 4

var numbers = [0,10,20,30,40,50,60,70,80,90]

// console.log(numbers[2] + numbers[4])
//Practice accessing objects values
var student ={
    test1: 99,
    test2: 98,
    test3: 97,
    test4: 96
}

for(var j = 0; j<3; j++){
    // console.log(student['test'+(j+1)]);
    console.log()
}

// var num = 1;
// while(num < 10){
//     if(num%2 == 0){
//         console.log(num);
//     }
//     num++;
// }

for(var k=1; k<=10; k++){
    if(k%2 == 1){
        console.log(k)
    }
}