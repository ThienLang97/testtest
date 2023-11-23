import React, { useState } from 'react'
import {storage} from './config/firebase.js';
import { uploadBytes, getDownloadURL, ref  } from 'firebase/storage';
export default function App() {
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
      });
    })
  }
  // Tạo storage lưu trữ từ dịch vụ của firebase
  // const imagesListRef = ref(storage, "images/");
  return (
    <div>
      <h1>fire base</h1>
      <input onChange={changeImage} type="file" />
      <button onClick={handleAdd}>Lưu ảnh</button>
    </div>
  )
}
