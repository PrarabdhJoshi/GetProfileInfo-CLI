var request = require('request');

var headers = {
    'User-Agent': 'PrarabdhJoshi'
};


var result = [];


function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const stara = a.stargazers_count;
    const starb = b.stargazers_count;
  
    let comparison = 0;
    if (stara > starb) {
      comparison = 1;
    } else if (stara < starb) {
      comparison = -1;
    }
    return comparison;
  }

  function rev_compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const stara = a.stargazers_count;
    const starb = b.stargazers_count;
  
    let comparison = 0;
    if (stara < starb) {
      comparison = 1;
    } else if (stara > starb) {
      comparison = -1;
    }
    return comparison;
  }
  

var data = function get_data(username,order){
    request({
        url: 'https://api.github.com/users/'+username+'/repos',
        headers: headers
        }, (error, response, body)=>{
        if (!error && response.statusCode == 200) {
            console.log("Name \t Stargrazers Count");
            for(var i=0; i<JSON.parse(body).length; i++){
                // console.log(JSON.parse(body)[i].name+"\t"+JSON.parse(body)[i].stargazers_count);
                result.push({'Name':JSON.parse(body)[i].name,'stargazers_count':JSON.parse(body)[i].stargazers_count});
            }
            if(order==='dsc')
                result.sort(rev_compare);
            else
                result.sort(compare);
            for(var j=0; j<result.length; j++){
                //sort the result
                console.log(result[j].Name+"\t"+result[j].stargazers_count);
            }
    
        }
    });
    
}

module.exports=data;
