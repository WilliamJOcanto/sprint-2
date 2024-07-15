// Creando cards de peliculas:

let contenedor = document.getElementById("contenedorMovies")

function estructuraCard(lenguaje, release, duracion, status, foto, titulo, eslogan, descripcion, votos, budget, revenue, genero){
    let card = `<a href="./search.html?original_language=${lenguaje}&release_date=${release}&runtime=${duracion}&status=${status}&image=${foto}&title=${titulo}&tagline=${eslogan}&overview=${descripcion}&vote_average=${votos}&budget=${budget}&revenue=${revenue}&genres=${genero}">
        <article class="flex flex-col items-center border-solid border-4 border-yellow-600 bg-gray-700 w-80 h-[550px] p-4 gap-2 rounded-xl mb-4">
            <img class="w-52 border-4 border-solid border-green-800 rounded-xl" src="${foto}" alt="${titulo}">
            <span class="font-bold">${titulo}</span>
            <span class="font-bold">${eslogan}</span>
            <p>${descripcion}</p>
        </article></a>`;
    return card;
}


function crearCards(arrayPreexistente){
    // for (let i = 0; i < arrayPreexistente.length; i++) {
    //     nuevoArray[i] = estructuraCard(arrayPreexistente[i].image, arrayPreexistente[i].title, arrayPreexistente[i].tagline, arrayPreexistente[i].overview)
    // }
    let nuevoArray = ""
    arrayPreexistente.forEach(pelicula =>{
        nuevoArray += estructuraCard(pelicula.original_language, pelicula.release_date, pelicula.runtime, pelicula.status, pelicula.image, pelicula.title, pelicula.tagline, pelicula.overview, pelicula.vote_average, pelicula.budget, pelicula.revenue, pelicula.genres)
    })
    return contenedor.innerHTML = nuevoArray
}

crearCards(movies)

// Creando inputs de filtro de peliculas:

let elementoSelect = document.getElementById("seleccionGeneros")

function armandoListaGeneros(array){
    let listaGeneros = []
    let generosSinRepetir = []
    array.forEach( pelicula => {
        listaGeneros.push((pelicula.genres))
    })
    generosSinRepetir = Array.from(new Set(listaGeneros.flat()))
    return generosSinRepetir
}

function estructuraOption(){
    let elementoOption = '<option class="font-bold" value="all">All movies</option>'
    armandoListaGeneros(movies).forEach(genero =>{
        elementoOption += `<option class="font-bold" value="${genero}">${genero}</option>`
    })

    return elementoSelect.innerHTML = elementoOption
}
estructuraOption()

// Filtros por genero seleccionado y luego por entrada de nombre:

elementoSelect.addEventListener("input", (event) =>{
    let eventValue = event.target.value
    let generosSeleccionados = filtrarGeneros(eventValue, movies) 
    let peliculaSeleccionada = filtrarNombres(elementoInput.value, generosSeleccionados)
    crearCards(peliculaSeleccionada)
})

function filtrarGeneros(value, arrayPeliculas){
    let peliculasSeleccionadas = []
    arrayPeliculas.forEach(pelicula =>{
        if(pelicula.genres.includes(value)){
            peliculasSeleccionadas.push(pelicula)
        }else if(value == "all"){
            peliculasSeleccionadas.push(pelicula)
        }
    })
    return peliculasSeleccionadas
}

// Filros por entrada de nombre y luego por genero seleccionado:
let elementoInput = document.getElementById("nombrePelicula")

elementoInput.addEventListener("input", (event) => {
    let entradaTexto = event.target.value
    let peliculaSeleccionada = filtrarNombres(entradaTexto, movies)
    let generosSeleccionados = filtrarGeneros(elementoSelect.value, peliculaSeleccionada)
    crearCards(generosSeleccionados)
})

function filtrarNombres(value, arrayPeliculas){
    let peliculasSeleccionadas = []
    arrayPeliculas.forEach(pelicula =>{
        if(pelicula.title.toLowerCase().includes(value)){
            peliculasSeleccionadas.push(pelicula)
        }
    })
    return peliculasSeleccionadas
}

