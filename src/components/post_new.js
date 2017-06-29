import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class PostNew extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back to Index
          </Link>
        <form>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="title of post"
          />
        </form>

        </div>
      </div>
    )
  }
}

export default reduxForm({ form: 'PostNewForm' })(PostNew)
