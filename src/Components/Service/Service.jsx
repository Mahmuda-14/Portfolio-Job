import { useEffect, useState } from "react";

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => {
         
                setServices(data.user.services);

            })
    }, [])
    
    return (
       

            <div className="section project" aria-labelledby="project-label">
                <div className="container">



                    <div className="text-center mb-8">
                        <h2 className="h2" id="project-label">Services</h2>

                        <p className="section-text">
                            Check out Below What I Do.. .
                        </p>
                    </div>

                   <ul className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 py-10">

                        {
                            services.map((ser, i) => (
                                <li key={i} className=" w-[627px] h-[590px] rounded-2xl">
                                    {i % 2 === 0 ? (
                                        <div className="" style={{ backgroundColor: '#f5faf7' }}>

                                            <div className="card-content p-[4.5rem]" >

                                                <p className="h3 card-tag card-title" style={{ color: '#7cb798' }}>{ser.name}</p>

                                                <h3 className="">{ser.desc}</h3>

                                                {/* <p className="card-text">
                                                    Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque
                                                    id ligula felis.
                                                </p> */}

                                                {/* <a href="#" className="btn-text" style={{ color: '#7cb798' }}>
                                            <span className="span">See Project</span>
    
                                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                        </a> */}

                                            </div>

                                            <figure className="card-banner" >
                                                <img src={ser.image.url} loading="lazy" alt="Web Design"
                                                    className=" w-[64rem] h-[24.5rem]" />
                                            </figure>

                                        </div>) : (
                                        <div className="" style={{ backgroundColor: '#fcf4f6' }}>

                                            <div className="card-content p-[4.5rem]" data-reveal="left">

                                                <p className="h3 card-tag card-title" style={{ color: '#d16b86' }}>{ser.name}</p>

                                                <h3 className="">{ser.desc}</h3>
                                              

                                            </div>

                                            <figure className="card-banner" data-reveal="right">
                                                <img src={ser.image.url} loading="lazy" alt="Mobile Design" className="w-[64rem] h-[24.5rem]" />
                                            </figure>

                                        </div>

                                    )}
                                </li>
                            ))
                        }


                    </ul>

                </div>
            </div>
      
    );
};

export default Service;