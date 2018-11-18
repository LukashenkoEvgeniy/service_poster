 const axios = require('axios');

module.exports = class http{

    static getNewFilm(){
        return axios.get('http://localhost:8080/document/not-posted')
            .then(response => response.data)
            .catch(function (error) {
                console.error(error)
            });
    }

};
