const http = require('http');
const server = http.createServer(function(req, res){
 
    res.write(fac(3).toString());
    res.end()
})
server.listen(3000);


/*function randomTiv(min,max,){
   
    return  Math.floor(Math.random() * (max - min + 1) + min)

}*/
 function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
