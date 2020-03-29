// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }

// DataSource.prototype.searchClub = function (keyword) {
//     const filteredClubs = clubs.filter(function (club) {
//         return club.name.toUpperCase().includes(keyword.toUpperCase());
//     });

//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         // this.onFailed(keyword + " is not found");
//         this.onFailed(`${keyword} is not found`);
//     }
// };

// arrow fuction
// DataSource.prototype.searchClub =  function(keyword){
//     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         // this.onFailed(keyword + " is not found");
//         this.onFailed(`${keyword} is not found`);
//     }
// }

//penggunaan module
import clubs from './clubs.js';

//penerapan class pada ecmascript6
class DataSource {

    static searchClub(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.teams) {
                    return Promise.resolve(responseJson.teams);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })

    }
}


export default DataSource;