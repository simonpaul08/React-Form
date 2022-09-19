import React, { useState } from 'react'

const LoginForm = () => {

    const [formValue, setFormValues] = useState({ firstName: '', lastName: '', email: '' })
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValue.firstName && formValue.lastName && formValue.email){
            setValid(true)
        }
        setSubmitted(true)
    }

  return (
    <div className='login-form'>
        {submitted && valid ? <div className='success'>Form Submitted</div> : null}
        <form>
            <div className="form-control">
                <input type="text" placeholder='First name' value={formValue.firstName} 
                onChange={(e) => setFormValues({...formValue, firstName: e.target.value})} required/>
                {submitted && !formValue.firstName ? <p className='warning'>Please enter first name</p> : null}
            </div>

            <div className="form-control">
                <input type="text" placeholder='Last name' value={formValue.lastName}
                onChange={(e) => setFormValues({...formValue, lastName: e.target.value})} required/>
                {submitted && !formValue.lastName ? <p className='warning'>Please enter first name</p>: null}
            </div>

            <div className="form-control">
                <input type="email" placeholder='Email' value={formValue.email}
                onChange={(e) => setFormValues({...formValue, email: e.target.value})} required/>
                {submitted && !formValue.email ? <p className='warning'>Please enter first name</p> : null}
            </div>

            <div className="submit-btn-container">
                <button type='submit' className='submitForm' onClick={handleSubmit}>Register</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm