var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://api.themoviedb.org/3/movie/550?api_key=81e2bb88afb9e6ce76ecaaf5113f3004',
    headers: {}
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
