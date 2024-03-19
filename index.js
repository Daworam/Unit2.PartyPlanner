// **COMMENTS FOR MY OWN STUDY PURPOSES**

//set up state with empty array to store the data from the api
// request the data from an api to get the data
// display the data on the webpage
// create a render function to upadte the information on the page
//create a function that renders the data from the api

API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events` //defining variable to hold the link to the api

const eventList = document.querySelector('#partyList') // setting variable for the list in the html document that will be appended
const state = {   //creating the state, an empty array that will be populated with the information from the api
  events: [],
}

const getEvents = async () => {  //function that grabs the information from the api to use it in js, needs to be async because some actions will be await
  try{ //protects the program from encountering an error with fetching from the api
    returnedEvents = await fetch(API_URL); //defining a variable taht 
    jsonEvents = await returnedEvents.json(); //defining a variable that takes the data returned from fetch, unpacking the json package
    state.events = jsonEvents.data; // setting the array in the state object to the converted data from the api
    console.log(state.events);
  }catch(error){ //catches anything that goes wrong, 'error' and performs an action in response
    console.log("Error"); //action performed if the try statement action runs in to an unexpected issue
  }
  console.log("Hello");
}

const renderEvents = () => { // create function to render the information from the api on to the html page
  state.events.forEach((event) => { // forEach function that loops through the items in the state-array
    let li = document.createElement('li'); // defines a variable to hold the new created elements in html
    li.innerHTML = `${event.name} - ${event.date} -  
      ${event.location} - ${event.description}`; // line above tells the newlycreated element what content to display, set to keys in the json elements to display the values
    eventList.appendChild(li); // appends the created defined item to the specified variable in the state
  });

}


const render = async () => { // function that runs the functions that change the state
  await getEvents();
  renderEvents(state.events);
}

render(); //final call of the render function to run the other functions