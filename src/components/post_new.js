import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class PostNew extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back to Index
          </Link>
        </div>
        PostNew!
      </div>
    )
  }
}

export default PostNew
