import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Header from "../components/Header"
import logo from '../logo.svg';
import '../App.css';


function getDetail(setDetail, setLoading){
    axios({
      method: "GET",
      url: "https://raw.githubusercontent.com/ibnux/data-indonesia/master/propinsi.json"
    }).then(function(res){
      //Success
      setDetail(res.data)
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

export default function BlogDetail(){
    const params = useParams();

    const [detail, setDetail] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
 
    React.useEffect(function(){
        getDetail(setDetail,setLoading);
    },[]);

    return (
        <div className="wrapper"> 
        <img src={logo} className="App-logo" alt="logo" />
            <Header/>
            <p>Id : {params.id}</p>
            <p>Details : {JSON.stringify(detail)}</p>
        </div>
    )
}