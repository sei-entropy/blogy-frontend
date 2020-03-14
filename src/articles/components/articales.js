import React from 'react';
import Artical from './artical';
import AddArticle from './addArtical';
import {getAllArticles,deleteArticleById,addArtical ,updateArticalById} from '../api'; 



export default class Articles extends React.Component{
   
    constructor(props){
        super(props)
    this.state = {
        clickadd : false
    }

    }
   
   
    componentDidMount(){
     
        getAllArticles() 
        .then ((response)=>{
            this.props.setArticles(response.data.articles)

        })
        .catch((error) =>{
            console.log('API error' , error)
        })


    }

     // make an APi call to delete an artical 
    deleteArticle = (id) => {
        console.log(" the Artical id to delete , ", id)
        deleteArticleById(id)
        .then((response) => {
           const newArticleLIst =  
           this.props.articles.filter((article) => {
                  return article._id !== id ;
             })
             this.props.setArticles(newArticleLIst)
            console.log(`the artical with id ${id} has been deleted `)
        })
        .catch((error) => {
            console.log(' API ERROR ',error)
        })
    }




    
    updateArticle = (id,tital ,author,content) => {
         console.log(" the Artical id to updated , ", id , tital ,author,content)
    
        updateArticalById(id , tital ,author ,content)
        .then((response) => {
            console.log("the response is ",response)
           const newArticleLIst = this.props.articles
           console.log(newArticleLIst)
             this.props.setArticles(newArticleLIst)
            
        })
        .catch((error) => {
            console.log(' API ERROR ',error)
        })
    }


    addArticle = () => {
         this.setState({
            clickadd : true 
         })
    }


    addArticalToDB = (tital , author , content ) => {
      console.log(" the tital is ",tital)
      console.log(" the author is ",author)
      console.log(" the content is ",content)
       let Article = {
        tital : tital ,
        author : author ,
        content : content
       }
       console.log(" the artical is ",Article)



      addArtical(Article)
  
      .then((response) => {
        console.log("before",this.props.articles)
        const  newArticleLIst = this.props.articles ;
        newArticleLIst.push(Article);
        console.log(newArticleLIst)
          this.props.setArticles(newArticleLIst)
     })
     .catch((error) => {
         console.log(' API ERROR ',error)
     })

    }

render(){
       
    let allArticles = <h4> No Articales</h4>

     if(this.props.articles.length > 0){
    allArticles = this.props.articles.map((article , index ) => {
        return <Artical tital={article.tital} 
        author={article.author}
        content={article.content}
        key={index}
        id={article._id} 
        deleteArticle={this.deleteArticle}
        updateArticle= {this.updateArticle}/>
    })

     }

     let stateADD = "" ;
     if(this.state.clickadd === true ){
         stateADD = <AddArticle addArticalToDB={this.addArticalToDB} />
     }
     
    
  return( <div>
      <button type="button" onClick={this.addArticle} > Add artical </button>
<h3> All Articles </h3>
{allArticles}
{stateADD}
</div>
  )
}


}




