const { readFileSync, writeFileSync } = require( 'fs' );

const first = readFileSync( './content/first.txt', 'utf8' );
const second = readFileSync( './content/second.txt', 'utf8' );

console.log( `First: ${ first }` );
console.log( `Second: ${ second }` );

writeFileSync( 
    './content/result-sync.txt', 
    `Combined text: ${ first }; ${ second }`
);
