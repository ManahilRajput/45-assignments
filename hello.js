//TASK # 1
//print hello world!.
var MinnieGM = "HELLO WORLD!!";
console.log(MinnieGM);
//TASK # 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var MyName = "manahil";
console.log("hello ".concat(MyName, ", are you from hyderabad?"));
//TASK # 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var myName = "manahil";
console.log("uppercase: ", myName.toUpperCase());
console.log("lowercase: ", myName.toLowerCase());
console.log("titlecase: ", myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase());
//TASK # 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('WALT DISNEY once said, "if you can dream it, you can do it".');
//TASK # 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var message = '“We cannot solve problems with the kind of thinking we employed when we came up with them.”';
console.log("".concat(famous_person, " once said, ").concat(message));
//TASK # 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var my_name = "\t\n MANAHIL RAJPUT \t\n";
console.log(my_name);
console.log(my_name.trim());
//TASK # 7
//Number Eight:Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results
var add = 5 + 3;
console.log("Addition Result : " + add);
var sub = 10 - 2;
console.log("Subtraction Result : " + sub);
var mul = 4 * 2;
console.log("Multiplication Result : " + mul);
var div = 16 / 2;
console.log("Division Result : " + div);
//TASK # 8
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(2 + 6);
console.log(15 - 7);
console.log(2 * 4);
console.log(64 / 8);
//TASK # 9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var fav_num = 11;
var msg = fav_num + "is my favourite number because it's my date of birth as well as my birthday month";
console.log(msg);
//TASK # 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//MANAHIL RAJPUT 
//DATE=17/5/2024
var me = "MANAHIL";
console.log("".concat(me, " IS AN IT SPECIALIST"));
//TASK # 11
//Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["dua", "daniya", "ayesha", "aqsa", "nafisa"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
//TASK # 12
// Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Names = ["dua", "daniya", "ayesha", "aqsa", "nafisa"];
console.log("dear ".concat(Names[0], " i will arrange an eid milan party on my home so please come to my home on this eid"));
console.log("dear ".concat(Names[1], " i will arrange an eid milan party on my home so please come to my home on this eid"));
console.log("dear ".concat(Names[2], " i will arrange an eid milan party on my home so please come to my home on this eid"));
console.log("dear ".concat(Names[3], " i will arrange an eid milan party on my home so please come to my home on this eid"));
console.log("dear ".concat(Names[4], " i will arrange an eid milan party on my home so please come to my home on this eid"));
//TASK # 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transports = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
//TASK # 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guests = ["dua", "daniya", "aqsa"];
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, " you are invited on a dinner tonight at my home, so join me tonight for a cozy dinner!"));
});
//TASK # 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var mguests = ["dua", "daniya", "aqsa", "laiba", "malahim"];
mguests.forEach(function (mguest) {
    console.log("Dear ".concat(mguest, " you are invited on a dinner tonight at my home, so join me tonight for a cozy dinner!"));
});
var notc = "aqsa";
console.log("".concat(notc, " can't come for dinner"));
var newc = "nafisa";
mguests[mguests.indexOf(notc)] = newc;
mguests.forEach(function (mguest) {
    console.log("".concat(mguest, " you are invited tonight for dinner at my home!"));
});
//TASK # 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
var Myguests = ["dua", "daniya", "aqsa", "laiba", "malahim"];
Myguests.forEach(function (Myguest) {
    console.log("".concat(Myguest, " you are invited tonight for dinner at my home!"));
});
Myguests.forEach(function (Myguest) {
    console.log("".concat(Myguest, "great news!! i have found a big dinner table so please come tonight!"));
});
Myguests.unshift("kubra");
Myguests.splice(Myguests.length / 1, 3, "erina hayat");
Myguests.push("fatima");
Myguests.forEach(function (Myguest) {
    console.log("".concat(Myguest, " you are invited on a dinner at my home!"));
});
//task # 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guests = ["dua", "daniya", "aqsa", "laiba", "malahim", "kubra", "erina hayat", "fatima"];
console.log("i can only invite two people for dinner !");
while (guests.length > 2) {
    var dltgst = guests.pop();
    console.log("ohh ".concat(dltgst, " i am so sorry there is no space so i can't invite you"));
}
guests.forEach(function (guest) {
    console.log("".concat(guest, " you are still invited for dinner!"));
});
guests.splice(0, guests.length);
console.log(guests);
//TASK # 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var places = ["ITALY", "DUBAI", "SWITZERLAND", "TURKEY", "ICELAND"];
places.forEach(function (place) {
    console.log(place);
});
places.sort();
console.log("ALPHABETICAL ORDER : ".concat(places));
console.log("ORIGINAL ORDER : ".concat(places));
places.reverse();
console.log("REVERSE ORDER : ".concat(places));
//TASK # 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var Mine_guests = ["dua", "daniya", "aqsa", "laiba", "malahim"];
console.log("hi eveyone i am invited ".concat(Mine_guests.length, " of my friends on a dinner tonight!"));
//TASK # 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var languages = ["TURKISH", "PUSHTO", "ARABIC", "KOREAN"];
languages.forEach(function (language) {
    console.log("i would like to speak ".concat(language));
});
//TASK # 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var I = {
    name: "Manahil Rajput",
    roll_no: "BSIT_2022_072",
    department: "Information Technology"
};
console.log("I Am ".concat(I.name, " From ").concat(I.department, " Department And My Roll Number Is ").concat(I.roll_no));
//TASK # 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var k = ["water", "fire", "air", "soil"];
console.log(k[6]); // intentional error
console.log(k[2]);
//TASK # 23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'toyota'? I Predict False");
console.log(car == 'toyota');
//TASK # 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
console.log("light" == "light"); //true
//console.log("light"=="Light");//false
//• Tests using the lower case function
console.log("HONEY".toLowerCase() == "honey"); //true
console.log("HONEY".toLowerCase() == "HONEY"); //false
//greater than and less than
console.log(56 > 34); //true
console.log(26 < 18); //false
//greater than or equal to, and less than or equal to
console.log(5 >= 1); //true
console.log(67 <= 23); //false
//• Tests using "and" and "or" operators
console.log(true && false); //true
console.log(true || false); //false
//• Test whether an item is in a array
var d = ["honey", "water", "acid"];
console.log(d.includes("honey")); //true
//• Test whether an item is not in a array
console.log(d.includes("juice")); //false
//TASK # 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
if (alien_color == "green") {
    console.log("congratulations you earn 5 points!!");
}
//TASK # 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
var aliens_color = "red";
if (aliens_color == "green") {
    console.log("congratulations you earn 5 points for shooting the alien!!");
}
else {
    console.log("you just earned 10 point!");
}
//TASK # 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien .
var Alien_color = "yellow";
if (Alien_color == "green") {
    console.log("congratulations you earn 5 points!");
}
else if (Alien_color == "yellow") {
    console.log("congratulations you just earned 10 point!");
}
else if (Alien_color == "red") {
    console.log("congratulations you earned 15 points!");
}
//TASK # 28
//stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
var age = 20;
if (age < 2) {
    console.log("you are a baby");
}
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age < 4) {
    console.log("you are a todler");
}
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age < 13) {
    console.log("you are a kid");
}
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age < 20) {
    console.log("you are a teenager!");
}
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age < 65) {
    console.log("you are now an adult!!");
}
//• If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("you are an elder");
}
//TASK # 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ["grape", "apple", "watermelon"];
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes("grape")) {
    console.log("i really like grapes!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("i really like kiwis!");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("i really like watermelons!");
}
if (favorite_fruits.includes("mango")) {
    console.log("i really like mangoes!");
}
if (favorite_fruits.includes("apple")) {
    console.log("i really like apples!");
}
//TASK # 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ["admin", "erina", "kubra", "koylu", "didem"];
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
usernames.forEach(function (username) {
    if (username.includes("admin")) {
        console.log("assalam o alaikum admin! thanks for logging in, would ypu like to see a status report? ");
    }
    else {
        console.log("assalam o alaikum ".concat(username, " thank you for logging in again!"));
    }
});
//TASK # 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var a = [];
if (a.length == 0) {
    console.log("we need to find some user!");
}
else {
    //greating...
}
//TASK # 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//• Make a list of five or more usernames called current_users.
var current_users = ["fallah", "areeba", "noor", "unaiba", "ishrat"];
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["isha", "noor", "khushbu", "unaiba", "zainab"];
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
new_users.forEach(function (new_user) {
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " you will need to enter a new UserName"));
    }
    else {
        console.log("".concat(new_user, " usrname is availible"));
    }
});
//TASK # 33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
//• Store the numbers 1 through 9 in a array.
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//• Loop through the array.
nums.forEach(function (num) {
    var a = "th";
    if (num == 1) {
        a = "st";
    }
    else if (num == 2) {
        a = "nd";
    }
    else if (num == 3) {
        a = "rd";
    }
    console.log("".concat(num).concat(a));
});
//TASK # 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizzaNames = ["lava", "chicken fajita", "ring", "cheese"];
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
pizzaNames.forEach(function (pizzaName) {
    console.log("i really like ".concat(pizzaName, " pizza"));
});
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("i love lava pizza beacuase that is very saucy!", '\n', "i love chicken fajita pizza becuase that is my favourite pizza fllavour!", '\n', "i love ring pizza because that filled with kebabs!", '\n', "i love cheese pizza because that is loaded with cheese!!");
//TASK # 35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal
var animals = ["elephant", "rabit", "kengroo"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("".concat(animal, " would make a great pet!"));
}
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("".concat(animals, " are mammals!!"));
//TASK # 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function Make_shirt(a, b) {
    console.log("the size of my shirt should be ".concat(a, ", and print my nick name ").concat(b, " on it. "));
}
Make_shirt("MEDIUM", "MINNIE");
//TASK # 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (message === void 0) { message = "i love typescript!"; }
    return size + " prints " + message;
}
console.log(make_shirt("Large Size"));
console.log(make_shirt("Medium Size"));
console.log(make_shirt("Any", "Ertugrul Ghazi"));
//TASK # 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Turkey"; }
    return city + " is in " + country;
}
console.log(describe_city("New York", "America"));
console.log(describe_city("Istanbul"));
console.log(describe_city("Poland", "Europe"));
// TASK # 39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return city + country;
}
console.log(city_country('"Amsterdam, ', 'Netherlands"'));
console.log(city_country('"Sharjah, ', 'United Arab Emirates(UAE)"'));
console.log(city_country('"Bahawalpur, ', 'Pakistan"'));
console.log(city_country('"cappadocia, ', 'Turkey"'));
// TASK # 40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function makeAlbum(artist, title, track) {
    var album = { artist: artist, title: title, track: track };
    if (track) {
        album['track'] = track;
    }
    return album;
}
console.log(makeAlbum("atif aslam ", " doorie"));
console.log(makeAlbum("aima baig ", " teriyan", 10));
console.log(makeAlbum("asim azhar", "jo tu na mila"));
// TASK # 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["David Copperfiel", "Derren Brown", "Criss Angel", "Dynamo"];
function show_Magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_Magicians(magicians);
//TASK # 42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var Magicians = ["David Copperfiel", "Derren Brown", "Criss Angel", "Dynamo"];
function show_magicians(Magicians) {
    Magicians.forEach(function (Magician) {
        console.log(Magician);
    });
}
//show_magicians(Magicians);
function make_great(magicians) {
    Magicians.forEach(function (Magician) {
        console.log("the great ".concat(Magician, "!"));
    });
}
show_magicians(Magicians);
make_great(Magicians);
// TASK # 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var nMagicians = ["David Copperfiel", "Derren Brown", "Criss Angel", "Dynamo"];
function showmagicians(nMagicians) {
    nMagicians.forEach(function (nMagician) {
        console.log(nMagician);
    });
}
//show_magicians(Magicians);
function Make_great(nmagicians) {
    nMagicians.forEach(function (nMagician) {
        console.log("".concat(nMagician, " the great!"));
    });
    return Make_great;
}
showmagicians(nMagicians); //original array
Make_great(nMagicians); //the great array
// TASK # 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var Sandwiches;
function items() {
    var Sandwiches = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Sandwiches[_i] = arguments[_i];
    }
    console.log("i want a sandwitch with ".concat(Sandwiches));
}
items("cheese", " mayo");
items("ketchup", " kebab", " onion");
items("latus", " tomato", " pickel");
// task # 45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var myCar = createCar("Toyota", "Camry", ["color", "red"], ["year", 2022]);
// Print the returned object
console.log(myCar);
