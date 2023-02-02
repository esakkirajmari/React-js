// import React from 'react';
// import ReactDOM from 'react-dom/client';
import React,{Component, createElement,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header Class/Header';
// import Header from './Header/Header';
// import Banner from './Banner/Banner';
// import Content from './Content/Content';
// import Footer from './Footer/Footer';
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

// const name="react";
 
// const arr=["hi","hello","welcome"]
// const head=(
//   <div className='sample' style={{color:"blue"}}>
//     <h1>Esakki</h1>
//     <h2>raj</h2>
//     <h3>Esakkiraj</h3>
//     {name}
//     {5+7}
//     {false ? "true":"false"}
//     {arr.map((val, index) => 
//       <div key={index}>
//         <p>{val}</p>
//       </div>
//     )}
//     <button onClick={()=>console.log("click me")}>click</button>
//   </div>
// )

// function Main(){
//   const [feature,setFeature]= useState("Hooks");
//   const data={
//     name:"React"
//   };
//   const getData=(param) => {
//     console.log("call",param);
//   };
//   return(
//   <div>
//     {feature}
//     <button onClick={()=>setFeature("update hooks")}>update feature</button>
//     <Header name={data.name}feature={"props"} get={getData} />
//     <Banner/>
//     <Content/>
//     <Footer/>
//     Function
//     </div>
//   );
// }
class Third extends Component {
  render () {
    return <div> third Class Component</div>
  }
}

class Secound extends Component {
  render () {
    return <div>Secound Class Component</div>
  }
}


class Frist extends Component {
  render () {
    console.log("this",this); 
    return(
     <div>
      {" "}
      First Class Component {this. props.data } {""}
      <button onClick={()=> this.props.get ("Data")}>Click</button>
      </div>
    )
  }
}

class Main extends Component {
  constructor() {
    super();
    this.state= {
      name:"esakkiraj",
      age:23,
      feature:"state"
    };
    console.log(this);
  }
  getData() {
    console.log("data");
  }
  updateName() {
    this.setState({name:"React State"});
  }
  render () {
    return (
      <div>
        {this.state.name}
        {this.state.age}
        <button onClick={() => this.updateName()}>Update Name</button>
        <button onClick={this.updateName.bind(this)}>Update Name</button>
        Class Component
        <Frist data="React Class"  get={this.getData}/>
        <Secound />
        <Third />
        <Header />
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
