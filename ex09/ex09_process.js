process.stdout.write('Consegue responder? \n')
process.stdin.on('data',function(data){
    process.stdout.write(`Sua resposta foi: ${data.toString()}\n`)
    process.exit()
}); 