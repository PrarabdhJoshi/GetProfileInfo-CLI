var request = require('request');

var headers = {
    'User-Agent': 'PrarabdhJoshi'
};




var data = function get_data(username){
    request({
        url: 'https://api.github.com/users/'+username+'/repos',
        headers: headers
        }, (error, response, body)=>{
        if (!error && response.statusCode == 200) {
            console.log(JSON.parse(body).length);
    
        }
    });
    
}

module.exports=data;
