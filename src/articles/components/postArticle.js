import React from "react";
import { PostArticles } from "../api";
export default class PostArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: ""
    };
  }
  Changehandler = e => {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  SubmitHandeler = e => {
    e.preventDefault();
    console.log("this is state", this.state);
    //PostArticles => from api.js (axios method)
    const newart = {
      article: {
        title: this.state.title,
        content: this.state.content,
        author: this.state.author
      }
    };
    console.log(newart);
    PostArticles(newart)
      .then(response => {
        console.log("article  has been added", response.data);
        this.props.AddArticles(response.data.article);
      })
      .catch(error => {
        console.log("API error", error);
      });
  };
  render() {
    const { title, author, content } = this.state;
    return (
      <>
        <form onSubmit={this.SubmitHandeler}>
          <div>
            title
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.Changehandler}
            />
            author
            <input
              type="text"
              name="author"
              value={author}
              onChange={this.Changehandler}
            />
            content
            <input
              type="text"
              name="content"
              value={content}
              onChange={this.Changehandler}
            />
          </div>
          <button type="submit"> submit</button>
        </form>
      </>
    );
  }
}
