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
        <p style={{color:'red'}}>{field.meta.error}</p>
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

function validate(values) {
  // console.log(values) --> {title: "test", categories: "test categories", content: "test content"}
  const errors = {};

  if (!values.title) {
    errors.title = "Please enter a title";
  }
  else if (values.title.length < 5) {
    errors.title = "The title must be at least 5 characters long"
  }
  if (!values.categories) {
    errors.categories = "Please enter one or more categories";
  }
  if(!values.content) {
    errors.content = "Please enter some content";
  }

  return errors;
  // if errors is empty object, the form is fine to submit
  // if errors has *any* properties, redux form assumes form is invalid
}

export default reduxForm({
  validate, // same as validate: validate
  form: 'PostNewForm'
})(PostNew)
