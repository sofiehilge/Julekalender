//hvad dato er det
let date = new Date;
let currentDay = date.getDate() //idag er den lige med = 10
let currentMonth = date.getMonth()+1 //idag er den lige med = 10
const alertBox = document.querySelector(".alert")

const activationMonth = 12 //denne variable skal ændres til 12 når vi er færdige med at udvikle

//Vi indsamler alle kalenderlåger i en liste
const items = document.querySelectorAll(".item")

//Vi deklarerer et tomt array der holder styr på om låger er åbne
let openOrClosed = []

//Her kommer noget local storrage
if (localStorage.days){//hvis localstorage existere
    openOrClosed = JSON.parse(localStorage.getItem("days"));//convertere localstorage til et array, og så skal det bare være days
}

//LOOP
items.forEach(function(element, index){
    element.addEventListener("click", clickHandler)
    if(openOrClosed[index] == true){// hvis vores array er åbent, så kommer classen, open på den
        element.classList.add("open")
    } 
})

//deklaration af clickHandler funktion
function clickHandler (event){
    if(currentDay >= this.dataset.date && currentMonth==activationMonth){ //Hvis større end eller lig med så skal funktionen køre
        if(this.classList.contains("open")){// this betyder det element der er klikket på
            this.classList.remove("open") // vi remover open hvis den ikke er åben
            openOrClosed[this.dataset.date-1] = false;
        }
        else {
            this.classList.add("open")
            openOrClosed[this.dataset.date-1] = true; //Vi bliver nødt til at trække en fra, da computere tæller fra 0, ellers vil arrayet ikke matche datoerne på kalenderen
        }

        localStorage.setItem("days", JSON.stringify(openOrClosed))//gemmer i local storage et entry point der hedder days, og et langt komma list der hedder openOrClosed arrays
    }
    else{
        alertBox.style.display = "block";
        setTimeout(() => {alertBox.style.display = "none";}, 8000)
    }
}

//Når man kalder en funktion så køre den, når man deklarere den så fortæller man hvad den skal gøre. Funktionen designes. 
