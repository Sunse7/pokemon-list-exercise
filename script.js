const pokemons = [{
    id: 1,
    name: 'Bulbasaur',
    cp: 439,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
},
{
    id: 37,
    name: 'Vulpix',
    cp: 194,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png'
},
{
    id: 134,
    name: 'Vaporeon',
    cp: 2469,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png'
},
{
    id: 130,
    name: 'Gyarados',
    cp: 2406,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png'
},
{
    id: 25,
    name: 'Pikachu',
    cp: 455,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
},
{
    id: 27,
    name: 'Sandshrew',
    cp: 710,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png'
},
{
    id: 52,
    name: 'Meowth',
    cp: 121,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
},
]

let chosenPokemons = [];

let el = document.createElement('section');
let availablePokemons = document.querySelector('#available-pokemons');
let i;
for (i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i].name, pokemons[i].cp);
    
    availablePokemons.insertAdjacentHTML('afterend', 
    `<a id="${pokemons[i].id}">
        <article>
            <img src="${pokemons[i].src}" alt="${pokemons[i].name}">
            <section>
                <h2>${pokemons[i].name}</h2>
                <p>${pokemons[i].cp} CP</p>
            </section>
        </article>
    </a>`);
    document.querySelectorAll('article').forEach(e => {
        e.addEventListener('click', () => {
            chosenPokemons.push(pokemons[i].name);
            console.log(chosenPokemons, 'chosen');
        })
        // pokemon = chosenPokemons;
        // // chosenPokemons.push(pokemons[i]);
    });
}


// document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', addPokemon);
// });

// function addPokemon(hej) {
    
//     chosenPokemons.push(hej);

//     console.log(chosenPokemons, 'new poke');
// }
