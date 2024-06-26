import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FaSearch, FaUser } from "react-icons/fa";
import logoImg from "../../assets/logo.png";
import "./header.css";
const Header = () => {
    const [search, setSearch] = useState("");
    const navItems = [
        {
            title: "HOME",
            slug: "home",
        },
        {
            title: "ABOUT",
            slug: "about",
        },
        {
            title: "TAKE ACTION",
            slug: "actions",
        },
        {
            title: "NEWS",
            slug: "news",
        },
        {
            title: "DOCTORS",
            slug: "doctors",
        },
        {
            title: "CONTACT",
            slug: "contact",
        }
    ]
    return (
        <header>
            <nav className='lg-navbar'>
                <div className="search-box">
                    <button className="btn-search">
                        <FaSearch />
                    </button>
                    <input
                        type="text"
                        className="input-search"
                        placeholder="Type to Search..."
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </div>
                <ul>
                    {navItems.slice(0, 3).map((item, i) => (
                        <li key={i}>
                            <Link
                                to={item.slug}
                                smooth={true}
                                spy={true}
                                duration={500}
                                offset={-100}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))
                    }
                    <li className='logo-li'>
                        <span>CORONA</span>
                        <div className='logo-wrapper'>
                            <img src={logoImg} alt="logo" />
                        </div>
                    </li>
                    {navItems.slice(3).map((item, i) => (
                        <li key={i}>
                            <Link
                                to={item.slug}
                                smooth={true}
                                spy={true}
                                offset={-100}
                                duration={500}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
                <div className="profile-op">
                    <button className="profile-btn">
                        <FaUser />
                    </button>
                </div>
            </nav>
        </header >
    )
}

export default Header