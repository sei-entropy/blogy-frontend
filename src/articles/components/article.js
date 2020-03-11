import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        {/* Title & Content & Author */}
        <h2>Title</h2>
        <sub>Author</sub>
        <p>
          Content
        </p>
      </div>
    );
  }
}

export default Article;