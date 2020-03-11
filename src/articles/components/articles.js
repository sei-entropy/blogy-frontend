import React from 'react';
import Article from './article';

class Articles extends React.Component {
  render() {
    return(
      <>
        <h3>All Articles</h3>
        <Article />
      </>
    );
  }
}

export default Articles;