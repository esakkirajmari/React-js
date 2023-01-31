// import React from 'react';
// import ReactDOM from 'react-dom/client';
import React,{createElement} from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const head=createElement('hi',{},'React Js');



// const head =createElement("div",{className:"sample"},[
//   createElement("h1",{},"Esakki"),
//   createElement("h2",{},"raj"),
//   createElement("h3",{},"Esakkiraj")
// ]);

const name="react";
 
const arr=["hi","hello","welcome"]
const head=(
  <div className='sample' style={{color:"blue"}}>
    <h1>Esakki</h1>
    <h2>raj</h2>
    <h3>Esakkiraj</h3>
    {name}
    {5+7}
    {false ? "true":"false"}
    {arr.map((val, index) => 
      <div key={index}>
        <p>{val}</p>
      </div>
    )}
    <button onClick={()=>console.log("click me")}>click</button>
  </div>
)
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  head
);

