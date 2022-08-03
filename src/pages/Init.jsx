import React from 'react'
import { useState, useEffect } from 'react'
import Client from '../components/Client'


const Init = () => {
  
  const [clients, setClients] = useState([])

  useEffect( () => {
    const getClients = async () =>{
      try {
        const url="http://localhost:4000/clients"
        const response = await fetch(url)
        const result = await response.json()
        setClients(result)
      } catch (error) {
        console.log(error)        
      }
    }
    getClients()
  }, [])
  return (
    <div>
      <h1 className='text-4xl text-blue-900 font-bold'>Clients</h1>
      <p className='mt-3'>Admin your clients</p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-blue-800 text-white '>
          <tr >
            <th className='p-2'>Name</th>
            <th className='p-2'>Contact</th>
            <th className='p-2'>Company</th>
            <th className='p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
            {clients.map( client => (
                <Client 
                  key={client.id}
                  client={client}
                />
            ))}
        </tbody>

      </table>

    </div>
  )
}


export default Init