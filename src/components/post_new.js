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
          placeholder={field.placeholder}
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
            placeholder="Title"

          />
          <Field
            name="categories"
            label="Categories"
            component={this.renderField}
            placeholder="Categories"
          />
          <Field
            name="content"
            label="Post content"
            component={this.renderField}
            placeholder="Content"
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'PostNewForm' })(PostNew)
