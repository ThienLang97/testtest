import React, { useState } from 'react'
import {storage} from './config/firebase.js';
import { uploadBytes, getDownloadURL, ref  } from 'firebase/storage';
import axios from 'axios';
export default function App() {
  const [urlImage,setUrlImage] =useState(null)
  //
  const changeImage = (e)=>{
    let file = e.target.files
    console.log(file);
    setImageUpload(e.target.files[0])

  }
  const [imageUpload,setImageUpload] = useState(null)
  const handleAdd = ()=>{
    const imageListRef = ref(storage,"image/")
    if (imageUpload == null) return
    const imageRef = ref(storage,`images/${imageUpload.name}`)
    uploadBytes(imageRef,imageUpload).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("11111111", url);
        setUrlImage(url)
        let product = {
          name:productName,
          img:url
        }
        axios.post("http://localhost:8001/products", product)
      });
    })
  }
  // Tạo storage lưu trữ từ dịch vụ của firebase
  // const imagesListRef = ref(storage, "images/");
  //
  const [productName,setProductName] = useState("")
  //
  
  return (
    <div>
      <h1>fire base</h1>
      <label htmlFor="">Name</label>
      <input onChange={(e) => setProductName(e.target.value)} type="text" />

      <input onChange={changeImage} type="file" />
      <button onClick={handleAdd}>Lưu ảnh</button>
      <img src={urlImage} alt="" style={{width:"100px",height:"100px"}} />
      <p>{productName}</p>
      
    </div>
  )
}
