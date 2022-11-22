
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <>
            <footer className='footer mt-auto py-3 bg-black'>
                <div className='container'>
                    <div className='row'>

                        <div className="col-lg-3 d-block">
                            <div className="row">
                                <img src="Logo.svg" height='150' width="250" alt="logo"/>
                            </div>
                            <div className="row ps-5" style={{"margin-left": "20px"}}>
                                <SocialIcon url="https://www.youtube.com" bgColor="black" fgColor="white"  style={{ height: 40, width: 40 }}/>
                                <SocialIcon url="https://www.facebook.com" bgColor="black" fgColor="white" style={{ height: 40, width: 40 }}/>
                                <SocialIcon url="https://www.twitter.com" bgColor="black" fgColor="white" style={{ height: 40, width: 40 }}/>
                            </div>
                        </div>

                        <div className='col-lg-3 col-m-6 col-s-12'>
                            <div className='row text-light'>
                                <strong><span style={{"font-size": "25px"}}>Our Offices</span></strong>
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
                                <strong><span style={{"font-size": "25px"}}>Services</span></strong>
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
                                <strong><span style={{"font-size": "25px"}}>Company</span></strong>
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