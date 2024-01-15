import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { getRequests } from "../../utils/customrHooks";
export default function RequestPage() {
  const [requests, setRequests] = useState([]);
  useEffect(()=>{
    getRequests()
    .then(res=>console.log(res))
    .catch(err=>console.log("getRequests/RequestPage", err))
  },[])
  return (
    <section className='p-6'>
      <h1 className='text-white text-3xl'>Requests</h1>
      <div className="requests ">


      </div>
      <Link to="/dashboard/users"><Button>Users</Button></Link>
    </section>
  )
}
