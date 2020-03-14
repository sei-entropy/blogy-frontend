import React from 'react';



export default class addArtical extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tital : "" ,
      author : "",
      content : ""
    }


  }
  
  addtoDB = (event) => {
    event.preventDefault();
    this.props.addArticalToDB(this.state.tital , this.state.author ,this.state.content)
    
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


  
  
  render(){

  return(
<div className="addArticle">

<label for="fname"> tital :</label>
<input type="text" onChange={this.handelSearchChangeTital}/>
<label for="fname">author:</label>
<input type="text"  onChange={this.handelSearchChangeAuthor}/>
<label for="fname">content:</label>
<input type="text" onChange={this.handelSearchChangeContent}/>
<button type="button" onClick={this.addtoDB} > Add  </button>

</div>
  )
}


}




