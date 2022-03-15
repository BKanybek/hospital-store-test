import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-conainer-form'>
            <h1 className='content-h1'> Contact</h1>
            <div className='content-container'></div>
            <div className='container-details'>
                <div className="details">
                    <h3> Contact info </h3>
                    <p> E-mail: Westbek@gmail.com</p>
                    <p> Mobile: +9960770010016 </p>
                    <p> web: Kanybek.com </p>
                </div>		
            </div>
		        <div className="Contact-Form">

                        <div className='container-content'>
                            <div className="input-fields">
                                <input type="text" className="input" placeholder="Your Name *"/>
                                <input type="text" className="input" placeholder="Your Emaill *"/>
                                <input type="text" className="input" placeholder="Your Phone *"/>
                                
                            </div>
                        <div className='container-msg'>
                            <div className="msg">
                                <textarea placeholder="Massage *"></textarea>
                                
                            </div>
                            <a href="/">
                                <div>
                                    <button> Send message </button>
                                </div>
                            </a>
                        </div>
                        </div>
            
		</div>	
	</div>
    );
};

export default ContactUs;