import LOGO from "../../assets/Brand.png";
import { Link } from "react-router-dom";
import ProfileMenu from "../ProfileMenu";
import { useUser } from "../../utils/UserContext";

export default function Navbar() {
  const { activeUser } = useUser();
  const isAdmin = activeUser && activeUser.role === "admin";

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="pt-2 w-20 md:w-32 ">
          <Link to="/">
            <img src={LOGO} alt="Logo" />
          </Link>
        </div>
        {/* MENU ITEMS */}
        <div className="hidden md:flex space-x-6">
          <Link to="/workout" className="font-bold text-orange-600 hover:text-orange-400">
            WORKOUTS
          </Link>
          <Link to="/directory" className="font-bold text-orange-600 hover:text-orange-400">
            DIRECTORY
          </Link>
          <Link to="/login" className="font-bold text-orange-600 hover:text-orange-400">
            ABOUT US
          </Link>
          <Link to={activeUser ? "/" : "/login"} className="font-bold text-orange-600 hover:text-orange-400">
            {!activeUser &&  "LOG IN"}
          </Link>
          <Link to="/signup" className="font-bold text-orange-600 hover:text-orange-400">
            {!activeUser && "SIGN UP"}
          </Link>
          {isAdmin && (
            <>
              <Link to="/addexercise" className="font-bold text-orange-600 hover:text-orange-400">
                ADD EXERCISE
              </Link>
              <Link to="/addworkout" className="font-bold text-orange-600 hover:text-orange-400">
                ADD WORKOUT
              </Link>
              <Link
                to={isAdmin ? "/dashboard/users" : activeUser && activeUser.role === "user" ? "/profile" : null}
                className="font-bold text-orange-600 hover:text-orange-400"
              >
                {isAdmin ? "DASHBOARD" : "MY PROFILE"}
              </Link>
            </>
          )}
        </div>
        {/* Profile Menu */}
        <ProfileMenu />
      </div>
    </nav>
  );
}
