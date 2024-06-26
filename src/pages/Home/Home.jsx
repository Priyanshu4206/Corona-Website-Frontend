import React, { useState } from 'react';
import "./home.css";
import bgImg from "../../assets/heroBg.png";
import mainVirusImg from "../../assets/mainVirus.png";
import subVirusImg from "../../assets/subVirus.png";
import symptomsImg from "../../assets/symptomsImg.png";
import actionsBg from "../../assets/actionsBg.png";
import boyImg from "../../assets/maskedBoyIllustration.png";
import handWashImg from "../../assets/handWashIllustration.png";
import stayHomeImg from "../../assets/homeIllustration.png";
import virusImg from "../../assets/virusImg.png";
import case1 from "../../assets/case1.png";
import case2 from "../../assets/case2.png";
import case3 from "../../assets/case3.png";
import profile1 from "../../assets/profile-1.png";
import profile2 from "../../assets/profile-2.png";
import doctorsBg from "../../assets/doctorsBg.png";
import { ImQuotesLeft } from "react-icons/im";
const Home = () => {
    const doctors = [
        {
            dp: profile1,
            name: "Dr. Golap Den",
            sayings: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis nobis dicta reiciendis unde at laboriosam quae earum ex placeat error officia voluptatem, impedit ab voluptate aperiam nostrum, deleniti cum, qui inventore asperiores hic ut itaque ipsam. Ad, dolorum quis."
        },
        {
            dp: profile2,
            name: "Dr. Rashmika",
            sayings: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis nobis dicta reiciendis unde at laboriosam quae earum ex placeat error officia voluptatem, impedit ab voluptate aperiam nostrum, deleniti cum, qui inventore asperiores hic ut itaque ipsam. Ad, dolorum quis."
        }
    ]
    const news = [
        {
            coverImg: case1,
            link: "/",
            title: "Case 01",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a! Optio, aliquam mollitia illum natus sequi dolor repudiandae impedit rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a! Optio."
        },
        {
            coverImg: case2,
            link: "/",
            title: "Case 02",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a! Optio, aliquam mollitia illum natus sequi dolor repudiandae impedit rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a! Optio."
        },
        {
            coverImg: case3,
            link: "/",
            title: "Case 03",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a! Optio, aliquam mollitia illum natus sequi dolor repudiandae impedit rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a! Optio."
        }
    ]
    const actions = [
        {
            illustration: boyImg,
            title: "Wear Mask",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, rem nemo. Cum illum libero cupiditate magni excepturi reiciendis est earum.",
            link: "/"
        },
        {
            illustration: handWashImg,
            title: "Wash Your Hands",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, rem nemo. Cum illum libero cupiditate magni excepturi reiciendis est earum.",
            link: "/"
        },
        {
            illustration: stayHomeImg,
            title: "Stay Home",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, rem nemo. Cum illum libero cupiditate magni excepturi reiciendis est earum.",
            link: "/"
        }
    ]
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Subscribed Successfully !!")
    }
    return (
        <main>
            <section className='hero-section' id="home" style={{ backgroundImage: `url(${bgImg})` }}>
                <h1>Care early <br />Coronavirus</h1>
                <div className="btn-container">
                    <button className="btn read-btn">
                        Read More
                    </button>
                    <button className="btn about-btn">
                        About us
                    </button>
                </div>
            </section>
            <section id="about" className="about-section">
                <div className="floating-container">
                    <div className="about-content">
                        <h2>About Corona Virus</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi, quia nemo doloribus tempora earum blanditiis veritatis porro eum maxime possimus, est, magnam provident officia quae voluptate voluptatem perspiciatis molestiae?
                        </p>
                        <button className='btn'>Read More</button>
                    </div>
                    <div className="img-wrapper">
                        <img src={mainVirusImg} alt="Virus" style={{ maxWidth: "250px" }} className='big-virus' />
                        <img src={subVirusImg} alt="Small Virus" style={{ maxWidth: "75px" }} className='small-virus' />
                    </div>
                </div>
                <div className="content-container">
                    <div className="img-wrapper">
                        <img src={symptomsImg} alt="Symptoms" />
                    </div>
                    <div className="content-wrapper">
                        <h2>CORONA VIRUS <br /> WHAT IT IS?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptatibus fuga placeat nostrum quae. Ducimus vitae, explicabo ullam tenetur vel laboriosam iure commodi facere impedit aperiam eius nesciunt reiciendis corporis!</p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </section>
            <section id="actions" className="actions-section">
                <h2>HOW TO PROTECT YOURSELF</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum temporibus modi corporis quidem adipisci?</p>
                <div className="actions-container" style={{ backgroundImage: `url(${actionsBg})` }}>
                    {
                        actions.map((action, index) => (
                            <div className="action-wrapper" key={index}>
                                <div className="action-content">
                                    <div className="illustration">
                                        <img src={action.illustration} alt={action.title} />
                                    </div>
                                    <h3>{action.title}</h3>
                                    <p>{action.description}</p>
                                </div>
                                <button className="btn">READ MORE</button>
                            </div>
                        ))
                    }


                </div>
            </section>
            <section id="news" className="news-section">
                <h2>CORONA VIRUS CASES</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo numquam accusantium commodi amet? Possimus ducimus atque, ipsam exercitationem, deleniti est modi recusandae numquam excepturi libero provident sit? Deleniti, qui!</p>
                <div className="news-container">
                    {news.map((item, index) => (
                        <div className="news-wrapper" key={index}>
                            <div className="img-wrapper">
                                <button className="floating-btn btn">Read More</button>
                                <img src={item.coverImg} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <p className="news-content">
                                {item.description}
                            </p>
                            <img src={virusImg} alt="virus-img" className="illustrator" />
                        </div>
                    ))}
                </div>
            </section>
            <section id="doctors" className="doctors-section">
                <div className="bg bg1"><img src={doctorsBg} alt="" /></div>
                <h2>WHAT DOCTORS SAY...</h2>
                <div className="doctors-container">
                    {
                        doctors.map((doc, index) => (
                            <div className="doctors-wrapper" key={index}>
                                <div className="profile-img">
                                    <img src={doc.dp} alt={doc.name + "'s Dp"} />
                                </div>
                                <h3>{doc.name}</h3>
                                <p className="sayings">
                                    {doc.sayings}
                                </p>
                                <ImQuotesLeft />
                            </div>
                        ))
                    }
                    <div className="bg bg2"><img src={doctorsBg} alt="" /></div>
                </div>
            </section>
            <section id="contact" className="newsletter-section">
                <h2>GET EVERY UPDATE...</h2>
                <form
                    className='newsletter-form'
                    onSubmit={handleSubmit}
                    style={{ backgroundImage: `url(${actionsBg})` }}
                >
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Your Email...'
                    />
                    <button className="btn" type='submit'>SUBSCRIBE NOW</button>
                </form>
            </section>
        </main>
    )
}

export default Home