import { useState } from "react";
export default function Register(){
    const[username,setUsername] = useState('');
    const[password,setpassword] = useState('');
    return (
        <div className="bg-blue-50 h-screen flex items-center">      
            <form className = "w-64 mx-auto mb-12" onSubmit={register}>
                <input value ={username} 
                onChange ={ev =>setUsername(ev.target.value) }  
                type ="text" 
                placeholder ="username"
                 className="block w-full rounded -sm p-2 mb-2"/>
                <input  value ={password} 
                onChange ={ev =>setpassword(ev.target.value) }  
                type ="password" 
                placeholder ="password" 
                 className="block w-full rounded-sm p-2 mb-2"></input>
            <button className ="bg-blue-500 text-white block w-full rounded -sm">Register </button>
            </form>
        </div>
    );
}
