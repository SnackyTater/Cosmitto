// onmessage = (message) => {
//     let sum = 0;
//     for(let i = 0; i < 10000000; i++){
//         if(i%1000000 == 0) postMessage(i)
//         sum+=i
//     }
//     postMessage(sum)
// };


// import {checkAuthorization} from '../src/utils/auth'
// const {checkAuthorization} = require('../src/utils/auth')

self.onmessage = function(message){
    
    let sum = 0;
    for(let i = 0; i < 10000000000; i++){
        
        if(i%1000000 == 0){
            console.log(i);
            postMessage(i)
        }
        sum+=i
    }
    postMessage(sum)
}