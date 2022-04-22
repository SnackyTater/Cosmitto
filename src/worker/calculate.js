self.onmessage = (message) => {
    // console.log('message', message.data)
    let sum = 0;
    for(let i = 0; i < 100000000; i++){
      if(i%100000 === 0) postMessage(i);
      sum+=i;
    }
    postMessage(sum)
};

// self.onmessage = function(message){
    
//   let sum = 0;
//   for(let i = 0; i < 1000000000; i++){
      
//       if(i%1000000 == 0){
//           // console.log(i);
//           postMessage(i)
//       }
//       sum+=i
//   }
//   postMessage(sum)
// }