"use strict";
// More Guest: You fund a bigger dinner table< so now more space is avaible.
//Think of three more guest to invite to dinner.
//(a) Start with your program form Exercise 15. Add a print statment to the end of your program informing 
//people that you found a bigger dinner table.
//(b) Add one new guest vto the beginning of your array.
//(c) Add one new guest to the middle of your array.
//(d) Use append() to add one new guest to the end of your list.
//(e) Print a new set of invitation message, one for each person in your list.
let guestArr = ["Hamza", "Ali", "Wajaht", "Haseeb"];
let canNotAttend = "Ali";
let newGuest = "Muzammil";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
//guestArr.map((items)=> console.log(`Dear ${items}, I Found a bigger dinner table so I am invited more peoples`));
// part 2 began
let guestBeg = "Muizz";
guestArr.unshift(guestBeg);
//console.log(guestArr)
// part 3 Middle
let middleGuest = "Fatima";
let middleIndex = "guestArr".length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
//console.log(guestArr)
// part4 append
guestArr.push("zeeshan");
//console.log(guestArr)
// part 5
guestArr.map((items) => console.log(`Dear ${items},you are invited in the more people list on dinner`));
