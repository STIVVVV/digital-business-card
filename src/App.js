import React from "react";
import Introduction from "./components/Introduction";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App()
{
  return (
    <div className="Box">
        <Introduction/>
        <Main/>
        <Footer/>
    </div>
  )
}