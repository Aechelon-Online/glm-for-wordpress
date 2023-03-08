const checkboxes = document.querySelector(".entertainment-checkboxes")
const mobileMenu = document.querySelector(".mobile-menu")
const menuWrapper = document.querySelector(".menu-wrapper")
const cross = document.querySelector(".cross")
const menuBox = document.querySelector(".menu-box")
const spotMark = document.querySelector(".spot-mark")
const radios = document.querySelector(".event-radio-buttons")
const list = document.querySelector(".list")
const dots = document.querySelector(".dots")
const eventSelect = document.querySelector(".event-select")
const serviceSelect = document.querySelector(".service-select")


menuWrapper.addEventListener('click', () => {
    mobileMenu.classList.toggle("reveal")
    menuWrapper.classList.toggle("move-tab")
    menuBox.classList.toggle("hide-lines")
    spotMark.classList.toggle("cross")

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
    

    let city = locationParts[2]
    let stateAndZip = locationParts[3]
    let stateSplit = stateAndZip.split(" ")
    let state = stateSplit[1]
    
   

    const dateTime = data['items'][i]['start']['dateTime']
    const realDate = moment(dateTime).format('ll')
    const realTime = moment(dateTime).format('LT')
    const dateSplit = realDate.split(",",1).toString()
    const monthDateSplit = dateSplit.split(" ")
    const month = monthDateSplit[0]
    const date = monthDateSplit[1]
    

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

document.querySelector("form").addEventListener("submit", function(event) {
    if (document.querySelector("input#website").value.length != 0) {
        event.preventDefault();
    }
});