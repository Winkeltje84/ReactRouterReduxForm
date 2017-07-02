import React, { Component } from 'react'
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div>
          <h3>Title: {this.props.post.title}</h3>
          <h6>Categories: {this.props.post.categories}</h6>
          <p>Content: {this.props.post.content}</p>
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
