self.onmessage = (message) => {
    let sum = 0;
    for(let i = 0; i < 100000000000; i++){
      if(i%100000 === 0) postMessage(i);
      sum+=i;
    }
    postMessage(sum)
};