import React from 'react';



export default class updateArtical extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          tital : this.props.tital ,
          author : this.props.author,
          content : this.props.content
        }
    
    
      }

    handelSearchChangeTital = (e) =>{

        let titalValue = e.target.value;
        console.log(titalValue)
        this.setState({
    
          tital: titalValue
      
        })
      }
      
    
      handelSearchChangeAuthor = (e) =>{
    
        let authotValue = e.target.value;
        console.log(authotValue)
        this.setState({
    
          author: authotValue
      
        })
      }
    
    
    
      handelSearchChangeContent = (e) =>{
    
        let contentValue = e.target.value;
         console.log(contentValue)
        this.setState({
    
          content: contentValue
      
        })
      }

      updatetoDB = (event) => {
        event.preventDefault();
        console.log("inside update ",this.state.tital)
        this.props.updateThisArtical(this.state.tital , this.state.author , this.state.content)
        
      }
  
  
  render(){

  return(
<div className="addArticle">

<label for="fname"> tital :</label>
<input type="text" onChange={this.handelSearchChangeTital} placeholder={this.state.tital}/>
<label for="fname">author:</label>
<input type="text"  onChange={this.handelSearchChangeAuthor} placeholder={this.state.author}/>
<label for="fname">content:</label>
<input type="text" onChange={this.handelSearchChangeContent} placeholder={this.state.content}/>
<button type="button" onClick={this.updatetoDB} > update  </button>

</div>
  )
}


}




