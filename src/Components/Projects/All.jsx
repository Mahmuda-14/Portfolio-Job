

import { useEffect, useState } from "react";



const All = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => {
                setProjects(data.user.projects);
            })
    }, []);

    return (
        <>


            <div className="section project" aria-labelledby="project-label">
                <div className="container">
                    <div className="">
                        <a href="/" className="btn  text-[var(--cinnamon-satin)]">Go Back to Home</a>

                    </div>
                    <ul className="">
                        {projects.slice(2, 15).map((pro, i) => (
                            <li key={i} className=" mt-[7.75rem]">
                                <div className={`project-card project-card-${i % 2 === 0 ? '1' : '2'}`} style={{ backgroundColor: i % 2 === 0 ? '#f8f5fb' : '#f1f5fd' }}>
                                    <div className="card-content" data-reveal={i % 2 === 0 ? 'left' : 'right'}>
                                        <p className="card-tag" style={{ color: i % 2 === 0 ? '#a07cc5' : '#3f78e0' }}>Web Design</p>
                                        <h3 className="h3 card-title">{pro.title}</h3>
                                        <p className="card-text">{pro.techStack}</p>

                                        <a href={`/project/${pro.id}`} className="btn-text" style={{ color: i % 2 === 0 ? '#a07cc5' : '#3f78e0' }}>
                                            <span className="span">See Project</span>
                                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                        </a>
                                    </div>
                                    <figure className="card-banner" data-reveal={i % 2 === 0 ? 'right' : 'left'}>
                                        <img src={pro.image.url} width="650" height="370" loading="lazy" alt="Web Design" className="w-100" />
                                    </figure>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>



    );
};

export default All;
