import React, { Component } from 'react'
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props
    if (!post) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div>
          <h3>Title: {post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>Content: {post.content}</p>
        </div>
      );
    }
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id]}
}
// the second argument of mapStateToProps = ownProps  (naming by convention)
// ownProps will be the props passed into PostShow, besides the original state

export default connect(mapStateToProps, { fetchPost })(PostShow);
