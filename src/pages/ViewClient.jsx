
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"



const ViewClient = () => {

    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
        
        const getClient = async () =>{
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
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
        {loading ? <Spinner /> : Object.keys(client).length=== 0 ? <p>There isn't results"</p> : (
            <>
                <h1 className='text-4xl text-blue-900 font-bold'>View Client:</h1>
                <p className='mt-3'>Information fo client</p>

                <p className="text-2xl text-gray-500 mt-10 ">
                    <span className="text-gray-800 uppercase font-bold">Client: </span>
                    {client.name}
                </p>
                <p className="text-2xl text-gray-500 mt-4 ">
                    <span className="text-gray-800 uppercase font-bold">Email: </span>
                    {client.email}
                </p>
                <p className="text-2xl text-gray-500 mt-4 ">
                    <span className="text-gray-800 uppercase font-bold">Phone: </span>
                    {client.phone}
                </p>
                <p className="text-2xl text-gray-500 mt-4 ">
                    <span className="text-gray-800 uppercase font-bold">Company: </span>
                    {client.company}
                </p>
                {client.notes && (
                    <p className="text-2xl text-gray-500 mt-4 ">
                        <span className="text-gray-800 uppercase font-bold">Notes: </span>
                        {client.notes}
                </p>
                )}
            </>
        )}
    </div>
  )
}

export default ViewClient