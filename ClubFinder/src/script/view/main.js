// const main = function () {
//     const searchElement = document.querySelector("#searchElement");
//     const buttonSearchElement = document.querySelector("#searchButtonElement");
//     const clubListElement = document.querySelector("#clubList");

//     const onButtonSearchClicked = function () {
//         const dataSource = new DataSource(renderResult, fallbackResult);
//         dataSource.searchClub(searchElement.value);
//     };


import '../Custom Component/ClubList.js';
import '../Custom Component/SearchBar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    // const onButtonSearchClicked = () => {
    //     const dataSource = new DataSource(renderResult, fallbackResult);
    //     dataSource.searchClub(searchElement.value);
    // };

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    }

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    // const fallbackResult = function (message) {
    //     clubListElement.innerHTML = "";
    //     clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    // };


    const fallbackResult = message => {
        clubListElement.renderError(message);
    }



    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;