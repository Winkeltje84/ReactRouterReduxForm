import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'

class PostIndex extends Component {
  

  render() {
    return(
      <div>PostIndex</div>
    )
  }
}

export default connect(null, { fetchPosts })(PostIndex)
