import React, { Component } from 'react'
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';

class PostShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        Show Posts here...
      </div>
    );
  };
}

export default connect(null, { fetchPost })(PostShow);
