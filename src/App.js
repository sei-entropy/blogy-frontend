import React from 'react';
import './App.css';
import Articles from './articles/components/articales'
import apiURL from './apiConfig';

export default class App extends React.Component{
 constructor(props){
  super(props);
  this.state = {
     articles : [ 
       
    ],

  }
  console.log(' MY API URL ', apiURL)
 }


 setArticles = (articles) => {
   this.setState({
    articles : articles
   })
 }


 

  render(){

  return(
<div className="App">
  <header className="App-header">
  <p> 
    welcome to Blogy ! 
  </p>

  </header>

  <Articles  articles={this.state.articles} 
  setArticles={this.setArticles}/>
</div>
  )
}


}




