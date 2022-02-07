import React, { useState } from "react";
import "./enableMode.css";
import Image1 from "./assets/image1.PNG";


const EnableMode = () => {
        const [enableMode , setEnableMode] = useState({
         color : 'black',
         backgroundColor : 'white'
      })
      const  [btnContent , setBtnContent] = useState('Dark Mode')
      const setModee = () => {
          if(enableMode.color == 'black'){
            setEnableMode({
               color : 'white',
               backgroundColor : 'black'
            })
            setBtnContent("Light Mode")
         }
         else{
            setEnableMode({
            color : 'black',
            backgroundColor : 'white'
         })
         setBtnContent("Dark Mode")
      }
      }
        
    return(
        <>
           
          <div className="navLinksbar" style={enableMode}>
             <h1 className="navLinkshead"><span className="navLinksheadF">F</span>rource</h1>
             <ul className="navLinks">
                <li className="home">HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>REVIEW</li>
             </ul>
             <button onClick={setModee} className="navLinksbtn" style={enableMode}>{btnContent}</button>
          </div>

          
          <div>
             <img src={Image1} width="100%" height="400px" />
          </div>

          <div className="container" style={enableMode}>
                <div className="mainContent" style={enableMode}>
                     <h1 className="myhead">What Is React?</h1>

                           <p className="myPara">React is a declarative, efficient, and flexible 
                           JavaScript library for building user interfaces. 
                           It lets you compose complex UIs from small and isolated 
                           pieces of code called “components”.React has a few different
                           kinds of components, but we’ll start with React.Component 
                           subclasses.We’ll get to the funny XML-like tags soon. 
                           We use components to tell React what we want to see on 
                           the screen. When our data changes, React will efficiently 
                           update and re-render our components.Here, Shopping. List is a 
                           React component class. 
                           </p>
                           <br/>

                           <h2 className="myhead">Why is this useful?</h2>
                           <p className="myPara">There's a lot of content that explains how to build fast and 
                           reliable applications, but not many that show how to build fast 
                           and reliable React applications. These guides cover all this from 
                           the perspective of a React app where only libraries, APIs, and features 
                           specific to the React ecosystem are mentioned.There's a lot of content that explains how to build fast and 
                           reliable applications, but not many that show how to build fast 
                           and reliable React applications. These guides cover all this from 
                           the perspective. </p>
                              <br/>

                           <h2 className="myhead">Prerequisites</h2>
                           <p className="myPara">We’ll assume that you have some familiarity with HTML 
                           and JavaScript, but you should be able to follow along even 
                           if you’re coming from a different programming language. 
                           We’ll also assume that you’re familiar with programming 
                           concepts like functions, objects, arrays, and to a lesser extent, 
                           classes. If you need to review JavaScript, we recommend 
                           reading this guide. Note that we’re also using some features 
                           from ES6 — a recent version of JavaScript. In this tutorial, 
                           we’re using arrow functions, classes, let, and const statements.  
                           </p>
                              <br/>

                      </div>
                 </div>
               
               </>
    )
};



export default EnableMode;