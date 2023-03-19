//We make a constant fetch that requires node-fetch
import fetch from 'node-fetch'

//Async makes the function always return a promise
//A Promise object represent the eventual completion or failure of 
//an asynchronous operation and its resulting value
export async function getChampions() {
    //we wait for fetch to get all the info from the json
    const response = await fetch('http://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/champion.json');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    //Convert into Javascript
    const data = await response.json();

    //Extracts the champion data from the "data" property of the response object.
    //Creates an array of champion objects
    const champions = Object.values(data.data);

    //Transform each into new object that includes id, name and image.
    return champions.map(champion => ({
        id: champion.id,
        name: champion.name,
        title: champion.title,
        imageUrl: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`,
        tags: champion.tags,
    }));
}