import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { createPost } from '../actions'

class PostNew extends Component {

  renderTextField = (field) => {
    return (
      <div>
        <label>{field.label}</label>
        <input 
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    )
  }

  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/')
      console.log('returned to / from postNew')
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field 
            label='Title'
            name='title'
            component={this.renderTextField}
          />
          <Field 
            label='Category'
            name='categories'
            component={this.renderTextField}
          />
          <Field 
            label='Content'
            name='content'
            component={this.renderTextField}
          />
          <button type='submit'>SUBMIT</button>
          <Link to='/'>Cancel</Link>
        </form>
      </Fragment>
    )
  }

}

function validate(values) {
  const errors = {}
  if (!values.title) errors.title = 'Please specify a title'
  if (!values.categories) errors.categories = 'Please specify a category'
  if (!values.content) errors.content = 'Please specify a content'
  return errors
}

export default reduxForm({
  validate,
  form: 'NewPostForm'
})(
  connect(null, { createPost })(PostNew)
)
