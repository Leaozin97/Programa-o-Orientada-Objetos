const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Qual teu nome?", (v1) => {
    console.log(`Oi, ${v1}`);
    rl.question("Quantos anos você tem?", (v2) =>{
        console.log(`Em 5 anos. você terá ${parseInt(v2) +5} anos.`)
        rl.close();
    })
})
    
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
})