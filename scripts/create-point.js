function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(res => res.json())
        .then(states => {
            for (state of states) {
                ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome}</option>`
            }
        })
}

populateUFs()

function getCities(event) {
    const selectCity = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")



    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy=nome`


    selectCity.innerHTML = "<option value>Select a city</option>"
        // It will make the 'city' options unavailable until a new state is selected
    selectCity.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {


            for (const city of cities) {
                selectCity.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            // It will make the 'city' options available to be chosen from drop down menu after selecting a state
            selectCity.disabled = false
        })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)