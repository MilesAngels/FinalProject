"use strict";

const main = document.querySelector("aside");
//console.log(output); // <div class="output"></div>

//output.textContent = "New Content";
//console.log(output); // <div class="output">New content</div>

// Storing json data in a variable
const localJsonFile = "./JS/events.json";

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener("DOMContentLoaded", () => {
  
  fetch(localJsonFile)
    .then((response) => response.json()) // and the response we get is in json format
    .then((data) => {
      // we call that data here
      // console.log(data); // check the data on the console
      main.innerHTML = ""; // Initial content is empty
      data.forEach((el) => {
        // loop through the json data using forEach method
        // console.log(el);
        jsonList(el); // calling jsonList function
      });
    });
});

// Create a function to display the json data dynamically on the webpage
async function jsonList(item) {
  // Create a new div element dynamically
  const contain = document.createElement("article");
  // get the required details from the local.json file to the div element using innerHTML
  contain.innerHTML = `
    <li class="bg-light text-dark">
    <a href="${item.url}">
      <img src="${item.image}" class="img-events">
    </a>
       <h4 class="crimson bold fs-3"> ${item.event}</h4> 
       <p class="montserrat fs-6 text-muted">${item.date}<p>
       <p class="montserrat"> ${item.information}<p>
       <p>${item.writing} <a href="${item.source}" class="bg-transparent text-primary text-break" style="width: 6rem;">${item.website}</a></p>
       
    </li>`;
  // attach the newly created div element to the original div element, in this case to the class '.output'
  main.append(contain);
  // Add styling to the displayed content
  contain.classList.add("card-events");
}