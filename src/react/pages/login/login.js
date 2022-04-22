import React, { useState, useEffect, Fragment } from 'react'
// const worker = new Worker(new URL('./deep-thought.js', import.meta.url));
// const worker = new Worker('test.worker.js');
const worker = new Worker(new URL('../../../worker/calculate.js', import.meta.url));

//worker

export const LoginPage = () => {
  // const [data, setData] = useState(null);
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    worker.onmessage = (message) => {
      setState(message.data);
    }

    return () => worker.terminate();
  }, [])

  // useEffect(() => {
  //   let sum = 1
  //   setInterval(() => {
  //     console.log(sum++);
  //   }, 500)
  // }, [])

  const clickHandler = (e) => {
    e.preventDefault();
    worker.postMessage('do it');
  }

  // const handleTest = () => {
  //   setTimeout(() => {
  //     count++;
  //     console.log(count);
  //   }, 100)
  // }

  return (
    <Fragment>
      <button onClick={clickHandler}>click to start</button>
      <div>data is {state}</div>
      {/* <button onClick={handleTest}>test</button> */}
    </Fragment>
  )
}
