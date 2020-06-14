//Chapter #01
//Assignment # 1

//Q #1
alert("Hello!Visitors,Please Check out my complete website.")

//Q #2
alert(" Error! Please enter a valid password.")

//Q #3
alert("Welcome to JS Land... \n Happy Coding!")

//Q #4(i)
alert("Welcome to JS Land...")

//Q #4(ii)
alert("Happy Coding!")

//Q #5
var a = "Hello...I can run JS through web browser's console";

console.log(alert(a));

//Q #6
alert("Hello! This is a simple and basic HTML & CSS project.")

//Q #7
//solve in index file


//Chapter #02
//Assignment #02

//Q #1
var username;

//Q #2
var myName = "Full Name";

//Q #3(i)
var message;

//Q #3(ii)
var message = "Hello World";

//Q #3(iii)
alert("Hello World!");

//Q #4
var StdName = "Jhone Doe";
var Stdage = "15 years old";
var StdCourse = "Certified Mobile Application Development";

alert(StdName);
alert(Stdage);
alert(StdCourse);

//Q #5
var word = "PIZZA";

alert(word + "\n" + word.slice(0, 4) + "\n" + word.slice(0, 3) + "\n" + word.slice(0, 2) + "\n" + word.slice(0, 1));

//Q #6
var email = "jk400152@gmail.com";

alert("My email address is" + " " + email);

//Q #7
var book = "A smarter way to learn JavaScript ";

alert("I am trying to learn from the book" + " " + book);

//Q #8
var text = "Yah! I can write HTML content through JavaScript";

document.write(text + "<br>" + "<br>");

//Q #9
var structure = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

alert(structure);
document.write(structure + "<br>" + "<br>")



//Chapter #03
//Assignment #03

//Q #1
var age = 22;

alert("I am" + " " + age + " " + "years old");

//Q #2
var visitor = 14;

alert("You have visited this site" + " " + visitor + " " + "times");

//Q #3
var birthYear = 1998;

document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared variable is number" + "<br>" + "<br>");

//Q #4
var VisitorName = "John Doe";
var ProductTitle = "T-shirts";
var Quantity = "5";

document.write(VisitorName + " " + "ordered" + " " + Quantity + " " + ProductTitle + " " + "on XYZ Clothing store." + "<br>" + "<br>");


//Chapter #04
//Assignment #4

//Q #1
var x, y, z;

//Q #2
//illegal

//(i)
//var product cost;//variable are not declare with space

//(ii)
//var P2_a% 88$;//variable are not declare with any sign

//(iii)
//var Nameofband;//variable are declare using camelCase,its not camelCase

//(iv)
//var 18;//variable are not declare numbers

//(v)
//var first-name;//variable are not declare with hyphen(-) 

//legal
//(i)
var firstName;//variable are declare using camelCase
//(ii)
var my_Name;//variable are declare using underscores
//(iii)
var val1;//variable are declare using letters and numbers
//(iv)
var text$;//variable are declare using letters and dollar sign
//(v)
var $_;//variable are declare using dollar sign and underscores

//Q #3
var str = "Rules for naming JS variables"
document.write(str.bold() + "<br>" + "<br>" +
    "Variable names can only contain,numbers,$ and __.For example $my_1stVariable" +
    "<br>" + "Variables must begin with a letter,$ or __.For example $name, _name or name" +
    "<br>" + "Variable names are case sensitive" + "<br>" +
    "Variable names should not be JS keywords" + "<br>" + "<br>");



//Chapter #05
//Assignment # 5

//Q #1(Addition)
var i = 3;
var j = 5;
var k = i + j;

document.write("Sum of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//Q #2(Subtraction)
var i = 3;
var j = 5;
var k = i - j;

document.write("Subtract of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//(Multiplication)
var i = 3;
var j = 5;
var k = i * j;

document.write("Multiply of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//(Division)
var i = 3;
var j = 5;
var k = i / j;

document.write("Divide of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//(Modulus)
var i = 3;
var j = 5;
var k = i % j;

document.write("Remainder of" + " " + i + " " + "and" + " " + j + " " + "is" + " " + k + "<br>" + "<br>");

//Q #3
var num;
document.write("Value after variable declaration is" + " " + num + "<br>");
var num = 5;
document.write("Initial value:" + " " + num + "<br>");
var num = num + 1;
document.write("Value after increment is:" + " " + num + "<br>");
var num = num + 7;
document.write("Value after addition is:" + " " + num + "<br>");
var num = num - 1;
document.write("Value after decrement is:" + " " + num + "<br>");
var num = num % 3;
document.write("The remainder is :" + " " + num + "<br>" + "<br>" + "<br>");

//Q #4
var ticketPrice = 600;
var totalTicket = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to movie is" + " " + totalTicket + "PKR" + "<br>" + "<br>");

//Q #5
var table = 16;
var heading = "Table of 16";
document.write(heading.bold("Table of" + " " + table));
for (var t = 1; t <= 10; t++) {
    document.write("<br>" + table + "x" + t + "=" + " " + table * t);
}
document.write("<br>" + "<br>");

//Q #6
var Celcius = 25;
var Fahrenheit = 70;
var calCelcius = (Fahrenheit - 32) * 5 / 9;
var calFahrenheit = (Celcius * 9 / 5) + 32;

document.write(Celcius + "℃" + " " + "is" + " " + calFahrenheit + "℉" + "<br>");
document.write(Fahrenheit + "℉" + " " + "is" + " " + calCelcius + "℃" + "<br>" + "<br>");

//Q #7
var cart = "Shopping Cart";
document.write(cart.fontsize(5) + "<br>" + "<br>" + "<br>");
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippinCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippinCharges;

document.write("Price of item 1 is" + " " + priceItem1 + "<br>");
document.write("Quantity of item 1 is" + " " + quantityItem1 + "<br>");
document.write(" Price of item 2 is" + " " + priceItem2 + "<br>");
document.write(" Quantity of item 2 is" + " " + quantityItem2 + "<br>");
document.write("Shipping charges" + " " + shippinCharges + "<br>" + "<br>");
document.write("Total cost of your order is " + " " + totalCost + "<br>" + "<br>");

//Q #8
var totalMarks = 980;
var obtainedMarks = 804;
var per = (804 / 980 * 100);//calculate the percentage

document.write("Total Marks:" + " " + totalMarks + "<br>" + "Marks Obtained:" + " " +
    obtainedMarks + "<br>" + "Percentage:" + " " + per + "<br>" + "<br>");

//Q #9
var crncy = "Currency in PKR";
var US = 10;
var SA = 25;
var avrUs = US * 104.80;
var avrSa = SA * 28;
var totalCurrency = avrUs + avrSa;
document.write(crncy.fontsize(5) + "<br>" + "<br>" + "<br>" + "Total Currency in PKR:" + " " + totalCurrency + "<br>" + "<br>");

//Q #10

var arith = 72;
var add = arith + 5;
var mutly = arith * 10;
var div = arith / 2;
var exp = arith + add * mutly / div;

document.write("Perform all calculation :" + " " + exp + "<br>" + "<br>");


//Q #11
var ageCal = "Age Calculator";
document.write(ageCal.fontsize(5) + "<br>" + "<br>" + "<br>");
var crntYear = 2020;
var yourYear = 1998;
var yourAge = 2020 - 1998;
document.write("Current Year:" + " " + crntYear + "<br>" + "Birth Year:" +
    " " + yourYear + "<br>" + "Your Age is:" + " " + yourAge + "<br>" + "<br>");

//Q #12
var geom = "The Geometrizer";
document.write(geom.fontsize(5) + "<br>" + "<br>" + "<br>");
var radCircle = 20;
var π = 3.142;
var circumCircle = 2 * π * radCircle;
var areaCircle = π * radCircle ** 2;

document.write("Radius of a circle is:" + " " + radCircle + "<br>"
    + "The Circumference is:" + " " + circumCircle + "<br>" + "The area is:" + " " + areaCircle + "<br>" + "<br>");


//Q #13
var life = "The Lifetime Supply Calculator";
document.write(life.fontsize(5) + "<br>" + "<br>" + "<br>");
var snack = "Lays";
var currentAge = 22;
var maxAge = 70;
var amntSnack = 5;
var final = (70 - 22) * 5;

document.write("Favourite Snack:" + " " + snack + "<br>" + "Current age:" + " " + currentAge +
    "<br>" + "Estimated Maximum Age:" + " " + maxAge + "<br>" + "Amount of snacks per day:" + " " +
    amntSnack + "<br>" + "You will need" + " " + final + " " + "to last you until the ripe old age of" + " " +
    maxAge + "<br>" + "<br>");


//Chapter #6-9
//Assignment #6-7

//Q #1
var a = 10;
document.write("Result:" + "<br>" + "The value of a is:" + " " + a + "<br>" + "........................................." + "<br>" + "<br>");
++a;
document.write("The value of ++a is:" + " " + a + "<br>" + "Now the value of a is:" + " " + a + "<br>" + "<br>");
a++;
document.write("The value of a++ is:" + " " + --a + "<br>" + "Now the value of a is:" + " " + ++a + "<br>" + "<br>");
--a;
document.write("The value of --a is:" + " " + a + "<br>" + "Now the value of a is:" + " " + a + "<br>" + "<br>");
document.write("The value of a-- is:" + " " + a + "<br>" + "Now the value of a is:" + " " + --a + "<br>" + "<br>");

//Q #2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//            1  -  0  +  1  +  1  = 3
document.write("a is" + " " + a + "<br>" + "b is" + " " + b + "<br>" + "result is" + " " + result + "<br>" + "<br>")

--a;
// 1
--a - --b;
// 1  -  0
--a - --b + ++b;
// 1  -  0  +  1
--a - --b + ++b + b--;
// 1  -  0  +  1  +  1


//Q #3
var input = prompt("Enter Your Name");
alert("Hello" + " " + input);

//Q #4,Q #5
var userNum = prompt("Enter Any Number:",5);
if(userNum !== null){
    for(var u=1; u<=10; u++){
        document.write(userNum + "x"+ u +"="+" "+ userNum * u +"<br>");
    }

}
else{
    for(var u=1; u<=10; u++){
        document.write(userNum + "x"+ u +"="+" "+ userNum * u +"<br>");
    }
}
document.write("<br>" + "<br>");

//Q #6
var head1 = "Subject";
var head2 = "Total Marks";
var head3 = "Obtained Marks";
var head4 = "Percentage";
var userSubj1 = prompt("Enter Your Subject");
var subj1 = userSubj1;
var userSubj2 = prompt("Enter Your Subject");
var subj2 = userSubj2;
var userSubj3 = prompt("Enter Your Subject");
var subj3 = userSubj3;
var subjMark = 100;
var obtMark1 = +prompt("Enter Your English Obtained Marks");
var obtdMark1 = obtMark1;
var obtMark2 = +prompt("Enter Your Math Obtained Marks");
var obtdMark2 =  obtMark2;
var obtMark3 = +prompt("Enter Your Urdu Obtained Marks");
var obtdMark3 = obtMark3;
var totalMark = subjMark + subjMark + subjMark;
var totalObtMark = obtdMark1 + obtdMark2 + obtdMark3;
var percent1 = (obtdMark1/subjMark*100);
var percent2 = (obtdMark2/subjMark*100);
var percent3 = (obtdMark3/subjMark*100);
var totalPercent = (obtdMark1/subjMark*100) + (obtdMark2/subjMark*100) + (obtdMark3/subjMark*100);

document.write(head1.bold()+"\xa0\xa0 "+ head2.bold() +"\xa0\xa0"+ head3.bold() + "\xa0\xa0"+ head4.bold() +"<br>"+
 userSubj1 +"\xa0\xa0"+ subjMark +"\xa0\xa0\xa0"+ obtdMark1 +"\xa0\xa0\xa0"+ percent1 +"<br>"+
 userSubj2 +"\xa0\xa0\xa0"+ subjMark +"\xa0\xa0\xa0"+ obtdMark2 +"\xa0\xa0\xa0"+ percent2 +"<br>"+
 userSubj3 +"\xa0\xa0\xa0\xa0"+ subjMark +"\xa0\xa0\xa0"+ obtdMark3 +"\xa0\xa0\xa0"+ percent3 +"<br>"+
 "\xa0\xa0\xa0"+ totalMark +"\xa0\xa0\xa0"+ totalObtMark +"\xa0\xa0"+ totalPercent + "<br>"+"<br>");



//Chapter #9-11
//Assignment #9-10

//Q #1
var city = prompt("Enter any city name:");
if(city === "Karachi"){
    alert("Welcome to city of lights");

}

else{
    alert("Welcome to"+" "+ city);
}

//Q #2
var gender = prompt("Enter Your Gender");
var ma = "male";
var fe = "female";

if(gender === ma){
    alert("Good Morning Sir.");
}

else if(gender === fe){
    alert("Good Morning Ma'am.");
}

//Q #3
var clrRoad = prompt("Enter color of road traffic signal (Red,Green or Yellow)");
if (clrRoad === "red"){
    alert("Must Stop");
}
else if(clrRoad === "yellow"){
    alert("Ready to move");
}
else if(clrRoad === "green"){
    alert("Move now");
}

//Q #4
var fuel = prompt("Enter remaining fuel in your car(in liter)");
var crntFuel = 0.25;
if(fuel < crntFuel){
    alert("Please refill the fuel in your car");
}

//Q #5
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");//No Run because condition is false
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");//No Run because condition is false
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");//No Run because condition is false
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
    alert("True");
    }
    if (false){
    alert("False");//No Run because code is unreachable
    }

if("car" < "cat"){
    alert("car is smaller than cat");
    }
            

//Q #6
var sheet = "Marks Sheet";
var comObtained = +prompt("Enter Your Computer Obtained Marks");
var comTotal = +prompt("Enter Your Computer Total Marks");
var mathObtained = +prompt("Enter Your Math Obtained Marks");     
var mathTotal = +prompt("Enter Your Math Total Marks");
var phyObtained = +prompt("Enter Your Physics Obtained Marks");
var phyTotal = +prompt("Enter Your Physics Total Marks");
var subTotalObtained = (comObtained + mathObtained + phyObtained);
var subTotalMarks = (comTotal + mathTotal + phyTotal);
var percent = (subTotalObtained/subTotalMarks*100);
document.write(sheet.fontsize(6)+"<br>"+"<br>"+"<br>");
document.write("Total Marks:"+" "+ subTotalMarks + "<br>");
document.write("Marks Obtained:"+" "+ subTotalObtained +"<br>");
if(percent >=80){
    document.write("Percentage:"+" "+ percent +"%"+"<br>");
    document.write("Grade:"+" "+ "A-one"+"<br>");
    document.write("Remarks:"+" "+"Excellent"+"<br>"+"<br>");
}
else if(percent >=70){
    document.write("Percentage:"+" "+ percent +"%"+"<br>");
    document.write("Grade:"+" "+ "A"+"<br>");
    document.write("Remarks:"+" "+"Good"+"<br>"+"<br>");
}
else if(percent >=60){
    document.write("Percentage:"+" "+ percent +"%"+"<br>");
    document.write("Grade:"+" "+ "B"+"<br>");
    document.write("Remarks:"+" "+"You need to improve"+"<br>"+"<br>");;
}
else if(percent < 60){
    document.write("Percentage:"+" "+ percent +"%"+"<br>");
    document.write("Grade:"+" "+ "Fail"+"<br>");
    document.write("Remarks:"+" "+"Sorry"+"<br>"+"<br>");
}


//Q #7
var secNum = 6;
var guess = +prompt("Enter a secret number (ranging 1 to 10)");
if (guess === secNum){
    alert("Bingo! Correct answer.");
}

else if(++secNum === guess ){
    alert("Close enough to the correct answer.");
}

//Q #8
var givNum = +prompt("Enter any number (check number divisible by 3 or not)");

if(givNum%3===0){
    alert("Your number is divisible by 3");

}
else{
    alert("Your number is not divisible by 3");
}

//Q #9
var checkNum = +prompt("Enter any number (check odd or even)");

if(checkNum%2===0){
        alert("Your number is even");
    }
else{
        alert("Your number is odd");
    }


//Q #10
var temp = prompt("Enter a temperature (starting number > 10)");
if(temp > 40){
    alert("It is too hot outside.");
}    
else if(temp > 30){
    alert("The Weather today is Normal.");
}
else if(temp > 20){
    alert("Today’s Weather is cool.");
}
else if(temp > 10){
    alert("OMG! Today’s weather is so Cool.");
}

//Q #11-------Simple Calculator

var firstNum =+prompt("Enter Your First Number:");
var signOp =prompt("Enter Your Operator");
var secondNum =+prompt("Enter Your Second Number");
alert(firstNum + signOp + secondNum);

if(signOp === "+"){
    alert(firstNum + secondNum);
}
else if(signOp === "/"){
    alert(firstNum / secondNum);
}
else if(signOp === "*"){
    alert(firstNum * secondNum);
}
else if(signOp === "%"){
    alert(firstNum / secondNum *100 + "%");
}


//Chapter #12-13


//Q #1
var ch,code, i
ch = prompt("Enter any character")
code = ch.charCodeAt(0)
document.write("<br>ASCII Code is " + code)
for(i = 65; i <= 90; i++)
{
    if(Number(code) == Number(i))
   { document.write("<br> Character is uppercase " )}
   
}
for(i = 97; i <= 122; i++)
{
    if(Number(code) == Number(i))
    {document.write("<br> Character is lowercase " )}
    
}

//Q #2
var a = +prompt("Enter first number ");
var b = +prompt("Enter second number ")

if(a > b)
{
    document.write("<br>" + a + " is larger")
}

else if(a < b)
{
    document.write("<br>" + b + " is larger")
}

else if(a = b)
{
    document.write("<br>" + a + " and " + b + " are equal")
}

//Q #3
var a
a = +prompt("enter number ")

if(a < 0)
{
    document.write("<br>" + a + " is negative")
}

else if(a > 0)
{
    document.write("<br>" + a + " is positive")
}

if(a == 0)
{
    document.write("<br>" + a + " is zero")
}

//Q #4
var v = prompt("enter an alphabet ")
if(v === 'a')
{
    document.write("<br> it is a vowel")
}
else if(v === 'e')
{
    document.write("<br> it is a vowel")
}
else if(v === 'i')
{
    document.write("<br> it is a vowel")
}
else if(v === 'o')
{
    document.write("<br> it is a vowel")
}
else if(v === 'u')
{
    document.write("<br> it is a vowel")
}
else
{
    document.write("<br> it's not a vowel")
}

//Q #5

var  b = "789HelloDear$99"
var a = prompt("Enter password ",)
if(a === b)
{
    document.write("<br> correct password")
}
else if(a !== b && a !== "")
{
    document.write("<br> wrong password")
}

else if(a === "")
{
    document.write("<br> please enter password")
}

//Q #6
var greetingDay = 'Good Day', greetingEve = 'Good Evening'
var hour = 19;
if (hour < 18) 
{
    document.write("<br>" + greetingDay)
}
else
{
    document.write("<br>" + greetingEve)
}

//Q #7
var t = prompt("Enter time ")
if(t >= 0000 && t < 1200)
{
    document.write("<br>Good Morning " )
}
else if(t >= 1200 && t < 1700)
{
    document.write("<br>Good Afternoon " )
}
else if(t >= 1700 && t < 2100)
{
    document.write("<br>Good Evening " )
}
else if(t >= 2100 && t <= 2359)
{
    document.write("<br>Good Night " )
}



//Chapter #14-16

//Q #1

var arr = []

//Q #2
var arr = {}

//Q #3

var words = ["hello", "knowledge", "bug bounty", "bitcoin"]

 //Q #4

var numb = [786, 555, 007, 2020]

//Q #5

var bool = [true, false]

//Q #6

var mixx = ["bond", 007, true, 'access granted']

 //Q #7

var qual = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'], a = 1

document.write("<br> <h1> Qualifications: </h1>")
for(i = 0; i < qual.length; i++)
{
    document.write("<br>" + a + ") " + qual[i])   
    a++
}

//Q #8

var std, scr, t, i
std = ['Muneeb', 'Brian', 'Harry']
scr = [320, 230, 480]
t = 500
for(i = 0; i < 3; i++)
{
    document.write("<br>Score of " + std[i] + " is " + scr[i] + ".Percentage: " + (scr[i]/t)*100 + "%")
}

 //Q #9

var col, col2, col3
col = ["yellow", "green", "blue"]
document.write("<br>" + col)

col2 = prompt("add color to beginning")
col.unshift(col2)
document.write("<br>" + col)

col3 = prompt("add color to end")
col.push(col3)
document.write("<br>" + col)

col.unshift('orange', 'brown')
document.write("<br>" + col)

col.shift()
document.write("<br>" + col)

col.pop()
document.write("<br>" + col)

col[2] = prompt("enter color to specific index ")
document.write("<br>" + col)

ind = prompt("enter specific index to del color ")
delete col[ind]
document.write("<br>" + col)

 //Q #10

var score, 
score = [320, 230, 480, 120]
document.write("<br> Scores of students " + score)
for(i = 0; i < score.length; i++)
{
    for(j = i+1; j < score.length; j++)
    {
        if(score[i] > score[j])
        {
            temp = score[j]
            score[j] = score[i]
            score[i] = temp
        }
    }   
}
document.write("<br> Ordered Scores of students " + score)

 //Q #11

var cities, sCit
cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
sCit = cities.slice(2, 4)
document.write("<br> Cities list <br>" + cities)
document.write("<br> Selected cities list <br>" + sCit)

//Q #12

var arr
arr = ['This ', ' is ', ' my ', ' cat ']

document.write("<br>array <br>" + arr)
document.write("<br>string <br>" + arr[0] + arr[1] + arr[2] + arr[3])

 //Q #13

var d = ['keyboard', 'mouse', 'printer', 'monitor']
document.write("<br>devices: <br>" + d + "<br>")
for(i = 0; i < d.length; i++)
document.write("<br>out: <br>" + d[i])

 //Q #14

var d = ['keyboard', 'mouse', 'printer', 'monitor']
document.write("<br>devices: <br>" + d + "<br>")
for(i = (d.length-1); i >= 0; i--)
document.write("<br>out: <br>" + d[i])

 //Q #15

var ph
ph = ['Apple', 'Samsung', 'Motorolla', 'Nokia', 'Sony', 'Haier']

document.write('<br> <select name="company"')

for(i = -1; i < ph.length; i++)
{
document.write('<option value="' + ph[i] + '">')
document.write(ph[i]) 
document.write('</option>')
}

document.write('</select>')


// CHAPTER 17-20 

 //Q #1

 var arr
 arr = [
     [],
     [],
     []
 ]
 
 //Q #2
 
 var ar
 ar = [
     [0,1,2,3],
     [1,0,1,2],
     [2,1,0,1]
 ]
 for(i = 0; i < 3; i++)
 {
     for(j = 0; j <= 3; j++)
     {
         document.write(ar[i][j] + " ")
     }
     document.write('<br>')
 }


 

