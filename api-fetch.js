
// API Documentation: https://alchemy-pokedex.herokuapp.com/
/// Create a async function to fetch the data from the API
/// Dont for to put export in front of the function to make this function available outside the file
export async function getPokedex() {
    /// Set the url to a variable
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    /// Set the response to a variable we use fetch to get the data from the API
    //// We also need to use await to wait for the response to be ready
    /// If we do not use await the code will continue to run before the response is ready with a error of Promise pending
    const resp = await fetch(url);
    /// Set the date to a variable after turn the response into json
    const json = await resp.json();
    /// Return the json data by dot notating into the json variable to grab the results of the fetch call
    return json.results;
}
  
  // API Documentation: https://swapi.dev/documentation
export async function getStarWarsPeople() {
    let url = 'https://swapi.dev/api/people';
  
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}