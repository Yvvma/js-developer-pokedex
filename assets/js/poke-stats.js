const detail = document.getElementById('PokeDetail');
const limit = 1;
let offset = 0;

function convertPokeContent(pokemon){
    return `
    <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    <div class="detail-container">
        <img src="${pokemon.photo}"
        alt="${pokemon.name}">
        <ol class="stats">
            ${pokemon.pokeStats.map((pokeStats) =>{
            const bgColor = pokeStats.statsValue > 50 ? 'green' : 'red';
            return  `<li>
            <h4 class="type-stat">${pokeStats.statsName}</h4> 
            <h4 class="stat-value">${pokeStats.statsValue}</h4> 
            <div id="stat-bar" style=" width: ${pokeStats.statsValue}%; height: 0.5rem; background-color: ${bgColor}; "></div>
            </li>`}).join('')}  
        </ol>
    </div>
    </li>
    `
}

pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokeContent).join('')
    detail.innerHTML += newHtml;
})