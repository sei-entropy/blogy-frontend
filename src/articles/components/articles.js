import React from "react";
import Article from "./article";
import { getAllArticles, deleteArticleByID, UpdateArticleById } from "../api";
import AddArticles from "./AddArticles";

class Articles extends React.Component {
  componentDidMount() {
    getAllArticles()
      .then(response => {
        this.props.setArticles(response.data.articles);
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  }
  // Make an API Call to Delete an Article
  deleteArticle = id => {
    console.log("The Article ID to Delete", id);
    const newArticlesList = this.props.articles.filter(article => {
      return article._id !== id;
    });
    this.props.setArticles(newArticlesList);
    deleteArticleByID(id)
      .then(response => {
        console.log(`The Article with the ${id} is deleted`);
      })
      .catch(error => {
        console.log("API Error:", Error);
      });
  };

  UpdateArticle = (id, stat) => {
    console.log("The Article ID to Update -----", id, stat);
    const newart = {
      article: {
        title: this.props.title,
        content: this.props.content,
        author: this.props.author
      }
    };
    UpdateArticleById(id, newart)
      .then(response => {
        console.log(`The Article with the ID ${id} has been updated.`);
        console.log("article  has been updated", response.data);
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
export default Articles;
