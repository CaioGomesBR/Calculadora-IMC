const urlPokemon = "https://pokeapi.co/api/v2/pokemon"
const urlTipo = "https://pokeapi.co/api/v2/type"
const urlHabilidade = "https://pokeapi.co/api/v2/ability"
const PTBR= "https://pokeapi.co/api/v2/language/13"

function getPokemons () {
    fetch(`${urlPokemon}/1`)
    .then (response => response.json())
    .then( data=> nome.textContent = JSON.stringify(data.name).PTBR)
    .catch(error => console.error(error))
}

function getType() {
    fetch(`${urlTipo}/1`)
    .then (response => response.json())
    .then( data=> tipo.textContent = JSON.stringify(data.name),
                    )
    .catch(error => console.error(error))
}

function getHabilidade() {
    fetch(`${urlHabilidade}/1`)
    .then (response => response.json())
    .then( data=> habilidades.textContent = JSON.stringify(data.name),
                    )
    .catch(error => console.error(error))
}

getPokemons()
getType ()
getHabilidade()