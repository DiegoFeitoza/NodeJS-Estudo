const http = require('http')
const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"})
    res.end('<h1>Rodou HTTP pelo node!</h1>')
})

const porta = 3251
server.listen(porta, function(){
    console.log(`Rodando servidor na porta ${porta}`)
})