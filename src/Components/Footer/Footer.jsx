import { useEffect, useState } from "react";


const Footer = () => {
    const [socials, setSocials] = useState([]);


    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => {
             
                setSocials(data.user.social_handles);


            })
    }, [])
    return (
        <div>
            <footer className="footer py-6 my-4">
                <div className="container">

                    <p className="copyright text-xl">
                        © 2024 codewithsadee. All rights reserved.
                    </p>

                    {/* <ul className="social-list">

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-dribbble"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </li>

                    </ul> */}
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

                </div>
            </footer>
        </div>
    );
};

export default Footer;