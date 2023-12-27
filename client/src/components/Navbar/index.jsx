import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='Header'>
      <div className="logo">
        <h1>CYB3RF1T</h1>
      </div>
      <ul className='NavItems' >
        <li>SIGN UP</li>
        <li>LOG IN</li>
        <li>WORKOUTS</li>
        <li>MY PROFILE</li>
      </ul>
    </nav>
  )
}
