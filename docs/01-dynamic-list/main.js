

const items = [ "First", "Second", "Third"]; // The list (array) of things we want to show on the page
const list = document.getElementById("item-list"); // Find the <ul> element in the HTML with the id="item-list"

// A function that take an array and puts it inside the <ul>
function renderList(array) {

    list.innerHtml = ""; // Remove everything in the list before adding new stuff
    
    // Go through each thing in the array one by one
    array.forEach(text => {

        const li = document.createElement("li");  // Make a new <li> element

        li.textContent = text; // Put the text inside the <li> 

        list.appendChild(li); // Add the <li> to the <ul>
    });
}

renderList(items); 