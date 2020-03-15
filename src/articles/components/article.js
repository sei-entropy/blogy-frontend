import React from "react";

export default class Article extends React.Component {
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
  Changehandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { title, author, content } = this.state;
    return (
      <div className="article">
        {/* Title & Content & Author */}
        title:{" "}
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.Changehandler}
        />
        <br />
        author:{" "}
        <input
          type="text"
          name="author"
          value={author}
          onChange={this.Changehandler}
        />
        <br />
        content:{" "}
        <input
          type="text"
          name="content"
          value={content}
          onChange={this.Changehandler}
        />
        <br />
        <button onClick={this.deleteArticle}>Delete</button>
        <br />
        <button onClick={this.UpdateArticle}>Update</button>
      </div>
    );
  }
}
