const os = require( 'os' );

// info about current user
const user = os.userInfo();
console.log( user );

// returns system uptime in seconds
console.log( 'system uptime is', os.uptime(), 'seconds' );

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMempry: os.totalmem(),
    freeMemory: os.freemem()
}

console.log( `Current OS info: ${currentOs}` );
