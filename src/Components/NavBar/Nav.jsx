import './Nav.css'
import img1 from '../../assets/images/logo-dark.svg'
import img2 from '../../assets/images/logo-light.svg'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { IoMenu } from "react-icons/io5";
const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [socials, setSocials] = useState([]);


    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSocials(data.user.social_handles);


            })
    }, [])


    return (
        <div className={`header ${scrolled ? 'active' : ''}`} >
            <div className="container">

                <img src={img1} width="64" height="24" alt="Julia home" />


                <nav className="navbar xs:hidden sm:hidden md:hidden">

                    <div className="navbar-top">

                        <img src={img2} width="64" height="24" alt="Julia home" />

                        <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                        </button>



                    </div>

                    <ul className="navbar-list">

                        <li>

                            <Link className='navbar-link'><HashLink smooth to="#/">Home</HashLink></Link>
                        </li>

                        <li>

                            <Link className=' navbar-link'><HashLink smooth to="#about">About</HashLink></Link>
                        </li>

                        <li>

                            <Link className=' navbar-link'><HashLink smooth to="#project">Projects</HashLink></Link>
                        </li>

                        <li>

                            <Link className=' navbar-link'><HashLink smooth to="#experience">Experience</HashLink></Link>
                        </li>

                        <li>

                            <Link className=' navbar-link'><HashLink smooth to="#contact">Contact</HashLink></Link>
                        </li>

                    </ul>

                    <ul className="social-list">

                        {
                            socials.map((social, i) => (
                                <li key={i}>
                                    <a href="#" className="social-link">
                                        <img src={social.image.url} className='w-[30px]' alt="" />

                                    </a>
                                </li>
                            ))
                        }



                    </ul>

                </nav>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                        <IoMenu name="close-outline" aria-hidden="true"></IoMenu>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" >

                        <li>

                            <Link className='navbar-link'><HashLink smooth to="#/">Home</HashLink></Link>
                        </li>

                        <li>

                            <Link className=' navbar-link'><HashLink smooth to="#about">About</HashLink></Link>
                        </li>

                        <li>

                            <Link className=' navbar-link'><HashLink smooth to="#project">Projects</HashLink></Link>
                        </li>

                        <li>

                            <Link className=' navbar-link'><HashLink smooth to="#experience">Experience</HashLink></Link>
                        </li>

                        <li>

                            <Link className=' navbar-link'><HashLink smooth to="#contact">Contact</HashLink></Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Nav;



