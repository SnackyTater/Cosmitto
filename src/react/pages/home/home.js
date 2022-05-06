import React, { useState, useEffect } from 'react'
// import axios from '../../../api/axios'

export const HomePage = () => {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [fromServer, setFromServer] = useState(null);

  useEffect(() => {
    console.log('image: ', image)
    console.log('preview: ', preview)
    console.log('from server: ', fromServer)
  }, [image, preview, fromServer])

  const uploadHandler = (e) => {
    const image = e.target.files[0];
    console.log(image)
    setImage(image);
    setPreview(URL.createObjectURL(image));
  }

  const handleUpload = (e) => {
    e.preventDefault;
    const fd = new FormData();
    fd.append('image', image);

    // axios.post('/image', fd).then((res) => {
    //   console.log(res)
    // }).catch((err) => {
    //   console.error(err);
    // })
  }

  const handleGet = () => {
    // axios.get('/image', {responseType: 'blob'}).then((res) => {
    //   setFromServer(URL.createObjectURL(res.data));
    // }).catch((err) => {
    //   console.error(err);
    // })
  }

  return (
    <React.Fragment>
      <input 
        onChange={uploadHandler}
        type="file"
      />
      <button
        onClick={handleUpload}
      >click to upload</button>
      <div>
        {(!preview) ? <div>no image, yet</div> : <img src={preview} alt=''/>}
      </div>
      <div>
        <h1>from server</h1>
        <button onClick={handleGet}>get image</button>
        <img src={fromServer}/>
      </div>
    </React.Fragment>
  )
}
