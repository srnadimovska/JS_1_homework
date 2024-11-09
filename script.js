// Proveri dali brojot e delliv so 3,5 i so 3 i 5

var num = 200;

if ( num % 3 == 0)
{
    console.log("fizz")
} 

 if (num % 5 == 0)
{
    console.log("buzz")
 } 

 if (num % 3 == 0 && num % 5 == 0)
{
    console.log("fizzbuzz")
 }

// Proveri ocenka:

var num = 2;
if (num == 5)
{
    console.log (`Ucenikot e odlicen i ima ocenka ${num}`)
}
else if (num == 4)
{
    console.log(`Ucenikot e mnogu dobar i ima ocenka ${num}`)
}
else if (num == 3)
{
    console.log(`Ucenikot e dobar i ima ocenka ${num}`)
}
else if ( num == 2)
{
    console.log(`Ucenikot e dovolen i ima ocenka ${num}`)
}
else if ( num == 1)
{
    console.log(`Ucenikot e nedovolen i ima ocenka ${num}`)
}

// Proveri del od denot:

const day = new Date();
let cas = day.getHours();

if (cas >= 0 && cas < 12)
{
    console.log(`The time is ${cas} am!`)
    console.log("Good day!")
}
else if (cas >= 12 && cas < 24)
{
    console.log(`The time is ${cas} pm!`)
    console.log("Good evening!")
}

// Proveri mesec vo godinata

const den = new Date();
let mesec = den.getMonth();


switch(mesec) {
    case 0:
        console.log("January");
        break;
    case 1:
        console.log("February"); 
        break; 
    case 2:
        console.log("March");
        break; 
    case 3:
        console.log("April");
        break; 
    case 4:
        console.log("JMay"); 
        break;   
    case 5:
        console.log("June"); 
        break; 
    case 6:
        console.log("July");
        break; 
    case 7:
        console.log("August");
        break; 
    case 8:
        console.log("September");
        break; 
    case 9:
        console.log("October");
        break; 
    case 10:
        console.log("November");
        break; 
    case 11:
        console.log("December");
        break; 
}

// Proveri ja temperaturata nadvor


 var t = -10;
 if(t < 0)
 {
    console.log(`It is freezing outside, the tempreture is ${t}!`)
 }

 else if (t >= 0 && t <= 10)
 {
    console.log(`The weather is cold, the tempreture is ${t}, wear something warm!`)
 }
 else if ( t > 10 && t <= 20)
 {
    console.log(`It is chill outside, the tempreture is ${t}!`)
 }
 else if ( t > 20 && t <= 35)
 {
    console.log(`The tempreture is ${t}, it is hot outside!`)
 }
 else if (t > 35)
 {
    console.log(`Don't go outside, the tempreture is ${t}, it is very hot!`)
 }
 else {
    console.log("I don't know the tempreture!")
 }

 

