import React from "react";

class AddArticles extends React.Component {
  render() {
    return (
      <div className="article">
        <input
          type="text"
          placeholder="Title"
          value={this.props.title}
          onChange={this.props.handleAddTitle}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Author"
          value={this.props.author}
          onChange={this.props.handleAddAuthor}
        />
        <br></br>
        <br></br>

        <input
          type="text"
          placeholder="Content"
          value={this.props.content}
          onChange={this.props.handleAddContent}
        />
        <br></br>
        <br></br>

        <input
          type="button"
          value="Post"
          onClick={this.props.createnewArticle}
        />
      </div>
    );
  }
}
export default AddArticles;
