var axios = require('axios');
var qs = require('qs');
var data = '';
var config = {
    method: 'post',
    url: 'http://localhost:3030/ny-db/update?update=clear all',
    headers: {},
    data: data,
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
