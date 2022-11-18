
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <>
            <footer className='footer mt-auto py-3 bg-black'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-3 d-block">
                            <div className="row">
                                <img src="Logo.svg" height='100' width="100" alt="logo"/>
                            </div>
                            <div className="row ps-5">
                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                <SocialIcon url="https://www.facebook.com" bgColor="black" fgColor="white" />
                                <SocialIcon url="https://www.twitter.com" bgColor="black" fgColor="white"/>
                            </div>
                        </div>
                        <div className='col-lg-3 col-m-6 col-s-12'>
                            <div className='row text-light'>
                                <strong><span>Our Offices</span></strong>
                            </div>
                            <div className='row text-muted'>
                                <br/>
                            </div>
                            <div className='row text-muted'>
                                <span cla>Paphos, Cyprus</span>
                            </div>
                            <div className='row text-muted'>
                                <span>Virgina, USA</span>
                            </div>
                            <div className='row text-muted'>
                                <span>Boston, USA</span>
                            </div>
                        </div>

                        <div className='col-lg-3 col-m-6 col-s-12'>
                            <div className='row text-light'>
                                <strong><span>Services</span></strong>
                            </div>
                            <div className='row text-muted'>
                                <br/>
                            </div>
                            <div className='row text-muted'>
                                <span>Distributed Development Team</span>
                            </div>
                            <div className='row text-muted'>
                                <span>Global R&D Center</span>
                            </div>
                            <div className='row text-muted'>
                                <span>Dedicated Development Team</span>
                            </div>
                        </div>

                        <div className='col-lg-3 col-m-6 col-s-12'>
                            <div className='row text-light'>
                                <strong><span>Company</span></strong>
                            </div>
                            <div className='row text-muted'>
                                <br/>
                            </div>
                            <div className='row text-muted'>
                                <span >Our Expertise</span>
                            </div>
                            <div className='row text-muted'>
                                <span>Cases</span>
                            </div>
                            <div className='row text-muted'>
                                <span>Blog</span>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;