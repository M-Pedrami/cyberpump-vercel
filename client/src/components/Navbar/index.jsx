import LOGO from "../../assets/Brand.png";
import { Link } from "react-router-dom";
import ProfileMenu from "../ProfileMenu";
export default function Navbar() {
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
          <Link to="#" className= "font-bold text-orange-600 hover:text-orange-400">WORKOUTS</Link>
          <Link to="/login" className= "font-bold text-orange-600 hover:text-orange-400">ABOUT US</Link>
          <Link to="/login" className= "font-bold text-orange-600 hover:text-orange-400">LOG IN</Link>
          <Link to="/signup" className= "font-bold text-orange-600 hover:text-orange-400">SIGN UP</Link>
        </div>
        {/* Profile Menu */}
        <ProfileMenu/>
      </div>
    </nav>
  );
}
