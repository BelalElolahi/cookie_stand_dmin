import axios from "axios"
import { useState } from "react"
import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginForm from "../components/LoginForm"  

const baseUrl = process.env.NEXT_PUBLIC_API_URL
const tokenUrl = baseUrl+'api/token/'

export default function Home() {

  const [token , setToken] = useState('');

  const submithandler = (e, credintials)=>{
    e.preventDefault();
    console.log(credintials)
    
    axios.post(tokenUrl ,credintials).then(res =>{
      setToken(res.data)
    })
    
  }
     
   if (!token) return <LoginForm submithandler={submithandler}></LoginForm>
  return (
    <CookieStandAdmin token={token}> </CookieStandAdmin>
  )
}