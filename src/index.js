document.addEventListener("DOMContentLoaded", () => {

  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email")
  const street = document.getElementById("street")
  const city = document.getElementById("city")
  const state = document.getElementById("state")
  const postcode = document.getElementById("postcode")
  const phone = document.getElementById("phone")
  const cell = document.getElementById("cell")
  const date_of_birth = document.getElementById("date_of_birth")

  const buttonEl = document.querySelector("button.btn")

  // Question 5 
  buttonEl.addEventListener("click", function fetchData () {
    const data = fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( data => {
        const firstName = data['results'][0]['name']['first']
        const lastName = data['results'][0]['name']['last']
        fullname.innerHTML = `${firstName} ${lastName}`
        email.innerHTML = data['results'][0]['email']
        street.innerHTML = data['results'][0]['location']['street']
        city.innerHTML = data['results'][0]['location']['city']
        state.innerHTML = data['results'][0]['location']['state']
        postcode.innerHTML = data['results'][0]['location']['postcode']
        phone.innerHTML = data['results'][0]['phone']
        cell.innerHTML = data['results'][0]['cell']
        date_of_birth.innerHTML = data['results'][0]['dob']['date']
      })
  })

});

// Question 3
// In your own words: what does asynchronous mean?
  // With an asynchronous request, a user can perform other operations while the data is still being retrieved. 
  // The browser is still responsive.

// Question 4
// Write out the request and response cycle. What is its purpose? How does it work?
  // The request and response cycle consists of requests (such as GET requests) being sent to the server by the 
  // client (a browser) and  data being returned from the server (the response). The purpose of it is that the 
  // client and server can interact.
