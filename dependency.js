var request = require('request-promise');
var Table = require('cli-table');
var headers = {
    'User-Agent': 'PrarabdhJoshi'
};


var result =[];
var table = new Table({
    head: ['Name', 'StarGazers_Count']
  , colWidths: [50, 50]
});


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
  

//push data across all pages using promises

var data = function(username, order,page){
    return request({
    "method":"GET", 
    "uri": "https://api.github.com/users/"+username+"/repos?per_page=10&page="+page,
    "json": true,
    "headers": headers
  }).then(function(response) {
    //console.log(response.length);
    if(response.length>0){
        for(var i=0; i<response.length; i++){
            result.push({'Name':response[i].name,'stargazers_count':response[i].stargazers_count});
        }
        data(username,order, page+1);
    }
    else{
        if(order==='dsc')
            result.sort(rev_compare);
        else
            result.sort(compare);
         for(var j=0; j<result.length; j++){
            //sort the result
            table.push([result[j].Name,result[j].stargazers_count]);
            
         }
        console.log(table.toString());
    }
        
  });
}
module.exports=data;
