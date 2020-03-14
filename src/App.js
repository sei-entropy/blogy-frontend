import React from "react";
import "./App.css";
import Articles from "./articles/components/articles";
import AddArticles from "./articles/components/AddArticles";
import { createArticle } from "./articles/api";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      title: "",
      content: "",
      author: ""
    };
  }

  setArticles = articles => {
    this.setState({ articles: articles });
  };
  handleAddTitle = e => {
    this.setState({ title: e.target.value });
    console.log(this.state.title);
  };
  handleAddAuthor = e => {
    this.setState({ author: e.target.value });
    console.log(this.state.author);
  };
  handleAddContent = e => {
    this.setState({ content: e.target.value });
    console.log(this.state.content);
  };
  createnewArticle = e => {
    this.setState({
      articles: [
        {
          title: this.state.title,
          author: this.state.author,
          content: this.state.content
        }
      ],
      title: "",
      author: "",
      content: ""
    });
    console.log("Add ");

    createArticle()
      .then(response => {
        console.log(`The Article with the ${e} is deleted`);
      })
      .catch(error => {
        console.log("API Error:", Error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to Blogy!</p>
        </header>
        <Articles
          articles={this.state.articles}
          setArticles={this.setArticles}
        />
        <AddArticles
          articles={this.state.articles}
          createnewArticle={this.createnewArticle}
          title={this.state.title}
          author={this.state.author}
          content={this.state.content}
          handleAddTitle={this.handleAddTitle}
          handleAddAuthor={this.handleAddAuthor}
          handleAddContent={this.handleAddContent}
        />
      </div>
    );
  }
}

export default App;
