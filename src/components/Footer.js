
import { SocialIcon } from "react-social-icons";
import FloatingButton from "./FloatingActionButton";

const Footer = () => {
    return (
        <>
            <footer className='footer mt-auto py-3 bg-black'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-m-6 col-s-12'>
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

                        <div className='col-lg-4 col-m-6 col-s-12'>
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

                        <div className='col-lg-4 col-m-6 col-s-12'>
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
                    <div className="row">
                    
                        <SocialIcon url="https://www.linkedin.com" bgColor="black" fgColor="white" />
                        <SocialIcon url="https://www.youtube.com" bgColor="black" fgColor="white"  />
                        <SocialIcon url="https://www.facebook.com" bgColor="black" fgColor="white" />
                        <SocialIcon url="https://www.twitter.com" bgColor="black" fgColor="white"/>
                        <SocialIcon url="https://www.instagram.com" bgColor="black" fgColor="white"/>
                    
                    </div>
                    {/* <div className="f-end">
                        <FloatingButton />
                    </div> */}
                </div>
            </footer>
        </>
    );
}

export default Footer;