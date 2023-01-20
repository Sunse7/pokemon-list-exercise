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

let chosenPokemonsArr = [];

let availablePokemons = document.querySelector('#available-pokemons');
let chosenPokemons = document.querySelector('#chosen-pokemons');

showAvailablePokes();

onClick();

function showAvailablePokes() {

    availablePokemons.innerHTML = '';
    for (let i = 0; i < pokemons.length; i++) {    
        availablePokemons.insertAdjacentHTML('beforeend', 
        `
            <article id="${pokemons[i].id}">
                <img src="${pokemons[i].src}" alt="${pokemons[i].name}">
                <section>
                    <h2>${pokemons[i].name}</h2>
                    <p>${pokemons[i].cp} CP</p>
                </section>
            </article>
        `);
        onClick();
    }
}

function onClick() {
    document.querySelectorAll('article').forEach(e => {
        e.addEventListener('click', () => {    
            let pokemonId = parseInt(e.id);
    
            for (let i = 0; i < pokemons.length; i++) {
                
                if (pokemonId === pokemons[i].id && chosenPokemonsArr.id != pokemons[i].id) {
                    chosenPokemonsArr.unshift(pokemons[i]);
                    pokemons.splice(i, 1);
                    showAvailablePokes();
                    console.log(pokemons, 'gone');
                    chosenPokemons.insertAdjacentHTML('afterend', 
                    `
                    <article id="${chosenPokemonsArr[0].id}">
                        <img src="${chosenPokemonsArr[0].src}" alt="">
                        <section>
                            <h2>${chosenPokemonsArr[0].name}</h2>
                            <p>${chosenPokemonsArr[0].cp} CP</p>
                        </section>
                    </article> 
                    `)
                }
            }  
        });  
    });
}




