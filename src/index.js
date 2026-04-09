import "./style.css";
import Recifense from "./asset/resource/recifense.jpg"
import PestoPasta from "./asset/resource/pesto-pasta.jpg"
import Strogonoff from "./asset/resource/strogonoff.jpg"
const content = document.querySelector("#content")

const homeBtn = document.querySelector(".homeBtn")
const menuBtn = document.querySelector(".menuBtn")
const contactBtn = document.querySelector(".contactBtn")

const home = document.createElement("div")
const menu = document.createElement("div")
const contact = document.createElement("div")
home.className = "home"
menu.className = "menu"
contact.className = "contact"
content.append(home, menu, contact)
menu.style.display = "none"
contact.style.display = "none"
/// Lógica dos botões
homeBtn.addEventListener("click", () =>{
    home.style.display = "flex"
    menu.style.display = "none"
    contact.style.display = "none"
})
menuBtn.addEventListener("click", () =>{
    menu.style.display = "flex"
    home.style.display = "none"
    contact.style.display = "none"
})
contactBtn.addEventListener("click", () =>{
    contact.style.display = "flex"
    home.style.display = "none"
    menu.style.display = "none"
})
/// Home
const tituloHome = document.createElement("h1")
tituloHome.textContent = "Welcome to the Hackers Restaurant"
const about = document.createElement("div")
about.className = "container"
const aboutText = document.createElement("p")
aboutText.textContent = "The Hackers Restaurant is the best place to gather your nerd friends, developers, engineers and everyone inside this bubble. But, as crazy as it will might sound, we also serve healthy food. Our main dish being Recifense. Plus a comforting and safe environment."
about.appendChild(aboutText)
const hours = document.createElement("div")
hours.className = "container"
const hoursText = document.createElement("p")
hoursText.innerHTML = "<span>Hours</span> <br>" +
    "Sunday: 8am - 5pm <br>" +
    "\n" +
    "Monday: 6am - 6pm <br>" +
    "\n" +
    "Tuesday: 6am - 6pm <br>" +
    "\n" +
    "Wednesday: 6am - 6pm <br>" +
    "\n" +
    "Thursday: 6am - 10pm <br>" +
    "\n" +
    "Friday: 6am - 10pm <br>" +
    "Saturday: 8am - 8pm"
hoursText.style.lineHeight = "1.30rem"
hoursText.style.textAlign = "start"
hours.appendChild(hoursText)
const location = document.createElement("div")
location.className = "container"
const address = document.createElement("p")
address.textContent = "Cambridge Street 193, Howlville, HellCity"
location.appendChild(address)
home.append(tituloHome, about, hours, location)

/// Menu
const tituloMenu = document.createElement("h1")
tituloMenu.textContent = "Menu"
const mainDishesTitle = document.createElement("h2")
mainDishesTitle.textContent = "Main Dishes"
const mainDishes = document.createElement("div")
mainDishes.className = "main-dishes"
const recifense = document.createElement("div")
recifense.className = "container"
const recifenseImg = document.createElement("img")
recifenseImg.src = Recifense
const recifenseTitle = document.createElement("h3")
recifenseTitle.textContent = "$6.99 - Recifense"
const recifenseRecipe = document.createElement("p")
recifenseRecipe.textContent = "Rice, Beans, French Fries and Chicken Milanese"
recifense.append(recifenseImg, recifenseTitle, recifenseRecipe)

const tripasHomo = document.createElement("div")
tripasHomo.className = "container"
const tripasHomoImg = document.createElement("img")
tripasHomoImg.src = PestoPasta
const tripasHomoTitle = document.createElement("h3")
tripasHomoTitle.textContent = "$10.99 - Tripas Homosapien"
const tripasHomoRecipe = document.createElement("p")
tripasHomoRecipe.textContent = "Pesto Pasta with Chicken"
tripasHomo.append(tripasHomoImg, tripasHomoTitle, tripasHomoRecipe)

const strogonoff = document.createElement("div")
strogonoff.className = "container"
const strogonoffImg = document.createElement("img")
strogonoffImg.src = Strogonoff
const strogonoffTitle = document.createElement("h3")
strogonoffTitle.textContent = "$8.00 - Strongernoff"
const strogonoffRecipe = document.createElement("p")
strogonoffRecipe.textContent = "Rice, Potato Straws and Cubed Chicken"
strogonoff.append(strogonoffImg, strogonoffTitle, strogonoffRecipe)

mainDishes.append(recifense, tripasHomo, strogonoff)
const sideDishesTitle = document.createElement("h2")
sideDishesTitle.textContent = "Side Dishes"
const sideDishes = document.createElement("div")
sideDishes.className = "side-dishes"

menu.append(tituloMenu, mainDishesTitle, mainDishes, sideDishesTitle, sideDishes)