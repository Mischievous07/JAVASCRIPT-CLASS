let text;
let name = prompt("Enter your name to determine if you are a friend or not!");


switch(name) {
case "John" :
	text = "You are the bestest of friends!";
    console.log(text);
break;
case "Holden" || "holden":
	text = "You are me!";
    console.log(text)
break;
default:
				text = "I don't know you";
        console.log(text);
					break;
					
}
