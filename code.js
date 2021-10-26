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
    li.innerText = `${person.hobbies[i]}`
    hobbieList.append(li)
  }
  let shippingAddressTitle = document.createElement("h4")
  shippingAddressTitle.innerText = "Shipping Address"
  container.append(shippingAddressTitle)
  let streetNumber = `${person.address.number} ${person.address.street}`
  let cityStateZip = `${person.address.city}, ${person.address.state} ${person.address.zipcode}`
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

let myPerson = {
  firstName: "Peter",
  lastName: "Griffin",
  hobbies: ["Hanging out with Brian", "Drinking Pawtucket Pat Ale", "Fighting Giant Chickens"],
  address: {
    number: 31,
    street: "Spooner Street",
    city: "Quahog",
    state: "Rhode Island",
    zipcode: "98765",
  },
  "favorite color": "green",
}


renderPerson(myPerson)

function changePersonToBart(person) {
  // Your Code Here
  person.firstName = "Bart"
  person.hobbies.splice(2, 1, "Skateboarding")
  person["favorite colore"] = "orange"
}

changePersonToBart(examplePerson)
renderPerson(examplePerson)

function changePersontoDog(person){
  person.firstName = "Scooby"
  person.lastName = "Doo"
  person.hobbies.splice(0,1, "Hanging with Shaggy")
  person.hobbies.splice(1,1, "Eating Scooby Snacks")
  person.hobbies.splice(2,1, "Hiding from ghosts")
  person.address.number = "6R00VY"
  person.address.street = "The Mystery Machine"
  person.address.city = "Crystal Cove"
  person.address.state = "Stateslyvania"
  person.address.zipcode = "80000"
  person["favorite colore"] = "brown"
}

changePersontoDog(myPerson)
renderPerson(myPerson)



