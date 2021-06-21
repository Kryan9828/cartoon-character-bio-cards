/*
---------------------------------------------------------------------------
Objects - Part One
*/

// Do not modify this object here.
let examplePerson = {
  firstName: "Homer",
  lastName: "Simpson",
  hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
  address: {
    number: 742,
    street: "Evergreen Terrace",
    city: "Springfield",
    state: "Illinois",
    zipcode: "12345",
  },
  "favorite color": "yellow",
};

/*
Using the function below, print the person to the page according 
to the instructions on my.kenzie
*/

function renderPerson(person) {
  // Your Code Here
  let container = document.createElement("div")
  container.className = "card"
  document.body.append(container)
  let names = document.createElement("h2")
  let nameFirstLast = `${person.firstName} ${person.lastName}`
  names.innerText = nameFirstLast
  container.append(names)
  let hobbies = document.createElement("h4")
  hobbies.innerText = "Hobbies"
  container.append (hobbies)
  let hobbieList = document.createElement("ul")
  container.append(hobbieList)
  for (let i = 0; i < person.hobbies.length;i++){
    let li = document.createElement("li")
    li.innerText = `${examplePerson.hobbies[i]}`
    hobbieList.append(li)
  }
  let shippingAddressTitle = document.createElement("h4")
  shippingAddressTitle.innerText = "Shipping Address"
  container.append(shippingAddressTitle)
  let streetNumber = `${person.address.number} ${examplePerson.address.street}`
  let cityStateZip = `${person.address.city} ${person.address.state} ${person.address.zipcode}`
  let shippingAddress = document.createElement("p")
  shippingAddress.innerText = ` ${nameFirstLast} \n ${streetNumber}\n ${cityStateZip}
    `
  container.append(shippingAddress)
  let favoriteColorTitle = document.createElement("h4")
  favoriteColorTitle.innerText = "Favorite Color"
  container.append(favoriteColorTitle)
  let favoriteColor = document.createElement("p")
  favoriteColor.innerText = `${person["favorite color"]}`
  container.append(favoriteColor)
}

renderPerson(examplePerson);

/*
---------------------------------------------------------------------------
Part Two

Create a new person.  

Your object should look very similar to the Person object above!
But you should use different values.  Put whatever you want for the values.

Call renderPerson() and pass your new person object in as an argument to 
render your person to the page.
*/

// Your Code Here




/*
---------------------------------------------------------------------------
Part Three

Modify the person object to change them to bart.  
Follow the instruction on my.kenzie
*/

function changePersonToBart(person) {
  // Your Code Here


}

// Then, call the function with the argument examplePerson
// Assign the result to a new variable.  Then call renderPerson with the 
// new variable

/*
---------------------------------------------------------------------------
Part Four (Optional Practice)

Create your own object!
*/

// Your Code Here




