import React from "react";
import { Link }from "react-router-dom"
interface Props {}
const Header:React.FC<Props> = () => {
  return ( 
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/item">Item</Link>
        </li>
      </ul>
    </header>
  )
}
export default Header;