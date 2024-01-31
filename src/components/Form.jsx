import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Form = () => {
    const validationSchema = yup.object().shape({
        fullName: yup.string(). required('The full name is required'),
        email: yup.string().email().required('The email is required'),
        age: yup.number().positive().integer().required().min(18),
        password: yup.string().required().min(4).max(20),
        confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], "Passwords do not match")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = () => {
        console.log(data)
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h1>A simple form</h1>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" {...register('fullName')} placeholder="Full name" /> <br /> 
          {errors.fullName && <p>{errors.fullName?.message}</p>}<br />


          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" {...register('email')} placeholder="Email" /> <br /> 
          {errors.email && <p>{errors.email?.message}</p>}<br />
  

          <label htmlFor="age">Age: </label>
          <input type="number" name="age" id="age" {...register('age')} placeholder="Age" /> <br /> 
          {errors.age && <p>{errors.age?.message}</p>}<br />


          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" {...register('password')} placeholder="Password" /> <br /> 
          {errors.password && <p>{errors.password?.message}</p>}<br />


          <label htmlFor="confirmPassword">Password: </label>
          <input type="password" name="confirmPassword" id="confirmPassword" {...register('confirmPassword')} placeholder="Confirm Password" /> <br /> 
          {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}<br />

          <button type="submit" >Submit</button>
      </form>  
    </div>
  )

}

export default Form