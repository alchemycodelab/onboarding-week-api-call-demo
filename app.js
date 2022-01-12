// import functions
import { getPokedex, getStarWarsPeople } from './api-fetch.js';
/// Validate the data from the API by console logging the data
/// ex. console.log(getPokedex());
/// This will return an array of objects


// grab DOM elements
/// set them to a variable to use later.

const template = document.querySelector('#template');
const list = document.querySelector('#list');
const selectEl = document.querySelector('select');
/// Validate the data from the API by console logging the data
// ex: console.log(template, list);


/// Create a function to render the data from the API

async function loadPokedex() {
    /// use the await keyword to wait for the data to be ready
    const pokedex = await getPokedex();
    /// 1.  Validate the data from the API by console logging the data
        // ex: console.log(pokedex); check console to see the data
    /// 2 . Loop through the data and create a new element for each item in the array
    for (let pokemon of pokedex) {
        // console.log(pokemon); to make sure you are looping through the data correctly
        /// 3. Create a variable to hold the clone of the template
        const clone = template.content.cloneNode(true);
        /// 4. Grab the h1 element from the clone and set it to a variable
        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');
        /// Validate console.log(pokemon, name, image);
        /// 5. Set the textContent of the h1 element to the name, pokedex egg_group_1 of the pokemon
        /// But look at the data you can add more but dot notate to grab the data you want

        name.textContent = pokemon.pokemon;
  
        type.textContent = pokemon.egg_group_1;
        image.src = pokemon.url_image;
        image.alt = pokemon.pokedex;
        /// 6. Append the clone to the list element
        list.appendChild(clone);
      
    
    }
}
// /// 7. Call the loadPokedex function to see if the data is loaded on the dom!
// loadPokedex();

async function loadStarWars() {
    /// use the await keyword to wait for the data to be ready
    const starWars = await getStarWarsPeople();
    // console.log(starWars);
    /// 1.  Validate the data from the API by console logging the data
        // ex: console.log(starWars); check console to see the data
    /// 2 . Loop through the data and create a new element for each item in the array
    for (let person of starWars) {
        // console.log(person); to make sure you are looping through the data correctly
        /// 3. Create a variable to hold the clone of the template
        const clone = template.content.cloneNode(true);
        /// 4. Grab the h1 element from the clone and set it to a variable
        const name = clone.querySelector('h2');
    
        const type = clone.querySelector('h6');
        /// Validate console.log(person, name, hair_color);
        /// 5. Set the textContent of the h1 element to the name, starWars egg_group_1 of the person
        /// But look at the data you can add more but dot notate to grab the data you want

        name.textContent = person.name;
  
        type.textContent = person.hair_color;
      
        /// 6. Append the clone to the list element
        list.appendChild(clone);
      
    
    }
}
/// 7. Call the loadStarWars function to see if the data is loaded on the dom!




// set event listeners 
selectEl.addEventListener('change', async(e) => { 
    if (e.target.value === 'pokemon') {
         // get user input
            // use user input to update state
            // update DOM to reflect the new state
        /// 1. Clear the list element to then render the new data
        list.innerHTML = '';
        await loadPokedex();
    } else if (e.target.value === 'star-wars') {
               // get user input
            // use user input to update state
            // update DOM to reflect the new state
        /// 1. Clear the list element to then render the new data
        list.innerHTML = '';
        await loadStarWars();
    }
});
