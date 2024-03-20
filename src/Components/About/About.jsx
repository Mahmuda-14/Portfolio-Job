import { useEffect, useState } from 'react';
// import ab1 from '../../assets/images/icon-1.svg'
// import ab2 from '../../assets/images/icon-2.svg'
// import ab3 from '../../assets/images/icon-3.svg'
// import ab4 from '../../assets/images/icon-4.svg'
// import '../NavBar/Nav.css'
const About = () => {

    const [about, setAbout] = useState({});
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAbout(data.user.about); 
                setSkills(data.user.skills); 
            })
    }, [])
    return (
        <div className='' >
            <div id="about" className="section about" >
                <div className="container">

                    <div className="wrapper">

                        <div data-reveal="left">
                            <h2 className="h2 section-title">What I Do?</h2>

                            <p className="section-text section-title">
                                I am {about.name}. A {about.title}.
                            </p>
                            <p className="section-text">

                            </p>
                            <p className="section-text">
                                {about.subTitle}.
                            </p>
                            <p className="section-text">
                                {about.description}.
                            </p>
                        </div>

                        <ul className="progress-list grid grid-cols-3 gap-10">

                            {skills.map((skill, index) => (

                                <li key={index} className="progress-item">

                                    <div className="label-wrapper">
                                        <p>{skill.name}</p>


                                        <span className="span">{skill.percentage}%</span>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-fill" style={{ width: `${skill.percentage}%`, backgroundColor: '#c7b1dd' }} ></div>
                                    </div>

                                </li>
                            ))}



                        </ul>


                    </div>



                    <ul className="grid-list">
                        {skills.map((skill, index) => (
                            <li key={index}>
                                <div className="about-card">
                                    <div className="card-icon">
                                        <img src={skill.image.url} width="52" height="52" loading="lazy" alt={skill.name} />
                                    </div>
                                    <h3 className="h4 items-center font-bold text-xl my-4 ">{skill.name}</h3>
                                    <p className="text-center">{skill.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default About;


