import logoImage from '../assets/amazonando-logo.png'
import { NavLink } from 'react-router-dom'

export default function Logo({ isHeader }) {
    return (
        <NavLink className="navbar-brand fs-3" to="/">
            <img className={`w-100 h-100 object-fit-cover ${isHeader ? "logo" : "logo-footer"}`} src={logoImage} alt="" />
        </NavLink>
    )
}