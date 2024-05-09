import React,{useState} from "react";
import Layout from "../components/Layout/Layout";
import { gallaryData } from "../data/gallaryData";


function Gallary() {
  const [file, setFile] =useState('')
  return (
    <Layout>
      <div className="container">
        <h1>Gallary</h1>
        <div className="media-container">
          {
            gallaryData.map((file, index) => (
              <div className="media" key={index} onClick={()=>setFile(file)}>
                {
                 file.type==="image" ? <img src={file.url} alt=""/>: <video src={file.url} muted preload="metadata"/>
                }
              </div>
            ))
          }
        </div>
        <div className="popup-media" style={{display: file ? 'block':"none"}}>
          <span onClick={()=>setFile("")}>&times;</span>
          {
          file?.type==="video" ? <video src={file.url} alt="muted autoplay control"/>: <img src={file.url} alt=""/>
          }
          </div>
      </div>
    </Layout>
  );
}

export default Gallary;
