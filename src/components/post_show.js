import React, { Component } from 'react'
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

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

    return (
      <div>
        <div>
          <Link className="btn btn-primary" to="/">Back To Index</Link>
        </div>
        <div>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id]}
}
// the second argument of mapStateToProps = ownProps  (naming by convention)
// ownProps will be the props passed into PostShow, besides the original state

export default connect(mapStateToProps, { fetchPost })(PostShow);
