import React from 'react'
import ApplicationForm from '../components/ApplicationForm'

function AddClient() {
  return (
    <div>
      <h1 className='text-4xl text-blue-900 font-bold'>Client New</h1>
      <p className='mt-3'>Fill next field to register a new client</p>
      <ApplicationForm></ApplicationForm>
    </div>
  )
}

export default AddClient