import React from "react";
import "./App.css";
import Articles from "./articles/components/articles";
import PostArticle from "./articles/components/postArticle";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  setArticles = articles => {
    this.setState({ articles: articles });
  };
  AddArticles = articles => {
    this.setState({
      articles: [...this.state.articles, articles]
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
        <PostArticle AddArticles={this.AddArticles} />
      </div>
    );
  }
}
