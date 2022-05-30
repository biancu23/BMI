import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from 'react-datocms';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';


const WebinarSlider = (props) => {

    const webinars = props.props.allWebinars
    console.log(webinars);

    return (
        <section className="blog-area pt-120 fix" style={{ backgroundImage: `url(${'assets/img/blog/blog-bg-1.jpg'})` }}>
            <div className="container pb-120">
                <div className="blog-border">
                    <div className='row'>
                        <div className='col-xl-4'>
                            <div className="blog-text pt-60" data-aos="zoom-in">
                                <div className="section-title-wrapper pr-25 mb-50">
                                    <h5 className="section-subtitle mb-20">recent webinars</h5>
                                    <h2 className="section-title mb-35">Latest Webinars & Courses</h2>
                                    <p className="pr-50">Lorem ipsum onts persp unde omnis iste natus errluptatem acc usantium demque laudantium totam.</p>
                                </div>
                                <div className="kblog-arrow">
                                    <div className="blog-button-prev slide-prev"><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} /></i></div>
                                    <div className="blog-button-next slide-next"><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-8'>
                            <div className="blog-active swiper-container">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        autoplaydisableoninteraction={"false"}
                                        loop={true}
                                        breakpoints={{
                                            480: {
                                                slidesPerView: 1,
                                            },
                                            576: {
                                                slidesPerView: 1,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                            },
                                            1200: {
                                                slidesPerView: 2,
                                            },
                                            1400: {
                                                slidesPerView: 3
                                            }
                                        }}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: true
                                        }}
                                        navigation={{
                                            clickable: true,
                                            nextEl: '.blog-button-next',
                                            prevEl: '.blog-button-prev',
                                        }}
                                    // pagination={{ clickable: true }}
                                    // scrollbar={{ draggable: true }}

                                    >
                                        {webinars.map((webinar) => (
                                            <SwiperSlide key={webinar.id}>

                                                <div className="kblog swiper-slide">
                                                    <div className="kblog-img">
                                                        <Image data={webinar.banner.responsiveImage}
                                                            layout='responsive' />
                                                        <span>{webinar.fecha}</span>
                                                    </div>
                                                    <div className="kblog-text">
                                                        <div className="kblog-meta">
                                                            <a><i><FontAwesomeIcon icon={['fas', 'user-circle']} /></i> by {webinar.presentador.nombre}</a>
                                                            <a><i><FontAwesomeIcon icon={['fas', 'fa-dollar-sign']} /></i>{" " + webinar.costo}</a>
                                                        </div>
                                                        <h3 className="kblog-text-title mb-20">
                                                            <a>{webinar.titulo}</a>
                                                        </h3>
                                                        <div className="kblog-text-link">
                                                            <Link href={`/${webinar.slug}`}><a>Read more<i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
                                                        </div>
                                                    </div>
                                                </div>


                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default WebinarSlider;
