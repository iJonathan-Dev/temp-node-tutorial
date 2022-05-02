const {readFileSync, writeFileSync} = require ('fs')  

const first = readFileSync('./content/1.txt','utf8')
const second = readFileSync('./content/2.txt','utf8')
console.log(first,second);
 
writeFileSync(
    './content/3.txt',`text of ${first}, ${second}`
) 

console.log(readFileSync('./content/3.txt','utf8'));