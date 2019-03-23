import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './home.scss'


const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
     <div>
       {type === "textarea" &&
        <textarea className="form-control" {...input} placeholder={label} type={type}/>
      }
      {type !== "textarea" &&
        <input className="form-control" {...input} placeholder={label} type={type}/>
      }

      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}


    </div>
  </div>
)





const BookCreateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
     <div className='container'>
      <div className="form-group row">
        <label for="inputbookname" className="col-md-4 col-form-label mr-2"> Book Name</label>
        <div class="col-md-6">
        <Field
            name="name"
            label="Book Name"
            component={renderField}
            validate={[ required, maxLength15 ]}
            type="text"
            placeholder="Book Name"
           
          />
        </div>
      </div>
     
      <div className="form-group row">
        <label for="exampleInputEmail1" className="col-md-4 col-form-label mr-2"> Book Quantity</label>
        <div class="col-md-6">
        <Field
            name="quantity"
            label="Book Quantity"
            component={renderField}
            type="number"
            placeholder="Quantity"
            className="form-control"
            validate={[ required ]}
            warn={tooOld}
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="exampleInputEmail1" className="col-md-4 col-form-label mr-2"> Book Author</label>
        <div class="col-md-6">
        <Field
            name="author"
            type="text"
            label="Book Author"
            component={renderField}
            placeholder="Book Author"
            className="form-control"
            validate={[ required ]}
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="exampleInputEmail1" className="col-md-4 col-form-label mr-2"> Book Description</label>
        <div class="col-xs-5 col-md-6">
        <Field
            name="desc"
            type="textarea"
            label="Book Description"
            component={renderField}
            placeholder="Book Description"
            className="form-control"
            validate={[ required ]}
          />
        </div>
      </div>


      <div class="form-group row ">
        <div class="col-md-12">
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
     </div>
    
     
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(BookCreateForm)

