//https://github.com/KenzieAcademy-Students/datamodels-array-of-objects-practice-ricklyman

let dataModel = [
  {
    name: "Scruffy",
    breed: "Bulldog",
    age: 2,
    likesTreats: true
  },
  {
    name: "Fido",
    breed: "Mutt",
    age: 1,
    likesTreats: true
  },
  {
    name: "Athena",
    breed: "Great Dane",
    age: 6,
    likesTreats: true
  }
	
];

let dog = {
  "name": "Dog",
  "breed": "Mutt",
  "age": 1,
  "likesTreats": true
};

	
// When this function is run, it is meant to use the user input to build
// a dog object, and add the dog object to the data model array.
function onSubmitDog (event) {
  event.preventDefault();

  let nameInput = document.querySelector("#name_input");  // We provide a CSS selector, as a string, to identify which HTML element we want querySelector to find for us.
  let breedInput = document.querySelector("#breed_input");
  let ageInput = document.querySelector("#age_input");
  let treatsCheckbox = document.querySelector("#treats_input");

  let name = nameInput.value;
  let breed = breedInput.value;
  let age = ageInput.value;
  let likesTreats = treatsCheckbox.checked;
  
  if (name === "" || breed === "" || age === "") {  // If any of these text boxes are empty...
    alert("Please fill out all of the fields!");
    return;  // Exit the function early if the above condition is true.
  }

  // STEP TWO - Create a "dog" variable. What piece of data will we assign
  // to this variable? A new "dog" object, containing the values from above:
  // name, breed, age, likeTreats. Add this object to your data model array.
  // How can you insert this dog object into the dogs array?

  // YOUR CODE HERE
let thisDog = {};
 thisDog.name = name;
 thisDog.breed = breed;
 thisDog.age = age;
 thisDog.likesTreats = likesTreats;
 dataModel.push(thisDog);

  renderDogList(); // Now that we have added a new dog to the data model,
                   // we should render the dog list on the page again.
  
  // The following lines reset the form, so that it is ready for information
  // on a new dog:
  nameInput.value = "";
  breedInput.value = "";
  ageInput.value = "";
  treatsCheckbox.checked = false;
}


// This function is run, it is meant to keep the dog list which the user
// sees on the page in sync with the data model containing all of our 
// dog objects.
function renderDogList() {
  let list = document.querySelector("#dog_list");
  list.innerHTML = "";  // First, CLEAR the whole list.

  // STEP THREE - Render the dog list from scratch. See "Step Three"
  // instructions.
  // If there are no dogs, then render "No Dogs!" Otherwise, render all 
  // of the dogs in your data model.
  // Remember to copy the "Send Home" button code into your loop. This
  // code is in the instructions.

  // YOUR CODE HERE
  if (dataModel.length === 0) {
	list.innerHTML = "<li>No Dogs!</li>"
  }

let currentDog = "";	
for (var i = 0; i < dataModel.length; i += 1) {
   currentDog = dataModel[i];
   list.innerHTML = list.innerHTML + "<li>"

	switch (currentDog.likesTreats) {
    case true:
     list.innerHTML = list.innerHTML + `${currentDog.name}! A ${currentDog.age} year old ${currentDog.breed} who likes treats.  <button onclick="removeDog('${currentDog.name}')">Send Home</button>`;
    break;
    case false:
     list.innerHTML = list.innerHTML + `${currentDog.name}! A ${currentDog.age} year old ${currentDog.breed} who does not likes treats.  <button onclick="removeDog('${currentDog.name}')">Send Home</button>`;
    break;
    default:
    list.innerHTML = list.innerHTML + `${currentDog.name}! A ${currentDog.age} year old ${currentDog.breed}.  <button onclick="removeDog('${currentDog.name}')">Send Home</button>`;
    //re: Angie!  A 8 year old Chihuahua. example not possible? treatsCheckbox.checked is true or false: null or space etc. not availabe. Change to drop down?
 }

//already building the html; easier than example:	

/*
let dog = // get the dog from your data model
// Create list item
// Create the dog description, and append it to the list item
// Create the send home button, and make it trigger removeDog() with the current dog
let sendHomeButton = document.createElement("button");
sendHomeButton.innerText = "Send Home";
sendHomeButton.onclick = function() {
  removeDog(dog);
}
li.appendChild(sendHomeButton);
// Finally, append the list item to the list	
*/	
		
  list.innerHTML = list.innerHTML + "</li>"    
 }

}

// The functIndexion below is already completed for you. It removes a given 
// dog from the data model. It finds the index of the dog, and then uses
// that index to splice (cut) it out of the array. Then it re-renders
// the dog list, so that it no longer displays on the page.
function removeDog(dog) {
 //https://stackoverflow.com/questions/11258077/how-to-find-index-of-an-object-by-key-and-value-in-an-javascript-array/39810268
 let dogIndex = dataModel.findIndex(p => p.name == dog);
  //let dogIndex = dataModel.indexOf(dog);
	
  dataModel.splice(dogIndex, 1);

  renderDogList();
}


// We need to tell the Submit button on the page what to do:
// Run the onSubmitDog function when the button is clicked.
let button = document.querySelector("#submit_button");
button.addEventListener("click", onSubmitDog);



// This function call will take place when the page loads, in order
// to render the dog list for the very first time.
renderDogList();
