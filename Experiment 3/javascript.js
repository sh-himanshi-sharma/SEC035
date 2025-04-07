function findLargest(num1, num2){
    if(num1>=num2) return num1;
    else return num2;
}
console.log("The largest of the two numbers is "+ findLargest(9,33));

function oddOrEven(num){
    if(num%2==0) return "even";
    else return "odd";
}
console.log("The number is "+ oddOrEven(35))

function factorial(num){
    let result = 1;
    for(let i=num;i>0;i--) result *= i;
    return result;
}
console.log("The factorial of number is "+ factorial(9));

function table(num){
    for(let i=1; i<=num;i++) console.log(num+" * "+i+" = "+num*i);
}
table(9);

function swap(num1, num2){
    let temp = num1;
    num1 = num2;
    num2 = temp;
    return {num1,num2};
}
console.log("Swap the numbers: ");
console.log(swap(9,59));

function calculator(num1,num2,op){
    switch(op){
        case '/':{
            if(num2==0) return "can't be divided by zero";
            else return num1/num2;
        }
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '+':
            return num1+num2;
        default:
            return "Invalid operator";
    }
}
console.log("Sum of 10 and 6 is "+ calculator(10,6,'+'));
console.log("Subtraction of 10 and 8 is "+ calculator(10,8,'-'));
console.log("Multiplication of 10 and 8 is " + calculator(10,8,'*'));
console.log("Division of 10 and 9 is "+ calculator(10,9,'/'));
console.log("Divison of 10 and 0 is "+ calculator(10,0,'/'));

