import React, { useEffect, useState } from 'react'
import { getUsers } from '../../utils/customrHooks';
import { Avatar, Button } from '@material-tailwind/react';
import {Link} from "react-router-dom"

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [request, setRequests] = useState([]);
  useEffect(()=>{
    getUsers()
    .then(res=>setUsers(res))
    .catch(err=>console.log("from AdminDashboard useEffect", err))
  }, [])
  console.log("users",users)
  return (
    <section className='p-6 '>
      <h1 className='text-white'>dashboard</h1>
      <div className='user'>
        {users.map(user=>(
          <div className='text-white flex gap-4'>
            <Avatar src={user.avatar} />
            <div className='text-white'>{user.username}</div>
            <div className='text-white'>{user.email}</div>
          </div>
        ))}
      </div>
      <Link to="/dashboard/requests"><Button>Request Page</Button></Link>
    </section>
  )
}
