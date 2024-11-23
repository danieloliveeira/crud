import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <h2>
           <Link>Estoque</Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/new'} className='new-btn'>New Product</Link>
            </li>
            <li>
                <Link to={'/edit'} className='new-btn'>Edit Product</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar