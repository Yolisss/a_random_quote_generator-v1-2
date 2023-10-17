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


function getRandomQuote(){
  //this is giving you the index of the array
  //using parseInt to confirm result comes back as int
  const randomNum = parseInt(Math.floor(Math.random() * quotes.length));
  console.log(randomNum, quotes[randomNum]);

  return quotes[randomNum];
}

//extra credit
const getRandomColor = () => {
  // generating a random number and converting it to an integar, range of 255
  const r = parseInt(Math.random() * 256);
  const g = parseInt(Math.random() * 256);
  const b = parseInt(Math.random() * 256);
  //using three generated random numbers to create rgb color 
  const rgbcolor = `rgb(${r}, ${g}, ${b})`;
  return rgbcolor;
}



/***
 * `printQuote` function
***/


function printQuote(){

  //creating a var with the getRandomQuote as the value
  //within this function, we now have access to the quotes 
  let grabQuote = getRandomQuote();
   //console.log(grabQuote);

   //created a var with a str value of quote and source
  let htmlStr = `<p class="quote"> ${grabQuote.quote} </p>
  <p class="source"> ${grabQuote.source}
  `
  //created an if statment stating "if within the quote we find either citation or year, 
  //add that to our htmlStr"
  if(grabQuote.citation){
     htmlStr += `<span class="citation">${grabQuote.citation}</span>`
     console.log(grabQuote.citation)
  } if(grabQuote.year){
     htmlStr += `<span class="year">${grabQuote.year}</span>`
     console.log(grabQuote.year)
  }

  //htmlStr is a str with only opening paragraph, 
  //this line is including the closing tag
  htmlStr += '</p>';

  //grabbing id 'quote-box' from our HTML to insert the quote
  document.getElementById('quote-box').innerHTML = htmlStr; 

  //grabbing body element and using style to change background color
  document.querySelector('body').style.backgroundColor = getRandomColor();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);