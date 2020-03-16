import React from "react";

class Article extends React.Component {
  deleteArticle = event => {
    event.preventDefault();
    this.props.deleteArticle(this.props.id);
  };

  updateArticles = event => {
    event.preventDefault();
    console.log("update", this.state);
    this.props.updateArticle(this.props.id, {
      updatedart: {
        title: this.props.title,
        author: this.props.author,
        content: this.props.content
      }
    });
  };
  render() {
    return (
      <div className="article">
        {/* Title & Content & Author */}
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>{this.props.content}</p>
        <a href="#" onClick={this.deleteArticle}>
          Delete
        </a>
        <br></br>
        <br></br>
        <a href="#" onClick={this.updateArticles}>
          Update
        </a>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default Article;
