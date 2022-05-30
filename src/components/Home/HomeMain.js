import React from 'react';
import Video from '../Elements/Video/VideoSection';
import About from './AboutSection';
import Cta from './CtaSection';
import Service from './ServiceSection';
import dynamic from 'next/dynamic';
const HomeSlider = dynamic(() => import('../Elements/Slider/HomeSliderSection'), {
    ssr: false
  })

const Brand = dynamic(() => import('../Elements/Brand/BrandSection'), {
    ssr: false
})
import Trust from './TrustSection';
import Quality from './QualitySection';

const WebinarSlider = dynamic(() => import('../Elements/Slider/WebinarSliderSection'), {
    ssr: false
})

const HomeMain = (props) => {
	return ( <main>
		{/* slider-start */}
		<HomeSlider />
		{/* slider-end */}

		{/* service-start */}
		<Service />
		{/* service-end */}

		{/* cta-start */}
		<Cta />
		{/* cta-end */}

		{/* about-start */}
		<About />
		{/* about-end */}

		{/* brand-start */}
		<Brand />
		{/* brand-end */}

		{/* trust-start */}
		<Trust />
		{/* trust-end */}

		{/* blog-start */}
		<WebinarSlider props={props.props.data}/>
		{/* blog-end */}

		{/* quality-start */}
		<Quality />
		{/* quality-end */}

	</main> );
}
 
export default HomeMain;
