import React from "react";
import Article from "./article";
import { getAllArticles, deleteArticleById, UpdateArticleById } from "../api";
export default class Articles extends React.Component {
  componentDidMount() {
    // Make API Call
    getAllArticles()
      .then(response => {
        this.props.setArticles(response.data.articles);
      })
      .catch(error => {
        console.log("API error", error);
      });
  }
  //Make an API call to Delete an Article
  deleteArticle = id => {
    console.log("The Article ID to Delete", id);
    deleteArticleById(id)
      .then(response => {
        console.log(`The Article with the ID ${id} has been deleted.`);
        const newArticleList = this.props.articles.filter(article => {
          return article._id !== id;
        });
        this.props.setArticles(newArticleList);
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  };
  UpdateArticle = (id, stat) => {
    console.log("The Article ID to Update -----", id, stat);
    const newart = {
      article: {
        title: stat.title,
        content: stat.content,
        author: stat.author
      }
    };
    UpdateArticleById(id, newart)
      .then(response => {
        console.log(`The Article with the ID ${id} has been updated.`);
        console.log("article  has been updated", response.data);
        // const updatedarticle = this.props.articles;
        // updatedarticle.map(article => {
        //   if (article._id === id) {
        //     article = newart;
        //   }
        // });
        // this.setState({
        //   articles: updatedarticle
        // });
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  };

  render() {
    let allArticles = <h4>No Articles!</h4>;

    if (this.props.articles.length > 0) {
      allArticles = this.props.articles.map((article, index) => {
        return (
          <Article
            title={article.title}
            author={article.author}
            content={article.content}
            id={article._id}
            deleteArticle={this.deleteArticle}
            UpdateArticle={this.UpdateArticle}
            key={index}
          />
        );
      });
    }

    return (
      <>
        <h3>All Articles</h3>
        {allArticles}
      </>
    );
  }
}
