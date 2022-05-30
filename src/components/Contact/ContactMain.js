import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Contact from './ContactSection';


class ContactMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Contct" />
				{/* breadcrumb-end */}

                {/* contact-start */}
                <Contact />
				{/* contact-end */}

                
                
        	</main>
        );
    }
}

export default ContactMain;