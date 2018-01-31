var request = require('request');

var headers = {
    'User-Agent': 'PrarabdhJoshi'
};

var options = {
    url: 'https://api.github.com/users/AutoCustoms/repos',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body).length);
    }
}

request(options, callback);
