import {Outlet, Link, useLocation} from 'react-router-dom'


export const Layout = () => {
    const location = useLocation()
    const urlCurrent = location.pathname
    
    return (
        <div className='md:flex md:min-h-screen '>
            <div className='md:w-1/4 bg-blue-800 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'> CRM </h2>
                <nav className='mt-10'>
                    <Link 
                    className= {`${urlCurrent==="/clients"? 'text-blue-300': 'text-white'} 'text-2xl block mt-2 hover:text-blue-300`}
                    to="/clients">
                        Clients
                    </Link>
                    <Link 
                    className= {`${urlCurrent==="/clients/add"? 'text-blue-300': 'text-white'} 'text-2xl block mt-2 hover:text-blue-300`}
                    to="/clients/add">
                        Add Client
                    </Link>

                </nav>
            </div>
            <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet/>
            </div>


        </div>
    )
}

export default Layout