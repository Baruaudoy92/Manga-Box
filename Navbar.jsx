import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css";

//react icons
import { AiOutlineMenu, AiOutlinePoweroff, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // toggle menu
    const toggleMenu = ()  => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.addEventListener("scroll", handleScroll);

            }
        }
    }, [])

    // navItems here
    const navItems = [
        {link: "Home", path: "/" },
        {link: "Mangas", path: "/mangas" },
        {link: "About", path: "/about" },
        {link: "Shop", path: "/shop" },
        {link: "Blog", path: "/blog" },
        {link: "Sell Your Book", path: "/admin/dashboard" },
    ]
  return (
    <header>
        <nav className='navbar'>
            <div>
                {/* logo */}
                <Link to="/" className='logo'><AiOutlinePoweroff/>  MANGAS </Link>

                { /* nav items for large device */ }
                <ul className='nav'>
                    {
                       navItems.map(({link, path}) => <Link key={path} to={path} className="navItems">{link}</Link>)
                    }
                </ul>         
            </div>
        </nav>
    </header>
  )
}

export default Navbar;