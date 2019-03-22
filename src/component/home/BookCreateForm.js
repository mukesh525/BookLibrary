import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './home.scss'

const BookCreateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Book Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Book Name"
          />
        </div>
      </div>
  
      
    
      <div>
        <label>Description</label>
        <div>
          <Field name="desc" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(BookCreateForm)

