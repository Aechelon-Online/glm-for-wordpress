const checkboxes = document.querySelector(".entertainment-checkboxes")
const mobileMenu = document.querySelector(".mobile-menu")
const menuWrapper = document.querySelector(".menu-wrapper")
const cross = document.querySelector(".cross")
const menuBox = document.querySelector(".menu-box")
const spotMark = document.querySelector(".spot-mark")


menuWrapper.addEventListener('click', () => {
    mobileMenu.classList.toggle("reveal");
    menuWrapper.classList.toggle("move-tab");
    menuBox.classList.toggle("hide-lines");
    spotMark.classList.toggle("cross");
})


let isOpen = true

checkboxes.addEventListener('click', () => {
    list.classList.toggle("show")
    isOpen = !isOpen
    serviceSelect.innerText = isOpen ? "▼" : "✕"
    if(serviceSelect.innerText === "✕"){
        serviceSelect.style.margin = "-2px 1px"
    } else {
        serviceSelect.style.margin = "0"
    }
})

radios.addEventListener('click', () => {
    dots.classList.toggle("show")
    isOpen = !isOpen
    eventSelect.innerText = isOpen ? "▼" : "✕"
    if(eventSelect.innerText === "✕"){
        eventSelect.style.margin = "-2px 1px"
    } else {
        eventSelect.style.margin = "0"
    }
   
})



document.querySelector("form").addEventListener("submit", function(event) {
  if (document.querySelector("input#website").value.length != 0) {
      event.preventDefault();
  }
});


// Calendar API JS

async function getData () {
    const now = moment().toISOString()
    let url = new URL("https://www.googleapis.com/calendar/v3/calendars/greglucemusic@gmail.com/events")
    url.search = new URLSearchParams({
    'key': 'AIzaSyAHgEiHBOLjLHixU-ptMhF_3hdimwT55ro',
    'singleEvents': true,
    'timeMin': now,
    'maxResults': 10,
    'orderBy' : 'starttime'
    })
    
    
    let apiCall = await fetch(url)
    
    const data = await apiCall.json()
    console.log(data)

    
  for (let i = 0; i < data['items'].length; i++) {
    const summary = data["items"][i]['summary']
    const location = data['items'][i]['location']
    const locationParts = location.split(",")
    const venue = locationParts[0]

    let city = locationParts[2]
    let stateAndZip = locationParts[3]
    let stateSplit = stateAndZip.split(" ")
    let state = stateSplit[1]
    
    // console.log(stateSplit)

    const dateTime = data['items'][i]['start']['dateTime']
    const realDate = moment(dateTime).format('ll')
    const realTime = moment(dateTime).format('LT')
    const dateSplit = realDate.split(",",1).toString()
    const monthDateSplit = dateSplit.split(" ")
    const month = monthDateSplit[0]
    const date = monthDateSplit[1]
    

    // console.log(month)
    // console.log(summary)
    // console.log(location)

    
    if (summary === 'Tommy Bahamas' || summary.includes("Hartt")) {
    city = locationParts[3]
    stateAndZip = locationParts[4]
    stateSplit = stateAndZip.split(" ")
    state = stateSplit[1]
    }

    if (summary.includes("Private")) {
      city = locationParts[1]
      stateAndZip = locationParts[2]
      stateSplit = stateAndZip.split(" ")
      state = stateSplit[1]
    } 

   
    document.querySelector(".calendar-api").innerHTML += 
    `
    <div class="date-wrapper">
      <div class="big-date">
        <p class="year">${month}</p>
        <p class="day">${date}</p>
      </div>
      <div class="date-loc">
        <p class="location"><a class="google-map" target="_blank" href="https://www.google.com/maps/search/?api=1&query=${location}">${summary}</a></p>
        <p class="location">${city + " " + state}</p>
        <p class="dateTime">${realTime}</p>
      </div>
    </div>
    `

  }
}
getData()

// Blog article post

const post = document.querySelector(".blog__section-front")
const trunc = "There are so many things to decide for your big day, but sometimes it’s hard to budget for everything and make it work perfectly. A wedding DJ doesn’t seem like it should be as much of a deal when it comes to cost. Besides, they are all pretty much the same, right? You may be in for a rude awakening when you thought you were saving money in place of the experience you are hoping for. Here are 10 reasons you would want to strongly consider NOT lowballing your entertainment needs."

function truncateString() {
  return trunc.split(" ").splice(0, 20).join(" ") + "..."
}

post.innerHTML = `<p class="blog__header">${truncateString()}</p>`

console.log(post)