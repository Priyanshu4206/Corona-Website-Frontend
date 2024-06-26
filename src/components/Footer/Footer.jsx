import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import worldMap from "../../assets/countryMap.png";
import "./footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <div className="wrapper">
                    <h3>RESOURCES</h3>
                    <ul>
                        <li><a href="#">What we do</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Travel Advice</a></li>
                        <li><a href="#">Protection</a></li>
                        <li><a href="#">Care</a></li>
                    </ul>
                </div>
                <div className="wrapper">
                    <h3>ABOUT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error, voluptate vero repellat fuga eos, porro inventore saepe dolores minus perferendis quo veritatis illo maiores. Placeat nostrum reiciendis, debitis in ut consectetur quam voluptate magnam vero dolores, quis unde consequatur.</p>
                </div>
                <div className="wrapper">
                    <h3>CONTACT US</h3>
                    <ul>
                        <li> <FaLocationDot /><span className='list-content'>Making this the first time</span></li>
                        <li> <IoCall /><span className='list-content'>Call: +01 1234567890</span></li>
                        <li> <MdEmail /><span className='list-content'>Email: demo@gmail.com</span></li>
                    </ul>
                </div>
                <div className="wrapper">
                    <h3>COUNTRYS</h3>
                    <img src={worldMap} alt="World Map" />
                </div>
            </div>
            <div className="copyrights">
                @2024 All Rights Reserved Design by Priyanshu Agarwal
            </div>
        </footer>
    )
}

export default Footer