
let year=parseInt(prompt("enter the year"));

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
	{
        console.log("leap year");
    } else {
        console.log("not a leap year");
    }