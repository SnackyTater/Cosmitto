import React, { useState, useEffect, Fragment } from 'react'
// const worker = new Worker(new URL('./deep-thought.js', import.meta.url));
// const worker = new Worker('test.worker.js');
const worker = new Worker(new URL('../../../worker/calculate.js', import.meta.url));

//worker

export const LoginPage = () => {
  // const [data, setData] = useState(null);
  const color = ['red', 'blue', 'green', 'yellow'];
  const [state, setState] = React.useState(null);
  const [colour, setColor] = React.useState('red');

  React.useEffect(() => {
    worker.onmessage = (message) => {
      setState(message.data);
    }

    return () => worker.terminate();
  }, [])

  useEffect(() => {
    setInterval(() => {
      const index = Math.floor(Math.random() * 4);
      setColor(color[index])
    }, 500)
  }, [])

  const clickHandler = (e) => {
    e.preventDefault();
    worker.postMessage('do it');
  }
  
  const killWorker = (e) => worker.terminate();

  return (
    <Fragment>
      <button onClick={clickHandler}>click to start</button>
      <button onClick={killWorker}>click to terminate</button>
      <div>data is {state}</div>
      <div
        style={{
          width: 100,
          height: 100,
          color: colour
        }}
      >
        <h1>this is a very long text</h1>
      </div>
    </Fragment>
  )
}
