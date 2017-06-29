import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class PostNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
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
            label="Title"
            component={this.renderField}

          />
          <Field
            name="tags"
            label="Tags"
            component={this.renderField}

          />
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'PostNewForm' })(PostNew)
