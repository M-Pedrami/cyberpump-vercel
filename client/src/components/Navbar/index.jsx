import LOGO from "../../assets/Brand.png";
import { Link } from "react-router-dom";
import ProfileMenu from "../ProfileMenu";
import { useUser } from "../../utils/UserContext";

export default function Navbar() {
  const { activeUser } = useUser();
  const isAdmin = activeUser && activeUser.role === "admin";
  const isUser = activeUser && activeUser.role === "user";

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
          {isUser && (
            <Link
              to="/workout"
              className="font-bold text-orange-600 hover:text-orange-400"
            >
              WORKOUTS
            </Link>
          )}
          {isUser && (
            <Link
              to="/directory"
              className="font-bold text-orange-600 hover:text-orange-400"
            >
              EXERCISES
            </Link>
          )}
          {isUser && (
            <Link
              to="/profile"
              className="font-bold text-orange-600 hover:text-orange-400"
            >
              MY PROFILE
            </Link>
          )}
          {!activeUser && (
            <Link
              to="/login"
              className="font-bold text-orange-600 hover:text-orange-400"
            >
              ABOUT US
            </Link>
          )}
          <Link
            to={activeUser ? "/" : "/login"}
            className="font-bold text-orange-600 hover:text-orange-400"
          >
            {!activeUser && "LOG IN"}
          </Link>
          <Link
            to="/signup"
            className="font-bold text-orange-600 hover:text-orange-400"
          >
            {!activeUser && "SIGN UP"}
          </Link>
          {isAdmin && (
            <>
              <Link
                to="/addexercise"
                className="font-bold text-orange-600 hover:text-orange-400"
              >
                ADD EXERCISE
              </Link>
              <Link
                to="/addworkout"
                className="font-bold text-orange-600 hover:text-orange-400"
              >
                ADD WORKOUT
              </Link>
              <Link
                to="/dashboard/users"
                className="font-bold text-orange-600 hover:text-orange-400"
              >
                DASHBOARD
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
