
import React, { Component } from 'react'
import axios from 'axios';
import { App } from './App.js'
export class MainApp extends Component{

    constructor(props){
        super(props)
       this.state={
           items:[]
       } 
    }
    componentWillMount(){
        let that=this;
        axios.get(`http://localhost:3030/my-service`)
        .then(res => {
        that.setState({
            items:res
        })  
        console.log("items",that.state.items);
    
        })
    }


    render(){

        return <App items = {this.state.items}/>
    }
}