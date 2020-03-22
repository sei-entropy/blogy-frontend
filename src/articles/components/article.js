import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: ""
    };
  }
  componentWillMount = () => {
    this.setState({
      title: this.props.title,
      content: this.props.content,
      author: this.props.author
    });
  };
  deleteArticle = event => {
    event.preventDefault();
    this.props.deleteArticle(this.props.id);
  };

  UpdateArticle = event => {
    event.preventDefault();
    console.log("update", this.state);
    this.props.UpdateArticle(this.props.id, this.state);
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
