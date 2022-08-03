import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ApplicationForm from "../components/ApplicationForm"



const EditClient = () => {
  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(()=>{
      
      const getClient = async () =>{
          try {
              const url = `http://localhost:4000/clients/${id}`
              const response = await fetch(url)
              const result = await response.json()                    
              setClient(result)
          } catch (error) {
              
          }
          setLoading(!loading)
      }
      getClient()
  }
  ,[])
  
    return (
      <div>
        <h1 className='text-4xl text-blue-900 font-bold'>Edit Client</h1>
        <p className='mt-3'>Use this form to edit client</p>
        <ApplicationForm client={client}/>
      </div>
    )
}

export default EditClient