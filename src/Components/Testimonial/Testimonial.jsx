import { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Testimonial = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data.user.testimonials);

            })
    }, [])
    return (


        <div className="container mt-10 mb-[15.5rem]">

            <div className="text-center mb-8">
                <h2 className="h3" id="project-label">Some Of My Clients Review..</h2>

            </div>
            <Swiper
                spaceBetween={50}
                // slidesPerView={3}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    
                    1400: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 3
                    },
                  
                    640: {
                        slidesPerView: 1
                    },
                   
                    320: {
                        slidesPerView: 1
                    }, 
                    200: {
                        slidesPerView: 1
                    },
                    
                }}
                className=" top-[71px]"
            >
                {review.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className="p-10 lg:w-[426px] h-[460px]" style={{ backgroundColor: '#f5faf7' }}>

                            <div className=" text-center" >

                                <p className="h3" style={{ color: '#7cb798' }}>{review.name}</p>
                                <p className="h4 my-3" >{review.position}</p>

                                <h3 className="text-left">{review.review}</h3>


                            </div>

                            <figure className="flex items-center justify-center mt-9">
                                <img src={review.image.url} loading="lazy" alt="Web Design" className="w-[14rem] h-[13rem] rounded-full" />
                            </figure>


                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>




    );
};

export default Testimonial;


