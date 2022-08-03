import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert'


const ApplicationForm = ({client}) => {

    const navigate = useNavigate()
    const clientSchema = Yup.object().shape({
        name:Yup.string().min(3, "The name is to short").required("The name is required"),
        company:Yup.string().required("The name of company is required"),
        email:Yup.string().email().required("The email is required"),
        phone:Yup.number().integer().positive(),
        //notes:Yup.string().min(3, "The name is to short").required("The email is required"),
    })

    const handleSubmit = async (values)=>{
        try {
            const url="http://localhost:4000/clients"
            const response = await fetch(url, {
                method:"POST",
                body:JSON.stringify(values),
                headers:{
                    "Content-Type":"application/json"
                }                
            })
            const result = await response.json()                        
            navigate('/clients')
        } catch (error) {
            console.log(error)
        }
        //console.log(values)
    }
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center '>{client?.name ? "Edit client": "Add client"}</h1>    

        <Formik 
            initialValues={{
                name:client?.name ?? client?.name ?? "",
                company:client?.company ?? "",
                email:client?.email ?? "",
                phone:client?.phone ?? "",
                notes:client?.notes ?? "",  
            }}
            enableReinitialize={true}
            onSubmit={async(values, {resetForm})=>{
                await handleSubmit(values)
                resetForm()
            }}
            validationSchema={clientSchema}
        >
            {({errors, touched}) => {
                console.log(errors)
                return (
            
            <Form className='mt-10'>
                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='name'
                    >Name:</label>
                    <Field
                        id="name"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Name of client"
                        name="name"
                    />
                </div>
                {errors.name && touched.name?(
                    <Alert>{errors.name}</Alert>
                    ):                    null     }

                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor=''
                    >Company:</label>
                    <Field
                        id="company"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Name of company"
                        name="company"
                    />
                </div>
                {errors.company && touched.company?(
                       <Alert>{errors.company}</Alert>
                ): null }

                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor=''
                    >Email:</label>
                    <Field
                        id="email"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                {errors.email && touched.email?(
                       <Alert>{errors.email}</Alert>
                ): null }

                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor=''
                    >Phone:</label>
                    <Field
                        id="phone"
                        type="tel"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Phone number"
                        name="phone"
                    />
                </div>
                {errors.phone && touched.phone?(
                       <Alert>{errors.phone}</Alert>
                ): null }

                <div className='mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor=''
                    >Notes:</label>
                    <Field
                        as="textarea"
                        id="notes"                        
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Notes of client"
                        name="notes"
                    />
                </div>

                <input
                    type="submit"
                    value={client?.name ? "Edit client": "Add client"}
                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                />

            </Form>
            )}}
        </Formik>
    </div>
  )
}

ApplicationForm.defaultProps ={
    client:{}
  }
  

export default ApplicationForm