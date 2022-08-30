import Head from 'next/head'
import Image from 'next/image'
import { isPropertySignature } from 'typescript'
import styles from '../styles/Home.module.css'
import React, { useState }  from "react";
import axios from 'axios';
//import fetch from 'fetch;






export default function Home() {
  

  const [tokenId, setTokenId] = useState("");
  const [data, setData] = useState();
 
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {

      tokenId,
    }


    fetch("/api/rarityOutput",
    {
    method: "POST",
    body: JSON.stringify({ tokenId:tokenId })
    })
    .then(response => response.json())
    .then(function(response){

      setData(response[0].rank);


    });
    
   

  }

  return (
    <div className ="row">
    <div className="col md 4">
    <label htmlFor="fullname">tokenId </label>
       <input placeholder="tokenId" value={tokenId} onChange={({target}) => setTokenId(target?.value)}/>
       <button
              onClick={handleSubmit}
              type="submit"
        >
              Submit
       </button>
      

    </div>

    <div>{JSON.stringify(data, null, 2)} : test</div>
   </div>

    

    
  ) 
}
