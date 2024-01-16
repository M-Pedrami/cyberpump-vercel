import React, { useEffect, useState } from "react";
import { getUsers } from "../../utils/customrHooks";
import { Avatar, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [request, setRequests] = useState([]);
  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res))
      .catch((err) => console.log("from AdminDashboard useEffect", err));
  }, []);
  console.log("users", users);
  return (
    <section className="p-6 ">
      <div className="user card form-container w-full m-auto bg-blue-gray-50 p-6 rounded-t-xl border-t-8 border-t-deep-orange-500">
        <div className="header border-deep-orange-500 border-l-8 mb-6 text-left p-2 text-black">
          <h1 className="text-2xl font-bold italic">Users</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Avatar</th>
                <th className="py-2 px-4 border-b text-left">Username</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">Member Since</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">
                    <Avatar src={user.avatar} />
                  </td>
                  <td className="py-2 px-4 border-b font-bold italic">
                    {user.username}
                  </td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(user.created_at).toLocaleDateString("en-de",{
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/dashboard/requests">
        <Button>Request Page</Button>
      </Link>
    </section>
  );
}
