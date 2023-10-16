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
let quotes = [{quote:'', source:'', citation: ''},{quote:'', source:'', year:''},{quote:'', source:''},{quote:'', source:''},{quote:'', source:''}];


/***
 * `getRandomQuote` function
***/

//why do we not need to pass quotes as our argument?
function getRandomQuote(){
  //this is giving you the index of the array
  const randomNum = parseInt(Math.floor(Math.random * quotes.length));
 

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