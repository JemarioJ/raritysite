import '../styles/globals.css'
import React, { useState } from "react";
import ReactDOM from 'react-dom/client';




function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps} />
}


const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};


export default MyApp;
