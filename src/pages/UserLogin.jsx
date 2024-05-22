import{ useState } from 'react'
import { ROUTES, USERLOGINCREDENTIALS } from '../constant'
import { useNavigate  } from "react-router-dom";
import {toast} from 'react-toastify';

const UserLogin = () => {
    const navigate  = useNavigate();
    const [credentials, setCredentials] = useState({
        email:"",
        password:""
    })


    const handleChange=(e)=>{
        const {value,name}=e.target
        const newCredentials={...credentials}
        newCredentials[name]=value
        setCredentials(newCredentials)
    }

    const handleLogin=(e)=>{
        e.preventDefault() 
        const isUserMatched=USERLOGINCREDENTIALS.some((el)=>el.email === credentials.email && el.password === credentials.password)
        
        if(isUserMatched){
            toast.success("Login successfull")
            navigate(ROUTES.SELECTEDGOALS);
        } else  toast.warning("please Provide right credentials")
    }
    
  return (
    <div className='h-[100vh] flex justify-center items-center  bg-lime-400'>
        <div className="flex flex-col justify-center px-6 py-12 lg:px-8" >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://traya.health/cdn/shop/files/TrayaLogoWhite_250x_73a5d7e5-bd9b-4089-8e81-80249caeac61.webp?v=1662534292&width=200" alt="Your Company"/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" onChange={handleChange}/>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    
                    </div>
                    <div className="mt-2">
                        <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" onChange={handleChange}/>
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login in</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserLogin