const buttonSearch = document.querySelector("#home-page main a")
const modal = document.querySelector("#modal")


// => Arrow functions, anonymous function
buttonSearch.addEventListener("click", () => {
    modal.classList.toggle("hide") //"Toggle" will remove and add the functionality to the class "hide"
})