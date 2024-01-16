import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getRequests } from "../../utils/customrHooks";
export default function RequestPage() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    getRequests()
      .then((res) => setRequests(res.data))
      .catch((err) => console.log("getRequests/RequestPage", err));
  }, []);
  console.log(requests);
  return (
    <section className="p-6">
      <div className="user card form-container w-full m-auto bg-gray-100 p-6 rounded-t-xl border-t-8 border-t-deep-orange-500">
        <div className="header border-deep-orange-500 border-l-8 mb-6 text-left p-2 text-black">
          <h1 className="text-2xl font-bold italic">Requests</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Personal Info</th>
                <th className="py-2 px-4 border-b text-left">Request</th>
                <th className="py-2 px-4 border-b text-left">Date</th>
                <th className="py-2 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">
                    {request.user.username}
                  </td>
                  <td className="py-2 px-4 text-xs border-b italic flex flex-col">
                    <span>Height: {request.height}</span>
                    <span>Weight: {request.weight}</span>
                    <span>Age: {request.age}</span>
                  </td>
                  <td className="py-2 px-4 border-b">{request.request}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(request.created_at).toLocaleDateString("en-de", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-2 px-4 border-b ">
                    <Link to={`/user/${request.user._id}/addworkout`}><Button className="text-xs px-2 py-2 mr-2">Create Plan</Button></Link>
                    <Button className="text-xs px-2 py-2">Remove Request</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/dashboard/users">
        <Button>Users</Button>
      </Link>
      <Link to="/dashboard/requests">
        <Button>ADMIN Log Out</Button>
      </Link>
      <Link to="/dashboard/requests">
        <Button>Create Admin Account</Button>
      </Link>
      <Link to="/workout"><Button>Workouts</Button></Link>
      <Link to="/directory"><Button>Exercises</Button></Link>
    </section>
  );
}
