import React, { useState } from 'react'

export default function LoginForm({submithandler}) {
 const [credintials ,setCredintials] = useState({username:'',password:''})
// if user is logged show main commponent 
//
    
    const userNameChangeHandler =(e)=>{
        setCredintials({username:e.target.value})

    }
    const passwordChangeHandler =(e)=>{
        setCredintials({...credintials , password:e.target.value})
        console.log(credintials)

    }
    return (
        <div className='max-w-4xl mx-auto' >
            <form method='post' className='flex flex-col items-center bg-green-300 border border-black h-72 -6 rounded-2xl' onSubmit={e =>submithandler(e,credintials)} >
                <label>User Name</label>
                <input type="text" name="username" className='w-9/12 my-3 bg-gray-200' placeholder={'User Name'} onChange={userNameChangeHandler}></input>
                <label >Password</label>
                <input type="text" name="password" className='w-9/12 my-3 bg-gray-200' placeholder={'Password'} onChange={passwordChangeHandler}></input>
                <button className='py-4 bg-green-400 p-80 mt-7' type='submit'>Sign In</button>
            </form>
            
        </div>
    )
}