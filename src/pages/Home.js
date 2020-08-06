import React from 'react';
import Card from "../components/Card"
import Header from "../components/Header"
import logo from '../logo.svg';
import axios from 'axios';
import '../App.css';

//komponen yang ada dibrowser ada disini

function getProvince(setList, setLoading){
  axios({
    method: "GET",
    url: "https://raw.githubusercontent.com/ibnux/data-indonesia/master/propinsi.json"
  }).then(function(res){
    //Success
    setList(res.data)
    console.log(res.data,'success');
  })
  .catch(function(err){
    //Error
    console.log(err,'error');
  })
  .finally(function(){
    setLoading(false);
  });
}
//class direacet className
function Home() {
  // deklarasi variable
  const [list, setList] = React.useState(
    JSON.parse(window.localStorage.getItem("PROVINCE")) || [] //if true and Authorization
  );

  // const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [keyword, setKeyword] = React.useState("");


  React.useEffect(function(){
    getProvince(setList, setLoading);
  },[]); // di panggil sekali

  React.useEffect(function() {
    window.localStorage.setItem(
      "PROVINCE",
      JSON.stringify(list)
    );
  },[list]);

  if(loading){
    return (
    <div className="App"> 
        <div className="wrapper">Loading .. </div>
    </div>
    );
  }
  
  // console.log(inputState)
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="wrapper">  
      <Header />
            <h1>Form</h1>
            <div>
                <div className="form-input">
                    {/* <input 
                    type="text" 
                    id="input"
                    value={inputState.nama}
                    onChange={(event) => setInputState(event.target.value)}  placeholder="Please Insert Text" />
                    
                    <button type="button" id="button" 
                    onClick={function(){
                      //nambah array dari array yang udah ada
                      setList([...list, {id: new Date(), nama:inputState}])
                    }}
                     className="button-class">Submit</button>
                    <br/>
                    <br/> */}

                    <input 
                    type="text" 
                    id="input"
                    onChange={(event) => {
                      setKeyword(event.target.value)
                    }}  
                    placeholder="Search" />
                </div>
            </div>
            <center>
            <div id="result">
              <div>Results: </div>
              
              {list.filter((item) =>
               item.nama.toLowerCase().includes(keyword.toLowerCase())
              )
              .map((value, index) =>{
                return <Card 
                id={index}
                nama={value.nama}
                onRemove={function(){
                  setList([...list.filter((d, i) => d.id !== value.id)])
                }}
                />;
              })}
            </div>
            {/* <h1> Profile </h1>
            <Card nama="test" onRemove={function(){}} /> */}
            </center>
        </div>
    </div>
  );
}

export default Home;