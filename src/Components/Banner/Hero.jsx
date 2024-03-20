/* eslint-disable react/no-unescaped-entities */
import '../NavBar/Nav.css'
// import ban1 from '../../assets/images/hero-banner.jpg'
import ban2 from '../../assets/images/hero-shape.svg'

const Hero = () => {
    return (
        <div>
            <div className="section hero" >
                <div className="container">

                    <div className="hero-banner">
                        {/* <img src={ban1} width="560" height="540" alt="Julia" className="w-100"
                            data-reveal="top" /> */}
                        <img src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k"  alt="Julia" className=" w-100"/>

                        <img src={ban2} width="203" height="91" alt="250+ Projects Done" className="shape"
                            data-reveal="top" data-reveal-delay="0.25s" />
                    </div>

                    <div className="">

                        <h1 className="h1 hero-title" data-reveal="top" data-reveal-delay="0.5s">
                            I'm User Interface Designer & Developer.
                        </h1>

                        <p className="section-text" data-reveal="top" data-reveal-delay="0.75s">
                            Hello! I'm John Doe, a freelance user interface designer & developer based in London. I’m very passionate
                            about the work that I do.
                        </p>

                        <div className="btn-wrapper">
                            <a href="#" className="btn bg-[var(--cinnamon-satin)] text-white">See My Works</a>

                            <a href="#" className="btn text-[var(--cinnamon-satin)]">Contact Me</a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;