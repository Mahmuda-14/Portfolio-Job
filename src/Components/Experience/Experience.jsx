import { useEffect, useState } from "react";


const Experience = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => {
             
                setExperience(data.user.timeline);

            })
    }, [])
    return (
        <div id="experience" className="container mb-10">
            <div className="text-center mb-8">
                <h2 className="h3" id="project-label">Experience..</h2>

            </div>
            <ul className="timeline timeline-vertical sm:left-0 md:-left-[25rem]  lg:-left-[47rem]">

                {
                    experience.map((exp, i) => (
                        <li key={i}>

                            <div className="timeline-end sm:w-[300px] md:w-[500px] lg:w-[991px] timeline-box  pt-[2.5rem] pb-[3.5rem] -mr-[47.75rem]">
                                <h2 className="h3 text-center">{exp.company_name}</h2>
                                <p className="h4 text-center">{exp.jobTitle}</p>
                                <p className=" text-center">{exp.summary}</p>

                                <ul className="ml-[141px] my-6 h6">
                                    {exp.bulletPoints.map((point, index) => (
                                        <li className="list-decimal" key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default Experience;