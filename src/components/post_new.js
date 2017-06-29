import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class PostNew extends Component {
  renderTitleField(field) {
    return (
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          {...field.input}
          type="text"
          placeholder="title of post"
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back to Index
          </Link>
        </div>
        <form>
          <Field
            name="title"
            component={this.renderTitleField}
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'PostNewForm' })(PostNew)
