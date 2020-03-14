import React from 'react';
import UpdateArtical from './updateArtical';

export default class Artical extends React.Component{
  
 constructor(props){
   super(props)
   this.state ={
     checkUpdate : false ,
     tital : this.props.tital,
     author : this.props.author,
     content : this.props.content
   }
 }

  deleteArticle = (event) => {
    event.preventDefault();
    this.props.deleteArticle(this.props.id)
  }


  clickUpdateArticle = (event) => {
    event.preventDefault();
    
    this.setState({
      checkUpdate : true 
    })
    
  }




  updateThisArtical = ( newTital , newAuthor , newContent ) => {
    this.props.updateArticle(this.props.id , newTital , newAuthor , newContent)
    console.log(" inside artical in clickUpdateArticle", newTital)
    this.setState({
      tital : newTital,
      author : newAuthor,
      content :  newContent
    })

  }


  render(){

    let stateUpdate = "";
    if(this.state.checkUpdate === true){
      stateUpdate = <UpdateArtical tital={this.state.tital} 
      author={this.state.author}
      content={this.state.content}
      clickUpdateArticle={this.clickUpdateArticle}
      updateThisArtical={this.updateThisArtical}/>
    }
  return(
<div className="article">
     <h2> {this.state.tital}</h2>
     <sub> {this.state.author} </sub>
<p> {this.state.content} </p>
<a href="#" onClick={this.deleteArticle} > Delete </a>
<br></br>
<a href="#" onClick={this.clickUpdateArticle} > Update </a>
{stateUpdate}
</div>
  )
}


}




