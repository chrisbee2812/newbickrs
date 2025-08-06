import { NavLink } from 'react-router'

import '../../styles/headfoot/header.css'

export default function Header() {
return (
    
        <header>
            <nav className="navbar">
                <h1 className="logo">bickrs.com</h1>
                <ul className="nav-links">
                    <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                    <li><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
                    <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            
            <div className="styles-content">
                
                <div className="dm-toggle">
                    <p className="styles-description">Dark mode:</p>
                    <div className="toggle">
                        <p>OFF</p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <p>ON</p>
                    </div>
                </div>
                
            </div>
        </header>
    
        
    )
}