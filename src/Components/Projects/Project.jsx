import { useEffect, useState } from "react";

const Project = () => {


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProjects(data.user.projects);

            })
    }, [])




    return (
        <div>
            <div id="project" className="section project" aria-labelledby="project-label">
                <div className="container">

                    <div className="title-wrapper" data-reveal="top">

                        <div>
                            <h2 className="h2 section-title" id="project-label">Latest Projects</h2>

                            <p className="section-text">
                                Check out some of my latest projects with creative ideas.
                            </p>
                        </div>


                        <a href="/all" className="btn text-[var(--cinnamon-satin)]">See All Projects</a>
                       

                    </div>

                    <ul className="">
                       
                        {
                            projects.slice(0,2).map((pro, i) => (
                                <li key={i} className=" my-11">
                                    {i % 2 === 0 ? (
                                        <div className="project-card project-card-1" style={{ backgroundColor: '#f8f5fb' }}>
                                            <div className="card-content" data-reveal="left">
                                                <p className="card-tag" style={{ color: '#a07cc5' }}>Web Design</p>
                                                <h3 className="h3 card-title">{pro.title}</h3>
                                                <p className="card-text">
                                                    {pro.techStack}
                                                </p>
                                                <a href="#" className="btn-text" style={{ color: '#a07cc5' }}>
                                                    <span className="span">See Project</span>
                                                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                                </a>
                                            </div>
                                            <figure className="card-banner" data-reveal="right">
                                                <img src={pro.image.url} width="650" height="370" loading="lazy" alt="Web Design" className="w-100" />
                                            </figure>
                                        </div>
                                    ) : (
                                        <div className="project-card project-card-2" style={{ backgroundColor: '#f1f5fd' }}>

                                            <div className="card-content" data-reveal="right">

                                                <p className=" card-tag" style={{ color: '#3f78e0' }}>Web Design</p>

                                                <h3 className="h3 card-title">{pro.title}</h3>

                                                <p className="card-text">
                                                {pro.techStack}
                                                </p>

                                                <a href="#" className="btn-text" style={{ color: '#3f78e0' }}>
                                                    <span className="span">See Project</span>

                                                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                                </a>

                                            </div>

                                            <figure className="card-banner" data-reveal="left">
                                                <img src={pro.image.url} width="600" height="367" loading="lazy" alt="Web Design"
                                                    className="w-100" />
                                            </figure>

                                        </div>
                                    )}
                                </li>
                            ))
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Project;