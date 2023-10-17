/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//created var quotes with value of array with objs
let quotes = [{quote:"The flower that blooms in adversity is the most rare and beautiful of all", source:"Mulan", citation: "Jane Doe, Mulan. 1998"},
{quote:"All it takes is faith and trust.", source:"Peter Pan", year:"1953"},
{quote:"The past can hurt. But the way I see it, you can either run from it or learn from it", source:"The Lion King"},
{quote:"Just because it's what's done, doesn't mean it's what should be done", source:"Cinderella"},
{quote:"The only way to get what you want in this world is through hard work", source:"The Princess and the Frog"}];


/***
 * `getRandomQuote` function
***/

//why do we not need to pass quotes as our argument?
function getRandomQuote(){
  //this is giving you the index of the array
  const randomNum = parseInt(Math.floor(Math.random() * quotes.length));
 console.log(randomNum, quotes[randomNum]);

  return quotes[randomNum];
}



/***
 * `printQuote` function
***/






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);