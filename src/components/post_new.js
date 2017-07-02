import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createPost } from '../actions/index'

class PostNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta
    // same as --->   const { meta: { touched, error } } = field
    const className = `form-group ${touched && error? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          {...field.input}
          type="text"
          placeholder={field.placeholder}
        />
        <p style={{color:'red'}}>{touched? error: ""}</p>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    })
    // added a anonymous CALLBACK as second argument into createPost function
  }

  render() {
    const { handleSubmit } = this.props;
    // handleSubmit can be added from the props which have become available from
    // redux-form that has been 'connected' to the PostNew class. What this
    // handleSubmit does is check whether everything in the form is valid & ok
    // to be submitted, only then it will go ahead and call the
    // callback 'this.onSubmit.bind(this)' in the below form.
    // .bind(this) is done to make sure 'this' is also available in the onSubmit
    // function.

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    );
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
})(
  connect(null, { createPost })(PostNew)
)
